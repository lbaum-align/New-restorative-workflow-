import svgPaths from "./svg-lr6apg6kcw";

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[52px]" data-name="Chevron left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
        <g id="Chevron left" />
      </svg>
    </div>
  );
}

function Frame6() {
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

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#696a6d] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        14129123
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[189px]">
      <Group />
      <Frame />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Account />
      <Frame1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame2() {
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

function Frame3() {
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

function Frame4() {
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

function Frame5() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[67px] items-center leading-[28px] relative shrink-0 text-[18px]">
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
      <Frame8 />
      <Frame5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Doctor Name | 12367854
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[200px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-w-full relative shrink-0 text-[#696a6d] text-[18px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Treated by:
      </p>
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[60px] h-full items-center relative shrink-0">
      <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
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
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[60px] h-full items-center relative shrink-0">
      <Frame9 />
      <Frame12 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <g id="Vector">
            <path d="M30 26H2V28H30V26Z" fill="#0067AC" />
            <path d={svgPaths.p3bc04400} fill="#0067AC" />
          </g>
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

export default function RxPatientHeaderUpdated() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between pl-[4px] pr-[40px] py-[24px] relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_2px_8px_0px_rgba(0,0,0,0.15)] size-full" data-name="Rx / Patient header - updated">
      <div className="flex flex-row items-center self-stretch">
        <Frame13 />
      </div>
      <Button />
    </div>
  );
}