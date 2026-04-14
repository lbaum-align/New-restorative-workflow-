import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-lak87qouyk";

interface OcclusogramPanelProps {
  onChangeScale?: () => void;
  onClose?: () => void;
  onTrim?: () => void;
  onUndo?: () => void;
  selectedScale?: string;
  onScaleChange?: (scale: string) => void;
}

type ScaleOption = "0.00 - 1.20" | "0.55 - 1.45" | "1.10 - 2.30";

interface ScaleData {
  label: string;
  values: string[];
}

const scaleConfigs: Record<ScaleOption, ScaleData> = {
  "0.00 - 1.20": {
    label: "0.00 - 1.20",
    values: ["0.00", "0.20", "0.40", "0.60", "0.80", "1.00", "1.20"],
  },
  "0.55 - 1.45": {
    label: "0.55 - 1.45",
    values: ["0.55", "0.70", "0.85", "1.00", "1.15", "1.30", "1.45"],
  },
  "1.10 - 2.30": {
    label: "1.10 - 2.30",
    values: ["1.10", "1.30", "1.50", "1.70", "1.90", "2.10", "2.30"],
  },
};

const colors = ["#a00a0a", "#f7771a", "#ffe500", "#54bf00", "#0ff4fc", "#0197ec", "#06f"];

function Container({ color }: { color: string }) {
  return (
    <div className="h-[20px] relative shrink-0 w-full" style={{ backgroundColor: color }} data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PrepQcNumber({ color, value }: { color: string; value: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative" data-name="Prep qc number">
      <Container color={color} />
      <p className="font-['Roboto',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black text-center">
        {value}
      </p>
    </div>
  );
}

function ScaleBar({ selectedScale }: { selectedScale: ScaleOption }) {
  const config = scaleConfigs[selectedScale];
  
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1053px]" data-name="Scale Bar">
      {config.values.map((value, index) => (
        <PrepQcNumber key={index} color={colors[index]} value={value} />
      ))}
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p34c74780} fill="var(--fill-0, #0067AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuPiece({ 
  label, 
  isSelected, 
  onClick 
}: { 
  label: string; 
  isSelected: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`${isSelected ? 'bg-[#bfeafb]' : 'bg-white hover:bg-gray-50'} h-[56px] relative shrink-0 w-full transition-colors`}
      data-name="Menu / Piece"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-ellipsis whitespace-nowrap">
            <p className="leading-[28px] overflow-hidden">{label}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Menu({ 
  selectedScale, 
  onScaleSelect,
  isOpen 
}: { 
  selectedScale: ScaleOption; 
  onScaleSelect: (scale: ScaleOption) => void;
  isOpen: boolean;
}) {
  if (!isOpen) return null;

  const options: ScaleOption[] = ["0.00 - 1.20", "0.55 - 1.45", "1.10 - 2.30"];

  return (
    <div 
      className="absolute bottom-full left-0 mb-[4px] bg-white content-stretch flex flex-col items-start max-w-[640px] overflow-clip rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_2px_8px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" 
      data-name="Menu"
    >
      {options.map((option) => (
        <MenuPiece
          key={option}
          label={option}
          isSelected={selectedScale === option}
          onClick={() => onScaleSelect(option)}
        />
      ))}
    </div>
  );
}

function ToggleButton({ 
  selectedScale, 
  onClick, 
  isOpen 
}: { 
  selectedScale: ScaleOption; 
  onClick: () => void;
  isOpen: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-[#bfeafb] h-[48px] min-w-[108px] relative rounded-[4px] shrink-0 transition-all hover:bg-[#a6dff0] cursor-pointer"
      data-name="Button"
    >
      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-full items-center justify-center min-w-[inherit] px-[16px] py-[22px] relative">
        <div className={`transition-transform duration-200 ${isOpen ? '' : 'rotate-180'}`}>
          <Icon />
        </div>
        <div className="flex flex-col font-['Roboto',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[18px] text-center tracking-[0.2px] whitespace-nowrap">
          <p className="leading-[28px]">{selectedScale}</p>
        </div>
      </div>
    </button>
  );
}

function OccScale({ 
  selectedScale, 
  onScaleSelect,
  isOpen,
  onToggle 
}: { 
  selectedScale: ScaleOption; 
  onScaleSelect: (scale: ScaleOption) => void;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="h-[48px] relative shrink-0 w-[157px]" data-name="Occ Scale">
      <div className="absolute content-stretch flex items-start left-0 top-0 w-[157px]" data-name="Container">
        <div className="relative w-full">
          <Menu 
            selectedScale={selectedScale} 
            onScaleSelect={onScaleSelect}
            isOpen={isOpen}
          />
          <ToggleButton 
            selectedScale={selectedScale} 
            onClick={onToggle}
            isOpen={isOpen}
          />
        </div>
      </div>
    </div>
  );
}

export default function OcclusogramPanel({
  onChangeScale,
  selectedScale: externalSelectedScale,
  onScaleChange,
}: OcclusogramPanelProps) {
  const [selectedScale, setSelectedScale] = useState<ScaleOption>("0.00 - 1.20");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScaleSelect = (scale: ScaleOption) => {
    setSelectedScale(scale);
    setIsDropdownOpen(false);
    onScaleChange?.(scale);
  };

  return (
    <div 
      ref={dropdownRef}
      className="content-stretch flex gap-[16px] items-end justify-center relative" 
      data-name="Occuslgram - naama"
    >
      <ScaleBar selectedScale={selectedScale} />
      <OccScale 
        selectedScale={selectedScale} 
        onScaleSelect={handleScaleSelect}
        isOpen={isDropdownOpen}
        onToggle={handleToggle}
      />
    </div>
  );
}
