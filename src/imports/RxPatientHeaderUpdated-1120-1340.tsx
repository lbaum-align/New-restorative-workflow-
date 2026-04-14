import svgPaths from "./svg-lr6apg6kcw";
import { useState } from "react";
import PatientEditOverlay from "../components/PatientEditOverlay";

interface RxPatientHeaderProps {
  patient: {
    id: string;
    firstName: string;
    lastName: string;
    patientId?: string;
    dateOfBirth: string;
    gender: string;
  };
  onBack?: () => void;
  doctorName?: string;
  doctorId?: string;
  calculateAge: (dateOfBirth: string) => string;
  formatDate: (dateOfBirth: string) => string;
}

// ── Invisible chevron placeholder (matches Figma — empty SVG) ──────────────
function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[52px]" data-name="Chevron left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
        <g id="Chevron left" />
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <ChevronLeft />
    </div>
  );
}

// ── Account avatar circle ──────────────────────────────────────────────────
function Account() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Account">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Account">
          <rect fill="#F0F0F0" height="80" rx="40" width="80" />
          <g id="Vector">
            <path d={svgPaths.p3d412d80} fill="#939598" />
            <path d={svgPaths.p3de62400} fill="#939598" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// ── Patient name + chart number ────────────────────────────────────────────
function Frame1({ firstName, lastName, patientId }: { firstName: string; lastName: string; patientId?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[189px]">
      {/* Name */}
      <p
        className="font-medium leading-[40px] text-[32px] text-black whitespace-pre-wrap"
        style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
      >
        {firstName} {lastName}
      </p>
      {/* Chart / patient ID */}
      <p
        className="font-normal leading-[28px] text-[18px] text-[#696a6d]"
        style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
      >
        {patientId || "14129123"}
      </p>
    </div>
  );
}

// ── Avatar + name block ────────────────────────────────────────────────────
function Frame7({ patient }: { patient: RxPatientHeaderProps["patient"] }) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Account />
      <Frame1
        firstName={patient.firstName}
        lastName={patient.lastName}
        patientId={patient.patientId}
      />
    </div>
  );
}

function Frame8({ patient }: { patient: RxPatientHeaderProps["patient"] }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame6 />
      <Frame7 patient={patient} />
    </div>
  );
}

// ── Single info field (label + value stacked) ──────────────────────────────
function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <p
        className="relative shrink-0 text-[#696a6d]"
        style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </p>
      <p
        className="relative shrink-0 text-black"
        style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
      >
        {value}
      </p>
    </div>
  );
}

// ── Age / Gender / Last scan row ───────────────────────────────────────────
function Frame5({ age, gender, lastScan }: { age: string; gender: string; lastScan: string }) {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[67px] items-center leading-[28px] relative shrink-0 text-[18px]">
      <InfoField label="Age" value={age} />
      <InfoField label="Gender at birth" value={gender} />
      <InfoField label="Last scan" value={lastScan} />
    </div>
  );
}

// ── Left cluster: avatar block + info fields ───────────────────────────────
function Frame9({ patient, age, gender, lastScan }: { patient: RxPatientHeaderProps["patient"]; age: string; gender: string; lastScan: string }) {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
      <Frame8 patient={patient} />
      <Frame5 age={age} gender={gender} lastScan={lastScan} />
    </div>
  );
}

// ── "Treated by" block ─────────────────────────────────────────────────────
function Frame11({ doctorName, doctorId }: { doctorName?: string; doctorId?: string }) {
  const label = doctorName
    ? `${doctorName}${doctorId ? ` | ${doctorId}` : ""}`
    : `Doctor Name | ${doctorId || "12367854"}`;

  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[200px]">
      <p
        className="font-normal leading-[28px] min-w-full relative shrink-0 text-[#696a6d] text-[18px] w-[min-content] whitespace-pre-wrap"
        style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
      >
        Treated by:
      </p>
      <p
        className="font-normal leading-[28px] relative shrink-0 text-[18px] text-black"
        style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </p>
    </div>
  );
}

// ── Vertical divider + "Treated by" ───────────────────────────────────────
function Frame12({ doctorName, doctorId }: { doctorName?: string; doctorId?: string }) {
  return (
    <div className="content-stretch flex gap-[60px] h-full items-center relative shrink-0">
      {/* Vertical divider line */}
      <div className="self-stretch w-[1px] bg-[#E0E0E0] shrink-0" />
      <Frame11 doctorName={doctorName} doctorId={doctorId} />
    </div>
  );
}

// ── Full left content row ──────────────────────────────────────────────────
function Frame13({ patient, age, gender, lastScan, doctorName, doctorId }: {
  patient: RxPatientHeaderProps["patient"];
  age: string;
  gender: string;
  lastScan: string;
  doctorName?: string;
  doctorId?: string;
}) {
  return (
    <div className="content-stretch flex gap-[60px] h-full items-center relative shrink-0">
      <Frame9 patient={patient} age={age} gender={gender} lastScan={lastScan} />
      <Frame12 doctorName={doctorName} doctorId={doctorId} />
    </div>
  );
}

// ── Edit / pencil button ───────────────────────────────────────────────────
function Button({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex items-center justify-center px-[24px] py-[22px] relative rounded-[4px] shrink-0 size-[64px] hover:bg-[#F0F0F0] transition-colors cursor-pointer"
      data-name="Button"
    >
      <div className="relative shrink-0 size-[32px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Icon">
            <g id="Vector">
              <path d="M30 26H2V28H30V26Z" fill="#0067AC" />
              <path d={svgPaths.p3bc04400} fill="#0067AC" />
            </g>
          </g>
        </svg>
      </div>
    </button>
  );
}

// ── Main export ────────────────────────────────────────────────────────────
export default function RxPatientHeaderUpdated({
  patient,
  onBack,
  doctorName,
  doctorId,
  calculateAge,
  formatDate,
}: RxPatientHeaderProps) {
  const [isEditOverlayOpen, setIsEditOverlayOpen] = useState(false);

  const age = calculateAge(patient.dateOfBirth);
  const gender = patient.gender
    ? patient.gender.charAt(0).toUpperCase() + patient.gender.slice(1)
    : "—";
  const lastScan = formatDate(patient.dateOfBirth);

  return (
    <>
      <div
        className="bg-white content-stretch flex items-center justify-between pl-[4px] pr-[40px] py-[24px] relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_2px_8px_0px_rgba(0,0,0,0.15)] w-full shrink-0"
        data-name="Rx / Patient header - updated"
      >
        <div className="flex flex-row items-center self-stretch">
          <Frame13
            patient={patient}
            age={age}
            gender={gender}
            lastScan={lastScan}
            doctorName={doctorName}
            doctorId={doctorId}
          />
        </div>
        <Button onClick={() => setIsEditOverlayOpen(true)} />
      </div>

      <PatientEditOverlay
        isOpen={isEditOverlayOpen}
        onClose={() => setIsEditOverlayOpen(false)}
        patient={patient}
        calculateAge={calculateAge}
        formatDate={formatDate}
        doctorName={doctorName}
        doctorId={doctorId}
      />
    </>
  );
}