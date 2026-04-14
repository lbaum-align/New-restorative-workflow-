import svgPaths from "./svg-qunh97h3vu";
import imgImage8 from "figma:asset/9fc98949f904edb334a67827da5dd102bb3d721a.png";

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[16px] relative w-full">
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
          <rect height="14" rx="7" stroke="var(--stroke-0, #ED6464)" strokeWidth="2" width="14" x="1" y="1" />
          <g id="Vector"></g>
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#ed6464] content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] py-0 relative rounded-[32px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(62,61,64,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <RecordOutline />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white z-[2]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic text-[14px]">Implant based</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tooth 12
      </p>
      <Badge />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] text-center text-nowrap tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">Show items</p>
      </div>
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

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[60px]">
      <Delete />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Button />
      <Frame21 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame8 />
      <Frame11 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start pl-[24px] pr-0 py-[16px] relative w-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[0px] text-center text-nowrap tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-underline-position:from-font] decoration-solid leading-[28px] text-[18px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
          Select from library
        </p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[24px] pr-[8px] py-0 relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black text-nowrap" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
            Select from your recents
          </p>
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[7.429px] py-0 relative size-full">
          <p className="-webkit-box basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] w-full" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
            SBYSBSC ALLONUS Tech Co., Ltd | BioAbutment
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[5.943px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.743px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame />
    </div>
  );
}

function Component3DPreviewFromExocadImplantLibraryProjectVariant() {
  return (
    <div className="basis-0 bg-[#eef9fd] grow h-[180px] min-h-px min-w-px relative rounded-[7.429px] shrink-0" data-name="3D preview (from exocad implant library project)/Variant6">
      <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip pb-0 pt-[12px] px-0 relative rounded-[inherit] size-full">
        <div className="h-[65.275px] relative shrink-0 w-[63.886px]" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
        <Frame4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-[0.743px] border-solid inset-0 pointer-events-none rounded-[7.429px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[7.429px] py-0 relative size-full">
          <p className="basis-0 font-['Avenir:Roman',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#3e3d40] text-[18px] w-full" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
            EFF9205.28A.P.CJ EFF Dental Components | EFF Dental components
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[5.943px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.743px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame1 />
    </div>
  );
}

function Component3DPreviewFromExocadImplantLibraryProjectVariant1() {
  return (
    <div className="basis-0 bg-[#eef9fd] grow h-[180px] min-h-px min-w-px relative rounded-[7.429px] shrink-0" data-name="3D preview (from exocad implant library project)/Variant6">
      <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip pb-0 pt-[12px] px-0 relative rounded-[inherit] size-full">
        <div className="h-[65.275px] relative shrink-0 w-[63.886px]" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-[0.743px] border-solid inset-0 pointer-events-none rounded-[7.429px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Component3DPreviewFromExocadImplantLibraryProjectVariant />
      <Component3DPreviewFromExocadImplantLibraryProjectVariant1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[7.429px] py-0 relative size-full">
          <p className="-webkit-box basis-0 font-['Avenir:Roman',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] w-full" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
            SBLN I.B3 Iphysio | iphysio®
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[5.943px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.743px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame2 />
    </div>
  );
}

function Component3DPreviewFromExocadImplantLibraryProjectVariant2() {
  return (
    <div className="basis-0 bg-[#eef9fd] grow h-[180px] min-h-px min-w-px relative rounded-[7.429px] shrink-0" data-name="3D preview (from exocad implant library project)/Variant6">
      <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip pb-0 pt-[12px] px-0 relative rounded-[inherit] size-full">
        <div className="h-[65.275px] relative shrink-0 w-[63.886px]" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
        <Frame6 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-[0.743px] border-solid inset-0 pointer-events-none rounded-[7.429px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[7.429px] py-0 relative size-full">
          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#3e3d40] text-[18px] w-full" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
            L 1420-SB Medentika® GmbH | Medentika® | Straumann®
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[5.943px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.743px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame3 />
    </div>
  );
}

function Component3DPreviewFromExocadImplantLibraryProjectVariant3() {
  return (
    <div className="basis-0 bg-[#eef9fd] grow h-[180px] min-h-px min-w-px relative rounded-[7.429px] shrink-0" data-name="3D preview (from exocad implant library project)/Variant6">
      <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip pb-0 pt-[12px] px-0 relative rounded-[inherit] size-full">
        <div className="h-[65.275px] relative shrink-0 w-[63.886px]" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
        <Frame7 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-[0.743px] border-solid inset-0 pointer-events-none rounded-[7.429px]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Component3DPreviewFromExocadImplantLibraryProjectVariant2 />
      <Component3DPreviewFromExocadImplantLibraryProjectVariant3 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-0 relative w-full">
          <Frame14 />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame17 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full">
      <Frame9 />
      <Frame18 />
    </div>
  );
}

export default function Rx() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Rx">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame19 />
        <Frame13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}