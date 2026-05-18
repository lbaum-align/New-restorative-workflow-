import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MarginLineOverlayProps {
  visible: boolean;
}

// Margin line traces around the same tooth as the crown (right premolar)
// Raw model coords: tooth center at ~(29, 2, -5)
const TOOTH_CENTER_RAW: [number, number, number] = [29, 2, -5];
const S = 0.055;
// Tooth is roughly 4mm radius in raw model space
const TOOTH_RADIUS_RAW = 4.5;

export default function MarginLineOverlay({ visible }: MarginLineOverlayProps) {
  const lineRef = useRef<THREE.Line>(null);
  const glowRef = useRef<THREE.Line>(null);
  const progressRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  const { geometry, totalPoints } = useMemo(() => {
    const cx = TOOTH_CENTER_RAW[0] * S;
    const cy = TOOTH_CENTER_RAW[1] * S; // margin sits at the base of the crown
    const cz = TOOTH_CENTER_RAW[2] * S;
    const r = TOOTH_RADIUS_RAW * S;

    const segments = 48;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      // Slight irregularity for organic feel
      const wobble = 1 + Math.sin(angle * 3) * 0.06 + Math.cos(angle * 7) * 0.03;
      const yWobble = Math.sin(angle * 5) * r * 0.08;
      pts.push(new THREE.Vector3(
        cx + Math.cos(angle) * r * wobble,
        cy + yWobble,
        cz + Math.sin(angle) * r * wobble,
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
