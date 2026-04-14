import svgPaths from "./svg-i4o0e1qgde";

function Group() {
  return (
    <div className="absolute inset-[1.01%_24.9%_5.05%_25.1%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 93">
        <g id="Group 1549">
          <path d={svgPaths.p21356000} fill="var(--fill-0, #EBF2F7)" id="Path 2521" />
          <g id="Group 1547">
            <path d={svgPaths.p2552b080} fill="var(--fill-0, #D1E2ED)" id="Path 2522" />
          </g>
          <path d={svgPaths.p11fabe00} fill="var(--fill-0, #EBF2F7)" id="Path 2523" />
          <path d={svgPaths.p33419f00} fill="url(#paint0_linear_98_29661)" id="Path 2524" />
          <g id="Group 1548">
            <path d={svgPaths.p2bda3600} fill="var(--fill-0, white)" id="Path 2525" />
          </g>
          <path d={svgPaths.p3f1c5ec0} fill="var(--fill-0, #7AABCC)" id="Path 2526" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_29661" x1="-7565.75" x2="-7565.75" y1="69.2756" y2="4.97705">
            <stop stopColor="white" />
            <stop offset="0.25" stopColor="#F2F7FA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[1.51%_23.94%_63.72%_24.14%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 35">
        <g id="Group 1550">
          <path d={svgPaths.p20443ec0} fill="var(--fill-0, #7AABCC)" id="Path 2527" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[1.51%_23.94%_63.72%_24.14%]">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[1.51%_23.94%_63.72%_24.14%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[1.01%_23.94%_5.05%_24.14%]">
      <Group />
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[1.01%_23.94%_5.05%_24.14%]">
      <Group4 />
      <div className="absolute inset-[1.01%_24.9%_5.05%_25.1%]" data-name="Path 2965">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Path 2965"></g>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[1.01%_23.94%_5.05%_24.14%]">
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[1.01%_23.94%_5.05%_24.14%]">
      <Group6 />
    </div>
  );
}

export default function ToothLarge() {
  return (
    <div className="relative size-full" data-name="TOOTH - large">
      <Group7 />
    </div>
  );
}