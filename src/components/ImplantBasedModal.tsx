import { useState } from "react";
import svgPaths from "../imports/svg-4ntet71xv9";
import svgEditPaths from "../imports/svg-aa4au84kc1";
import svgEditModalPaths from "../imports/svg-vg963hpgx9";
import imgImage8 from "figma:asset/9fc98949f904edb334a67827da5dd102bb3d721a.png";
import ManufacturerSelectionModal from "./ManufacturerSelectionModal";
import ConnectionSelectionModal from "./ConnectionSelectionModal";
import ScanBodyTypeModal from "./ScanBodyTypeModal";
import svgImplantInfoPaths from "../imports/svg-1ct72l2f50";

interface ImplantCard {
  id: number;
  label: string;
  favorited: boolean;
}

const defaultCards: ImplantCard[] = [
  { id: 1, label: "Straumann® Group · 2.9 mm · BioAbutment", favorited: true },
  { id: 2, label: "Straumann® Group · 2.9 mm · BioAbutment", favorited: false },
  { id: 3, label: "Straumann® Group · 2.9 mm · BioAbutment", favorited: true },
  { id: 4, label: "Straumann® Group · 2.9 mm · BioAbutment", favorited: true },
  { id: 5, label: "Straumann® Group · 2.9 mm · BioAbutment", favorited: true },
  { id: 6, label: "Straumann® Group · 2.9 mm · BioAbutment", favorited: false },
  { id: 7, label: "Straumann® Group · 2.9 mm · BioAbutment", favorited: true },
  { id: 8, label: "Straumann® Group · 2.9 mm · BioAbutment", favorited: false },
];

interface ImplantBasedModalProps {
  teeth: string[];
  onClose: () => void;
  onDone: () => void;
}

/* ─── Edit Popup ───────────────────────────────────────────── */
export function EditImplantModal({
  teeth,
  onClose,
  onDone,
}: {
  teeth: string[];
  onClose: () => void;
  onDone: () => void;
}) {
  const [restorationOpen, setRestorationOpen] = useState(false);
  const [crownOpen, setCrownOpen] = useState(false);
  const [showManufacturerModal, setShowManufacturerModal] = useState(false);
  const [manufacturer, setManufacturer] = useState("Straumann® Group");
  const [showConnectionModal, setShowConnectionModal] = useState(false);
  const [connection, setConnection] = useState("CrossFit");
  const toothLabel = teeth.length > 0 ? `Tooth ${teeth.join(", ")}` : "Tooth";

  const [diameter, setDiameter] = useState("2.9 mm");
  const [showDiameterDropdown, setShowDiameterDropdown] = useState(false);
  const [showScanBodyModal, setShowScanBodyModal] = useState(false);
  const [scanBodyType, setScanBodyType] = useState("SBYSBSC ALLONUS Tech Co., Ltd");

  const handleManufacturerSelect = (name: string) => {
    setManufacturer(name);
    setShowManufacturerModal(false);
  };

  const handleConnectionSelect = (name: string) => {
    setConnection(name);
    setShowConnectionModal(false);
  };

  const handleScanBodySelect = (name: string) => {
    setScanBodyType(name);
    setShowScanBodyModal(false);
  };

  return (
    <div className="fixed inset-0 z-[260] flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
      <div
        className="bg-white rounded-[4px] flex flex-col overflow-hidden relative"
        style={{
          width: "1156px",
          maxWidth: "calc(100vw - 48px)",
          maxHeight: "calc(100vh - 80px)",
          boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.2), 0px 4px 16px 0px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header */}
        <div className="flex flex-col shrink-0 w-full pt-[24px]">
          <div className="flex items-center justify-between pl-[24px] pr-[8px] h-[64px]">
            <div className="flex flex-col gap-[8px]">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[32px] text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                {toothLabel}
              </p>
              <div className="bg-[#ed6464] flex gap-[4px] isolate items-center justify-center px-[12px] rounded-[32px] relative">
                <div aria-hidden="true" className="absolute border border-[rgba(62,61,64,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
                <div className="bg-white rounded-[100px] size-[16px] relative z-[3]">
                  <div aria-hidden="true" className="absolute border-2 border-[#ed6464] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[14px] text-white whitespace-nowrap z-[2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Implant based
                </p>
              </div>
            </div>
            <button onClick={onClose} className="flex items-center justify-center size-[60px] hover:opacity-70 transition-opacity cursor-pointer">
              <div className="overflow-clip size-[40px] relative">
                <div className="absolute inset-1/4">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgEditModalPaths.p1f246100} fill="#3E3D40" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
          <div className="w-full h-px bg-[#e0e0e0] mt-[8px]" />

          {/* Tabs — Library active */}
          <div className="flex items-start px-[40px] pt-[24px] pb-[40px]">
            {(["Recents", "Favorites", "Library"] as const).map(tab => (
              <div key={tab} className="flex items-start px-[16px] py-[12px] relative">
                {tab === "Library" ? (
                  <div aria-hidden="true" className="absolute border-[#009ace] border-b-2 border-solid inset-0 pointer-events-none" />
                ) : (
                  <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.09)] border-b border-solid inset-0 pointer-events-none" />
                )}
                <p
                  className={`font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[18px] text-center ${tab === "Library" ? "text-[#3e3d40]" : "text-[#939598]"}`}
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {tab}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-[40px] pb-[40px] flex flex-col gap-[40px]">
          {/* Fields + Preview card */}
          <div className="flex gap-[60px] items-start w-full">
            {/* Left: form fields */}
            <div className="flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-0">
              {/* Implant manufacturer */}
              <FieldRow label="Implant manufacturer" value={manufacturer} icon="dots" onClick={() => setShowManufacturerModal(true)} />
              {/* Connection */}
              <FieldRow label="Connection" value={connection} icon="dots" onClick={() => setShowConnectionModal(true)} />
              {/* Diameter / Platform with dropdown */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px pb-[4px] relative">
                    <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[#3e3d40] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Diameter / Platform
                    </p>
                    <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[32px] text-[#3e3d40] text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {diameter}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowDiameterDropdown(!showDiameterDropdown)}
                    className="overflow-clip relative shrink-0 size-[32px] cursor-pointer hover:opacity-70 transition-opacity"
                  >
                    <div className="absolute bottom-[31.25%] left-1/4 right-1/4 top-[37.5%]">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
                        <path d="M16 0L8 10L0 0H16Z" fill="#80D6F7" />
                      </svg>
                    </div>
                  </button>
                </div>
                {/* Dropdown menu */}
                {showDiameterDropdown && (
                  <div className="absolute top-full left-0 mt-[-1px] w-full bg-white border border-[#d1d1d1] rounded-[4px] shadow-lg z-20" style={{ boxShadow: "0px 2px 8px rgba(0,0,0,0.15)" }}>
                    {["2.9 mm", "3.3 mm", "3.5 mm", "4.1 mm"].map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setDiameter(option);
                          setShowDiameterDropdown(false);
                        }}
                        className="w-full px-[16px] py-[12px] text-left hover:bg-[#f5f5f5] transition-colors font-['Roboto:Regular',sans-serif] font-normal text-[#3e3d40] text-[18px] leading-[28px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Scan body type */}
              <FieldRow label="Scan body type" value={scanBodyType} icon="dots" onClick={() => setShowScanBodyModal(true)} />
            </div>

            {/* Right: preview card */}
            <div className="bg-[rgba(223,245,252,0.5)] h-[376px] relative rounded-[4px] shrink-0 w-[430px]">
              <div className="content-stretch flex flex-col gap-[20px] items-center overflow-clip pt-[20px] relative rounded-[inherit] size-full">
                {/* Large image */}
                <div className="h-[214px] relative shrink-0 w-[190px]">
                  <img alt="Implant" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
                </div>
                {/* Label area */}
                <div className="bg-white flex-1 min-h-px relative w-full">
                  <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[16px] relative">
                      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[28px] text-[18px] text-[#3e3d40] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                        SBYSBSC ALLONUS Tech Co., Ltd
                      </p>
                      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[18px] text-[#696a6d] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                        BioAbutment
                      </p>
                    </div>
                  </div>
                  {/* Arrow down icon */}
                  <div className="absolute right-[16px] bottom-[16px] overflow-clip size-[32px]">
                    <div className="absolute inset-[12.5%_18.75%]">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
                        <path d={svgEditModalPaths.p3430e200} fill="#3E3D40" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Star */}
              <div className="absolute right-[8px] top-[8px] overflow-clip size-[32px]">
                <div className="absolute inset-[6.25%_4%]">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
                    <path d={svgEditModalPaths.p15f2e300} fill="#00ADEF" />
                  </svg>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
            </div>
          </div>

          {/* Accordion sections */}
          <div className="flex flex-col gap-[20px] w-full">
            {/* Restoration type accordion */}
            <div className={restorationOpen ? "bg-white" : ""}>
              <button
                onClick={() => setRestorationOpen(v => !v)}
                className="bg-[#f0f0f0] flex gap-[10px] h-[72px] items-center px-[22px] py-[14px] w-full cursor-pointer hover:bg-[#e8e8e8] transition-colors"
              >
                <div className="overflow-clip relative shrink-0 size-[32px]">
                  <div className={restorationOpen ? "absolute inset-[31.25%_18.75%_33.13%_18.75%]" : "absolute inset-[33.13%_18.75%_31.25%_18.75%]"}>
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 11.4">
                      <path d={restorationOpen ? svgImplantInfoPaths.p3370f400 : svgEditModalPaths.p1bcf5d80} fill="#0067AC" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] text-[#3e3d40] text-[24px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Restoration type
                </p>
              </button>
              {restorationOpen && (
                <div className="content-stretch flex flex-col gap-[32px] items-start pb-[40px] px-[40px] pt-[24px] w-full">
                  <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                    <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Restoration type" />
                    <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Abutment material" disabled />
                  </div>
                  <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                    <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Abutment type" disabled />
                    <div className="flex-[1_0_0] min-h-px min-w-px h-[36px]">
                      <div className="content-stretch flex gap-[8px] items-start px-[8px] py-[4px] h-full">
                        <div className="h-[28px] relative shrink-0 w-[36px]">
                          <div className="absolute h-[16px] left-0 rounded-[16px] top-1/2 -translate-y-1/2 w-[36px] bg-[#e0e0e0]" />
                          <div className="absolute rounded-[16px] size-[20px] top-1/2 -translate-y-1/2 bg-[#f0f0f0] border border-[#d1d1d1] left-0" />
                        </div>
                        <p className="flex-1 font-['Roboto:Regular',sans-serif] font-normal h-full leading-[28px] overflow-hidden text-[#b0b1b3] text-[18px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Ti-Base
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Crown accordion */}
            <div className={crownOpen ? "bg-white" : ""}>
              <button
                onClick={() => setCrownOpen(v => !v)}
                className="bg-[#f0f0f0] flex gap-[10px] h-[72px] items-center px-[22px] py-[14px] w-full cursor-pointer hover:bg-[#e8e8e8] transition-colors"
              >
                <div className="overflow-clip relative shrink-0 size-[32px]">
                  <div className={crownOpen ? "absolute inset-[31.25%_18.75%_33.13%_18.75%]" : "absolute inset-[33.13%_18.75%_31.25%_18.75%]"}>
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 11.4">
                      <path d={crownOpen ? svgImplantInfoPaths.p3370f400 : svgEditModalPaths.p1bcf5d80} fill="#408DC1" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] text-[#3e3d40] text-[24px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Crown
                </p>
              </button>
              {crownOpen && (
                <div className="content-stretch flex flex-col gap-[32px] items-start pb-[40px] px-[40px] pt-[24px] w-full">
                  <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                    <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Specification" />
                    <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Shade system" value="VITA Lumin" selected disabled />
                  </div>
                  <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                    <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Material" disabled />
                    <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Body" disabled />
                  </div>
                  <ImplantAdditionalInfoAccordion />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative shrink-0 w-full border-t border-[#e0e0e0]">
          <div className="flex items-center justify-end p-[16px]">
            <button
              onClick={onDone}
              className="bg-[#bfeafb] flex h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] hover:bg-[#a0dff5] transition-colors cursor-pointer"
            >
              <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[28px] text-[#0067ac] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Done
              </p>
            </button>
          </div>
        </div>

        {/* Manufacturer selection overlay - renders inside this modal */}
        {showManufacturerModal && (
          <div className="absolute inset-0 bg-white/95 z-10 flex items-center justify-center p-[40px]">
            <ManufacturerSelectionModal
              onClose={() => setShowManufacturerModal(false)}
              onSelect={handleManufacturerSelect}
              currentSelection={manufacturer}
            />
          </div>
        )}

        {/* Connection selection overlay - renders inside this modal */}
        {showConnectionModal && (
          <div className="absolute inset-0 bg-white/95 z-10 flex items-center justify-center p-[40px]">
            <ConnectionSelectionModal
              onClose={() => setShowConnectionModal(false)}
              onSelect={handleConnectionSelect}
              currentSelection={connection}
            />
          </div>
        )}

        {/* Scan body type selection overlay - renders inside this modal */}
        {showScanBodyModal && (
          <div className="absolute inset-0 bg-white/95 z-10 flex items-center justify-center p-[40px]">
            <ScanBodyTypeModal
              onClose={() => setShowScanBodyModal(false)}
              onSelect={handleScanBodySelect}
              currentSelection={scanBodyType}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Field Row helper ───────────────────────────────────────── */
function FieldRow({ label, value, icon, onClick }: { label: string; value: string; icon: "dots" | "caret"; onClick?: () => void }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const diameterOptions = ["2.9 mm", "3.3 mm", "3.5 mm", "4.1 mm"];

  const handleCaretClick = () => {
    if (onClick) {
      onClick();
    } else {
      setShowDropdown(!showDropdown);
    }
  };

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px pb-[4px] relative">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[#3e3d40] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[32px] text-[#3e3d40] text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {value}
          </p>
        </div>
        {icon === "dots" ? (
          <button
            onClick={onClick}
            className={`relative shrink-0 size-[32px] ${onClick ? 'cursor-pointer hover:opacity-70 transition-opacity' : ''}`}
            disabled={!onClick}
          >
            <div className="absolute inset-[43.75%_18.75%]">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 4">
                <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.89543 0 0 0.895431 0 2C0 3.10457 0.89543 4 2 4Z" fill="#80D6F7" />
                <path d="M10 4C11.1046 4 12 3.10457 12 2C12 0.895431 11.1046 0 10 0C8.89543 0 8 0.895431 8 2C8 3.10457 8.89543 4 10 4Z" fill="#80D6F7" />
                <path d="M18 4C19.1046 4 20 3.10457 20 2C20 0.89543 19.1046 0 18 0C16.8954 0 16 0.89543 16 2C16 3.10457 16.8954 4 18 4Z" fill="#80D6F7" />
              </svg>
            </div>
          </button>
        ) : (
          <button
            onClick={handleCaretClick}
            className="overflow-clip relative shrink-0 size-[32px] cursor-pointer hover:opacity-70 transition-opacity"
          >
            <div className="absolute bottom-[31.25%] left-1/4 right-1/4 top-[37.5%]">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
                <path d="M16 0L8 10L0 0H16Z" fill="#80D6F7" />
              </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── Main Modal ─────────────────────────────────────────────── */
export default function ImplantBasedModal({ teeth, onClose, onDone }: ImplantBasedModalProps) {
  const [activeTab, setActiveTab] = useState<"Recents" | "Favorites" | "Library">("Recents");
  const [cards, setCards] = useState<ImplantCard[]>(defaultCards);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [restorationOpen, setRestorationOpen] = useState(false);
  const [crownOpen, setCrownOpen] = useState(false);

  const toothLabel = teeth.length > 0 ? `Tooth ${teeth.join(", ")}` : "Tooth";

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setCards(prev => prev.map(c => c.id === id ? { ...c, favorited: !c.favorited } : c));
  };

  return (
    <>
      {/* ── Main overlay ── */}
      <div className="fixed inset-0 z-[250] flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
        <div
          className="bg-white rounded-[4px] flex flex-col overflow-hidden"
          style={{
            width: "1156px",
            maxWidth: "calc(100vw - 48px)",
            maxHeight: "calc(100vh - 80px)",
            boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.2), 0px 4px 16px 0px rgba(0,0,0,0.1)",
          }}
        >
          {/* ── Header ── */}
          <div className="flex flex-col shrink-0 w-full pt-[24px]">
            <div className="flex items-center justify-between pl-[24px] pr-[8px] h-[64px]">
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[32px] text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {toothLabel}
                </p>
                <div className="bg-[#ed6464] flex gap-[4px] isolate items-center justify-center px-[12px] rounded-[32px] relative">
                  <div aria-hidden="true" className="absolute border border-[rgba(62,61,64,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
                  <div className="bg-white rounded-[100px] size-[16px] relative z-[3]">
                    <div aria-hidden="true" className="absolute border-2 border-[#ed6464] border-solid inset-0 pointer-events-none rounded-[100px]" />
                  </div>
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[14px] text-white whitespace-nowrap z-[2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Implant based
                  </p>
                </div>
              </div>
              <button onClick={onClose} className="flex items-center justify-center size-[60px] hover:opacity-70 transition-opacity cursor-pointer">
                <div className="overflow-clip size-[40px] relative">
                  <div className="absolute inset-1/4">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p1f246100} fill="#3E3D40" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
            <div className="w-full h-px bg-[#e0e0e0] mt-[8px]" />

            {/* Tabs */}
            <div className="flex items-start px-[40px] pt-[24px] pb-[16px]">
              {(["Recents", "Favorites", "Library"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="flex items-start px-[16px] py-[12px] relative cursor-pointer"
                >
                  {activeTab === tab ? (
                    <div aria-hidden="true" className="absolute border-[#009ace] border-b-2 border-solid inset-0 pointer-events-none" />
                  ) : (
                    <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.09)] border-b border-solid inset-0 pointer-events-none" />
                  )}
                  <p
                    className={`font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[18px] text-center ${activeTab === tab ? "text-[#3e3d40]" : "text-[#939598]"}`}
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {tab}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* ── Scrollable body ── */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col gap-[24px] pt-[24px] pb-[40px]">
            {/* Cards grid */}
            <div className="flex flex-col gap-[24px] px-[40px]">
              {[cards.slice(0, 4), cards.slice(4, 8)].map((row, rowIdx) => (
                <div key={rowIdx} className="flex gap-[24px] w-full">
                  {row.map(card => {
                    const isSelected = selectedCardId === card.id;
                    return (
                      <div
                        key={card.id}
                        className="relative flex-1 cursor-pointer rounded-[8px]"
                        style={{
                          height: "162px",
                          boxShadow: isSelected ? "0 0 0 4px #00adef" : undefined,
                        }}
                        onClick={() => setSelectedCardId(card.id)}
                      >
                        {/* Card container */}
                        <div className="bg-[#eef9fd] relative rounded-[8px] size-full">
                          {/* Inner flex container with gap */}
                          <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip pt-[12px] relative rounded-[inherit] size-full">
                            {/* Top section: Image */}
                            <div className="h-[70px] relative shrink-0 w-[68px]">
                              <img alt="Implant" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
                            </div>
                            
                            {/* Bottom section: White label area */}
                            <div className="bg-white content-stretch flex flex-col h-[80px] items-start py-[8px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
                              <div className="relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
                                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-ellipsis w-full whitespace-pre-wrap" dir="ltr" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    <span className="leading-[28px]">Straumann® Group </span>
                                    <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>·</span>
                                    <span className="leading-[28px]"> 2.9 mm </span>
                                    <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>·</span>
                                    <span className="leading-[28px]"> BioAbutment </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Edit icon — only on selected card, positioned absolutely on the outer card container */}
                          {isSelected && (
                            <button
                              onClick={(e) => { e.stopPropagation(); setShowEditModal(true); }}
                              className="absolute right-[4px] bottom-[4px] overflow-clip size-[32px] hover:opacity-70 transition-opacity cursor-pointer z-10"
                              title="Edit implant"
                            >
                              <div className="absolute inset-[6.25%_6.25%_12.5%_6.25%]">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
                                  <path d="M28 24H0V26H28V24Z" fill="#0067AC" />
                                  <path d={svgEditPaths.p83df200} fill="#0067AC" />
                                </svg>
                              </div>
                            </button>
                          )}

                          {/* Star icon - positioned absolutely on the card */}
                          <button
                            className="absolute right-[4px] top-[4px] overflow-clip size-[32px] hover:opacity-70 transition-opacity cursor-pointer z-10"
                            onClick={(e) => toggleFavorite(e, card.id)}
                          >
                            <div className="absolute inset-[6.25%_4%]">
                              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
                                {card.favorited ? (
                                  <path d={svgPaths.p15f2e300} fill="#00ADEF" />
                                ) : (
                                  <path d={svgPaths.p38b95000} fill="#B0B1B3" />
                                )}
                              </svg>
                            </div>
                          </button>

                          {/* Border */}
                          <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Accordion sections */}
            <div className="flex flex-col gap-[20px] w-full px-[40px]">
              {/* Restoration type accordion */}
              <div className={restorationOpen ? "bg-white" : ""}>
                <button
                  className="bg-[#f0f0f0] flex gap-[10px] h-[72px] items-center px-[22px] py-[14px] w-full cursor-pointer hover:bg-[#e8e8e8] transition-colors"
                  onClick={() => setRestorationOpen(v => !v)}
                >
                  <div className="overflow-clip relative shrink-0 size-[32px]">
                    <div className={restorationOpen ? "absolute inset-[31.25%_18.75%_33.13%_18.75%]" : "absolute inset-[33.13%_18.75%_31.25%_18.75%]"}>
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 11.4">
                        <path d={restorationOpen ? svgImplantInfoPaths.p3370f400 : svgPaths.p1bcf5d80} fill="#0067AC" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] text-[#3e3d40] text-[24px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Restoration type
                  </p>
                </button>
                {restorationOpen && (
                  <div className="content-stretch flex flex-col gap-[32px] items-start pb-[40px] px-[40px] pt-[24px] w-full">
                    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                      <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Restoration type" />
                      <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Abutment material" disabled />
                    </div>
                    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                      <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Abutment type" disabled />
                      <div className="flex-[1_0_0] min-h-px min-w-px h-[36px]">
                        <div className="content-stretch flex gap-[8px] items-start px-[8px] py-[4px] h-full">
                          <div className="h-[28px] relative shrink-0 w-[36px]">
                            <div className="absolute h-[16px] left-0 rounded-[16px] top-1/2 -translate-y-1/2 w-[36px] bg-[#e0e0e0]" />
                            <div className="absolute rounded-[16px] size-[20px] top-1/2 -translate-y-1/2 bg-[#f0f0f0] border border-[#d1d1d1] left-0" />
                          </div>
                          <p className="flex-1 font-['Roboto:Regular',sans-serif] font-normal h-full leading-[28px] overflow-hidden text-[#b0b1b3] text-[18px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Ti-Base
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Crown accordion */}
              <div className={crownOpen ? "bg-white" : ""}>
                <button
                  className="bg-[#f0f0f0] flex gap-[10px] h-[72px] items-center px-[22px] py-[14px] w-full cursor-pointer hover:bg-[#e8e8e8] transition-colors"
                  onClick={() => setCrownOpen(v => !v)}
                >
                  <div className="overflow-clip relative shrink-0 size-[32px]">
                    <div className={crownOpen ? "absolute inset-[31.25%_18.75%_33.13%_18.75%]" : "absolute inset-[33.13%_18.75%_31.25%_18.75%]"}>
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 11.4">
                        <path d={crownOpen ? svgImplantInfoPaths.p3370f400 : svgPaths.p1bcf5d80} fill="#408DC1" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] text-[#3e3d40] text-[24px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Crown
                  </p>
                </button>
                {crownOpen && (
                  <div className="content-stretch flex flex-col gap-[32px] items-start pb-[40px] px-[40px] pt-[24px] w-full">
                    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                      <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Specification" />
                      <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Shade system" value="VITA Lumin" selected disabled />
                    </div>
                    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                      <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Material" disabled />
                      <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Body" disabled />
                    </div>
                    <ImplantAdditionalInfoAccordion />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── Footer ── */}
          <div className="relative shrink-0 w-full border-t border-[#e0e0e0]">
            <div className="flex items-center justify-end p-[16px]">
              <button
                onClick={selectedCardId !== null ? onDone : undefined}
                disabled={selectedCardId === null}
                className={`flex h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] transition-colors ${
                  selectedCardId !== null
                    ? 'bg-[#bfeafb] hover:bg-[#a0dff5] cursor-pointer'
                    : 'bg-[#f0f0f0] cursor-not-allowed'
                }`}
              >
                <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[4px] ${
                  selectedCardId !== null ? 'border-[#408dc1]' : 'border-[#d1d1d1]'
                }`} />
                <p className={`font-['Roboto:Medium',sans-serif] font-medium leading-[28px] text-[18px] text-center tracking-[0.2px] whitespace-nowrap ${
                  selectedCardId !== null ? 'text-[#0067ac]' : 'text-[#b0b1b3]'
                }`} style={{ fontVariationSettings: "'wdth' 100" }}>
                  Done
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Edit modal (z-[60], stacks on top) ── */}
      {showEditModal && (
        <EditImplantModal
          teeth={teeth}
          onClose={() => setShowEditModal(false)}
          onDone={() => setShowEditModal(false)}
        />
      )}
    </>
  );
}

/* ─── Implant Info Dropdown (for accordion panels) ─────────── */
function ImplantInfoDropdown({ className, label, value, selected = false, disabled = false }: {
  className?: string;
  label: string;
  value?: string;
  selected?: boolean;
  disabled?: boolean;
}) {
  const textColor = disabled ? "text-[#b0b1b3]" : "text-[#3e3d40]";
  const caretColor = disabled ? "#B0B1B3" : "#80D6F7";

  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex flex-col items-start relative w-full">
        <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative">
            {selected && value ? (
              <>
                <p className={`font-['Roboto:Medium',sans-serif] font-medium leading-[24px] ${textColor} text-[14px] whitespace-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {label}
                </p>
                <p className={`font-['Roboto:Regular',sans-serif] font-normal leading-[28px] ${textColor} text-[18px] whitespace-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {value}
                </p>
              </>
            ) : (
              <p className={`font-['Roboto:Regular',sans-serif] font-normal leading-[28px] ${textColor} text-[18px]`} style={{ fontVariationSettings: "'wdth' 100" }}>
                {label}
              </p>
            )}
          </div>
          <div className="overflow-clip relative shrink-0 size-[32px]">
            <div className="absolute bottom-[31.25%] left-1/4 right-1/4 top-[37.5%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
                <path d="M16 0L8 10L0 0H16Z" fill={caretColor} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Additional Information sub-accordion (inside Crown) ──── */
function ImplantAdditionalInfoAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`w-full ${open ? "bg-white" : ""}`}>
      <button
        onClick={() => setOpen(v => !v)}
        className="bg-[#f0f0f0] flex gap-[10px] h-[72px] items-center px-[22px] py-[14px] w-full cursor-pointer hover:bg-[#e8e8e8] transition-colors"
      >
        <div className="overflow-clip relative shrink-0 size-[32px]">
          <div className={open ? "absolute inset-[31.25%_18.75%_33.13%_18.75%]" : "absolute inset-[33.13%_18.75%_31.25%_18.75%]"}>
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 11.4">
              <path d={open ? svgImplantInfoPaths.p3370f400 : svgImplantInfoPaths.p1bcf5d80} fill="#3E3D40" />
            </svg>
          </div>
        </div>
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] text-[#3e3d40] text-[24px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
          Additional information
        </p>
      </button>
      {open && (
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-[40px] px-[16px] pt-[24px] w-full">
          <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
            <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Preparation design - Buccal" disabled />
            <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Preparation design - Lingual" disabled />
            <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Incisal" disabled />
          </div>
          <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
            <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Margin design - Buccal" disabled />
            <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Margin design - Lingual" disabled />
            <ImplantInfoDropdown className="flex-[1_0_0] min-h-px min-w-px" label="Gingival" disabled />
          </div>
          <div className="content-stretch flex gap-[48px] items-center justify-end relative shrink-0 w-full">
            <ImplantInfoDropdown className="shrink-0" label="Stump shade" disabled />
          </div>
        </div>
      )}
    </div>
  );
}