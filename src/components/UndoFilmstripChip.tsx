import { useState } from "react";
import { motion } from "motion/react";

interface UndoFilmstripChipProps {
  onUndo: () => void;
  onRedo: () => void;
  onAccept: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

function UndoArrowIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M9 13C9 13 11.5 7 19 7C25.627 7 31 12.373 31 19C31 25.627 25.627 31 19 31C13.5 31 8.9 27.3 7.5 22" stroke="#3E3D40" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M5 9L9 13L13 9" stroke="#3E3D40" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function RedoArrowIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M23 13C23 13 20.5 7 13 7C6.373 7 1 12.373 1 19C1 25.627 6.373 31 13 31C18.5 31 23.1 27.3 24.5 22" stroke="#3E3D40" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M27 9L23 13L19 9" stroke="#3E3D40" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AcceptButton({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const bg = disabled ? '#F9F9F9' : isPressed ? '#BFEAFB' : isHovered ? '#DFF5FC' : '#F9F9F9';
  const borderColor = disabled ? '#D1D1D1' : '#939598';
  const textColor = disabled ? '#B0B1B3' : '#3E3D40';

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className="h-16 min-w-[120px] rounded-[4px] flex items-center justify-center px-6 text-[20px] font-medium transition-colors disabled:cursor-not-allowed"
      style={{
        backgroundColor: bg,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor,
        color: textColor,
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      Accept
    </button>
  );
}

export default function UndoFilmstripChip({
  onUndo,
  onRedo,
  onAccept,
  canUndo,
  canRedo,
}: UndoFilmstripChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
      className="flex items-center gap-4 bg-white rounded-[8px] p-2"
    >
      <div className="flex items-center gap-2">
        {/* Undo */}
        <button
          onClick={canUndo ? onUndo : undefined}
          disabled={!canUndo}
          className="w-16 h-16 rounded-[4px] flex items-center justify-center border border-[#939598] bg-[#F9F9F9] hover:bg-[#DFF5FC] active:bg-[#BFEAFB] transition-colors disabled:border-[#D1D1D1] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <UndoArrowIcon />
        </button>

        {/* Redo */}
        <button
          onClick={canRedo ? onRedo : undefined}
          disabled={!canRedo}
          className="w-16 h-16 rounded-[4px] flex items-center justify-center border border-[#939598] bg-[#F9F9F9] hover:bg-[#DFF5FC] active:bg-[#BFEAFB] transition-colors disabled:border-[#D1D1D1] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RedoArrowIcon />
        </button>
      </div>

      {/* Divider */}
      <div className="w-px h-12 bg-[#E0E0E0]" />

      {/* Accept */}
      <AcceptButton onClick={onAccept} disabled={!canUndo && !canRedo} />
    </motion.div>
  );
}
