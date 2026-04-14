import svgPaths from "./svg-7iu13y32u8";
import imgImage67 from "figma:asset/07f97a5be96fd814ee3e830a2d5bb8ecc4ab9638.png";
import { imgPath4141 } from "./svg-2zjn6";

function Frame() {
  return <div className="absolute bg-[#85868a] h-[1080px] left-0 overflow-clip top-0 w-[1920px]" data-name="./frame" />;
}

function Button() {
  return (
    <div className="absolute bg-[#bfeafb] content-stretch flex inset-[12.22%_1.56%_16.67%_89.69%] items-center justify-center px-[24px] py-[22px] rounded-[4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Create</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex inset-[14.44%_90.47%_14.44%_0.78%] items-center justify-center px-[24px] py-[22px] rounded-[4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Back</p>
      </div>
    </div>
  );
}

function RxStickyfooter() {
  return (
    <div className="absolute bottom-0 h-[90px] left-[-2px] w-[1920px]" data-name="Rx/stickyfooter">
      <div className="absolute bg-white inset-0 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.13)]" />
      <Button />
      <Button1 />
    </div>
  );
}

function InputEmpty() {
  return (
    <div className="h-[48px] relative shrink-0 w-[448px]" data-name="Input / Empty">
      <div className="absolute bg-white border border-[#aeafb2] border-solid inset-0 rounded-[4px]" />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] left-[16px] right-[48px] text-[#939598] text-[14px] top-1/2 translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Search patients</p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-[448px]" data-name="Search">
      <InputEmpty />
    </div>
  );
}

function Search1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Search">
          <path d={svgPaths.p32470e70} fill="var(--fill-0, #0067AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#bfeafb] content-stretch flex h-[48px] items-center justify-center px-[20px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Search1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[525px]">
      <Search />
      <Button2 />
    </div>
  );
}

function Search2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[527px]" data-name="Search">
      <Frame9 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.93)] text-nowrap" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        Patient details
      </p>
      <Search2 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mina
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
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Young
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
        Female
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
        12/12/2000
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
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#696a6d] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        14129123
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

function Frame11() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Fields1 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] text-center text-nowrap tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">Clear</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Button3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-start pb-[16px] pt-[60px] px-[24px] relative w-full">
          <Frame11 />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function RxPatientDetails() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[44px] overflow-clip rounded-[8px] top-[244px] w-[1832px]" data-name="Rx/patient details">
      <Frame16 />
      <Frame6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[15.83%_14.99%_25.83%_11.67%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 35">
        <g id="Group 3015">
          <path d={svgPaths.p109ff600} fill="url(#paint0_linear_122_2894)" id="Path 4119" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2894" x1="-5.36291e-07" x2="33.8927" y1="-0.49" y2="43.3109">
            <stop stopColor="#59CAF5" />
            <stop offset="1" stopColor="#00ADEF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute bottom-1/4 left-[10.84%] right-[14.16%] top-[15%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 36">
        <g id="Group 3016">
          <path d={svgPaths.pefc00} fill="var(--fill-0, #0067AC)" id="Path 4120" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[18.33%_17.49%_28.33%_14.17%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 32">
        <g id="Group 3017">
          <path d={svgPaths.p21ac8d00} fill="var(--fill-0, #9DDCF9)" id="Path 4121" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute bottom-1/4 contents left-[10.84%] right-[14.16%] top-[15%]">
      <Group8 />
      <Group9 />
      <Group10 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute bottom-1/4 contents left-[10.84%] right-[14.16%] top-[15%]">
      <Group11 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute bottom-1/4 contents left-[10.84%] right-[14.16%] top-[15%]">
      <Group12 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[31.67%_9.16%_18.33%_10.84%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 30">
        <g id="Group 3014">
          <path d={svgPaths.p2e64e400} fill="url(#paint0_linear_122_2882)" id="Path 4116" />
          <path d={svgPaths.p26d467e0} fill="var(--fill-0, #0067AC)" id="Path 4117" />
          <path d={svgPaths.p199ad500} fill="var(--fill-0, #9DDCF9)" id="Path 4118" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2882" x1="24" x2="24" y1="0.5" y2="29.5">
            <stop stopColor="#59CAF5" />
            <stop offset="1" stopColor="#00ADEF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[15%_9.16%_14.54%_10.84%]">
      <p className="absolute font-['Arial_Unicode_MS:Regular',sans-serif] inset-[28.79%_33.33%_14.54%_36.67%] leading-[normal] not-italic text-[25.5px] text-nowrap text-white">℞</p>
      <Group13 />
      <Group7 />
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute inset-[45.19%_37.21%_30.19%_38.89%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Group 5173">
          <path d={svgPaths.p1c526e00} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute contents inset-[15%_9.16%_14.54%_10.84%]" data-name="Icon">
      <Group14 />
      <Group67 />
    </div>
  );
}

function HeaderWizardAtoms() {
  return (
    <div className="bg-[#cceffc] relative rounded-[6px] shrink-0 size-[60px]" data-name="./Header/Wizard atoms">
      <Icon />
    </div>
  );
}

function Component() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name=">">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id=">">
          <path d="M13 10L3 20V0L13 10Z" fill="var(--fill-0, #4A4B4D)" id=">_2" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[15.03%_26.97%_15.53%_26.74%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 42">
        <g id="Group 3025">
          <path d={svgPaths.p24ea1480} fill="url(#paint0_linear_122_2877)" id="Path 4123" />
          <path d={svgPaths.p39d20b00} fill="var(--fill-0, #717073)" id="Path 4124" />
          <path d={svgPaths.p2a684700} fill="var(--fill-0, #F3F3F3)" id="Path 4125" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2877" x1="13.9051" x2="13.9051" y1="0.410845" y2="41.2563">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D4D5D6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path2() {
  return (
    <div className="absolute inset-[25.46%_26.97%_15.53%_37.63%]" data-name="Path 4126">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 36">
        <g id="Path 4126">
          <path d={svgPaths.pcbe8b00} fill="url(#paint0_linear_122_2873)" id="Vector" />
          <path d={svgPaths.p3602b080} fill="var(--fill-0, #D4D5D6)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2873" x1="10.6362" x2="10.6362" y1="0.408447" y2="34.9979">
            <stop offset="0.5" stopColor="#E7E7E8" />
            <stop offset="0.6" stopColor="#AEAFB2" />
            <stop offset="1" stopColor="#D9DADB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[15.03%_26.97%_15.53%_26.74%]">
      <Group18 />
      <Path2 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[15.03%_26.97%_15.53%_26.74%]">
      <Group19 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[16.4%_28.34%_41.4%_43.07%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 26">
        <g id="Group 3028">
          <path d={svgPaths.p11694100} fill="url(#paint0_linear_122_2906)" id="Path 4127" />
          <path d={svgPaths.p3df8e700} fill="var(--fill-0, #CECFD1)" id="Path 4128" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2906" x1="8.16892" x2="8.16892" y1="0" y2="25.3237">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D4D5D6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[20.48%_32.42%_45.48%_48.52%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 21">
        <g id="Group 3029">
          <path d={svgPaths.p107d4f00} fill="var(--fill-0, white)" id="Path 4129" />
          <path d={svgPaths.p303d7380} fill="var(--fill-0, white)" id="Path 4130" />
          <path d={svgPaths.p1b9b9500} fill="var(--fill-0, #5B5A5D)" id="Path 4131" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[37.5%_56.93%_61.82%_36.27%]">
      <div className="absolute inset-[-100%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
          <g id="Group 3030">
            <path d="M4.49291 0.816888H0.408449" id="Line 154" stroke="var(--stroke-0, #939598)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
            <path d="M4.49291 0.408446H0.408446" id="Line 155" stroke="var(--stroke-0, #E7E7E8)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[41.58%_56.93%_57.74%_36.27%]">
      <div className="absolute inset-[-100%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
          <g id="Group 3031">
            <path d="M4.49291 0.816885H0.408449" id="Line 156" stroke="var(--stroke-0, #939598)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
            <path d="M4.49291 0.408446H0.408446" id="Line 157" stroke="var(--stroke-0, #E7E7E8)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[45.67%_56.93%_53.65%_36.27%]">
      <div className="absolute inset-[-100%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
          <g id="Group 3032">
            <path d="M4.49291 0.816897H0.408449" id="Line 158" stroke="var(--stroke-0, #939598)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
            <path d="M4.49291 0.408446H0.408446" id="Line 159" stroke="var(--stroke-0, #E7E7E8)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[49.75%_56.93%_49.57%_36.27%]">
      <div className="absolute inset-[-100%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
          <g id="Group 3033">
            <path d="M4.49291 0.816897H0.408449" id="Line 160" stroke="var(--stroke-0, #939598)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
            <path d="M4.49291 0.408446H0.408446" id="Line 161" stroke="var(--stroke-0, #E7E7E8)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute inset-[53.84%_56.93%_45.48%_36.27%]">
      <div className="absolute inset-[-100%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
          <g id="Group 3034">
            <path d="M4.49291 0.816896H0.408449" id="Line 162" stroke="var(--stroke-0, #939598)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
            <path d="M4.49291 0.408446H0.408446" id="Line 163" stroke="var(--stroke-0, #E7E7E8)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute contents inset-[8.84%_12.54%_15.53%_26.74%]" data-name="Icon">
      <div className="absolute inset-[8.84%_12.54%_35.21%_28.64%]" data-name="Path 4122">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 34">
          <path d={svgPaths.p518f010} fill="var(--fill-0, white)" id="Path 4122" />
        </svg>
      </div>
      <Group20 />
      <Group21 />
      <Group22 />
      <Group23 />
      <Group24 />
      <Group25 />
      <Group26 />
      <Group27 />
    </div>
  );
}

function HeaderWizardAtoms1() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="./Header/Wizard atoms">
      <div className="absolute bg-[#cceffc] inset-0 rounded-[2px]" data-name="Selected" />
      <Icon1 />
    </div>
  );
}

function Component5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name=">">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id=">">
          <path d="M14 10L4 20V0L14 10Z" fill="var(--fill-0, #4A4B4D)" id=">_2" />
        </g>
      </svg>
    </div>
  );
}

function Path5() {
  return (
    <div className="absolute inset-[38.86%_17.24%_16.58%_14.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.131px_-10.398px] mask-size-[37.732px_35.361px]" data-name="Path 4141" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 27">
        <g id="Path 4141">
          <path d={svgPaths.p2db7f900} fill="url(#paint0_linear_122_2852)" id="Vector" />
          <path d={svgPaths.p3f495b80} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2852" x1="20.4474" x2="20.4474" y1="0.449379" y2="26.2895">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path6() {
  return (
    <div className="absolute bottom-[31.56%] left-[65.16%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-29.203px_-2.084px] mask-size-[37.732px_35.361px] right-[-4.1%] top-1/4" data-name="Path 4142" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
        <g id="Path 4142">
          <path d={svgPaths.p1eaf8600} fill="url(#paint0_linear_122_2976)" id="Vector" />
          <path d={svgPaths.p1da05600} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2976" x1="11.6832" x2="11.6832" y1="0.449393" y2="25.6154">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path7() {
  return (
    <div className="absolute bottom-[31.56%] left-[-8.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[14.838px_-2.084px] mask-size-[37.732px_35.361px] right-[69.3%] top-1/4" data-name="Path 4143" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
        <g id="Path 4143">
          <path d={svgPaths.p23020b00} fill="url(#paint0_linear_122_2838)" id="Vector" />
          <path d={svgPaths.p1da05600} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2838" x1="11.6832" x2="11.6832" y1="0.449393" y2="25.6154">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path8() {
  return (
    <div className="absolute bottom-[31.56%] left-[29.2%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7.631px_-2.084px] mask-size-[37.732px_35.361px] right-[31.85%] top-1/4" data-name="Path 4144" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
        <g id="Path 4144">
          <path d={svgPaths.p34d6ee00} fill="url(#paint0_linear_122_2972)" id="Vector" />
          <path d={svgPaths.p1da05600} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2972" x1="11.6832" x2="11.6832" y1="0.449393" y2="25.6154">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute bottom-[16.58%] contents left-[-8.25%] right-[-4.1%] top-1/4">
      <Path5 />
      <Path6 />
      <Path7 />
      <Path8 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[21.53%_20.63%_19.54%_16.48%]" data-name="Mask Group">
      <Group30 />
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute inset-[31.01%_9.57%_16.49%_37.93%]">
      <div className="absolute inset-[-1.59%_-6.35%_-6.35%_-1.59%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <g id="Group 4961">
            <g id="Ellipse 464">
              <path d={svgPaths.p35509000} id="Vector" stroke="var(--stroke-0, #0067AC)" strokeMiterlimit="10" />
            </g>
            <path d="M23 23L32 32" id="Line 274" stroke="var(--stroke-0, #0067AC)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute contents inset-[21.53%_9.57%_16.49%_16.48%]" data-name="icon">
      <MaskGroup />
      <Group64 />
    </div>
  );
}

function HeaderWizardAtoms2() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="./Header/Wizard atoms">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute inset-[29.33%_15%_25.67%_5%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 27">
        <g id="Icon">
          <path d="M7 3L0 0H7V3Z" fill="var(--fill-0, #9DDCF9)" id="Path 6612" />
          <path d="M9 13L2 10H9V13Z" fill="var(--fill-0, #9DDCF9)" id="Path 6613" />
          <path d="M8 8L1 5H8V8Z" fill="var(--fill-0, #9DDCF9)" id="Path 6614" />
          <g id="Rectangle 1707">
            <path d={svgPaths.p10ef5540} fill="url(#paint0_linear_122_2815)" id="Vector" />
            <path d={svgPaths.p825e800} id="Vector_2" stroke="var(--stroke-0, #949496)" strokeMiterlimit="10" />
          </g>
          <g id="Path 6615">
            <path d={svgPaths.p313d2400} fill="url(#paint1_linear_122_2815)" id="Vector_3" />
            <path d={svgPaths.p1f37b000} fill="var(--fill-0, #949496)" id="Vector_4" />
          </g>
          <g id="Path 6616">
            <path d={svgPaths.p2dbb2d80} fill="url(#paint2_linear_122_2815)" id="Vector_5" />
            <path d={svgPaths.padf9e80} fill="var(--fill-0, #949496)" id="Vector_6" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2815" x1="27" x2="27" y1="0" y2="27">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_122_2815" x1="27" x2="27" y1="3867.29" y2="3887.08">
            <stop stopColor="#E7E7E8" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_122_2815" x1="27" x2="27" y1="0.5" y2="20.293">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function HeaderWizardAtoms3() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="./Header/Wizard atoms">
      <Icon3 />
    </div>
  );
}

function WizardNavigation() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-center justify-center left-[calc(50%+1px)] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="wizard navigation">
      <HeaderWizardAtoms />
      <Component />
      <HeaderWizardAtoms1 />
      <Component5 />
      <HeaderWizardAtoms2 />
      <Component5 />
      <HeaderWizardAtoms3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[21.87%_31.25%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 19">
        <g id="Group 2579">
          <path d={svgPaths.p21006400} fill="var(--fill-0, white)" id="Path 3464" />
          <path d={svgPaths.p140a97f0} fill="var(--fill-0, white)" id="Ellipse 200" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[21.87%_31.25%]">
      <Group1 />
    </div>
  );
}

function IconsHelp() {
  return (
    <div className="absolute h-[33.684px] right-[17px] top-[calc(50%-0.16px)] translate-y-[-50%] w-[32px]" data-name="icons/help">
      <div className="absolute inset-[90.62%_6.25%_0_6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 4">
          <path d={svgPaths.p1d7fe600} fill="var(--fill-0, black)" id="Ellipse 198" opacity="0.1" />
        </svg>
      </div>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 34">
        <g id="Group 2578">
          <path d={svgPaths.p3636c900} fill="url(#paint0_linear_122_2982)" id="Ellipse 199" />
          <path d={svgPaths.p37642ec0} fill="var(--fill-0, #399927)" id="Path 3462" />
          <path d={svgPaths.p22856e80} fill="var(--fill-0, #DAEBBA)" id="Path 3463" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2982" x1="16" x2="16" y1="0.526316" y2="33.1579">
            <stop stopColor="#B5D776" />
            <stop offset="1" stopColor="#8AC562" />
          </linearGradient>
        </defs>
      </svg>
      <Group2 />
    </div>
  );
}

function Ellipse() {
  return (
    <div className="absolute inset-[20.6%_20.58%_20.59%_20.57%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
        <g id="Ellipse 197">
          <g id="Vector"></g>
          <path d={svgPaths.p15ddd700} id="Vector_2" stroke="var(--stroke-0, #939598)" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function IconsSettings() {
  return (
    <div className="absolute h-[35.793px] right-[73px] top-[calc(50%-2.04px)] translate-y-[-50%] w-[34px]" data-name="icons/settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 36">
        <g id="Group 2576">
          <g id="Group 2573">
            <path d={svgPaths.p15b8880} fill="url(#paint0_linear_122_2804)" id="Path 3459" />
          </g>
          <g id="Group 2574">
            <path d={svgPaths.p3d793080} fill="var(--fill-0, #717073)" id="Path 3460" />
          </g>
          <g id="Group 2575">
            <path d={svgPaths.p3fa1ba00} fill="var(--fill-0, #F3F3F3)" id="Path 3461" />
          </g>
          <path d={svgPaths.p10740580} fill="var(--fill-0, black)" id="Ellipse 196" opacity="0.1" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2804" x1="17.0042" x2="17.0042" y1="0.0236045" y2="35.7872">
            <stop stopColor="#E7E7E8" />
            <stop offset="1" stopColor="#C9CACB" />
          </linearGradient>
        </defs>
      </svg>
      <Ellipse />
    </div>
  );
}

function IconsBattery() {
  return (
    <div className="absolute h-[34.947px] right-[137.95px] top-[calc(50%-2.46px)] translate-y-[-50%] w-[19.048px]" data-name="icons/Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 35">
        <g id="Battery icon">
          <rect fill="url(#paint0_linear_122_2797)" height="31" id="Rectangle 896" width="17" x="1" y="3" />
          <path d={svgPaths.p3b5e7d00} fill="var(--fill-0, #CECECE)" id="Vector" />
          <path d={svgPaths.pe459180} fill="var(--fill-0, #CECECE)" id="Vector_2" />
          <path d={svgPaths.p1803b900} fill="var(--fill-0, #868686)" id="Vector_3" />
          <rect fill="var(--fill-0, #CECECE)" height="2" id="Rectangle 895" width="7" x="6.80469" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2797" x1="9.5" x2="8.02823" y1="43.6875" y2="-2.1558">
            <stop stopColor="#C4C4C4" />
            <stop offset="1" stopColor="#FFFBFB" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[885px] p-[10px] size-[63px] top-[7px]">
      <div className="h-[49px] relative shrink-0 w-[47px]" data-name="image 67">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage67} />
      </div>
    </div>
  );
}

function L() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="l">
      <div className="basis-0 bg-[#a0daf8] grow min-h-px min-w-px rounded-[2px] shrink-0 w-full" data-name="b" />
      <div className="basis-0 bg-[#b6d77b] grow min-h-px min-w-px rounded-[2px] shrink-0 w-full" data-name="g" />
    </div>
  );
}

function R() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="r">
      <div className="basis-0 bg-[#b6d77b] grow min-h-px min-w-px rounded-[2px] shrink-0 w-full" data-name="g" />
      <div className="basis-0 bg-[#a0daf8] grow min-h-px min-w-px rounded-[2px] shrink-0 w-full" data-name="b" />
    </div>
  );
}

function IconsNewScan() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative rounded-[2px] shrink-0 size-[36px]" data-name="./ Icons / New Scan">
      <L />
      <R />
    </div>
  );
}

function View() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-0 p-[20px] top-0" data-name="View">
      <IconsNewScan />
      <div className="flex flex-col font-['Avenir:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#474955] text-[24px] w-[220px]">
        <p className="leading-[36px]">New Scan</p>
      </div>
    </div>
  );
}

function HeaderTopBarITero() {
  return (
    <div className="absolute bg-white h-[76.001px] left-0 right-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_2px_8px_0px_rgba(0,0,0,0.15)] top-0" data-name="Header - Top bar - iTero">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 76">
        <path d="M1920 0H0V76H1920V0Z" fill="var(--fill-0, white)" id="back" />
      </svg>
      <WizardNavigation />
      <IconsHelp />
      <IconsSettings />
      <IconsBattery />
      <Frame3 />
      <View />
    </div>
  );
}

function ScreenTemplate() {
  return (
    <div className="absolute bg-[#f9f9f9] h-[1080px] left-[4087px] top-[38px] w-[1920px]" data-name="Screen template">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <HeaderTopBarITero />
        <div className="absolute bg-[#c4c4c4] h-[76px] left-[1781px] opacity-0 top-0 w-[139px]" data-name="tap zone" />
        <div className="absolute bg-[rgba(196,196,196,0)] h-[76px] left-[1666px] top-0 w-[254px]" data-name="tap zone" />
        <div className="absolute inset-[4.17%_50.42%_88.43%_45.1%]" data-name="1">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="1"></g>
          </svg>
        </div>
        <div className="absolute inset-[4.17%_45.1%_88.43%_50.42%]" data-name="2">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="1"></g>
          </svg>
        </div>
        <div className="absolute inset-[4.17%_39.79%_88.43%_55.73%]" data-name="3">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="1"></g>
          </svg>
        </div>
        <div className="absolute inset-[4.17%_34.48%_88.43%_61.04%]" data-name="4">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="1"></g>
          </svg>
        </div>
        <div className="absolute inset-[4.17%_29.17%_88.43%_66.35%]" data-name="5">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="1"></g>
          </svg>
        </div>
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[40px] left-[69px] text-[32px] text-[rgba(0,0,0,0.93)] top-[146px] w-[779px]" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
          Fill in patient details
        </p>
        <RxStickyfooter />
        <RxPatientDetails />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function InputEmpty1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[448px]" data-name="Input / Empty">
      <div className="absolute bg-white border border-[#aeafb2] border-solid inset-0 rounded-[4px]" />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] left-[16px] right-[48px] text-[#939598] text-[14px] top-1/2 translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Search patients</p>
      </div>
    </div>
  );
}

function Search3() {
  return (
    <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-[448px]" data-name="Search">
      <InputEmpty1 />
    </div>
  );
}

function Search4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Search">
          <path d={svgPaths.p32470e70} fill="var(--fill-0, #0067AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#bfeafb] content-stretch flex h-[48px] items-center justify-center px-[20px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Search4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[525px]">
      <Search3 />
      <Button4 />
    </div>
  );
}

function Search5() {
  return (
    <div className="content-stretch flex items-center justify-between opacity-0 relative shrink-0 w-[527px]" data-name="Search">
      <Frame10 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.93)] text-nowrap" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        Patient details
      </p>
      <Search5 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 text-nowrap w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        First name
      </p>
      <p className="font-['Avenir:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#cb2f36] text-[14px]">*</p>
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

function Field5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content5 />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text input">
      <Field5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 text-nowrap w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Last name
      </p>
      <p className="font-['Avenir:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#cb2f36] text-[14px]">*</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text6 />
    </div>
  );
}

function Field6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content6 />
    </div>
  );
}

function TextInput3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text input">
      <Field6 />
    </div>
  );
}

function Fields2() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Fields">
      <TextInput2 />
      <TextInput3 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gender at birth
      </p>
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text7 />
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

function Field7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content7 />
      <CaretDown2 />
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <Field7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Date of birth
      </p>
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text8 />
    </div>
  );
}

function Calendar1() {
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

function Field8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content8 />
      <Calendar1 />
    </div>
  );
}

function Dropdown4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <Field8 />
    </div>
  );
}

function Fileds1() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Fileds">
      <Dropdown3 />
      <Dropdown4 />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chart number
      </p>
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text9 />
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

function Field9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content9 />
      <CaretDown3 />
    </div>
  );
}

function Dropdown5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[792px]" data-name="Dropdown">
      <Field9 />
    </div>
  );
}

function Fields3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Fields">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start px-[20px] py-0 relative w-full">
          <Fields2 />
          <Fileds1 />
          <Dropdown5 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Fields3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white h-[332px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[16px] pt-[60px] px-[24px] relative size-full">
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function RxPatientDetails1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[44px] overflow-clip top-[244px] w-[1832px]" data-name="Rx/patient details">
      <Frame17 />
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return <div className="absolute h-[32px] left-[52px] top-[114px] w-[183px]" />;
}

function Button5() {
  return (
    <div className="absolute bg-[#f0f0f0] content-stretch flex inset-[12.22%_1.56%_16.67%_89.69%] items-center justify-center px-[24px] py-[22px] rounded-[4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b0b1b3] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Create</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex inset-[14.44%_90.47%_14.44%_0.78%] items-center justify-center px-[24px] py-[22px] rounded-[4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Back</p>
      </div>
    </div>
  );
}

function RxStickyfooter1() {
  return (
    <div className="absolute bottom-0 h-[90px] left-[-2px] w-[1920px]" data-name="Rx/stickyfooter">
      <div className="absolute bg-white inset-0 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.13)]" />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[15.83%_14.99%_25.83%_11.67%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 35">
        <g id="Group 3015">
          <path d={svgPaths.p109ff600} fill="url(#paint0_linear_122_2894)" id="Path 4119" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2894" x1="-5.36291e-07" x2="33.8927" y1="-0.49" y2="43.3109">
            <stop stopColor="#59CAF5" />
            <stop offset="1" stopColor="#00ADEF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute bottom-1/4 left-[10.84%] right-[14.16%] top-[15%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 36">
        <g id="Group 3016">
          <path d={svgPaths.pefc00} fill="var(--fill-0, #0067AC)" id="Path 4120" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[18.33%_17.49%_28.33%_14.17%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 32">
        <g id="Group 3017">
          <path d={svgPaths.p21ac8d00} fill="var(--fill-0, #9DDCF9)" id="Path 4121" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute bottom-1/4 contents left-[10.84%] right-[14.16%] top-[15%]">
      <Group15 />
      <Group16 />
      <Group17 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute bottom-1/4 contents left-[10.84%] right-[14.16%] top-[15%]">
      <Group28 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute bottom-1/4 contents left-[10.84%] right-[14.16%] top-[15%]">
      <Group29 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute inset-[31.67%_9.16%_18.33%_10.84%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 30">
        <g id="Group 3014">
          <path d={svgPaths.p2e64e400} fill="url(#paint0_linear_122_2882)" id="Path 4116" />
          <path d={svgPaths.p26d467e0} fill="var(--fill-0, #0067AC)" id="Path 4117" />
          <path d={svgPaths.p199ad500} fill="var(--fill-0, #9DDCF9)" id="Path 4118" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2882" x1="24" x2="24" y1="0.5" y2="29.5">
            <stop stopColor="#59CAF5" />
            <stop offset="1" stopColor="#00ADEF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[15%_9.16%_14.54%_10.84%]">
      <p className="absolute font-['Arial_Unicode_MS:Regular',sans-serif] inset-[28.79%_33.33%_14.54%_36.67%] leading-[normal] not-italic text-[25.5px] text-nowrap text-white">℞</p>
      <Group31 />
      <Group32 />
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute inset-[45.19%_37.21%_30.19%_38.89%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Group 5173">
          <path d={svgPaths.p1c526e00} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute contents inset-[15%_9.16%_14.54%_10.84%]" data-name="Icon">
      <Group33 />
      <Group68 />
    </div>
  );
}

function HeaderWizardAtoms4() {
  return (
    <div className="bg-[#cceffc] relative rounded-[6px] shrink-0 size-[60px]" data-name="./Header/Wizard atoms">
      <Icon4 />
    </div>
  );
}

function Component6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name=">">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id=">">
          <path d="M13 10L3 20V0L13 10Z" fill="var(--fill-0, #4A4B4D)" id=">_2" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute inset-[15.03%_26.97%_15.53%_26.74%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 42">
        <g id="Group 3025">
          <path d={svgPaths.p24ea1480} fill="url(#paint0_linear_122_2877)" id="Path 4123" />
          <path d={svgPaths.p39d20b00} fill="var(--fill-0, #717073)" id="Path 4124" />
          <path d={svgPaths.p2a684700} fill="var(--fill-0, #F3F3F3)" id="Path 4125" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2877" x1="13.9051" x2="13.9051" y1="0.410845" y2="41.2563">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D4D5D6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path3() {
  return (
    <div className="absolute inset-[25.46%_26.97%_15.53%_37.63%]" data-name="Path 4126">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 36">
        <g id="Path 4126">
          <path d={svgPaths.pcbe8b00} fill="url(#paint0_linear_122_2873)" id="Vector" />
          <path d={svgPaths.p3602b080} fill="var(--fill-0, #D4D5D6)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2873" x1="10.6362" x2="10.6362" y1="0.408447" y2="34.9979">
            <stop offset="0.5" stopColor="#E7E7E8" />
            <stop offset="0.6" stopColor="#AEAFB2" />
            <stop offset="1" stopColor="#D9DADB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[15.03%_26.97%_15.53%_26.74%]">
      <Group34 />
      <Path3 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[15.03%_26.97%_15.53%_26.74%]">
      <Group35 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute inset-[16.4%_28.34%_41.4%_43.07%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 26">
        <g id="Group 3028">
          <path d={svgPaths.p11694100} fill="url(#paint0_linear_122_2906)" id="Path 4127" />
          <path d={svgPaths.p3df8e700} fill="var(--fill-0, #CECFD1)" id="Path 4128" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2906" x1="8.16892" x2="8.16892" y1="0" y2="25.3237">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D4D5D6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute inset-[20.48%_32.42%_45.48%_48.52%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 21">
        <g id="Group 3029">
          <path d={svgPaths.p107d4f00} fill="var(--fill-0, white)" id="Path 4129" />
          <path d={svgPaths.p303d7380} fill="var(--fill-0, white)" id="Path 4130" />
          <path d={svgPaths.p1b9b9500} fill="var(--fill-0, #5B5A5D)" id="Path 4131" />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute inset-[37.5%_56.93%_61.82%_36.27%]">
      <div className="absolute inset-[-100%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
          <g id="Group 3030">
            <path d="M4.49291 0.816888H0.408449" id="Line 154" stroke="var(--stroke-0, #939598)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
            <path d="M4.49291 0.408446H0.408446" id="Line 155" stroke="var(--stroke-0, #E7E7E8)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute inset-[41.58%_56.93%_57.74%_36.27%]">
      <div className="absolute inset-[-100%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
          <g id="Group 3031">
            <path d="M4.49291 0.816885H0.408449" id="Line 156" stroke="var(--stroke-0, #939598)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
            <path d="M4.49291 0.408446H0.408446" id="Line 157" stroke="var(--stroke-0, #E7E7E8)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute inset-[45.67%_56.93%_53.65%_36.27%]">
      <div className="absolute inset-[-100%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
          <g id="Group 3032">
            <path d="M4.49291 0.816897H0.408449" id="Line 158" stroke="var(--stroke-0, #939598)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
            <path d="M4.49291 0.408446H0.408446" id="Line 159" stroke="var(--stroke-0, #E7E7E8)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute inset-[49.75%_56.93%_49.57%_36.27%]">
      <div className="absolute inset-[-100%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
          <g id="Group 3033">
            <path d="M4.49291 0.816897H0.408449" id="Line 160" stroke="var(--stroke-0, #939598)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
            <path d="M4.49291 0.408446H0.408446" id="Line 161" stroke="var(--stroke-0, #E7E7E8)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute inset-[53.84%_56.93%_45.48%_36.27%]">
      <div className="absolute inset-[-100%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
          <g id="Group 3034">
            <path d="M4.49291 0.816896H0.408449" id="Line 162" stroke="var(--stroke-0, #939598)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
            <path d="M4.49291 0.408446H0.408446" id="Line 163" stroke="var(--stroke-0, #E7E7E8)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute contents inset-[8.84%_12.54%_15.53%_26.74%]" data-name="Icon">
      <div className="absolute inset-[8.84%_12.54%_35.21%_28.64%]" data-name="Path 4122">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 34">
          <path d={svgPaths.p518f010} fill="var(--fill-0, white)" id="Path 4122" />
        </svg>
      </div>
      <Group36 />
      <Group37 />
      <Group38 />
      <Group39 />
      <Group40 />
      <Group41 />
      <Group42 />
      <Group43 />
    </div>
  );
}

function HeaderWizardAtoms5() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="./Header/Wizard atoms">
      <div className="absolute bg-[#cceffc] inset-0 rounded-[2px]" data-name="Selected" />
      <Icon5 />
    </div>
  );
}

function Component7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name=">">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id=">">
          <path d="M14 10L4 20V0L14 10Z" fill="var(--fill-0, #4A4B4D)" id=">_2" />
        </g>
      </svg>
    </div>
  );
}

function Path9() {
  return (
    <div className="absolute inset-[38.86%_17.24%_16.58%_14.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.131px_-10.398px] mask-size-[37.732px_35.361px]" data-name="Path 4141" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 27">
        <g id="Path 4141">
          <path d={svgPaths.p2db7f900} fill="url(#paint0_linear_122_2852)" id="Vector" />
          <path d={svgPaths.p3f495b80} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2852" x1="20.4474" x2="20.4474" y1="0.449379" y2="26.2895">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path10() {
  return (
    <div className="absolute bottom-[31.56%] left-[65.16%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-29.203px_-2.084px] mask-size-[37.732px_35.361px] right-[-4.1%] top-1/4" data-name="Path 4142" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
        <g id="Path 4142">
          <path d={svgPaths.p1eaf8600} fill="url(#paint0_linear_122_2976)" id="Vector" />
          <path d={svgPaths.p1da05600} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2976" x1="11.6832" x2="11.6832" y1="0.449393" y2="25.6154">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path11() {
  return (
    <div className="absolute bottom-[31.56%] left-[-8.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[14.838px_-2.084px] mask-size-[37.732px_35.361px] right-[69.3%] top-1/4" data-name="Path 4143" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
        <g id="Path 4143">
          <path d={svgPaths.p23020b00} fill="url(#paint0_linear_122_2838)" id="Vector" />
          <path d={svgPaths.p1da05600} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2838" x1="11.6832" x2="11.6832" y1="0.449393" y2="25.6154">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path12() {
  return (
    <div className="absolute bottom-[31.56%] left-[29.2%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7.631px_-2.084px] mask-size-[37.732px_35.361px] right-[31.85%] top-1/4" data-name="Path 4144" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
        <g id="Path 4144">
          <path d={svgPaths.p34d6ee00} fill="url(#paint0_linear_122_2972)" id="Vector" />
          <path d={svgPaths.p1da05600} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2972" x1="11.6832" x2="11.6832" y1="0.449393" y2="25.6154">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute bottom-[16.58%] contents left-[-8.25%] right-[-4.1%] top-1/4">
      <Path9 />
      <Path10 />
      <Path11 />
      <Path12 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents inset-[21.53%_20.63%_19.54%_16.48%]" data-name="Mask Group">
      <Group44 />
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute inset-[31.01%_9.57%_16.49%_37.93%]">
      <div className="absolute inset-[-1.59%_-6.35%_-6.35%_-1.59%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <g id="Group 4961">
            <g id="Ellipse 464">
              <path d={svgPaths.p35509000} id="Vector" stroke="var(--stroke-0, #0067AC)" strokeMiterlimit="10" />
            </g>
            <path d="M23 23L32 32" id="Line 274" stroke="var(--stroke-0, #0067AC)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute contents inset-[21.53%_9.57%_16.49%_16.48%]" data-name="icon">
      <MaskGroup1 />
      <Group65 />
    </div>
  );
}

function HeaderWizardAtoms6() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="./Header/Wizard atoms">
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute inset-[29.33%_15%_25.67%_5%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 27">
        <g id="Icon">
          <path d="M7 3L0 0H7V3Z" fill="var(--fill-0, #9DDCF9)" id="Path 6612" />
          <path d="M9 13L2 10H9V13Z" fill="var(--fill-0, #9DDCF9)" id="Path 6613" />
          <path d="M8 8L1 5H8V8Z" fill="var(--fill-0, #9DDCF9)" id="Path 6614" />
          <g id="Rectangle 1707">
            <path d={svgPaths.p10ef5540} fill="url(#paint0_linear_122_2815)" id="Vector" />
            <path d={svgPaths.p825e800} id="Vector_2" stroke="var(--stroke-0, #949496)" strokeMiterlimit="10" />
          </g>
          <g id="Path 6615">
            <path d={svgPaths.p313d2400} fill="url(#paint1_linear_122_2815)" id="Vector_3" />
            <path d={svgPaths.p1f37b000} fill="var(--fill-0, #949496)" id="Vector_4" />
          </g>
          <g id="Path 6616">
            <path d={svgPaths.p2dbb2d80} fill="url(#paint2_linear_122_2815)" id="Vector_5" />
            <path d={svgPaths.padf9e80} fill="var(--fill-0, #949496)" id="Vector_6" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2815" x1="27" x2="27" y1="0" y2="27">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_122_2815" x1="27" x2="27" y1="3867.29" y2="3887.08">
            <stop stopColor="#E7E7E8" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_122_2815" x1="27" x2="27" y1="0.5" y2="20.293">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function HeaderWizardAtoms7() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="./Header/Wizard atoms">
      <Icon7 />
    </div>
  );
}

function WizardNavigation1() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-center justify-center left-[calc(50%+1px)] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="wizard navigation">
      <HeaderWizardAtoms4 />
      <Component6 />
      <HeaderWizardAtoms5 />
      <Component7 />
      <HeaderWizardAtoms6 />
      <Component7 />
      <HeaderWizardAtoms7 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[21.87%_31.25%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 19">
        <g id="Group 2579">
          <path d={svgPaths.p21006400} fill="var(--fill-0, white)" id="Path 3464" />
          <path d={svgPaths.p140a97f0} fill="var(--fill-0, white)" id="Ellipse 200" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[21.87%_31.25%]">
      <Group3 />
    </div>
  );
}

function IconsHelp1() {
  return (
    <div className="absolute h-[33.684px] right-[17px] top-[calc(50%-0.16px)] translate-y-[-50%] w-[32px]" data-name="icons/help">
      <div className="absolute inset-[90.62%_6.25%_0_6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 4">
          <path d={svgPaths.p1d7fe600} fill="var(--fill-0, black)" id="Ellipse 198" opacity="0.1" />
        </svg>
      </div>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 34">
        <g id="Group 2578">
          <path d={svgPaths.p3636c900} fill="url(#paint0_linear_122_2982)" id="Ellipse 199" />
          <path d={svgPaths.p37642ec0} fill="var(--fill-0, #399927)" id="Path 3462" />
          <path d={svgPaths.p22856e80} fill="var(--fill-0, #DAEBBA)" id="Path 3463" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2982" x1="16" x2="16" y1="0.526316" y2="33.1579">
            <stop stopColor="#B5D776" />
            <stop offset="1" stopColor="#8AC562" />
          </linearGradient>
        </defs>
      </svg>
      <Group4 />
    </div>
  );
}

function Ellipse1() {
  return (
    <div className="absolute inset-[20.6%_20.58%_20.59%_20.57%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
        <g id="Ellipse 197">
          <g id="Vector"></g>
          <path d={svgPaths.p15ddd700} id="Vector_2" stroke="var(--stroke-0, #939598)" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function IconsSettings1() {
  return (
    <div className="absolute h-[35.793px] right-[73px] top-[calc(50%-2.04px)] translate-y-[-50%] w-[34px]" data-name="icons/settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 36">
        <g id="Group 2576">
          <g id="Group 2573">
            <path d={svgPaths.p15b8880} fill="url(#paint0_linear_122_2804)" id="Path 3459" />
          </g>
          <g id="Group 2574">
            <path d={svgPaths.p3d793080} fill="var(--fill-0, #717073)" id="Path 3460" />
          </g>
          <g id="Group 2575">
            <path d={svgPaths.p3fa1ba00} fill="var(--fill-0, #F3F3F3)" id="Path 3461" />
          </g>
          <path d={svgPaths.p10740580} fill="var(--fill-0, black)" id="Ellipse 196" opacity="0.1" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2804" x1="17.0042" x2="17.0042" y1="0.0236045" y2="35.7872">
            <stop stopColor="#E7E7E8" />
            <stop offset="1" stopColor="#C9CACB" />
          </linearGradient>
        </defs>
      </svg>
      <Ellipse1 />
    </div>
  );
}

function IconsBattery1() {
  return (
    <div className="absolute h-[34.947px] right-[137.95px] top-[calc(50%-2.46px)] translate-y-[-50%] w-[19.048px]" data-name="icons/Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 35">
        <g id="Battery icon">
          <rect fill="url(#paint0_linear_122_2797)" height="31" id="Rectangle 896" width="17" x="1" y="3" />
          <path d={svgPaths.p3b5e7d00} fill="var(--fill-0, #CECECE)" id="Vector" />
          <path d={svgPaths.pe459180} fill="var(--fill-0, #CECECE)" id="Vector_2" />
          <path d={svgPaths.p1803b900} fill="var(--fill-0, #868686)" id="Vector_3" />
          <rect fill="var(--fill-0, #CECECE)" height="2" id="Rectangle 895" width="7" x="6.80469" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2797" x1="9.5" x2="8.02823" y1="43.6875" y2="-2.1558">
            <stop stopColor="#C4C4C4" />
            <stop offset="1" stopColor="#FFFBFB" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[885px] p-[10px] size-[63px] top-[7px]">
      <div className="h-[49px] relative shrink-0 w-[47px]" data-name="image 67">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage67} />
      </div>
    </div>
  );
}

function L1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="l">
      <div className="basis-0 bg-[#a0daf8] grow min-h-px min-w-px rounded-[2px] shrink-0 w-full" data-name="b" />
      <div className="basis-0 bg-[#b6d77b] grow min-h-px min-w-px rounded-[2px] shrink-0 w-full" data-name="g" />
    </div>
  );
}

function R1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="r">
      <div className="basis-0 bg-[#b6d77b] grow min-h-px min-w-px rounded-[2px] shrink-0 w-full" data-name="g" />
      <div className="basis-0 bg-[#a0daf8] grow min-h-px min-w-px rounded-[2px] shrink-0 w-full" data-name="b" />
    </div>
  );
}

function IconsNewScan1() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative rounded-[2px] shrink-0 size-[36px]" data-name="./ Icons / New Scan">
      <L1 />
      <R1 />
    </div>
  );
}

function View1() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-0 p-[20px] top-0" data-name="View">
      <IconsNewScan1 />
      <div className="flex flex-col font-['Avenir:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#474955] text-[24px] w-[220px]">
        <p className="leading-[36px]">New Scan</p>
      </div>
    </div>
  );
}

function HeaderTopBarITero1() {
  return (
    <div className="absolute bg-white h-[76.001px] left-0 right-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_2px_8px_0px_rgba(0,0,0,0.15)] top-0" data-name="Header - Top bar - iTero">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 76">
        <path d="M1920 0H0V76H1920V0Z" fill="var(--fill-0, white)" id="back" />
      </svg>
      <WizardNavigation1 />
      <IconsHelp1 />
      <IconsSettings1 />
      <IconsBattery1 />
      <Frame4 />
      <View1 />
    </div>
  );
}

function ScreenTemplate1() {
  return (
    <div className="absolute bg-[#f9f9f9] h-[1080px] left-[2038px] top-[38px] w-[1920px]" data-name="Screen template">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <HeaderTopBarITero1 />
        <RxPatientDetails1 />
        <Frame2 />
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[40px] left-[69px] text-[32px] text-[rgba(0,0,0,0.93)] top-[146px] w-[779px]" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
          Fill in patient details
        </p>
        <RxStickyfooter1 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#f0f0f0] content-stretch flex inset-[12.22%_1.56%_16.67%_89.69%] items-center justify-center px-[24px] py-[22px] rounded-[4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b0b1b3] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Select</p>
      </div>
    </div>
  );
}

function RxStickyfooter2() {
  return (
    <div className="absolute bottom-0 h-[90px] left-[-2px] w-[1920px]" data-name="Rx/stickyfooter">
      <div className="absolute bg-white inset-0 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.13)]" />
      <Button7 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mina
      </p>
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text10 />
    </div>
  );
}

function Field10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content10 />
    </div>
  );
}

function TextInput4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text input">
      <Field10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Young
      </p>
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text11 />
    </div>
  );
}

function Field11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content11 />
    </div>
  );
}

function TextInput5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text input">
      <Field11 />
    </div>
  );
}

function Fields4() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Fields">
      <TextInput4 />
      <TextInput5 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gender at birth
      </p>
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text12 />
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

function Field12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content12 />
      <CaretDown4 />
    </div>
  );
}

function Dropdown6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <Field12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Date of birth
      </p>
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text13 />
    </div>
  );
}

function Calendar2() {
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

function Field13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content13 />
      <Calendar2 />
    </div>
  );
}

function Dropdown7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <Field13 />
    </div>
  );
}

function Fileds2() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Fileds">
      <Dropdown6 />
      <Dropdown7 />
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chart number
      </p>
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text14 />
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

function Field14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content14 />
      <CaretDown5 />
    </div>
  );
}

function Dropdown8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[792px]" data-name="Dropdown">
      <Field14 />
    </div>
  );
}

function Fields5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Fields">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start px-[20px] py-0 relative w-full">
          <Fields4 />
          <Fileds2 />
          <Dropdown8 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Fields5 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] text-center text-nowrap tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">Clear</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Button8 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-start pb-[16px] pt-[60px] px-[24px] relative w-full">
          <Frame14 />
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Note() {
  return (
    <div className="h-[98px] relative shrink-0 w-full" data-name="Note">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1832 98">
        <path d="M1832 0H0V98H1832V0Z" fill="var(--fill-0, #FFFAE6)" id="Vector" />
      </svg>
      <div className="absolute bg-[#ffcc02] bottom-0 left-0 top-0 w-[14px]" />
      <div className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[24px] left-[38px] text-[0px] text-[14px] text-black top-[21px] w-[441px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          A patient with the same details already exists: Young, Mary.
        </p>
        <p className="text-[#157bc3]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Load existing patient
        </p>
      </div>
    </div>
  );
}

function RxPatientDetails2() {
  return (
    <div className="absolute left-[44px] rounded-[8px] top-[244px] w-[1832px]" data-name="Rx/patient details">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame8 />
        <Note />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute inset-[15.83%_14.99%_25.83%_11.67%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 35">
        <g id="Group 3015">
          <path d={svgPaths.p109ff600} fill="url(#paint0_linear_122_2894)" id="Path 4119" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2894" x1="-5.36291e-07" x2="33.8927" y1="-0.49" y2="43.3109">
            <stop stopColor="#59CAF5" />
            <stop offset="1" stopColor="#00ADEF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute bottom-1/4 left-[10.84%] right-[14.16%] top-[15%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 36">
        <g id="Group 3016">
          <path d={svgPaths.pefc00} fill="var(--fill-0, #0067AC)" id="Path 4120" />
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute inset-[18.33%_17.49%_28.33%_14.17%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 32">
        <g id="Group 3017">
          <path d={svgPaths.p21ac8d00} fill="var(--fill-0, #9DDCF9)" id="Path 4121" />
        </g>
      </svg>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute bottom-1/4 contents left-[10.84%] right-[14.16%] top-[15%]">
      <Group45 />
      <Group46 />
      <Group47 />
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute bottom-1/4 contents left-[10.84%] right-[14.16%] top-[15%]">
      <Group48 />
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute bottom-1/4 contents left-[10.84%] right-[14.16%] top-[15%]">
      <Group49 />
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute inset-[31.67%_9.16%_18.33%_10.84%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 30">
        <g id="Group 3014">
          <path d={svgPaths.p2e64e400} fill="url(#paint0_linear_122_2882)" id="Path 4116" />
          <path d={svgPaths.p26d467e0} fill="var(--fill-0, #0067AC)" id="Path 4117" />
          <path d={svgPaths.p199ad500} fill="var(--fill-0, #9DDCF9)" id="Path 4118" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2882" x1="24" x2="24" y1="0.5" y2="29.5">
            <stop stopColor="#59CAF5" />
            <stop offset="1" stopColor="#00ADEF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents inset-[15%_9.16%_14.54%_10.84%]">
      <p className="absolute font-['Arial_Unicode_MS:Regular',sans-serif] inset-[28.79%_33.33%_14.54%_36.67%] leading-[normal] not-italic text-[25.5px] text-nowrap text-white">℞</p>
      <Group50 />
      <Group51 />
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute inset-[45.19%_37.21%_30.19%_38.89%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Group 5173">
          <path d={svgPaths.p1c526e00} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute contents inset-[15%_9.16%_14.54%_10.84%]" data-name="Icon">
      <Group52 />
      <Group69 />
    </div>
  );
}

function HeaderWizardAtoms8() {
  return (
    <div className="bg-[#cceffc] relative rounded-[6px] shrink-0 size-[60px]" data-name="./Header/Wizard atoms">
      <Icon8 />
    </div>
  );
}

function Component8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name=">">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id=">">
          <path d="M13 10L3 20V0L13 10Z" fill="var(--fill-0, #4A4B4D)" id=">_2" />
        </g>
      </svg>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute inset-[15.03%_26.97%_15.53%_26.74%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 42">
        <g id="Group 3025">
          <path d={svgPaths.p24ea1480} fill="url(#paint0_linear_122_2877)" id="Path 4123" />
          <path d={svgPaths.p39d20b00} fill="var(--fill-0, #717073)" id="Path 4124" />
          <path d={svgPaths.p2a684700} fill="var(--fill-0, #F3F3F3)" id="Path 4125" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2877" x1="13.9051" x2="13.9051" y1="0.410845" y2="41.2563">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D4D5D6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path4() {
  return (
    <div className="absolute inset-[25.46%_26.97%_15.53%_37.63%]" data-name="Path 4126">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 36">
        <g id="Path 4126">
          <path d={svgPaths.pcbe8b00} fill="url(#paint0_linear_122_2873)" id="Vector" />
          <path d={svgPaths.p3602b080} fill="var(--fill-0, #D4D5D6)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2873" x1="10.6362" x2="10.6362" y1="0.408447" y2="34.9979">
            <stop offset="0.5" stopColor="#E7E7E8" />
            <stop offset="0.6" stopColor="#AEAFB2" />
            <stop offset="1" stopColor="#D9DADB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents inset-[15.03%_26.97%_15.53%_26.74%]">
      <Group53 />
      <Path4 />
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute contents inset-[15.03%_26.97%_15.53%_26.74%]">
      <Group54 />
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute inset-[16.4%_28.34%_41.4%_43.07%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 26">
        <g id="Group 3028">
          <path d={svgPaths.p11694100} fill="url(#paint0_linear_122_2906)" id="Path 4127" />
          <path d={svgPaths.p3df8e700} fill="var(--fill-0, #CECFD1)" id="Path 4128" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2906" x1="8.16892" x2="8.16892" y1="0" y2="25.3237">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D4D5D6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute inset-[20.48%_32.42%_45.48%_48.52%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 21">
        <g id="Group 3029">
          <path d={svgPaths.p107d4f00} fill="var(--fill-0, white)" id="Path 4129" />
          <path d={svgPaths.p303d7380} fill="var(--fill-0, white)" id="Path 4130" />
          <path d={svgPaths.p1b9b9500} fill="var(--fill-0, #5B5A5D)" id="Path 4131" />
        </g>
      </svg>
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute inset-[37.5%_56.93%_61.82%_36.27%]">
      <div className="absolute inset-[-100%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
          <g id="Group 3030">
            <path d="M4.49291 0.816888H0.408449" id="Line 154" stroke="var(--stroke-0, #939598)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
            <path d="M4.49291 0.408446H0.408446" id="Line 155" stroke="var(--stroke-0, #E7E7E8)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute inset-[41.58%_56.93%_57.74%_36.27%]">
      <div className="absolute inset-[-100%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
          <g id="Group 3031">
            <path d="M4.49291 0.816885H0.408449" id="Line 156" stroke="var(--stroke-0, #939598)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
            <path d="M4.49291 0.408446H0.408446" id="Line 157" stroke="var(--stroke-0, #E7E7E8)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute inset-[45.67%_56.93%_53.65%_36.27%]">
      <div className="absolute inset-[-100%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
          <g id="Group 3032">
            <path d="M4.49291 0.816897H0.408449" id="Line 158" stroke="var(--stroke-0, #939598)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
            <path d="M4.49291 0.408446H0.408446" id="Line 159" stroke="var(--stroke-0, #E7E7E8)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute inset-[49.75%_56.93%_49.57%_36.27%]">
      <div className="absolute inset-[-100%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
          <g id="Group 3033">
            <path d="M4.49291 0.816897H0.408449" id="Line 160" stroke="var(--stroke-0, #939598)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
            <path d="M4.49291 0.408446H0.408446" id="Line 161" stroke="var(--stroke-0, #E7E7E8)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute inset-[53.84%_56.93%_45.48%_36.27%]">
      <div className="absolute inset-[-100%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
          <g id="Group 3034">
            <path d="M4.49291 0.816896H0.408449" id="Line 162" stroke="var(--stroke-0, #939598)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
            <path d="M4.49291 0.408446H0.408446" id="Line 163" stroke="var(--stroke-0, #E7E7E8)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.816892" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute contents inset-[8.84%_12.54%_15.53%_26.74%]" data-name="Icon">
      <div className="absolute inset-[8.84%_12.54%_35.21%_28.64%]" data-name="Path 4122">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 34">
          <path d={svgPaths.p518f010} fill="var(--fill-0, white)" id="Path 4122" />
        </svg>
      </div>
      <Group55 />
      <Group56 />
      <Group57 />
      <Group58 />
      <Group59 />
      <Group60 />
      <Group61 />
      <Group62 />
    </div>
  );
}

function HeaderWizardAtoms9() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="./Header/Wizard atoms">
      <div className="absolute bg-[#cceffc] inset-0 rounded-[2px]" data-name="Selected" />
      <Icon9 />
    </div>
  );
}

function Component9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name=">">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id=">">
          <path d="M14 10L4 20V0L14 10Z" fill="var(--fill-0, #4A4B4D)" id=">_2" />
        </g>
      </svg>
    </div>
  );
}

function Path13() {
  return (
    <div className="absolute inset-[38.86%_17.24%_16.58%_14.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.131px_-10.398px] mask-size-[37.732px_35.361px]" data-name="Path 4141" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 27">
        <g id="Path 4141">
          <path d={svgPaths.p2db7f900} fill="url(#paint0_linear_122_2852)" id="Vector" />
          <path d={svgPaths.p3f495b80} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2852" x1="20.4474" x2="20.4474" y1="0.449379" y2="26.2895">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path14() {
  return (
    <div className="absolute bottom-[31.56%] left-[65.16%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-29.203px_-2.084px] mask-size-[37.732px_35.361px] right-[-4.1%] top-1/4" data-name="Path 4142" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
        <g id="Path 4142">
          <path d={svgPaths.p1eaf8600} fill="url(#paint0_linear_122_2976)" id="Vector" />
          <path d={svgPaths.p1da05600} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2976" x1="11.6832" x2="11.6832" y1="0.449393" y2="25.6154">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path15() {
  return (
    <div className="absolute bottom-[31.56%] left-[-8.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[14.838px_-2.084px] mask-size-[37.732px_35.361px] right-[69.3%] top-1/4" data-name="Path 4143" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
        <g id="Path 4143">
          <path d={svgPaths.p23020b00} fill="url(#paint0_linear_122_2838)" id="Vector" />
          <path d={svgPaths.p1da05600} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2838" x1="11.6832" x2="11.6832" y1="0.449393" y2="25.6154">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path16() {
  return (
    <div className="absolute bottom-[31.56%] left-[29.2%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7.631px_-2.084px] mask-size-[37.732px_35.361px] right-[31.85%] top-1/4" data-name="Path 4144" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
        <g id="Path 4144">
          <path d={svgPaths.p34d6ee00} fill="url(#paint0_linear_122_2972)" id="Vector" />
          <path d={svgPaths.p1da05600} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2972" x1="11.6832" x2="11.6832" y1="0.449393" y2="25.6154">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute bottom-[16.58%] contents left-[-8.25%] right-[-4.1%] top-1/4">
      <Path13 />
      <Path14 />
      <Path15 />
      <Path16 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents inset-[21.53%_20.63%_19.54%_16.48%]" data-name="Mask Group">
      <Group63 />
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute inset-[31.01%_9.57%_16.49%_37.93%]">
      <div className="absolute inset-[-1.59%_-6.35%_-6.35%_-1.59%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <g id="Group 4961">
            <g id="Ellipse 464">
              <path d={svgPaths.p35509000} id="Vector" stroke="var(--stroke-0, #0067AC)" strokeMiterlimit="10" />
            </g>
            <path d="M23 23L32 32" id="Line 274" stroke="var(--stroke-0, #0067AC)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute contents inset-[21.53%_9.57%_16.49%_16.48%]" data-name="icon">
      <MaskGroup2 />
      <Group66 />
    </div>
  );
}

function HeaderWizardAtoms10() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="./Header/Wizard atoms">
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute inset-[29.33%_15%_25.67%_5%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 27">
        <g id="Icon">
          <path d="M7 3L0 0H7V3Z" fill="var(--fill-0, #9DDCF9)" id="Path 6612" />
          <path d="M9 13L2 10H9V13Z" fill="var(--fill-0, #9DDCF9)" id="Path 6613" />
          <path d="M8 8L1 5H8V8Z" fill="var(--fill-0, #9DDCF9)" id="Path 6614" />
          <g id="Rectangle 1707">
            <path d={svgPaths.p10ef5540} fill="url(#paint0_linear_122_2815)" id="Vector" />
            <path d={svgPaths.p825e800} id="Vector_2" stroke="var(--stroke-0, #949496)" strokeMiterlimit="10" />
          </g>
          <g id="Path 6615">
            <path d={svgPaths.p313d2400} fill="url(#paint1_linear_122_2815)" id="Vector_3" />
            <path d={svgPaths.p1f37b000} fill="var(--fill-0, #949496)" id="Vector_4" />
          </g>
          <g id="Path 6616">
            <path d={svgPaths.p2dbb2d80} fill="url(#paint2_linear_122_2815)" id="Vector_5" />
            <path d={svgPaths.padf9e80} fill="var(--fill-0, #949496)" id="Vector_6" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2815" x1="27" x2="27" y1="0" y2="27">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_122_2815" x1="27" x2="27" y1="3867.29" y2="3887.08">
            <stop stopColor="#E7E7E8" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_122_2815" x1="27" x2="27" y1="0.5" y2="20.293">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function HeaderWizardAtoms11() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="./Header/Wizard atoms">
      <Icon11 />
    </div>
  );
}

function WizardNavigation2() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-center justify-center left-[calc(50%+1px)] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="wizard navigation">
      <HeaderWizardAtoms8 />
      <Component8 />
      <HeaderWizardAtoms9 />
      <Component9 />
      <HeaderWizardAtoms10 />
      <Component9 />
      <HeaderWizardAtoms11 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[21.87%_31.25%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 19">
        <g id="Group 2579">
          <path d={svgPaths.p21006400} fill="var(--fill-0, white)" id="Path 3464" />
          <path d={svgPaths.p140a97f0} fill="var(--fill-0, white)" id="Ellipse 200" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[21.87%_31.25%]">
      <Group5 />
    </div>
  );
}

function IconsHelp2() {
  return (
    <div className="absolute h-[33.684px] right-[17px] top-[calc(50%-0.16px)] translate-y-[-50%] w-[32px]" data-name="icons/help">
      <div className="absolute inset-[90.62%_6.25%_0_6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 4">
          <path d={svgPaths.p1d7fe600} fill="var(--fill-0, black)" id="Ellipse 198" opacity="0.1" />
        </svg>
      </div>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 34">
        <g id="Group 2578">
          <path d={svgPaths.p3636c900} fill="url(#paint0_linear_122_2982)" id="Ellipse 199" />
          <path d={svgPaths.p37642ec0} fill="var(--fill-0, #399927)" id="Path 3462" />
          <path d={svgPaths.p22856e80} fill="var(--fill-0, #DAEBBA)" id="Path 3463" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2982" x1="16" x2="16" y1="0.526316" y2="33.1579">
            <stop stopColor="#B5D776" />
            <stop offset="1" stopColor="#8AC562" />
          </linearGradient>
        </defs>
      </svg>
      <Group6 />
    </div>
  );
}

function Ellipse2() {
  return (
    <div className="absolute inset-[20.6%_20.58%_20.59%_20.57%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
        <g id="Ellipse 197">
          <g id="Vector"></g>
          <path d={svgPaths.p15ddd700} id="Vector_2" stroke="var(--stroke-0, #939598)" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function IconsSettings2() {
  return (
    <div className="absolute h-[35.793px] right-[73px] top-[calc(50%-2.04px)] translate-y-[-50%] w-[34px]" data-name="icons/settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 36">
        <g id="Group 2576">
          <g id="Group 2573">
            <path d={svgPaths.p15b8880} fill="url(#paint0_linear_122_2804)" id="Path 3459" />
          </g>
          <g id="Group 2574">
            <path d={svgPaths.p3d793080} fill="var(--fill-0, #717073)" id="Path 3460" />
          </g>
          <g id="Group 2575">
            <path d={svgPaths.p3fa1ba00} fill="var(--fill-0, #F3F3F3)" id="Path 3461" />
          </g>
          <path d={svgPaths.p10740580} fill="var(--fill-0, black)" id="Ellipse 196" opacity="0.1" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2804" x1="17.0042" x2="17.0042" y1="0.0236045" y2="35.7872">
            <stop stopColor="#E7E7E8" />
            <stop offset="1" stopColor="#C9CACB" />
          </linearGradient>
        </defs>
      </svg>
      <Ellipse2 />
    </div>
  );
}

function IconsBattery2() {
  return (
    <div className="absolute h-[34.947px] right-[137.95px] top-[calc(50%-2.46px)] translate-y-[-50%] w-[19.048px]" data-name="icons/Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 35">
        <g id="Battery icon">
          <rect fill="url(#paint0_linear_122_2797)" height="31" id="Rectangle 896" width="17" x="1" y="3" />
          <path d={svgPaths.p3b5e7d00} fill="var(--fill-0, #CECECE)" id="Vector" />
          <path d={svgPaths.pe459180} fill="var(--fill-0, #CECECE)" id="Vector_2" />
          <path d={svgPaths.p1803b900} fill="var(--fill-0, #868686)" id="Vector_3" />
          <rect fill="var(--fill-0, #CECECE)" height="2" id="Rectangle 895" width="7" x="6.80469" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2797" x1="9.5" x2="8.02823" y1="43.6875" y2="-2.1558">
            <stop stopColor="#C4C4C4" />
            <stop offset="1" stopColor="#FFFBFB" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[885px] p-[10px] size-[63px] top-[7px]">
      <div className="h-[49px] relative shrink-0 w-[47px]" data-name="image 67">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage67} />
      </div>
    </div>
  );
}

function L2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="l">
      <div className="basis-0 bg-[#a0daf8] grow min-h-px min-w-px rounded-[2px] shrink-0 w-full" data-name="b" />
      <div className="basis-0 bg-[#b6d77b] grow min-h-px min-w-px rounded-[2px] shrink-0 w-full" data-name="g" />
    </div>
  );
}

function R2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="r">
      <div className="basis-0 bg-[#b6d77b] grow min-h-px min-w-px rounded-[2px] shrink-0 w-full" data-name="g" />
      <div className="basis-0 bg-[#a0daf8] grow min-h-px min-w-px rounded-[2px] shrink-0 w-full" data-name="b" />
    </div>
  );
}

function IconsNewScan2() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative rounded-[2px] shrink-0 size-[36px]" data-name="./ Icons / New Scan">
      <L2 />
      <R2 />
    </div>
  );
}

function View2() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-0 p-[20px] top-0" data-name="View">
      <IconsNewScan2 />
      <div className="flex flex-col font-['Avenir:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#474955] text-[24px] w-[220px]">
        <p className="leading-[36px]">New Scan</p>
      </div>
    </div>
  );
}

function HeaderTopBarITero2() {
  return (
    <div className="absolute bg-white h-[76.001px] left-0 right-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_2px_8px_0px_rgba(0,0,0,0.15)] top-0" data-name="Header - Top bar - iTero">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 76">
        <path d="M1920 0H0V76H1920V0Z" fill="var(--fill-0, white)" id="back" />
      </svg>
      <WizardNavigation2 />
      <IconsHelp2 />
      <IconsSettings2 />
      <IconsBattery2 />
      <Frame5 />
      <View2 />
    </div>
  );
}

function ScreenTemplate2() {
  return (
    <div className="absolute bg-[#f9f9f9] h-[1080px] left-[2049px] top-[1324px] w-[1920px]" data-name="Screen template">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <HeaderTopBarITero2 />
        <div className="absolute bg-[#c4c4c4] h-[76px] left-[1781px] opacity-0 top-0 w-[139px]" data-name="tap zone" />
        <div className="absolute bg-[rgba(196,196,196,0)] h-[76px] left-[1666px] top-0 w-[254px]" data-name="tap zone" />
        <div className="absolute inset-[4.17%_50.42%_88.43%_45.1%]" data-name="1">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="1"></g>
          </svg>
        </div>
        <div className="absolute inset-[4.17%_45.1%_88.43%_50.42%]" data-name="2">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="1"></g>
          </svg>
        </div>
        <div className="absolute inset-[4.17%_39.79%_88.43%_55.73%]" data-name="3">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="1"></g>
          </svg>
        </div>
        <div className="absolute inset-[4.17%_34.48%_88.43%_61.04%]" data-name="4">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="1"></g>
          </svg>
        </div>
        <div className="absolute inset-[4.17%_29.17%_88.43%_66.35%]" data-name="5">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="1"></g>
          </svg>
        </div>
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[40px] left-[69px] text-[32px] text-[rgba(0,0,0,0.93)] top-[146px] w-[779px]" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
          Fill in patient details
        </p>
        <RxStickyfooter2 />
        <RxPatientDetails2 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function LogoITeroWhite() {
  return (
    <div className="absolute inset-[0_55.56%_1.6%_0]" data-name="Logo / iTero / White">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 29">
        <g clipPath="url(#clip0_125_13877)" id="Logo / iTero / White">
          <path d={svgPaths.pf730120} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pd75ff00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p212a5e70} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p449d480} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p1dff8a80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p2c80b8c0} fill="var(--fill-0, #2AD2C9)" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_125_13877">
            <rect fill="white" height="29" width="72" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoITeroElement() {
  return (
    <div className="absolute h-[29.472px] left-0 top-[23px] w-[162px]" data-name="Logo / iTero / element">
      <LogoITeroWhite />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[52px] relative shrink-0 w-[162px]" data-name="Logo">
      <LogoITeroElement />
    </div>
  );
}

function Group91() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[86px]">
      <div className="absolute inset-[0_-2.33%_-5%_-2.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 84">
          <g id="Group 55869">
            <g filter="url(#filter0_d_130_7985)" id="Group">
              <path d={svgPaths.p2e0cb980} fill="var(--fill-0, white)" id="Rectangle 1822" />
              <g id="icons/Battery">
                <rect fill="url(#paint0_linear_130_7985)" height="35.4819" id="Rectangle 896" width="19.6344" x="35.155" y="21.4337" />
                <path d={svgPaths.p1c72f370} fill="var(--fill-0, #CECECE)" id="Vector" />
                <path d={svgPaths.p2a36d4f0} fill="var(--fill-0, #CECECE)" id="Vector_2" />
                <path d={svgPaths.p29f346c0} fill="var(--fill-0, #868686)" id="Vector_3" />
                <rect fill="var(--fill-0, #CECECE)" height="2.28916" id="Rectangle 895" width="8.08475" x="41.8592" y="18" />
              </g>
            </g>
            <g id="Rectangle 1826"></g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="84" id="filter0_d_130_7985" width="90" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.149 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_130_7985" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_130_7985" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_130_7985" x1="44.9722" x2="43.3027" y1="68.0038" y2="15.5315">
              <stop stopColor="#C4C4C4" />
              <stop offset="1" stopColor="#FFFBFB" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-[80px] relative shrink-0 w-[86px]">
      <Group91 />
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute inset-[42.5%_30.23%_36%_30.23%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 18">
        <g id="Group 5418">
          <path d={svgPaths.p178c50} fill="url(#paint0_linear_125_8542)" id="Path 7169" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8542" x1="17" x2="17" y1="0" y2="17.196">
            <stop stopColor="#00ADEF" />
            <stop offset="1" stopColor="#59CAF5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute inset-[42.5%_30.23%_36%_30.23%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 18">
        <g id="Group 5420">
          <path d={svgPaths.p1d5ff200} fill="url(#paint0_linear_125_8625)" id="Path 7171" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8625" x1="17" x2="17" y1="0" y2="17.196">
            <stop stopColor="#00ADEF" />
            <stop offset="1" stopColor="#59CAF5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute contents inset-[42.5%_30.23%_36%_30.23%]">
      {[...Array(2).keys()].map((_, i) => (
        <Group75 key={i} />
      ))}
      <Group76 />
    </div>
  );
}

function Group78() {
  return (
    <div className="absolute contents inset-[42.5%_30.23%_36%_30.23%]">
      <Group77 />
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute inset-[43.13%_30.81%_36.62%_30.81%]">
      <div className="absolute inset-[-3.09%_-1.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 18">
          <g id="Group 5423">
            <path d={svgPaths.p2a27c800} id="Path 7172" stroke="var(--stroke-0, #0067AC)" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute inset-[43.13%_30.81%_36.62%_30.81%]">
      <div className="absolute inset-[-3.09%_-1.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 18">
          <g id="Group 5425">
            <path d={svgPaths.p2f579800} id="Path 7174" stroke="var(--stroke-0, #0067AC)" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute contents inset-[43.13%_30.81%_36.62%_30.81%]">
      {[...Array(2).keys()].map((_, i) => (
        <Group79 key={i} />
      ))}
      <Group80 />
    </div>
  );
}

function Group82() {
  return (
    <div className="absolute contents inset-[43.13%_30.81%_36.62%_30.81%]">
      <Group81 />
    </div>
  );
}

function Group83() {
  return (
    <div className="absolute contents inset-[42.5%_30.23%_36%_30.23%]">
      <Group78 />
      <Group82 />
    </div>
  );
}

function Group84() {
  return (
    <div className="absolute inset-[26.91%_23.32%_44.4%_23.31%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 23">
        <g id="Group 5429">
          <path d={svgPaths.p1d520a80} fill="url(#paint0_linear_125_8532)" id="Path 7175" />
          <path d={svgPaths.p719a400} id="Path 7176" stroke="var(--stroke-0, #0067AC)" strokeMiterlimit="10" />
          <path d={svgPaths.p112c4b80} id="Path 7177" stroke="var(--stroke-0, #9DDCF9)" strokeMiterlimit="10" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8532" x1="22.9489" x2="22.9489" y1="0.000976562" y2="22.95">
            <stop stopColor="#59CAF5" />
            <stop offset="1" stopColor="#00ADEF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group85() {
  return (
    <div className="absolute bottom-1/4 contents left-[23.31%] right-[23.32%] top-[26.91%]">
      <Group83 />
      <Group84 />
      <div className="absolute bottom-1/4 left-[36.05%] right-1/2 top-[41.25%]" data-name="Path 7178">
        <div className="absolute inset-[-3.31%_-3.73%_0_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 28">
            <path d={svgPaths.p24f75c00} id="Path 5810" stroke="var(--stroke-0, #F79024)" strokeMiterlimit="10" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[36.05%] right-[63.95%] top-[57.5%]">
        <div className="absolute inset-[0_-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 14">
            <path d="M2 0V14" id="Line 52" stroke="var(--stroke-0, #F79024)" strokeMiterlimit="10" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[39.38%_48.26%_56.87%_48.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <path d={svgPaths.p3cbff000} fill="var(--fill-0, #F79024)" id="Ellipse 100" />
        </svg>
      </div>
    </div>
  );
}

function Group88() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute inset-[0_-2.33%_-5%_-2.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 84">
          <g filter="url(#filter0_d_125_8545)" id="Group">
            <path d={svgPaths.p2e0cb980} fill="var(--fill-0, white)" id="Rectangle 1821" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="84" id="filter0_d_125_8545" width="90" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.149 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_125_8545" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_125_8545" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[20%_22.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 1283"></g>
        </svg>
      </div>
      <div className="absolute inset-[56.25%_24.42%_31.25%_24.42%]" data-name="Path 7168">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 10">
          <path d="M0 5L22 0L44 5L22 10L0 5Z" fill="var(--fill-0, black)" id="Path 5800" opacity="0.1" />
        </svg>
      </div>
      <Group85 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="h-[80px] relative shrink-0 w-[86px]">
      <Group88 />
    </div>
  );
}

function Group89() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[86px]">
      <div className="absolute inset-[0_-2.33%_-5%_-2.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 84">
          <g id="Group 55866">
            <g filter="url(#filter0_d_130_8011)" id="Group">
              <path d={svgPaths.p2e0cb980} fill="var(--fill-0, white)" id="Rectangle 1822" />
            </g>
            <g id="Rectangle 1826"></g>
            <g id="Scanner - Lock">
              <path d={svgPaths.p116a8600} fill="url(#paint0_linear_130_8011)" id="Rectangle 16990" stroke="var(--stroke-0, #8F8F8F)" strokeWidth="0.5" />
              <rect fill="url(#paint1_radial_130_8011)" height="21.3" id="Rectangle 16988" rx="1.65" stroke="var(--stroke-0, #83570E)" strokeWidth="0.7" width="28.3" x="29.35" y="36.35" />
              <rect height="19.6" id="Rectangle 16989" rx="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.6" strokeWidth="0.4" width="26.6" x="30.2" y="37.2" />
              <circle cx="43.75" cy="43.5" fill="var(--fill-0, #9F6A11)" id="Ellipse 623" r="2.5" />
              <path d={svgPaths.p35130280} fill="var(--fill-0, #9F6A11)" id="Polygon 1" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="84" id="filter0_d_130_8011" width="90" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.149 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_130_8011" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_130_8011" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_130_8011" x1="43.5" x2="43.5" y1="16.5375" y2="38">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#E0E0E0" />
            </linearGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(43.5 47) rotate(90) scale(15.5 20.4318)" gradientUnits="userSpaceOnUse" id="paint1_radial_130_8011" r="1">
              <stop stopColor="#F7C560" />
              <stop offset="1" stopColor="#E1A634" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[80px] relative shrink-0 w-[86px]">
      <Group89 />
    </div>
  );
}

function Path() {
  return (
    <div className="absolute inset-[1.26%_1.25%_1.24%_1.25%]" data-name="Path">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
        <g id="Group 5413">
          <path d={svgPaths.p2d0fb380} fill="url(#paint0_linear_125_8610)" id="Path 7163" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8610" x1="-9.56823e-07" x2="39" y1="-0.506999" y2="39.508">
            <stop stopColor="#E7E7E8" />
            <stop offset="1" stopColor="#C9CACB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path1() {
  return (
    <div className="absolute inset-[5.03%_5.01%_4.97%_5.03%]" data-name="Path">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Group 5415">
          <path d={svgPaths.p59c5600} fill="var(--fill-0, #F3F3F3)" id="Path 7165" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute contents inset-0" data-name="Container">
      <Path />
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group 5414">
          <path d={svgPaths.p34e25a00} fill="var(--fill-0, #717073)" id="Path 7164" />
        </g>
      </svg>
      <Path1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Container">
      <Container />
      <div className="absolute inset-[21.25%]" data-name="Vector">
        <div className="absolute inset-[-2.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.pdbdf480} id="Vector" stroke="var(--stroke-0, #939598)" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Ellipse3() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute inset-[20%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute left-1/2 size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Container">
      <div className="absolute inset-[90%_7.5%_0_7.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 4">
          <path d={svgPaths.p360abb80} fill="var(--fill-0, black)" id="Ellipse 521" opacity="0.1" />
        </svg>
      </div>
      <Ellipse3 />
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute inset-[25.63%_27.33%_25.62%_27.32%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
        <g id="Group 5413">
          <path d={svgPaths.p2d0fb380} fill="url(#paint0_linear_125_8610)" id="Path 7163" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8610" x1="-9.56823e-07" x2="39" y1="-0.506999" y2="39.508">
            <stop stopColor="#E7E7E8" />
            <stop offset="1" stopColor="#C9CACB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute bottom-1/4 left-[26.74%] right-[26.74%] top-1/4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group 5414">
          <path d={svgPaths.p34e25a00} fill="var(--fill-0, #717073)" id="Path 7164" />
        </g>
      </svg>
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute inset-[27.51%_29.07%_27.49%_29.08%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Group 5415">
          <path d={svgPaths.p59c5600} fill="var(--fill-0, #F3F3F3)" id="Path 7165" />
        </g>
      </svg>
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute bottom-1/4 contents left-[26.74%] right-[26.74%] top-1/4">
      <Group70 />
      <Group71 />
      <Group72 />
    </div>
  );
}

function Ellipse4() {
  return (
    <div className="absolute inset-[35%_36.05%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Ellipse 537">
          <g id="Vector"></g>
          <path d={svgPaths.pdbdf480} id="Vector_2" stroke="var(--stroke-0, #939598)" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function Group92() {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 80">
        <path d={svgPaths.p354a1780} fill="var(--fill-0, white)" id="Rectangle 1822" />
      </svg>
      <Container2 />
      <div className="absolute inset-[20%_22.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 1283"></g>
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-[30.23%] right-[30.23%] top-[70%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 4">
          <path d={svgPaths.p360abb80} fill="var(--fill-0, black)" id="Ellipse 521" opacity="0.1" />
        </svg>
      </div>
      <Group73 />
      <Ellipse4 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[86px]">
      <Group92 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[80px] relative shrink-0 w-[86px]">
      <Frame20 />
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute inset-[26.25%_27.91%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Group 5417">
          <path d={svgPaths.pdd35900} fill="url(#paint0_linear_125_8505)" id="Ellipse 535" />
          <path d={svgPaths.p762f500} fill="var(--fill-0, #399927)" id="Path 7166" />
          <path d={svgPaths.p12c33c80} fill="var(--fill-0, #DAEBBA)" id="Path 7167" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8505" x1="19" x2="19" y1="0.5" y2="37.5">
            <stop stopColor="#B5D776" />
            <stop offset="1" stopColor="#8AC562" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group86() {
  return (
    <div className="absolute inset-[36.25%_41.85%_36.25%_41.87%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 22">
        <g id="Group 5431">
          <path d={svgPaths.p35149200} fill="var(--fill-0, white)" id="Path 7179" />
          <path d={svgPaths.p3dab8400} fill="var(--fill-0, white)" id="Ellipse 538" />
        </g>
      </svg>
    </div>
  );
}

function Group87() {
  return (
    <div className="absolute contents inset-[36.25%_41.85%_36.25%_41.87%]">
      <Group86 />
    </div>
  );
}

function Group90() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute inset-[0_-2.33%_-5%_-2.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 84">
          <g filter="url(#filter0_d_125_8545)" id="Group">
            <path d={svgPaths.p2e0cb980} fill="var(--fill-0, white)" id="Rectangle 1821" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="84" id="filter0_d_125_8545" width="90" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.149 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_125_8545" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_125_8545" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[20%_22.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 1283"></g>
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-[30.23%] right-[30.23%] top-[70%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 4">
          <path d={svgPaths.p360abb80} fill="var(--fill-0, black)" id="Ellipse 521" opacity="0.1" />
        </svg>
      </div>
      <Group74 />
      <Group87 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[80px] relative shrink-0 w-[86px]">
      <Group90 />
    </div>
  );
}

function Btns() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="btns">
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start justify-between pb-0 pt-[40px] px-0 relative shrink-0 w-full" data-name="Header">
      <Logo />
      <Btns />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.78%_8.89%_14.63%_2.22%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 59">
        <g id="Group">
          <path d={svgPaths.p15cf3400} fill="var(--fill-0, #0067AC)" id="Vector" />
          <path d={svgPaths.p3a307580} fill="var(--fill-0, #9DDCF9)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function HomePageNewScan() {
  return (
    <div className="overflow-clip relative shrink-0 size-[80px]" data-name="Home page - New Scan">
      <div className="absolute inset-[86.85%_4.44%_2.78%_3.7%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 9">
          <path d={svgPaths.p1763e000} fill="var(--fill-0, black)" fillOpacity="0.102" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.78%_3.7%_9.44%_2.96%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 47">
          <path d={svgPaths.p24a84800} fill="url(#paint0_linear_125_8579)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8579" x1="-16.1484" x2="-16.1484" y1="21.4818" y2="96.1484">
              <stop stopColor="#59CAF4" />
              <stop offset="1" stopColor="#00ACEF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[35%_5.93%_11.67%_5.19%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 43">
          <path d={svgPaths.p3b557880} fill="var(--fill-0, #9DDCF9)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.52%_9.63%_67.96%_2.96%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 15">
          <path d={svgPaths.p30e65100} fill="url(#paint0_linear_125_8617)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8617" x1="-0.18432" x2="-0.18432" y1="34.4827" y2="308.59">
              <stop stopColor="#59CAF4" />
              <stop offset="1" stopColor="#00ACEF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group />
      <div className="absolute inset-[32.78%_3.7%_9.44%_2.96%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 47">
          <path d={svgPaths.p24a84800} fill="url(#paint0_linear_125_8579)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8579" x1="-16.1484" x2="-16.1484" y1="21.4818" y2="96.1484">
              <stop stopColor="#59CAF4" />
              <stop offset="1" stopColor="#00ACEF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[32.04%_2.96%_8.7%_2.22%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 48">
          <path d={svgPaths.p177602b0} fill="var(--fill-0, #0067AC)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[46.09%_33.08%_20.55%_33.79%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <path d={svgPaths.p30158e00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="h-[34px] relative shrink-0 w-[82px]" data-name="./Name">
      <p className="absolute font-['Avenir:Medium',sans-serif] leading-[33px] left-1/2 not-italic text-[#3e3d40] text-[30px] text-center text-nowrap top-0 translate-x-[-50%]">New Scan</p>
    </div>
  );
}

function LandingPageItem() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[130px] items-center relative shrink-0 w-[82px]" data-name="Landing page item">
      <HomePageNewScan />
      <Name />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[272px] items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-[392px]" data-name="1">
      <LandingPageItem />
    </div>
  );
}

function HomePagePatients() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Home page - Patients">
      <div className="absolute inset-[85.03%_8.35%_4.64%_9.04%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 9">
          <path d={svgPaths.p38953f00} fill="var(--fill-0, black)" fillOpacity="0.102" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.91%_15.73%_69.44%_63.62%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <path d={svgPaths.p228f2570} fill="url(#paint0_linear_125_8598)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8598" x1="-52.6668" x2="-52.6668" y1="48.9582" y2="111.511">
              <stop stopColor="#B5D675" />
              <stop offset="1" stopColor="#89C462" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[30.05%_3.88%_12.02%_51.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 47">
          <path d={svgPaths.p35445700} fill="url(#paint0_linear_125_8501)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8501" x1="-43.4295" x2="-43.4295" y1="32.5349" y2="80.4079">
              <stop stopColor="#B5D675" />
              <stop offset="1" stopColor="#89C462" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[9.8%_15.73%_69.55%_63.62%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <path d={svgPaths.p1bfa5080} fill="var(--fill-0, #399927)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[30.05%_3.82%_12.02%_51.77%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 47">
          <path d={svgPaths.p3b1cf180} fill="var(--fill-0, #399927)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.91%_62.93%_69.44%_16.41%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <path d={svgPaths.p26a5d580} fill="url(#paint0_linear_125_8603)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8603" x1="-14.904" x2="-14.904" y1="11.1954" y2="73.7487">
              <stop stopColor="#B5D675" />
              <stop offset="1" stopColor="#89C462" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[30.05%_51.08%_12.02%_4.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 47">
          <path d={svgPaths.pd73d900} fill="url(#paint0_linear_125_8495)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8495" x1="-5.66866" x2="-5.66866" y1="-5.22618" y2="42.646">
              <stop stopColor="#B5D675" />
              <stop offset="1" stopColor="#89C462" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[9.8%_62.93%_69.55%_16.42%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <path d={svgPaths.p1fac2600} fill="var(--fill-0, #399927)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[30.05%_51.11%_12.02%_4.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 47">
          <path d={svgPaths.p3a262b00} fill="var(--fill-0, #399927)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[2.43%_36.38%_71.02%_37.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <path d={svgPaths.p1ac7d200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[25.9%_21.85%_3.16%_22.54%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 57">
          <path d={svgPaths.p2bf98880} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[3.9%_37.86%_72.49%_38.54%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <path d={svgPaths.p30874c80} fill="url(#paint0_linear_125_8613)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8613" x1="-27.8005" x2="-27.8005" y1="34.8819" y2="108.049">
              <stop stopColor="#59CAF4" />
              <stop offset="1" stopColor="#00ACEF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[27.37%_23.32%_4.64%_23.97%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 55">
          <path d={svgPaths.p22640000} fill="url(#paint0_linear_125_8481)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8481" x1="-16.4631" x2="-16.4631" y1="15.7836" y2="72.4934">
              <stop stopColor="#59CAF4" />
              <stop offset="1" stopColor="#00ACEF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[3.9%_37.86%_72.49%_38.54%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <path d={svgPaths.p16ba8b00} fill="var(--fill-0, #0067AC)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.37%_23.32%_4.64%_23.97%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 55">
          <path d={svgPaths.p10246e00} fill="var(--fill-0, #0067AC)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function HomePagePatients1() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Home page - Patients">
      <HomePagePatients />
    </div>
  );
}

function Name1() {
  return (
    <div className="h-[34px] relative shrink-0 w-[82px]" data-name="./Name">
      <p className="absolute font-['Avenir:Medium',sans-serif] leading-[33px] left-1/2 not-italic text-[#3e3d40] text-[30px] text-center text-nowrap top-0 translate-x-[-50%]">Patients</p>
    </div>
  );
}

function LandingPageItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[130px] items-center relative shrink-0 w-[82px]" data-name="Landing page item">
      <HomePagePatients1 />
      <Name1 />
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[272px] items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-[392px]" data-name="3">
      <LandingPageItem1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Component1 />
      <Component3 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute inset-[2.5%_6.51%_3.05%_6.25%]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 76">
        <g id="icon">
          <path d={svgPaths.p2b985280} fill="var(--fill-0, black)" fillOpacity="0.102" id="Vector" />
          <path d={svgPaths.p3c4b7380} fill="url(#paint0_linear_125_8485)" id="Vector_2" />
          <path d={svgPaths.p308b5800} fill="var(--fill-0, #399927)" id="Vector_3" />
          <path d={svgPaths.p225489f0} fill="var(--fill-0, #DAEBBA)" id="Vector_4" />
          <path d={svgPaths.p37260700} fill="var(--fill-0, #E7E7E8)" id="Vector_5" />
          <path d={svgPaths.p10002f80} fill="var(--fill-0, #717073)" id="Vector_6" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8485" x1="-8.90775" x2="-8.90775" y1="34.1753" y2="88.3217">
            <stop stopColor="#B5D675" />
            <stop offset="1" stopColor="#89C462" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function HomePageOrders() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Home page - Orders">
      <Icon12 />
    </div>
  );
}

function HomePageOrders1() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Home page - Orders">
      <HomePageOrders />
    </div>
  );
}

function Name2() {
  return (
    <div className="h-[34px] relative shrink-0 w-[82px]" data-name="./Name">
      <p className="absolute font-['Avenir:Medium',sans-serif] leading-[33px] left-[calc(50%+0.5px)] not-italic text-[#3e3d40] text-[30px] text-center text-nowrap top-0 translate-x-[-50%]">Orders</p>
    </div>
  );
}

function LandingPageItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[130px] items-center relative shrink-0 w-[82px]" data-name="Landing page item">
      <HomePageOrders1 />
      <Name2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[272px] items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-[392px]" data-name="2">
      <LandingPageItem2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[75px] overflow-clip relative shrink-0 w-[80px]" data-name="Frame">
      <div className="absolute inset-[85.84%_2.68%_2.71%_2.3%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 9">
          <path d={svgPaths.p1538300} fill="var(--fill-0, black)" fillOpacity="0.102" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[2.8%_4.22%_5.66%_3.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 69">
          <path d={svgPaths.p21770c00} fill="url(#paint0_linear_125_8475)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_8475" x1="-0.765977" x2="-0.765977" y1="37.5476" y2="111.111">
              <stop stopColor="#59CAF4" />
              <stop offset="1" stopColor="#00ACEF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[3.61%_4.98%_6.48%_4.6%]" data-name="Vector">
        <div className="absolute inset-[-0.91%_-0.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 69">
            <path d={svgPaths.p3853bc00} id="Vector" stroke="var(--stroke-0, #0067AC)" strokeLinejoin="round" strokeWidth="1.22575" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.47%_8.05%_9.74%_7.66%]" data-name="Vector">
        <div className="absolute inset-[-2.94%_-0.91%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
            <path d={svgPaths.p3ce20180} id="Vector" stroke="var(--stroke-0, #9DDCF9)" strokeLinejoin="round" strokeWidth="1.22575" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[3px]" data-name="Home">
      <Frame1 />
    </div>
  );
}

function HomePageMessages() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Home page - Messages">
      <Home />
    </div>
  );
}

function Name3() {
  return (
    <div className="h-[34px] relative shrink-0 w-[82px]" data-name="./Name">
      <p className="absolute font-['Avenir:Medium',sans-serif] leading-[33px] left-[calc(50%+0.5px)] not-italic text-[#3e3d40] text-[30px] text-center text-nowrap top-0 translate-x-[-50%]">Messages</p>
    </div>
  );
}

function LandingPageItem3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[130px] items-center relative shrink-0 w-[82px]" data-name="Landing page item">
      <HomePageMessages />
      <Name3 />
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[272px] items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-[392px]" data-name="4">
      <LandingPageItem3 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Component2 />
      <Component4 />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Cards">
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Content15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[74px] h-[754px] items-start left-1/2 top-[125px] translate-x-[-50%] w-[808px]" data-name="Content">
      <Header />
      <Cards />
    </div>
  );
}

export default function Home4Sq() {
  return (
    <div className="bg-[#f9f9f9] relative size-full" data-name="Home - 4 sq">
      <div className="relative size-full">
        <Frame />
        <div className="absolute bg-[#c4c4c4] h-[76px] left-[1781px] opacity-0 top-0 w-[139px]" data-name="tap zone" />
        <div className="absolute bg-[rgba(196,196,196,0)] h-[76px] left-[1666px] top-0 w-[254px]" data-name="tap zone" />
        <div className="absolute inset-[4.17%_50.42%_88.43%_45.1%]" data-name="1">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="1"></g>
          </svg>
        </div>
        <div className="absolute inset-[4.17%_45.1%_88.43%_50.42%]" data-name="2">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="1"></g>
          </svg>
        </div>
        <div className="absolute inset-[4.17%_39.79%_88.43%_55.73%]" data-name="3">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="1"></g>
          </svg>
        </div>
        <div className="absolute inset-[4.17%_34.48%_88.43%_61.04%]" data-name="4">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="1"></g>
          </svg>
        </div>
        <div className="absolute inset-[4.17%_29.17%_88.43%_66.35%]" data-name="5">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="1"></g>
          </svg>
        </div>
        <ScreenTemplate />
        <ScreenTemplate1 />
        <ScreenTemplate2 />
        <Content15 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}