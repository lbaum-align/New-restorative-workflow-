import { useState } from "react";
import { Patient } from "../components/PatientList";
import Header from "../components/Header";
import { ChevronLeft } from "lucide-react";
import Sent from "../components/Sent";
import Attachment from "../components/Attachment";
import Notes from "../components/Notes";
import DenturesField from "../components/DenturesField";
import ProcedureCards from "../components/ProcedureCards";
import Procedure from "../components/Procedure";
import DueDate from "../components/DueDate";
import Rx from "../components/Rx";

interface DenturesProps {
  patient: Patient;
  scanType: string;
  onBack: () => void;
  onNext: () => void;
  onProcedureChange?: (procedure: string) => void;
  onNavigateToMultiLayer?: () => void;
  onProcedureEdit?: () => void;
  onNavigateToSummary?: () => void;
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

export default function Dentures({
  patient,
  scanType,
  onBack,
  onNext,
  onProcedureChange,
  onNavigateToMultiLayer,
  onProcedureEdit,
  onNavigateToSummary,
}: DenturesProps) {
  const [activeSteps, setActiveSteps] = useState({
    rx: true,
    stepIcon: false,
    scan: false,
    search: false,
    email: false,
  });

  const [currentProcedure, setCurrentProcedure] = useState("Dentures");
  const [isProcedureExpanded, setIsProcedureExpanded] = useState(false);

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

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-[46px] pt-[52px] pb-[80px] overflow-y-auto">
        <div className="flex flex-col gap-[24px] w-full pb-[40px]">
          {/* Back Button + Procedure Row */}
          <div className="flex gap-[16px] w-full items-stretch -mt-[20px]">
            {/* Back Button + Procedure Container */}
            <div className="flex gap-[16px] items-stretch h-[80px]">
              {/* Back Button */}
              

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
            <div className="content-stretch flex gap-[16px] items-stretch relative shrink-0 flex-1 h-[80px]">
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

          {/* Components Container */}
          <div className="flex gap-[20px] w-full items-start">
            <div className="flex-1">
              <DenturesField />
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