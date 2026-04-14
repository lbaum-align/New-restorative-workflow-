import svgPaths from "./svg-9h33n3ok4k";

function Group() {
  return (
    <div className="absolute bottom-[4.9%] left-1/4 right-1/4 top-[3.92%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 93">
        <g id="Group 1361">
          <path d={svgPaths.p3f887080} fill="var(--fill-0, #EBF2F7)" id="Path 2339" />
          <g id="Group 1359">
            <path d={svgPaths.p2d1b9940} fill="var(--fill-0, #D1E2ED)" id="Path 2340" />
          </g>
          <path d={svgPaths.p2925be00} fill="var(--fill-0, #EBF2F7)" id="Path 2341" />
          <path d={svgPaths.pfcceb80} fill="url(#paint0_linear_98_28601)" id="Path 2342" />
          <g id="Group 1360">
            <path d={svgPaths.p1f03fe00} fill="var(--fill-0, white)" id="Path 2343" />
          </g>
          <path d={svgPaths.p27a75b00} fill="var(--fill-0, #7AABCC)" id="Path 2344" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_28601" x1="14.479" x2="14.479" y1="69.2736" y2="4.99658">
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
    <div className="absolute inset-[4.4%_24.06%_61.85%_24.02%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 35">
        <g id="Group 1362">
          <path d={svgPaths.peda200} fill="var(--fill-0, #7AABCC)" id="Path 2345" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[4.4%_24.06%_61.85%_24.02%]">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[4.4%_24.06%_61.85%_24.02%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[3.92%_24.06%_4.9%_24.02%]">
      <Group />
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[3.92%_24.06%_4.9%_24.02%]">
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[3.92%_24.06%_4.9%_24.02%]">
      <Group5 />
    </div>
  );
}

function High() {
  return (
    <div className="absolute contents inset-[0_0_0.98%_0]" data-name="high20">
      <div className="absolute inset-[0_0_0.98%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 270"></g>
        </svg>
      </div>
      <Group6 />
    </div>
  );
}

export default function ToothLarge() {
  return (
    <div className="relative size-full" data-name="TOOTH - large">
      <High />
    </div>
  );
}