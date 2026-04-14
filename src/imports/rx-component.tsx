interface RxProps {
  variant?: 'default' | 'resto' | 'appliance' | 'dentures' | 'invisalign' | 'studyModel';
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