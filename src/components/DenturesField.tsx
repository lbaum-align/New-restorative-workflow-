import { useState, useRef, useEffect } from "react";
import CustomDropdown from "./CustomDropdown";
import ToothSelectorLarge from "./ToothSelectorLarge";
import Rx from "./Rx";
import { Square, Circle, Triangle, Hexagon, Diamond, Octagon, Pentagon } from "lucide-react@0.487.0";

interface TogglePieceProps {
  isOn: boolean;
}

function TogglePiece({ isOn }: TogglePieceProps) {
  return (
    <div className="h-[28px] relative shrink-0 w-[36px]" data-name="Toggle / Piece">
      <div 
        className={`absolute h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px] transition-colors ${
          isOn ? 'bg-[#a6e2f9]' : 'bg-[#e0e0e0]'
        }`} 
        data-name="Track" 
      />
      <div 
        className={`absolute rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%] transition-all ${
          isOn ? 'bg-[#408dc1] left-[16px]' : 'bg-[#b0b1b3] left-0'
        }`} 
        data-name="Toggle" 
      />
    </div>
  );
}

interface ToggleProps {
  label: string;
  isOn: boolean;
  onToggle: () => void;
}

function Toggle({ label, isOn, onToggle }: ToggleProps) {
  return (
    <button 
      className="content-stretch flex gap-[8px] h-[36px] items-start px-[8px] py-[4px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="Toggle"
      onClick={onToggle}
    >
      <TogglePiece isOn={isOn} />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
      </p>
    </button>
  );
}

function CaretDownIcon() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d="M24 12L16 22L8 12H24Z" fill="#80D6F7" />
      </svg>
    </div>
  );
}

interface DropdownFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options?: string[] | Array<{ label: string; icon?: React.ReactNode }>;
}

function DropdownField({ placeholder, value, onChange, options = [] }: DropdownFieldProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <CustomDropdown
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        options={options}
      />
    </div>
  );
}

interface FieldRowProps {
  field1: DropdownFieldProps;
  field2: DropdownFieldProps;
}

function FieldRow({ field1, field2 }: FieldRowProps) {
  return (
    <div className="content-stretch flex gap-[48px] h-[78px] items-center pb-0 pt-[10px] px-0 relative shrink-0 w-full" data-name="Field row">
      <DropdownField {...field1} />
      <DropdownField {...field2} />
    </div>
  );
}

const typeOptions = [
  "Partial denture/framework",
  "Partial denture acrylic",
  "Partial immediate denture",
  "Full immediate denture",
  "Full denture tissue based",
  "Full denture implant based"
];

const dentureTreatmentTypes = [
  { label: 'Clamp', color: '#F28C5A' },
  { label: 'Missing', color: '#C0C0C0' },
];

interface TypeDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

function TypeDropdown({ value, onChange }: TypeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleClearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
    setIsOpen(false);
  };

  const handleAddFavorites = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (value) {
      console.log("Added to favorites:", value);
    }
  };

  return (
    <div
      ref={containerRef}
      className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0"
      style={{ zIndex: isOpen ? 9999 : 'auto' }}
    >
      {/* Trigger Field */}
      <button
        type="button"
        className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Bottom border on field */}
        <div aria-hidden="true" className={`absolute border-solid left-0 right-0 bottom-0 pointer-events-none ${
          isOpen ? 'border-[#009ace] border-b-2' : 'border-[#b0b1b3] border-b'
        }`} />
        {/* Label / selected text */}
        <div className="content-stretch flex flex-1 flex-col h-full items-start justify-center min-w-0">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
            <p
              className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] shrink-0 text-[18px]"
              style={{ 
                fontVariationSettings: "'wdth' 100",
                color: value ? '#3e3d40' : '#939598'
              }}
            >
              {value || "Type"}
            </p>
          </div>
        </div>
        {/* Caret */}
        <div className={`relative shrink-0 size-[40px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} flex items-center justify-center`}>
          <svg className="block w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M6 9L12 15L18 9" stroke="#696A6D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute top-full left-0 w-full bg-white rounded-[4px] mt-[2px] flex flex-col"
          style={{ 
            boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.15)",
            zIndex: 10000,
            pointerEvents: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Favorite placeholder */}
          <div className="content-stretch flex h-[54px] items-center py-[8px] shrink-0 w-full border-b border-[rgba(0,0,0,0.1)]">
            <div className="overflow-clip relative shrink-0 size-[54px] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 1L12.5 7.5H19L14 11.5L16 18L10 14L4 18L6 11.5L1 7.5H7.5L10 1Z" stroke="black" strokeOpacity="0.4" fill="none" />
              </svg>
            </div>
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[#939598] text-[18px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Your favorite items will appear here
            </p>
          </div>

          {/* Type options */}
          {typeOptions.map((option) => (
            <div key={option} className="h-[54px] relative shrink-0 w-full border-b border-[rgba(0,0,0,0.05)]">
              <button
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="flex flex-row items-center size-full hover:bg-[#f5f5f5] transition-colors w-full px-[24px]"
              >
                <p className="font-['Roboto:Regular',sans-serif] font-normal text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {option}
                </p>
              </button>
            </div>
          ))}

          {/* Bottom buttons */}
          <div className="bg-white content-stretch flex h-[54px] items-center justify-between px-[16px] py-[8px] border-t border-[rgba(62,61,64,0.5)]">
            <button
              onClick={handleClearSelection}
              className="bg-[#f9f9f9] flex h-[32px] items-center justify-center min-w-[96px] px-[16px] py-[8px] rounded-[4px] hover:bg-[#e8e8e8] transition-colors border border-[#939598]"
            >
              <p className="font-['Roboto:Medium',sans-serif] font-medium text-[#3e3d40] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Clear selection
              </p>
            </button>
            <button
              onClick={handleAddFavorites}
              className="bg-[#bfeafb] flex h-[32px] items-center justify-center min-w-[96px] px-[16px] py-[8px] rounded-[4px] hover:bg-[#a0dff5] transition-colors border border-[#408dc1]"
            >
              <p className="font-['Roboto:Medium',sans-serif] font-medium text-[#0067ac] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Add favorites
              </p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DenturesField() {
  const [upperDenture, setUpperDenture] = useState(false);
  const [lowerDenture, setLowerDenture] = useState(false);
  
  const [formData, setFormData] = useState({
    type: "",
    stage: "",
    mould: "",
    shadeSystem: "",
    teethShade: "",
    gingival: "",
  });

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col gap-[24px] w-full" data-name="Dentures field wrapper">
      {/* Dentures Form Card */}
      <div className="relative rounded-[8px] w-full" data-name="Dentures field" style={{ border: '1px solid #e0e0e0' }}>
        <div className="content-stretch flex flex-col items-start overflow-visible relative rounded-[inherit] w-full">
          <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Procedures">
            {/* Header */}
            <div className="h-[88px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-0 relative size-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Dentures
                    </p>
                    <div className="content-stretch flex gap-[60px] items-center relative shrink-0">
                      <Toggle 
                        label="Upper denture"
                        isOn={upperDenture}
                        onToggle={() => setUpperDenture(!upperDenture)}
                      />
                      <Toggle 
                        label="Lower denture"
                        isOn={lowerDenture}
                        onToggle={() => setLowerDenture(!lowerDenture)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="relative shrink-0 w-full">
              <div className="w-full">
                <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-0 relative w-full">
                  {/* Row 1: Type / Stage */}
                  <div className="content-stretch flex gap-[48px] h-[78px] items-center pb-0 pt-[10px] px-0 relative shrink-0 w-full" data-name="Field row">
                    <TypeDropdown
                      value={formData.type}
                      onChange={(value) => handleFieldChange("type", value)}
                    />
                    <DropdownField
                      placeholder="Stage"
                      value={formData.stage}
                      onChange={(value) => handleFieldChange("stage", value)}
                      options={["Custom tray", "Bite rim", "Try-in", "Finish final"]}
                    />
                  </div>

                  {/* Row 2: Mould / Shade system */}
                  <FieldRow
                    field1={{
                      placeholder: "Mould",
                      value: formData.mould,
                      onChange: (value) => handleFieldChange("mould", value),
                      options: ["VITA Lumin", "VITApan 3D Master", "Other"]
                    }}
                    field2={{
                      placeholder: "Shade system",
                      value: formData.shadeSystem,
                      onChange: (value) => handleFieldChange("shadeSystem", value),
                      options: ["VITA Classical", "VITA 3D-Master", "Ivoclar"]
                    }}
                  />

                  {/* Row 3: Teeth shade / Gingival */}
                  <FieldRow
                    field1={{
                      placeholder: "Teeth shade",
                      value: formData.teethShade,
                      onChange: (value) => handleFieldChange("teethShade", value),
                      options: ["A1", "A2", "A3", "B1", "B2", "C1", "C2"]
                    }}
                    field2={{
                      placeholder: "Gingival",
                      value: formData.gingival,
                      onChange: (value) => handleFieldChange("gingival", value),
                      options: [
                        { label: "Square", icon: <Square className="size-full" /> },
                        { label: "Square Tapering", icon: <Pentagon className="size-full" /> },
                        { label: "Square Ovoid", icon: <Octagon className="size-full" /> },
                        { label: "Tapering", icon: <Triangle className="size-full" /> },
                        { label: "Tapering Ovoid", icon: <Diamond className="size-full" /> },
                        { label: "Ovoid", icon: <Circle className="size-full" /> },
                        { label: "Square Tapering Ovoid", icon: <Hexagon className="size-full" /> }
                      ]
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* removed overlay div - border now on parent */}
      </div>

      {/* Tooth Chart Section - appears after Type is selected */}
      {formData.type && (
        <>
          <Rx variant="dentures" />
          <div className="relative rounded-[8px] w-full" data-name="Dentures tooth chart" style={{ border: '1px solid #e0e0e0' }}>
            <ToothSelectorLarge
              customTreatmentTypes={dentureTreatmentTypes}
            />
          </div>
        </>
      )}
    </div>
  );
}