import svgPaths from "./svg-dv6rh6vdwe";

export default function RxElementsRecordsNotesLayers() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Rx elements (records, notes, layers)">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-white relative shrink-0 w-full" data-name="Rx elements (records, notes, layers)">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Attachments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
          <div className="content-stretch flex flex-col items-start pb-[24px] pt-[4px] px-[24px] relative size-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full">
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[24px] py-[32px] relative size-full">
                  <div className="bg-[#ededed] content-stretch flex items-center p-[20px] relative rounded-[50px] shrink-0">
                    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="No image">
                      <div className="absolute inset-[6.25%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                          <g id="Vector">
                            <path d={svgPaths.p15e177c0} fill="var(--fill-0, #3E3D40)" />
                            <path d={svgPaths.pfb0e800} fill="var(--fill-0, #3E3D40)" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Roboto:Bold',sans-serif] font-['Roboto:Regular',sans-serif] font-bold font-normal leading-[0] relative shrink-0 text-[#939598] text-[0px] text-center" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <span className="leading-[28px] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      No attachments for this case yet.
                      <br aria-hidden="true" />
                    </span>
                    <span className="leading-[24px] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {`You can share external-related files, including images, videos and X-rays, with your lab. `}
                      <br aria-hidden="true" />
                      To upload files use MyiTero.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}