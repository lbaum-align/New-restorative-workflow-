export default function RxElementsRecordsNotesLayers() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Rx elements (records, notes, layers)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center overflow-clip px-[24px] relative size-full">
          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Dropdown">
            <div className="content-stretch flex flex-col items-start relative w-full">
              <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
                <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
                    <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                      Send to
                    </p>
                    <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#cb2f36] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                      *
                    </p>
                  </div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Caret down">
                  <div className="absolute bottom-[31.25%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
                      <path d="M16 0L8 10L0 0H16Z" fill="var(--fill-0, #80D6F7)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden relative shrink-0 text-[#cb2f36] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Required information is missing
              </p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f35] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}