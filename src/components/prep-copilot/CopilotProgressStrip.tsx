import { motion, AnimatePresence } from 'framer-motion';
import type { CopilotPhase } from './types';

interface CopilotProgressStripProps {
  phase: CopilotPhase;
  progress: number;
  statusText: string;
}

export default function CopilotProgressStrip({ phase, progress, statusText }: CopilotProgressStripProps) {
  const showStrip = phase === 'detecting' || phase === 'detected' || phase === 'zooming' || phase === 'analyzing';

  return (
    <AnimatePresence>
      {showStrip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-[#e5e7eb] shadow-sm"
        >
          {phase === 'detecting' && (
            <span className="w-2.5 h-2.5 rounded-full bg-[#009ACE] animate-pulse" />
          )}
          {phase === 'detected' && (
            <span className="w-2.5 h-2.5 rounded-full bg-[#00964E]" />
          )}
          {phase === 'zooming' && (
            <svg className="animate-spin h-3.5 w-3.5 text-[#009ACE]" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
              <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
            </svg>
          )}
          {phase === 'analyzing' && (
            <div className="w-16 h-1.5 rounded-full bg-[#e5e7eb] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#009ACE] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
          <span className="text-[11px] font-medium text-[#374151]">{statusText}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
