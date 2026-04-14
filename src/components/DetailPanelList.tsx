import svgPaths from "../imports/svg-40kkir43c4";
import { motion, AnimatePresence } from "framer-motion";

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

interface ToothCardProps {
  tooth: string;
  indication: string;
  specifications?: {
    material?: string;
    shade?: string;
    body?: string;
    [key: string]: string | undefined;
  };
  onDelete: () => void;
  onClick?: () => void;
}

function ToothCard({ tooth, indication, specifications, onDelete, onClick }: ToothCardProps) {
  const badgeColor = getIndicationColor(indication);

  const createSummary = () => {
    if (!specifications) return null;
    const parts: string[] = [];
    Object.keys(specifications).forEach(key => {
      const value = specifications[key];
      if (value && value !== '') parts.push(value);
    });
    return parts.length > 0 ? parts.join(', ') : null;
  };

  const summary = createSummary();

  return (
    <div
      className="bg-white rounded-[8px] p-[8px] flex flex-col gap-[6px] border-2 border-[#e0e0e0] cursor-pointer hover:border-[#0067ac] hover:shadow-md transition-all"
      onClick={onClick}
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
    >
      {/* Header with Tooth number and Delete button */}
      <div className="flex items-center justify-between">
        <p className="font-['Roboto:Medium',sans-serif] font-medium text-[#3e3d40] leading-[20px] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Tooth {tooth}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="flex items-center justify-center size-[32px] hover:bg-[#e0e0e0] rounded-[4px] transition-colors cursor-pointer"
          aria-label="Delete"
        >
          <svg className="w-[20px] h-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <g>
              <path d="M17.5 15H15V30H17.5V15Z" fill="#3E3D40" />
              <path d="M25 15H22.5V30H25V15Z" fill="#3E3D40" />
              <path d={svgPaths.p2b381a00} fill="#3E3D40" />
              <path d="M25 2.5H15V5H25V2.5Z" fill="#3E3D40" />
            </g>
          </svg>
        </button>
      </div>

      {/* Badge with indication */}
      <div
        className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-[10px] self-start"
        style={{ backgroundColor: badgeColor }}
      >
        <p className="font-['Roboto:Medium',sans-serif] font-medium text-[12px] text-white leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {indication}
        </p>
      </div>

      {/* Summary of specifications */}
      {summary && (
        <p className="font-['Roboto:Regular',sans-serif] font-normal text-[12px] text-[#696a6d] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {summary}
        </p>
      )}
    </div>
  );
}

interface DetailPanelListProps {
  toothTreatments: { [tooth: string]: string };
  toothSpecifications?: { [tooth: string]: { material?: string; shade?: string; body?: string; [key: string]: string | undefined } };
  toothInsertionOrder?: string[];
  onDeleteTooth: (tooth: string) => void;
  onCardClick?: (tooth: string, treatment: string) => void;
}

export default function DetailPanelList({
  toothTreatments,
  toothSpecifications = {},
  toothInsertionOrder,
  onDeleteTooth,
  onCardClick
}: DetailPanelListProps) {
  // Use insertion order if provided, otherwise fall back to reverse object keys
  const sortedTeeth = toothInsertionOrder && toothInsertionOrder.length > 0
    ? [...toothInsertionOrder].reverse()
    : Object.keys(toothTreatments).reverse();

  return (
    <div className="bg-white relative w-full h-full flex flex-col overflow-hidden border-l border-[#e0e0e0]" data-name="DetailPanelList">
      {/* Scrollable list of tooth cards */}
      <div className="flex-1 w-full overflow-y-auto p-[16px] flex flex-col gap-[12px]">
        {sortedTeeth.length === 0 ? (
          <div className="flex items-center justify-center h-full px-[16px]">
            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-[#939598] text-center leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Select one or more teeth and the type of restoration
            </p>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            {sortedTeeth.map((tooth, index) => (
              <motion.div
                key={tooth}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              >
                <ToothCard
                  tooth={tooth}
                  indication={toothTreatments[tooth]}
                  specifications={toothSpecifications[tooth]}
                  onDelete={() => onDeleteTooth(tooth)}
                  onClick={() => onCardClick?.(tooth, toothTreatments[tooth])}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}