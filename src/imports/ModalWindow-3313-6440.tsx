import clsx from "clsx";
import svgPaths from "./svg-lpkasrtqzz";
type RightButtonGroupHelperProps = {
  additionalClassNames?: string;
};

function RightButtonGroupHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<RightButtonGroupHelperProps>) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] px-[20px] py-[22px] relative">
        <div style={{ fontVariationSettings: "\'wdth\' 100" }} className={clsx("flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center whitespace-nowrap", additionalClassNames)}>
          <p className="leading-[28px]">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default function ModalWindow() {
  return (
    <div className="bg-white relative rounded-[4px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2),0px_4px_16px_0px_rgba(0,0,0,0.1)] size-full" data-name="Modal window">
      <div className="flex flex-col justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] overflow-clip relative size-full">
          <div className="h-[64px] relative shrink-0 w-full" data-name="Title bar">
            <div className="content-stretch flex items-center overflow-clip pr-[16px] relative rounded-[inherit] size-full">
              <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-16px] relative">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[16px] relative size-full">
                    <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#3e3d40] text-[24px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                      <p className="leading-[30px] overflow-hidden">Move the scan to pre-treatment?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mr-[-16px] relative rounded-[4px] shrink-0 size-[64px]" data-name="Right button">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[24px] py-[22px] relative size-full">
                    <div className="relative shrink-0 size-[32px]" data-name="Icon">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[42.426px] top-1/2" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
                        <div className="flex-none rotate-45">
                          <div className="relative size-[30px]" data-name="Union">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                              <path d={svgPaths.p25b48500} fill="var(--fill-0, #3FC1F3)" id="Union" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
          </div>
          <div className="relative shrink-0 w-full" data-name="Text content">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-start p-[16px] relative w-full">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#3e3d40] text-[0px] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  <span className="leading-[28px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`This will move the current `}</span>
                  <span className="leading-[28px]">scan to</span>
                  <span className="leading-[28px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` the pre-treatment scan.`}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Footer">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px" data-name="Filler" />
                <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Right button group">
                  <div className="bg-[#f9f9f9] h-[48px] min-w-[108px] relative rounded-[4px] shrink-0" data-name="Button">
                    <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <RightButtonGroupHelper additionalClassNames="text-[#3e3d40]">No, keep here</RightButtonGroupHelper>
                  </div>
                  <div className="bg-[#bfeafb] h-[48px] min-w-[108px] relative rounded-[4px] shrink-0" data-name="Button">
                    <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <RightButtonGroupHelper additionalClassNames="text-[#0067ac]">Yes, Move it</RightButtonGroupHelper>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}