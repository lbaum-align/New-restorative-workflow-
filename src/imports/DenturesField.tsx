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

function Frame() {
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
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black w-[649px]" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dentures
      </p>
      <Dropdown />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[88px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-0 relative size-full">
          <Frame1 />
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

function Frame3() {
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
      <Frame2 />
      <Frame3 />
    </div>
  );
}

export default function DenturesField() {
  return (
    <div className="relative rounded-[8px] size-full" data-name="Dentures field">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Procedures />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}