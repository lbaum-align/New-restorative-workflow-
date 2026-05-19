import { motion, AnimatePresence } from 'framer-motion';
import type { ViewFinding, ViewId, ZoneReduction, ZoneId } from './types';
import { ZONE_LABELS } from './constants';

interface CopilotFindingCardProps {
  activeView: ViewId | null;
  finding: ViewFinding | null;
  zoneReductions?: ZoneReduction[];
  selectedZone?: ZoneId | null;
  onZoneSelect?: (zone: ZoneId) => void;
}

const STATUS_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  pass: { bg: '#DCFCE8', text: '#166534', border: '#86EFAC' },
  warning: { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D' },
  fail: { bg: '#FEE2E2', text: '#991B1B', border: '#FCA5A5' },
};

export default function CopilotFindingCard({ activeView, finding, zoneReductions, selectedZone, onZoneSelect }: CopilotFindingCardProps) {
  if (!finding || !activeView) return null;

  const statusStyle = STATUS_COLORS[finding.status];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeView}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        className="px-4 py-3 flex-1 overflow-y-auto"
      >
        {/* Main finding card */}
        <div className="rounded-lg border border-[#e5e7eb] p-3 mb-3">
          <div className="text-[13px] font-semibold text-[#0f172a] mb-1">{finding.title}</div>
          {finding.area && (
            <div className="text-[11px] text-[#64748b] mb-2">Area: {finding.area}</div>
          )}

          {finding.measurement && (
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[12px] text-[#374151] font-medium">{finding.measurement}</span>
              {finding.target && (
                <span className="text-[10px] text-[#94a3b8]">({finding.target})</span>
              )}
            </div>
          )}

          <div
            className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium"
            style={{
              background: statusStyle.bg,
              color: statusStyle.text,
              border: `1px solid ${statusStyle.border}`,
            }}
          >
            {finding.statusLabel}
          </div>
        </div>

        {/* Zone reduction list (shown in reduction + zones views) */}
        {(activeView === 'reduction' || activeView === 'zones') && zoneReductions && (
          <div className="space-y-1.5">
            <div className="text-[11px] font-medium text-[#475569] mb-1">Zone Measurements</div>
            {zoneReductions.map(zr => {
              const zs = STATUS_COLORS[zr.status];
              const isSelected = selectedZone === zr.zone;
              return (
                <button
                  key={zr.zone}
                  onClick={() => onZoneSelect?.(zr.zone)}
                  className="w-full flex items-center justify-between px-2.5 py-2 rounded-md border transition-all text-left"
                  style={{
                    borderColor: isSelected ? '#009ACE' : '#e5e7eb',
                    background: isSelected ? 'rgba(0,154,206,0.05)' : '#fff',
                  }}
                >
                  <div>
                    <div className="text-[11px] font-medium text-[#374151]">{ZONE_LABELS[zr.zone]}</div>
                    <div className="text-[10px] text-[#64748b]">{zr.measured} mm / {zr.target} mm target</div>
                  </div>
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: zs.text }}
                  />
                </button>
              );
            })}

            {/* Legend */}
            {activeView === 'reduction' && (
              <div className="flex items-center gap-3 mt-2 pt-2 border-t border-[#e5e7eb]">
                <span className="flex items-center gap-1 text-[9px] text-[#64748b]">
                  <span className="w-2 h-2 rounded-full bg-[#991B1B]" /> Below target
                </span>
                <span className="flex items-center gap-1 text-[9px] text-[#64748b]">
                  <span className="w-2 h-2 rounded-full bg-[#92400E]" /> Minimum
                </span>
                <span className="flex items-center gap-1 text-[9px] text-[#64748b]">
                  <span className="w-2 h-2 rounded-full bg-[#166534]" /> Ideal
                </span>
              </div>
            )}
          </div>
        )}

        {/* Recommendation */}
        <div className="mt-3 flex items-start gap-2 px-2 py-2 rounded-md bg-[#f8fafc]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#009ACE" strokeWidth="2" strokeLinecap="round" className="shrink-0 mt-0.5">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
          <span className="text-[11px] text-[#475569]">{finding.recommendation}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
