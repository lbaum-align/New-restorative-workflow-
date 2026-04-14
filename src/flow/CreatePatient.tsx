import { useState } from "react";
import Fields from "../components/Fields";
import Header from "../components/Header";
import BottomActions from "../components/BottomActions";
import { Home } from "lucide-react";

interface CreatePatientProps {
  onBack: () => void;
  onNext: () => void;
  onNavigateToMultiLayer?: () => void;
  onNavigateToView?: () => void;
}

export default function CreatePatient({ onBack, onNext, onNavigateToMultiLayer, onNavigateToView }: CreatePatientProps) {
  const [activeSteps, setActiveSteps] = useState({
    rx: true,
    stepIcon: false,
    scan: false,
    search: false,
    email: false
  });

  const handleStepToggle = (step: string) => {
    if (step === 'stepIcon' && onNavigateToMultiLayer) {
      onNavigateToMultiLayer();
      return;
    }
    
    setActiveSteps({
      rx: step === 'rx',
      stepIcon: step === 'stepIcon',
      scan: step === 'scan',
      search: step === 'search',
      email: step === 'email'
    });
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-[250]">
        <Header activeSteps={activeSteps} onStepToggle={handleStepToggle} onNavigateToScan={onNavigateToMultiLayer} onNavigateToView={onNavigateToView} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Form Container */}
        <div className="px-[46px] pt-[52px] flex-1">
          <Fields />
        </div>

        {/* Bottom Action Buttons */}
        <BottomActions
          onBack={onBack}
          onNext={onNext}
          backText="Back"
          nextText="Create"
        />
      </div>
    </div>
  );
}