import { useState } from "react";
import { Patient } from "../components/PatientList";
import Header from "../components/Header";
import { ChevronLeft } from "lucide-react";
import Sent from "../components/Sent";
import Attachment from "../components/Attachment";
import Notes from "../components/Notes";
import ImplantPlanningField from "../components/ImplantPlanningField";
import ProcedureCards from "../components/ProcedureCards";
import Procedure from "../components/Procedure";
import DueDate from "../components/DueDate";
import upperArchScan from "figma:asset/0739b756c08b73712f33f02a9c7bb00b11f87b89.png";

interface ImplantPlanningProps {
  patient: Patient;
  scanType: string;
  onBack: () => void;
  onNext: () => void;
  onProcedureChange?: (procedure: string) => void;
  onNavigateToMultiLayer?: () => void;
  onProcedureEdit?: () => void;
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

export default function ImplantPlanning({
  patient,
  scanType,
  onBack,
  onNext,
  onProcedureChange,
  onNavigateToMultiLayer,
  onProcedureEdit,
}: ImplantPlanningProps) {
  const [activeSteps, setActiveSteps] = useState({
    rx: true,
    stepIcon: false,
    scan: false,
    search: false,
    email: false,
  });

  const [currentProcedure, setCurrentProcedure] = useState("Implant planning");
  const [isProcedureExpanded, setIsProcedureExpanded] = useState(false);

  const [activeTab, setActiveTab] = useState<"pre-treatment" | "treatment" | "post-treatment">("pre-treatment");

  const handleStepToggle = (step: string) => {
    if (step === 'stepIcon' && onNavigateToMultiLayer) {
      onNavigateToMultiLayer();
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

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-[250]">
        <Header
          activeSteps={activeSteps}
          onStepToggle={handleStepToggle}
          onNavigateToScan={onNavigateToMultiLayer}
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-[46px] pt-[52px] pb-[80px] overflow-y-auto">
        <div className="flex flex-col gap-[24px] w-full pb-[40px]">
          {/* Back Button + Procedure Row */}
          <div className="flex gap-[16px] w-full items-stretch -mt-[20px]">
            {/* Back Button + Procedure Container */}
            <div className="flex gap-[16px] items-stretch h-[80px]">
              {/* Back Button */}
              <button
                onClick={onBack}
                className="fixed left-[40px] top-1/2 -translate-y-1/2 z-50 flex items-center justify-center cursor-pointer bg-[#009ace] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_2px_8px_0px_rgba(0,0,0,0.15)] hover:shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] transition-all p-[8px] w-[64px] h-[64px]"
              >
                <ChevronLeft className="w-[32px] h-[32px] text-white" />
              </button>

              {/* Procedure Button */}
              <div className="h-[80px]">
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
            </div>
              
            {/* Sent and Due Date Container */}
            <div className="content-stretch flex gap-[16px] items-stretch relative shrink-0 flex-1 h-full">
              <div className="flex-1 h-full">
                <Sent />
              </div>
              <div className="flex-1 h-full">
                <DueDate />
              </div>
            </div>
          </div>

          {/* Procedure Cards - Conditionally Rendered */}
          {isProcedureExpanded && (
            <ProcedureCards
              currentProcedure={currentProcedure}
              onSelect={(proc) => {
                setCurrentProcedure(proc);
                if (onProcedureChange) onProcedureChange(proc);
                setTimeout(() => {
                  setIsProcedureExpanded(false);
                }, 600);
              }}
            />
          )}

          {/* Tab Navigation */}
          <div className="bg-white rounded-[8px] border border-[#e0e0e0] overflow-hidden">
            <div className="flex border-b border-[#e0e0e0]">
              <button
                onClick={() => setActiveTab("pre-treatment")}
                className={`flex-1 px-[24px] py-[16px] font-['Roboto:Medium',sans-serif] font-medium text-[18px] leading-[28px] transition-all ${
                  activeTab === "pre-treatment"
                    ? "bg-[#C0F1FE] text-[#009ace] border-b-2 border-[#009ace]"
                    : "bg-white text-[#696a6d] hover:bg-gray-50"
                }`}
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Pre-treatment
              </button>
              <button
                onClick={() => setActiveTab("treatment")}
                className={`flex-1 px-[24px] py-[16px] font-['Roboto:Medium',sans-serif] font-medium text-[18px] leading-[28px] transition-all ${
                  activeTab === "treatment"
                    ? "bg-[#C0F1FE] text-[#009ace] border-b-2 border-[#009ace]"
                    : "bg-white text-[#696a6d] hover:bg-gray-50"
                }`}
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Treatment
              </button>
              <button
                onClick={() => setActiveTab("post-treatment")}
                className={`flex-1 px-[24px] py-[16px] font-['Roboto:Medium',sans-serif] font-medium text-[18px] leading-[28px] transition-all ${
                  activeTab === "post-treatment"
                    ? "bg-[#C0F1FE] text-[#009ace] border-b-2 border-[#009ace]"
                    : "bg-white text-[#696a6d] hover:bg-gray-50"
                }`}
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Post-treatment
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-[24px]">
              {activeTab === "pre-treatment" && (
                <div className="flex flex-col gap-[24px]">
                  {/* Upper Arch Scan Section */}
                  <div className="flex flex-col gap-[16px]">
                    <h3 className="font-['Roboto:Medium',sans-serif] font-medium text-[20px] leading-[28px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Upper Arch Scan
                    </h3>
                    
                    {/* Canvas with 3D Model */}
                    <div className="bg-[#f5f5f5] rounded-[8px] border border-[#e0e0e0] p-[40px] flex items-center justify-center" style={{ minHeight: "500px" }}>
                      <div className="relative max-w-[800px] w-full flex items-center justify-center">
                        <img 
                          src={upperArchScan} 
                          alt="Upper arch scan" 
                          className="w-full h-auto object-contain"
                          style={{ maxHeight: "500px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "treatment" && (
                <div className="flex flex-col gap-[24px]">
                  <p className="font-['Roboto:Regular',sans-serif] text-[18px] leading-[28px] text-[#696a6d]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Treatment planning content will be displayed here.
                  </p>
                </div>
              )}

              {activeTab === "post-treatment" && (
                <div className="flex flex-col gap-[24px]">
                  <p className="font-['Roboto:Regular',sans-serif] text-[18px] leading-[28px] text-[#696a6d]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Post-treatment content will be displayed here.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Implant Planning Field */}
          <div className="flex gap-[20px] w-full items-start">
            <div className="flex-1">
              <ImplantPlanningField />
            </div>
          </div>

          {/* Attachments and Notes Container */}
          <div className="flex gap-[20px] w-full items-stretch">
            <div className="flex-1">
              <Attachment />
            </div>
            <div className="flex-1 h-full">
              <Notes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}