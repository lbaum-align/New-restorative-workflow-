import { useMemo } from 'react';
import * as THREE from 'three';
import { useModelContext } from '../CopilotScene';

interface GhostPreTreatmentProps {
  visible: boolean;
}

export default function GhostPreTreatment({ visible }: GhostPreTreatmentProps) {
  const ctx = useModelContext();

  const ghostGeo = useMemo(() => {
    if (!ctx) return null;
    return ctx.geometry.clone();
  }, [ctx]);

  if (!visible || !ghostGeo) return null;

  return (
    <mesh geometry={ghostGeo} scale={0.055 * 1.002}>
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.12}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
