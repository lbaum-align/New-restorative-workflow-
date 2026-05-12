import { motion, AnimatePresence } from "motion/react";
import type { ScanSnapshot } from "../hooks/useUndoHistory";
import JawThumbnail from "./jaw-viewer/JawThumbnail";

interface UndoFilmstripPreviewProps {
  past: ScanSnapshot[];
  currentJaw: 'upper' | 'lower' | 'bite' | null;
  onJumpTo: (index: number) => void;
}

export default function UndoFilmstripPreview({ past, currentJaw, onJumpTo }: UndoFilmstripPreviewProps) {
  const jaw = currentJaw ?? 'upper';
  const recentThree = past.slice(-3);
  const startIndex = past.length - recentThree.length;

  if (recentThree.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.22, ease: [0, 0, 0.2, 1] }}
        className="flex items-end gap-2"
      >
        {recentThree.map((snap, i) => {
          const absoluteIndex = startIndex + i;
          const progress = (i + 1) / recentThree.length;
          const rotationY = -0.6 + progress * 0.6;
          const opacity = 0.5 + progress * 0.5;

          return (
            <button
              key={absoluteIndex}
              onClick={() => onJumpTo(absoluteIndex)}
              title={snap.label}
              className="group relative rounded-[10px] overflow-hidden border-2 border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.12)] hover:border-[#009ACE] hover:shadow-[0_2px_14px_rgba(0,154,206,0.3)] transition-all cursor-pointer"
              style={{ background: '#f8fbfd' }}
            >
              <JawThumbnail
                jaw={jaw}
                rotationY={rotationY}
                opacity={opacity}
                size={56}
              />
              <span className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[8px] leading-tight text-center py-0.5 truncate px-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {snap.label}
              </span>
            </button>
          );
        })}

        {/* Step indicator */}
        <span className="text-[10px] text-[#7a7a7a] font-medium ml-1 mb-1 select-none">
          {past.length} step{past.length !== 1 ? 's' : ''}
        </span>
      </motion.div>
    </AnimatePresence>
  );
}
