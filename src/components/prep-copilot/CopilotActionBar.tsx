import type { ViewId, AnalysisStatus } from './types';

interface CopilotActionBarProps {
  activeView: ViewId | null;
  analysisProgress: Record<ViewId, AnalysisStatus>;
  overallProgress: number;
  onViewChange: (view: ViewId) => void;
}

const NEXT_VIEW: Record<ViewId, ViewId | null> = {
  margin: 'reduction',
  reduction: 'insertion',
  insertion: 'undercuts',
  undercuts: 'crown',
  zones: 'crown',
  crown: null,
};

const NEXT_LABELS: Record<ViewId, string> = {
  margin: 'Check Reduction',
  reduction: 'View Insertion Path',
  insertion: 'Check Undercuts',
  undercuts: 'Preview Crown',
  zones: 'Preview Crown',
  crown: 'Analysis Complete',
};

export default function CopilotActionBar({ activeView, analysisProgress, overallProgress, onViewChange }: CopilotActionBarProps) {
  const allComplete = Object.values(analysisProgress).every(s => s === 'complete');
  const isAnalyzing = Object.values(analysisProgress).some(s => s === 'running');

  if (isAnalyzing && !activeView) {
    return (
      <div className="px-4 py-3.5 border-t border-[#e5e7eb] shrink-0">
        <div className="flex items-center gap-2.5 mb-2">
          <svg className="animate-spin h-3.5 w-3.5 text-[#009ACE]" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
            <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
          </svg>
          <span className="text-[12px] font-medium text-[#64748b]">Analyzing...</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-[#e5e7eb] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#009ACE] transition-all duration-300"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>
    );
  }

  if (!activeView) return null;

  const nextView = NEXT_VIEW[activeView];
  const nextAvailable = nextView && analysisProgress[nextView] === 'complete';

  return (
    <div className="px-4 py-3.5 border-t border-[#e5e7eb] shrink-0">
      {nextView && nextAvailable ? (
        <button
          onClick={() => onViewChange(nextView)}
          className="w-full py-2.5 px-3 rounded-md bg-[#009ACE] text-white text-[13px] font-semibold hover:bg-[#0088B8] active:scale-[0.98] transition-all"
        >
          Next: {NEXT_LABELS[activeView]}
        </button>
      ) : allComplete && !nextView ? (
        <div className="text-center text-[12px] text-[#00964E] font-semibold py-1">
          Analysis complete
        </div>
      ) : (
        <div className="text-center text-[12px] text-[#94a3b8] py-1">
          Waiting for analysis...
        </div>
      )}
    </div>
  );
}
