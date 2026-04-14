import { useState } from "react";
import CustomDropdown from "./CustomDropdown";

type ArchSelection = "upper" | "lower" | null;

interface TogglePieceProps {
  isOn: boolean;
}

function TogglePiece({ isOn }: TogglePieceProps) {
  return (
    <div className="h-[28px] relative shrink-0 w-[36px]" data-name="Toggle / Piece">
      <div
        className={`absolute h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px] transition-colors ${
          isOn ? "bg-[#a6e2f9]" : "bg-[#e0e0e0]"
        }`}
        data-name="Track"
      />
      <div
        className={`absolute rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%] transition-all ${
          isOn ? "bg-[#408dc1] left-[16px]" : "bg-[#b0b1b3] left-0"
        }`}
        data-name="Toggle"
      />
    </div>
  );
}

function ArchToggle({ label, isOn, onToggle }: { label: string; isOn: boolean; onToggle: () => void }) {
  return (
    <button
      className="content-stretch flex gap-[8px] h-[36px] items-center px-[8px] py-[4px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Toggle"
      onClick={onToggle}
      type="button"
    >
      <TogglePiece isOn={isOn} />
      <p
        className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </p>
    </button>
  );
}

export default function ApplianceOptions() {
  const [selectedArch, setSelectedArch] = useState<ArchSelection>("upper");
  const [applianceType, setApplianceType] = useState("");
  const [type, setType] = useState("");

  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Appliance Options" style={{ border: '1px solid #e0e0e0' }}>
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
                  Appliance options
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
            {/* Appliance Type Dropdown + Type Dropdown + Arch Toggles Row */}
            <div className="content-stretch flex items-end relative shrink-0 w-full" style={{ gap: "56px" }}>
              {/* Appliance Type Dropdown */}
              <div className="flex-1 flex flex-col gap-[4px]">
                <CustomDropdown
                  value={applianceType}
                  onChange={(val) => {
                    setApplianceType(val);
                    setType("");
                  }}
                  placeholder="Appliance type"
                  options={["Night Guard", "Bite Splint", "Sport/Mouth Guard", "Apnea/Sleep Appliances", "Ortho Appliances", "Whitening Trays"]}
                />
              </div>

              {/* Type Dropdown - appears after Appliance Type is selected */}
              {applianceType && (
                <div className="flex-1 flex flex-col gap-[4px]">
                  <CustomDropdown
                    value={type}
                    onChange={setType}
                    placeholder="Type"
                    options={["Invisalign aligners", "Invisalign first aligners", "Invisalign palatal expander", "Vivera retainer", "Invisalign retainer"]}
                  />
                </div>
              )}

              {/* Arch to treat Toggles */}
              <div className="flex flex-col gap-[4px] shrink-0">
                <label
                  className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[#3e3d40] text-[14px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Arch to treat
                </label>
                <div className="flex gap-[16px] items-center h-[48px]">
                  <ArchToggle
                    label="Upper arch"
                    isOn={selectedArch === "upper"}
                    onToggle={() => setSelectedArch(selectedArch === "upper" ? null : "upper")}
                  />
                  <ArchToggle
                    label="Lower arch"
                    isOn={selectedArch === "lower"}
                    onToggle={() => setSelectedArch(selectedArch === "lower" ? null : "lower")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}