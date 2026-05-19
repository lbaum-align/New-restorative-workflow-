import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useModelContext } from '../CopilotScene';
import { HEATMAP_COLORS } from '../constants';
import type { MaterialThresholds } from '../types';

interface ReductionHeatmapProps {
  visible: boolean;
  isRescan?: boolean;
  materialThresholds?: MaterialThresholds;
}

function getHeatmapColor(val: number): [number, number, number] {
  if (val <= HEATMAP_COLORS[0].threshold) return [...HEATMAP_COLORS[0].color] as [number, number, number];
  for (let i = 0; i < HEATMAP_COLORS.length - 1; i++) {
    if (val <= HEATMAP_COLORS[i + 1].threshold) {
      const t = (val - HEATMAP_COLORS[i].threshold) / (HEATMAP_COLORS[i + 1].threshold - HEATMAP_COLORS[i].threshold);
      return [
        HEATMAP_COLORS[i].color[0] + (HEATMAP_COLORS[i + 1].color[0] - HEATMAP_COLORS[i].color[0]) * t,
        HEATMAP_COLORS[i].color[1] + (HEATMAP_COLORS[i + 1].color[1] - HEATMAP_COLORS[i].color[1]) * t,
        HEATMAP_COLORS[i].color[2] + (HEATMAP_COLORS[i + 1].color[2] - HEATMAP_COLORS[i].color[2]) * t,
      ];
    }
  }
  const last = HEATMAP_COLORS[HEATMAP_COLORS.length - 1];
  return [...last.color] as [number, number, number];
}

// Focus heatmap on prep tooth area (lower jaw)
const PREP_TOOTH_CENTER: [number, number, number] = [-0.8, -0.2, -0.3];
const PREP_FOCUS_RADIUS = 0.4; // Only show heatmap within this radius of prep

export default function ReductionHeatmap({ visible, isRescan, materialThresholds }: ReductionHeatmapProps) {
  const ctx = useModelContext();
  const matRef = useRef<THREE.MeshBasicMaterial>(null);
  const startTimeRef = useRef<number | null>(null);

  const { heatmapGeo, targetColors } = useMemo(() => {
    if (!ctx) return { heatmapGeo: null, targetColors: new Float32Array(0) };

    const geo = ctx.geometry.clone();
    const { bounds } = ctx;
    const pos = geo.attributes.position;
    const normals = geo.attributes.normal;
    const colors = new Float32Array(pos.count * 3);
    const targets = new Float32Array(pos.count * 3);

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);

      // Distance from prep tooth center
      const distFromPrep = Math.sqrt(
        (x - PREP_TOOTH_CENTER[0]) ** 2 +
        (y - PREP_TOOTH_CENTER[1]) ** 2 +
        (z - PREP_TOOTH_CENTER[2]) ** 2
      );

      // Focus mask: only show heatmap near prep tooth
      let focusMask: number;
      if (distFromPrep < PREP_FOCUS_RADIUS * 0.7) {
        focusMask = 1.0; // full intensity near prep
      } else if (distFromPrep < PREP_FOCUS_RADIUS) {
        focusMask = 1 - (distFromPrep - PREP_FOCUS_RADIUS * 0.7) / (PREP_FOCUS_RADIUS * 0.3); // fade out
      } else {
        focusMask = 0.0; // no heatmap far from prep
      }

      if (focusMask < 0.01) {
        // Outside focus area — keep original tooth color
        targets[i * 3] = 1;
        targets[i * 3 + 1] = 1;
        targets[i * 3 + 2] = 1;
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1;
        continue;
      }

      // Normal Y component: higher = occlusal surface
      const normalY = normals ? normals.getY(i) : 0;

      // Deterministic noise
      const noise = Math.sin(x * 0.15 + z * 0.11) * 0.15 +
                    Math.cos(y * 0.2 + x * 0.07) * 0.1 +
                    Math.sin(z * 0.13 + y * 0.17) * 0.08;

      // Reduction value based on surface orientation and position:
      // - Occlusal (normalY > 0 = facing up) = more reduction needed (1.2-2.0)
      // - Axial walls (normalY ~0) = moderate (0.8-1.2)
      // - Y height on the model also matters: higher Y = cusps = more reduction
      const yNorm = (y - bounds.minY) / (bounds.maxY - bounds.minY);

      let reduction: number;
      if (isRescan) {
        reduction = 1.1 + Math.max(0, normalY) * 0.5 + yNorm * 0.3 + noise * 0.15;
      } else {
        reduction = 0.5 + Math.max(0, normalY) * 0.8 + yNorm * 0.4 + noise * 0.3;
        // Hot spots: areas of insufficient reduction on specific teeth
        const angle = Math.atan2(z - bounds.centerZ, x - bounds.centerX);
        const hotspot1 = Math.exp(-((angle - 2.8) ** 2) * 3);
        const hotspot2 = Math.exp(-((angle + 0.5) ** 2) * 4);
        reduction -= hotspot1 * 0.3 + hotspot2 * 0.2;
      }

      reduction = Math.max(0.2, Math.min(2.5, reduction));

      const [r, g, b] = getHeatmapColor(reduction);
      // Blend toward original color based on focus mask
      targets[i * 3] = 1 + (r - 1) * focusMask;
      targets[i * 3 + 1] = 1 + (g - 1) * focusMask;
      targets[i * 3 + 2] = 1 + (b - 1) * focusMask;

      colors[i * 3] = 1;
      colors[i * 3 + 1] = 1;
      colors[i * 3 + 2] = 1;
    }

    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return { heatmapGeo: geo, targetColors: targets };
  }, [ctx, isRescan]);

  useFrame(() => {
    if (!visible || !heatmapGeo) {
      startTimeRef.current = null;
      return;
    }

    if (startTimeRef.current === null) startTimeRef.current = performance.now();
    const elapsed = performance.now() - startTimeRef.current;
    const progress = Math.min(elapsed / 1200, 1);

    const colorAttr = heatmapGeo.attributes.color as THREE.BufferAttribute;
    const arr = colorAttr.array as Float32Array;
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = 1 + (targetColors[i] - 1) * progress;
      arr[i + 1] = 1 + (targetColors[i + 1] - 1) * progress;
      arr[i + 2] = 1 + (targetColors[i + 2] - 1) * progress;
    }
    colorAttr.needsUpdate = true;

    if (matRef.current) {
      matRef.current.opacity = 0.75 * progress;
    }
  });

  if (!visible || !heatmapGeo) return null;

  return (
    <mesh geometry={heatmapGeo} scale={0.055}>
      <meshBasicMaterial
        ref={matRef}
        vertexColors
        transparent
        opacity={0}
        depthWrite={false}
        depthTest={true}
        polygonOffset
        polygonOffsetFactor={-1}
        polygonOffsetUnits={-1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
