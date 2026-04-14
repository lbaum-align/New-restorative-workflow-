import svgPaths from "./svg-40kkir43c4";

function Frame7() {
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

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[60px]">
      <Delete />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Button />
      <Frame9 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame />
      <Frame3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start px-0 py-[16px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame8 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Specification
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

function Dropdown() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown">
      <Field />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Material
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown">
      <Field1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Shade system
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

function Dropdown2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown">
      <Field2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Body
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

function Dropdown3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown">
      <Field3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-0 relative w-full">
          <Dropdown />
          <Dropdown1 />
          <Dropdown2 />
          <Dropdown3 />
        </div>
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

function Button1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <AddEmpty />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[18px] text-center text-nowrap tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">Add additional info</p>
      </div>
    </div>
  );
}

function MandatoryFieldsDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Mandatory fields - details">
      <Frame4 />
      <Button1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[470px] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start px-[24px] py-0 relative size-full">
          <Frame1 />
          <MandatoryFieldsDetails />
        </div>
      </div>
    </div>
  );
}

export default function Rx() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Rx">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame7 />
        <Frame6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}