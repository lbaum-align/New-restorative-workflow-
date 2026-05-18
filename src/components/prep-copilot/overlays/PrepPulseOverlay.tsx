import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PrepPulseOverlayProps {
  visible: boolean;
}

// Pulse around the same tooth as crown/margin
const S = 0.055;
const TOOTH_CENTER: [number, number, number] = [29 * S, 5 * S, -5 * S];
const PULSE_RADIUS = 5 * S;

export default function PrepPulseOverlay({ visible }: PrepPulseOverlayProps) {
  const matRef = useRef<THREE.MeshBasicMaterial>(null);
  const startTimeRef = useRef<number | null>(null);

  useFrame(() => {
    if (!visible || !matRef.current) {
      startTimeRef.current = null;
      return;
    }
    if (startTimeRef.current === null) startTimeRef.current = performance.now();
    const elapsed = performance.now() - startTimeRef.current;
    matRef.current.opacity = Math.max(0, Math.sin(elapsed / 400) * 0.06 + 0.08);
  });

  if (!visible) return null;

  return (
    <mesh position={TOOTH_CENTER}>
      <sphereGeometry args={[PULSE_RADIUS, 24, 24]} />
      <meshBasicMaterial
        ref={matRef}
        color="#009ACE"
        transparent
        opacity={0.08}
        depthWrite={false}
      />
    </mesh>
  );
}
