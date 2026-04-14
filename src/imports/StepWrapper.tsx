import svgPaths from "./svg-9ipqkdwdcl";

function BxCheckSvg() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="bx-check.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="bx-check.svg">
          <path d={svgPaths.pfd90340} fill="var(--fill-0, #29B3E6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StepSuccess() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[20px]" data-name="Step Success">
      <BxCheckSvg />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Content">
      <StepSuccess />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#696969] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pre-treatment
      </p>
    </div>
  );
}

export default function StepWrapper() {
  return (
    <div className="relative size-full" data-name="Step Wrapper">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center pl-[30px] pr-[40px] py-[16px] relative size-full">
          <Content />
          <div className="absolute h-[72px] right-[-6px] top-1/2 translate-y-[-50%] w-[21px]" data-name="Arrow">
            <div className="absolute inset-[-0.35%_-2.38%_-0.35%_-2.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 73">
                <path d={svgPaths.p29b5c40} id="Arrow" stroke="var(--stroke-0, #CFD6DC)" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}