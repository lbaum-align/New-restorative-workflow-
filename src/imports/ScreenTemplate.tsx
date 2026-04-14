import svgPaths from "./svg-aglqwj9u85";
import imgImage67 from "figma:asset/07f97a5be96fd814ee3e830a2d5bb8ecc4ab9638.png";
import { imgPath4141 } from "./svg-umz0t";

function Frame() {
  return <div className="absolute bg-[#f9f9f9] h-[1080px] left-0 overflow-clip top-0 w-[1920px]" data-name="./frame" />;
}

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

function FormContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[52px] items-start left-[46px] top-[138px] w-[1835px]" data-name="Form Container">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.93)] w-full" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create a new patient
      </p>
      <Container1 />
    </div>
  );
}

function Group3() {
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

function Group4() {
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

function Group5() {
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

function Group6() {
  return (
    <div className="absolute bottom-1/4 contents left-[10.84%] right-[14.16%] top-[15%]">
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute bottom-1/4 contents left-[10.84%] right-[14.16%] top-[15%]">
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute bottom-1/4 contents left-[10.84%] right-[14.16%] top-[15%]">
      <Group7 />
    </div>
  );
}

function Group2() {
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

function Group9() {
  return (
    <div className="absolute contents inset-[15%_9.16%_14.54%_10.84%]">
      <p className="absolute font-['Arial_Unicode_MS:Regular',sans-serif] inset-[28.79%_33.33%_14.54%_36.67%] leading-[normal] not-italic text-[25.5px] text-nowrap text-white">℞</p>
      <Group8 />
      <Group2 />
    </div>
  );
}

function Group22() {
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
      <Group9 />
      <Group22 />
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

function Group10() {
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

function Path() {
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

function Group11() {
  return (
    <div className="absolute contents inset-[15.03%_26.97%_15.53%_26.74%]">
      <Group10 />
      <Path />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[15.03%_26.97%_15.53%_26.74%]">
      <Group11 />
    </div>
  );
}

function Group13() {
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

function Group14() {
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

function Group15() {
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

function Group16() {
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

function Group17() {
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

function Group18() {
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

function Group19() {
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
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
      <Group18 />
      <Group19 />
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

function Component1() {
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

function Path1() {
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

function Path2() {
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

function Path3() {
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

function Path4() {
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

function Group20() {
  return (
    <div className="absolute bottom-[16.58%] contents left-[-8.25%] right-[-4.1%] top-1/4">
      <Path1 />
      <Path2 />
      <Path3 />
      <Path4 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[21.53%_20.63%_19.54%_16.48%]" data-name="Mask Group">
      <Group20 />
    </div>
  );
}

function Group21() {
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
      <Group21 />
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
      <Component1 />
      <HeaderWizardAtoms2 />
      <Component1 />
      <HeaderWizardAtoms3 />
    </div>
  );
}

function Group() {
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

function Group1() {
  return (
    <div className="absolute contents inset-[21.87%_31.25%]">
      <Group />
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
      <Group1 />
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

function Frame1() {
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
      <Frame1 />
      <View />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex inset-[14.44%_90.52%_14.44%_0.73%] items-center justify-center px-[24px] py-[22px] rounded-[4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Back</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#bfeafb] content-stretch flex inset-[12.22%_1.56%_16.67%_89.69%] items-center justify-center px-[24px] py-[22px] rounded-[4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Create</p>
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

export default function ScreenTemplate() {
  return (
    <div className="bg-[#e9e9e9] relative size-full" data-name="Screen template">
      <div className="relative size-full">
        <HeaderTopBarITero />
        <RxStickyfooter />
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
        <FormContainer />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}