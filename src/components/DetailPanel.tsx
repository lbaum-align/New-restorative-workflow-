import { useState, useRef } from "react";
import svgPaths from "../imports/svg-40kkir43c4";
import Dropdowns from "../imports/Dropdowns";
import MaterialDropdown from "./MaterialDropdown";
import ShadeSystemDropdown from "./ShadeSystemDropdown";
import BodyDropdown from "./BodyDropdown";
import AdditionalInfoModal from "./AdditionalInfoModal";

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
  return colorMap[indication] || '#ffb32d'; // Default to yellow if not found
}

function HeaderSection({ tooth, badgeLabel, onDelete }: { 
  tooth: string; 
  badgeLabel: string;
  onDelete?: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start p-[0px] relative shrink-0 w-full px-[0px] py-[16px]">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 px-[16px] py-[0px]">
          <ItemInfo tooth={tooth} badgeLabel={badgeLabel} />
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <DeleteButton onClick={onDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}

function RecordOutline({ color = "#ffb32d" }: { color?: string }) {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[16px] z-[3]" data-name="Leading icon">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[100px]" style={{ borderColor: color }} />
    </div>
  );
}

function Badge({ label, color = "#ffb32d" }: { label: string; color?: string }) {
  return (
    <div className="content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] py-0 relative rounded-[32px] shrink-0" style={{ backgroundColor: color }} data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(62,61,64,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <RecordOutline color={color} />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-white whitespace-nowrap z-[2]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] not-italic text-[14px]">{label}</p>
      </div>
    </div>
  );
}

function ItemInfo({ tooth, badgeLabel }: { tooth: string; badgeLabel: string }) {
  const badgeColor = getIndicationColor(badgeLabel);
  
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {tooth}
      </p>
      <Badge label={badgeLabel} color={badgeColor} />
    </div>
  );
}

function DeleteButton({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      className="content-stretch flex items-center justify-center relative shrink-0 size-[60px] cursor-pointer hover:opacity-80 transition-opacity"
      onClick={onClick}
    >
      <div className="relative shrink-0 size-[40px]" data-name="Delete">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g id="Delete">
            <g id="Shape">
              <path d="M17.5 15H15V30H17.5V15Z" fill="#3E3D40" />
              <path d="M25 15H22.5V30H25V15Z" fill="#3E3D40" />
              <path d={svgPaths.p2b381a00} fill="#3E3D40" />
              <path d="M25 2.5H15V5H25V2.5Z" fill="#3E3D40" />
            </g>
          </g>
        </svg>
      </div>
    </button>
  );
}

function CaretDown() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Caret down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Caret down">
          <path d="M24 12L16 22L8 12H24Z" fill="#80D6F7" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Dropdown({ label, onClick, isExpanded = false, onSelect, selectedValue, isLast = false }: { 
  label: string; 
  onClick?: () => void; 
  isExpanded?: boolean;
  onSelect?: (value: string) => void;
  selectedValue?: string;
  isLast?: boolean;
}) {
  // Use MaterialDropdown for "Material" field, Dropdowns for others
  const isMaterialField = label === "Material";
  const isShadeSystemField = label === "Shade system";
  const isBodyField = label === "Body";
  
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <button 
        className="content-stretch flex flex-col items-start relative shrink-0 w-full cursor-pointer"
        data-name="Dropdown"
        onClick={onClick}
      >
        <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
          <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                {label}
              </p>
              {selectedValue && (
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative text-[#757575] text-[16px] ml-2 truncate" style={{ fontVariationSettings: "'wdth' 100" }}>
                  - {selectedValue}
                </p>
              )}
            </div>
          </div>
          <CaretDown />
        </div>
      </button>
      {isExpanded && (
        <div className="absolute left-0 right-0 top-[52px] z-[10001] w-full">
          {isMaterialField ? (
            <MaterialDropdown onSelect={onSelect} selectedValue={selectedValue} />
          ) : isShadeSystemField ? (
            <ShadeSystemDropdown onSelect={onSelect} selectedValue={selectedValue} />
          ) : isBodyField ? (
            <BodyDropdown onSelect={onSelect} selectedValue={selectedValue} />
          ) : (
            <Dropdowns onSelect={onSelect} selectedValue={selectedValue} />
          )}
        </div>
      )}
    </div>
  );
}

function DropdownList({ fields, onSpecificationChange, initialSpecifications }: { fields: string[]; onSpecificationChange?: (specs: { [key: string]: string }) => void; initialSpecifications?: { [key: string]: string } }) {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1); // Don't auto-expand - wait for user interaction
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>(() => {
    // Initialize from saved specifications if available
    if (initialSpecifications) {
      const initial: { [key: string]: string } = {};
      fields.forEach((field, index) => {
        if (initialSpecifications[field]) {
          initial[index] = initialSpecifications[field];
        }
      });
      return initial;
    }
    return {};
  });
  
  // Update selectedValues when initialSpecifications or selected tooth changes
  const specsKey = initialSpecifications ? JSON.stringify(initialSpecifications) : '';
  // Use effect-like reset when specs change
  const prevSpecsKeyRef = useRef(specsKey);
  if (prevSpecsKeyRef.current !== specsKey) {
    prevSpecsKeyRef.current = specsKey;
    const newValues: { [key: string]: string } = {};
    if (initialSpecifications) {
      fields.forEach((field, index) => {
        if (initialSpecifications[field]) {
          newValues[index] = initialSpecifications[field];
        }
      });
    }
    setSelectedValues(newValues);
  }
  
  const handleSelect = (fieldIndex: number, value: string) => {
    const newValues = {
      ...selectedValues,
      [fieldIndex]: value
    };
    setSelectedValues(newValues);
    
    // Convert field indices to field names
    const specs: { [key: string]: string } = {};
    Object.keys(newValues).forEach(key => {
      specs[fields[parseInt(key)]] = newValues[key];
    });
    onSpecificationChange?.(specs);
    
    // Close dropdown after selection
    setExpandedIndex(-1);
  };
  
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[0px] relative w-full">
          {fields.map((field, index) => (
            <Dropdown 
              key={index} 
              label={field}
              isExpanded={expandedIndex === index}
              onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
              onSelect={(value) => handleSelect(index, value)}
              selectedValue={selectedValues[index]}
              isLast={index === fields.length - 1} // Mark the last field as isLast
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AddEmpty() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add empty">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Add empty">
          <path d={svgPaths.p209700} fill="#0067AC" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AddButton({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      className="content-stretch flex gap-[12px] h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity pt-[22px] pr-[20px] pb-[22px] pl-[0px]" 
      data-name="Button"
      onClick={onClick}
    >
      <AddEmpty />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[18px] text-center text-nowrap tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">Add additional info</p>
      </div>
    </button>
  );
}

function MandatoryFields({ fields, onAddInfo, onSpecificationChange, initialSpecifications }: { fields: string[]; onAddInfo?: () => void; onSpecificationChange?: (specs: { [key: string]: string }) => void; initialSpecifications?: { [key: string]: string } }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Mandatory fields - details">
      <DropdownList fields={fields} onSpecificationChange={onSpecificationChange} initialSpecifications={initialSpecifications} />
      <AddButton onClick={onAddInfo} />
    </div>
  );
}

function ContentSection({ fields, onAddInfo, onSpecificationChange, initialSpecifications }: { fields: string[]; onAddInfo?: () => void; onSpecificationChange?: (specs: { [key: string]: string }) => void; initialSpecifications?: { [key: string]: string } }) {
  return (
    <div className="relative shrink-0 w-full pb-[24px]">
      <div className="w-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start px-[24px] py-0 relative w-full">
          <MandatoryFields fields={fields} onAddInfo={onAddInfo} onSpecificationChange={onSpecificationChange} initialSpecifications={initialSpecifications} />
        </div>
      </div>
    </div>
  );
}

interface DetailPanelProps {
  tooth?: string;
  badgeLabel?: string;
  fields?: string[];
  onDelete?: () => void;
  onAddInfo?: () => void;
  selectedTeeth?: string[]; // Add this to pass the actual tooth numbers
  onSpecificationChange?: (specs: { [key: string]: string }) => void;
  initialSpecifications?: { [key: string]: string };
}

export default function DetailPanel({ 
  tooth = "Tooth 11,21",
  badgeLabel = "Veneer",
  fields = ["Specification", "Material", "Shade system", "Body"],
  onDelete,
  onAddInfo,
  onSpecificationChange,
  initialSpecifications
}: DetailPanelProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleAddInfo = () => {
    setIsModalOpen(true);
    onAddInfo?.();
  };
  
  return (
    <>
      <div className="bg-white relative rounded-[8px] w-full h-full flex flex-col" data-name="DetailPanel">
        <div className="content-stretch flex flex-col items-center relative rounded-[inherit] w-full h-full">
          <HeaderSection tooth={tooth} badgeLabel={badgeLabel} onDelete={onDelete} />
          <div className="flex-1 w-full">
            <ContentSection fields={fields} onAddInfo={handleAddInfo} onSpecificationChange={onSpecificationChange} initialSpecifications={initialSpecifications} />
          </div>
        </div>
      </div>
      
      <AdditionalInfoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={() => {
          // Handle save logic here if needed
          console.log('Additional info saved');
        }}
      />
    </>
  );
}