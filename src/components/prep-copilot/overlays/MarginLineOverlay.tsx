import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MarginLineOverlayProps {
  visible: boolean;
}

// Position on actual visible tooth (lower right first molar)
const MOLAR_CENTER: [number, number, number] = [0.4, -0.08, -0.15];
const MOLAR_RADIUS = 0.08;

export default function MarginLineOverlay({ visible }: MarginLineOverlayProps) {
  const lineRef = useRef<THREE.Line>(null);
  const glowRef = useRef<THREE.Line>(null);
  const progressRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  const { geometry, totalPoints } = useMemo(() => {
    const cx = MOLAR_CENTER[0];
    const cy = MOLAR_CENTER[1];
    const cz = MOLAR_CENTER[2];
    const r = MOLAR_RADIUS;

    const segments = 32; // Reduced for performance
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      // Simple anatomical margin shape
      const wobble = 1 + Math.sin(angle * 3) * 0.06;
      pts.push(new THREE.Vector3(
        cx + Math.cos(angle) * r * wobble,
        cy,
        cz + Math.sin(angle) * r * wobble * 0.9, // Slightly oval
      ));
    }

    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    return { geometry: geo, totalPoints: pts.length };
  }, []);

  useFrame(() => {
    if (!visible) {
      progressRef.current = 0;
      startTimeRef.current = null;
      if (lineRef.current) lineRef.current.geometry.setDrawRange(0, 0);
      if (glowRef.current) glowRef.current.geometry.setDrawRange(0, 0);
      return;
    }

    if (startTimeRef.current === null) startTimeRef.current = performance.now();
    const elapsed = performance.now() - startTimeRef.current;
    progressRef.current = Math.min(elapsed / 1500, 1);

    const count = Math.floor(progressRef.current * totalPoints);
    if (lineRef.current) lineRef.current.geometry.setDrawRange(0, count);
    if (glowRef.current) glowRef.current.geometry.setDrawRange(0, count);
  });

  if (!visible || !geometry) return null;

  return (
    <group>
      <line ref={glowRef as any} geometry={geometry}>
        <lineBasicMaterial color="#00FFD0" transparent opacity={0.35} linewidth={1} />
      </line>
      <line ref={lineRef as any} geometry={geometry}>
        <lineBasicMaterial color="#00FFD0" transparent opacity={0.9} linewidth={1} />
      </line>
    </group>
  );
}
