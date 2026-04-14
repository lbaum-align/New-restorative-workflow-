function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Chevron down"></g>
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

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        Appliance options
      </p>
      <Frame />
    </div>
  );
}

function RecordsNotes() {
  return (
    <div className="bg-white h-[88px] relative shrink-0 w-full" data-name="Records + Notes">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[28px] py-[24px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center mb-[-4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Appliance type
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center mb-[-4px] relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Night Guard
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0" data-name="Content">
      <Label />
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

function Dropdown() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[611px]" data-name="Dropdown">
      <Field />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Type
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

function Dropdown1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[611px]" data-name="Dropdown">
      <Field1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[53px] items-center relative shrink-0">
      <Dropdown />
      <Dropdown1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start leading-[16px] relative shrink-0 text-[12px] text-nowrap w-[180px]" data-name="Label">
      <p className="relative shrink-0 text-[rgba(0,0,0,0.63)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Arch to treat
      </p>
      <p className="opacity-0 relative shrink-0 text-[#d43f58]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
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
        Upper arch
      </p>
    </div>
  );
}

function TogglePiece1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[36px]" data-name="Toggle / Piece">
      <div className="absolute bg-[#a6e2f9] h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px]" data-name="Track" />
      <div className="absolute bg-[#408dc1] left-[16px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%]" data-name="Toggle" />
    </div>
  );
}

function Toggle1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Toggle">
      <TogglePiece1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lower arch
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0">
      <Toggle />
      <Toggle1 />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-[385px]" data-name="Dropdown">
      <Label1 />
      <Frame1 />
    </div>
  );
}

function FieldRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="Field row">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between p-[24px] relative w-full">
          <Frame3 />
          <Dropdown2 />
        </div>
      </div>
    </div>
  );
}

export default function ApplianceOptionsVariable() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Appliance options variable 2">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <RecordsNotes />
        <FieldRow />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}