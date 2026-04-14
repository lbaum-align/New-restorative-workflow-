function Frame() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-16px] relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#3e3d40] text-[24px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-g0mm18 leading-[30px] overflow-hidden">Additional information (optional)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleBar() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Title bar">
      <div className="content-stretch flex items-center overflow-clip pr-[16px] relative rounded-[inherit] size-full">
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextContent() {
  return <div className="bg-white content-stretch flex items-start overflow-clip py-[16px] shrink-0 w-full" data-name="Text content" />;
}

function Filler() {
  return <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px" data-name="Filler" />;
}

function Button() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] text-center tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[28px]">Cancel</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#bfeafb] content-stretch flex h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[18px] text-center tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[28px]">Save</p>
      </div>
    </div>
  );
}

function RightButtonGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Right button group">
      <Button />
      <Button1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Filler />
          <RightButtonGroup />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function ModalWindowAdditionalInfo() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[385px] items-start justify-center left-0 min-w-[360px] overflow-clip rounded-[4px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2),0px_4px_16px_0px_rgba(0,0,0,0.1)] top-0 w-[1280px]" data-name="Modal window - additional info">
      <TitleBar />
      <TextContent />
      <Footer />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Preperation Design- Buccal
      </p>
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
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content />
      <CaretDown />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[26px] top-[87px] w-[386px]" data-name="Dropdown">
      <Field />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto',sans-serif] leading-[24px] relative shrink-0 text-[#3e3d40] text-[18px]">Margin Design - Buccal</p>
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
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content1 />
      <CaretDown1 />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[26px] top-[163px] w-[386px]" data-name="Dropdown">
      <Field1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Preperation Design - Lingual
      </p>
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
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content2 />
      <CaretDown2 />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[447px] top-[87px] w-[386px]" data-name="Dropdown">
      <Field2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Incisial
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
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content3 />
      <CaretDown3 />
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[868px] top-[87px] w-[386px]" data-name="Dropdown">
      <Field3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Margin Design - Lingual
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
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content4 />
      <CaretDown4 />
    </div>
  );
}

function Dropdown4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[447px] top-[163px] w-[386px]" data-name="Dropdown">
      <Field4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gingival
      </p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
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
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content5 />
      <CaretDown5 />
    </div>
  );
}

function Dropdown5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[868px] top-[163px] w-[386px]" data-name="Dropdown">
      <Field5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Stump Shade
      </p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
      <Text6 />
    </div>
  );
}

function CaretDown6() {
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

function Field6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content6 />
      <CaretDown6 />
    </div>
  );
}

function Dropdown6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[868px] top-[239px] w-[386px]" data-name="Dropdown">
      <Field6 />
    </div>
  );
}

export default function AdditionalInfo() {
  return (
    <div className="relative size-full" data-name="Additional info">
      <ModalWindowAdditionalInfo />
      <Dropdown />
      <Dropdown1 />
      <Dropdown2 />
      <Dropdown3 />
      <Dropdown4 />
      <Dropdown5 />
      <Dropdown6 />
    </div>
  );
}