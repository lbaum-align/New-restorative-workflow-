import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface UndercutHighlightsProps {
  visible: boolean;
}

// Undercuts are on the same tooth and an adjacent tooth
const S = 0.055;
const REGIONS = [
  { center: [27, -2, -3] as [number, number, number], radius: 2.5 }, // lower axial wall of prep tooth
  { center: [31, -1, -7] as [number, number, number], radius: 2.0 }, // adjacent interproximal
];

export default function UndercutHighlights({ visible }: UndercutHighlightsProps) {
  const mat1Ref = useRef<THREE.MeshBasicMaterial>(null);
  const mat2Ref = useRef<THREE.MeshBasicMaterial>(null);
  const startTimeRef = useRef<number | null>(null);

  useFrame(() => {
    if (!visible) {
      startTimeRef.current = null;
      return;
    }
    if (startTimeRef.current === null) startTimeRef.current = performance.now();
    const elapsed = performance.now() - startTimeRef.current;
    const pulse = 0.3 + Math.sin(elapsed / 600) * 0.2 + 0.2;
    if (mat1Ref.current) mat1Ref.current.opacity = pulse;
    if (mat2Ref.current) mat2Ref.current.opacity = pulse * 0.85;
  });

  if (!visible) return null;

  return (
    <group>
      {REGIONS.map((region, i) => (
        <mesh
          key={i}
          position={[region.center[0] * S, region.center[1] * S, region.center[2] * S]}
        >
          <sphereGeometry args={[region.radius * S, 16, 16]} />
          <meshBasicMaterial
            ref={i === 0 ? mat1Ref : mat2Ref}
            color="#D43F58"
            transparent
            opacity={0.5}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}
