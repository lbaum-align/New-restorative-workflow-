import { motion } from "motion/react";

interface UndoLabeledListProps {
  onUndo: () => void;
  onRedo: () => void;
  onAccept: () => void;
  onClose: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

function UndoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 10C7 10 8.875 6 12.5 6C16.125 6 19 8.875 19 12.5C19 16.125 16.125 19 12.5 19C9.5 19 7 16.8 6.25 14" stroke="#3E3D40" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4.5 7.5L7 10L9.5 7.5" stroke="#3E3D40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function RedoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M17 10C17 10 15.125 6 11.5 6C7.875 6 5 8.875 5 12.5C5 16.125 7.875 19 11.5 19C14.5 19 17 16.8 17.75 14" stroke="#3E3D40" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19.5 7.5L17 10L14.5 7.5" stroke="#3E3D40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

export default function UndoLabeledList({
  onUndo,
  onRedo,
  onAccept,
  onClose,
  canUndo,
  canRedo,
}: UndoLabeledListProps) {
  const hasHistory = canUndo || canRedo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
      className="flex flex-col items-stretch rounded-[4px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
    >
      {/* Blue header */}
      <div className="bg-[#00adef] border-b border-[#0099d6] flex items-center justify-between px-4 pt-4 pb-[17px]">
        <span
          className="text-white text-[24px] font-medium leading-[30px]"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
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

      {/* List items: Undo | Redo | Accept */}
      <div className="bg-white flex items-center rounded-b-[4px]">
        {/* Undo */}
        <button
          onClick={canUndo ? onUndo : undefined}
          disabled={!canUndo}
          className="flex items-center gap-0 h-16 px-4 hover:bg-[#DFF5FC] active:bg-[#BFEAFB] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="flex items-center justify-center w-10 h-16 mr-[-6px]">
            <UndoIcon />
          </span>
          <span
            className="text-[18px] text-[#3E3D40] font-normal leading-[28px] px-4"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Undo
          </span>
        </button>

        {/* Redo */}
        <button
          onClick={canRedo ? onRedo : undefined}
          disabled={!canRedo}
          className="flex items-center gap-0 h-16 px-4 hover:bg-[#DFF5FC] active:bg-[#BFEAFB] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="flex items-center justify-center w-10 h-16 mr-[-6px]">
            <RedoIcon />
          </span>
          <span
            className="text-[18px] text-[#3E3D40] font-normal leading-[28px] px-4"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Redo
          </span>
        </button>

        {/* Accept */}
        <button
          onClick={hasHistory ? onAccept : undefined}
          disabled={!hasHistory}
          className={`flex items-center gap-0 h-16 px-4 transition-colors ${
            hasHistory
              ? 'text-[#3E3D40] hover:bg-[#DFF5FC] active:bg-[#BFEAFB]'
              : 'text-[#B0B1B3] cursor-not-allowed'
          }`}
        >
          <span className="flex items-center justify-center w-10 h-16 mr-[-6px]">
            <AcceptIcon />
          </span>
          <span
            className="text-[18px] font-normal leading-[28px] px-4"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Accept
          </span>
        </button>
      </div>
    </motion.div>
  );
}
