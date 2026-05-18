import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CurvedArrow3DProps {
  visible: boolean;
  position?: [number, number, number];
  rotation?: [number, number, number];
  arcAngle?: number;
  radius?: number;
  tubeRadius?: number;
  color?: string;
  clockwise?: boolean;
}

export default function CurvedArrow3D({
  visible,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  arcAngle = Math.PI * 1.5,
  radius = 0.35,
  tubeRadius = 0.012,
  color = '#009ACE',
  clockwise = true,
}: CurvedArrow3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const startTimeRef = useRef<number | null>(null);

  const { arcGeo, conePos, coneRot } = useMemo(() => {
    const curve = new THREE.CurvePath<THREE.Vector3>();
    const segments = 48;
    const startAngle = 0;
    const dir = clockwise ? 1 : -1;

    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const angle = startAngle + dir * arcAngle * t;
      points.push(new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        0,
      ));
    }

    const catmull = new THREE.CatmullRomCurve3(points, false);
    const geo = new THREE.TubeGeometry(catmull, segments, tubeRadius, 8, false);

    const endAngle = startAngle + dir * arcAngle;
    const endX = Math.cos(endAngle) * radius;
    const endY = Math.sin(endAngle) * radius;
    const tangentAngle = endAngle + dir * Math.PI / 2;

    return {
      arcGeo: geo,
      conePos: [endX, endY, 0] as [number, number, number],
      coneRot: [0, 0, tangentAngle - Math.PI / 2] as [number, number, number],
    };
  }, [arcAngle, radius, tubeRadius, clockwise]);

  useFrame(() => {
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
      const pulse = 1 + Math.sin((elapsed - 800) / 700) * 0.04;
      groupRef.current.scale.setScalar(pulse);
    }
  });

  if (!visible) return null;

  const headRadius = tubeRadius * 3;
  const headLength = tubeRadius * 8;

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {/* Arc tube */}
      <mesh geometry={arcGeo}>
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

      {/* Arrowhead cone at the end of the arc */}
      <mesh position={conePos} rotation={coneRot}>
        <coneGeometry args={[headRadius, headLength, 10]} />
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
