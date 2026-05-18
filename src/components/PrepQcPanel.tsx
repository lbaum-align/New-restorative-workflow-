import { useState } from "react";

interface PrepQcPanelProps {
  onClose?: () => void;
}

interface ScaleColors {
  colors: string[];
  values: string[];
}

const scaleConfigs: Record<string, ScaleColors> = {
  "0.1": {
    colors: [
      "#6b0303", "#a00909", "#c61313", "red", "#f7771a", "#ffa007", "#ffd600",
      "#ffe500", "#54bf00", "#2ce9c6", "#0ef4fc", "#3eb9ff", "#0197ec", "#0065ff", "#003f9e"
    ],
    values: [
      "<0.1", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1.0", "1.1", "1.2", "1.3", ">1.4"
    ]
  },
  "0.2": {
    colors: [
      "#6b0303", "#a00909", "#c61313", "red", "#f7771a", "#ffa007", "#ffd600",
      "#ffe500", "#54bf00", "#2ce9c6", "#0ef4fc", "#3eb9ff", "#0197ec", "#0065ff", "#003f9e"
    ],
    values: [
      "<0.2", "0.2", "0.4", "0.6", "0.8", "1.0", "1.2", "1.4", "1.6", "1.8", "2.0", "2.2", "2.4", "2.6", ">2.8"
    ]
  }
};

function Container({ color }: { color: string }) {
  return (
    <div className="h-[20px] relative shrink-0 w-full" style={{ backgroundColor: color }} data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OcclgramNumber({ color, value }: { color: string; value: string }) {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[69px]" data-name="Occlgram number">
      <Container color={color} />
      <p className="font-['Roboto',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black text-center w-full">
        {value}
      </p>
    </div>
  );
}

function ColorScale({ selectedScale }: { selectedScale: string }) {
  const config = scaleConfigs[selectedScale];

  return (
    <div className="content-stretch flex h-[44px] items-center relative shrink-0" data-name="ColorScale">
      {config.values.map((value, index) => (
        <OcclgramNumber
          key={index}
          color={config.colors[index]}
          value={value}
        />
      ))}
    </div>
  );
}

function ScaleButton({ 
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
      className={`${isSelected ? 'bg-[#bfeafb] border-[#408dc1]' : 'bg-[#f9f9f9] border-[#939598]'} h-[48px] min-w-[108px] relative rounded-[4px] shrink-0 transition-all hover:opacity-90`}
      data-name="Button"
    >
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[4px] ${isSelected ? 'border-[#408dc1]' : 'border-[#939598]'}`} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center min-w-[inherit] px-[16px] py-[22px] relative">
        <div className={`flex flex-col font-['Roboto',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-center tracking-[0.2px] whitespace-nowrap ${isSelected ? 'text-[#0067ac]' : 'text-[#3e3d40]'}`}>
          <p className="leading-[28px]">{label}</p>
        </div>
      </div>
    </button>
  );
}

function ScaleButtons({ selectedScale, onScaleChange }: { selectedScale: string; onScaleChange: (scale: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[220px]" data-name="Container">
      <div className="flex gap-[4px] items-start">
        <ScaleButton
          label="0.1"
          isSelected={selectedScale === "0.1"}
          onClick={() => onScaleChange("0.1")}
        />
        <ScaleButton
          label="0.2"
          isSelected={selectedScale === "0.2"}
          onClick={() => onScaleChange("0.2")}
        />
      </div>
    </div>
  );
}

export default function PrepQcPanel({ onClose }: PrepQcPanelProps) {
  const [selectedScale, setSelectedScale] = useState("0.1");

  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative" data-name="Prep Qc Panel">
      <ColorScale selectedScale={selectedScale} />
      <ScaleButtons selectedScale={selectedScale} onScaleChange={setSelectedScale} />
    </div>
  );
}
