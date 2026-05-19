import type { CameraPreset } from './types';
import { CAMERA_PRESETS } from './constants';

const PRESETS: { id: string; label: string; preset: CameraPreset }[] = [
  { id: 'occlusal', label: 'Occ', preset: CAMERA_PRESETS.occlusal },
  { id: 'buccal', label: 'Buc', preset: CAMERA_PRESETS.buccal },
  { id: 'lingual', label: 'Lin', preset: CAMERA_PRESETS.lingual },
  { id: 'mesial', label: 'Mes', preset: CAMERA_PRESETS.mesial },
  { id: 'distal', label: 'Dis', preset: CAMERA_PRESETS.distal },
];

interface CopilotViewPresetBarProps {
  onPresetSelect: (preset: CameraPreset) => void;
}

export default function CopilotViewPresetBar({ onPresetSelect }: CopilotViewPresetBarProps) {
  return (
    <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex gap-1 px-2 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#e5e7eb] shadow-sm">
      {PRESETS.map(({ id, label, preset }) => (
        <button
          key={id}
          onClick={() => onPresetSelect(preset)}
          className="px-2.5 py-1 rounded-full text-[10px] font-medium text-[#475569] hover:bg-[#f1f5f9] hover:text-[#0f172a] transition-colors"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
