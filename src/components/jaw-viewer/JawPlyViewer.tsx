import { Suspense, useMemo, useRef, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Center } from '@react-three/drei';
import { PLYLoader } from 'three-stdlib';
import * as THREE from 'three';

import upperJawUrl from '@/assets/3d-models/Upper Jaw .ply?url';
import lowerJawUrl from '@/assets/3d-models/Lower Jaw.ply?url';
import biteUrl from '@/assets/3d-models/Bite.ply?url';
import hdrUrl from '@/assets/lebombo_1k.hdr?url';

const STONE_COLOR = new THREE.Color(0xe8e4dc);
const STONE_SHEEN = new THREE.Color(0xf2f0ec);

const CLIP_EDGE_COLOR = new THREE.Color(0xc8beb4);

// 10 steps: each step reveals more of the model along the Z axis
// Step 10 = full model (no clipping), Step 1 = only front sliver visible
// The clip plane moves from front to back
const CLIP_POSITIONS = [-4.0, -3.2, -2.4, -1.6, -0.8, 0.0, 0.8, 1.6, 2.4, 3.2];
const TOTAL_STEPS = 10;

function ClippedPlyMesh({
  url,
  monochrome,
  revealStep,
}: {
  url: string;
  monochrome: boolean;
  revealStep: number;
}) {
  const rawGeo = useLoader(PLYLoader, url);
  const meshRef = useRef<THREE.Mesh>(null);
  const clipPlaneRef = useRef(new THREE.Plane(new THREE.Vector3(0, 0, -1), 5));
  const animatedConstant = useRef(5);

  const clipPositions = CLIP_POSITIONS;

  // Target clip position based on revealStep (1-10)
  // Step 10 = no clip (constant = large positive), Step 1 = most clipped
  const targetConstant = revealStep >= TOTAL_STEPS ? 100 : clipPositions[revealStep - 1];

  useFrame((_, delta) => {
    const speed = 4.0;
    const diff = targetConstant - animatedConstant.current;
    if (Math.abs(diff) > 0.01) {
      animatedConstant.current += diff * Math.min(speed * delta * 3, 1);
      clipPlaneRef.current.constant = animatedConstant.current;
    }
  });

  useEffect(() => {
    if (revealStep >= TOTAL_STEPS) {
      animatedConstant.current = 100;
      clipPlaneRef.current.constant = 100;
    }
  }, []);

  const geometry = useMemo(() => {
    const geo = rawGeo.clone();
    geo.center();
    geo.computeVertexNormals();

    const colors = geo.attributes.color;
    if (colors && !monochrome) {
      for (let i = 0; i < colors.count; i++) {
        let r = colors.getX(i), g = colors.getY(i), b = colors.getZ(i);
        r = Math.min(1, r * 1.4 + 0.15);
        g = Math.min(1, g * 1.4 + 0.15);
        b = Math.min(1, b * 1.4 + 0.15);
        colors.setXYZ(i, r, g, b);
      }
      colors.needsUpdate = true;
    }

    return geo;
  }, [rawGeo, monochrome]);

  const clippingPlanes = useMemo(() => [clipPlaneRef.current], []);

  if (monochrome) {
    return (
      <mesh ref={meshRef} geometry={geometry} scale={0.055} rotation={[0.1, -0.4, 0]}>
        <meshPhysicalMaterial
          key="stone-mat-clip"
          vertexColors={false}
          color={STONE_COLOR}
          roughness={0.75}
          metalness={0.0}
          side={THREE.DoubleSide}
          clearcoat={0.05}
          clearcoatRoughness={0.8}
          reflectivity={0.15}
          envMapIntensity={0.3}
          ior={1.3}
          sheen={0.15}
          sheenRoughness={0.8}
          sheenColor={STONE_SHEEN}
          clippingPlanes={clippingPlanes}
          clipShadows
        />
      </mesh>
    );
  }

  return (
    <mesh ref={meshRef} geometry={geometry} scale={0.055} rotation={[0.1, -0.4, 0]}>
      <meshPhysicalMaterial
        key="color-mat-clip"
        vertexColors
        roughness={0.4}
        metalness={0.0}
        side={THREE.DoubleSide}
        clearcoat={0.15}
        clearcoatRoughness={0.4}
        reflectivity={0.3}
        envMapIntensity={0.5}
        ior={1.3}
        clippingPlanes={clippingPlanes}
        clipShadows
      />
    </mesh>
  );
}

// Cross-section cap to show the "cut" surface
function ClipCap({
  revealStep,
}: {
  revealStep: number;
}) {
  const capRef = useRef<THREE.Mesh>(null);
  const clipPositions = CLIP_POSITIONS;
  const animatedZ = useRef(0);

  const targetZ = revealStep >= TOTAL_STEPS ? -999 : clipPositions[revealStep - 1];

  useFrame((_, delta) => {
    if (!capRef.current) return;
    const diff = targetZ - animatedZ.current;
    if (Math.abs(diff) > 0.01) {
      animatedZ.current += diff * Math.min(4.0 * delta * 3, 1);
    }
    capRef.current.position.z = animatedZ.current * 0.055;
    capRef.current.visible = revealStep < TOTAL_STEPS;
  });

  if (revealStep >= TOTAL_STEPS) return null;

  return (
    <mesh ref={capRef} rotation={[0.1, -0.4, 0]}>
      <planeGeometry args={[0.6, 0.4]} />
      <meshPhysicalMaterial
        color={CLIP_EDGE_COLOR}
        roughness={0.9}
        metalness={0}
        side={THREE.DoubleSide}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

interface JawPlyViewerProps {
  jaw: 'upper' | 'lower' | 'bite';
  monochrome?: boolean;
  revealStep?: number; // 1-10, where 10 = full model shown
}

export default function JawPlyViewer({ jaw, monochrome = false, revealStep = 10 }: JawPlyViewerProps) {
  const modelUrl = jaw === 'upper' ? upperJawUrl : jaw === 'lower' ? lowerJawUrl : biteUrl;

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 35 }}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.7,
          localClippingEnabled: true,
        }}
        dpr={[1, 2]}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 8, 5]} intensity={0.9} color="#ffffff" />
        <directionalLight position={[-5, 5, -5]} intensity={0.4} color="#f0f5ff" />
        <directionalLight position={[0, -3, 5]} intensity={0.3} />
        <pointLight position={[0, 10, 0]} intensity={0.2} color="#ffffff" />
        <Environment files={hdrUrl} background={false} />

        <Suspense fallback={null}>
          <Center>
            <ClippedPlyMesh url={modelUrl} monochrome={monochrome} revealStep={revealStep} />
            <ClipCap revealStep={revealStep} />
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
