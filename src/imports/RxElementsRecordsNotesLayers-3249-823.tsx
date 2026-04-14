export default function RxElementsRecordsNotesLayers() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Rx elements (records, notes, layers)">
      <div className="content-stretch flex items-center overflow-clip pb-[8px] px-[24px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Dropdown">
          <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  Send to
                </p>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Caret down">
              <div className="absolute bottom-[31.25%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
                  <path d="M16 0L8 10L0 0H16Z" fill="var(--fill-0, #80D6F7)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}