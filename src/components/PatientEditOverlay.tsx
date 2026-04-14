import { motion } from "motion/react";
import { useState } from "react";
import svgPathsIcons from "../imports/svg-audsipxixy";
import DateOfBirthPicker from "./DateOfBirthPicker";
import PatientSearchDialog from "./PatientSearchDialog";

interface PatientEditOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  patient: {
    id: string;
    firstName: string;
    lastName: string;
    patientId?: string;
    dateOfBirth: string;
    gender: string;
  };
  onSave?: (updatedPatient: any) => void;
  calculateAge: (dateOfBirth: string) => string;
  formatDate: (dateOfBirth: string) => string;
  doctorName?: string;
  doctorId?: string;
}

export default function PatientEditOverlay({
  isOpen,
  onClose,
  patient,
  onSave,
  calculateAge,
  formatDate,
  doctorName,
  doctorId,
}: PatientEditOverlayProps) {
  const [formData, setFormData] = useState({
    firstName: patient.firstName,
    lastName: patient.lastName,
    gender: patient.gender,
    dateOfBirth: patient.dateOfBirth,
    chartNumber: patient.patientId || "",
  });

  const [isPatientSearchOpen, setIsPatientSearchOpen] = useState(false);

  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      chartNumber: "",
    });
  };

  const handleConfirm = () => {
    if (onSave) {
      onSave({
        ...patient,
        firstName: formData.firstName,
        lastName: formData.lastName,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
        patientId: formData.chartNumber,
      });
    }
    onClose();
  };

  if (!isOpen) return null;

  const age = calculateAge(patient.dateOfBirth);
  const gender = patient.gender
    ? patient.gender.charAt(0).toUpperCase() + patient.gender.slice(1)
    : "—";
  const lastScan = formatDate(patient.dateOfBirth);

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/20"
        onClick={onClose}
      />

      {/* Overlay Panel */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="absolute left-0 right-0 top-0 bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_2px_8px_0px_rgba(0,0,0,0.15)]"
        style={{ overflow: 'visible' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-[40px] top-[24px] z-10 w-[64px] h-[64px] flex items-center justify-center hover:bg-[#F0F0F0] rounded-[4px] transition-colors"
        >
          <div className="relative shrink-0 size-[32px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Icon">
                <path d={svgPathsIcons.p16b96000} fill="#0067AC" id="Vector" />
              </g>
            </svg>
          </div>
        </button>

        {/* Patient Header - Remains Visible */}
        <div className="relative border-b border-[#E0E0E0]">
          <div className="flex items-center justify-between pl-[4px] pr-[40px] py-[24px]">
            {/* Left side - Patient info */}
            <div className="flex items-center gap-[120px]">
              {/* Avatar + Name */}
              <div className="flex items-center gap-[24px] ml-[52px]">
                {/* Avatar Circle */}
                <div className="w-[80px] h-[80px] rounded-full bg-[#F0F0F0] flex items-center justify-center shrink-0">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="13" r="7" fill="#939598" />
                    <path
                      d="M6 34C6 27.3726 11.3726 22 18 22H22C28.6274 22 34 27.3726 34 34V34"
                      fill="#939598"
                    />
                  </svg>
                </div>

                {/* Name and Chart */}
                <div className="flex flex-col gap-[8px]">
                  <p
                    className="font-medium text-[32px] leading-[40px] text-black"
                    style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                  >
                    {formData.firstName} {formData.lastName}
                  </p>
                  <p
                    className="font-normal text-[18px] leading-[28px] text-[#696a6d]"
                    style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                  >
                    {formData.chartNumber || "14129123"}
                  </p>
                </div>
              </div>

              {/* Info Fields */}
              <div className="flex gap-[67px] font-normal text-[18px] leading-[28px]" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[#696a6d]">Age</p>
                  <p className="text-black">{age}</p>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[#696a6d]">Gender at birth</p>
                  <p className="text-black">{gender}</p>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[#696a6d]">Last scan</p>
                  <p className="text-black">{lastScan}</p>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[#696a6d]">Treated by:</p>
                  <p className="text-black">{doctorName ? `${doctorName} | ${doctorId || ""}` : `Doctor Name | ${doctorId || "12367854"}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="relative px-[56px] pt-[60px] pb-[40px] flex flex-col items-start" style={{ overflow: 'visible' }}>
          {/* Search Button - Top Right */}
          <div className="absolute right-[56px] top-[24px]">
            <button 
              onClick={() => setIsPatientSearchOpen(true)}
              className="bg-[#bfeafb] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[48px]"
            >
              <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="Icon">
                    <path d={svgPathsIcons.p32470e70} fill="#0067AC" id="Vector" />
                  </g>
                </svg>
              </div>
            </button>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-[40px] mb-[40px] items-start w-full overflow-visible">
            {/* First Name + Last Name Row */}
            <div className="flex gap-[40px] w-full">
              {/* First Name */}
              <div className="flex-1">
                <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px pb-[4px] relative">
                    <div className="content-stretch flex gap-[4px] items-center mb-[-4px] relative shrink-0 w-full">
                      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>First name</p>
                    </div>
                    <div className="content-stretch flex items-center mb-[-4px] relative shrink-0 w-full">
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Last Name */}
              <div className="flex-1">
                <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px pb-[4px] relative">
                    <div className="content-stretch flex gap-[4px] items-center mb-[-4px] relative shrink-0 w-full">
                      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>Last name</p>
                    </div>
                    <div className="content-stretch flex items-center mb-[-4px] relative shrink-0 w-full">
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] bg-transparent border-none outline-none w-full"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gender + Date of Birth Row */}
            <div className="flex gap-[40px] w-full">
              {/* Gender */}
              <div className="flex-1">
                <div className="flex items-center justify-between h-[52px] border-b border-[#b0b1b3]">
                  <p
                    className="text-[18px] font-normal text-[#3e3d40] leading-[28px]"
                    style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                  >
                    Gender
                  </p>
                  <div className="flex gap-[24px] pr-[30px]">
                    <label className="flex items-center gap-[4px] py-[4px] cursor-pointer">
                      <div className="relative w-[28px] h-[28px] rounded-[3px]">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] rounded-full border border-[#939598] bg-white" />
                        {formData.gender.toLowerCase() === "male" && (
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full bg-[#0067ac]" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender.toLowerCase() === "male"}
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                        className="sr-only"
                      />
                      <span
                        className="text-[18px] font-normal text-[#3e3d40] leading-[28px]"
                        style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                      >
                        Male
                      </span>
                    </label>
                    <label className="flex items-center gap-[4px] py-[4px] cursor-pointer">
                      <div className="relative w-[28px] h-[28px] rounded-[3px]">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] rounded-full border border-[#939598] bg-white" />
                        {formData.gender.toLowerCase() === "female" && (
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full bg-[#0067ac]" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender.toLowerCase() === "female"}
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                        className="sr-only"
                      />
                      <span
                        className="text-[18px] font-normal text-[#3e3d40] leading-[28px]"
                        style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                      >
                        Female
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Date of Birth */}
              <div className="flex-1" style={{ position: 'relative', zIndex: 100 }}>
                <label
                  className="block text-[14px] font-medium text-[#3e3d40] mb-[4px] leading-[24px]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                >
                  Date of birth
                </label>
                <DateOfBirthPicker
                  value={formData.dateOfBirth}
                  onChange={(date) =>
                    setFormData({ ...formData, dateOfBirth: date })
                  }
                />
              </div>
            </div>

            {/* Chart Number Row (full width) */}
            <div className="w-full">
              <label
                className="block text-[14px] font-medium text-[#3e3d40] mb-[4px] leading-[24px]"
                style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
              >
                Chart number
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.chartNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, chartNumber: e.target.value })
                  }
                  className="w-full h-[52px] pb-[4px] border-b border-[#b0b1b3] bg-transparent text-[18px] font-normal text-[#3e3d40] leading-[28px] focus:outline-none focus:border-[#009ACE]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                />
              </div>
            </div>
          </div>

          {/* Confirm and Clear Buttons - Left Aligned */}
          <div className="flex items-start justify-end self-end pl-[8px] pr-[9px] py-[8px] relative">
            {/* Confirm Button - Primary Style */}
            <div className="bg-[#bfeafb] h-[48px] min-h-px min-w-[108px] mr-[-1px] relative">
              <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
                <button
                  onClick={handleConfirm}
                  className="content-stretch flex items-center justify-center min-w-[inherit] px-[20px] py-[22px] relative size-full bg-transparent border-none"
                >
                  <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[28px]">Confirm</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Patient Search Dialog */}
      <PatientSearchDialog 
        isOpen={isPatientSearchOpen} 
        onClose={() => setIsPatientSearchOpen(false)}
        onSelectPatient={(patient) => {
          setFormData({
            ...formData,
            firstName: patient.fullName.split(' ')[0] || '',
            lastName: patient.fullName.split(' ').slice(1).join(' ') || '',
            dateOfBirth: patient.dateOfBirth,
            gender: patient.gender.toLowerCase(),
            chartNumber: patient.chartNumber,
          });
        }}
      />
    </div>
  );
}