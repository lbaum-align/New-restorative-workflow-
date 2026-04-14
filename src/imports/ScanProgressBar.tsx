interface ScanProgressBarProps {
  progress?: number; // 0-100
  label?: string;
}

export default function ScanProgressBar({ progress = 5, label = "Wand is initializing" }: ScanProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, Math.round(progress)));

  return (
    <div className="content-stretch flex gap-[16px] items-center relative w-full" data-name="Scan - Progress-Bar">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Record-Bar/Progess Bar">
        {/* Header: label + percentage */}
        <div className="content-stretch flex font-['Roboto',sans-serif] items-center justify-between leading-[28px] relative shrink-0 text-[18px] w-full">
          <p className="relative shrink-0 text-[#3e3d40]">
            {label}
          </p>
          <p className="relative shrink-0 text-[#009ace]">
            {clampedProgress}%
          </p>
        </div>
        {/* Progress track */}
        <div className="bg-white h-[8px] relative rounded-full shrink-0 w-full overflow-hidden" data-name="Container">
          <div
            className="bg-[#009ace] h-full rounded-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-[width] duration-200 ease-linear"
            style={{ width: `${clampedProgress}%`, minWidth: clampedProgress > 0 ? '8px' : '0px' }}
          />
        </div>
      </div>
    </div>
  );
}
