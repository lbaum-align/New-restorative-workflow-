import { motion } from "motion/react";

interface UndoPillProps {
  onUndo: () => void;
  onRedo: () => void;
  onAccept: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

function UndoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5.5 8C5.5 8 7 5 11 5C14.3 5 17 7.7 17 11C17 14.3 14.3 17 11 17C8.2 17 5.9 15.1 5.2 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M3.5 5.5L5.5 8L7.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function RedoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M14.5 8C14.5 8 13 5 9 5C5.7 5 3 7.7 3 11C3 14.3 5.7 17 9 17C11.8 17 14.1 15.1 14.8 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16.5 5.5L14.5 8L12.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function UndoPill({
  onUndo,
  onRedo,
  onAccept,
  canUndo,
  canRedo,
}: UndoPillProps) {
  const hasHistory = canUndo || canRedo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
      className="flex items-center gap-0 bg-white rounded-full px-1 py-1 shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
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

      {/* Divider */}
      <div className="w-px h-8 bg-[#E0E0E0]" />

      {/* Accept */}
      <button
        onClick={hasHistory ? onAccept : undefined}
        disabled={!hasHistory}
        className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-[14px] font-medium transition-colors ${
          hasHistory
            ? 'text-[#3E3D40] hover:bg-[#DFF5FC] active:bg-[#BFEAFB]'
            : 'text-[#B0B1B3] cursor-not-allowed'
        }`}
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        Accept
      </button>
    </motion.div>
  );
}
