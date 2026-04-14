import svgPaths from "./svg-99p9i7l5y4";

function ChevronDown() {
  return (
    <div className="relative size-[32px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Chevron down">
          <path d={svgPaths.p32fcff00} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0 size-[32px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
      <Frame1 />
    </div>
  );
}