import svgPaths from "./svg-2bir6gr0mb";

function Group() {
  return (
    <div className="absolute inset-[0.98%_24.91%_-0.98%_23.35%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 102">
        <g id="Group 1425">
          <path d={svgPaths.p19bd4d00} fill="var(--fill-0, #EBF2F7)" id="Path 2393" />
          <g id="Group 1423">
            <path d={svgPaths.p437f400} fill="var(--fill-0, #D1E2ED)" id="Path 2394" />
          </g>
          <path d={svgPaths.p350f9200} fill="var(--fill-0, #EBF2F7)" id="Path 2395" />
          <path d={svgPaths.p128c2300} fill="url(#paint0_linear_98_29308)" id="Path 2396" />
          <g id="Group 1424">
            <path d={svgPaths.pd60e100} fill="var(--fill-0, white)" id="Path 2397" />
          </g>
          <path d={svgPaths.p3774e300} fill="var(--fill-0, #7AABCC)" id="Path 2398" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_29308" x1="14.9994" x2="14.9994" y1="94.9832" y2="22.4512">
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
    <div className="absolute inset-[60.84%_55.22%_9.26%_22.41%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 31">
        <g id="Group 1426">
          <path d={svgPaths.p173fe480} fill="var(--fill-0, #7AABCC)" id="Path 2399" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[0.98%_24.91%_-0.98%_22.41%]">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[0.98%_24.91%_-0.98%_22.41%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[0.98%_24.91%_-0.98%_22.41%]">
      <Group3 />
    </div>
  );
}

export default function ToothLarge() {
  return (
    <div className="relative size-full" data-name="TOOTH - large">
      <Group4 />
    </div>
  );
}