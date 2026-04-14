import svgPaths from "./svg-9582p975d3";
import imgImage8 from "figma:asset/9fc98949f904edb334a67827da5dd102bb3d721a.png";

function RecordOutline() {
  return (
    <div className="relative shrink-0 size-[16px] z-[3]" data-name="Record outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Record outline">
          <rect fill="var(--fill-0, white)" height="14" rx="7" width="14" x="1" y="1" />
          <rect height="14" rx="7" stroke="var(--stroke-0, #ED6464)" strokeWidth="2" width="14" x="1" y="1" />
          <g id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#ed6464] content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] relative rounded-[32px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(62,61,64,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <RecordOutline />
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-white z-[2]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg font-['Roboto',sans-serif] leading-[24px] text-[14px]">Implant based</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tooth 46,47
      </p>
      <Badge />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame8 />
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

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[60px]">
      <Delete />
    </div>
  );
}

function OpenInNew() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Open in new">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g clipPath="url(#clip0_1126_4573)" id="Open in new">
          <g id="Vector" />
          <path d={svgPaths.pdf52780} fill="var(--fill-0, #3E3D40)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1126_4573">
            <rect fill="white" height="60" width="60" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame16 />
      <OpenInNew />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame19 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[64px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[24px] pr-[8px] relative size-full">
          <Frame18 />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center pt-[24px] relative shrink-0 w-full">
      <Frame10 />
      <div className="h-0 relative shrink-0 w-[522px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 1">
            <line id="Line 1" stroke="var(--stroke-0, #E0E0E0)" x2="522" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component01Item() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[12px] relative shrink-0" data-name="01 Item">
      <div aria-hidden="true" className="absolute border-[#009ace] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#3e3d40] text-[18px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recents
      </p>
    </div>
  );
}

function Component01Item1() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[12px] relative shrink-0" data-name="01 Item">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.09)] border-b border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#939598] text-[18px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Favorites
      </p>
    </div>
  );
}

function Component01Item2() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[12px] relative shrink-0" data-name="01 Item">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.09)] border-b border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#939598] text-[18px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Library
      </p>
    </div>
  );
}

function Component02Group() {
  return (
    <div className="content-stretch flex items-start pb-[24px] pt-[8px] relative shrink-0" data-name="02 Group">
      <Component01Item />
      <Component01Item1 />
      <Component01Item2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <p className="css-4hzbpn font-['Roboto:Bold',sans-serif] font-bold leading-[28px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-ellipsis w-full" dir="ltr" style={{ fontVariationSettings: "'wdth' 100" }}>{`Straumann® Group · 2.9 mm · BioAbutment `}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[80px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
      <Frame />
    </div>
  );
}

function ImplantBasedCard() {
  return (
    <div className="bg-[#eef9fd] relative rounded-[8px] shrink-0 w-[251px]" data-name="Implant based card">
      <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip pt-[12px] relative rounded-[inherit] w-full">
        <div className="h-[70px] relative shrink-0 w-[68px]" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
        <Frame4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <p className="css-4hzbpn font-['Roboto:Bold',sans-serif] font-bold leading-[28px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-ellipsis w-full" dir="ltr" style={{ fontVariationSettings: "'wdth' 100" }}>{`Straumann® Group · 2.9 mm · BioAbutment `}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[80px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
      <Frame1 />
    </div>
  );
}

function ImplantBasedCard1() {
  return (
    <div className="bg-[#eef9fd] relative rounded-[8px] shrink-0 w-[251px]" data-name="Implant based card">
      <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip pt-[12px] relative rounded-[inherit] w-full">
        <div className="h-[70px] relative shrink-0 w-[68px]" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <ImplantBasedCard />
      <ImplantBasedCard1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <p className="css-4hzbpn font-['Roboto:Bold',sans-serif] font-bold leading-[28px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-ellipsis w-full" dir="ltr" style={{ fontVariationSettings: "'wdth' 100" }}>{`Straumann® Group · 2.9 mm · BioAbutment `}</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[80px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
      <Frame2 />
    </div>
  );
}

function ImplantBasedCard2() {
  return (
    <div className="bg-[#eef9fd] relative rounded-[8px] shrink-0 w-[251px]" data-name="Implant based card">
      <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip pt-[12px] relative rounded-[inherit] w-full">
        <div className="h-[70px] relative shrink-0 w-[68px]" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
        <Frame6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <p className="css-4hzbpn font-['Roboto:Bold',sans-serif] font-bold leading-[28px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-ellipsis w-full" dir="ltr" style={{ fontVariationSettings: "'wdth' 100" }}>{`Straumann® Group · 2.9 mm · BioAbutment `}</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[80px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
      <Frame3 />
    </div>
  );
}

function ImplantBasedCard3() {
  return (
    <div className="bg-[#eef9fd] relative rounded-[8px] shrink-0 w-[251px]" data-name="Implant based card">
      <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip pt-[12px] relative rounded-[inherit] w-full">
        <div className="h-[70px] relative shrink-0 w-[68px]" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
        <Frame7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <ImplantBasedCard2 />
      <ImplantBasedCard3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame15 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pb-[8px] px-[24px] relative w-full">
        <Component02Group />
        <Frame13 />
      </div>
    </div>
  );
}

function AddEmpty() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add empty">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Add empty">
          <path d={svgPaths.p209700} fill="var(--fill-0, #0067AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <AddEmpty />
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[0px] text-center tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[28px] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Add restoration & crown info`}</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
      <Frame9 />
      <Frame14 />
      <Button />
    </div>
  );
}

export default function Rx() {
  return (
    <div className="bg-white relative size-full" data-name="Rx">
      <div className="content-stretch flex flex-col items-center relative size-full">
        <Frame11 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}