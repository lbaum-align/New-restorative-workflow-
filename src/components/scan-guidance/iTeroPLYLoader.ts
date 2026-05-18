import * as THREE from 'three';

/**
 * Custom PLY loader that correctly handles iTero-exported PLY files.
 * iTero files have a non-standard face format with an extra "object" int
 * before the vertex_indices list, and use signed int for face indices.
 */
export function loadiTeroPLY(url: string): Promise<THREE.BufferGeometry> {
  return fetch(url)
    .then((res) => res.arrayBuffer())
    .then((buffer) => parsePLY(buffer));
}

interface PLYHeader {
  format: string;
  vertexCount: number;
  faceCount: number;
  vertexProperties: PropertyDef[];
  faceProperties: PropertyDef[];
  headerLength: number;
  hasAlpha: boolean;
}

interface PropertyDef {
  name: string;
  type: 'scalar' | 'list';
  scalarType?: string;
  countType?: string;
  valueType?: string;
}

function parsePLY(buffer: ArrayBuffer): THREE.BufferGeometry {
  const header = parseHeader(buffer);
  if (header.format === 'binary_little_endian') {
    return parseBinary(buffer, header);
  }
  throw new Error('Only binary_little_endian PLY files supported');
}

function parseHeader(buffer: ArrayBuffer): PLYHeader {
  const decoder = new TextDecoder();
  const headerText = decoder.decode(new Uint8Array(buffer, 0, Math.min(4096, buffer.byteLength)));
  const headerEnd = headerText.indexOf('end_header\n');
  if (headerEnd === -1) throw new Error('Invalid PLY: no end_header');
  const headerLength = headerEnd + 'end_header\n'.length;

  const lines = headerText.substring(0, headerEnd).split('\n');
  let format = '';
  let vertexCount = 0;
  let faceCount = 0;
  let currentElement = '';
  const vertexProperties: PropertyDef[] = [];
  const faceProperties: PropertyDef[] = [];
  let hasAlpha = false;

  for (const line of lines) {
    const parts = line.trim().split(/\s+/);
    if (parts[0] === 'format') {
      format = parts[1];
    } else if (parts[0] === 'element') {
      currentElement = parts[1];
      if (currentElement === 'vertex') vertexCount = parseInt(parts[2]);
      if (currentElement === 'face') faceCount = parseInt(parts[2]);
    } else if (parts[0] === 'property') {
      const props = currentElement === 'vertex' ? vertexProperties : faceProperties;
      if (parts[1] === 'list') {
        props.push({ name: parts[4], type: 'list', countType: parts[2], valueType: parts[3] });
      } else {
        props.push({ name: parts[2], type: 'scalar', scalarType: parts[1] });
        if (parts[2] === 'alpha') hasAlpha = true;
      }
    }
  }

  return { format, vertexCount, faceCount, vertexProperties, faceProperties, headerLength, hasAlpha };
}

function typeSize(t: string): number {
  switch (t) {
    case 'char': case 'uchar': case 'int8': case 'uint8': return 1;
    case 'short': case 'ushort': case 'int16': case 'uint16': return 2;
    case 'int': case 'uint': case 'float': case 'int32': case 'uint32': case 'float32': return 4;
    case 'double': case 'float64': return 8;
    default: return 4;
  }
}

function parseBinary(buffer: ArrayBuffer, header: PLYHeader): THREE.BufferGeometry {
  const view = new DataView(buffer);
  let offset = header.headerLength;

  // Read vertices
  const positions = new Float32Array(header.vertexCount * 3);
  const colors = new Uint8Array(header.vertexCount * 3);
  let hasColors = false;

  for (let i = 0; i < header.vertexCount; i++) {
    for (const prop of header.vertexProperties) {
      if (prop.type === 'scalar') {
        const size = typeSize(prop.scalarType!);
        let value: number;
        switch (prop.scalarType) {
          case 'float': case 'float32':
            value = view.getFloat32(offset, true); break;
          case 'double': case 'float64':
            value = view.getFloat64(offset, true); break;
          case 'uchar': case 'uint8':
            value = view.getUint8(offset); break;
          case 'char': case 'int8':
            value = view.getInt8(offset); break;
          case 'short': case 'int16':
            value = view.getInt16(offset, true); break;
          case 'ushort': case 'uint16':
            value = view.getUint16(offset, true); break;
          case 'int': case 'int32':
            value = view.getInt32(offset, true); break;
          case 'uint': case 'uint32':
            value = view.getUint32(offset, true); break;
          default:
            value = view.getFloat32(offset, true);
        }

        if (prop.name === 'x') positions[i * 3] = value;
        else if (prop.name === 'y') positions[i * 3 + 1] = value;
        else if (prop.name === 'z') positions[i * 3 + 2] = value;
        else if (prop.name === 'red') { colors[i * 3] = value; hasColors = true; }
        else if (prop.name === 'green') { colors[i * 3 + 1] = value; }
        else if (prop.name === 'blue') { colors[i * 3 + 2] = value; }

        offset += size;
      }
    }
  }

  // Read faces
  const indices: number[] = [];

  for (let i = 0; i < header.faceCount; i++) {
    for (const prop of header.faceProperties) {
      if (prop.type === 'scalar') {
        // Skip scalar face properties (like "object")
        offset += typeSize(prop.scalarType!);
      } else if (prop.type === 'list') {
        const countSize = typeSize(prop.countType!);
        const valueSize = typeSize(prop.valueType!);
        let count: number;
        if (countSize === 1) count = view.getUint8(offset);
        else if (countSize === 2) count = view.getUint16(offset, true);
        else count = view.getUint32(offset, true);
        offset += countSize;

        const faceIndices: number[] = [];
        for (let j = 0; j < count; j++) {
          let idx: number;
          // Read as unsigned regardless of declared type to handle iTero's signed int indices
          if (valueSize === 4) idx = view.getUint32(offset, true);
          else if (valueSize === 2) idx = view.getUint16(offset, true);
          else idx = view.getUint8(offset);
          faceIndices.push(idx);
          offset += valueSize;
        }

        if (prop.name === 'vertex_indices' || prop.name === 'vertex_index') {
          if (faceIndices.length === 3) {
            indices.push(faceIndices[0], faceIndices[1], faceIndices[2]);
          } else if (faceIndices.length === 4) {
            indices.push(faceIndices[0], faceIndices[1], faceIndices[2]);
            indices.push(faceIndices[0], faceIndices[2], faceIndices[3]);
          }
        }
      }
    }
  }

  // Build geometry
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  if (hasColors) {
    const colorFloat = new Float32Array(header.vertexCount * 3);
    for (let i = 0; i < header.vertexCount * 3; i++) {
      colorFloat[i] = colors[i] / 255;
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colorFloat, 3));
  }

  if (indices.length > 0) {
    if (header.vertexCount > 65535) {
      geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(indices), 1));
    } else {
      geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(indices), 1));
    }
  }

  geometry.computeVertexNormals();
  return geometry;
}
