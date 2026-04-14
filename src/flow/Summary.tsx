import { useState, useRef, useEffect } from "react";
import { Patient } from "../components/PatientList";
import Header from "../components/Header";
import Sent from "../components/Sent";
import RxElementsRecordsNotesLayers1 from "../imports/RxElementsRecordsNotesLayers-3323-1663";
import RxElementsRecordsNotesLayers2 from "../imports/RxElementsRecordsNotesLayers-3323-1809";
import Procedure from "../components/Procedure";
import DueDate from "../components/DueDate";
import ToothSelectorLarge from "../components/ToothSelectorLarge";
import DetailPanel from "../components/DetailPanel";
import DetailPanelList from "../components/DetailPanelList";
import DetailPanelImplantBased from "../components/DetailPanelImplantBased";
import ProductOverlay from "../components/ProductOverlay";
import ProcedureCards from "../components/ProcedureCards";
import RecordsNotes from "../imports/RecordsNotes";
import SignaturePanel from "../components/SignaturePanel";
import ToothTreatmentTable from "../components/ToothTreatmentTable";
import Attachment from "../components/Attachment";
import Notes from "../components/Notes";
import { List, Grid3x3 } from "lucide-react";
import svgPaths from "../imports/svg-wzvh60ppa3";

interface SummaryProps {
  patient: Patient | null;
  onBack: () => void;
  onHome: () => void;
  onNext?: () => void;
  scanType?: string | null;
  onProcedureChange?: (procedure: string) => void;
  onNavigateToMultiLayer?: () => void;
  onNavigateToView?: () => void;
  onNavigateToRx?: () => void;
  onProcedureEdit?: () => void;
  scannedLayers?: any[];
  procedureToothTreatments?: { [tooth: string]: string };
  procedureToothSpecifications?: { [tooth: string]: { [key: string]: string } };
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

export default function Summary({
  patient,
  onBack,
  onHome,
  onNext,
  scanType,
  onProcedureChange,
  onNavigateToMultiLayer,
  onNavigateToView,
  onNavigateToRx,
  onProcedureEdit,
  scannedLayers,
  procedureToothTreatments,
  procedureToothSpecifications,
}: SummaryProps) {
  // Map scanType to procedure display name
  const getProcedureName = () => {
    switch (scanType) {
      case "invisalign":
        return "Invisalign";
      case "dentures":
        return "Dentures";
      case "implantPlanning":
        return "Implant Planning";
      case "appliances":
        return "Appliances";
      case "crown":
        return "Crown";
      case "fixed-restorative":
        return "Fixed restorative";
      default:
        return "Fixed restorative";
    }
  };

  const [activeView, setActiveView] = useState<'chart' | 'table'>('chart');
  const [isProcedureExpanded, setIsProcedureExpanded] = useState(false);
  const [currentProcedure, setCurrentProcedure] = useState(getProcedureName());
  const [selectedTeeth, setSelectedTeeth] = useState<string[]>([]);
  const [selectedTreatment, setSelectedTreatment] = useState<string>("");
  const [showDropdownPanel, setShowDropdownPanel] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSignaturePanelOpen, setIsSignaturePanelOpen] = useState(false);
  const [sentToSelection, setSentToSelection] = useState("");
  const [showConfirmTooltip, setShowConfirmTooltip] = useState(false);
  const detailPanelRef = useRef<HTMLDivElement>(null);
  const [applianceArch, setApplianceArch] = useState<'upper' | 'lower' | null>('upper');
  const [dentureUpper, setDentureUpper] = useState(true);
  const [dentureLower, setDentureLower] = useState(false);

  // Read-only tooth treatments from procedure page
  const toothTreatments = procedureToothTreatments || {};
  const toothSpecifications = procedureToothSpecifications || {};

  // Treatment type color mapping for badges
  const TREATMENT_COLORS: { [key: string]: string } = {
    'Crown': '#8B2FC9',
    'Bridge': '#4ECDC4',
    'Veneer': '#F0B547',
    'Inlay': '#F08DC0',
    'Onlay': '#A67C52',
    'Eggshell': '#4DA6FF',
    'Mockup': '#6B3FA0',
    'Missing': '#C0C0C0',
    'Implant based': '#F28C5A',
  };

  // Get unique treatment types from procedure page data
  const uniqueTreatmentTypes = Array.from(new Set(Object.values(toothTreatments)));

  // Check if both teeth and treatment are selected for detail panel
  const showDetailsPanel = selectedTeeth.length > 0 && selectedTreatment !== "" && selectedTreatment !== "Implant based";
  
  // Check if there are any teeth with indications
  const hasIndications = Object.keys(toothTreatments).length > 0;

  // Determine if confirm button should be disabled (required info missing)
  // Only require lab selection - tooth indications are optional
  const isConfirmDisabled = !sentToSelection;
  
  // Log for debugging
  console.log("Summary - sentToSelection:", sentToSelection, "hasIndications:", hasIndications, "isConfirmDisabled:", isConfirmDisabled);

  // Build tooltip message listing what's missing
  const getMissingInfoMessages = (): string[] => {
    const missing: string[] = [];
    if (!sentToSelection) missing.push("Select a lab in \"Send to\"");
    return missing;
  };

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
        setSelectedTeeth([]);
        setSelectedTreatment('');
        setShowDropdownPanel(false);
        setIsEditMode(false);
        setIsOverlayOpen(false);
      }
    };

    if (showDropdownPanel) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdownPanel]);

  if (!patient) {
    return null;
  }

  return (
    <div className="h-screen bg-[#f9f9f9] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shrink-0 sticky top-0 z-[250]">
        <Header
          activeSteps={{ email: true }}
          onStepToggle={(step) => {
            if (step === "search") {
              onNavigateToView?.();
            } else if (step === "rx") {
              onNavigateToRx?.();
            } else if (step === "stepIcon") {
              onNavigateToMultiLayer?.();
            }
          }}
          onNavigateToRx={onNavigateToRx}
          onNavigateToScan={onNavigateToMultiLayer}
          onNavigateToView={onNavigateToView}
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-[46px] pt-[52px] pb-[40px] overflow-y-auto">
        <div className="flex flex-col gap-[12px] w-full pb-[40px]">
          {/* Procedure + Sent + Due Date Row */}
          <div className="flex gap-[16px] w-full items-stretch -mt-[20px]">
            {/* Procedure Button */}
            <div className="h-[80px] overflow-visible">
              <Procedure
                text={currentProcedure}
                onProcedureChange={(proc) => {
                  setCurrentProcedure(proc);
                  if (onProcedureChange) onProcedureChange(proc);
                }}
                onEditClick={onProcedureEdit}
                onExpandChange={(expanded) => setIsProcedureExpanded(expanded)}
              />
            </div>

            {/* Sent and Due Date Container */}
            <div className="content-stretch flex gap-[16px] items-stretch relative shrink-0 flex-1 h-[80px] overflow-visible">
              <div className="flex-1 h-full overflow-visible">
                <Sent showRequired={true} onSelectionChange={(value) => setSentToSelection(value)} />
              </div>
              <div className="flex-1 h-full overflow-visible">
                <DueDate />
              </div>
            </div>
          </div>

          {/* Procedure Cards - Full Width - Conditionally Rendered */}
          {isProcedureExpanded && (
            <ProcedureCards
              currentProcedure={currentProcedure}
              onSelect={(proc) => {
                setCurrentProcedure(proc);
                setIsProcedureExpanded(false);
                if (onProcedureChange) onProcedureChange(proc);
              }}
            />
          )}

          {/* Stepper Section */}
          <div className="flex items-center gap-[20px]">
          </div>

          {/* APPLIANCE SUMMARY - show appliance-specific content */}
          {scanType === 'appliances' ? (
            <>
              {/* Appliance Options — Read-only Summary */}
              <div className="bg-white relative rounded-[8px] size-full" style={{ border: '1px solid #e0e0e0' }}>
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

                  {/* Content — read-only display */}
                  <div className="relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start p-[24px] relative w-full gap-[24px]">
                      <div className="content-stretch flex items-end relative shrink-0 w-full" style={{ gap: "56px" }}>
                        {/* Appliance Type — read-only */}
                        <div className="flex-1 flex flex-col gap-[4px]">
                          <label
                            className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[#3e3d40] text-[14px]"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          >
                            Appliance type
                          </label>
                          <div
                            className="flex items-center h-[48px]"
                            style={{ borderBottom: '1px solid #b0b1b3' }}
                          >
                            <p
                              className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px]"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              Night Guard
                            </p>
                          </div>
                        </div>

                        {/* Type — read-only */}
                        <div className="flex-1 flex flex-col gap-[4px]">
                          <label
                            className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[#3e3d40] text-[14px]"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          >
                            Type
                          </label>
                          <div
                            className="flex items-center h-[48px]"
                            style={{ borderBottom: '1px solid #b0b1b3' }}
                          >
                            <p
                              className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px]"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              Invisalign aligners
                            </p>
                          </div>
                        </div>

                        {/* Arch to treat — interactive toggle */}
                        <div className="flex flex-col gap-[4px] shrink-0">
                          <label
                            className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[#3e3d40] text-[14px]"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          >
                            Arch to treat
                          </label>
                          <div className="flex gap-[16px] items-center h-[48px]">
                            {/* Upper arch — interactive toggle */}
                            <button
                              onClick={() => setApplianceArch(applianceArch === 'upper' ? null : 'upper')}
                              className="content-stretch flex gap-[8px] h-[36px] items-center px-[8px] py-[4px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                              type="button"
                            >
                              <div className="h-[28px] relative shrink-0 w-[36px]">
                                <div className={`absolute h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px] transition-colors ${applianceArch === 'upper' ? 'bg-[#a6e2f9]' : 'bg-[#e0e0e0]'}`} />
                                <div className={`absolute rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%] transition-all ${applianceArch === 'upper' ? 'bg-[#408dc1] left-[16px]' : 'bg-[#b0b1b3] left-0'}`} />
                              </div>
                              <p
                                className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px] text-nowrap"
                                style={{ fontVariationSettings: "'wdth' 100" }}
                              >
                                Upper arch
                              </p>
                            </button>
                            {/* Lower arch — interactive toggle */}
                            <button
                              onClick={() => setApplianceArch(applianceArch === 'lower' ? null : 'lower')}
                              className="content-stretch flex gap-[8px] h-[36px] items-center px-[8px] py-[4px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                              type="button"
                            >
                              <div className="h-[28px] relative shrink-0 w-[36px]">
                                <div className={`absolute h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px] transition-colors ${applianceArch === 'lower' ? 'bg-[#a6e2f9]' : 'bg-[#e0e0e0]'}`} />
                                <div className={`absolute rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%] transition-all ${applianceArch === 'lower' ? 'bg-[#408dc1] left-[16px]' : 'bg-[#b0b1b3] left-0'}`} />
                              </div>
                              <p
                                className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px] text-nowrap"
                                style={{ fontVariationSettings: "'wdth' 100" }}
                              >
                                Lower arch
                              </p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scanned Section — NIRI only */}
              <div className="bg-white relative rounded-[8px] size-full" data-name="Records + Notes">
                <div className="content-stretch flex flex-col items-start overflow-clip px-[28px] py-[24px] relative rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center relative shrink-0 w-full gap-[24px]">
                    <p
                      className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Scanned:
                    </p>
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                      <div className="bg-[#f2ebff] h-[32px] relative rounded-[32px] shrink-0" data-name="Badge">
                        <div aria-hidden="true" className="absolute border border-[#edc0f8] border-solid inset-0 pointer-events-none rounded-[32px]" />
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex gap-[8px] h-full isolate items-center justify-center px-[16px] py-[4px] relative">
                            <div className="relative shrink-0 size-[20px] z-[3]">
                              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                <path d="M7.5 13.475L4.025 10L2.8375 11.175L7.5 15.8375L17.5 5.8375L16.325 4.6625L7.5 13.475Z" fill="#3E3D40" />
                              </svg>
                            </div>
                            <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] text-[14px] text-[#3e3d40]">NIRI</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>

              {/* Attachments and Notes */}
              <div className="flex gap-[20px] w-full items-stretch">
                <div className="flex-1">
                  <Attachment />
                </div>
                <div className="flex-1">
                  <Notes />
                </div>
              </div>
            </>
          ) : scanType === 'dentures' ? (
            <>
              {/* Dentures Options — Read-only Summary */}
              <div className="bg-white relative rounded-[8px] size-full" style={{ border: '1px solid #e0e0e0' }}>
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
                            Dentures
                          </p>
                          <div className="content-stretch flex gap-[60px] items-center relative shrink-0">
                            {/* Upper denture toggle */}
                            <button
                              onClick={() => setDentureUpper(!dentureUpper)}
                              className="content-stretch flex gap-[8px] h-[36px] items-center px-[8px] py-[4px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                              type="button"
                            >
                              <div className="h-[28px] relative shrink-0 w-[36px]">
                                <div className={`absolute h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px] transition-colors ${dentureUpper ? 'bg-[#a6e2f9]' : 'bg-[#e0e0e0]'}`} />
                                <div className={`absolute rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%] transition-all ${dentureUpper ? 'bg-[#408dc1] left-[16px]' : 'bg-[#b0b1b3] left-0'}`} />
                              </div>
                              <p
                                className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px] text-nowrap"
                                style={{ fontVariationSettings: "'wdth' 100" }}
                              >
                                Upper denture
                              </p>
                            </button>
                            {/* Lower denture toggle */}
                            <button
                              onClick={() => setDentureLower(!dentureLower)}
                              className="content-stretch flex gap-[8px] h-[36px] items-center px-[8px] py-[4px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                              type="button"
                            >
                              <div className="h-[28px] relative shrink-0 w-[36px]">
                                <div className={`absolute h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px] transition-colors ${dentureLower ? 'bg-[#a6e2f9]' : 'bg-[#e0e0e0]'}`} />
                                <div className={`absolute rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%] transition-all ${dentureLower ? 'bg-[#408dc1] left-[16px]' : 'bg-[#b0b1b3] left-0'}`} />
                              </div>
                              <p
                                className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px] text-nowrap"
                                style={{ fontVariationSettings: "'wdth' 100" }}
                              >
                                Lower denture
                              </p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0"
                      style={{ pointerEvents: 'none' }}
                    />
                  </div>

                  {/* Content — read-only display */}
                  <div className="relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start p-[24px] relative w-full gap-[24px]">
                      {/* Row 1: Type / Stage */}
                      <div className="content-stretch flex items-end relative shrink-0 w-full" style={{ gap: "48px" }}>
                        <div className="flex-1 flex flex-col gap-[4px]">
                          <label
                            className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[#3e3d40] text-[14px]"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          >
                            Type
                          </label>
                          <div
                            className="flex items-center h-[48px]"
                            style={{ borderBottom: '1px solid #b0b1b3' }}
                          >
                            <p
                              className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px]"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              Partial denture/framework
                            </p>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-[4px]">
                          <label
                            className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[#3e3d40] text-[14px]"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          >
                            Stage
                          </label>
                          <div
                            className="flex items-center h-[48px]"
                            style={{ borderBottom: '1px solid #b0b1b3' }}
                          >
                            <p
                              className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px]"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              Custom tray
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Mould / Shade system */}
                      <div className="content-stretch flex items-end relative shrink-0 w-full" style={{ gap: "48px" }}>
                        <div className="flex-1 flex flex-col gap-[4px]">
                          <label
                            className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[#3e3d40] text-[14px]"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          >
                            Mould
                          </label>
                          <div
                            className="flex items-center h-[48px]"
                            style={{ borderBottom: '1px solid #b0b1b3' }}
                          >
                            <p
                              className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px]"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              VITA Lumin
                            </p>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-[4px]">
                          <label
                            className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[#3e3d40] text-[14px]"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          >
                            Shade system
                          </label>
                          <div
                            className="flex items-center h-[48px]"
                            style={{ borderBottom: '1px solid #b0b1b3' }}
                          >
                            <p
                              className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px]"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              VITA Classical
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Row 3: Teeth shade / Gingival */}
                      <div className="content-stretch flex items-end relative shrink-0 w-full" style={{ gap: "48px" }}>
                        <div className="flex-1 flex flex-col gap-[4px]">
                          <label
                            className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[#3e3d40] text-[14px]"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          >
                            Teeth shade
                          </label>
                          <div
                            className="flex items-center h-[48px]"
                            style={{ borderBottom: '1px solid #b0b1b3' }}
                          >
                            <p
                              className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px]"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              A2
                            </p>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-[4px]">
                          <label
                            className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] text-[#3e3d40] text-[14px]"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          >
                            Gingival
                          </label>
                          <div
                            className="flex items-center h-[48px]"
                            style={{ borderBottom: '1px solid #b0b1b3' }}
                          >
                            <p
                              className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px]"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              Square
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scanned Section */}
              <div className="bg-white relative rounded-[8px] size-full" data-name="Records + Notes">
                <div className="content-stretch flex flex-col items-start overflow-clip px-[28px] py-[24px] relative rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center relative shrink-0 w-full gap-[24px]">
                    <p
                      className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Scanned:
                    </p>
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                      {/* NIRI badge — purple */}
                      <div className="bg-[#f2ebff] h-[32px] relative rounded-[32px] shrink-0" data-name="Badge">
                        <div aria-hidden="true" className="absolute border border-[#edc0f8] border-solid inset-0 pointer-events-none rounded-[32px]" />
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex gap-[8px] h-full isolate items-center justify-center px-[16px] py-[4px] relative">
                            <div className="relative shrink-0 size-[20px] z-[3]">
                              <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-[23.71%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.2587">
                                  <path d={svgPaths.pa513e80} fill="#3E3D40" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] text-[14px] text-[#3e3d40]">NIRI</p>
                          </div>
                        </div>
                      </div>
                      {/* Reference scan badge — green */}
                      <div className="bg-[#edfee6] h-[32px] relative rounded-[32px] shrink-0" data-name="Badge">
                        <div aria-hidden="true" className="absolute border border-[#399927] border-solid inset-0 pointer-events-none rounded-[32px]" />
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex gap-[8px] h-full isolate items-center justify-center px-[16px] py-[4px] relative">
                            <div className="relative shrink-0 size-[20px] z-[3]">
                              <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-[23.71%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.2587">
                                  <path d={svgPaths.pa513e80} fill="#3E3D40" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] text-[14px] text-[#3e3d40]">Reference scan</p>
                          </div>
                        </div>
                      </div>
                      {/* Edentulous badge — green */}
                      <div className="bg-[#edfee6] h-[32px] relative rounded-[32px] shrink-0" data-name="Badge">
                        <div aria-hidden="true" className="absolute border border-[#399927] border-solid inset-0 pointer-events-none rounded-[32px]" />
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex gap-[8px] h-full isolate items-center justify-center px-[16px] py-[4px] relative">
                            <div className="relative shrink-0 size-[20px] z-[3]">
                              <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-[23.71%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.2587">
                                  <path d={svgPaths.pa513e80} fill="#3E3D40" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] text-[14px] text-[#3e3d40]">Edentulous</p>
                          </div>
                        </div>
                      </div>
                      {/* Copy dentures badge — green */}
                      <div className="bg-[#edfee6] h-[32px] relative rounded-[32px] shrink-0" data-name="Badge">
                        <div aria-hidden="true" className="absolute border border-[#399927] border-solid inset-0 pointer-events-none rounded-[32px]" />
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex gap-[8px] h-full isolate items-center justify-center px-[16px] py-[4px] relative">
                            <div className="relative shrink-0 size-[20px] z-[3]">
                              <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-[23.71%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.2587">
                                  <path d={svgPaths.pa513e80} fill="#3E3D40" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] text-[14px] text-[#3e3d40]">Copy dentures</p>
                          </div>
                        </div>
                      </div>
                      {/* Additional layer badge — green */}
                      <div className="bg-[#edfee6] h-[32px] relative rounded-[32px] shrink-0" data-name="Badge">
                        <div aria-hidden="true" className="absolute border border-[#399927] border-solid inset-0 pointer-events-none rounded-[32px]" />
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex gap-[8px] h-full isolate items-center justify-center px-[16px] py-[4px] relative">
                            <div className="relative shrink-0 size-[20px] z-[3]">
                              <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-[23.71%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.2587">
                                  <path d={svgPaths.pa513e80} fill="#3E3D40" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] text-[14px] text-[#3e3d40]">Additional layer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>

              {/* Attachments and Notes */}
              <div className="flex gap-[20px] w-full items-stretch">
                <div className="flex-1">
                  <Attachment />
                </div>
                <div className="flex-1">
                  <Notes />
                </div>
              </div>
            </>
          ) : scanType === 'invisalign' ? (
            <>
              {/* Invisalign Options — Read-only Summary */}
              <div className="bg-white relative rounded-[8px] size-full" style={{ border: '1px solid #e0e0e0' }}>
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
                            Invisalign / Vivera
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

                  {/* Read-only Fields */}
                  <div className="content-stretch flex flex-col gap-[24px] items-start px-[28px] py-[24px] relative w-full">
                    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                      {/* Type */}
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#696a6d] leading-[20px] mb-[4px]"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          Type
                        </p>
                        <p
                          className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px]"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          Invisalign
                        </p>
                      </div>
                      {/* Treatment stage */}
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#696a6d] leading-[20px] mb-[4px]"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          Treatment stage
                        </p>
                        <p
                          className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px]"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          Pre treatment
                        </p>
                      </div>
                      {/* Current Aligner */}
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#696a6d] leading-[20px] mb-[4px]"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          Current Aligner #
                        </p>
                        <p
                          className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px]"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          0
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scanned Section */}
              <div className="bg-white relative rounded-[8px] size-full" style={{ border: '1px solid #e0e0e0' }}>
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
                            Scanned
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

                  {/* Scanned Badges */}
                  <div className="content-stretch flex flex-wrap gap-[12px] items-center px-[28px] py-[20px] relative w-full">
                    {/* NIRI badge — purple */}
                    <div className="bg-[#f2ebff] h-[32px] relative rounded-[32px] shrink-0" data-name="Badge">
                      <div aria-hidden="true" className="absolute border border-[#edc0f8] border-solid inset-0 pointer-events-none rounded-[32px]" />
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[16px] py-[4px] relative size-full">
                          <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] text-[14px] text-[#3e3d40]">NIRI</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Attachments and Notes */}
              <div className="flex gap-[20px] w-full items-stretch">
                <div className="flex-1">
                  <Attachment />
                </div>
                <div className="flex-1">
                  <Notes />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Tooth Chart / Table View Container - uses built-in toggle from ToothSelectorLarge */}
              <div className="bg-white rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] flex flex-col gap-[0px] px-[24px] py-[0px]">
                <div className="flex w-full items-stretch relative">
                  {/* ToothSelectorLarge with built-in Chart/Table toggle */}
                  <div className={`${activeView === 'chart' ? 'w-[67%]' : 'w-full'} flex flex-col`}>
                    <ToothSelectorLarge
                      toothTreatments={toothTreatments}
                      toothSpecifications={toothSpecifications}
                      readOnly={true}
                      onViewChange={(view) => setActiveView(view)}
                    />

                    {/* Figma-styled treatment type badges — only show types that were selected */}
                    {uniqueTreatmentTypes.length > 0 && (
                      <div className="flex flex-wrap gap-[8px] items-center pb-[24px]">
                        {uniqueTreatmentTypes.map((treatmentType) => (
                          <div key={treatmentType} className="bg-white relative rounded-[32px] h-[36px] border border-[#d1d1d1]" data-name="Badge">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[16px] py-[4px] relative size-full">
                                <div
                                  className="relative rounded-[100px] shrink-0 size-[20px]"
                                  style={{ backgroundColor: TREATMENT_COLORS[treatmentType] || '#939598' }}
                                  data-name="Leading icon"
                                >
                                  <div className="overflow-clip relative rounded-[inherit] size-full" />
                                  <div
                                    aria-hidden="true"
                                    className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[100px]"
                                  />
                                </div>
                                <p
                                  className="font-['Roboto',sans-serif] leading-[28px] text-[#3e3d40] text-[18px] whitespace-nowrap"
                                  style={{ fontVariationSettings: "'wdth' 100" }}
                                >
                                  {treatmentType}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Panel: Only show when chart view is active */}
                  {activeView === 'chart' && (
                    <>
                  {/* Product Overlay */}
                  {isOverlayOpen && (
                    <div className="absolute right-[25%] w-[20%] h-[540px] z-20 transition-all duration-300">
                      <ProductOverlay
                        onMinimize={() => {
                          setIsOverlayOpen(false);
                        }}
                        onFavorite={() => setIsFavorited(!isFavorited)}
                        isFavorited={isFavorited}
                      />
                    </div>
                  )}

                  {/* Right Panel: Detail Panel or Detail Panel List */}
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
                          onDelete={() => {
                            setSelectedTeeth([]);
                            setSelectedTreatment('');
                            setShowDropdownPanel(false);
                          }}
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
                          onDelete={() => {
                            setSelectedTeeth([]);
                            setSelectedTreatment('');
                            setShowDropdownPanel(false);
                          }}
                        />
                      )}
                    </div>
                  ) : hasIndications ? (
                    <div className="flex-1 h-[540px]">
                      <DetailPanelList
                        toothTreatments={toothTreatments}
                        toothSpecifications={toothSpecifications}
                        onDeleteTooth={() => {}}
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
                          No indications have been defined yet
                        </p>
                      </div>
                    </div>
                  )}
                    </>
                  )}
                </div>
              </div>

              {/* Records + Notes - Scanned badges */}
              <RecordsNotes />

              {/* Notes and Attachments - Separate White Container */}
              <div className="bg-white rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] p-[24px] flex flex-col gap-[24px]">
                {/* Notes and Attachments - Horizontal Layout */}
                <div className="flex gap-[20px] w-full items-stretch">
                  <div className="flex-1">
                    <RxElementsRecordsNotesLayers2 />
                  </div>
                  <div className="flex-1">
                    <RxElementsRecordsNotesLayers1 />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Sticky Footer - Confirm Button */}
      <div className="shrink-0 bg-white shadow-[0px_-2px_12px_0px_rgba(0,0,0,0.13)] z-[10]">
        <div className="flex items-center justify-end px-[46px] py-[13px]">
          <div 
            className="relative"
            onMouseEnter={() => isConfirmDisabled && setShowConfirmTooltip(true)}
            onMouseLeave={() => setShowConfirmTooltip(false)}
          >
            {/* Tooltip */}
            {showConfirmTooltip && isConfirmDisabled && (
              <div 
                className="absolute bottom-full right-0 mb-[8px] bg-[#3e3d40] rounded-[8px] px-[16px] py-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.2)] whitespace-nowrap"
                style={{ zIndex: 20 }}
              >
                <p
                  className="font-['Roboto:Medium',sans-serif] font-medium text-[14px] text-white leading-[20px] mb-[4px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Required information is missing:
                </p>
                {getMissingInfoMessages().map((msg, idx) => (
                  <div key={idx} className="flex items-center gap-[8px]">
                    <div className="size-[4px] rounded-full bg-[#ff3355] shrink-0" />
                    <p
                      className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#d1d1d1] leading-[20px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {msg}
                    </p>
                  </div>
                ))}
                {/* Tooltip arrow */}
                <div className="absolute top-full right-[76px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#3e3d40]" />
              </div>
            )}
            <button
              onClick={() => !isConfirmDisabled && setIsSignaturePanelOpen(true)}
              disabled={isConfirmDisabled}
              className={`rounded-[4px] h-[54px] w-[168px] flex items-center justify-center relative z-[11] transition-opacity ${
                isConfirmDisabled
                  ? 'bg-[#e0e0e0] cursor-not-allowed opacity-60'
                  : 'bg-[#bfeafb] cursor-pointer hover:opacity-80'
              }`}
            >
              <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[4px] ${
                isConfirmDisabled ? 'border-[#b0b1b3]' : 'border-[#408dc1]'
              }`} />
              <span
                className={`font-['Roboto:Medium',sans-serif] font-medium text-[20px] leading-[32px] ${
                  isConfirmDisabled ? 'text-[#939598]' : 'text-[#0067ac]'
                }`}
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Confirm
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Signature Side Panel */}
      <SignaturePanel
        isOpen={isSignaturePanelOpen}
        onClose={() => setIsSignaturePanelOpen(false)}
        onConfirmSend={() => {
          setIsSignaturePanelOpen(false);
          console.log('Confirm & Send clicked');
        }}
      />
    </div>
  );
}