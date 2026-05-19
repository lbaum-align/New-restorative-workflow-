import { motion, AnimatePresence } from 'framer-motion';
import type { ViewFinding, ViewId, ZoneReduction, ZoneId, MaterialType } from './types';
import { ZONE_LABELS, MATERIAL_LABELS, MATERIAL_THRESHOLDS } from './constants';

interface CopilotFindingCardProps {
  activeView: ViewId | null;
  finding: ViewFinding | null;
  zoneReductions?: ZoneReduction[];
  selectedZone?: ZoneId | null;
  selectedMaterial: MaterialType;
  onZoneSelect?: (zone: ZoneId) => void;
}

const STATUS_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  pass: { bg: '#DCFCE8', text: '#166534', border: '#86EFAC' },
  warning: { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D' },
  fail: { bg: '#FEE2E2', text: '#991B1B', border: '#FCA5A5' },
};

export default function CopilotFindingCard({ activeView, finding, zoneReductions, selectedZone, selectedMaterial, onZoneSelect }: CopilotFindingCardProps) {
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
        <div className="rounded-lg border border-[#e5e7eb] p-3.5 mb-3">
          <div className="text-[15px] font-semibold tracking-tight text-[#0f172a] mb-1.5">{finding.title}</div>
          {finding.area && (
            <div className="text-[12px] text-[#64748b] mb-2.5">Area: {finding.area}</div>
          )}

          {finding.measurement && (
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-[13px] text-[#334155] font-semibold">{finding.measurement}</span>
              {finding.target && (
                <span className="text-[11px] text-[#94a3b8]">({finding.target})</span>
              )}
            </div>
          )}

          <div
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold"
            style={{
              background: statusStyle.bg,
              color: statusStyle.text,
              border: `1px solid ${statusStyle.border}`,
            }}
          >
            {finding.statusLabel}
          </div>
        </div>

        {/* Zone reduction list (shown in reduction view) */}
        {activeView === 'reduction' && zoneReductions && (
          <div className="space-y-2">
            <div className="text-[12px] font-semibold text-[#475569] mb-1">Zone Measurements</div>
            {zoneReductions.map(zr => {
              const zs = STATUS_COLORS[zr.status];
              const isSelected = selectedZone === zr.zone;
              return (
                <button
                  key={zr.zone}
                  onClick={() => onZoneSelect?.(zr.zone)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-md border transition-all text-left"
                  style={{
                    borderColor: isSelected ? '#009ACE' : '#e5e7eb',
                    background: isSelected ? 'rgba(0,154,206,0.05)' : '#fff',
                  }}
                >
                  <div>
                    <div className="text-[12px] font-semibold text-[#334155]">{ZONE_LABELS[zr.zone]}</div>
                    <div className="text-[11px] text-[#64748b]">{zr.measured} mm / {zr.target} mm target</div>
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
              <div className="flex items-center gap-3 mt-2.5 pt-2 border-t border-[#e5e7eb]">
                <span className="flex items-center gap-1 text-[10px] text-[#64748b]">
                  <span className="w-2 h-2 rounded-full bg-[#991B1B]" /> Below target
                </span>
                <span className="flex items-center gap-1 text-[10px] text-[#64748b]">
                  <span className="w-2 h-2 rounded-full bg-[#92400E]" /> Minimum
                </span>
                <span className="flex items-center gap-1 text-[10px] text-[#64748b]">
                  <span className="w-2 h-2 rounded-full bg-[#166534]" /> Ideal
                </span>
              </div>
            )}
          </div>
        )}

        {/* Recommendation */}
        <div className="mt-4 flex items-start gap-2.5 px-3 py-2.5 rounded-md bg-[#f8fafc]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#009ACE" strokeWidth="2" strokeLinecap="round" className="shrink-0 mt-0.5">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
          <span className="text-[12px] leading-5 text-[#475569]">{finding.recommendation}</span>
        </div>

        {/* Smart suggestions */}
        <div className="mt-4 rounded-lg border border-[#bfdbfe] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)] px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-[15px] font-semibold tracking-tight text-[#0f4c81]">Smart Suggestions</div>
            <span className="rounded-full bg-[#dbeafe] px-2.5 py-0.5 text-[11px] font-semibold text-[#1d4ed8]">
              {MATERIAL_LABELS[selectedMaterial]}
            </span>
          </div>
          <ul className="text-[13px] leading-6 text-[#334155] space-y-2.5">
            {getSmartSuggestions(activeView, selectedMaterial).map((suggestion) => (
              <li key={suggestion.title} className="flex items-start gap-2.5 rounded-md bg-white/60 px-3 py-2.5 border border-[#dbeafe]">
                <span className="mt-[7px] h-2 w-2 rounded-full bg-[#009ACE] shrink-0" />
                <span>
                  <span className="font-semibold text-[#0f172a]">{suggestion.title}: </span>
                  <span>{suggestion.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Material overview */}
        <div className="mt-4 rounded-lg border border-[#e2e8f0] bg-white px-3.5 py-3 shadow-sm">
          <div className="text-[15px] font-semibold tracking-tight text-[#334155] mb-2">Material Overview</div>
          <div className="text-[13px] text-[#475569] space-y-2">
            <div className="flex items-center justify-between rounded-md bg-[#f8fafc] px-2.5 py-1.5">
              <span className="font-semibold text-[#334155]">Ideal reduction</span>
              <span className="font-semibold text-[#0f172a]">{MATERIAL_THRESHOLDS[selectedMaterial].ideal.toFixed(2)} mm</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-[#f8fafc] px-2.5 py-1.5">
              <span className="font-semibold text-[#334155]">Minimum reduction</span>
              <span className="font-semibold text-[#0f172a]">{MATERIAL_THRESHOLDS[selectedMaterial].min.toFixed(2)} mm</span>
            </div>
            <div className="mt-2 rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2.5 text-[12px] leading-6 text-[#64748b]">
              {getMaterialOverview(selectedMaterial)}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function getSmartSuggestions(activeView: ViewId, material: MaterialType): Array<{ title: string; body: string }> {
  const t = MATERIAL_THRESHOLDS[material];
  switch (activeView) {
    case 'margin':
      return [
        { title: 'Continuity', body: 'Keep a single uninterrupted finish line around the cervical area.' },
        { title: 'Depth target', body: `Aim for ~${(t.min * 0.45).toFixed(2)}-${(t.min * 0.7).toFixed(2)} mm line depth before moving to reduction.` },
      ];
    case 'reduction':
      return [
        { title: 'Zone-first workflow', body: 'Tap Occlusal/Buccal/Lingual/Mesial/Distal to validate each wall independently.' },
        { title: 'Material target', body: `Prioritize ${t.ideal.toFixed(2)} mm ideal and never go below ${t.min.toFixed(2)} mm minimum.` },
      ];
    case 'insertion':
      return [
        { title: 'Path alignment', body: 'Align axial walls to the blue insertion axis to reduce seating deviation.' },
        { title: 'Consistency', body: 'Avoid abrupt wall angle changes between adjacent surfaces.' },
      ];
    case 'undercuts':
      return [
        { title: 'Priority', body: 'Resolve the deepest red undercut first, then reassess adjacent walls.' },
        { title: 'Verification', body: 'Re-check insertion path after each undercut correction.' },
      ];
    case 'crown':
      return [
        { title: 'Seating', body: 'Confirm crown seats fully on prep with no collision points.' },
        { title: 'Finish', body: 'Verify margin continuity and proximal clearance before finalizing.' },
      ];
    case 'zones':
      return [{ title: 'Zones', body: 'Inspect each zone and normalize prep thickness.' }];
    default:
      return [];
  }
}

function getMaterialOverview(material: MaterialType): string {
  switch (material) {
    case 'bruxzir-esthetic':
      return 'Esthetic zirconia: prioritize uniform reduction and smooth transitions for better translucency.';
    case 'bruxzir-full-strength':
      return 'Full-strength zirconia: allows lower minimum thickness, suitable for higher load zones.';
    case 'emax':
      return 'IPS e.max: needs deeper reduction for esthetics and ceramic support, especially occlusal.';
    case 'lithium-disilicate':
      return 'Lithium disilicate: balance esthetics and strength with controlled wall taper and thickness.';
    case 'pfm':
      return 'PFM: ensure space for both metal coping and porcelain layering in functional/esthetic areas.';
    default:
      return 'Material profile loaded.';
  }
}
