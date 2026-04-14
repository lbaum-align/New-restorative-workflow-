import svgPaths from "./svg-ji95wzn31z";

function Group() {
  return (
    <div className="absolute inset-[22.31%_31.06%_4.72%_40.28%]">
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
    <div className="absolute contents inset-[22.31%_31.06%_4.72%_40.28%]">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[20.21%_53.47%_6.85%_31.01%]">
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
    <div className="absolute contents inset-[20.21%_53.47%_6.85%_31.01%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[0_25.89%_0.54%_25.83%]">
      <div className="absolute inset-[0.52%_26.75%_1.06%_26.69%]" data-name="Path 2604">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 94">
          <path d={svgPaths.p195dee00} fill="var(--fill-0, #EBF2F7)" id="Path 2604" />
        </svg>
      </div>
      <Group1 />
      <div className="absolute inset-[21.25%_34.5%_5.77%_34.45%]" data-name="Path 2607">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 70">
          <path d={svgPaths.p2babc700} fill="var(--fill-0, #EBF2F7)" id="Path 2607" />
        </svg>
      </div>
      <div className="absolute inset-[28.31%_36.2%_7.86%_36.18%]" data-name="Path 2608">
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
      <div className="absolute inset-[0_25.89%_0.54%_25.83%]" data-name="Path 2611">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 95">
          <path d={svgPaths.p1a157e80} fill="var(--fill-0, #7AABCC)" id="Path 2611" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[58.64%_24.93%_0_24.87%]">
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
    <div className="absolute contents inset-[0_24.93%_0_24.87%]">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[0_24.93%_0_24.87%]">
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[0_24.93%_0_24.87%]">
      <Group7 />
    </div>
  );
}

export default function Regular() {
  return (
    <div className="relative size-full" data-name="Regular1">
      <div className="absolute inset-[1.32%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 245"></g>
        </svg>
      </div>
      <Group8 />
    </div>
  );
}