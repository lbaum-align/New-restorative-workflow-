import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { ScoreData } from './types';

interface ScoreDashboardProps {
  scores: ScoreData;
  isRescanning: boolean;
  showUpdatedBadge: boolean;
}

function AnimatedCounter({ value, duration = 1200 }: { value: number | null; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number>();
  const startRef = useRef<number>();
  const prevValueRef = useRef(0);

  useEffect(() => {
    if (value === null) {
      setDisplay(0);
      return;
    }

    const from = prevValueRef.current;
    const to = value;
    prevValueRef.current = value;

    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(from + (to - from) * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    startRef.current = undefined;
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [value, duration]);

  if (value === null) return <span className="text-[#94a3b8]">--</span>;
  return <span>{display}</span>;
}

function ScoreRing({ value, size = 44 }: { value: number | null; size?: number }) {
  const r = (size - 6) / 2;
  const circumference = 2 * Math.PI * r;
  const progress = value !== null ? value / 100 : 0;
  const offset = circumference * (1 - progress);

  const color = value === null ? '#e5e7eb'
    : value >= 80 ? '#00964E'
    : value >= 60 ? '#ffd600'
    : '#D43F58';

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
      {/* Background ring */}
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke="#e5e7eb" strokeWidth={3}
      />
      {/* Progress ring */}
      <motion.circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke={color} strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

function ScoreCard({ label, value, suffix, ring, updated }: {
  label: string;
  value: React.ReactNode;
  suffix?: string;
  ring?: number | null;
  updated?: boolean;
}) {
  return (
    <div className="relative bg-[#f8fafc] border border-[#e5e7eb] rounded-[8px] px-3 py-2 flex items-center gap-2 min-h-[68px]">
      {ring !== undefined && (
        <div className="relative flex items-center justify-center">
          <ScoreRing value={ring} />
          <span className="absolute text-[11px] font-semibold text-[#374151]">
            {ring !== null ? ring : '--'}
          </span>
        </div>
      )}
      <div className="flex flex-col min-w-0">
        <span className="text-[11px] text-[#64748b] font-medium uppercase tracking-wide truncate">
          {label}
        </span>
        <span className="text-[16px] font-semibold text-[#374151] font-['Roboto',sans-serif]">
          {value}
          {suffix && <span className="text-[12px] font-normal text-[#94a3b8] ml-1">{suffix}</span>}
        </span>
      </div>
      {updated && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute top-1 right-1 bg-[#00964E] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full"
        >
          Updated
        </motion.span>
      )}
    </div>
  );
}

export default function PrepCopilotScoreDashboard({ scores, isRescanning, showUpdatedBadge }: ScoreDashboardProps) {
  return (
    <div className="px-4 py-3 border-t border-[#e5e7eb]">
      <div className="grid grid-cols-2 gap-2">
        <ScoreCard
          label="Prep Strength"
          value={<AnimatedCounter value={scores.prepStrength} />}
          suffix="/100"
          ring={scores.prepStrength}
          updated={showUpdatedBadge && scores.prepStrength !== null}
        />
        <ScoreCard
          label="Undercut Score"
          value={<AnimatedCounter value={scores.undercutScore} />}
          suffix="/100"
          ring={scores.undercutScore}
          updated={showUpdatedBadge && scores.undercutScore !== null}
        />
        <ScoreCard
          label="View Angle"
          value={scores.viewAngle}
        />
        <ScoreCard
          label="Rx Material"
          value={
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[12px] bg-[#009ACE]/10 text-[#009ACE] font-medium">
              {scores.rxMaterial}
            </span>
          }
        />
      </div>
    </div>
  );
}
