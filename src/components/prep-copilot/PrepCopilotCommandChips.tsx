import { motion, AnimatePresence } from 'framer-motion';
import type { CommandChip } from './types';

interface CommandChipsProps {
  chips: CommandChip[];
  onChipClick: (chipId: string) => void;
}

export default function PrepCopilotCommandChips({ chips, onChipClick }: CommandChipsProps) {
  if (chips.length === 0) return null;

  return (
    <div className="px-4 py-3 border-t border-[#e5e7eb]">
      <span className="text-[10px] text-[#94a3b8] font-medium uppercase tracking-wider mb-2 block">
        Suggestions
      </span>
      <div className="flex flex-wrap gap-2">
        <AnimatePresence mode="popLayout">
          {chips.map((chip, i) => (
            <motion.button
              key={chip.id}
              initial={{ opacity: 0, scale: 0.9, y: 6 }}
              animate={{
                opacity: 1,
                scale: chip.isNew ? [1, 1.04, 1] : 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.08,
                duration: 0.3,
                scale: chip.isNew ? { duration: 0.6, repeat: 1 } : undefined,
              }}
              onClick={() => onChipClick(chip.id)}
              className={`px-3 py-1.5 rounded-full text-[12px] font-medium font-['Roboto',sans-serif] transition-all duration-150 active:scale-95 ${
                chip.active
                  ? 'bg-[#009ACE] text-white border border-[#009ACE]'
                  : 'bg-white text-[#009ACE] border border-[#009ACE]/30 hover:bg-[#009ACE]/10'
              }`}
            >
              {chip.label}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
