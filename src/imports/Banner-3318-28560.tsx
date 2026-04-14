import svgPaths from "./svg-64rnoe2cls";

export default function Banner() {
  return (
    <div className="relative rounded-[8px] size-full" data-name="Banner">
      <div className="content-stretch flex items-start min-h-[inherit] pl-[12px] pr-[20px] relative size-full">
        <div className="absolute bg-white inset-0" data-name="Banner / Background">
          <div className="size-full" />
          <div aria-hidden="true" className="absolute border-[#00adef] border-l-12 border-solid inset-0 pointer-events-none" />
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px mr-[-20px] relative self-stretch" data-name="Text part">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] px-[20px] py-[16px] relative size-full text-[#3e3d40]">
              <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[0px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                <p className="font-['Avenir:Heavy',sans-serif] leading-[32px] not-italic text-[24px] text-black whitespace-pre-wrap">Instantly evaluate reduction</p>
              </div>
              <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                <p className="leading-[28px] whitespace-pre-wrap">{`The heatmap allows you to evaluate reduction in different areas of the prep. `}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start mr-[-20px] p-[16px] relative self-stretch shrink-0" data-name="Right item">
          <div className="h-[64px] relative rounded-[4px] shrink-0" data-name="Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex h-full items-center justify-center px-[12px] py-[22px] relative">
                <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon">
                  <div className="absolute inset-[6.25%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                      <path d={svgPaths.p3b1c5480} fill="var(--fill-0, #3E3D40)" id="Vector" />
                    </svg>
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