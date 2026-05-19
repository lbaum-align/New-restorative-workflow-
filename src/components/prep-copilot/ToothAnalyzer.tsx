import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useModelContext } from './CopilotScene';

// Analyze the 3D model to find actual tooth positions
export function useToothPositions() {
  const modelCtx = useModelContext();
  
  return useMemo(() => {
    if (!modelCtx) return null;
    
    const { geometry, bounds } = modelCtx;
    const positions = geometry.attributes.position;
    
    // Lower jaw tooth analysis - find clusters of vertices at crown height
    const crownHeight = bounds.maxY - (bounds.maxY - bounds.minY) * 0.3; // Top 30% of model
    const toothClusters: Array<{
      center: [number, number, number];
      vertices: number[];
      toothNumber: string;
    }> = [];
    
    // Analyze vertices at crown level to identify individual teeth
    const crownVertices: Array<{pos: THREE.Vector3, index: number}> = [];
    
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);
      
      // Only consider vertices at crown height
      if (y > crownHeight) {
        crownVertices.push({ 
          pos: new THREE.Vector3(x, y, z), 
          index: i 
        });
      }
    }
    
    // Group vertices into tooth clusters based on spatial proximity
    const clusterRadius = 0.08; // Tooth separation distance
    const processed = new Set<number>();
    
    crownVertices.forEach((vertex, idx) => {
      if (processed.has(idx)) return;
      
      const cluster = [vertex];
      processed.add(idx);
      
      // Find nearby vertices
      crownVertices.forEach((otherVertex, otherIdx) => {
        if (processed.has(otherIdx)) return;
        
        const distance = vertex.pos.distanceTo(otherVertex.pos);
        if (distance < clusterRadius) {
          cluster.push(otherVertex);
          processed.add(otherIdx);
        }
      });
      
      // Only consider clusters with enough vertices to be a tooth
      if (cluster.length > 20) {
        const center = cluster.reduce(
          (sum, v) => sum.add(v.pos), 
          new THREE.Vector3()
        ).divideScalar(cluster.length);
        
        // Determine tooth number based on position (lower jaw numbering)
        const isLeft = center.x < bounds.centerX;
        const distanceFromCenter = Math.abs(center.x - bounds.centerX);
        
        let toothNumber = "";
        if (distanceFromCenter < 0.15) {
          toothNumber = isLeft ? "41" : "31"; // Central incisors
        } else if (distanceFromCenter < 0.25) {
          toothNumber = isLeft ? "42" : "32"; // Lateral incisors  
        } else if (distanceFromCenter < 0.35) {
          toothNumber = isLeft ? "43" : "33"; // Canines
        } else if (distanceFromCenter < 0.45) {
          toothNumber = isLeft ? "44" : "34"; // First premolars
        } else if (distanceFromCenter < 0.55) {
          toothNumber = isLeft ? "45" : "35"; // Second premolars
        } else if (distanceFromCenter < 0.70) {
          toothNumber = isLeft ? "46" : "36"; // First molars
        } else {
          toothNumber = isLeft ? "47" : "37"; // Second molars
        }
        
        toothClusters.push({
          center: [center.x, center.y, center.z],
          vertices: cluster.map(v => v.index),
          toothNumber
        });
      }
    });
    
    // Sort by X position (left to right)
    toothClusters.sort((a, b) => b.center[0] - a.center[0]);
    
    return toothClusters;
  }, [modelCtx]);
}

// Component to visualize detected teeth (for debugging)
interface ToothAnalyzerProps {
  showDebug?: boolean;
}

export default function ToothAnalyzer({ showDebug = false }: ToothAnalyzerProps) {
  const teeth = useToothPositions();
  
  if (!showDebug || !teeth) return null;
  
  return (
    <group>
      {teeth.map((tooth, i) => (
        <group key={i} position={tooth.center}>
          {/* Debug sphere at tooth center */}
          <mesh>
            <sphereGeometry args={[0.02]} />
            <meshBasicMaterial color="#ff0000" />
          </mesh>
          {/* Tooth number label */}
          <mesh position={[0, 0.05, 0]}>
            <sphereGeometry args={[0.01]} />
            <meshBasicMaterial color="#00ff00" />
          </mesh>
        </group>
      ))}
    </group>
  );
}