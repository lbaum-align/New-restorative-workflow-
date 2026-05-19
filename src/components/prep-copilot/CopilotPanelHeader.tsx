import type { MaterialType } from './types';
import CopilotMaterialSelector from './CopilotMaterialSelector';

interface CopilotPanelHeaderProps {
  onClose: () => void;
  selectedMaterial: MaterialType;
  onMaterialChange: (material: MaterialType) => void;
  statusText?: string;
}

export default function CopilotPanelHeader({ onClose, selectedMaterial, onMaterialChange, statusText }: CopilotPanelHeaderProps) {
  return (
    <div className="shrink-0">
      {/* Title row */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{
          background: 'linear-gradient(90deg, rgba(0,154,206,0.08) 0%, rgba(139,92,246,0.08) 100%)',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 36 36" fill="none">
            <defs>
              <linearGradient id="hdr-sparkle" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#009ACE" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <path
              d="M18 3 L20.5 13.5 L31 18 L20.5 22.5 L18 33 L15.5 22.5 L5 18 L15.5 13.5 Z"
              fill="url(#hdr-sparkle)"
            />
          </svg>
          <span className="text-[15px] font-semibold text-[#374151]">Prep Copilot</span>
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

      {/* Status + Material */}
      <div className="px-4 py-2 border-b border-[#e5e7eb]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[12px] text-[#64748b]">
            {statusText || '1 prep detected'}
          </span>
        </div>
        <CopilotMaterialSelector
          selected={selectedMaterial}
          onChange={onMaterialChange}
        />
      </div>
    </div>
  );
}
