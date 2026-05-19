import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useToothPositions } from '../ToothAnalyzer';

interface ToothReductionOverlayProps {
  visible: boolean;
}

// Reduction analysis colors (clinical standards)
const REDUCTION_COLORS = {
  insufficient: [0.9, 0.1, 0.1], // Red - needs more reduction
  adequate: [1.0, 0.6, 0.1],     // Orange - acceptable
  optimal: [0.2, 0.8, 0.2],      // Green - ideal reduction
} as const;

export default function ToothReductionOverlay({ visible }: ToothReductionOverlayProps) {
  const teeth = useToothPositions();
  
  const reductionPatches = useMemo(() => {
    if (!teeth || teeth.length === 0) return [];
    
    // Target the same tooth as margin line (first molar)
    const targetTooth = teeth.find(tooth => tooth.toothNumber === "46") || teeth[Math.floor(teeth.length * 0.7)];
    
    if (!targetTooth) return [];
    
    const patches = [];
    const baseX = targetTooth.center[0];
    const baseY = targetTooth.center[1];
    const baseZ = targetTooth.center[2];
    
    // Create realistic reduction analysis patches on different tooth surfaces
    
    // Occlusal surface (chewing surface) - needs more reduction
    patches.push({
      position: [baseX, baseY + 0.02, baseZ] as [number, number, number],
      color: REDUCTION_COLORS.insufficient,
      radius: 0.06,
      type: 'occlusal'
    });
    
    // Buccal cusp (cheek side) - adequate reduction
    patches.push({
      position: [baseX - 0.08, baseY - 0.01, baseZ + 0.05] as [number, number, number],
      color: REDUCTION_COLORS.adequate,
      radius: 0.04,
      type: 'buccal'
    });
    
    // Lingual cusp (tongue side) - optimal reduction
    patches.push({
      position: [baseX + 0.08, baseY - 0.01, baseZ - 0.05] as [number, number, number],
      color: REDUCTION_COLORS.optimal,
      radius: 0.04,
      type: 'lingual'
    });
    
    // Mesial surface (front of tooth) - adequate
    patches.push({
      position: [baseX + 0.05, baseY - 0.02, baseZ + 0.08] as [number, number, number],
      color: REDUCTION_COLORS.adequate,
      radius: 0.035,
      type: 'mesial'
    });
    
    // Distal surface (back of tooth) - optimal
    patches.push({
      position: [baseX - 0.05, baseY - 0.02, baseZ - 0.08] as [number, number, number],
      color: REDUCTION_COLORS.optimal,
      radius: 0.035,
      type: 'distal'
    });
    
    return patches;
  }, [teeth]);
  
  if (!visible || reductionPatches.length === 0) return null;
  
  return (
    <group>
      {reductionPatches.map((patch, i) => (
        <mesh 
          key={i} 
          position={patch.position}
        >
          <sphereGeometry args={[patch.radius, 12, 12]} />
          <meshBasicMaterial 
            color={new THREE.Color(...patch.color)}
            transparent={true}
            opacity={0.8}
            depthTest={false}
          />
        </mesh>
      ))}
      
      {/* Add prep depth indicator line */}
      <group position={reductionPatches[0]?.position}>
        <mesh position={[0, -0.08, 0]}>
          <cylinderGeometry args={[0.002, 0.002, 0.06]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0, -0.11, 0]}>
          <coneGeometry args={[0.008, 0.02]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>
    </group>
  );
}