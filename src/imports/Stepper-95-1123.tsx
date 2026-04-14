import svgPaths from "./svg-dt20xoj712";

function Content() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pre-treatment
      </p>
    </div>
  );
}

function StepWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[72px] items-start justify-center px-[40px] py-[16px] relative shrink-0 w-[259px]" data-name="Step Wrapper">
      <Content />
      <div className="absolute h-[72px] right-[-6px] top-1/2 translate-y-[-50%] w-[21px]" data-name="Arrow">
        <div className="absolute inset-[-0.35%_-2.38%_-0.35%_-2.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 73">
            <path d={svgPaths.p29b5c40} id="Arrow" stroke="var(--stroke-0, #CFD6DC)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Treatment scan
      </p>
    </div>
  );
}

function StepWrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[72px] items-start justify-center px-[40px] py-[16px] relative shrink-0 w-[272px]" data-name="Step Wrapper">
      <Content1 />
      <div className="absolute h-[72px] right-[-6px] top-1/2 translate-y-[-50%] w-[21px]" data-name="Arrow">
        <div className="absolute inset-[-0.35%_-2.38%_-0.35%_-2.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 73">
            <path d={svgPaths.p29b5c40} id="Arrow" stroke="var(--stroke-0, #CFD6DC)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Additional scan
      </p>
    </div>
  );
}

function StepWrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[72px] items-start justify-center px-[40px] py-[16px] relative shrink-0 w-[262px]" data-name="Step Wrapper">
      <Content2 />
    </div>
  );
}

export default function Stepper() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[8px] size-full" data-name="Stepper">
      <StepWrapper />
      <StepWrapper1 />
      <StepWrapper2 />
    </div>
  );
}