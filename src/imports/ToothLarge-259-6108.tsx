import svgPaths from "./svg-9wbxzl9jr5";

function Group() {
  return (
    <div className="absolute inset-[3.92%_32.74%_4.9%_32.76%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 93">
        <g id="Group 1393">
          <path d={svgPaths.p2ec5a780} fill="var(--fill-0, #EBF2F7)" id="Path 2361" />
          <g id="Group 1391">
            <path d={svgPaths.p7a19100} fill="var(--fill-0, #D1E2ED)" id="Path 2362" />
          </g>
          <path d={svgPaths.p214f0100} fill="var(--fill-0, #EBF2F7)" id="Path 2363" />
          <path d={svgPaths.pe717680} fill="url(#paint0_linear_98_29496)" id="Path 2364" />
          <g id="Group 1392">
            <path d={svgPaths.p36ec9170} fill="var(--fill-0, white)" id="Path 2365" />
          </g>
          <path d={svgPaths.p1b1b5500} fill="var(--fill-0, #7AABCC)" id="Path 2366" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_29496" x1="10.0039" x2="10.0039" y1="58.1748" y2="5.00427">
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
    <div className="absolute inset-[3.41%_31.79%_58.82%_31.79%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 39">
        <g id="Group 1394">
          <path d={svgPaths.p2c165700} fill="var(--fill-0, #7AABCC)" id="Path 2367" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[3.41%_31.79%_4.9%_31.79%]">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[3.41%_31.79%_4.9%_31.79%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[3.41%_31.79%_4.9%_31.79%]">
      <Group3 />
    </div>
  );
}

function High() {
  return (
    <div className="absolute contents inset-[0_0_0.98%_0]" data-name="high23">
      <div className="absolute inset-[0_0_0.98%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 270"></g>
        </svg>
      </div>
      <Group4 />
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