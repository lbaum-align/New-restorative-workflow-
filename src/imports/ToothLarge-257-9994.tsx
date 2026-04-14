import svgPaths from "./svg-pasyibbqub";

function Group() {
  return (
    <div className="absolute inset-[3.92%_32.76%_4.9%_32.74%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 93">
        <g id="Group 1583">
          <path d={svgPaths.p379e0600} fill="var(--fill-0, #EBF2F7)" id="Path 2545" />
          <g id="Group 1581">
            <path d={svgPaths.paa8b00} fill="var(--fill-0, #D1E2ED)" id="Path 2546" />
          </g>
          <path d={svgPaths.p763ef00} fill="var(--fill-0, #EBF2F7)" id="Path 2547" />
          <path d={svgPaths.p216ab700} fill="url(#paint0_linear_98_28729)" id="Path 2548" />
          <g id="Group 1582">
            <path d={svgPaths.p2479ca80} fill="var(--fill-0, white)" id="Path 2549" />
          </g>
          <path d={svgPaths.p2e875c00} fill="var(--fill-0, #7AABCC)" id="Path 2550" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_28729" x1="-8017.9" x2="-8017.9" y1="58.1746" y2="5.00409">
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
    <div className="absolute inset-[3.4%_31.78%_58.82%_31.8%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 39">
        <g id="Group 1584">
          <path d={svgPaths.p4638000} fill="var(--fill-0, #7AABCC)" id="Path 2551" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[3.4%_31.78%_4.9%_31.8%]">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[3.4%_31.78%_4.9%_31.8%]">
      <Group2 />
    </div>
  );
}

function High() {
  return (
    <div className="absolute inset-[0_0_0.98%_0]" data-name="high26">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 101">
        <g id="high26">
          <g id="Rectangle 267"></g>
        </g>
      </svg>
    </div>
  );
}

function High1() {
  return (
    <div className="absolute contents inset-[0_0_0.98%_0]" data-name="high26">
      <Group3 />
      <High />
    </div>
  );
}

export default function ToothLarge() {
  return (
    <div className="relative size-full" data-name="TOOTH - large">
      <High1 />
    </div>
  );
}