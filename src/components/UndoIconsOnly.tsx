import { motion } from "motion/react";

interface UndoIconsOnlyProps {
  onUndo: () => void;
  onRedo: () => void;
  onAccept: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

function UndoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 10C7 10 8.875 6 12.5 6C16.125 6 19 8.875 19 12.5C19 16.125 16.125 19 12.5 19C9.5 19 7 16.8 6.25 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4.5 7.5L7 10L9.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function RedoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M17 10C17 10 15.125 6 11.5 6C7.875 6 5 8.875 5 12.5C5 16.125 7.875 19 11.5 19C14.5 19 17 16.8 17.75 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19.5 7.5L17 10L14.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AcceptIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function UndoIconsOnly({
  onUndo,
  onRedo,
  onAccept,
  canUndo,
  canRedo,
}: UndoIconsOnlyProps) {
  const hasHistory = canUndo || canRedo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
      className="flex items-center gap-1"
    >
      {/* Undo */}
      <button
        onClick={canUndo ? onUndo : undefined}
        disabled={!canUndo}
        className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-[#3E3D40] hover:bg-[#DFF5FC] active:bg-[#BFEAFB] transition-colors disabled:text-[#B0B1B3] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <UndoIcon />
      </button>

      {/* Redo */}
      <button
        onClick={canRedo ? onRedo : undefined}
        disabled={!canRedo}
        className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-[#3E3D40] hover:bg-[#DFF5FC] active:bg-[#BFEAFB] transition-colors disabled:text-[#B0B1B3] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <RedoIcon />
      </button>

      {/* Accept */}
      <button
        onClick={hasHistory ? onAccept : undefined}
        disabled={!hasHistory}
        className={`w-[60px] h-[60px] rounded-full flex items-center justify-center transition-colors ${
          hasHistory
            ? 'text-[#3E3D40] hover:bg-[#DFF5FC] active:bg-[#BFEAFB]'
            : 'text-[#B0B1B3] opacity-50 cursor-not-allowed'
        }`}
      >
        <AcceptIcon />
      </button>
    </motion.div>
  );
}
