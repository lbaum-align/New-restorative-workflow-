import React, { useRef, useMemo, useEffect, createContext, useContext } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, Center, Environment } from '@react-three/drei';
import { PLYLoader } from 'three-stdlib';
import * as THREE from 'three';
import upperJawModel from '@/assets/3d-models/Upper Jaw .ply?url';

const BASE_ROT_X = Math.PI * 0.6;
const BASE_ROT_Z = Math.PI;

export interface ModelBounds {
  minX: number; maxX: number;
  minY: number; maxY: number;
  minZ: number; maxZ: number;
  centerX: number; centerY: number; centerZ: number;
}

// Context so overlay children can access model bounds and geometry
export const ModelContext = createContext<{
  bounds: ModelBounds;
  geometry: THREE.BufferGeometry;
} | null>(null);

export function useModelContext() {
  return useContext(ModelContext);
}

interface CopilotSceneProps {
  onCameraChange?: (theta: number, phi: number) => void;
  children?: React.ReactNode;
}

export default function CopilotScene({ onCameraChange, children }: CopilotSceneProps) {
  const geometry = useLoader(PLYLoader, upperJawModel);
  const groupRef = useRef<THREE.Group>(null);
  const controlsRef = useRef<any>(null);

  const { enhancedGeo, bounds } = useMemo(() => {
    const geo = geometry.clone();
    geo.center();
    geo.computeVertexNormals();

    const pos = geo.attributes.position;
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    let minZ = Infinity, maxZ = -Infinity;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
      minX = Math.min(minX, x); maxX = Math.max(maxX, x);
      minY = Math.min(minY, y); maxY = Math.max(maxY, y);
      minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z);
    }

    const hasColors = geo.attributes.color !== undefined;
    const col = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      let r: number, g: number, b: number;
      if (hasColors) {
        r = geo.attributes.color.getX(i);
        g = geo.attributes.color.getY(i);
        b = geo.attributes.color.getZ(i);
        const avg = (r + g + b) / 3;
        r = ((r - avg) * 1.4 + avg) * 1.35 * 0.65;
        g = ((g - avg) * 1.4 + avg) * 1.35 * 0.65;
        b = ((b - avg) * 1.4 + avg) * 1.35 * 0.65;
      } else {
        r = 0.9; g = 0.85; b = 0.8;
      }
      col[i * 3] = Math.min(1, Math.max(0, r));
      col[i * 3 + 1] = Math.min(1, Math.max(0, g));
      col[i * 3 + 2] = Math.min(1, Math.max(0, b));
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    const b: ModelBounds = {
      minX, maxX, minY, maxY, minZ, maxZ,
      centerX: (minX + maxX) / 2,
      centerY: (minY + maxY) / 2,
      centerZ: (minZ + maxZ) / 2,
    };

    return { enhancedGeo: geo, bounds: b };
  }, [geometry]);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.set(BASE_ROT_X, 0, BASE_ROT_Z);
    }
  }, []);

  useFrame(() => {
    if (controlsRef.current && onCameraChange) {
      const theta = controlsRef.current.getAzimuthalAngle();
      const phi = controlsRef.current.getPolarAngle();
      onCameraChange(theta, phi);
    }
  });

  const modelCtx = useMemo(() => ({ bounds, geometry: enhancedGeo }), [bounds, enhancedGeo]);

  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 8, 5]} intensity={0.8} castShadow color="#f5f0e8" />
      <directionalLight position={[-5, 5, -5]} intensity={0.35} color="#e8eef5" />
      <directionalLight position={[0, -3, 5]} intensity={0.25} />
      <directionalLight position={[0, 5, -5]} intensity={0.2} />
      <pointLight position={[0, 10, 0]} intensity={0.2} color="#fff5e6" />
      <pointLight position={[3, 0, 3]} intensity={0.15} color="#e6f0ff" />
      <Environment preset="apartment" background={false} />

      <Center>
        <group ref={groupRef}>
          <mesh geometry={enhancedGeo} scale={0.055}>
            <meshPhysicalMaterial
              vertexColors={true}
              color={new THREE.Color(0xc8c8c0)}
              roughness={0.35}
              metalness={0.02}
              side={THREE.DoubleSide}
              clearcoat={0.4}
              clearcoatRoughness={0.25}
              reflectivity={0.5}
              envMapIntensity={0.6}
              ior={1.45}
              sheen={0.1}
              sheenRoughness={0.4}
              sheenColor={new THREE.Color(0xe8e8e0)}
            />
          </mesh>
          {/* 3D overlays render inside the same group as the model */}
          <ModelContext.Provider value={modelCtx}>
            {children}
          </ModelContext.Provider>
        </group>
      </Center>

      <OrbitControls
        ref={controlsRef}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        mouseButtons={{
          LEFT: THREE.MOUSE.ROTATE,
          MIDDLE: THREE.MOUSE.DOLLY,
          RIGHT: THREE.MOUSE.PAN,
        }}
        rotateSpeed={1.5}
        zoomSpeed={1.2}
        panSpeed={0.8}
        enableDamping={true}
        dampingFactor={0.08}
        minDistance={0.5}
        maxDistance={10}
        minPolarAngle={0.1}
        maxPolarAngle={Math.PI - 0.1}
        target={[0, 0, 0]}
        makeDefault
      />
    </>
  );
}
