export default function Badge() {
  return (
    <div className="bg-[#c55bff] content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] relative rounded-[32px] size-full" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(62,61,64,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="bg-white relative rounded-[100px] shrink-0 size-[16px] z-[3]" data-name="Leading icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[6.25%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" />
            </svg>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#c55bff] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-white whitespace-nowrap z-[2]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic text-[14px]">Crown</p>
      </div>
    </div>
  );
}