import { useState, useEffect, useRef } from "react";
import { Patient } from "../components/PatientList";
import Header from "../components/Header";
import { ChevronLeft } from "lucide-react";
import Rx from "../components/Rx";
import Sent from "../components/Sent";
import Notes from "../components/Notes";
import Attachment from "../components/Attachment";
import Procedure from "../components/Procedure";
import DueDate from "../components/DueDate";
import ToothSelectorLarge from "../components/ToothSelectorLarge";
import AddScanLayerButton from "../imports/AddScanLayerButton";
import DetailPanel from "../components/DetailPanel";
import DetailPanelList from "../components/DetailPanelList";
import DetailPanelImplantBased from "../components/DetailPanelImplantBased";
import ProductOverlay from "../components/ProductOverlay";
import ImplantBasedModal from "../components/ImplantBasedModal";
import ProcedureCards from "../components/ProcedureCards";
import SurgicalGuideOptions from "../components/SurgicalGuideOptions";

interface NewScanProps {
  patient: Patient;
  scanType: string;
  onBack: () => void;
  onNext: () => void;
  onProcedureChange?: (procedure: string) => void;
  onNavigateToMultiLayer?: () => void;
  onNavigateToView?: () => void;
  onNavigateToSummary?: () => void;
  onProcedureEdit?: () => void;
  initialProcedure?: string;
  externalToothTreatments?: { [tooth: string]: string };
  onToothTreatmentsChange?: (treatments: { [tooth: string]: string }) => void;
  externalToothSpecifications?: { [tooth: string]: { [key: string]: string } };
  onToothSpecificationsChange?: (specs: { [tooth: string]: { [key: string]: string } }) => void;
  onPreTreatmentToggle?: (enabled: boolean) => void;
}

// Helper function to calculate age from date of birth
const calculateAge = (dateOfBirth: string): string => {
  const [month, day, year] = dateOfBirth.split("/");
  const birthDate = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
  );
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return `${age} years old`;
};

// Format date to "Dec 10, 2025" format
const formatDate = (dateOfBirth: string): string => {
  const [month, day, year] = dateOfBirth.split("/");
  const date = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
  );
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export default function NewScan({
  patient,
  scanType,
  onBack,
  onNext,
  onProcedureChange,
  onNavigateToMultiLayer,
  onNavigateToView,
  onNavigateToSummary,
  onProcedureEdit,
  initialProcedure,
  externalToothTreatments,
  onToothTreatmentsChange,
  externalToothSpecifications,
  onToothSpecificationsChange,
  onPreTreatmentToggle,
}: NewScanProps) {
  const [activeSteps, setActiveSteps] = useState({
    rx: true,
    stepIcon: false,
    scan: false,
    search: false,
    email: false,
  });

  const handleStepToggle = (step: string) => {
    if (step === 'stepIcon' && onNavigateToMultiLayer) {
      onNavigateToMultiLayer();
      return;
    }
    if (step === 'search' && onNavigateToView) {
      onNavigateToView();
      return;
    }
    if (step === 'email' && onNavigateToSummary) {
      onNavigateToSummary();
      return;
    }
    
    setActiveSteps({
      rx: step === "rx",
      stepIcon: step === "stepIcon",
      scan: step === "scan",
      search: step === "search",
      email: step === "email",
    });
  };

  const [activeView, setActiveView] = useState<'chart' | 'table'>('chart');
  const [selectedTeeth, setSelectedTeeth] = useState<string[]>([]);
  const [selectedTreatment, setSelectedTreatment] = useState<string>("");
  const [toothTreatments, setToothTreatmentsInternal] = useState<{ [tooth: string]: string }>(externalToothTreatments || {});
  const [toothSpecifications, setToothSpecificationsInternal] = useState<{ [tooth: string]: { [key: string]: string } }>(externalToothSpecifications || {});
  const [toothInsertionOrder, setToothInsertionOrder] = useState<string[]>([]);
  const [showDropdownPanel, setShowDropdownPanel] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showImplantModal, setShowImplantModal] = useState(false);
  const [isProcedureExpanded, setIsProcedureExpanded] = useState(false);
  const [currentProcedure, setCurrentProcedure] = useState(initialProcedure || "Fixed restorative");
  const detailPanelRef = useRef<HTMLDivElement>(null);

  // Wrapper to sync tooth treatments with parent
  const setToothTreatments = (newTreatments: { [tooth: string]: string }) => {
    setToothTreatmentsInternal(newTreatments);
    if (onToothTreatmentsChange) onToothTreatmentsChange(newTreatments);
  };

  // Wrapper to sync tooth specifications with parent
  const setToothSpecifications = (newSpecs: { [tooth: string]: { [key: string]: string } }) => {
    setToothSpecificationsInternal(newSpecs);
    if (onToothSpecificationsChange) onToothSpecificationsChange(newSpecs);
  };

  // Check if both teeth and treatment are selected — implant based uses modal, not detail panel
  const showDetailsPanel = selectedTeeth.length > 0 && selectedTreatment !== "" && selectedTreatment !== "Implant based";
  
  // Check if there are any teeth with indications
  const hasIndications = Object.keys(toothTreatments).length > 0;

  // Show dropdown panel when indication is selected
  useEffect(() => {
    if (showDetailsPanel) {
      setShowDropdownPanel(true);
    }
  }, [showDetailsPanel]);

  // Handle click outside to switch to list view
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showDropdownPanel && detailPanelRef.current && !detailPanelRef.current.contains(event.target as Node)) {
        // Clear selection to show list view
        setSelectedTeeth([]);
        setSelectedTreatment('');
        setShowDropdownPanel(false);
        setIsEditMode(false); // Reset edit mode when clearing selection
        setIsOverlayOpen(false); // Close overlay when clearing selection
      }
    };

    if (showDropdownPanel) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdownPanel]);

  const handleToothSelect = (tooth: string) => {
    // If a treatment has been applied (selectedTreatment exists and toothTreatments has entries),
    // clicking a new tooth should start a fresh selection
    if (selectedTreatment && Object.keys(toothTreatments).length > 0) {
      setSelectedTeeth([tooth]);
      // If the clicked tooth already has a treatment, auto-load it
      if (toothTreatments[tooth]) {
        setSelectedTreatment(toothTreatments[tooth]);
        setShowDropdownPanel(true);
      } else {
        setSelectedTreatment('');
      }
    } else {
      // Otherwise, toggle the tooth in the selection
      setSelectedTeeth(prev => 
        prev.includes(tooth) 
          ? prev.filter(t => t !== tooth)
          : [...prev, tooth]
      );
    }
  };

  const handleTreatmentSelect = (treatment: string) => {
    const newTreatment = selectedTreatment === treatment ? '' : treatment;
    setSelectedTreatment(newTreatment);
    
    // If we have selected teeth and a treatment, assign the treatment to those teeth
    if (selectedTeeth.length > 0 && newTreatment !== '') {
      const newToothTreatments = { ...toothTreatments };
      const newInsertionOrder = [...toothInsertionOrder];
      
      selectedTeeth.forEach(tooth => {
        newToothTreatments[tooth] = newTreatment;
        
        // Track insertion order - remove if already exists, then add to end
        const existingIndex = newInsertionOrder.indexOf(tooth);
        if (existingIndex !== -1) {
          newInsertionOrder.splice(existingIndex, 1);
        }
        newInsertionOrder.push(tooth);
      });
      
      setToothTreatments(newToothTreatments);
      setToothInsertionOrder(newInsertionOrder);

      // Open modal for Implant based instead of using right panel
      if (newTreatment === "Implant based") {
        setShowImplantModal(true);
      }
      
      // For "Missing" indication, skip detail panel and go directly to card view
      if (newTreatment === "Missing") {
        setSelectedTeeth([]);
        setSelectedTreatment('');
        setShowDropdownPanel(false);
      }
    }
  };

  // Handle deletion of treatment indications
  const handleDeleteIndication = () => {
    // Remove the treatment from all selected teeth
    const newToothTreatments = { ...toothTreatments };
    selectedTeeth.forEach(tooth => {
      delete newToothTreatments[tooth];
    });
    setToothTreatments(newToothTreatments);
    
    // Clear selection
    setSelectedTeeth([]);
    setSelectedTreatment('');
  };

  // Handle copying specifications from one tooth to others
  const handleCopyFrom = (sourceTooth: string, targetTeeth: string[]) => {
    const sourceTreatment = toothTreatments[sourceTooth];
    const sourceSpecs = toothSpecifications[sourceTooth];
    
    if (!sourceTreatment) return;
    
    const newToothTreatments = { ...toothTreatments };
    const newToothSpecifications = { ...toothSpecifications };
    const newInsertionOrder = [...toothInsertionOrder];
    
    targetTeeth.forEach(tooth => {
      // Copy treatment
      newToothTreatments[tooth] = sourceTreatment;
      
      // Copy specifications if they exist
      if (sourceSpecs) {
        newToothSpecifications[tooth] = { ...sourceSpecs };
      }
      
      // Update insertion order
      const existingIndex = newInsertionOrder.indexOf(tooth);
      if (existingIndex !== -1) {
        newInsertionOrder.splice(existingIndex, 1);
      }
      newInsertionOrder.push(tooth);
    });
    
    setToothTreatments(newToothTreatments);
    setToothSpecifications(newToothSpecifications);
    setToothInsertionOrder(newInsertionOrder);
    
    // Clear selection after copying
    setSelectedTeeth([]);
    setSelectedTreatment('');
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-[250]">
        <Header
          activeSteps={activeSteps}
          onStepToggle={handleStepToggle}
          onNavigateToScan={onNavigateToMultiLayer}
          onNavigateToView={onNavigateToView}
          onNavigateToSummary={onNavigateToSummary}
        />
      </div>

      {/* Patient Header */}
      <div className="bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_2px_8px_0px_rgba(0,0,0,0.15)] px-[40px] py-[24px]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[24px]">
            <div className="flex items-center gap-[24px]">
              {/* Avatar */}
              <div
                className="relative shrink-0 size-[80px] rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: (() => {
                    // Generate varied accent colors for avatars
                    const accentColors = [
                      "5FCEFA",
                      "4FC3F7",
                      "29B6F6",
                      "03A9F4",
                      "039BE5",
                      "0288D1",
                      "0277BD",
                      "01579B",
                      "00BCD4",
                      "00ACC1",
                      "0097A7",
                      "00838F",
                    ];
                    const colorIndex =
                      patient.id
                        .split("")
                        .reduce(
                          (acc, char) =>
                            acc + char.charCodeAt(0),
                          0,
                        ) % accentColors.length;
                    const avatarColor =
                      accentColors[colorIndex];
                    return `#${avatarColor}40`;
                  })(),
                }}
              >
                <svg
                  className="w-[48px] h-[48px] text-white opacity-80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              {/* Name */}
              <div className="flex flex-col gap-[8px]">
                <p
                  className="font-['Roboto:Medium',sans-serif] font-medium leading-[40px] text-[32px] text-black"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                  }}
                >
                  {patient.firstName} {patient.lastName}
                </p>
              </div>
            </div>
          </div>
          {/* Patient Info */}
          <div className="flex gap-[67px] items-center">
            <div className="flex flex-col gap-[4px] font-['Roboto:Regular',sans-serif] leading-[28px] text-[18px]">
              <p
                className="text-[#696a6d]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Age
              </p>
              <p
                className="text-black"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {calculateAge(patient.dateOfBirth)}
              </p>
            </div>
            <div className="flex flex-col gap-[4px] font-['Roboto:Regular',sans-serif] leading-[28px] text-[18px]">
              <p
                className="text-[#696a6d]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Gender at birth
              </p>
              <p
                className="text-black"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {patient.gender.charAt(0).toUpperCase() +
                  patient.gender.slice(1)}
              </p>
            </div>
            <div className="flex flex-col gap-[4px] font-['Roboto:Regular',sans-serif] leading-[28px] text-[18px]">
              <p
                className="text-[#696a6d]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Last scan
              </p>
              <p
                className="text-black"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {formatDate(patient.dateOfBirth)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Empty for now */}
      <div className="flex-1 flex flex-col px-[46px] pt-[52px] pb-[80px] overflow-y-auto">
        <div className="flex flex-col gap-[12px] w-full pb-[40px]">
          {/* Back Button + Procedure Row */}
          <div className="flex gap-[16px] w-full items-stretch -mt-[20px] relative" style={{ zIndex: 100 }}>
            {/* Procedure Button */}
            <div className="h-[80px]" style={{ zIndex: 1 }}>
              <Procedure
                text={currentProcedure}
                expanded={isProcedureExpanded}
                onProcedureChange={(proc) => {
                  setCurrentProcedure(proc);
                  if (onProcedureChange) onProcedureChange(proc);
                }}
                onEditClick={onProcedureEdit}
                onExpandChange={(expanded) => setIsProcedureExpanded(expanded)}
              />
            </div>

            {/* Sent and Due Date Container */}
            <div 
              className="content-stretch flex gap-[16px] items-stretch relative shrink-0 flex-1 h-[80px]" 
              style={{ zIndex: 200 }}
              onClick={(e) => {
                console.log("Parent container clicked", e.target);
              }}
            >
              <div 
                className="flex-1 h-full relative" 
                style={{ zIndex: 201 }}
                onClick={(e) => {
                  console.log("Sent wrapper clicked", e.target);
                }}
              >
                <Sent />
              </div>
              <div className="flex-1 h-full relative" style={{ zIndex: 200 }}>
                <DueDate />
              </div>
            </div>
          </div>

          {/* Procedure Cards - Full Width - Conditionally Rendered */}
          {isProcedureExpanded && (
            <ProcedureCards
              currentProcedure={currentProcedure}
              onSelect={(proc) => {
                // Update selection immediately so user sees highlight + checkmark
                setCurrentProcedure(proc);
                if (onProcedureChange) onProcedureChange(proc);
                // Delay collapse so the selection animation is visible
                setTimeout(() => {
                  setIsProcedureExpanded(false);
                }, 600);
              }}
            />
          )}

          {/* Stepper Section - Treatment Scan Only */}
          <div className="flex items-center gap-[20px]">
          </div>

          {/* Surgical Guide Options - Only for Scan for surgical guide */}
          {currentProcedure === "Scan for surgical guide" && (
            <div className="flex gap-[20px] w-full items-start">
              <div className="flex-1">
                <SurgicalGuideOptions />
              </div>
            </div>
          )}

          {/* Components Container */}
          {/* View Switch and Tooth Chart - Combined Separate Container */}
          {currentProcedure !== "Study model" && (
          <div className="bg-white rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] flex flex-col gap-[0px] pl-[24px] pr-[0px] py-[0px]">
            <div className="flex w-full items-stretch relative h-[540px]">
              {/* ToothSelectorLarge with built-in Chart/Table toggle */}
              <div className={`${activeView === 'chart' && currentProcedure !== "Scan for surgical guide" ? 'w-[67%]' : 'w-full'} flex flex-col h-full min-w-0`}>
                <ToothSelectorLarge
                  onToothSelect={handleToothSelect}
                  selectedTeeth={selectedTeeth}
                  onTreatmentSelect={handleTreatmentSelect}
                  selectedTreatment={selectedTreatment}
                  toothTreatments={toothTreatments}
                  toothSpecifications={toothSpecifications}
                  onViewChange={(view) => setActiveView(view)}
                  onCopyFrom={handleCopyFrom}
                  customTreatmentTypes={currentProcedure === "Scan for surgical guide" ? [
                    { label: 'Implant position', color: '#F28C5A' },
                    { label: 'Supporting tooth', color: '#4ECDC4' }
                  ] : undefined}
                />
              </div>

              {/* Right Panel: Only show when chart view is active and not surgical guide */}
              {activeView === 'chart' && currentProcedure !== "Scan for surgical guide" && (
                <>

                {/* Product Overlay - Positioned absolutely next to detail panel with no gap */}
                {isOverlayOpen && (
                  <div className="absolute right-[25%] w-[20%] h-[540px] z-20 transition-all duration-300">
                    <ProductOverlay
                      onMinimize={() => {
                        setIsOverlayOpen(false);
                        // Keep isEditMode true so the detail panel maintains its content
                      }}
                      onFavorite={() => setIsFavorited(!isFavorited)}
                      isFavorited={isFavorited}
                    />
                  </div>
                )}

                {/* Conditionally render instruction text or detail panel */}
                {showDetailsPanel ? (
                  <div ref={detailPanelRef} className="w-[33%] h-[540px] relative border-l border-[#e0e0e0]">
                    {/* Maximize button when overlay is closed and in edit mode */}
                    {!isOverlayOpen && isEditMode && (
                      <div 
                        className="absolute left-[-40px] size-[32px] top-[8px] cursor-pointer hover:opacity-70 transition-opacity z-10 bg-white rounded-[4px] shadow-md flex items-center justify-center"
                        onClick={() => setIsOverlayOpen(true)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setIsOverlayOpen(true);
                          }
                        }}
                      >
                        <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <g>
                            <path d="M24 8H16V10H21.17L14 17.17L15.41 18.58L22.58 11.41L22.59 16.59L24.59 16.58L24.58 8.58C24.58 8.27 24.45 7.98 24.23 7.76C24.01 7.54 23.72 7.41 23.41 7.41L24 8Z" fill="#3E3D40" />
                            <path d="M8 24H16V22H10.83L18 14.83L16.59 13.42L9.42 20.59L9.41 15.41L7.41 15.42L7.42 23.42C7.42 23.73 7.55 24.02 7.77 24.24C7.99 24.46 8.28 24.59 8.59 24.59L8 24Z" fill="#3E3D40" />
                          </g>
                        </svg>
                      </div>
                    )}
                    {selectedTreatment === "Implant based" ? (
                      <DetailPanelImplantBased
                        tooth={`Tooth ${selectedTeeth.join(', ')}`}
                        onDelete={handleDeleteIndication}
                        onAddInfo={() => {
                          console.log('Add restoration & crown info clicked');
                        }}
                        isEditMode={isEditMode}
                        onEditModeChange={(editMode) => {
                          setIsEditMode(editMode);
                          if (editMode) {
                            setIsOverlayOpen(true);
                          }
                        }}
                      />
                    ) : (
                      <DetailPanel
                        title="Details"
                        tooth={`Tooth ${selectedTeeth.join(', ')}`}
                        badgeLabel={selectedTreatment}
                        selectedTeeth={selectedTeeth}
                        onDelete={handleDeleteIndication}
                        initialSpecifications={selectedTeeth.length === 1 ? toothSpecifications[selectedTeeth[0]] : undefined}
                        onSpecificationChange={(specs) => {
                          // Update specifications for all selected teeth
                          const newToothSpecifications = { ...toothSpecifications };
                          selectedTeeth.forEach(tooth => {
                            newToothSpecifications[tooth] = specs;
                          });
                          setToothSpecifications(newToothSpecifications);
                          console.log('Updated tooth specifications:', newToothSpecifications);
                        }}
                      />
                    )}
                  </div>
                ) : hasIndications ? (
                  <div className="flex-1 h-[540px]">
                    <DetailPanelList
                      toothTreatments={toothTreatments}
                      toothSpecifications={toothSpecifications}
                      toothInsertionOrder={toothInsertionOrder}
                      onDeleteTooth={(tooth) => {
                        const newToothTreatments = { ...toothTreatments };
                        delete newToothTreatments[tooth];
                        setToothTreatments(newToothTreatments);
                        
                        // Also remove from insertion order
                        const newInsertionOrder = toothInsertionOrder.filter(t => t !== tooth);
                        setToothInsertionOrder(newInsertionOrder);
                      }}
                      onCardClick={(tooth, treatment) => {
                        setSelectedTeeth([tooth]);
                        setSelectedTreatment(treatment);
                        setShowDropdownPanel(true);
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex-1 h-[540px] bg-white relative">
                    <div aria-hidden="true" className="absolute border-[#e0e0e0] border-l border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-col items-center justify-center size-full">
                      <p
                        className="font-['Roboto:Regular',sans-serif] font-normal text-[18px] text-[#3e3d40] text-center leading-[28px] max-w-[239px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Select one or more teeth and the type of restoration to define them here
                      </p>
                    </div>
                  </div>
                )}
                </>
              )}
            </div>
          </div>
          )}

          {/* Rx, Notes, and Attachments - Separate White Container */}
          <div className="bg-white rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] p-[24px] flex flex-col gap-[24px]">
            {/* Rx Component */}
            <div className="w-full">
              <Rx 
                key={currentProcedure === "Study model" ? "studyModel" : currentProcedure === "Scan for surgical guide" ? "surgicalGuide" : "resto"} 
                variant={currentProcedure === "Study model" ? "studyModel" : currentProcedure === "Scan for surgical guide" ? "surgicalGuide" : "resto"} 
                onPreTreatmentToggle={onPreTreatmentToggle}
              />
            </div>

            {/* Notes and Attachments - Horizontal Layout */}
            <div className="flex gap-[20px] w-full items-stretch">
              <div className="flex-1">
                <Attachment />
              </div>
              <div className="flex-1">
                <Notes />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implant Based Modal - centered overlay */}
      {showImplantModal && (
        <ImplantBasedModal
          teeth={selectedTeeth}
          onClose={() => {
            setShowImplantModal(false);
            // Clear the implant selection on X close
            setSelectedTeeth([]);
            setSelectedTreatment('');
          }}
          onDone={() => {
            setShowImplantModal(false);
            // Keep the treatment recorded, clear active selection
            setSelectedTeeth([]);
            setSelectedTreatment('');
          }}
        />
      )}
    </div>
  );
}