import svgPaths from "./svg-k51970xeub";

function Text() {
  return (
    <div className="content-stretch flex gap-[4px] items-center not-italic relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto',sans-serif] leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]">First name</p>
      <p className="font-['Roboto',sans-serif] leading-[24px] relative shrink-0 text-[#cb2f36] text-[14px]">*</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
      <Text />
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content />
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text input">
      <Field />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center not-italic relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto',sans-serif] leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]">Last name</p>
      <p className="font-['Roboto',sans-serif] leading-[24px] relative shrink-0 text-[#cb2f36] text-[14px]">*</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
      <Text1 />
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text input">
      <Field1 />
    </div>
  );
}

function Fields1() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Fields">
      <TextInput />
      <TextInput1 />
    </div>
  );
}

function RadioButtonPiece() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[28px]" data-name="Radio button / Piece">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#939598] border-solid left-1/2 rounded-[20px] size-[20px] top-1/2" data-name="Radiobutton" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Male `}</p>
    </div>
  );
}

function RadioButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-start py-[4px] relative shrink-0" data-name="Radio button">
      <RadioButtonPiece />
      <Frame />
    </div>
  );
}

function RadioButtonPiece1() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[28px]" data-name="Radio button / Piece">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#939598] border-solid left-1/2 rounded-[20px] size-[20px] top-1/2" data-name="Radiobutton" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Female
      </p>
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start py-[4px] relative shrink-0" data-name="Radio button">
      <RadioButtonPiece1 />
      <Frame1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-center pr-[30px] relative shrink-0">
      <RadioButton />
      <RadioButton1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Gender at birth
      </p>
      <Frame6 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
      <Text2 />
    </div>
  );
}

function Field2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content2 />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text input">
      <Field2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Date of birth
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
      <Text3 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Calendar">
          <path d={svgPaths.p27287472} fill="var(--fill-0, #80D6F7)" id="Vector" />
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
      <Calendar />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Dropdown">
      <Field3 />
    </div>
  );
}

function Fileds() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Fileds">
      <TextInput2 />
      <Dropdown />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Chart number
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
      <Text4 />
    </div>
  );
}

function Field4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content4 />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[840px]" data-name="Dropdown">
      <Field4 />
    </div>
  );
}

function Fileds1() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Fileds">
      <Dropdown1 />
    </div>
  );
}

function Fields() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative" data-name="Fields">
      <Fields1 />
      <Fileds />
      <Fileds1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] h-[261px] items-end justify-center relative shrink-0 w-full">
      <Fields />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex h-[64px] items-center justify-center min-w-[120px] px-[24px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b0b1b3] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[32px]">Create</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
      <Button />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p32470e70} fill="var(--fill-0, #0067AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#bfeafb] content-stretch flex items-center justify-center px-[20px] py-[22px] relative rounded-[4px] shrink-0 size-[48px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Clear</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-[1600px] top-[20px]">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-end pb-[40px] pt-[60px] px-[56px] relative w-full">
          <Frame3 />
          <Frame4 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function RxPatientHeaderUpdated() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Rx / Patient header - updated">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative size-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.93)] w-full whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Patient details
      </p>
      <RxPatientHeaderUpdated />
    </div>
  );
}