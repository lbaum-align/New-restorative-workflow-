import svgPaths from "./svg-gejw9cbubl";

function BannerBackground() {
  return (
    <div className="bg-white h-[124px] mr-[-20px] relative shrink-0 w-[477px]" data-name="Banner / Background">
      <div aria-hidden="true" className="absolute border-[#00adef] border-l-12 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextPart() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mr-[-20px] relative self-stretch" data-name="Text part">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] px-[20px] py-[16px] relative size-full text-[#3e3d40]">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[0px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="font-['Roboto',sans-serif] leading-[32px] text-[24px] text-black whitespace-pre-wrap">Instantly evaluate reduction</p>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[28px] whitespace-pre-wrap">{`The heatmap allows you to evaluate reduction in different areas of the prep. `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p34619a00} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center px-[12px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon />
    </div>
  );
}

function RightItem() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-20px] p-[16px] relative self-stretch shrink-0" data-name="Right item">
      <Button />
    </div>
  );
}

export default function Banner() {
  return (
    <div className="content-stretch flex items-start pl-[12px] pr-[20px] relative rounded-[8px] size-full" data-name="Banner">
      <BannerBackground />
      <TextPart />
      <RightItem />
    </div>
  );
}