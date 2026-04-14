import { useState } from "react";
import CustomDropdown from "./CustomDropdown";

export default function SurgicalGuideOptions() {
  const [type, setType] = useState("");

  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Surgical Guide Options" style={{ border: '1px solid #e0e0e0' }}>
      <div className="content-stretch flex flex-col items-start overflow-visible relative rounded-[inherit] size-full">
        {/* Header */}
        <div className="bg-white relative shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] w-full">
            <div className="content-stretch flex flex-col items-start px-[28px] py-[24px] relative w-full">
              <div className="content-stretch flex items-center justify-between gap-6 relative shrink-0 w-full">
                <p
                  className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Surgical guide options
                </p>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0"
            style={{ pointerEvents: 'none' }}
          />
        </div>

        {/* Content */}
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start p-[24px] relative w-full gap-[24px]">
            {/* Type Dropdown */}
            <div className="content-stretch flex items-end relative shrink-0 w-full">
              <div className="flex-1 flex flex-col gap-[4px]">
                <CustomDropdown
                  value={type}
                  onChange={setType}
                  placeholder="Type"
                  options={[
                    "Surgical guide tooth supported",
                    "Surgical guide tissue supported",
                    "Surgical guide bone supported",
                    "Surgical planning only - no guide",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}