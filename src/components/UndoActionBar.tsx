import { motion } from "motion/react";

interface UndoActionBarProps {
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onAccept: () => void;
  onClose: () => void;
}

function UndoArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5.5 8C5.5 8 7 5 11 5C14.3 5 17 7.7 17 11C17 14.3 14.3 17 11 17C8.2 17 5.9 15.1 5.2 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M3.5 5.5L5.5 8L7.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function RedoArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M14.5 8C14.5 8 13 5 9 5C5.7 5 3 7.7 3 11C3 14.3 5.7 17 9 17C11.8 17 14.1 15.1 14.8 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M16.5 5.5L14.5 8L12.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10L8.5 14.5L16 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function UndoActionBar({ canUndo, canRedo, onUndo, onRedo, onAccept, onClose }: UndoActionBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
      className="flex flex-col items-start rounded-[4px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
      style={{ width: 300 }}
    >
      {/* Header */}
      <div className="bg-[#00adef] w-full flex items-center justify-between px-4 py-3">
        <span className="text-white text-[18px] font-normal leading-snug" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Undo tool
        </span>
        <button
          onClick={onClose}
          className="text-white rounded-[5px] w-8 h-8 flex items-center justify-center hover:bg-[#0099d6] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 3L13 13M13 3L3 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Controls */}
      <div className="bg-white w-full flex items-center gap-0 divide-x divide-[#e0e0e0]">
        {/* Undo */}
        <button
          onClick={canUndo ? onUndo : undefined}
          disabled={!canUndo}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-4 transition-colors hover:bg-gray-50 active:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="text-[#3E3D40]"><UndoArrowIcon /></span>
          <span className="text-[13px] text-[#3E3D40] font-normal">Undo</span>
        </button>

        {/* Redo */}
        <button
          onClick={canRedo ? onRedo : undefined}
          disabled={!canRedo}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-4 transition-colors hover:bg-gray-50 active:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="text-[#3E3D40]"><RedoArrowIcon /></span>
          <span className="text-[13px] text-[#3E3D40] font-normal">Redo</span>
        </button>
      </div>

      {/* Accept */}
      <div className="bg-white w-full border-t border-[#e0e0e0]">
        <button
          onClick={onAccept}
          className="w-full flex items-center justify-center gap-2 py-3.5 text-[#009ACE] font-medium text-[15px] hover:bg-[#f0faff] active:bg-[#e0f4ff] transition-colors rounded-b-[4px]"
        >
          <CheckIcon />
          Accept changes
        </button>
      </div>
    </motion.div>
  );
}
