import svgPaths from "./svg-kz6txyg14p";

function Frame21() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[24px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[30px]">Details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecordOutline() {
  return (
    <div className="relative shrink-0 size-[16px] z-[3]" data-name="Record outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Record outline">
          <rect fill="var(--fill-0, white)" height="14" rx="7" width="14" x="1" y="1" />
          <rect height="14" rx="7" stroke="var(--stroke-0, #FFB32D)" strokeWidth="2" width="14" x="1" y="1" />
          <g id="Vector"></g>
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#ffb32d] content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] py-0 relative rounded-[32px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(62,61,64,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <RecordOutline />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white z-[2]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic text-[14px]">Veneer</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tooth 11,21
      </p>
      <Badge />
    </div>
  );
}

function Delete() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Delete">
          <g id="Shape">
            <path d="M17.5 15H15V30H17.5V15Z" fill="#3E3D40" />
            <path d="M25 15H22.5V30H25V15Z" fill="#3E3D40" />
            <path d={svgPaths.p2b381a00} fill="#3E3D40" />
            <path d="M25 2.5H15V5H25V2.5Z" fill="#3E3D40" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[60px]">
      <Delete />
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Edit">
          <g id="Vector">
            <path d="M37.5 32.5H2.5V35H37.5V32.5Z" fill="black" />
            <path d={svgPaths.p23db7b00} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 relative shrink-0 size-[60px]">
      <Edit />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex h-[60px] items-center relative shrink-0 w-[136px]">
      <Frame23 />
      <Frame22 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame24 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame4 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame />
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start px-0 py-[16px] relative shrink-0 w-full">
      <Frame15 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#696a6d] text-[18px] w-[392px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`PFM/PFZ, Ceramic: Zirconia, Vita Lumin, A2 `}</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start pl-[24px] pr-0 py-0 relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
      <Frame18 />
      <div className="h-0 relative shrink-0 w-[506px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 506 1">
            <line id="Line 1139" stroke="var(--stroke-0, #E0E0E0)" x2="506" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RecordOutline1() {
  return (
    <div className="relative shrink-0 size-[16px] z-[3]" data-name="Record outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Record outline">
          <rect fill="var(--fill-0, white)" height="14" rx="7" width="14" x="1" y="1" />
          <rect height="14" rx="7" stroke="var(--stroke-0, #ED6464)" strokeWidth="2" width="14" x="1" y="1" />
          <g id="Vector"></g>
        </g>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#ed6464] content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] py-0 relative rounded-[32px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(62,61,64,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <RecordOutline1 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white z-[2]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic text-[14px]">Implant based</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tooth 12
      </p>
      <Badge1 />
    </div>
  );
}

function Delete1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Delete">
          <g id="Shape">
            <path d="M17.5 15H15V30H17.5V15Z" fill="#3E3D40" />
            <path d="M25 15H22.5V30H25V15Z" fill="#3E3D40" />
            <path d={svgPaths.p2b381a00} fill="#3E3D40" />
            <path d="M25 2.5H15V5H25V2.5Z" fill="#3E3D40" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[60px]">
      <Delete1 />
    </div>
  );
}

function Edit1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Edit">
          <g id="Vector">
            <path d="M37.5 32.5H2.5V35H37.5V32.5Z" fill="black" />
            <path d={svgPaths.p23db7b00} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 relative shrink-0 size-[60px]">
      <Edit1 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex h-[60px] items-center relative shrink-0 w-[136px]">
      <Frame25 />
      <Frame27 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame28 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame9 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame3 />
      <Frame5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start px-0 py-[16px] relative shrink-0 w-full">
      <Frame19 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#696a6d] text-[18px] w-[353px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Straumann® Group | Hex of Trabecular Metal™ and Tapered Screw-Vent® 2.9 mm
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[24px] pr-0 py-0 relative w-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function RecordOutline2() {
  return (
    <div className="relative shrink-0 size-[16px] z-[3]" data-name="Record outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Record outline">
          <rect fill="var(--fill-0, white)" height="14" rx="7" width="14" x="1" y="1" />
          <rect height="14" rx="7" stroke="var(--stroke-0, #C55BFF)" strokeWidth="2" width="14" x="1" y="1" />
          <g id="Vector"></g>
        </g>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#c55bff] content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] py-0 relative rounded-[32px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(62,61,64,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <RecordOutline2 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white z-[2]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic text-[14px]">Crown</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tooth 17,48
      </p>
      <Badge2 />
    </div>
  );
}

function Delete2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Delete">
          <g id="Shape">
            <path d="M17.5 15H15V30H17.5V15Z" fill="#3E3D40" />
            <path d="M25 15H22.5V30H25V15Z" fill="#3E3D40" />
            <path d={svgPaths.p2b381a00} fill="#3E3D40" />
            <path d="M25 2.5H15V5H25V2.5Z" fill="#3E3D40" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[60px]">
      <Delete2 />
    </div>
  );
}

function Edit2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Edit">
          <g id="Vector">
            <path d="M37.5 32.5H2.5V35H37.5V32.5Z" fill="black" />
            <path d={svgPaths.p23db7b00} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 relative shrink-0 size-[60px]">
      <Edit2 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex h-[60px] items-center relative shrink-0 w-[136px]">
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame31 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame12 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame11 />
      <Frame6 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start px-0 py-[16px] relative shrink-0 w-full">
      <Frame20 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#696a6d] text-[18px] w-[392px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`PFM/PFZ, Ceramic: Zirconia, Vita Lumin, A2 `}</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[24px] pr-0 py-0 relative w-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function RxRestoMandatoryFields() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center min-h-px min-w-px overflow-x-clip overflow-y-auto pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Rx / Resto / mandatory fields">
      <Frame26 />
      <Frame16 />
      <div className="h-0 relative shrink-0 w-[506px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 506 1">
            <line id="Line 1139" stroke="var(--stroke-0, #E0E0E0)" x2="506" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame17 />
    </div>
  );
}

export default function Rx() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Rx">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame21 />
        <RxRestoMandatoryFields />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}