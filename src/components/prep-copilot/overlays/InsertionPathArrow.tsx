import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface InsertionPathArrowProps {
  visible: boolean;
}

// Insertion arrow goes through the same tooth as the crown
const TOOTH_CENTER_RAW: [number, number, number] = [29, 2, -5];
const S = 0.055;

export default function InsertionPathArrow({ visible }: InsertionPathArrowProps) {
  const groupRef = useRef<THREE.Group>(null);
  const startTimeRef = useRef<number | null>(null);

  const cx = TOOTH_CENTER_RAW[0] * S;
  const topY = 20 * S; // top of tooth in raw units
  const cz = TOOTH_CENTER_RAW[2] * S;
  const arrowLength = 18 * S; // arrow length in raw model scale

  useFrame(() => {
    if (!visible || !groupRef.current) {
      startTimeRef.current = null;
      if (groupRef.current) groupRef.current.visible = false;
      return;
    }

    groupRef.current.visible = true;

    if (startTimeRef.current === null) startTimeRef.current = performance.now();
    const elapsed = performance.now() - startTimeRef.current;

    if (elapsed < 1000) {
      const eased = 1 - Math.pow(1 - elapsed / 1000, 3);
      groupRef.current.position.set(cx, topY + 0.15 * (1 - eased), cz);
      groupRef.current.scale.setScalar(eased);
    } else {
      const pulse = 1 + Math.sin((elapsed - 1000) / 500) * 0.03;
      groupRef.current.scale.setScalar(pulse);
      groupRef.current.position.set(cx, topY, cz);
    }
  });

  if (!visible) return null;

  return (
    <group ref={groupRef} position={[cx, topY, cz]}>
      <mesh position={[0, arrowLength * 0.15, 0]}>
        <cylinderGeometry args={[0.004, 0.004, arrowLength * 0.65, 8]} />
        <meshBasicMaterial color="#009ACE" transparent opacity={0.85} />
      </mesh>
      <mesh rotation={[Math.PI, 0, 0]} position={[0, -arrowLength * 0.2, 0]}>
        <coneGeometry args={[0.012, 0.035, 8]} />
        <meshBasicMaterial color="#009ACE" transparent opacity={0.9} />
      </mesh>
    </group>
  );
}
