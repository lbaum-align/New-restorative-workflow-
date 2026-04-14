import svgPaths from "./svg-audsipxixy";

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[52px]" data-name="Chevron left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
        <g id="Chevron left" />
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <ChevronLeft />
    </div>
  );
}

function Account() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Account">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Account">
          <rect fill="var(--fill-0, #F0F0F0)" height="80" rx="40" width="80" />
          <g id="Vector">
            <path d={svgPaths.p3d412d80} fill="var(--fill-0, #939598)" />
            <path d={svgPaths.p3de62400} fill="var(--fill-0, #939598)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <p className="col-1 font-['Roboto:Medium',sans-serif] font-medium leading-[40px] ml-0 mt-0 relative row-1 text-[32px] text-black w-[189px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Mina Young
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#696a6d] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        14129123
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[189px]">
      <Group />
      <Frame2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Account />
      <Frame3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame8 />
      <Frame10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <p className="relative shrink-0 text-[#696a6d]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Age
      </p>
      <p className="relative shrink-0 text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        25 years old
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <p className="relative shrink-0 text-[#696a6d]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Gender at birth
      </p>
      <p className="relative shrink-0 text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Female
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <p className="relative shrink-0 text-[#696a6d]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Last scan
      </p>
      <p className="relative shrink-0 text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Jan 15, 2025
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[67px] items-center leading-[28px] relative shrink-0 text-[18px]">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
      <Frame11 />
      <Frame7 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Doctor Name | 12367854
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[200px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-w-full relative shrink-0 text-[#696a6d] text-[18px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Treated by:
      </p>
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[60px] h-full items-center relative shrink-0">
      <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-90">
          <div className="h-full relative w-[80px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 1">
                <line id="Line 1144" stroke="var(--stroke-0, #E0E0E0)" x2="80" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame18 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[60px] h-full items-center relative shrink-0">
      <Frame12 />
      <Frame19 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p16b96000} fill="var(--fill-0, #0067AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[22px] relative rounded-[4px] shrink-0 size-[64px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[4px] pr-[40px] py-[24px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Frame21 />
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center mb-[-4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['Avenir:Medium',sans-serif] leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis">First name</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center mb-[-4px] relative shrink-0 w-full" data-name="Text">
      <p className="font-['Avenir:Roman',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3e3d40] text-[18px]">Mina</p>
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

function Label1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center mb-[-4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['Avenir:Medium',sans-serif] leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis">Last name</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center mb-[-4px] relative shrink-0 w-full" data-name="Text">
      <p className="font-['Avenir:Roman',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3e3d40] text-[18px]">Young</p>
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
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#0067ac] left-1/2 rounded-[12px] size-[8px] top-1/2" data-name="Check" />
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

function Frame20() {
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
        Gender
      </p>
      <Frame20 />
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

function Label2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center mb-[-4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Date of birth
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center mb-[-4px] relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Jan 15, 2025
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px pb-[4px] relative" data-name="Content">
      <Label2 />
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

function Label3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center mb-[-4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Chart number
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-center mb-[-4px] relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        14129123
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px pb-[4px] relative" data-name="Content">
      <Label3 />
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[884px]" data-name="Dropdown">
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

function Frame13() {
  return (
    <div className="content-stretch flex gap-[24px] h-[261px] items-end justify-center relative shrink-0 w-full">
      <Fields />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex h-[64px] items-center justify-center min-w-[120px] px-[24px] py-[22px] relative rounded-[4px] shrink-0 w-[223px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b0b1b3] text-[0px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[32px] text-[20px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Confirm
        </p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-end relative shrink-0 w-full">
      <Button1 />
    </div>
  );
}

function Icon1() {
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

function Button2() {
  return (
    <div className="bg-[#bfeafb] content-stretch flex items-center justify-center px-[20px] py-[22px] relative rounded-[4px] shrink-0 size-[48px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon1 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[0px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Clear
        </p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-[1688px] top-[24px]">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-end pb-[40px] pt-[60px] px-[56px] relative w-full">
          <Frame13 />
          <Frame15 />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

export default function RxPatientHeaderUpdated() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_2px_8px_0px_rgba(0,0,0,0.15)] size-full" data-name="Rx / Patient header - updated">
      <Frame14 />
      <Frame9 />
    </div>
  );
}