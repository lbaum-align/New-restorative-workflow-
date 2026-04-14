import svgPaths from "./svg-omx21ki433";

function Text() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Mina `}</p>
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

function Field() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content />
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text input">
      <Field />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Young `}</p>
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

function Field1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text input">
      <Field1 />
    </div>
  );
}

function Fields() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Fields">
      <TextInput />
      <TextInput1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gender at birth
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
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content2 />
      <CaretDown />
    </div>
  );
}

function Dropdown() {
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
        Date of birth
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

function Calendar() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Calendar">
          <path d={svgPaths.p27287472} fill="var(--fill-0, #3E3D40)" id="Vector" />
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
      <Calendar />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <Field3 />
    </div>
  );
}

function Fileds() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Fileds">
      <Dropdown />
      <Dropdown1 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chart number
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

function Field4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content4 />
      <CaretDown1 />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[792px]" data-name="Dropdown">
      <Field4 />
    </div>
  );
}

function Fields1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Fields">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start px-[20px] py-0 relative w-full">
          <Fields />
          <Fileds />
          <Dropdown2 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[24px] h-[261px] items-end justify-center relative shrink-0 w-full" data-name="Container">
      <Fields1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white h-[367px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between px-[40px] py-[28px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

export default function FormContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-start relative size-full" data-name="Form Container">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.93)] w-full" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create a new patient
      </p>
      <Container1 />
    </div>
  );
}