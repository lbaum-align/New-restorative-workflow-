import { useState } from "react";
import { motion } from "motion/react";

interface UndoStackedProps {
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

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 12L10 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AcceptButton({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const bg = disabled ? '#F9F9F9' : isPressed ? '#BFEAFB' : isHovered ? '#DFF5FC' : '#F9F9F9';
  const borderColor = disabled ? '#D1D1D1' : '#939598';
  const color = disabled ? '#B0B1B3' : '#3E3D40';

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className="w-[60px] h-[60px] rounded-[4px] flex items-center justify-center transition-colors disabled:cursor-not-allowed"
      style={{
        backgroundColor: bg,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor,
        color,
      }}
    >
      <CheckIcon />
    </button>
  );
}

export default function UndoStacked({
  onUndo,
  onRedo,
  onAccept,
  canUndo,
  canRedo,
}: UndoStackedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
      className="flex flex-col items-center gap-1 bg-white rounded-[8px] p-1 shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
    >
      {/* Undo */}
      <button
        onClick={canUndo ? onUndo : undefined}
        disabled={!canUndo}
        className="w-[60px] h-[60px] rounded-[4px] flex items-center justify-center text-[#3E3D40] hover:bg-[#DFF5FC] active:bg-[#BFEAFB] transition-colors disabled:text-[#B0B1B3] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <UndoIcon />
      </button>

      {/* Redo */}
      <button
        onClick={canRedo ? onRedo : undefined}
        disabled={!canRedo}
        className="w-[60px] h-[60px] rounded-[4px] flex items-center justify-center text-[#3E3D40] hover:bg-[#DFF5FC] active:bg-[#BFEAFB] transition-colors disabled:text-[#B0B1B3] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <RedoIcon />
      </button>

      {/* Divider */}
      <div className="h-px w-8 bg-[#E0E0E0]" />

      {/* Accept */}
      <AcceptButton onClick={onAccept} disabled={!canUndo && !canRedo} />
    </motion.div>
  );
}
