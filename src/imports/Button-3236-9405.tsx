function Button1() {
  return (
    <div className="bg-[#bfeafb] flex-[1_0_0] h-[48px] min-h-px min-w-[108px] mr-[-1px] relative" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[20px] py-[22px] relative size-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[28px]">Tooth Chart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex h-[48px] items-center justify-center min-w-[108px] mr-[-1px] px-[20px] py-[22px] relative shrink-0 w-[152.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Table View</p>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="content-stretch flex items-start pl-[8px] pr-[9px] py-[8px] relative size-full" data-name="Button">
      <Button1 />
      <Button2 />
    </div>
  );
}