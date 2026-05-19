import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import type { ZoneId, MaterialType } from './types';

interface PrepGeometryProps {
  visible: boolean;
  selectedZone?: ZoneId | null;
  selectedMaterial: MaterialType;
  showMarginLine?: boolean;
  showReductionAnalysis?: boolean;
  showInsertionPath?: boolean;
  showUndercuts?: boolean;
  showCrown?: boolean;
  prepPosition: [number, number, number];
  prepRotation: [number, number, number];
  prepScale: number;
  showCoordinates?: boolean;
}

// Aligned to jaw orientation; position is controlled from parent.
const PREP_BASE_SCALE = 0.1;

// Create realistic crown preparation geometry
function createPrepGeometry() {
  // Main prep cavity - tapered cylinder with rounded edges
  const prepCavity = new THREE.CylinderGeometry(
    PREP_BASE_SCALE * 0.6,  // top radius (smaller - tapered)
    PREP_BASE_SCALE * 0.8,  // bottom radius (larger)
    PREP_BASE_SCALE * 0.4,  // height
    16,                // radial segments
    1,                 // height segments
    false,             // open ended
    0,                 // theta start
    Math.PI * 2        // theta length
  );
  
  // Margin line points for line rendering and tubular band
  const marginRadius = PREP_BASE_SCALE * 0.85;
  const marginPoints: THREE.Vector3[] = [];
  for (let i = 0; i <= 32; i++) {
    const angle = (i / 32) * Math.PI * 2;
    // Slightly oval shape for anatomical accuracy
    const x = Math.cos(angle) * marginRadius;
    const z = Math.sin(angle) * marginRadius * 0.9; // 10% more oval
    const y = -PREP_BASE_SCALE * 0.2; // At cervical level
    marginPoints.push(new THREE.Vector3(x, y, z));
  }

  const marginCurve = new THREE.CatmullRomCurve3(marginPoints, true, 'catmullrom', 0.2);
  const marginTube = new THREE.TubeGeometry(marginCurve, 64, PREP_BASE_SCALE * 0.03, 10, true);

  return { prepCavity, marginPoints, marginTube };
}

// Create zone-specific reduction indicators with material-driven severity
function createZoneIndicators(zone: ZoneId, material: MaterialType) {
  const indicators = [];
  const baseRadius = PREP_BASE_SCALE * 0.4;
  const strict = material === 'bruxzir-esthetic';
  const cLow = strict ? '#ff3b30' : '#ff8a00';
  const cMid = strict ? '#ff9f0a' : '#ffd60a';
  const cGood = strict ? '#34c759' : '#30d158';
  
  switch (zone) {
    case 'occlusal':
      // Top chewing surface - multiple points
      indicators.push(
        { pos: [0, 0.02, 0], color: cLow, size: strict ? 0.028 : 0.022, status: 'insufficient' },
        { pos: [0.02, 0.015, 0.02], color: cMid, size: 0.02, status: 'adequate' },
        { pos: [-0.02, 0.015, -0.02], color: cGood, size: strict ? 0.018 : 0.022, status: 'optimal' }
      );
      break;
      
    case 'buccal':
      // Cheek side - vertical reduction analysis
      indicators.push(
        { pos: [-baseRadius * 0.8, 0, 0], color: cGood, size: 0.02, status: 'optimal' },
        { pos: [-baseRadius * 0.6, -0.01, 0.02], color: cMid, size: 0.018, status: 'adequate' }
      );
      break;
      
    case 'lingual':
      // Tongue side
      indicators.push(
        { pos: [baseRadius * 0.8, 0, 0], color: cMid, size: 0.02, status: 'adequate' },
        { pos: [baseRadius * 0.6, -0.01, -0.02], color: cGood, size: 0.018, status: 'optimal' }
      );
      break;
      
    case 'mesial':
      // Front of tooth
      indicators.push(
        { pos: [0, 0, baseRadius * 0.8], color: cGood, size: 0.02, status: 'optimal' },
        { pos: [0.015, -0.01, baseRadius * 0.6], color: cMid, size: 0.015, status: 'adequate' }
      );
      break;
      
    case 'distal':
      // Back of tooth
      indicators.push(
        { pos: [0, 0, -baseRadius * 0.8], color: cMid, size: 0.02, status: 'adequate' },
        { pos: [-0.015, -0.01, -baseRadius * 0.6], color: cGood, size: 0.015, status: 'optimal' }
      );
      break;
  }
  
  return indicators;
}

export default function PrepGeometry({ 
  visible, 
  selectedZone, 
  selectedMaterial,
  showMarginLine = true, 
  showReductionAnalysis = true,
  showInsertionPath = false,
  showUndercuts = false,
  showCrown = false,
  prepPosition,
  prepRotation,
  prepScale,
  showCoordinates = false,
}: PrepGeometryProps) {
  const materialProfile = useMemo(() => {
    const profiles: Record<MaterialType, {
      prepColor: string;
      prepEmissive: string;
      prepOpacity: number;
      crownOpacity: number;
      marginCore: string;
      marginGlow: string;
      marginBand: string;
      reductionHalo: string;
      strict: boolean;
    }> = {
      'bruxzir-esthetic': {
        prepColor: '#c26a2f',
        prepEmissive: '#2a1407',
        prepOpacity: 0.95,
        crownOpacity: 0.48,
        marginCore: '#2563eb',
        marginGlow: '#93c5fd',
        marginBand: '#60a5fa',
        reductionHalo: '#38bdf8',
        strict: true,
      },
      'bruxzir-full-strength': {
        prepColor: '#9c4f1f',
        prepEmissive: '#311204',
        prepOpacity: 0.92,
        crownOpacity: 0.35,
        marginCore: '#00b7ff',
        marginGlow: '#7dd3fc',
        marginBand: '#22d3ee',
        reductionHalo: '#60a5fa',
        strict: false,
      },
      'emax': {
        prepColor: '#d97706',
        prepEmissive: '#3f1d06',
        prepOpacity: 0.94,
        crownOpacity: 0.55,
        marginCore: '#7c3aed',
        marginGlow: '#c4b5fd',
        marginBand: '#a78bfa',
        reductionHalo: '#c084fc',
        strict: true,
      },
      'lithium-disilicate': {
        prepColor: '#b45309',
        prepEmissive: '#3b1c08',
        prepOpacity: 0.93,
        crownOpacity: 0.5,
        marginCore: '#0ea5e9',
        marginGlow: '#7dd3fc',
        marginBand: '#38bdf8',
        reductionHalo: '#67e8f9',
        strict: true,
      },
      'pfm': {
        prepColor: '#8b5e34',
        prepEmissive: '#2c1b0a',
        prepOpacity: 0.9,
        crownOpacity: 0.4,
        marginCore: '#0f766e',
        marginGlow: '#5eead4',
        marginBand: '#14b8a6',
        reductionHalo: '#2dd4bf',
        strict: false,
      },
    };
    return profiles[selectedMaterial];
  }, [selectedMaterial]);

  const { prepCavity, marginPoints, marginTube } = useMemo(() => createPrepGeometry(), []);
  const prepEdges = useMemo(() => new THREE.EdgesGeometry(prepCavity), [prepCavity]);
  
  const marginLineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(marginPoints);
  }, [marginPoints]);
  
  const zoneIndicators = useMemo(() => {
    if (!selectedZone) return [];
    const base = createZoneIndicators(selectedZone, selectedMaterial);
    return base.map((indicator) => ({
      ...indicator,
      size: materialProfile.strict ? indicator.size * 1.12 : indicator.size * 0.94,
    }));
  }, [selectedZone, selectedMaterial, materialProfile.strict]);
  
  if (!visible) return null;
  
  return (
    <group position={prepPosition} rotation={prepRotation} scale={prepScale}>
      {/* Main preparation cavity */}
      <mesh geometry={prepCavity}>
        <meshPhysicalMaterial
          color={materialProfile.prepColor}
          roughness={0.55}
          metalness={0.0}
          emissive={materialProfile.prepEmissive}
          emissiveIntensity={0.35}
          transparent
          opacity={materialProfile.prepOpacity}
          depthTest={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <lineSegments geometry={prepEdges}>
        <lineBasicMaterial color="#f59e0b" transparent opacity={0.8} />
      </lineSegments>
      
      {/* Margin line */}
      {showMarginLine && (
        <group>
          <mesh geometry={marginTube}>
            <meshBasicMaterial
              color={materialProfile.marginBand}
              transparent
              opacity={0.55}
              depthTest={false}
            />
          </mesh>
          <line geometry={marginLineGeometry}>
            <lineBasicMaterial 
              color={materialProfile.marginGlow}
              linewidth={4}
              transparent
              opacity={0.65}
            />
          </line>
          <line geometry={marginLineGeometry}>
            <lineBasicMaterial 
              color={materialProfile.marginCore}
              linewidth={3}
              transparent
              opacity={1}
            />
          </line>
        </group>
      )}
      
      {/* Zone-specific reduction analysis */}
      {showReductionAnalysis && zoneIndicators.map((indicator, i) => (
        <group key={i} position={indicator.pos as [number, number, number]}>
          <mesh>
            <sphereGeometry args={[indicator.size * 1.45, 10, 10]} />
            <meshBasicMaterial
              color={materialProfile.reductionHalo}
              transparent
              opacity={0.18}
              depthTest={false}
            />
          </mesh>
          <mesh>
            <sphereGeometry args={[indicator.size, 10, 10]} />
            <meshBasicMaterial 
              color={indicator.color}
              transparent
              opacity={0.9}
              depthTest={false}
            />
          </mesh>
        </group>
      ))}
      
      {/* Depth measurement indicators */}
      {selectedZone === 'occlusal' && (
        <group>
          {/* Depth measurement line */}
          <mesh position={[0, -0.02, 0]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.002, 0.002, 0.06]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          
          {/* Measurement labels */}
          <mesh position={[0, -0.05, 0]}>
            <sphereGeometry args={[0.008]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>
      )}

      {/* Undercut highlight on prep walls */}
      {showUndercuts && (
        <group>
          <mesh position={[-PREP_BASE_SCALE * 0.35, -PREP_BASE_SCALE * 0.03, PREP_BASE_SCALE * 0.12]}>
            <sphereGeometry args={[PREP_BASE_SCALE * 0.18, 14, 14]} />
            <meshBasicMaterial color="#D43F58" transparent opacity={0.7} depthWrite={false} />
          </mesh>
          <mesh position={[PREP_BASE_SCALE * 0.28, -PREP_BASE_SCALE * 0.05, -PREP_BASE_SCALE * 0.1]}>
            <sphereGeometry args={[PREP_BASE_SCALE * 0.14, 14, 14]} />
            <meshBasicMaterial color="#D43F58" transparent opacity={0.62} depthWrite={false} />
          </mesh>
        </group>
      )}
      
      {/* Zone highlight ring */}
      {showReductionAnalysis && selectedZone && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[PREP_BASE_SCALE * 0.9, PREP_BASE_SCALE * 1.0, 16]} />
          <meshBasicMaterial 
            color={getZoneColor(selectedZone)}
            transparent
            opacity={0.6}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
      
      {/* Insertion path arrow tied to prep axis */}
      {showInsertionPath && (
        <group position={[0, PREP_BASE_SCALE * 1.25, 0]}>
          <mesh rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[PREP_BASE_SCALE * 0.16, PREP_BASE_SCALE * 0.3, 8]} />
            <meshBasicMaterial color="#009ACE" />
          </mesh>
          <mesh position={[0, PREP_BASE_SCALE * 0.25, 0]}>
            <cylinderGeometry args={[PREP_BASE_SCALE * 0.05, PREP_BASE_SCALE * 0.05, PREP_BASE_SCALE * 0.8]} />
            <meshBasicMaterial color="#009ACE" />
          </mesh>
        </group>
      )}

      {/* Crown generated on top of the created prep */}
      {showCrown && (
        <group position={[0, PREP_BASE_SCALE * 0.07, 0]}>
          <mesh>
            <cylinderGeometry
              args={[
                PREP_BASE_SCALE * 0.64,
                PREP_BASE_SCALE * 0.82,
                PREP_BASE_SCALE * 0.5,
                24,
              ]}
            />
            <meshPhysicalMaterial
              color="#9ad7f5"
              transparent
              opacity={materialProfile.crownOpacity}
              roughness={0.15}
              metalness={0.02}
              clearcoat={0.65}
              clearcoatRoughness={0.08}
              emissive="#7dd3fc"
              emissiveIntensity={0.08}
              side={THREE.DoubleSide}
            />
          </mesh>
          <mesh position={[0, PREP_BASE_SCALE * 0.26, 0]}>
            <sphereGeometry args={[PREP_BASE_SCALE * 0.52, 20, 12]} />
            <meshPhysicalMaterial
              color="#d8f0ff"
              transparent
              opacity={0.28}
              roughness={0.25}
              metalness={0.0}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      )}

      {/* Coordinate tooltip for precise placement handoff */}
      {showCoordinates && (
        <Html position={[0, PREP_BASE_SCALE * 1.9, 0]} center distanceFactor={8}>
          <div
            className="rounded-md px-2 py-1 text-[11px] font-medium"
            style={{
              background: 'rgba(17, 24, 39, 0.86)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.25)',
              whiteSpace: 'nowrap',
            }}
          >
            {`Prep XYZ: (${prepPosition[0].toFixed(3)}, ${prepPosition[1].toFixed(3)}, ${prepPosition[2].toFixed(3)}) | Rot: (${prepRotation[0].toFixed(2)}, ${prepRotation[1].toFixed(2)}, ${prepRotation[2].toFixed(2)}) | Scale: ${prepScale.toFixed(2)}`}
          </div>
        </Html>
      )}
    </group>
  );
}

// Helper function for zone colors
function getZoneColor(zone: ZoneId): string {
  const colors: Record<ZoneId, string> = {
    occlusal: '#0088FF',
    buccal: '#FF6600',
    lingual: '#9966FF',
    mesial: '#00FF66',
    distal: '#FF0066',
  };
  return colors[zone];
}