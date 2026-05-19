import React, { useMemo } from 'react';
import { DoubleSide } from 'three';
import * as THREE from 'three';
import { useModelContext } from './CopilotScene';

// Target tooth preparation centered on upper left first molar (model coordinates)
const PREP_TOOTH_CENTER: [number, number, number] = [-0.8, 0.2, -0.3];
const PREP_DEPTH = 0.08;
const PREP_WIDTH = 0.25;
const PREP_HEIGHT = 0.2;

// Create a realistic crown preparation geometry
function createPrepGeometry() {
  const geometry = new THREE.CylinderGeometry(
    PREP_WIDTH * 0.4,  // radiusTop (slightly tapered)
    PREP_WIDTH * 0.5,  // radiusBottom
    PREP_DEPTH,        // height
    16,                // radialSegments
    1,                 // heightSegments
    false,             // openEnded
    0,                 // thetaStart
    Math.PI * 2        // thetaLength
  );
  
  // Apply slight rotation to match tooth orientation
  geometry.rotateX(Math.PI / 2);
  geometry.translate(...PREP_TOOTH_CENTER);
  
  return geometry;
}

// Create a margin line that follows the prep outline
function createMarginLineGeometry() {
  const points: THREE.Vector3[] = [];
  const segments = 24;
  const radius = PREP_WIDTH * 0.52;
  
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const x = PREP_TOOTH_CENTER[0] + Math.cos(angle) * radius;
    const y = PREP_TOOTH_CENTER[1] + Math.sin(angle) * radius * 0.8; // Slightly oval
    const z = PREP_TOOTH_CENTER[2] + 0.02; // Slightly above surface
    points.push(new THREE.Vector3(x, y, z));
  }
  
  return new THREE.BufferGeometry().setFromPoints(points);
}

// Create a reduction analysis overlay
function createReductionOverlay() {
  // Create circular patches showing different reduction amounts
  const patches = [];
  const colors = [
    { color: [0.85, 0.1, 0.1], reduction: 0.05 }, // Deep red - insufficient
    { color: [1.0, 0.55, 0.1], reduction: 0.07 }, // Orange - adequate
    { color: [0.2, 0.85, 0.2], reduction: 0.08 }, // Green - ideal
  ];
  
  for (let i = 0; i < colors.length; i++) {
    const angle = (i / colors.length) * Math.PI * 2;
    const offsetRadius = PREP_WIDTH * 0.2;
    const position: [number, number, number] = [
      PREP_TOOTH_CENTER[0] + Math.cos(angle) * offsetRadius,
      PREP_TOOTH_CENTER[1] + Math.sin(angle) * offsetRadius,
      PREP_TOOTH_CENTER[2] + colors[i].reduction,
    ];
    
    patches.push({
      position,
      color: colors[i].color,
      radius: 0.04,
    });
  }
  
  return patches;
}

interface PrepToothProps {
  showPrep?: boolean;
  showMarginLine?: boolean;
  showReduction?: boolean;
}

export default function PrepTooth({ 
  showPrep = true, 
  showMarginLine = true, 
  showReduction = true 
}: PrepToothProps) {
  const modelCtx = useModelContext();
  
  const prepGeometry = useMemo(() => createPrepGeometry(), []);
  const marginGeometry = useMemo(() => createMarginLineGeometry(), []);
  const reductionPatches = useMemo(() => createReductionOverlay(), []);
  
  if (!modelCtx) return null;
  
  return (
    <group>
      {/* Preparation cavity - shows the prepared tooth surface */}
      {showPrep && (
        <mesh geometry={prepGeometry}>
          <meshPhysicalMaterial
            color="#8B4513"
            roughness={0.9}
            metalness={0.0}
            transparent={true}
            opacity={0.8}
            side={DoubleSide}
          />
        </mesh>
      )}
      
      {/* Margin line - precise blue outline */}
      {showMarginLine && (
        <line geometry={marginGeometry}>
          <lineBasicMaterial 
            color="#0066CC" 
            linewidth={3}
            transparent={true}
            opacity={0.9}
          />
        </line>
      )}
      
      {/* Reduction analysis patches */}
      {showReduction && reductionPatches.map((patch, i) => (
        <mesh 
          key={i} 
          position={patch.position}
        >
          <sphereGeometry args={[patch.radius, 8, 8]} />
          <meshBasicMaterial 
            color={new THREE.Color(...patch.color)}
            transparent={true}
            opacity={0.7}
          />
        </mesh>
      ))}
      
      {/* Insertion path arrow - shows ideal insertion direction */}
      <group position={[PREP_TOOTH_CENTER[0], PREP_TOOTH_CENTER[1] + 0.4, PREP_TOOTH_CENTER[2]]}>
        <mesh rotation={[0, 0, Math.PI]}>
          <coneGeometry args={[0.02, 0.1, 8]} />
          <meshBasicMaterial color="#00AA00" />
        </mesh>
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.008, 0.008, 0.15]} />
          <meshBasicMaterial color="#00AA00" />
        </mesh>
      </group>
    </group>
  );
}