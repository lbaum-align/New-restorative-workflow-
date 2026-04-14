import { useState } from "react";
import CustomDropdown from "./CustomDropdown";

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

interface DropdownFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options?: string[];
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

export default function ImplantPlanningField() {
  const [type, setType] = useState("");
  const [toggleStates, setToggleStates] = useState({
    niriCapture: true,
    newSleeveAttached: true,
  });

  const handleToggle = (field: 'niriCapture' | 'newSleeveAttached') => {
    setToggleStates(prev => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="relative rounded-[8px] w-full" data-name="Implant planning field">
      <div className="content-stretch flex flex-col items-start overflow-visible relative rounded-[inherit] w-full">
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Implant planning">
          {/* Header */}
          <div className="h-[88px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-0 relative size-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Implant planning
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Type Dropdown */}
          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-0 relative w-full">
                <div className="content-stretch flex gap-[48px] items-center pb-0 pt-0 px-0 relative shrink-0 w-full">
                  <DropdownField
                    placeholder="Type"
                    value={type}
                    onChange={setType}
                    options={[
                      "Surgical guide tooth supported",
                      "Surgical guide tissue supported",
                      "Surgical guide bone supported",
                      "Surgical planning only - no guide"
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Toggles */}
          <div className="px-[24px] w-full">
            <div className="content-stretch flex items-center justify-start gap-[16px] relative shrink-0 w-full">
              <Toggle 
                label="NIRI Capture"
                isOn={toggleStates.niriCapture}
                onToggle={() => handleToggle('niriCapture')}
              />
              <Toggle 
                label="New Sleeve Attached"
                isOn={toggleStates.newSleeveAttached}
                onToggle={() => handleToggle('newSleeveAttached')}
              />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}