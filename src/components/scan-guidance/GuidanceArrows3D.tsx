import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import DirectionalArrow3D from './DirectionalArrow3D';
import CurvedArrow3D from './CurvedArrow3D';
import RotationRing3D from './RotationRing3D';
import type { GuidanceState, GuidanceDirection, ModelBounds, GuidanceMode } from './types';

interface GuidanceArrows3DProps {
  guidanceRef: React.RefObject<GuidanceState>;
  bounds: ModelBounds;
  visible: boolean;
  meshScale?: number;
  guidanceMode?: GuidanceMode;
}

const ARROW_LEN = 0.4;
const ARC_R = 0.3;
const RING_R = 0.35;
const SPREAD = 0.5;

function getModeVariant(mode?: GuidanceMode): string | null {
  if (!mode) return null;
  const m = mode.replace(/^(?:g|bg|fg|fag)wand-/, '').replace(/^(?:dof|bare|ring|pulse|ghost|wand)-/, '').replace(/^rot-/, '');
  return m || null;
}

export default function GuidanceArrows3D({
  guidanceRef,
  bounds,
  visible,
  meshScale = 0.055,
  guidanceMode,
}: GuidanceArrows3DProps) {
  const dirRef = useRef<GuidanceDirection | null>(null);
  const posRef = useRef<[number, number, number]>([0, 0, 0]);
  const showRef = useRef(false);

  const cy = bounds.surfaceY * meshScale + 0.15;

  useFrame(() => {
    const g = guidanceRef.current;
    if (!g || !visible) { showRef.current = false; return; }

    const wr = g.weakestRegion;
    const dir = g.direction;

    if (!dir || !wr || g.phase === 'idle' || g.phase === 'complete') {
      showRef.current = false;
      return;
    }

    const cx = (bounds.minX + ((wr.xMin + wr.xMax) / 2) * (bounds.maxX - bounds.minX)) * meshScale;
    const cz = (bounds.minZ + ((wr.zMin + wr.zMax) / 2) * (bounds.maxZ - bounds.minZ)) * meshScale;

    posRef.current = [cx, cy, cz];
    dirRef.current = dir;
    showRef.current = true;
  });

  const variant = getModeVariant(guidanceMode);

  // LR — single arrow pointing the primary direction
  if (variant === 'lr') return <SingleDirectional dirRef={dirRef} showRef={showRef} fallbackDir="right" cy={cy} />;

  // UD — single arrow pointing up or down
  if (variant === 'ud') return <SingleDirectional dirRef={dirRef} showRef={showRef} fallbackDir="up" cy={cy} />;

  // FB — single arrow pointing forward (up in model space)
  if (variant === 'fb') return (
    <DirectionalArrow3D direction="up" visible={visible} position={[0, cy + 0.2, 0]} length={ARROW_LEN * 0.7} />
  );

  // Roll — single rotation ring
  if (variant === 'roll') return (
    <RotationRing3D visible={visible} position={[0, cy, 0]} rotation={[Math.PI / 2, 0, 0]} radius={RING_R} spin spinSpeed={1.2} />
  );

  // Pitch — single curved arrow on the side
  if (variant === 'pitch') return (
    <CurvedArrow3D visible={visible} position={[SPREAD * 0.6, cy, 0]} rotation={[0, Math.PI / 2, 0]} arcAngle={Math.PI} radius={ARC_R * 0.8} />
  );

  // Yaw — single curved arrow above
  if (variant === 'yaw') return (
    <CurvedArrow3D visible={visible} position={[0, cy + 0.15, 0]} rotation={[Math.PI / 2, 0, 0]} arcAngle={Math.PI * 1.2} radius={ARC_R} />
  );

  // Tilt3d — single tilted arc
  if (variant === 'tilt3d') return (
    <CurvedArrow3D visible={visible} position={[0, cy + 0.1, 0]} rotation={[Math.PI / 2, 0, Math.PI / 6]} arcAngle={Math.PI * 1.3} radius={ARC_R} />
  );

  // Spin3d — single rotation ring
  if (variant === 'spin3d') return (
    <RotationRing3D visible={visible} position={[0, cy + 0.1, 0]} rotation={[Math.PI / 2, 0, 0]} radius={RING_R} spin spinSpeed={1.5} />
  );

  // Orbit3d — single tilted ring
  if (variant === 'orbit3d') return (
    <RotationRing3D visible={visible} position={[0, cy, 0]} rotation={[Math.PI / 2, 0, 0]} radius={RING_R * 1.1} spin spinSpeed={0.8} tilt={Math.PI / 6} />
  );

  // Nod3d — single curved arrow (pitch motion)
  if (variant === 'nod3d') return (
    <CurvedArrow3D visible={visible} position={[SPREAD * 0.5, cy, 0]} rotation={[0, Math.PI / 2, 0]} arcAngle={Math.PI * 0.8} radius={ARC_R * 0.7} />
  );

  // Sweep3d — single arrow for the primary sweep direction
  if (variant === 'sweep3d') return <SingleDirectional dirRef={dirRef} showRef={showRef} fallbackDir="right" cy={cy} />;

  // Rock3d — single arrow for the primary rock direction
  if (variant === 'rock3d') return <SingleDirectional dirRef={dirRef} showRef={showRef} fallbackDir="right" cy={cy} />;

  // Tumble3d — single curved arrow
  if (variant === 'tumble3d') return (
    <CurvedArrow3D visible={visible} position={[0, cy + 0.15, 0]} rotation={[Math.PI / 2, 0, 0]} arcAngle={Math.PI} radius={ARC_R * 0.8} />
  );

  // Wobble3d — single tilted ring
  if (variant === 'wobble3d') return (
    <RotationRing3D visible={visible} position={[0, cy, 0]} rotation={[Math.PI / 2, 0, 0]} radius={RING_R * 0.8} spin spinSpeed={0.6} tilt={Math.PI / 5} />
  );

  // CW / CCW / Tilt — single arc
  if (variant === 'cw' || variant === 'ccw' || variant === 'tilt') {
    return (
      <CurvedArrow3D visible={visible} position={[0, cy + 0.1, 0]} rotation={[Math.PI / 2, 0, variant === 'tilt' ? Math.PI / 8 : 0]} arcAngle={Math.PI * 1.5} radius={ARC_R} clockwise={variant !== 'ccw'} />
    );
  }

  // Default: single direction-based arrow
  return <DirectionalArrowFromRef dirRef={dirRef} posRef={posRef} showRef={showRef} />;
}

function SingleDirectional({
  dirRef,
  showRef,
  fallbackDir,
  cy,
}: {
  dirRef: React.RefObject<GuidanceDirection | null>;
  showRef: React.RefObject<boolean>;
  fallbackDir: GuidanceDirection;
  cy: number;
}) {
  const localDir = useRef<GuidanceDirection>(fallbackDir);
  const localShow = useRef(false);

  useFrame(() => {
    if (dirRef.current) localDir.current = dirRef.current;
    localShow.current = showRef.current;
  });

  const dir = localDir.current;
  const pos: [number, number, number] =
    dir === 'left'  ? [-SPREAD, cy, 0] :
    dir === 'right' ? [SPREAD, cy, 0] :
    dir === 'up'    ? [0, cy, -SPREAD * 0.8] :
    dir === 'down'  ? [0, cy, SPREAD * 0.8] :
    [0, cy, 0];

  return <DirectionalArrow3D direction={dir} visible={localShow.current || true} position={pos} length={ARROW_LEN} />;
}

function DirectionalArrowFromRef({
  dirRef,
  posRef,
  showRef,
}: {
  dirRef: React.RefObject<GuidanceDirection | null>;
  posRef: React.RefObject<[number, number, number]>;
  showRef: React.RefObject<boolean>;
}) {
  const localDir = useRef<GuidanceDirection>('right');
  const localPos = useRef<[number, number, number]>([0, 0, 0]);
  const localShow = useRef(false);

  useFrame(() => {
    if (dirRef.current) localDir.current = dirRef.current;
    localPos.current = posRef.current;
    localShow.current = showRef.current;
  });

  return (
    <DirectionalArrow3D
      direction={localDir.current}
      visible={localShow.current}
      position={localPos.current}
      length={ARROW_LEN}
    />
  );
}
