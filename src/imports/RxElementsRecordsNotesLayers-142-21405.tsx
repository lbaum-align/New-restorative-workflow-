import svgPaths from "./svg-hvn2vjvjox";

function ChevronUp() {
  return (
    <div className="relative size-[40px]" data-name="Chevron up">
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
    <div className="content-stretch flex items-center relative size-[40px]">
      <div className="flex items-center justify-center relative shrink-0 size-[40px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ChevronUp />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0 size-[40px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Attachments
      </p>
      <Frame4 />
    </div>
  );
}

function RxElementsRecordsNotesLayers() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Rx elements (records, notes, layers)">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[28px] py-[24px] relative w-full">
          <Frame3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function AddEmpty() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Add empty">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Add empty">
          <path d={svgPaths.p373ac80} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex gap-[16px] h-[64px] items-center justify-center min-w-[120px] px-[24px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <AddEmpty />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Add from Patient Gallery</p>
      </div>
    </div>
  );
}

function QrCode() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="QR code">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="QR code">
          <g id="Vector">
            <path d="M26 6H22V10H26V6Z" fill="var(--fill-0, #3E3D40)" />
            <path clipRule="evenodd" d={svgPaths.p15aff080} fill="var(--fill-0, #3E3D40)" fillRule="evenodd" />
            <path d="M10 22H6V26H10V22Z" fill="var(--fill-0, #3E3D40)" />
            <path clipRule="evenodd" d={svgPaths.p3b03f480} fill="var(--fill-0, #3E3D40)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2c1b6100} fill="var(--fill-0, #3E3D40)" fillRule="evenodd" />
            <path d="M10 6H6V10H10V6Z" fill="var(--fill-0, #3E3D40)" />
            <path clipRule="evenodd" d={svgPaths.p31ed2f00} fill="var(--fill-0, #3E3D40)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex gap-[16px] h-[64px] items-center justify-center min-w-[120px] px-[24px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <QrCode />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Upload with code</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[32px] relative size-full">
          <Frame2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[260px] relative shrink-0 w-full">
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
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}