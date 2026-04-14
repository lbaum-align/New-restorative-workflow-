export default function Badge() {
  return (
    <div className="bg-white relative rounded-[32px] size-full" data-name="Badge">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[16px] py-[4px] relative size-full">
          <div className="bg-[#c55bff] relative rounded-[100px] shrink-0 size-[20px] z-[3]" data-name="Leading icon">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Vector" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-center text-white whitespace-nowrap z-[2]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="font-['Avenir:Heavy',sans-serif] leading-[28px] not-italic text-[#3e3d40] text-[18px]">Crown</p>
          </div>
        </div>
      </div>
    </div>
  );
}