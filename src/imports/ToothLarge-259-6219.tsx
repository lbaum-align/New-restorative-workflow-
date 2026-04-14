import svgPaths from "./svg-kxf8g5lswy";

function Group() {
  return (
    <div className="absolute bottom-[5.88%] left-1/4 right-1/4 top-[3.92%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 92">
        <g id="Group 1374">
          <path d={svgPaths.p5ba2080} fill="var(--fill-0, #EBF2F7)" id="Path 2346" />
          <g id="Group 1372">
            <path d={svgPaths.p32674970} fill="var(--fill-0, #D1E2ED)" id="Path 2347" />
          </g>
          <path d={svgPaths.p182879f0} fill="var(--fill-0, #EBF2F7)" id="Path 2348" />
          <path d={svgPaths.pfe527f0} fill="url(#paint0_linear_98_29762)" id="Path 2349" />
          <g id="Group 1373">
            <path d={svgPaths.p36b23700} fill="var(--fill-0, white)" id="Path 2350" />
          </g>
          <path d={svgPaths.p38ad09c0} fill="var(--fill-0, #7AABCC)" id="Path 2351" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_29762" x1="14.4765" x2="14.4765" y1="67.6751" y2="5.00409">
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
    <div className="absolute inset-[4.41%_24.04%_63.8%_24%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 33">
        <g id="Group 1375">
          <path d={svgPaths.p8418380} fill="var(--fill-0, #7AABCC)" id="Path 2352" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[4.41%_24.04%_63.8%_24%]">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[4.41%_24.04%_63.8%_24%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[3.92%_24.04%_5.88%_24%]">
      <Group />
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[3.92%_24.04%_5.88%_24%]">
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[3.92%_24.04%_5.88%_24%]">
      <Group5 />
    </div>
  );
}

function High() {
  return (
    <div className="absolute contents inset-[0_0_1.96%_0]" data-name="high21">
      <div className="absolute inset-[0_0_1.96%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 272"></g>
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