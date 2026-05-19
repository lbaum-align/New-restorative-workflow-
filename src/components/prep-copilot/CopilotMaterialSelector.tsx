import { useState } from 'react';
import type { MaterialType } from './types';
import { MATERIAL_LABELS, MATERIAL_THRESHOLDS } from './constants';

const OPTIONS: MaterialType[] = ['bruxzir-esthetic', 'bruxzir-full-strength'];

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
        className="w-full flex items-center justify-between px-3 py-2 rounded-md border border-[#e5e7eb] bg-white hover:border-[#9ca3af] transition-colors text-left"
      >
        <div>
          <div className="text-[12px] font-medium text-[#374151]">{MATERIAL_LABELS[selected]}</div>
          <div className="text-[10px] text-[#64748b]">{t.ideal} mm ideal · {t.min} mm min</div>
        </div>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e5e7eb] rounded-md shadow-lg z-50 overflow-hidden">
          {OPTIONS.map(mat => {
            const th = MATERIAL_THRESHOLDS[mat];
            return (
              <button
                key={mat}
                onClick={() => { onChange(mat); setOpen(false); }}
                className="w-full px-3 py-2 text-left hover:bg-[#f1f5f9] transition-colors"
                style={{ background: mat === selected ? '#f1f5f9' : undefined }}
              >
                <div className="text-[12px] font-medium text-[#374151]">{MATERIAL_LABELS[mat]}</div>
                <div className="text-[10px] text-[#64748b]">{th.ideal} mm ideal · {th.min} mm min</div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
