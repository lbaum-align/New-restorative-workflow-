import svgPaths from "./svg-qdsbj2qb7y";

function Group() {
  return (
    <div className="absolute inset-[3%_32.09%_64.67%_46.25%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 33">
        <g id="Group 1433">
          <path d={svgPaths.pa17a700} fill="var(--fill-0, #EBF2F7)" id="Path 2400" />
          <g id="Group 1431">
            <path d={svgPaths.pbc9f400} fill="var(--fill-0, #D1E2ED)" id="Path 2401" />
          </g>
          <path d={svgPaths.p3680c980} fill="var(--fill-0, #EBF2F7)" id="Path 2402" />
          <path d={svgPaths.p1f89d200} fill="url(#paint0_linear_98_29342)" id="Path 2403" />
          <g id="Group 1432">
            <path d={svgPaths.p3eb5f8c0} fill="var(--fill-0, white)" id="Path 2404" />
          </g>
          <path d={svgPaths.p28b94200} fill="var(--fill-0, #7AABCC)" id="Path 2405" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_29342" x1="6.28993" x2="6.28993" y1="21.7222" y2="13.3032">
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
    <div className="absolute inset-[0_22.41%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 102">
        <g id="Group 1436">
          <path d={svgPaths.p2d79b0f0} fill="var(--fill-0, #EBF2F7)" id="Path 2406" />
          <g id="Group 1434">
            <path d={svgPaths.p1c21b130} fill="var(--fill-0, #D1E2ED)" id="Path 2407" />
          </g>
          <path d={svgPaths.p3a3d8600} fill="var(--fill-0, #EBF2F7)" id="Path 2408" />
          <path d={svgPaths.p381f69f0} fill="url(#paint0_linear_98_29878)" id="Path 2409" />
          <g id="Group 1435">
            <path d={svgPaths.p39aac900} fill="var(--fill-0, white)" id="Path 2410" />
          </g>
          <path d={svgPaths.p2acd2b70} fill="var(--fill-0, #7AABCC)" id="Path 2411" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_29878" x1="16.0129" x2="16.0129" y1="95.004" y2="22.278">
            <stop stopColor="white" />
            <stop offset="0.25" stopColor="#F2F7FA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[63.68%_21.5%_3.76%_53.22%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 34">
        <g id="Group 1437">
          <path d={svgPaths.p3c959f00} fill="var(--fill-0, #7AABCC)" id="Path 2412" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[0_21.5%_0_22.41%]">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[0_21.5%_0_22.41%]">
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[0_21.5%_0_22.41%]">
      <Group />
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[0_21.5%_0_22.41%]">
      <Group5 />
    </div>
  );
}

export default function ToothLarge() {
  return (
    <div className="relative size-full" data-name="TOOTH - large">
      <Group6 />
    </div>
  );
}