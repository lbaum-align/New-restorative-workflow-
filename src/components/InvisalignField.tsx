import { useState } from "react";
import CustomDropdown from "./CustomDropdown";
import NumberInput from "./NumberInput";

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

export default function InvisalignField() {
  const [formData, setFormData] = useState({
    type: "",
    treatmentStage: "",
  });
  const [currentAligner, setCurrentAligner] = useState(0);

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative rounded-[8px] w-full" data-name="Invisalign field">
      <div className="content-stretch flex flex-col items-start overflow-visible relative rounded-[inherit] w-full">
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Procedures">
          {/* Header */}
          <div className="h-[88px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-0 relative size-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Invisalign / Vivera
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-0 relative w-full">
                {/* Row: Type / Treatment stage / Current Aligner */}
                <div className="content-stretch flex gap-[48px] h-[78px] items-center pb-0 pt-[10px] px-0 relative shrink-0 w-full" data-name="Field row">
                  <DropdownField
                    placeholder="Type"
                    value={formData.type}
                    onChange={(value) => handleFieldChange("type", value)}
                    options={["Invisalign Full", "Invisalign Lite", "Invisalign Express", "Vivera Retainer"]}
                  />
                  <DropdownField
                    placeholder="Treatment stage"
                    value={formData.treatmentStage}
                    onChange={(value) => handleFieldChange("treatmentStage", value)}
                    options={["Initial record", "Progress record", "Final record"]}
                  />
                  <div className="basis-0 grow shrink-0 min-w-px">
                    <NumberInput
                      value={currentAligner}
                      onChange={setCurrentAligner}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}