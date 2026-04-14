import { useState } from "react";
import svgPaths from "../imports/svg-k51970xeub";
import Header from "./Header";
import { Patient } from "./PatientList";
import PatientSearchDialog from "./PatientSearchDialog";
import DatePicker from "./DatePicker";

interface PatientDetailsFormProps {
  onBack: () => void;
  onPatients: () => void;
  onCreatePatient: (patient: Patient) => void;
}

export default function PatientDetailsForm({ onBack, onPatients, onCreatePatient }: PatientDetailsFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState<"male" | "female" | "">("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [chartNumber, setChartNumber] = useState("");
  const [isPatientSearchOpen, setIsPatientSearchOpen] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const isCreateEnabled = firstName.trim() !== "" && lastName.trim() !== "";

  const handleCreate = () => {
    const newPatient: Patient = {
      id: Date.now().toString(),
      firstName,
      lastName,
      gender,
      dateOfBirth,
      chartNumber,
    };
    onCreatePatient(newPatient);
  };

  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setGender("");
    setDateOfBirth("");
    setChartNumber("");
  };

  return (
    <div
      style={{ fontFamily: "'Roboto', sans-serif" }}
      className="bg-[#f5f5f5] flex flex-col min-h-screen"
      // Use min-h-screen so the container grows with content but isn't overflow-hidden
      // which was previously blocking pointer events
    >
      {/* Fixed-height header */}
      <div className="shrink-0">
        <Header 
          activeSteps={{ rx: true }} 
          onNavigateToScan={() => {
            // When user clicks the step icon, create patient and proceed to scanning
            if (isCreateEnabled) {
              handleCreate();
            }
          }}
        />
      </div>

      {/* Scrollable content area */}
      <div className="flex-1 overflow-auto px-[56px] pt-[40px] pb-[40px]">
        {/* Title */}
        <p
          className="font-medium leading-[40px] text-[32px] text-[rgba(0,0,0,0.93)] mb-[20px]"
          style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
        >
          Patient details
        </p>

        {/* Form Card */}
        <div
          className="bg-white rounded-[8px] w-full"
          style={{ border: "1px solid #e0e0e0" }}
        >
          {/* Inner white container with specific padding */}
          <div className="bg-white rounded-[8px] py-[40px] px-[40px] relative">

            {/* Search + Clear buttons — absolute top-right of the card */}
            <div className="absolute flex gap-[20px] items-center right-[40px] top-[20px]">
              {/* Search Button */}
              <button
                type="button"
                onClick={() => setIsPatientSearchOpen(true)}
                className="flex items-center justify-center rounded-[4px] size-[48px] cursor-pointer"
                style={{ backgroundColor: "#bfeafb", border: "1px solid #408dc1" }}
              >
                <div className="shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p32470e70} fill="#0067AC" />
                  </svg>
                </div>
              </button>

              {/* Clear Button */}
              <button
                type="button"
                onClick={handleClear}
                className="flex h-[48px] items-center justify-center px-[20px] rounded-[4px] cursor-pointer"
                style={{ backgroundColor: "#f9f9f9", border: "1px solid #939598" }}
              >
                <span
                  className="font-medium leading-[28px] text-[#3e3d40] text-[18px] text-center tracking-[0.2px] whitespace-nowrap"
                  style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                >
                  Clear
                </span>
              </button>
            </div>

            {/* ── Row 1: First name + Last name ── */}
            <div className="flex gap-[40px] items-center w-full mb-[40px]">
              {/* First name */}
              <div className="flex-1 min-w-0" style={{ borderBottom: "1px solid #b0b1b3" }}>
                <div className="flex gap-[4px] items-center h-[52px]">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className="flex-1 min-w-0 bg-transparent outline-none text-[#3e3d40] text-[18px] leading-[28px] placeholder:text-[#3e3d40]"
                    style={{
                      border: "none",
                      padding: 0,
                      fontFamily: "'Roboto', sans-serif",
                      fontVariationSettings: "'wdth' 100",
                    }}
                  />
                  {!firstName && (
                    <span className="shrink-0 text-[#cb2f36] text-[14px] leading-[24px]">*</span>
                  )}
                </div>
              </div>

              {/* Last name */}
              <div className="flex-1 min-w-0" style={{ borderBottom: "1px solid #b0b1b3" }}>
                <div className="flex gap-[4px] items-center h-[52px]">
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    className="flex-1 min-w-0 bg-transparent outline-none text-[#3e3d40] text-[18px] leading-[28px] placeholder:text-[#3e3d40]"
                    style={{
                      border: "none",
                      padding: 0,
                      fontFamily: "'Roboto', sans-serif",
                      fontVariationSettings: "'wdth' 100",
                    }}
                  />
                  {!lastName && (
                    <span className="shrink-0 text-[#cb2f36] text-[14px] leading-[24px]">*</span>
                  )}
                </div>
              </div>
            </div>

            {/* ── Row 2: Gender + Date of birth ── */}
            <div className="flex gap-[40px] items-center w-full mb-[40px]">
              {/* Gender at birth */}
              <div className="flex-1 min-w-0" style={{ borderBottom: "1px solid #b0b1b3" }}>
                <div className="flex items-center justify-between h-[52px]">
                  <span
                    className="text-[#3e3d40] text-[18px] leading-[28px]"
                    style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                  >
                    Gender at birth
                  </span>
                  <div className="flex gap-[24px] items-center pr-[30px]">
                    {/* Male */}
                    <label
                      className="flex gap-[6px] items-center cursor-pointer"
                      onClick={() => setGender("male")}
                    >
                      <div
                        className="flex items-center justify-center rounded-full size-[20px]"
                        style={{
                          border: `1px solid ${gender === "male" ? "#0067AC" : "#939598"}`,
                          backgroundColor: "white",
                        }}
                      >
                        {gender === "male" && (
                          <div className="size-[10px] rounded-full bg-[#0067AC]" />
                        )}
                      </div>
                      <span
                        className="text-[#3e3d40] text-[18px] leading-[28px]"
                        style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                      >
                        Male
                      </span>
                    </label>

                    {/* Female */}
                    <label
                      className="flex gap-[6px] items-center cursor-pointer"
                      onClick={() => setGender("female")}
                    >
                      <div
                        className="flex items-center justify-center rounded-full size-[20px]"
                        style={{
                          border: `1px solid ${gender === "female" ? "#0067AC" : "#939598"}`,
                          backgroundColor: "white",
                        }}
                      >
                        {gender === "female" && (
                          <div className="size-[10px] rounded-full bg-[#0067AC]" />
                        )}
                      </div>
                      <span
                        className="text-[#3e3d40] text-[18px] leading-[28px]"
                        style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                      >
                        Female
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Date of birth */}
              <div className="flex-1 min-w-0 relative" style={{ borderBottom: "1px solid #b0b1b3" }}>
                <div
                  className="flex items-center justify-between h-[52px] cursor-pointer"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                >
                  <span
                    className="text-[#3e3d40] text-[18px] leading-[28px]"
                    style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                  >
                    {dateOfBirth
                      ? new Date(dateOfBirth + "T00:00:00").toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })
                      : "Date of birth"}
                  </span>

                  {/* Calendar icon button */}
                  <div className="relative shrink-0">
                    <button
                      type="button"
                      className="size-[32px] cursor-pointer bg-transparent"
                      style={{ border: "none", padding: 0 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDatePicker(!showDatePicker);
                      }}
                    >
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                        <path d={svgPaths.p27287472} fill="#80D6F7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* DatePicker dropdown */}
                {showDatePicker && (
                  <>
                    {/* Backdrop to close on outside click */}
                    <div
                      className="fixed inset-0 z-[99]"
                      onClick={() => setShowDatePicker(false)}
                    />
                    <div className="absolute top-[56px] right-0 z-[100] shadow-lg">
                      <DatePicker
                        selectedDate={dateOfBirth ? new Date(dateOfBirth + "T00:00:00") : undefined}
                        onDateChange={(date) => {
                          if (date) {
                            const year = date.getFullYear();
                            const month = String(date.getMonth() + 1).padStart(2, "0");
                            const day = String(date.getDate()).padStart(2, "0");
                            setDateOfBirth(`${year}-${month}-${day}`);
                          } else {
                            setDateOfBirth("");
                          }
                          setShowDatePicker(false);
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* ── Row 3: Chart number (half width) ── */}
            <div className="flex gap-[40px] items-center w-full mb-[40px]">
              <div
                className="min-w-0"
                style={{ borderBottom: "1px solid #b0b1b3", width: "calc(50% - 20px)" }}
              >
                <div className="flex gap-[4px] items-center h-[52px]">
                  <input
                    type="text"
                    value={chartNumber}
                    onChange={(e) => setChartNumber(e.target.value)}
                    placeholder="Chart number"
                    className="flex-1 min-w-0 bg-transparent outline-none text-[#3e3d40] text-[18px] leading-[28px] placeholder:text-[#3e3d40]"
                    style={{
                      border: "none",
                      padding: 0,
                      fontFamily: "'Roboto', sans-serif",
                      fontVariationSettings: "'wdth' 100",
                    }}
                  />
                </div>
              </div>
              {/* Empty right half to match layout */}
              <div className="flex-1" />
            </div>

            {/* ── Create button ── */}
            <div className="flex items-start justify-end w-full">
              <button
                type="button"
                onClick={handleCreate}
                disabled={!isCreateEnabled}
                className="flex h-[64px] items-center justify-center px-[24px] rounded-[4px] transition-colors"
                style={{
                  minWidth: 120,
                  backgroundColor: isCreateEnabled ? "#bfeafb" : "#f0f0f0",
                  border: `1px solid ${isCreateEnabled ? "#408dc1" : "#d1d1d1"}`,
                  cursor: isCreateEnabled ? "pointer" : "not-allowed",
                }}
              >
                <span
                  className="font-medium leading-[32px] text-[20px] text-center whitespace-nowrap"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontVariationSettings: "'wdth' 100",
                    color: isCreateEnabled ? "#0067ac" : "#b0b1b3",
                  }}
                >
                  Next
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Search Dialog */}
      <PatientSearchDialog
        isOpen={isPatientSearchOpen}
        onClose={() => setIsPatientSearchOpen(false)}
        onSelectPatient={(patient) => {
          // Map the patient search data to our form fields
          const nameParts = patient.fullName.split(' ');
          setFirstName(nameParts[0] || '');
          setLastName(nameParts.slice(1).join(' ') || '');
          setGender(patient.gender.toLowerCase() as "male" | "female");
          setDateOfBirth(patient.dateOfBirth);
          setChartNumber(patient.chartNumber);
        }}
      />
    </div>
  );
}