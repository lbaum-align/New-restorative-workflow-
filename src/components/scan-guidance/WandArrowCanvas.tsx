import type { GuidanceMode } from './types';

interface WandArrowCanvasProps {
  mode: GuidanceMode;
}

export default function WandArrowCanvas({ mode }: WandArrowCanvasProps) {
  const variant = v(mode);
  return <RailGuide variant={variant} />;
}

function v(mode: GuidanceMode): string {
  return mode.replace(/^(?:g|bg|fg|fag)wand-/, '').replace(/^(?:dof|bare|ring|pulse|ghost|wand)-/, '').replace(/^rot-/, '');
}

const RAIL_KEYFRAMES = `
  @keyframes rail-flow {
    0%   { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -40; }
  }
  @keyframes rail-flow-rev {
    0%   { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 40; }
  }
  @keyframes rail-pulse {
    0%,100% { opacity: 0.5; }
    50%     { opacity: 1; }
  }
  @keyframes rail-breathe {
    0%,100% { transform: scale(0.92); opacity: 0.6; }
    50%     { transform: scale(1.08); opacity: 1; }
  }
`;

function RailGuide({ variant }: { variant: string }) {
  if (variant === 'lr')      return <HorizontalRails />;
  if (variant === 'ud')      return <VerticalRails />;
  if (variant === 'fb')      return <DepthRails />;
  if (variant === 'roll')    return <CircularRails />;
  if (variant === 'cw')      return <CircularRails direction="cw" />;
  if (variant === 'ccw')     return <CircularRails direction="ccw" />;
  if (variant === 'pitch')   return <PitchRails />;
  if (variant === 'yaw')     return <YawRails />;
  if (variant === 'tilt')    return <TiltRails />;
  if (variant === 'tilt3d')  return <TiltRails />;
  if (variant === 'spin3d')  return <CircularRails />;
  if (variant === 'orbit3d') return <CircularRails />;
  if (variant === 'nod3d')   return <PitchRails />;
  if (variant === 'sweep3d') return <YawRails />;
  if (variant === 'rock3d')  return <CircularRails />;
  if (variant === 'tumble3d') return <TiltRails />;
  if (variant === 'wobble3d') return <WobbleRails />;
  return <HorizontalRails />;
}

function RailWrapper({ children, width = '320%', height = '140%', top = '-20%' }: {
  children: React.ReactNode; width?: string; height?: string; top?: string;
}) {
  return (
    <div style={{
      position: 'absolute', left: '50%', top,
      width, height,
      transform: 'translateX(-50%)',
      pointerEvents: 'none',
    }}>
      <style>{RAIL_KEYFRAMES}</style>
      {children}
    </div>
  );
}

function HorizontalRails() {
  return (
    <RailWrapper>
      <svg width="100%" height="100%" viewBox="0 0 320 140" fill="none" style={{
        filter: 'drop-shadow(0 0 6px rgba(0,154,206,0.35))',
      }}>
        <defs>
          <linearGradient id="rail-h-grad" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
            <stop offset="30%" stopColor="#009ACE" />
            <stop offset="70%" stopColor="#009ACE" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Upper rail */}
        <path
          d="M 30,50 C 80,50 100,48 160,48 C 220,48 240,50 290,50"
          stroke="url(#rail-h-grad)" strokeWidth="4.5" strokeLinecap="round"
          strokeDasharray="12 8"
          style={{ animation: 'rail-flow 1.2s linear infinite' }}
        />
        {/* Lower rail */}
        <path
          d="M 30,90 C 80,90 100,92 160,92 C 220,92 240,90 290,90"
          stroke="url(#rail-h-grad)" strokeWidth="4.5" strokeLinecap="round"
          strokeDasharray="12 8"
          style={{ animation: 'rail-flow-rev 1.2s linear infinite' }}
        />
        {/* Left arrowhead */}
        <polygon points="30,50 42,44 42,56" fill="#38BDF8" opacity="0.8" />
        <polygon points="30,90 42,84 42,96" fill="#38BDF8" opacity="0.8" />
        {/* Right arrowhead */}
        <polygon points="290,50 278,44 278,56" fill="#38BDF8" opacity="0.8" />
        <polygon points="290,90 278,84 278,96" fill="#38BDF8" opacity="0.8" />
      </svg>
    </RailWrapper>
  );
}

function VerticalRails() {
  return (
    <RailWrapper width="200%" height="180%" top="-40%">
      <svg width="100%" height="100%" viewBox="0 0 200 220" fill="none" style={{
        filter: 'drop-shadow(0 0 6px rgba(0,154,206,0.35))',
      }}>
        <defs>
          <linearGradient id="rail-v-grad" x1="0" y1="0" x2="0" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
            <stop offset="30%" stopColor="#009ACE" />
            <stop offset="70%" stopColor="#009ACE" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Left rail */}
        <path
          d="M 75,20 C 75,60 73,90 73,110 C 73,130 75,160 75,200"
          stroke="url(#rail-v-grad)" strokeWidth="4.5" strokeLinecap="round"
          strokeDasharray="12 8"
          style={{ animation: 'rail-flow 1.4s linear infinite' }}
        />
        {/* Right rail */}
        <path
          d="M 125,20 C 125,60 127,90 127,110 C 127,130 125,160 125,200"
          stroke="url(#rail-v-grad)" strokeWidth="4.5" strokeLinecap="round"
          strokeDasharray="12 8"
          style={{ animation: 'rail-flow-rev 1.4s linear infinite' }}
        />
        {/* Top arrowheads */}
        <polygon points="75,20 69,32 81,32" fill="#38BDF8" opacity="0.8" />
        <polygon points="125,20 119,32 131,32" fill="#38BDF8" opacity="0.8" />
        {/* Bottom arrowheads */}
        <polygon points="75,200 69,188 81,188" fill="#38BDF8" opacity="0.8" />
        <polygon points="125,200 119,188 131,188" fill="#38BDF8" opacity="0.8" />
      </svg>
    </RailWrapper>
  );
}

function DepthRails() {
  return (
    <RailWrapper width="240%" height="160%" top="-30%">
      <svg width="100%" height="100%" viewBox="0 0 240 180" fill="none" style={{
        filter: 'drop-shadow(0 0 6px rgba(0,154,206,0.35))',
        animation: 'rail-breathe 2.8s ease-in-out infinite',
        transformOrigin: 'center center',
      }}>
        <defs>
          <radialGradient id="rail-depth-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#009ACE" stopOpacity="0.1" />
            <stop offset="60%" stopColor="#009ACE" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
          </radialGradient>
        </defs>
        {/* Outer ring */}
        <ellipse cx="120" cy="90" rx="90" ry="70"
          stroke="url(#rail-depth-grad)" strokeWidth="4.5" strokeLinecap="round"
          strokeDasharray="14 10"
          fill="none"
          style={{ animation: 'rail-flow 2s linear infinite' }}
        />
        {/* Inner ring */}
        <ellipse cx="120" cy="90" rx="50" ry="38"
          stroke="#009ACE" strokeWidth="3" strokeLinecap="round"
          strokeDasharray="8 6" opacity="0.5"
          fill="none"
          style={{ animation: 'rail-flow-rev 2.5s linear infinite' }}
        />
        {/* Center dot */}
        <circle cx="120" cy="90" r="5" fill="#009ACE" opacity="0.7" />
      </svg>
    </RailWrapper>
  );
}

function CircularRails({ direction = 'cw' }: { direction?: 'cw' | 'ccw' }) {
  const animName = direction === 'cw' ? 'rail-flow' : 'rail-flow-rev';
  return (
    <RailWrapper width="280%" height="160%" top="-30%">
      <svg width="100%" height="100%" viewBox="0 0 280 180" fill="none" style={{
        filter: 'drop-shadow(0 0 6px rgba(0,154,206,0.35))',
      }}>
        <defs>
          <linearGradient id="rail-circ-grad" x1="0" y1="0" x2="280" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="50%" stopColor="#009ACE" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        {/* Left arc rail */}
        <path
          d="M 90,25 A 62,62 0 1,0 90,155"
          stroke="url(#rail-circ-grad)" strokeWidth="4.5" strokeLinecap="round"
          strokeDasharray="14 9"
          fill="none"
          style={{ animation: `${animName} 1.5s linear infinite` }}
        />
        {/* Right arc rail */}
        <path
          d="M 190,25 A 62,62 0 1,1 190,155"
          stroke="url(#rail-circ-grad)" strokeWidth="4.5" strokeLinecap="round"
          strokeDasharray="14 9"
          fill="none"
          style={{ animation: `${animName} 1.5s linear infinite` }}
        />
        {/* Arrowheads */}
        <polygon points="90,155 82,143 98,143" fill="#38BDF8" opacity="0.8" />
        <polygon points="190,155 182,143 198,143" fill="#38BDF8" opacity="0.8" />
      </svg>
    </RailWrapper>
  );
}

function PitchRails() {
  return (
    <RailWrapper width="220%" height="180%" top="-40%">
      <svg width="100%" height="100%" viewBox="0 0 220 220" fill="none" style={{
        filter: 'drop-shadow(0 0 6px rgba(0,154,206,0.35))',
      }}>
        <defs>
          <linearGradient id="rail-pitch-grad" x1="0" y1="0" x2="0" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#009ACE" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>
        </defs>
        {/* Front arc (left side) */}
        <path
          d="M 70,30 C 50,70 50,150 70,190"
          stroke="url(#rail-pitch-grad)" strokeWidth="4.5" strokeLinecap="round"
          strokeDasharray="12 8"
          fill="none"
          style={{ animation: 'rail-flow 1.6s linear infinite' }}
        />
        {/* Back arc (right side) */}
        <path
          d="M 150,30 C 170,70 170,150 150,190"
          stroke="url(#rail-pitch-grad)" strokeWidth="4.5" strokeLinecap="round"
          strokeDasharray="12 8"
          fill="none"
          style={{ animation: 'rail-flow-rev 1.6s linear infinite' }}
        />
        {/* Top arrowheads */}
        <polygon points="70,30 63,42 77,42" fill="#38BDF8" opacity="0.8" />
        <polygon points="150,30 143,42 157,42" fill="#38BDF8" opacity="0.8" />
        {/* Bottom arrowheads */}
        <polygon points="70,190 63,178 77,178" fill="#818CF8" opacity="0.8" />
        <polygon points="150,190 143,178 157,178" fill="#818CF8" opacity="0.8" />
      </svg>
    </RailWrapper>
  );
}

function YawRails() {
  return (
    <RailWrapper width="320%" height="140%" top="-20%">
      <svg width="100%" height="100%" viewBox="0 0 320 140" fill="none" style={{
        filter: 'drop-shadow(0 0 6px rgba(0,154,206,0.35))',
      }}>
        <defs>
          <linearGradient id="rail-yaw-grad" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="50%" stopColor="#009ACE" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        {/* Upper curved rail */}
        <path
          d="M 30,45 C 90,30 230,30 290,45"
          stroke="url(#rail-yaw-grad)" strokeWidth="4.5" strokeLinecap="round"
          strokeDasharray="14 9"
          fill="none"
          style={{ animation: 'rail-flow 1.4s linear infinite' }}
        />
        {/* Lower curved rail */}
        <path
          d="M 30,95 C 90,110 230,110 290,95"
          stroke="url(#rail-yaw-grad)" strokeWidth="4.5" strokeLinecap="round"
          strokeDasharray="14 9"
          fill="none"
          style={{ animation: 'rail-flow-rev 1.4s linear infinite' }}
        />
        {/* Left arrowheads */}
        <polygon points="30,45 42,39 42,51" fill="#818CF8" opacity="0.8" />
        <polygon points="30,95 42,89 42,101" fill="#818CF8" opacity="0.8" />
        {/* Right arrowheads */}
        <polygon points="290,45 278,39 278,51" fill="#38BDF8" opacity="0.8" />
        <polygon points="290,95 278,89 278,101" fill="#38BDF8" opacity="0.8" />
      </svg>
    </RailWrapper>
  );
}

function TiltRails() {
  return (
    <RailWrapper width="340%" height="150%" top="-25%">
      <svg width="100%" height="100%" viewBox="0 0 340 170" fill="none" style={{
        filter: 'drop-shadow(0 0 8px rgba(0,154,206,0.35))',
        animation: 'rail-pulse 2.8s ease-in-out infinite',
      }}>
        <defs>
          <linearGradient id="rail-tilt-grad" x1="0" y1="0" x2="340" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="50%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        {/* Left wide arc */}
        <path
          d="M 40,85 C 60,30 120,15 170,30"
          stroke="url(#rail-tilt-grad)" strokeWidth="5" strokeLinecap="round"
          strokeDasharray="14 9"
          fill="none"
          style={{ animation: 'rail-flow 1.3s linear infinite' }}
        />
        {/* Right wide arc */}
        <path
          d="M 170,30 C 220,15 280,30 300,85"
          stroke="url(#rail-tilt-grad)" strokeWidth="5" strokeLinecap="round"
          strokeDasharray="14 9"
          fill="none"
          style={{ animation: 'rail-flow 1.3s linear infinite' }}
        />
        {/* Lower return arcs */}
        <path
          d="M 40,85 C 60,140 120,155 170,140"
          stroke="url(#rail-tilt-grad)" strokeWidth="4" strokeLinecap="round"
          strokeDasharray="10 8" opacity="0.5"
          fill="none"
          style={{ animation: 'rail-flow-rev 1.6s linear infinite' }}
        />
        <path
          d="M 170,140 C 220,155 280,140 300,85"
          stroke="url(#rail-tilt-grad)" strokeWidth="4" strokeLinecap="round"
          strokeDasharray="10 8" opacity="0.5"
          fill="none"
          style={{ animation: 'rail-flow-rev 1.6s linear infinite' }}
        />
        {/* End arrowheads */}
        <polygon points="40,85 50,77 50,93" fill="#818CF8" opacity="0.8" />
        <polygon points="300,85 290,77 290,93" fill="#38BDF8" opacity="0.8" />
      </svg>
    </RailWrapper>
  );
}

function WobbleRails() {
  return (
    <RailWrapper width="280%" height="160%" top="-30%">
      <svg width="100%" height="100%" viewBox="0 0 280 180" fill="none" style={{
        filter: 'drop-shadow(0 0 6px rgba(0,154,206,0.35))',
      }}>
        <defs>
          <linearGradient id="rail-wobble-grad" x1="0" y1="0" x2="280" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="50%" stopColor="#009ACE" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        {/* Figure-8 / lemniscate path — left loop */}
        <path
          d="M 140,90 C 110,50 60,50 60,90 C 60,130 110,130 140,90"
          stroke="url(#rail-wobble-grad)" strokeWidth="4.5" strokeLinecap="round"
          strokeDasharray="12 8"
          fill="none"
          style={{ animation: 'rail-flow 2s linear infinite' }}
        />
        {/* Figure-8 — right loop */}
        <path
          d="M 140,90 C 170,50 220,50 220,90 C 220,130 170,130 140,90"
          stroke="url(#rail-wobble-grad)" strokeWidth="4.5" strokeLinecap="round"
          strokeDasharray="12 8"
          fill="none"
          style={{ animation: 'rail-flow-rev 2s linear infinite' }}
        />
        {/* Center dot */}
        <circle cx="140" cy="90" r="4" fill="#009ACE" opacity="0.8" />
      </svg>
    </RailWrapper>
  );
}
