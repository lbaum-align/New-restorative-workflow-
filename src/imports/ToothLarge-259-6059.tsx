import svgPaths from "./svg-y1qgsrqy5r";

function Group() {
  return (
    <div className="absolute inset-[3.92%_32.74%_8.82%_32.76%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 89">
        <g id="Group 1400">
          <path d={svgPaths.p1df03d00} fill="var(--fill-0, #EBF2F7)" id="Path 2368" />
          <g id="Group 1398">
            <path d={svgPaths.p19f55200} fill="var(--fill-0, #D1E2ED)" id="Path 2369" />
          </g>
          <path d={svgPaths.pd16c240} fill="var(--fill-0, #EBF2F7)" id="Path 2370" />
          <path d={svgPaths.p2086e000} fill="url(#paint0_linear_98_28680)" id="Path 2371" />
          <g id="Group 1399">
            <path d={svgPaths.p100d6d80} fill="var(--fill-0, white)" id="Path 2372" />
          </g>
          <path d={svgPaths.p2845c070} fill="var(--fill-0, #7AABCC)" id="Path 2373" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_28680" x1="10.0032" x2="10.0032" y1="51" y2="4.99701">
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
    <div className="absolute inset-[3.4%_31.82%_56.86%_31.76%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 41">
        <g id="Group 1401">
          <path d={svgPaths.p1d889f10} fill="var(--fill-0, #7AABCC)" id="Path 2374" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[3.4%_31.82%_8.82%_31.76%]">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[3.4%_31.82%_8.82%_31.76%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[3.4%_31.82%_8.82%_31.76%]">
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