import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { GuidanceDirection } from './types';

interface DirectionalArrow3DProps {
  direction: GuidanceDirection;
  visible: boolean;
  position?: [number, number, number];
  length?: number;
  color?: string;
}

const UP = new THREE.Vector3(0, 1, 0);

const DIR_VECTORS: Record<GuidanceDirection, THREE.Vector3> = {
  'right':        new THREE.Vector3(1, 0, 0),
  'left':         new THREE.Vector3(-1, 0, 0),
  'up':           new THREE.Vector3(0, 0, -1),
  'down':         new THREE.Vector3(0, 0, 1),
  'rotate-left':  new THREE.Vector3(-0.7, 0.3, -0.7).normalize(),
  'rotate-right': new THREE.Vector3(0.7, 0.3, -0.7).normalize(),
};

export default function DirectionalArrow3D({
  direction,
  visible,
  position = [0, 0, 0],
  length = 0.6,
  color = '#009ACE',
}: DirectionalArrow3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const startTimeRef = useRef<number | null>(null);
  const prevDir = useRef<GuidanceDirection>(direction);

  const shaftLen = length * 0.6;
  const headLen = length * 0.35;
  const shaftRadius = length * 0.018;
  const headRadius = length * 0.055;

  const rotation = useMemo(() => {
    const dir = DIR_VECTORS[direction] || UP;
    const quat = new THREE.Quaternion();
    if (Math.abs(dir.dot(UP)) > 0.9999) {
      if (dir.y < 0) quat.setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI);
    } else {
      quat.setFromUnitVectors(UP, dir);
    }
    return new THREE.Euler().setFromQuaternion(quat);
  }, [direction]);

  useFrame(() => {
    if (!groupRef.current) return;

    if (!visible) {
      startTimeRef.current = null;
      groupRef.current.visible = false;
      return;
    }

    groupRef.current.visible = true;

    if (prevDir.current !== direction) {
      startTimeRef.current = null;
      prevDir.current = direction;
    }

    if (startTimeRef.current === null) startTimeRef.current = performance.now();
    const elapsed = performance.now() - startTimeRef.current;

    if (elapsed < 800) {
      const eased = 1 - Math.pow(1 - elapsed / 800, 3);
      groupRef.current.scale.setScalar(eased);
    } else {
      const pulse = 1 + Math.sin((elapsed - 800) / 600) * 0.04;
      groupRef.current.scale.setScalar(pulse);
    }
  });

  if (!visible) return null;

  return (
    <group ref={groupRef} position={position} rotation={[rotation.x, rotation.y, rotation.z]}>
      {/* Shaft */}
      <mesh position={[0, shaftLen / 2, 0]}>
        <cylinderGeometry args={[shaftRadius, shaftRadius * 0.6, shaftLen, 10]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.35}
          metalness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Head */}
      <mesh position={[0, shaftLen + headLen / 2, 0]}>
        <coneGeometry args={[headRadius, headLen, 10]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          roughness={0.3}
          metalness={0.15}
          transparent
          opacity={0.95}
        />
      </mesh>
    </group>
  );
}
