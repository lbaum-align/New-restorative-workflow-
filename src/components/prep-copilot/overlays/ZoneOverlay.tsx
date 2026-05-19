import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useModelContext } from '../CopilotScene';
import { PREP_CENTER, PREP_RADIUS } from '../constants';
import type { ZoneId } from '../types';

const ZONE_COLORS: Record<ZoneId, string> = {
  occlusal: '#009ACE',
  buccal: '#8B5CF6',
  lingual: '#00964E',
  mesial: '#F59E0B',
  distal: '#D43F58',
};

interface ZoneOverlayProps {
  visible: boolean;
  selectedZone: ZoneId | null;
  onZoneClick?: (zone: ZoneId) => void;
}

export default function ZoneOverlay({ visible, selectedZone, onZoneClick }: ZoneOverlayProps) {
  const ctx = useModelContext();
  const groupRef = useRef<THREE.Group>(null);
  const opacityRef = useRef(0);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const target = visible ? 1 : 0;
    opacityRef.current += (target - opacityRef.current) * Math.min(delta * 6, 1);
    groupRef.current.visible = opacityRef.current > 0.01;

    groupRef.current.children.forEach(child => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
        child.material.opacity = opacityRef.current * (child.userData.isSelected ? 0.4 : 0.2);
      }
    });
  });

  const zones = useMemo(() => {
    if (!ctx) return [];

    const S = 0.055;
    const center = new THREE.Vector3(PREP_CENTER[0] / S, PREP_CENTER[1] / S, PREP_CENTER[2] / S);
    const radius = PREP_RADIUS / S;

    // Create simple zone indicator spheres positioned around the prep
    const zonePositions: { zone: ZoneId; pos: [number, number, number] }[] = [
      { zone: 'occlusal', pos: [center.x, center.y + radius * 0.6, center.z] },
      { zone: 'buccal', pos: [center.x, center.y, center.z + radius * 0.8] },
      { zone: 'lingual', pos: [center.x, center.y, center.z - radius * 0.8] },
      { zone: 'mesial', pos: [center.x + radius * 0.8, center.y, center.z] },
      { zone: 'distal', pos: [center.x - radius * 0.8, center.y, center.z] },
    ];

    return zonePositions;
  }, [ctx]);

  if (!ctx) return null;

  return (
    <group ref={groupRef}>
      {zones.map(({ zone, pos }) => (
        <mesh
          key={zone}
          position={pos}
          userData={{ isSelected: selectedZone === zone }}
          onClick={(e) => {
            e.stopPropagation();
            onZoneClick?.(zone);
          }}
        >
          <sphereGeometry args={[PREP_RADIUS / 0.055 * 0.25, 16, 16]} />
          <meshBasicMaterial
            color={ZONE_COLORS[zone]}
            transparent
            opacity={0.2}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}
