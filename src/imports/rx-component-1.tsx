import { useState } from "react";

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

function Frame({ toggleStates, onToggle, labels, gap = 80 }: { 
  toggleStates: boolean[], 
  onToggle: (index: number) => void,
  labels: string[],
  gap?: number
}) {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0 w-full" style={{ gap: `${gap}px` }}>
      {labels.map((label, index) => (
        <Toggle 
          key={label}
          label={label}
          isOn={toggleStates[index]}
          onToggle={() => onToggle(index)}
        />
      ))}
    </div>
  );
}

interface RxProps {
  variant?: 'default' | 'resto' | 'appliance' | 'dentures' | 'invisalign' | 'studyModel' | 'surgicalGuide';
  labels?: string[];
  initialStates?: boolean[];
}

export default function Rx({ variant = 'default', labels, initialStates }: RxProps) {
  // Define variants
  const variantConfig = {
    default: {
      labels: [
        "NIRI Capture",
        "New Sleeve Attached"
      ],
      initialStates: [true, true],
      gap: 80
    },
    resto: {
      labels: [
        "NIRI Capture",
        "New Sleeve Attached",
        "Multi Bite",
        "Pre-treatment"
      ],
      initialStates: [true, true, false, false],
      gap: 80
    },
    appliance: {
      labels: [
        "NIRI Capture",
        "New Sleeve Attached"
      ],
      initialStates: [true, true],
      gap: 24
    },
    dentures: {
      labels: [
        "NIRI Capture",
        "New Sleeve Attached",
        "Denture copy scan"
      ],
      initialStates: [true, true, false],
      gap: 24
    },
    invisalign: {
      labels: [
        "NIRI Capture",
        "New Sleeve Attached",
        "Ortho Model / iCast",
        "Palatal Guidance",
        "Multi bite"
      ],
      initialStates: [true, true, false, false, false],
      gap: 80
    },
    studyModel: {
      labels: [
        "NIRI Capture",
        "New Sleeve Attached",
        "Ortho model / iCast",
        "Palatal & gingival feedback"
      ],
      initialStates: [true, true, false, false],
      gap: 80
    },
    surgicalGuide: {
      labels: [
        "NIRI Capture",
        "New Sleeve Attached"
      ],
      initialStates: [true, true],
      gap: 80
    }
  };

  const config = variantConfig[variant];
  const toggleLabels = labels || config.labels;
  const defaultStates = initialStates || config.initialStates;

  const [toggleStates, setToggleStates] = useState(defaultStates);

  const handleToggle = (index: number) => {
    setToggleStates(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Rx">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative shrink-0">
          <Frame toggleStates={toggleStates} onToggle={handleToggle} labels={toggleLabels} gap={config.gap} />
        </div>
      </div>
    </div>
  );
}