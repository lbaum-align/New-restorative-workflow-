import svgPaths from "./svg-nkec1z6vog";

function Group() {
  return (
    <div className="absolute inset-[3.92%_25.86%_1.96%_25.86%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 96">
        <g id="Group 1575">
          <path d={svgPaths.p1f4bf100} fill="var(--fill-0, #EBF2F7)" id="Path 2537" />
          <g id="Group 1573">
            <path d={svgPaths.p226ff400} fill="var(--fill-0, #D1E2ED)" id="Path 2538" />
          </g>
          <path d={svgPaths.pc100600} fill="var(--fill-0, #EBF2F7)" id="Path 2539" />
          <path d={svgPaths.p19f01f00} fill="url(#paint0_linear_98_29611)" id="Path 2540" />
          <g id="Group 1574">
            <path d={svgPaths.p34111200} fill="var(--fill-0, white)" id="Path 2541" />
          </g>
          <path d={svgPaths.p375b3300} fill="var(--fill-0, #7AABCC)" id="Path 2542" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_29611" x1="-7860.01" x2="-7860.01" y1="71.7438" y2="5.30176">
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
    <div className="absolute inset-[3.43%_24.9%_57.84%_24.9%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 40">
        <g id="Group 1576">
          <path d={svgPaths.p150a7ea0} fill="var(--fill-0, #7AABCC)" id="Path 2543" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[35.29%_32.52%_55.88%_53.45%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="Group 1577">
          <path d={svgPaths.p44e2600} fill="var(--fill-0, #7AABCC)" id="Path 2544" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[3.43%_24.9%_1.96%_24.9%]">
      <Group />
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[3.43%_24.9%_1.96%_24.9%]">
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[3.43%_24.9%_1.96%_24.9%]">
      <Group4 />
    </div>
  );
}

export default function ToothLarge() {
  return (
    <div className="relative size-full" data-name="TOOTH - large">
      <Group5 />
    </div>
  );
}