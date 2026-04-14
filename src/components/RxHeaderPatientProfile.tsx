interface PatientProfileData {
  name: string;
  chartNumber: string;
  age: number;
  gender: string;
  lastVisit: string;
  avatarUrl: string;
}

interface RxHeaderPatientProfileProps {
  patient: PatientProfileData;
}

export default function RxHeaderPatientProfile({ patient }: RxHeaderPatientProfileProps) {
  return (
    <div className="flex items-center gap-[16px] p-[16px] w-full">
      {/* Avatar */}
      <div className="shrink-0">
        <img
          src={patient.avatarUrl}
          alt={patient.name}
          className="size-[80px] rounded-full"
        />
      </div>
      
      {/* Patient Info */}
      <div className="flex flex-col gap-[4px] flex-1 min-w-0">
        <div className="font-['Roboto:Medium',sans-serif] font-medium text-[20px] leading-[28px] text-[#3e3d40] truncate" style={{ fontVariationSettings: "'wdth' 100" }}>
          {patient.name}
        </div>
        <div className="flex gap-[16px] items-center">
          <div className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-[#696a6d]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Chart: {patient.chartNumber}
          </div>
          <div className="h-[16px] w-[1px] bg-[#e0e0e0]" />
          <div className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-[#696a6d]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {patient.age}y · {patient.gender}
          </div>
        </div>
      </div>
    </div>
  );
}
