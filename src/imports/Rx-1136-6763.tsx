import svgPaths from "./svg-8irmhn753h";

interface RxProps {
  selectedTeeth?: string[];
}

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
        <p className="css-ew64yg font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic text-[14px]">Implant based</p>
      </div>
    </div>
  );
}

function Frame({ selectedTeeth }: { selectedTeeth?: string[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tooth {selectedTeeth?.join(',') || '46,47'}
      </p>
      <Badge />
    </div>
  );
}

function Frame7({ selectedTeeth }: { selectedTeeth?: string[] }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame selectedTeeth={selectedTeeth} />
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

function Frame5() {
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
        <g clipPath="url(#clip0_1136_6810)" id="Open in new">
          <g id="Vector" />
          <path d={svgPaths.pdf52780} fill="var(--fill-0, #3E3D40)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1136_6810">
            <rect fill="white" height="60" width="60" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame5 />
      <OpenInNew />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame3({ selectedTeeth }: { selectedTeeth?: string[] }) {
  return (
    <div className="h-[64px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[24px] pr-[8px] relative size-full">
          <Frame7 selectedTeeth={selectedTeeth} />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame1({ selectedTeeth }: { selectedTeeth?: string[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center pt-[24px] relative shrink-0 w-full">
      <Frame3 selectedTeeth={selectedTeeth} />
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
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.09)] border-b border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#939598] text-[18px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div aria-hidden="true" className="absolute border-[#009ace] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#3e3d40] text-[18px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Library
      </p>
    </div>
  );
}

function Component02Group() {
  return (
    <div className="content-stretch flex items-start pb-[24px] pl-[24px] pt-[8px] relative shrink-0" data-name="02 Group">
      <Component01Item />
      <Component01Item1 />
      <Component01Item2 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center mb-[-4px] relative shrink-0 w-full" data-name="Label">
      <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Implant manufacturer
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center mb-[-4px] relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Straumann® Group
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px pb-[4px] relative" data-name="Content">
      <Label />
      <Text />
    </div>
  );
}

function MoreHorizontal() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="More horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="More horizontal">
          <g id="Vector">
            <path d={svgPaths.p20a87f00} fill="#80D6F7" />
            <path d={svgPaths.p17495380} fill="#80D6F7" />
            <path d={svgPaths.p19a50800} fill="#80D6F7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content />
      <MoreHorizontal />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown">
      <Field />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center mb-[-4px] relative shrink-0 w-full" data-name="Label">
      <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Connection
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center mb-[-4px] relative shrink-0 w-full" data-name="Text">
      <p className="css-g0mm18 flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px overflow-hidden relative text-[#3e3d40] text-[18px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Connection Hex of Trabecular Metal™ and Tapered Screw-Vent®
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px pb-[4px] relative" data-name="Content">
      <Label1 />
      <Text1 />
    </div>
  );
}

function MoreHorizontal1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="More horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="More horizontal">
          <g id="Vector">
            <path d={svgPaths.p20a87f00} fill="#80D6F7" />
            <path d={svgPaths.p17495380} fill="#80D6F7" />
            <path d={svgPaths.p19a50800} fill="#80D6F7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content1 />
      <MoreHorizontal1 />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown">
      <Field1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center mb-[-4px] relative shrink-0 w-full" data-name="Label">
      <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Platform
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center mb-[-4px] relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.9 mm
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px pb-[4px] relative" data-name="Content">
      <Label2 />
      <Text2 />
    </div>
  );
}

function CaretDown() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Caret down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Caret down">
          <path d="M24 12L16 22L8 12H24Z" fill="var(--fill-0, #80D6F7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content2 />
      <CaretDown />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown">
      <Field2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center mb-[-4px] relative shrink-0 w-full" data-name="Label">
      <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Scan body type
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center mb-[-4px] relative shrink-0 w-full" data-name="Text">
      <p className="css-g0mm18 flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px overflow-hidden relative text-[#3e3d40] text-[18px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        SBYSBSC ALLONUS Tech Co., Ltd
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px pb-[4px] relative" data-name="Content">
      <Label3 />
      <Text3 />
    </div>
  );
}

function MoreHorizontal2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="More horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="More horizontal">
          <g id="Vector">
            <path d={svgPaths.p20a87f00} fill="#80D6F7" />
            <path d={svgPaths.p17495380} fill="#80D6F7" />
            <path d={svgPaths.p19a50800} fill="#80D6F7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Field3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content3 />
      <MoreHorizontal2 />
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown">
      <Field3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[16px] relative w-full">
        <Dropdown />
        <Dropdown1 />
        <Dropdown2 />
        <Dropdown3 />
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
    <div className="content-stretch flex gap-[12px] h-[48px] items-center justify-center min-w-[108px] pr-[20px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <AddEmpty />
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[0px] text-center tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[28px] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Add restoration & crown info`}</p>
      </div>
    </div>
  );
}

function MandatoryFieldsDetails() {
  return (
    <div className="relative shrink-0 w-full" data-name="Mandatory fields - details">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] relative w-full">
        <Frame2 />
        <Button />
      </div>
    </div>
  );
}

function Frame4({ selectedTeeth }: { selectedTeeth?: string[] }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-y-auto pb-[16px] relative w-full">
      <Frame1 selectedTeeth={selectedTeeth} />
      <Component02Group />
      <MandatoryFieldsDetails />
    </div>
  );
}

export default function Rx({ selectedTeeth }: RxProps) {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tr-[8px] size-full" data-name="Rx">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame4 selectedTeeth={selectedTeeth} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
    </div>
  );
}