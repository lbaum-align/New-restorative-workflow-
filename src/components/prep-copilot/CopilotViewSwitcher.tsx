import type { ViewId, AnalysisStatus } from './types';

const VIEWS: { id: ViewId; label: string }[] = [
  { id: 'margin', label: 'Margin' },
  { id: 'reduction', label: 'Reduction' },
  { id: 'insertion', label: 'Path' },
  { id: 'undercuts', label: 'Undercuts' },
  { id: 'zones', label: 'Areas' },
  { id: 'crown', label: 'Crown' },
];

interface CopilotViewSwitcherProps {
  activeView: ViewId | null;
  analysisProgress: Record<ViewId, AnalysisStatus>;
  onViewChange: (view: ViewId) => void;
}

export default function CopilotViewSwitcher({ activeView, analysisProgress, onViewChange }: CopilotViewSwitcherProps) {
  return (
    <div className="px-3 py-2 shrink-0">
      <div className="flex gap-1 rounded-lg bg-[#f1f5f9] p-1">
        {VIEWS.map(({ id, label }) => {
          const status = analysisProgress[id];
          const isActive = activeView === id;
          const isAvailable = status === 'complete';
          const isRunning = status === 'running';

          return (
            <button
              key={id}
              onClick={() => isAvailable && onViewChange(id)}
              disabled={!isAvailable}
              className="relative flex-1 py-2 px-1.5 rounded-md text-[12px] font-medium transition-all duration-200"
              style={{
                background: isActive ? '#009ACE' : 'transparent',
                color: isActive ? '#fff' : isAvailable ? '#374151' : '#94a3b8',
                cursor: isAvailable ? 'pointer' : 'default',
                opacity: !isAvailable && !isRunning ? 0.5 : 1,
              }}
            >
              {label}
              {isAvailable && !isActive && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#00964E]" />
              )}
              {isRunning && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#009ACE] animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
