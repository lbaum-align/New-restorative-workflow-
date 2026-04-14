import svgPaths from "./svg-wzvh60ppa3";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[8px] h-full isolate items-center justify-center px-[16px] py-[4px] relative">
        <CheckmarkEmpty className="relative shrink-0 size-[20px] z-[3]" size="20x20" />
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[0px] text-center whitespace-nowrap z-[2]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic text-[14px]">{children}</p>
        </div>
      </div>
    </div>
  );
}

function Frame1618873008Badge({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#edfee6] h-[32px] relative rounded-[32px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#399927] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
type Frame1618873008TextProps = {
  text: string;
};

function Frame1618873008Text({ text }: Frame1618873008TextProps) {
  return <Wrapper>{text}</Wrapper>;
}
type CheckmarkEmptyProps = {
  className?: string;
  size?: "32x32" | "24x24" | "20x20" | "16x16";
};

function CheckmarkEmpty({ className, size = "32x32" }: CheckmarkEmptyProps) {
  const is16X16 = size === "16x16";
  const is20X20 = size === "20x20";
  const is24X24 = size === "24x24";
  return (
    <div className={className || `relative ${is16X16 ? "size-[16px]" : is20X20 ? "size-[20px]" : is24X24 ? "size-[24px]" : "size-[32px]"}`}>
      <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-[23.71%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is16X16 ? "0 0 12 8.207" : is20X20 ? "0 0 15 10.2587" : is24X24 ? "0 0 18 12.3105" : "0 0 24 16.414"}>
          <path d={is16X16 ? svgPaths.p901cd00 : is20X20 ? svgPaths.pa513e80 : is24X24 ? svgPaths.p2f2e3b00 : svgPaths.p15a88000} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export default function RecordsNotes() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Records + Notes">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[28px] py-[24px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Scanned:
          </p>
          <div className="flex items-center justify-center relative shrink-0 size-[40px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <div className="size-[40px]" />
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="bg-[#f2ebff] h-[32px] relative rounded-[32px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#edc0f8] border-solid inset-0 pointer-events-none rounded-[32px]" />
              <Frame1618873008Text text="NIRI" />
            </div>
            <div className="bg-[#edfee6] h-[32px] opacity-0 relative rounded-[32px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#399927] border-solid inset-0 pointer-events-none rounded-[32px]" />
              <Frame1618873008Text text="NIRI" />
            </div>
            <div className="bg-[#edfee6] h-[32px] relative rounded-[32px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#399927] border-solid inset-0 pointer-events-none rounded-[32px]" />
              <Frame1618873008Text text="Reference scan" />
            </div>
            <Frame1618873008Badge>{`Edentulous `}</Frame1618873008Badge>
            <Frame1618873008Badge>{`Copy dentures `}</Frame1618873008Badge>
            <div className="bg-[#edfee6] h-[32px] relative rounded-[32px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#399927] border-solid inset-0 pointer-events-none rounded-[32px]" />
              <Frame1618873008Text text="Additional layer" />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}