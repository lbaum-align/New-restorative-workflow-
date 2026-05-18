import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RotationRing3DProps {
  visible: boolean;
  position?: [number, number, number];
  rotation?: [number, number, number];
  radius?: number;
  tubeRadius?: number;
  color?: string;
  spin?: boolean;
  spinSpeed?: number;
  tilt?: number;
}

export default function RotationRing3D({
  visible,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  radius = 0.4,
  tubeRadius = 0.008,
  color = '#009ACE',
  spin = true,
  spinSpeed = 1,
  tilt = 0,
}: RotationRing3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const startTimeRef = useRef<number | null>(null);

  const ringGeo = useMemo(
    () => new THREE.TorusGeometry(radius, tubeRadius, 12, 64),
    [radius, tubeRadius],
  );

  const dotGeo = useMemo(
    () => new THREE.SphereGeometry(tubeRadius * 2.5, 10, 10),
    [tubeRadius],
  );

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    if (!visible) {
      startTimeRef.current = null;
      groupRef.current.visible = false;
      return;
    }
    groupRef.current.visible = true;

    if (startTimeRef.current === null) startTimeRef.current = performance.now();
    const elapsed = performance.now() - startTimeRef.current;

    if (elapsed < 800) {
      const eased = 1 - Math.pow(1 - elapsed / 800, 3);
      groupRef.current.scale.setScalar(eased);
    } else {
      const pulse = 1 + Math.sin((elapsed - 800) / 800) * 0.03;
      groupRef.current.scale.setScalar(pulse);
    }

    if (spin && ringRef.current) {
      ringRef.current.rotation.z += delta * spinSpeed;
    }
  });

  if (!visible) return null;

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <group rotation={[tilt, 0, 0]}>
        {/* Main ring */}
        <mesh ref={ringRef} geometry={ringGeo}>
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.25}
            roughness={0.4}
            metalness={0.1}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Marker dot on the ring */}
        <mesh position={[radius, 0, 0]} geometry={dotGeo}>
          <meshStandardMaterial
            color="#fff"
            emissive={color}
            emissiveIntensity={0.5}
            roughness={0.2}
          />
        </mesh>
      </group>
    </group>
  );
}
