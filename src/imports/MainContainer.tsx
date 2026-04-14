import svgPaths from "./svg-gde9wg5j5i";

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-center text-white w-[207px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dentures
      </p>
    </div>
  );
}

function Procedure() {
  return (
    <div className="bg-[#009ace] content-stretch flex h-[88px] items-center justify-center px-[20px] py-[17px] relative rounded-[6px] shrink-0 w-[302px]" data-name="Procedure">
      <Frame15 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Chevron down">
          <path d={svgPaths.p1312c100} fill="var(--fill-0, #696A6D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[40px]">
      <ChevronDown />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Send to
      </p>
      <Frame />
    </div>
  );
}

function RxElementsRecordsNotesLayers() {
  return (
    <div className="basis-0 bg-white grow h-[88px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Rx elements (records, notes, layers)">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[28px] py-[24px] relative size-full">
          <Frame8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Calendar">
          <path d={svgPaths.p27287472} fill="var(--fill-0, #696A6D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[40px]">
      <Calendar />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Due date
      </p>
      <Frame1 />
    </div>
  );
}

function RxElementsRecordsNotesLayers1() {
  return (
    <div className="basis-0 bg-white grow h-[88px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Rx elements (records, notes, layers)">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[28px] py-[24px] relative size-full">
          <Frame9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
      <Procedure />
      <RxElementsRecordsNotesLayers />
      <RxElementsRecordsNotesLayers1 />
    </div>
  );
}

function TogglePiece() {
  return (
    <div className="h-[28px] relative shrink-0 w-[36px]" data-name="Toggle / Piece">
      <div className="absolute bg-[#e0e0e0] h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px]" data-name="Track" />
      <div className="absolute bg-[#b0b1b3] left-0 rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%]" data-name="Toggle" />
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Toggle">
      <TogglePiece />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Upper denture
      </p>
    </div>
  );
}

function TogglePiece1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[36px]" data-name="Toggle / Piece">
      <div className="absolute bg-[#e0e0e0] h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px]" data-name="Track" />
      <div className="absolute bg-[#b0b1b3] left-0 rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%]" data-name="Toggle" />
    </div>
  );
}

function Toggle1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Toggle">
      <TogglePiece1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lower denture
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[60px] items-center relative shrink-0">
      <Toggle />
      <Toggle1 />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[47px] items-end justify-center relative shrink-0 w-[868px]" data-name="Dropdown">
      <Frame4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black w-[649px]" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dentures
      </p>
      <Dropdown />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[88px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-0 relative size-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Type
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text />
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

function Field() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content />
      <CaretDown />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <Field />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Stage
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text1 />
    </div>
  );
}

function CaretDown1() {
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

function Field1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content1 />
      <CaretDown1 />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <Field1 />
    </div>
  );
}

function FieldRow() {
  return (
    <div className="content-stretch flex gap-[48px] h-[78px] items-center pb-0 pt-[10px] px-0 relative shrink-0 w-full" data-name="Field row">
      <Dropdown1 />
      <Dropdown2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mould
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text2 />
    </div>
  );
}

function CaretDown2() {
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
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content2 />
      <CaretDown2 />
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <Field2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Shade system
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text3 />
    </div>
  );
}

function CaretDown3() {
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

function Field3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content3 />
      <CaretDown3 />
    </div>
  );
}

function Dropdown4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <Field3 />
    </div>
  );
}

function FieldRow1() {
  return (
    <div className="content-stretch flex gap-[48px] h-[78px] items-center pb-0 pt-[10px] px-0 relative shrink-0 w-full" data-name="Field row">
      <Dropdown3 />
      <Dropdown4 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Teeth shade
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text4 />
    </div>
  );
}

function CaretDown4() {
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

function Field4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content4 />
      <CaretDown4 />
    </div>
  );
}

function Dropdown5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <Field4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gingival
      </p>
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text5 />
    </div>
  );
}

function CaretDown5() {
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

function Field5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content5 />
      <CaretDown5 />
    </div>
  );
}

function Dropdown6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <Field5 />
    </div>
  );
}

function FieldRow2() {
  return (
    <div className="content-stretch flex gap-[48px] h-[78px] items-center pb-0 pt-[10px] px-0 relative shrink-0 w-full" data-name="Field row">
      <Dropdown5 />
      <Dropdown6 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-0 relative w-full">
          <FieldRow />
          <FieldRow1 />
          <FieldRow2 />
        </div>
      </div>
    </div>
  );
}

function Procedures() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Procedures">
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function DenturesField() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[1860px]" data-name="Dentures field">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Procedures />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TogglePiece2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[36px]" data-name="Toggle / Piece">
      <div className="absolute bg-[#a6e2f9] h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px]" data-name="Track" />
      <div className="absolute bg-[#408dc1] left-[16px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%]" data-name="Toggle" />
    </div>
  );
}

function Toggle2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Toggle">
      <TogglePiece2 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        NIRI Capture
      </p>
    </div>
  );
}

function TogglePiece3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[36px]" data-name="Toggle / Piece">
      <div className="absolute bg-[#a6e2f9] h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px]" data-name="Track" />
      <div className="absolute bg-[#408dc1] left-[16px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%]" data-name="Toggle" />
    </div>
  );
}

function Toggle3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Toggle">
      <TogglePiece3 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        New Sleeve Attached
      </p>
    </div>
  );
}

function TogglePiece4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[36px]" data-name="Toggle / Piece">
      <div className="absolute bg-[#e0e0e0] h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px]" data-name="Track" />
      <div className="absolute bg-[#b0b1b3] left-0 rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%]" data-name="Toggle" />
    </div>
  );
}

function Toggle4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Toggle">
      <TogglePiece4 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Copy denture
      </p>
    </div>
  );
}

function TogglePiece5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[36px]" data-name="Toggle / Piece">
      <div className="absolute bg-[#e0e0e0] h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px]" data-name="Track" />
      <div className="absolute bg-[#b0b1b3] left-0 rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%]" data-name="Toggle" />
    </div>
  );
}

function Toggle5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Toggle">
      <TogglePiece5 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Edentulous
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full">
      <Toggle2 />
      <Toggle3 />
      <Toggle4 />
      <Toggle5 />
    </div>
  );
}

function Rx() {
  return (
    <div className="bg-white h-[87px] relative rounded-[8px] shrink-0 w-full" data-name="Rx">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative size-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

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

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative size-[40px]">
      <div className="flex items-center justify-center relative shrink-0 size-[40px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ChevronUp />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0 size-[40px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Attachments
      </p>
      <Frame13 />
    </div>
  );
}

function RxElementsRecordsNotesLayers2() {
  return (
    <div className="bg-white relative shrink-0 w-[920px]" data-name="Rx elements (records, notes, layers)">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[28px] py-[24px] relative rounded-[inherit] w-full">
        <Frame10 />
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

function Frame7() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[32px] relative size-full">
          <Frame7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function RxElementsRecordsNotesLayers3() {
  return (
    <div className="basis-0 bg-white grow h-[348px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Rx elements (records, notes, layers)">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <RxElementsRecordsNotesLayers2 />
        <Frame17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ChevronUp1() {
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

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[40px]">
      <ChevronUp1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Notes
      </p>
      <Frame3 />
    </div>
  );
}

function RxElementsRecordsNotesLayers4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Rx elements (records, notes, layers)">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[28px] py-[24px] relative w-full">
          <Frame11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame12() {
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

function Frame16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function RxElementsRecordsNotesLayers5() {
  return (
    <div className="basis-0 bg-white grow h-[348px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Rx elements (records, notes, layers)">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <RxElementsRecordsNotesLayers4 />
        <Frame16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[1860px]" data-name="Content Container">
      <RxElementsRecordsNotesLayers3 />
      <RxElementsRecordsNotesLayers5 />
    </div>
  );
}

export default function MainContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative size-full" data-name="Main Container">
      <Header />
      <DenturesField />
      <Rx />
      <ContentContainer />
    </div>
  );
}