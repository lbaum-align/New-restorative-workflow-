import { useState, useRef, useEffect } from 'react';

// Map indication labels to their colors
function getIndicationColor(indication: string): string {
  const colorMap: { [key: string]: string } = {
    'Crown': '#8B2FC9',
    'Bridge': '#4ECDC4',
    'Veneer': '#F0B547',
    'Inlay': '#F08DC0',
    'Onlay': '#A67C52',
    'Eggshell': '#4DA6FF',
    'Mockup': '#6B3FA0',
    'Missing': '#C0C0C0',
    'Implant based': '#F28C5A',
    'Regular': '#757575'
  };
  return colorMap[indication] || '#ffb32d';
}

interface CopyFromButtonProps {
  toothTreatments: { [tooth: string]: string };
  toothSpecifications: { [tooth: string]: { [key: string]: string } };
  selectedTeeth: string[];
  onCopy: (sourceTooth: string) => void;
}

export default function CopyFromButton({
  toothTreatments,
  toothSpecifications,
  selectedTeeth,
  onCopy
}: CopyFromButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter to only show teeth that have both treatment AND specifications
  const availableTeeth = Object.keys(toothTreatments).filter(tooth => {
    // Don't show selected teeth in the list
    if (selectedTeeth.includes(tooth)) return false;
    
    // Only show teeth with specifications (something to copy)
    const specs = toothSpecifications[tooth];
    return specs && Object.keys(specs).length > 0;
  }).sort((a, b) => Number(a) - Number(b)); // Sort numerically

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToothClick = (tooth: string) => {
    onCopy(tooth);
    setIsOpen(false);
  };

  const createSummary = (specs: { [key: string]: string }) => {
    const parts: string[] = [];
    Object.keys(specs).forEach(key => {
      const value = specs[key];
      if (value && value !== '') parts.push(value);
    });
    return parts.length > 0 ? parts.slice(0, 2).join(', ') : '';
  };

  // Don't show button if no teeth to copy from
  if (availableTeeth.length === 0) {
    return null;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center justify-center gap-[6px] px-[12px] h-[40px] rounded-[8px] bg-white border-2 border-[#939598] hover:border-[#0067ac] hover:bg-[#f0f8fc] transition-all cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{ minWidth: '120px' }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M11 1H3C2.44772 1 2 1.44772 2 2V11H3V2H11V1Z" fill="#3E3D40"/>
          <path d="M13 3H5C4.44772 3 4 3.44772 4 4V14C4 14.5523 4.44772 15 5 15H13C13.5523 15 14 14.5523 14 14V4C14 3.44772 13.5523 3 13 3Z" fill="#3E3D40"/>
        </svg>
        <span
          className="font-['Roboto:Medium',sans-serif] font-medium text-[14px] text-[#3e3d40] leading-[20px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Copy from
        </span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute top-[calc(100%+8px)] left-0 bg-white rounded-[8px] shadow-lg border border-[#e0e0e0] z-[300] overflow-hidden"
          style={{
            minWidth: '280px',
            maxHeight: '400px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
          }}
        >
          <div className="overflow-y-auto max-h-[400px]">
            {/* Header */}
            <div className="px-[16px] py-[12px] bg-[#f9f9f9] border-b border-[#e0e0e0]">
              <p
                className="font-['Roboto:Medium',sans-serif] font-medium text-[14px] text-[#3e3d40] leading-[20px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Select tooth to copy from
              </p>
            </div>

            {/* Tooth list */}
            <div className="py-[4px]">
              {availableTeeth.map((tooth) => {
                const treatment = toothTreatments[tooth];
                const specs = toothSpecifications[tooth];
                const badgeColor = getIndicationColor(treatment);
                const summary = createSummary(specs);

                return (
                  <button
                    key={tooth}
                    onClick={() => handleToothClick(tooth)}
                    className="w-full px-[16px] py-[12px] flex flex-col gap-[6px] hover:bg-[#f0f8fc] transition-colors cursor-pointer text-left"
                    style={{ minHeight: '60px' }}
                  >
                    {/* Tooth number and badge */}
                    <div className="flex items-center gap-[8px]">
                      <p
                        className="font-['Roboto:Medium',sans-serif] font-medium text-[16px] text-[#3e3d40] leading-[20px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Tooth {tooth}
                      </p>
                      <div
                        className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-[10px]"
                        style={{ backgroundColor: badgeColor }}
                      >
                        <p
                          className="font-['Roboto:Medium',sans-serif] font-medium text-[11px] text-white leading-[14px]"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {treatment}
                        </p>
                      </div>
                    </div>

                    {/* Specifications summary */}
                    {summary && (
                      <p
                        className="font-['Roboto:Regular',sans-serif] font-normal text-[12px] text-[#696a6d] leading-[16px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        {summary}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
