import { motion } from 'framer-motion';
import type { ViewAngleLabel as ViewAngleLabelType } from '../types';

interface ViewAngleLabelProps {
  visible: boolean;
  angle: string;
}

export default function ViewAngleLabel({ visible, angle }: ViewAngleLabelProps) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -8 }}
      transition={{ duration: 0.3 }}
      className="absolute top-20 left-4 z-30"
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-[8px] px-3 py-2 shadow-md border border-[#e5e7eb] flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#009ACE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
        </svg>
        <div className="flex flex-col">
          <span className="text-[9px] text-[#64748b] font-medium uppercase tracking-wider">
            View Angle
          </span>
          <motion.span
            key={angle}
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[14px] font-semibold text-[#374151] font-['Roboto',sans-serif]"
          >
            {angle}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
