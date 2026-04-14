import svgPaths from "./svg-uj97rhhi79";

function ChevronUp() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Chevron up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Chevron up">
          <path d={svgPaths.p4978c00} fill="var(--fill-0, #696A6D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[40px]">
      <ChevronUp />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Notes
      </p>
      <Frame />
    </div>
  );
}

function RxElementsRecordsNotesLayers() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Rx elements (records, notes, layers)">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[28px] py-[24px] relative w-full">
          <Frame2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Add your note here...
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

export default function RxElementsRecordsNotesLayers1() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Rx elements (records, notes, layers)">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <RxElementsRecordsNotesLayers />
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}