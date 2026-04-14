import { useState, useRef } from "react";
import svgPaths from "../imports/svg-omx21ki433";
import { SearchX } from "lucide-react";

interface FieldsProps {
  onDataChange?: (data: PatientData) => void;
  variant?: 'default' | 'notFound';
  searchedName?: string;
}

export interface PatientData {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  chartNumber: string;
}

function CaretDownIcon() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d="M24 12L16 22L8 12H24Z" fill="#80D6F7" />
      </svg>
    </div>
  );
}

function CalendarIcon({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <button 
      type="button"
      onClick={onClick}
      className="relative shrink-0 size-[32px] cursor-pointer"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p27287472} fill="#3E3D40" />
      </svg>
    </button>
  );
}

export default function Fields({ onDataChange, variant = 'default', searchedName }: FieldsProps) {
  const [formData, setFormData] = useState<PatientData>({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    chartNumber: ""
  });

  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: keyof PatientData, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onDataChange?.(newData);
  };

  const handleCalendarClick = () => {
    dateInputRef.current?.click();
  };

  return (
    <div className="content-stretch flex flex-col gap-[52px] items-start relative w-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.93)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create a new patient
      </p>
      
      <div className="relative shrink-0 w-full">
        <div className="flex flex-col items-center size-full gap-[24px]">
          {/* No Patient Found Message - Shows when user has typed a name */}
          {(formData.firstName || formData.lastName) && (
            <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[40px] relative w-full bg-white rounded-[4px] shadow-sm">
              <div className="flex flex-col items-center gap-[16px]">
                <SearchX className="w-[48px] h-[48px] text-[#b0b1b3]" strokeWidth={1.5} />
                <div className="flex flex-col items-center gap-[4px]">
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[28px] text-[18px] text-[rgba(0,0,0,0.87)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    No patients found
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] leading-[20px] text-[14px] text-[#6e6e6e]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    No results for "{formData.firstName || formData.lastName}". Add a new patient below.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Form Fields - Always visible */}
          <div className="content-stretch flex flex-col items-center justify-between px-[40px] py-[28px] relative w-full bg-white rounded-[4px] shadow-sm">
            <div className="content-stretch flex gap-[24px] items-end justify-center relative shrink-0 w-full">
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                <div className="size-full">
                  <div className="content-stretch flex flex-col gap-[40px] items-start px-[20px] py-0 relative w-full">
                    
                    {/* First and Last Name Row */}
                    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
                      {/* First Name */}
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                        <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                              <input
                                type="text"
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={(e) => handleChange('firstName', e.target.value)}
                                className="font-['Roboto:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full"
                                style={{ fontVariationSettings: "'wdth' 100" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                        <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                              <input
                                type="text"
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={(e) => handleChange('lastName', e.target.value)}
                                className="font-['Roboto:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full"
                                style={{ fontVariationSettings: "'wdth' 100" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Gender and Date of Birth Row */}
                    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
                      {/* Gender Dropdown */}
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                        <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                              <select
                                value={formData.gender}
                                onChange={(e) => handleChange('gender', e.target.value)}
                                className="font-['Roboto:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full appearance-none cursor-pointer"
                                style={{ fontVariationSettings: "'wdth' 100" }}
                              >
                                <option value="">Gender at birth</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                            </div>
                          </div>
                          <CaretDownIcon />
                        </div>
                      </div>

                      {/* Date of Birth */}
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                        <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                              <input
                                type="date"
                                value={formData.dateOfBirth}
                                onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                                placeholder="Date of birth"
                                className="font-['Roboto:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full cursor-pointer"
                                style={{ fontVariationSettings: "'wdth' 100" }}
                                ref={dateInputRef}
                              />
                            </div>
                          </div>
                          <CalendarIcon onClick={handleCalendarClick} />
                        </div>
                      </div>
                    </div>

                    {/* Chart Number Row */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[792px] max-w-full">
                      <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                        <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0">
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                            <input
                              type="text"
                              placeholder="Chart number"
                              value={formData.chartNumber}
                              onChange={(e) => handleChange('chartNumber', e.target.value)}
                              className="font-['Roboto:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            />
                          </div>
                        </div>
                        <CaretDownIcon />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}