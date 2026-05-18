import { motion } from 'framer-motion';
import PrepCopilotChatStream from './PrepCopilotChatStream';
import PrepCopilotScoreDashboard from './PrepCopilotScoreDashboard';
import PrepCopilotCommandChips from './PrepCopilotCommandChips';
import { PANEL_WIDTH } from './constants';
import type { ChatMessage, ScoreData, CommandChip } from './types';

interface OrchestratorData {
  messages: ChatMessage[];
  scores: ScoreData;
  activeOverlays: Set<string>;
  commandChips: CommandChip[];
  isSequenceComplete: boolean;
  isRescanning: boolean;
  triggerRescan: () => void;
  executeCommand: (chipId: string) => void;
}

interface PrepCopilotPanelProps {
  onClose?: () => void;
  orchestrator: OrchestratorData;
  viewAngle?: string;
  toolbarCollapsed?: boolean;
}

export default function PrepCopilotPanel({ onClose, orchestrator, viewAngle, toolbarCollapsed = true }: PrepCopilotPanelProps) {
  const {
    messages,
    scores,
    activeOverlays,
    commandChips,
    isSequenceComplete,
    isRescanning,
    triggerRescan,
    executeCommand,
  } = orchestrator;

  // Inject live view angle into scores for display
  const displayScores = viewAngle
    ? { ...scores, viewAngle }
    : scores;

  const showUpdatedBadge = activeOverlays.has('rescan-update');

  // Toolbar: top-4 (16px), collapsed height 76px, expanded ~100px, 8px gap
  const panelTop = toolbarCollapsed ? 16 + 76 + 8 : 16 + 100 + 8;

  return (
    <motion.div
      initial={{ x: PANEL_WIDTH }}
      animate={{ x: 0 }}
      exit={{ x: PANEL_WIDTH }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="absolute z-[45] flex flex-col bg-white shadow-[-4px_0_16px_rgba(0,0,0,0.1)] rounded-[8px] overflow-hidden"
      style={{
        width: PANEL_WIDTH,
        right: 16,
        bottom: 16,
        top: panelTop,
        transition: 'top 0.25s cubic-bezier(0,0,1,1)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 shrink-0"
        style={{
          background: 'linear-gradient(90deg, rgba(0,154,206,0.08) 0%, rgba(139,92,246,0.08) 100%)',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <div className="flex items-center gap-2">
          {/* Small sparkle icon */}
          <svg width="18" height="18" viewBox="0 0 36 36" fill="none">
            <defs>
              <linearGradient id="header-sparkle" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#009ACE" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <path
              d="M18 3 L20.5 13.5 L31 18 L20.5 22.5 L18 33 L15.5 22.5 L5 18 L15.5 13.5 Z"
              fill="url(#header-sparkle)"
            />
          </svg>
          <span className="text-[15px] font-semibold text-[#374151] font-['Roboto',sans-serif]">
            Prep Copilot
          </span>
          <span className="text-[10px] font-medium text-[#8B5CF6] bg-[#8B5CF6]/10 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
            AI
          </span>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-black/5 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Chat Stream */}
      <PrepCopilotChatStream messages={messages} />

      {/* Score Dashboard */}
      <PrepCopilotScoreDashboard
        scores={displayScores}
        isRescanning={isRescanning}
        showUpdatedBadge={showUpdatedBadge}
      />

      {/* Command Chips */}
      <PrepCopilotCommandChips
        chips={commandChips}
        onChipClick={executeCommand}
      />

      {/* Rescan Button */}
      {isSequenceComplete && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-4 py-3 border-t border-[#e5e7eb] shrink-0"
        >
          <button
            onClick={triggerRescan}
            disabled={isRescanning}
            className={`w-full py-2.5 rounded-[8px] text-[14px] font-medium font-['Roboto',sans-serif] transition-all duration-200 ${
              isRescanning
                ? 'bg-[#009ACE]/50 text-white cursor-wait'
                : 'bg-[#009ACE] text-white hover:bg-[#0088B8] active:scale-[0.98]'
            }`}
          >
            {isRescanning ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                  <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                </svg>
                Rescanning...
              </span>
            ) : (
              'Simulate Rescan After Drilling'
            )}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
