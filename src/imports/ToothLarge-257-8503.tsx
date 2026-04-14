import svgPaths from "./svg-x2v6szmhkj";

function Group() {
  return (
    <div className="absolute inset-[22.19%_31.8%_5.21%_39.54%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 70">
        <g id="Group 1637">
          <path d={svgPaths.p391f1800} fill="var(--fill-0, #D1E2ED)" id="Path 2605" />
          <path d={svgPaths.p220d9500} fill="var(--fill-0, #D1E2ED)" id="Path 2606" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[22.19%_31.8%_5.21%_39.54%]">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[20.11%_54.21%_7.32%_30.27%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 70">
        <g id="Group 1639">
          <path d={svgPaths.p92d1ff0} fill="var(--fill-0, white)" id="Path 2609" />
          <path d={svgPaths.p333acd70} fill="var(--fill-0, white)" id="Path 2610" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[20.11%_54.21%_7.32%_30.27%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[0_26.62%_1.04%_25.1%]">
      <div className="absolute inset-[0.52%_27.49%_1.56%_25.96%]" data-name="Path 2604">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 94">
          <path d={svgPaths.p195dee00} fill="var(--fill-0, #EBF2F7)" id="Path 2604" />
        </svg>
      </div>
      <Group1 />
      <div className="absolute inset-[21.15%_35.23%_6.25%_33.72%]" data-name="Path 2607">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 70">
          <path d={svgPaths.p2babc700} fill="var(--fill-0, #EBF2F7)" id="Path 2607" />
        </svg>
      </div>
      <div className="absolute inset-[28.17%_36.94%_8.33%_35.44%]" data-name="Path 2608">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 61">
          <path d={svgPaths.p1b1e9000} fill="url(#paint0_linear_98_29243)" id="Path 2608" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_29243" x1="-7579.16" x2="-7579.16" y1="60.9599" y2="0">
              <stop stopColor="white" />
              <stop offset="0.25" stopColor="#F2F7FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group3 />
      <div className="absolute inset-[0_26.62%_1.04%_25.1%]" data-name="Path 2611">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 95">
          <path d={svgPaths.p1a157e80} fill="var(--fill-0, #7AABCC)" id="Path 2611" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[58.34%_25.67%_0.51%_24.14%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 40">
        <g id="Group 1642">
          <path d={svgPaths.p1aef4f00} fill="var(--fill-0, #7AABCC)" id="Path 2612" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[0_25.67%_0.51%_24.14%]">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[0_25.67%_0.51%_24.14%]">
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[0_25.67%_0.51%_24.14%]">
      <Group7 />
    </div>
  );
}

export default function ToothLarge() {
  return (
    <div className="relative size-full" data-name="TOOTH - large">
      <Group8 />
    </div>
  );
}