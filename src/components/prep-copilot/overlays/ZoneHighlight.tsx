import React from 'react';
import * as THREE from 'three';
import type { ZoneId } from '../types';

interface ZoneHighlightProps {
  visible: boolean;
  selectedZone: ZoneId | null;
}

// Position on actual visible tooth (lower right first molar)
const MOLAR_CENTER: [number, number, number] = [0.4, -0.08, -0.15];

const ZONE_POSITIONS: Record<ZoneId, [number, number, number]> = {
  occlusal: [MOLAR_CENTER[0], MOLAR_CENTER[1] + 0.03, MOLAR_CENTER[2]], // Top surface
  buccal: [MOLAR_CENTER[0] - 0.08, MOLAR_CENTER[1], MOLAR_CENTER[2]], // Cheek side  
  lingual: [MOLAR_CENTER[0] + 0.08, MOLAR_CENTER[1], MOLAR_CENTER[2]], // Tongue side
  mesial: [MOLAR_CENTER[0], MOLAR_CENTER[1], MOLAR_CENTER[2] + 0.07], // Front
  distal: [MOLAR_CENTER[0], MOLAR_CENTER[1], MOLAR_CENTER[2] - 0.07], // Back
};

const ZONE_COLORS: Record<ZoneId, string> = {
  occlusal: '#00AAFF', // Blue
  buccal: '#FF6600',   // Orange
  lingual: '#9966FF',  // Purple  
  mesial: '#00FF66',   // Green
  distal: '#FF0066',   // Pink
};

export default function ZoneHighlight({ visible, selectedZone }: ZoneHighlightProps) {
  if (!visible || !selectedZone) return null;

  const position = ZONE_POSITIONS[selectedZone];
  const color = ZONE_COLORS[selectedZone];

  return (
    <group position={position}>
      {/* Highlight ring around selected zone */}
      <mesh>
        <ringGeometry args={[0.06, 0.08, 16]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.8} 
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Pulsing center indicator */}
      <mesh>
        <sphereGeometry args={[0.02]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.9} 
        />
      </mesh>
    </group>
  );
}