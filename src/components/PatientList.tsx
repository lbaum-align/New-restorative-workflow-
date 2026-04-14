import { useState, useRef } from "react";
import RxHeaderPatientProfile from "./RxHeaderPatientProfile";
import svgPaths from "../imports/svg-omx21ki433";
import addIconPaths from "../imports/svg-2xogra27i";

interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  chartNumber: string;
}

interface PatientListProps {
  patients?: Patient[];
  onPatientSelect?: (patient: Patient) => void;
  searchQuery?: string;
}

export default function PatientList({
  patients = [],
  onPatientSelect,
  searchQuery = "",
}: PatientListProps) {
  const [selectedPatientId, setSelectedPatientId] = useState<
    string | null
  >(null);
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handlePatientClick = (patient: Patient) => {
    setSelectedPatientId(patient.id);
    onPatientSelect?.(patient);
  };

  const toggleCreateForm = () => {
    setIsCreateFormOpen(!isCreateFormOpen);
  };

  // Filter patients based on search query
  const filteredPatients = patients.filter((patient) => {
    const fullName =
      `${patient.firstName} ${patient.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  // Show "no results" if search query exists but no matches
  const showNoResults =
    searchQuery && filteredPatients.length === 0;

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

  // Calendar icon click handler
  const handleCalendarClick = () => {
    dateInputRef.current?.click();
  };

  // Calendar icon component
  const CalendarIcon = ({
    onClick,
  }: {
    onClick?: () => void;
  }) => {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick?.();
        }}
        className="relative shrink-0 size-[32px] cursor-pointer bg-transparent border-none"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p27287472} fill="#3E3D40" />
        </svg>
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {showNoResults ? (
        <div className="flex flex-col items-start w-full bg-white rounded-[4px] shadow-sm">
          {/* No Patient Found Message */}
          <div className="flex flex-col items-center justify-center px-[40px] py-[40px] w-full">
            <div className="flex flex-col items-center gap-[16px]">
              <svg
                className="w-[48px] h-[48px] text-[#b0b1b3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 13l8 8"
                />
              </svg>
              <div className="flex flex-col items-center gap-[4px]">
                <p
                  className="font-['Roboto:Medium',sans-serif] font-medium leading-[28px] text-[18px] text-[rgba(0,0,0,0.87)]"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                  }}
                >
                  No patients found
                </p>
                <p
                  className="font-['Roboto:Regular',sans-serif] leading-[20px] text-[14px] text-[#6e6e6e]"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                  }}
                >
                  No results for "{searchQuery}". Add a new
                  patient below.
                </p>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="w-full border-t border-[#e0e0e0] px-[40px] py-[28px]">
            <div className="flex flex-col gap-[40px] w-full">
              {/* First and Last Name Row */}
              <div className="flex gap-[40px] w-full">
                {/* First Name */}
                <div className="flex-1">
                  <div className="flex gap-[8px] h-[52px] items-center relative w-full">
                    <div
                      aria-hidden="true"
                      className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                    />
                    <div className="flex-1 flex flex-col h-full items-start justify-center">
                      <input
                        type="text"
                        placeholder="First name"
                        className="font-['Roboto:Regular',sans-serif] leading-[28px] text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full"
                        style={{
                          fontVariationSettings: "'wdth' 100",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Last Name */}
                <div className="flex-1">
                  <div className="flex gap-[8px] h-[52px] items-center relative w-full">
                    <div
                      aria-hidden="true"
                      className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                    />
                    <div className="flex-1 flex flex-col h-full items-start justify-center">
                      <input
                        type="text"
                        placeholder="Last name"
                        className="font-['Roboto:Regular',sans-serif] leading-[28px] text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full"
                        style={{
                          fontVariationSettings: "'wdth' 100",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Gender and Date of Birth Row */}
              <div className="flex gap-[40px] w-full">
                {/* Gender Dropdown */}
                <div className="flex-1">
                  <div className="flex gap-[8px] h-[52px] items-center relative w-full">
                    <div
                      aria-hidden="true"
                      className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                    />
                    <div className="flex-1 flex flex-col h-full items-start justify-center">
                      <select
                        className="font-['Roboto:Regular',sans-serif] leading-[28px] text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full appearance-none cursor-pointer"
                        style={{
                          fontVariationSettings: "'wdth' 100",
                        }}
                      >
                        <option value="">
                          Gender at birth
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="relative shrink-0 size-[32px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                      >
                        <path
                          d="M24 12L16 22L8 12H24Z"
                          fill="#80D6F7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="flex-1">
                  <div className="flex gap-[8px] h-[52px] items-center relative w-full">
                    <div
                      aria-hidden="true"
                      className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                    />
                    <div className="flex-1 flex flex-col h-full items-start justify-center">
                      <input
                        type="date"
                        placeholder="Date of birth"
                        className="font-['Roboto:Regular',sans-serif] leading-[28px] text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full cursor-pointer"
                        style={{
                          fontVariationSettings: "'wdth' 100",
                        }}
                        ref={dateInputRef}
                      />
                    </div>
                    <CalendarIcon onClick={handleCalendarClick} />
                  </div>
                </div>
              </div>

              {/* Chart Number Row */}
              <div className="flex flex-col w-full max-w-full">
                <div className="flex gap-[8px] h-[52px] items-center relative w-full">
                  <div
                    aria-hidden="true"
                    className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                  />
                  <div className="flex-1 flex flex-col h-full items-start justify-center">
                    <input
                      type="text"
                      placeholder="Chart number"
                      className="font-['Roboto:Regular',sans-serif] leading-[28px] text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full"
                      style={{
                        fontVariationSettings: "'wdth' 100",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Create Button - Left aligned */}
              <div className="flex w-full justify-end">
                <button
                  type="button"
                  className="bg-[#bfeafb] relative rounded-[4px] cursor-pointer hover:opacity-90"
                  data-name="Button"
                >
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]"
                  />

                  <div className="flex items-center px-[24px] py-[22px]">
                    <span
                      className="font-['Roboto:Medium',sans-serif] font-medium text-[#0067ac] text-[20px] whitespace-nowrap"
                      style={{
                        fontVariationSettings: "'wdth' 100",
                      }}
                    >
                      Create
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Patient Cards List */}
          <div className="flex flex-col gap-[12px] w-full">
            {/* Create New Patient Button */}
            <button
              className="bg-white rounded-[4px] hover:bg-[#f9f9f9] transition-colors cursor-pointer w-full"
              onClick={toggleCreateForm}
            >
              <div className="content-stretch flex items-center justify-between px-[40px] py-[28px] relative w-full bg-[#EEEEEE] hover:bg-[#e0e0e0] rounded-[4px] border border-dashed border-[#b0b1b3] group-hover:border-[#5FCEFA] transition-colors">
                <div className="content-stretch flex gap-[24px] items-center relative">
                  {/* Add Icon */}
                  <div className="relative shrink-0 size-[48px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                      <path d={addIconPaths.p4364880} fill="#3E3D40" />
                    </svg>
                  </div>
                  
                  {/* Text */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                      <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
                        <p 
                          className="[grid-area:1_/_1] font-['Roboto:Regular',sans-serif] font-normal leading-[32px] ml-0 mt-0 relative text-[24px] text-black"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          Create new patient
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Accordion Form */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isCreateFormOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-white rounded-[4px] shadow-sm">
                <div className="w-full px-[40px] py-[28px]">
                  <div className="flex flex-col gap-[40px] w-full">
                    {/* First and Last Name Row */}
                    <div className="flex gap-[40px] w-full">
                      {/* First Name */}
                      <div className="flex-1">
                        <div className="flex gap-[8px] h-[52px] items-center relative w-full">
                          <div
                            aria-hidden="true"
                            className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                          />
                          <div className="flex-1 flex flex-col h-full items-start justify-center">
                            <div className="flex gap-[4px] items-center relative w-full">
                              <input
                                type="text"
                                placeholder="First name"
                                className="font-['Roboto:Regular',sans-serif] leading-[28px] text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full"
                                style={{
                                  fontVariationSettings: "'wdth' 100",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="flex-1">
                        <div className="flex gap-[8px] h-[52px] items-center relative w-full">
                          <div
                            aria-hidden="true"
                            className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                          />
                          <div className="flex-1 flex flex-col h-full items-start justify-center">
                            <div className="flex gap-[4px] items-center relative w-full">
                              <input
                                type="text"
                                placeholder="Last name"
                                className="font-['Roboto:Regular',sans-serif] leading-[28px] text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full"
                                style={{
                                  fontVariationSettings: "'wdth' 100",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Gender and Date of Birth Row */}
                    <div className="flex gap-[40px] w-full">
                      {/* Gender Dropdown */}
                      <div className="flex-1">
                        <div className="flex gap-[8px] h-[52px] items-center relative w-full">
                          <div
                            aria-hidden="true"
                            className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                          />
                          <div className="flex-1 flex flex-col h-full items-start justify-center">
                            <div className="flex gap-[4px] items-center relative w-full">
                              <select
                                className="font-['Roboto:Regular',sans-serif] leading-[28px] text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full appearance-none cursor-pointer"
                                style={{
                                  fontVariationSettings: "'wdth' 100",
                                }}
                              >
                                <option value="">
                                  Gender at birth
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                            </div>
                          </div>
                          <div className="relative shrink-0 size-[32px]">
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 32 32"
                            >
                              <path
                                d="M24 12L16 22L8 12H24Z"
                                fill="#80D6F7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Date of Birth */}
                      <div className="flex-1">
                        <div className="flex gap-[8px] h-[52px] items-center relative w-full">
                          <div
                            aria-hidden="true"
                            className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                          />
                          <div className="flex-1 flex flex-col h-full items-start justify-center">
                            <div className="flex gap-[4px] items-center relative w-full">
                              <input
                                type="date"
                                placeholder="Date of birth"
                                className="font-['Roboto:Regular',sans-serif] leading-[28px] text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full cursor-pointer"
                                style={{
                                  fontVariationSettings: "'wdth' 100",
                                }}
                                ref={dateInputRef}
                              />
                            </div>
                          </div>
                          <CalendarIcon onClick={handleCalendarClick} />
                        </div>
                      </div>
                    </div>

                    {/* Chart Number Row */}
                    <div className="flex flex-col w-full max-w-full">
                      <div className="flex gap-[8px] h-[52px] items-center relative w-full">
                        <div
                          aria-hidden="true"
                          className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                        />
                        <div className="flex-1 flex flex-col h-full items-start justify-center">
                          <div className="flex gap-[4px] items-center relative w-full">
                            <input
                              type="text"
                              placeholder="Chart number"
                              className="font-['Roboto:Regular',sans-serif] leading-[28px] text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full"
                              style={{
                                fontVariationSettings: "'wdth' 100",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Create Button - Right aligned */}
                    <div className="flex w-full justify-end">
                      <button
                        type="button"
                        className="bg-[#bfeafb] relative rounded-[4px] cursor-pointer hover:opacity-90"
                        data-name="Button"
                      >
                        <div
                          aria-hidden="true"
                          className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]"
                        />

                        <div className="flex items-center px-[24px] py-[22px]">
                          <span
                            className="font-['Roboto:Medium',sans-serif] font-medium text-[#0067ac] text-[20px] whitespace-nowrap"
                            style={{
                              fontVariationSettings: "'wdth' 100",
                            }}
                          >
                            Create
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {filteredPatients.map((patient) => {
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
                    (acc, char) => acc + char.charCodeAt(0),
                    0,
                  ) % accentColors.length;
              const avatarColor = accentColors[colorIndex];

              return (
                <div
                  key={patient.id}
                  onClick={() => handlePatientClick(patient)}
                  className={`cursor-pointer transition-all rounded-[4px] overflow-hidden ${
                    selectedPatientId === patient.id
                      ? "ring-2 ring-[#5FCEFA]"
                      : "hover:ring-1 hover:ring-[#b0b1b3]"
                  }`}
                >
                  <RxHeaderPatientProfile
                    patient={{
                      name: `${patient.firstName} ${patient.lastName}`,
                      chartNumber: patient.chartNumber,
                      age: calculateAge(patient.dateOfBirth),
                      gender:
                        patient.gender.charAt(0).toUpperCase() +
                        patient.gender.slice(1),
                      lastVisit: patient.dateOfBirth,
                      avatarUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(patient.firstName + " " + patient.lastName)}&size=80&background=${avatarColor}&color=fff&bold=true`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export type { Patient };