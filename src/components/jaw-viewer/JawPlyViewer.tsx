import { Suspense, useMemo } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, Center } from '@react-three/drei';
import { PLYLoader } from 'three-stdlib';
import * as THREE from 'three';

import upperJawUrl from '@/assets/3d-models/Upper Jaw .ply?url';
import lowerJawUrl from '@/assets/3d-models/Lower Jaw.ply?url';
import biteUrl from '@/assets/3d-models/Bite.ply?url';

const STONE_COLOR = new THREE.Color(0xd4d0c8);

function PlyMesh({ url, monochrome }: { url: string; monochrome: boolean }) {
  const rawGeo = useLoader(PLYLoader, url);

  const geometry = useMemo(() => {
    const geo = rawGeo.clone();
    geo.center();
    geo.computeVertexNormals();

    // Enhance colors: boost brightness and whiten teeth areas
    const colors = geo.attributes.color;
    if (colors && !monochrome) {
      for (let i = 0; i < colors.count; i++) {
        let r = colors.getX(i), g = colors.getY(i), b = colors.getZ(i);
        // Brighten overall + push toward white
        r = Math.min(1, r * 1.4 + 0.15);
        g = Math.min(1, g * 1.4 + 0.15);
        b = Math.min(1, b * 1.4 + 0.15);
        colors.setXYZ(i, r, g, b);
      }
      colors.needsUpdate = true;
    }

    return geo;
  }, [rawGeo, monochrome]);

  if (monochrome) {
    return (
      <mesh geometry={geometry} scale={0.055} rotation={[0.1, -0.4, 0]}>
        <meshPhysicalMaterial
          color={STONE_COLOR}
          roughness={0.45}
          metalness={0.0}
          side={THREE.DoubleSide}
          clearcoat={0.1}
          clearcoatRoughness={0.3}
          reflectivity={0.3}
          envMapIntensity={0.4}
          ior={1.3}
        />
      </mesh>
    );
  }

  return (
    <mesh geometry={geometry} scale={0.055} rotation={[0.1, -0.4, 0]}>
      <meshPhysicalMaterial
        vertexColors
        roughness={0.4}
        metalness={0.0}
        side={THREE.DoubleSide}
        clearcoat={0.15}
        clearcoatRoughness={0.4}
        reflectivity={0.3}
        envMapIntensity={0.5}
        ior={1.3}
      />
    </mesh>
  );
}

interface JawPlyViewerProps {
  jaw: 'upper' | 'lower' | 'bite';
  monochrome?: boolean;
}

export default function JawPlyViewer({ jaw, monochrome = false }: JawPlyViewerProps) {
  const modelUrl = jaw === 'upper' ? upperJawUrl : jaw === 'lower' ? lowerJawUrl : biteUrl;

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 35 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 8, 5]} intensity={0.9} color="#ffffff" />
        <directionalLight position={[-5, 5, -5]} intensity={0.4} color="#f0f5ff" />
        <directionalLight position={[0, -3, 5]} intensity={0.3} />
        <pointLight position={[0, 10, 0]} intensity={0.2} color="#ffffff" />
        <Environment preset="apartment" background={false} />

        <Suspense fallback={null}>
          <Center>
            <PlyMesh url={modelUrl} monochrome={monochrome} />
          </Center>
        </Suspense>

        <OrbitControls
          makeDefault
          enablePan
          enableZoom
          enableRotate
          rotateSpeed={1.5}
          zoomSpeed={1.0}
          panSpeed={0.8}
          enableDamping
          dampingFactor={0.08}
          minDistance={3}
          maxDistance={25}
          minPolarAngle={0.1}
          maxPolarAngle={Math.PI - 0.1}
        />
      </Canvas>
    </div>
  );
}
