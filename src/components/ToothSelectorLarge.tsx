import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ToothLarge from "../imports/ToothLarge-257-8242";
import ToothLarge17 from "../imports/ToothLarge-257-8359";
import ToothLarge16 from "../imports/ToothLarge-257-8445";
import ToothLarge15 from "../imports/ToothLarge-257-8503";
import ToothLarge14 from "../imports/ToothLarge-257-8572";
import ToothLarge13 from "../imports/ToothLarge-257-8621";
import ToothLarge12 from "../imports/ToothLarge-257-8677";
import ToothLarge11 from "../imports/ToothLarge-257-8728";
import ToothLarge21 from "../imports/ToothLarge-257-8783";
import ToothLarge22 from "../imports/ToothLarge-257-8847";
import ToothLarge23 from "../imports/ToothLarge-257-9032";
import ToothLarge24 from "../imports/ToothLarge-257-8969";
import ToothLarge25 from "../imports/ToothLarge-257-9098";
import ToothLarge26 from "../imports/ToothLarge-257-9179";
import ToothLarge27 from "../imports/ToothLarge-257-9278";
import ToothLarge28 from "../imports/ToothLarge-257-9380";
import ToothLarge47 from "../imports/ToothLarge-257-9542";
import ToothLarge48 from "../imports/ToothLarge-257-9469";
import ToothLarge46 from "../imports/ToothLarge-257-9795";
import ToothLarge45 from "../imports/ToothLarge-257-9844";
import ToothLarge44 from "../imports/ToothLarge-257-9897";
import ToothLarge43 from "../imports/ToothLarge-257-9953";
import ToothLarge42 from "../imports/ToothLarge-257-9994";
import ToothLarge41 from "../imports/ToothLarge-257-10047";
import ToothLarge31 from "../imports/ToothLarge-259-6059";
import ToothLarge32 from "../imports/ToothLarge-259-6108";
import ToothLarge33 from "../imports/ToothLarge-259-6153";
import ToothLarge34 from "../imports/ToothLarge-259-6219";
import ToothLarge35 from "../imports/ToothLarge-259-6266";
import ToothLarge36 from "../imports/ToothLarge-259-6351";
import ToothLarge37 from "../imports/ToothLarge-259-6445";
import ToothLarge38 from "../imports/ToothLarge-259-6546";
import ToothTreatmentTable from './ToothTreatmentTable';
import CopyFromButton from './CopyFromButton';

function Header() {
  return (
    <div className="hidden">
      {/* Empty header for spacing */}
    </div>
  );
}

interface TreatmentTypeProps {
  label: string;
  color: string;
  isSelected?: boolean;
  onClick?: () => void;
}

function TreatmentType({ label, color, isSelected = false, onClick }: TreatmentTypeProps) {
  return (
    <button
      className={`flex items-center gap-[8px] px-[12px] h-[40px] relative shrink-0 transition-all cursor-pointer hover:opacity-80 ${
        isSelected ? 'rounded-[4px]' : 'rounded-[4px]'
      }`}
      style={{
        backgroundColor: isSelected ? color : '#f9f9f9',
        outline: isSelected ? `2px solid ${color}` : undefined,
      }}
      onClick={onClick}
    >
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[4px] ${isSelected ? 'border-transparent' : 'border-[#d1d1d1]'}`} />
      <div className="relative shrink-0 size-[20px]">
        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
          <g>
            <rect fill={isSelected ? '#ffffff' : color} height="20" rx="10" width="20" x="2" y="2" />
            <rect height="20" rx="10" stroke={isSelected ? color : '#F9F9F9'} strokeWidth="4" width="20" x="2" y="2" />
            {color === '#C0C0C0' && !isSelected && (
              <rect height="20" rx="10" stroke="black" strokeOpacity="0.06" strokeWidth="4" width="20" x="2" y="2" />
            )}
          </g>
        </svg>
      </div>
      <span className={`font-['Roboto:Bold',sans-serif] font-bold text-[14px] leading-[20px] whitespace-nowrap ${isSelected ? 'text-white' : 'text-[#3e3d40]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
      </span>
    </button>
  );
}

const treatmentTypes = [
  { label: 'Crown', color: '#8B2FC9' },
  { label: 'Bridge', color: '#4ECDC4' },
  { label: 'Veneer', color: '#F0B547' },
  { label: 'Inlay', color: '#F08DC0' },
  { label: 'Onlay', color: '#A67C52' },
  { label: 'Eggshell', color: '#4DA6FF' },
  { label: 'Mockup', color: '#6B3FA0' },
  { label: 'Missing', color: '#C0C0C0' },
  { label: 'Implant based', color: '#F28C5A' }
];

interface ToothSelectorLargeProps {
  selectedTeeth?: string[];
  selectedTreatment?: string;
  onToothSelect?: (tooth: string) => void;
  onTreatmentSelect?: (treatment: string) => void;
  variant?: 'default' | 'compact';
  rightPanel?: React.ReactNode;
  toothTreatments?: { [tooth: string]: string };
  toothSpecifications?: { [tooth: string]: { [key: string]: string } };
  readOnly?: boolean;
  onViewChange?: (view: 'chart' | 'table') => void;
  customTreatmentTypes?: { label: string; color: string }[];
  onCopyFrom?: (sourceTooth: string, targetTeeth: string[]) => void;
}

export default function ToothSelectorLarge({
  selectedTeeth = [],
  selectedTreatment = '',
  onToothSelect,
  onTreatmentSelect,
  variant = 'default',
  rightPanel,
  toothTreatments = {},
  toothSpecifications = {},
  readOnly = false,
  onViewChange,
  customTreatmentTypes,
  onCopyFrom,
}: ToothSelectorLargeProps) {
  const [internalSelectedTeeth, setInternalSelectedTeeth] = useState<string[]>(selectedTeeth);
  const [internalSelectedTreatment, setInternalSelectedTreatment] = useState<string>(selectedTreatment);
  const [activeView, setActiveView] = useState<'chart' | 'table'>('chart');

  const handleViewChange = (view: 'chart' | 'table') => {
    setActiveView(view);
    if (onViewChange) {
      onViewChange(view);
    }
  };

  const handleToothClick = (tooth: string) => {
    if (readOnly) return;
    if (onToothSelect) {
      onToothSelect(tooth);
    } else {
      setInternalSelectedTeeth(prev => 
        prev.includes(tooth) 
          ? prev.filter(t => t !== tooth)
          : [...prev, tooth]
      );
    }
  };

  const handleTreatmentClick = (treatment: string) => {
    if (readOnly) return;
    if (onTreatmentSelect) {
      onTreatmentSelect(treatment);
    } else {
      setInternalSelectedTreatment(prev => prev === treatment ? '' : treatment);
    }
  };

  const activeSelectedTeeth = onToothSelect ? selectedTeeth : internalSelectedTeeth;
  const activeSelectedTreatment = onTreatmentSelect ? selectedTreatment : internalSelectedTreatment;

  const isToothSelected = (tooth: number) => activeSelectedTeeth.includes(tooth.toString());
  
  // Get treatment color for a tooth based on toothTreatments mapping
  const getToothTreatmentColor = (tooth: number): string | null => {
    const treatment = toothTreatments[tooth.toString()];
    if (!treatment) return null;
    const activeTreatmentTypes = customTreatmentTypes || treatmentTypes;
    const treatmentType = activeTreatmentTypes.find(t => t.label === treatment);
    return treatmentType ? treatmentType.color : null;
  };

  // Determine sizing based on variant
  const isCompact = variant === 'compact';
  const toothSize = isCompact ? 'w-[36px] h-[44px]' : 'w-[48px] h-[60px]';
  const toothGap = isCompact ? 'gap-[6px]' : 'gap-[4px]';
  const rowGap = isCompact ? 'gap-[16px]' : 'gap-[24px]';
  const padding = isCompact ? 'py-[24px] px-[20px]' : 'py-[32px] px-[24px]';
  const itemGap = isCompact ? 'gap-[3px]' : 'gap-[4px]';
  const fontSize = isCompact ? 'text-[12px]' : 'text-[14px]';
  const svgSize = isCompact ? { width: 36, height: 44 } : { width: 48, height: 60 };

  return (
    <div className={`bg-white relative rounded-[8px] w-full h-full flex ${isCompact ? 'flex' : ''}`} data-name="ToothSelectorLarge">
      {/* Left side: Tooth Chart + Treatment Types */}
      <div className={`bg-white flex flex-col h-full items-start relative ${activeView === 'table' ? 'w-full' : 'flex-1 min-w-0'} ${isCompact ? 'rounded-l-[8px]' : 'rounded-[inherit]'} p-[0px]`}>
        
        {/* Inner group — keeps tabs left-aligned with chart and treatments */}
        <div className="flex flex-col w-full h-full">
          {/* Chart / Table Tabs */}
          <div className={`flex justify-between items-center border-b border-[#e0e0e0] ${isCompact ? 'px-[20px] pt-[20px] pb-[16px]' : 'px-[24px] pt-[24px] pb-[20px]'}`}>
            <button
              className={`font-['Roboto:Medium',sans-serif] font-medium text-[14px] leading-[20px] px-[12px] py-[8px] rounded-[4px] transition-colors ${
                activeView === 'chart'
                  ? 'text-[#009ace] border-b-2 border-[#009ace]'
                  : 'text-[#696a6d] hover:text-[#3e3d40]'
              }`}
              style={{ fontVariationSettings: "'wdth' 100" }}
              onClick={() => handleViewChange('chart')}
            >
              Chart
            </button>
            <button
              className={`font-['Roboto:Medium',sans-serif] font-medium text-[14px] leading-[20px] px-[12px] py-[8px] rounded-[4px] transition-colors ${
                activeView === 'table'
                  ? 'text-[#009ace] border-b-2 border-[#009ace]'
                  : 'text-[#696a6d] hover:text-[#3e3d40]'
              }`}
              style={{ fontVariationSettings: "'wdth' 100" }}
              onClick={() => handleViewChange('table')}
            >
              Table
            </button>
            
            {/* Copy From button - only show when teeth are selected and in chart view */}
            <div className="flex-1 flex justify-end overflow-hidden">
              <AnimatePresence mode="wait">
                {activeView === 'chart' && activeSelectedTeeth.length > 0 && onCopyFrom && (
                  <motion.div
                    key="copy-from-button"
                    initial={{ width: 0, opacity: 0, scale: 0.8 }}
                    animate={{ width: 'auto', opacity: 1, scale: 1 }}
                    exit={{ width: 0, opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.4, 0.0, 0.2, 1], // Material Design easing
                    }}
                  >
                    <CopyFromButton
                      toothTreatments={toothTreatments}
                      toothSpecifications={toothSpecifications}
                      selectedTeeth={activeSelectedTeeth}
                      onCopy={(sourceTooth) => onCopyFrom(sourceTooth, activeSelectedTeeth)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {activeView === 'table' ? (
            <div className="flex-1 overflow-auto">
              <ToothTreatmentTable
                toothTreatments={toothTreatments}
                toothSpecifications={toothSpecifications}
              />
            </div>
          ) : (
            <div className={`flex flex-col flex-1`}>
              {/* Tooth Chart - centered vertically in remaining space */}
              <div className={`flex flex-col flex-1 justify-center ${isCompact ? 'py-[24px] px-[20px]' : 'py-[32px] px-[24px]'}`}>
                <div className={`flex flex-col ${rowGap} w-full p-[0px]`}>
                  {/* Upper Jaw */}
                  <div className="flex w-full justify-between items-end">
                    {[
                      { num: 18, Comp: ToothLarge },
                      { num: 17, Comp: ToothLarge17 },
                      { num: 16, Comp: ToothLarge16 },
                      { num: 15, Comp: ToothLarge15 },
                      { num: 14, Comp: ToothLarge14 },
                      { num: 13, Comp: ToothLarge13 },
                      { num: 12, Comp: ToothLarge12 },
                      { num: 11, Comp: ToothLarge11 },
                      { num: 21, Comp: ToothLarge21 },
                      { num: 22, Comp: ToothLarge22 },
                      { num: 23, Comp: ToothLarge23 },
                      { num: 24, Comp: ToothLarge24 },
                      { num: 25, Comp: ToothLarge25 },
                      { num: 26, Comp: ToothLarge26 },
                      { num: 27, Comp: ToothLarge27 },
                      { num: 28, Comp: ToothLarge28 },
                    ].map(({ num, Comp }) => {
                      const treatmentColor = getToothTreatmentColor(num);
                      const selected = isToothSelected(num);
                      return (
                        <button
                          key={num}
                          className={`flex flex-col ${itemGap} items-center cursor-pointer group relative`}
                          onClick={() => handleToothClick(num.toString())}
                        >
                          <div
                            className={`${toothSize} relative transition-opacity p-[4px]`}
                            style={{
                              borderRadius: '30px',
                              ...(treatmentColor
                                ? { border: `2px solid ${treatmentColor}` }
                                : selected
                                  ? { border: '2px dashed #3e3d40' }
                                  : { border: '2px solid transparent' }),
                              opacity: selected || treatmentColor ? 1 : 0.6,
                            }}
                          >
                            <Comp width={svgSize.width} height={svgSize.height} className="w-full h-full" />
                          </div>
                          <span className={`${fontSize} font-['Roboto',sans-serif] ${selected ? 'text-[#009ace] font-bold' : treatmentColor ? 'font-bold' : 'text-[#696a6d]'} transition-colors`}
                            style={treatmentColor && !selected ? { color: treatmentColor } : undefined}
                          >
                            {num}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#e0e0e0]" />

                  {/* Lower Jaw */}
                  <div className="flex w-full justify-between items-start">
                    {[
                      { num: 48, Comp: ToothLarge48 },
                      { num: 47, Comp: ToothLarge47 },
                      { num: 46, Comp: ToothLarge46 },
                      { num: 45, Comp: ToothLarge45 },
                      { num: 44, Comp: ToothLarge44 },
                      { num: 43, Comp: ToothLarge43 },
                      { num: 42, Comp: ToothLarge42 },
                      { num: 41, Comp: ToothLarge41 },
                      { num: 31, Comp: ToothLarge31 },
                      { num: 32, Comp: ToothLarge32 },
                      { num: 33, Comp: ToothLarge33 },
                      { num: 34, Comp: ToothLarge34 },
                      { num: 35, Comp: ToothLarge35 },
                      { num: 36, Comp: ToothLarge36 },
                      { num: 37, Comp: ToothLarge37 },
                      { num: 38, Comp: ToothLarge38 },
                    ].map(({ num, Comp }) => {
                      const treatmentColor = getToothTreatmentColor(num);
                      const selected = isToothSelected(num);
                      return (
                        <button
                          key={num}
                          className={`flex flex-col ${itemGap} items-center cursor-pointer group relative`}
                          onClick={() => handleToothClick(num.toString())}
                        >
                          <span className={`${fontSize} font-['Roboto',sans-serif] ${selected ? 'text-[#009ace] font-bold' : treatmentColor ? 'font-bold' : 'text-[#696a6d]'} transition-colors`}
                            style={treatmentColor && !selected ? { color: treatmentColor } : undefined}
                          >
                            {num}
                          </span>
                          <div
                            className={`${toothSize} relative transition-opacity p-[4px]`}
                            style={{
                              borderRadius: '30px',
                              ...(treatmentColor
                                ? { border: `2px solid ${treatmentColor}` }
                                : selected
                                  ? { border: '2px dashed #3e3d40' }
                                  : { border: '2px solid transparent' }),
                              opacity: selected || treatmentColor ? 1 : 0.6,
                            }}
                          >
                            <Comp width={svgSize.width} height={svgSize.height} className="w-full h-full" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Treatment Types - Pinned to bottom */}
              {!readOnly && (
                <div className={`flex flex-nowrap gap-[6px] justify-center ${isCompact ? 'px-[20px] pb-[20px]' : 'px-[24px] pb-[24px]'}`}>
                  {(customTreatmentTypes || treatmentTypes).map((treatment) => (
                    <TreatmentType
                      key={treatment.label}
                      label={treatment.label}
                      color={treatment.color}
                      isSelected={activeSelectedTreatment === treatment.label}
                      onClick={() => handleTreatmentClick(treatment.label)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        {/* end inner group */}
      </div>
      
      {/* Right Panel for compact variant */}
      {isCompact && rightPanel && (
        <div className="flex items-center justify-center p-[32px] min-w-[280px] bg-white rounded-r-[8px] border-l border-[#e0e0e0] h-full">
          {rightPanel}
        </div>
      )}
    </div>
  );
}