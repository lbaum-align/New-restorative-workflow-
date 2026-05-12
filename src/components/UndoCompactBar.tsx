import { useState } from "react";
import { motion } from "motion/react";

interface UndoCompactBarProps {
  onUndo: () => void;
  onRedo: () => void;
  onAccept: () => void;
  onClose: () => void;
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
      className="h-16 w-full min-w-[120px] rounded-[4px] flex items-center justify-center px-6 text-[20px] font-medium transition-colors disabled:cursor-not-allowed"
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

export default function UndoCompactBar({
  onUndo,
  onRedo,
  onAccept,
  onClose,
  canUndo,
  canRedo,
}: UndoCompactBarProps) {
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

      {/* Body: undo/redo icons + accept */}
      <div className="bg-white flex items-center rounded-b-[8px]">
        {/* Undo/Redo icon buttons */}
        <div className="flex items-center">
          <button
            onClick={canUndo ? onUndo : undefined}
            disabled={!canUndo}
            className="w-20 h-20 flex items-center justify-center hover:bg-[#DFF5FC] active:bg-[#BFEAFB] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <UndoArrowIcon />
          </button>
          <button
            onClick={canRedo ? onRedo : undefined}
            disabled={!canRedo}
            className="w-20 h-20 flex items-center justify-center hover:bg-[#DFF5FC] active:bg-[#BFEAFB] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RedoArrowIcon />
          </button>
        </div>

        {/* Divider + Accept */}
        <div className="border-l border-[#e0e0e0] p-2 rounded-br-[8px] w-[140px]">
          <AcceptButton onClick={onAccept} disabled={!canUndo && !canRedo} />
        </div>
      </div>
    </motion.div>
  );
}
