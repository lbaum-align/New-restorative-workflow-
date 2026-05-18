import { useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import { PLYLoader } from 'three-stdlib';
import * as THREE from 'three';

const STONE_COLOR = new THREE.Color(0xd4d0c8);
const STONE_SHEEN = new THREE.Color(0xe8e8e0);

interface JawMeshProps {
  url: string;
  opacity?: number;
  visible?: boolean;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  monochrome?: boolean;
}

export default function JawMesh({
  url,
  opacity = 1,
  visible = true,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 0.055,
  monochrome = false,
}: JawMeshProps) {
  const rawGeometry = useLoader(PLYLoader, url);

  const geometry = useMemo(() => {
    const geo = rawGeometry.clone();
    geo.center();
    geo.computeVertexNormals();
    return geo;
  }, [rawGeometry]);

  if (!visible) return null;

  const isTransparent = opacity < 0.99;

  if (monochrome) {
    return (
      <mesh
        geometry={geometry}
        scale={scale}
        position={position}
        rotation={rotation}
        renderOrder={isTransparent ? 1 : 0}
      >
        <meshPhysicalMaterial
          color={STONE_COLOR}
          roughness={0.45}
          metalness={0.0}
          side={THREE.DoubleSide}
          clearcoat={0.2}
          clearcoatRoughness={0.3}
          reflectivity={0.4}
          envMapIntensity={0.5}
          ior={1.4}
          sheen={0.1}
          sheenRoughness={0.5}
          sheenColor={STONE_SHEEN}
          transparent={isTransparent}
          opacity={opacity}
          depthWrite={!isTransparent}
        />
      </mesh>
    );
  }

  return (
    <mesh
      geometry={geometry}
      scale={scale}
      position={position}
      rotation={rotation}
      renderOrder={isTransparent ? 1 : 0}
    >
      <meshPhysicalMaterial
        vertexColors
        roughness={0.3}
        metalness={0.0}
        side={THREE.DoubleSide}
        clearcoat={0.4}
        clearcoatRoughness={0.15}
        reflectivity={0.6}
        envMapIntensity={0.8}
        ior={1.5}
        sheen={0.2}
        sheenRoughness={0.35}
        sheenColor={new THREE.Color(0xffffff)}
        specularIntensity={0.5}
        specularColor={new THREE.Color(0xffffff)}
        transparent={isTransparent}
        opacity={opacity}
        depthWrite={!isTransparent}
      />
    </mesh>
  );
}
