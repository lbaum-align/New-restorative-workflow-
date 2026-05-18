import { useState } from 'react';
import { motion } from 'framer-motion';

interface HeatmapLegendProps {
  visible: boolean;
}

const SCALE_COLORS = [
  '#6b0303', '#a00909', '#c61313', 'red', '#f7771a', '#ffa007', '#ffd600',
  '#ffe500', '#54bf00', '#2ce9c6', '#0ef4fc', '#3eb9ff', '#0197ec', '#0065ff', '#003f9e',
];

const SCALE_VALUES: Record<string, string[]> = {
  '0.1': ['<0.1','0.1','0.2','0.3','0.4','0.5','0.6','0.7','0.8','0.9','1.0','1.1','1.2','1.3','>1.4'],
  '0.2': ['<0.2','0.2','0.4','0.6','0.8','1.0','1.2','1.4','1.6','1.8','2.0','2.2','2.4','2.6','>2.8'],
};

export default function HeatmapLegend({ visible }: HeatmapLegendProps) {
  const [selectedScale, setSelectedScale] = useState('0.1');
  if (!visible) return null;

  const values = SCALE_VALUES[selectedScale];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30"
    >
      <div className="flex gap-[16px] items-center justify-center" data-name="Prep Qc Panel">
        <div className="flex h-[44px] items-center shrink-0" data-name="ColorScale">
          {SCALE_COLORS.map((color, i) => (
            <div key={i} className="flex flex-col items-end shrink-0 w-[69px]">
              <div className="h-[20px] shrink-0 w-full" style={{ backgroundColor: color }}>
                <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
              </div>
              <p className="font-['Roboto',sans-serif] font-normal leading-[28px] shrink-0 text-[18px] text-black text-center w-full">
                {values[i]}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-[4px] items-start shrink-0">
          {(['0.1', '0.2'] as const).map((scale) => {
            const isSelected = selectedScale === scale;
            return (
              <button
                key={scale}
                onClick={() => setSelectedScale(scale)}
                className={`${isSelected ? 'bg-[#bfeafb] border-[#408dc1]' : 'bg-[#f9f9f9] border-[#939598]'} h-[48px] min-w-[108px] rounded-[4px] shrink-0 transition-all hover:opacity-90 border`}
              >
                <div className="flex h-full items-center justify-center px-[16px] py-[22px]">
                  <span className={`font-['Roboto',sans-serif] font-medium text-[18px] tracking-[0.2px] ${isSelected ? 'text-[#0067ac]' : 'text-[#3e3d40]'}`}>
                    {scale}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
