import { useState } from "react";
import { motion } from "motion/react";
import { Patient } from "../components/PatientList";
import Header from "../components/Header";
import BottomActions from "../components/BottomActions";
import RxPatientHeaderUpdated from "../imports/RxPatientHeaderUpdated-1120-1340";
import svgPaths from "../imports/svg-h1v07yads";

interface ScanningSelectionProps {
  patient: Patient;
  onNext: (scanType: string) => void;
  onNavigateToMultiLayer?: () => void;
}

// Helper function to calculate age from date of birth
const calculateAge = (dateOfBirth: string): string => {
  const [month, day, year] = dateOfBirth.split("/");
  const birthDate = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day)
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
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
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

export default function ScanningSelection({
  patient,
  onNext,
  onNavigateToMultiLayer,
}: ScanningSelectionProps) {
  const [selectedScanType, setSelectedScanType] = useState<string | null>(null);

  // Study model card component
  const StudyModelCard = ({ onClick, layoutId }: { onClick: () => void; layoutId?: string }) => (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      className="bg-[#009ace] content-stretch flex h-[261px] items-start justify-between px-[27px] py-[28px] relative rounded-[16px] shrink-0 flex-1 cursor-pointer transition-all hover:opacity-90"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="content-stretch flex flex-col h-[205px] items-end justify-between relative shrink-0 w-full max-w-[479px]">
        <p className="css-4hzbpn font-['Roboto:Medium',sans-serif] font-medium leading-[40px] min-w-full relative shrink-0 text-[#f0f0f0] text-[32px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Study model
        </p>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
          <div className="col-1 h-[150px] ml-0 mt-0 relative row-1 w-[133.338px]">
            <div className="absolute inset-[-0.42%_-0.35%_-0.42%_-0.47%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.432 151.251">
                <g id="Group">
                  <g id="Group_2">
                    <path d={svgPaths.pbb81e00} id="Vector" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    <path d={svgPaths.p11aff340} id="Vector_2" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    <path d={svgPaths.p4ce6fbe} id="Vector_3" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                  </g>
                  <path d={svgPaths.pf659c80} id="Vector_4" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                  <path d={svgPaths.p522a200} id="Vector_5" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                  <path d={svgPaths.p32269e20} id="Vector_6" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Invisalign card component
  const InvisalignCard = ({ onClick, layoutId }: { onClick: () => void; layoutId?: string }) => (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      className="bg-[#0072a3] content-stretch flex h-[261px] items-start justify-between px-[24px] py-[22px] relative rounded-[16px] shrink-0 flex-1 cursor-pointer transition-all hover:opacity-90"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
        <div className="col-1 content-stretch flex flex-col h-[210.927px] items-end justify-between ml-0 mt-0 relative row-1 w-full max-w-[480px]">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 w-full">
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
              <p className="col-1 css-4hzbpn font-['Roboto:Medium',sans-serif] font-medium leading-[40px] ml-0 mt-0 relative row-1 text-[#f0f0f0] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                Invisalign
              </p>
            </div>
          </div>
          <div className="h-[139.927px] relative shrink-0 w-[247.301px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 247.301 139.927">
              <g id="Group 1511076965">
                <path d={svgPaths.pc66d500} id="Vector" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                <path d={svgPaths.pb7f1200} id="Vector_2" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Fixed restorative card component
  const FixedRestorativeCard = ({ onClick, layoutId }: { onClick: () => void; layoutId?: string }) => (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      className="bg-[#005780] content-stretch flex h-[261px] items-start justify-between p-[28px] relative rounded-[16px] shrink-0 flex-1 cursor-pointer transition-all hover:opacity-90"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="content-stretch flex flex-col h-[196px] items-end justify-between leading-[0] relative shrink-0 w-full max-w-[480px]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0 w-full">
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
            <p className="col-1 css-4hzbpn font-['Roboto:Medium',sans-serif] font-medium leading-[40px] ml-0 mt-0 relative row-1 text-[#f0f0f0] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              Fixed restorative
            </p>
          </div>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
          <div className="col-1 h-[115.925px] ml-0 mt-0 relative row-1 w-[80.339px]">
            <div className="absolute inset-[-0.54%_-0.78%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81.5892 117.176">
                <g id="Group">
                  <path d={svgPaths.p21d92200} id="Vector" stroke="white" strokeLinejoin="round" strokeWidth="1.25" />
                  <path d={svgPaths.p304a7b00} id="Vector_2" stroke="white" strokeLinejoin="round" strokeWidth="1.25" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Appliance card component
  const ApplianceCard = ({ onClick, layoutId }: { onClick: () => void; layoutId?: string }) => (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      className="bg-[#008ec2] content-stretch flex flex-col h-[261px] items-start justify-between px-[30px] py-[28px] relative rounded-[16px] shrink-0 flex-1 cursor-pointer transition-all hover:opacity-90"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="content-stretch flex flex-col h-[164px] items-end justify-between relative shrink-0 w-full max-w-[335px]">
        <p className="css-4hzbpn font-['Roboto:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#f0f0f0] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Appliance
        </p>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
          <div className="col-1 h-[46.965px] ml-0 mt-0 relative row-1 w-[138.568px]">
            <div className="absolute inset-[-1.33%_-0.45%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.818 48.2147">
                <g id="Group">
                  <g id="Group_2">
                    <g id="Vector">
                      <path d={svgPaths.p38475680} fill="#008EC2" />
                      <path d={svgPaths.p38475680} stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                    <g id="Vector_2">
                      <path d={svgPaths.p1a5b4480} fill="#008EC2" />
                      <path d={svgPaths.p1a5b4480} stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                    <g id="Vector_3">
                      <path d="M69.8359 15.8633V15.4653Z" fill="#008EC2" />
                      <path d="M69.8359 15.8633V15.4653" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                    <g id="Vector_4">
                      <path d={svgPaths.p8897580} fill="#008EC2" />
                      <path d={svgPaths.p8897580} stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                    <g id="Vector_5">
                      <path d={svgPaths.p2939aa00} fill="#008EC2" />
                      <path d={svgPaths.p2939aa00} stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                    <g id="Vector_6">
                      <path d={svgPaths.p2eb01d00} fill="#008EC2" />
                      <path d={svgPaths.p2eb01d00} stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                    <g id="Vector_7">
                      <path d={svgPaths.p1d0c2180} fill="#008EC2" />
                      <path d={svgPaths.p1d0c2180} stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                    <g id="Vector_8">
                      <path d={svgPaths.p229dc7c0} fill="#008EC2" />
                      <path d={svgPaths.p229dc7c0} stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                    <g id="Vector_9">
                      <path d={svgPaths.p3a788080} fill="#008EC2" />
                      <path d={svgPaths.p3a788080} stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                    <g id="Vector_10">
                      <path d={svgPaths.p28490700} fill="#008EC2" />
                      <path d={svgPaths.p28490700} stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                    <g id="Vector_11">
                      <path d={svgPaths.p2d4a4800} fill="#008EC2" />
                      <path d={svgPaths.p2d4a4800} stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                    <g id="Vector_12">
                      <path d={svgPaths.p1775a800} fill="#008EC2" />
                      <path d={svgPaths.p1775a800} stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                    <g id="Vector_13">
                      <path d={svgPaths.p3ad0980} fill="#008EC2" />
                      <path d={svgPaths.p3be3ac80} stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                    <g id="Vector_14">
                      <path d={svgPaths.p24a7340} fill="#008EC2" />
                      <path d={svgPaths.p9050ca0} stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                    <g id="Vector_15">
                      <path d={svgPaths.p24206880} fill="#008EC2" />
                      <path d={svgPaths.p33f19d80} stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                    <g id="Vector_16">
                      <path d={svgPaths.p33fdcfbe} fill="#008EC2" />
                      <path d={svgPaths.p33fdcfbe} stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                    </g>
                  </g>
                  <path d={svgPaths.p7892700} fill="#008EC2" id="Vector_17" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                  <path d={svgPaths.p320eb7c0} fill="#008EC2" id="Vector_18" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                  <path d={svgPaths.p1113f300} fill="#008EC2" id="Vector_19" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                  <path d={svgPaths.p34698c80} fill="#008EC2" id="Vector_20" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                  <path d={svgPaths.p2d5731a0} id="Vector_21" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Dentures card component
  const DenturesCard = ({ onClick, layoutId }: { onClick: () => void; layoutId?: string }) => (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      className="bg-[#006796] flex-[1_0_0] h-[261px] min-h-px min-w-px relative rounded-[16px] cursor-pointer transition-all hover:opacity-90"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="content-stretch flex flex-col items-start justify-between px-[30px] py-[28px] relative size-full">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
            <p className="col-1 css-4hzbpn font-['Roboto:Medium',sans-serif] font-medium leading-[40px] ml-0 mt-0 relative row-1 text-[#f0f0f0] text-[32px] w-[278px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Dentures
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[205px] items-end justify-end relative shrink-0 w-full">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
            <div className="col-1 content-stretch flex flex-col h-[112.292px] items-start ml-0 mt-0 relative row-1 w-[138.568px]">
              <div className="h-[112.292px] relative shrink-0 w-[138.567px]">
                <div className="absolute inset-[-0.56%_-0.45%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.817 113.542">
                    <g id="Group">
                      <path d={svgPaths.p79b9500} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d={svgPaths.p1a774e00} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d={svgPaths.p2bc043f0} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d={svgPaths.p3730d200} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d={svgPaths.p327d6b80} id="Vector_5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d={svgPaths.p1b66da00} id="Vector_6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d={svgPaths.p3d4c2880} id="Vector_7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d={svgPaths.p9800} id="Vector_8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d={svgPaths.p35db1f80} id="Vector_9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d={svgPaths.p85e6600} id="Vector_10" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Surgical guide card component
  const SurgicalGuideCard = ({ onClick, layoutId }: { onClick: () => void; layoutId?: string }) => (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      className="bg-[#005780] content-stretch flex flex-col h-[261px] items-start px-[30px] py-[28px] relative rounded-[16px] shrink-0 flex-1 cursor-pointer transition-all hover:opacity-90"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="content-stretch flex flex-col gap-[38px] items-end relative shrink-0 w-full">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 w-full">
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
            <p className="col-1 css-4hzbpn font-['Roboto:Medium',sans-serif] font-medium leading-[40px] ml-0 mt-0 relative row-1 text-[#f0f0f0] text-[32px] w-full max-w-[340px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Scan for surgical guide
            </p>
          </div>
        </div>
        <div className="h-[127px] relative shrink-0 w-[139px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139 127">
            <g id="Frame 1618873206">
              <path d={svgPaths.p3a9d6c00} id="Vector" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
              <circle cx="120.5" cy="43.5" id="Ellipse 85" r="5.875" stroke="white" strokeWidth="1.25" />
              <circle cx="23.791" cy="43.5" id="Ellipse 86" r="5.875" stroke="white" strokeWidth="1.25" />
              <circle cx="29.5" cy="64.5" id="Ellipse 87" r="4.875" stroke="white" strokeWidth="1.25" />
              <circle cx="119.5" cy="64.5" id="Ellipse 88" r="4.875" stroke="white" strokeWidth="1.25" />
            </g>
          </svg>
        </div>
      </div>
    </motion.div>
  );

  // All on X card component
  const AllOnXCard = ({ onClick, layoutId }: { onClick: () => void; layoutId?: string }) => (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      className="h-[261px] relative shrink-0 flex-1 cursor-pointer transition-all hover:opacity-90"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute bg-[#003f5e] inset-0 rounded-[16px]" />
      <div className="absolute content-stretch flex flex-col gap-[47px] h-[197px] items-end justify-center left-[29.5px] top-[28px] w-[341px]">
        <p className="css-4hzbpn font-['Roboto:Medium',sans-serif] font-medium leading-[40px] min-w-full relative shrink-0 text-[#f0f0f0] text-[32px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
          All on X
        </p>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
          <div className="col-1 h-[103.705px] ml-0 mt-0 relative row-1 w-[138.496px]">
            <div className="absolute inset-[-0.6%_-0.45%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.746 104.955">
                <g id="Group">
                  <path d={svgPaths.p15b240} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <path d={svgPaths.p32e5f080} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <g id="Group_2">
                    <path d={svgPaths.p27c81f00} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    <path d={svgPaths.p3e70c00} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </g>
                  <g id="Group_3">
                    <path d={svgPaths.p1126300} id="Vector_5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    <path d={svgPaths.p3dac0680} id="Vector_6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </g>
                  <path d={svgPaths.p2f05b100} id="Vector_7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <path d={svgPaths.p3dbe5800} id="Vector_8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <path d={svgPaths.pb81ac80} id="Vector_9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <path d={svgPaths.p35127080} id="Vector_10" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <path d={svgPaths.p263f2d00} id="Vector_11" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <path d={svgPaths.p3db6c800} id="Vector_12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <path d={svgPaths.p38ac6980} id="Vector_13" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <path d={svgPaths.pd57e900} id="Vector_14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <path d={svgPaths.p364cfcc0} id="Vector_15" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <path d={svgPaths.p12872ec0} id="Vector_16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <path d={svgPaths.p3d74d500} id="Vector_17" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <path d={svgPaths.p3a36e080} id="Vector_18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <g id="Group_4">
                    <path d={svgPaths.p998ee00} id="Vector_19" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    <path d={svgPaths.p9e488e0} id="Vector_20" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    <path d={svgPaths.p1e5ad680} id="Vector_21" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </g>
                  <g id="Group_5">
                    <path d={svgPaths.p1d2b6b00} id="Vector_22" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    <path d={svgPaths.p3719cf00} id="Vector_23" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    <path d={svgPaths.p3b082880} id="Vector_24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </g>
                  <g id="Group_6">
                    <path d={svgPaths.p23592b80} id="Vector_25" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    <path d={svgPaths.p12ae00} id="Vector_26" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    <path d={svgPaths.p3ec33e80} id="Vector_27" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </g>
                  <g id="Group_7">
                    <path d={svgPaths.p16760640} id="Vector_28" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    <path d={svgPaths.p37505280} id="Vector_29" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    <path d={svgPaths.p28d9ab80} id="Vector_30" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </g>
                  <path d={svgPaths.p2af1ac00} id="Vector_31" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <g id="Group_8">
                    <path d={svgPaths.p1b447770} id="Vector_32" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    <path d={svgPaths.p31fadd80} id="Vector_33" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </g>
                  <g id="Group_9">
                    <path d={svgPaths.p2cea0b40} id="Vector_34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    <path d="M111.623 66.19L121.75 67.883" id="Vector_35" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </g>
                  <path d={svgPaths.p22a9c200} id="Vector_36" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="h-screen flex flex-col bg-[#f5f5f5]">
      <Header activeSteps={{ rx: true }} />
      <RxPatientHeaderUpdated
        patient={patient}
        calculateAge={calculateAge}
        formatDate={formatDate}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-[46px] pt-[52px] pb-[40px]">
        {/* White container with specified padding and styling */}
        <div className="bg-white rounded-[8px] py-[40px] px-[40px] w-full">
          <div className="flex flex-col gap-[40px] w-full">
            {/* Title */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="css-4hzbpn font-['Roboto:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.93)] w-[779px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                What are you scanning today?
              </p>
            </div>

            {/* Card Rows Container */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              {/* Top Row - 3 cards */}
              <div className="content-stretch flex items-center gap-[12px] relative shrink-0 w-full">
                <StudyModelCard onClick={() => onNext("studyModel")} layoutId="card-studyModel" />
                <InvisalignCard onClick={() => onNext("invisalign")} layoutId="card-invisalign" />
                <FixedRestorativeCard onClick={() => onNext("fixed-restorative")} layoutId="card-fixed-restorative" />
              </div>

              {/* Bottom Row - 4 cards */}
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <ApplianceCard onClick={() => onNext("appliances")} layoutId="card-appliances" />
                <DenturesCard onClick={() => onNext("dentures")} layoutId="card-dentures" />
                <SurgicalGuideCard onClick={() => onNext("surgicalGuide")} layoutId="card-surgicalGuide" />
                <AllOnXCard onClick={() => onNext("allOnX")} layoutId="card-allOnX" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <BottomActions
        onNext={() => onNext(selectedScanType!)}
        nextText="Next"
        nextDisabled={!selectedScanType}
      />
    </div>
  );
}