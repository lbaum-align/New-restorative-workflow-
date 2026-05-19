import { useState } from 'react';
import type { MaterialType } from './types';
import { MATERIAL_LABELS, MATERIAL_THRESHOLDS } from './constants';

const OPTIONS: MaterialType[] = [
  'bruxzir-esthetic',
  'bruxzir-full-strength',
  'emax',
  'lithium-disilicate',
  'pfm',
];

interface CopilotMaterialSelectorProps {
  selected: MaterialType;
  onChange: (material: MaterialType) => void;
}

export default function CopilotMaterialSelector({ selected, onChange }: CopilotMaterialSelectorProps) {
  const [open, setOpen] = useState(false);
  const t = MATERIAL_THRESHOLDS[selected];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-[#d1d5db] bg-white hover:border-[#94a3b8] transition-colors text-left"
      >
        <div>
          <div className="text-[13px] font-semibold text-[#334155]">{MATERIAL_LABELS[selected]}</div>
          <div className="text-[11px] text-[#64748b]">{t.ideal} mm ideal · {t.min} mm min</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-[#d1d5db] rounded-lg shadow-lg z-50 overflow-hidden">
          {OPTIONS.map(mat => {
            const th = MATERIAL_THRESHOLDS[mat];
            return (
              <button
                key={mat}
                onClick={() => { onChange(mat); setOpen(false); }}
                className="w-full px-3.5 py-2.5 text-left hover:bg-[#f1f5f9] transition-colors"
                style={{ background: mat === selected ? '#f1f5f9' : undefined }}
              >
                <div className="text-[13px] font-semibold text-[#334155]">{MATERIAL_LABELS[mat]}</div>
                <div className="text-[11px] text-[#64748b]">{th.ideal} mm ideal · {th.min} mm min</div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
