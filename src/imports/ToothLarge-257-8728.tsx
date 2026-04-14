import svgPaths from "./svg-xn9m60f4ol";

function Group() {
  return (
    <div className="absolute inset-[6.51%_26.65%_8.82%_34.92%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 87">
        <g id="Group 1597">
          <path d={svgPaths.p22cb8980} fill="var(--fill-0, #D1E2ED)" id="Path 2563" />
          <path d={svgPaths.p1b156e80} fill="var(--fill-0, #D1E2ED)" id="Path 2564" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[6.51%_26.65%_8.82%_34.92%]">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[4.55%_52.22%_10.79%_25.06%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 87">
        <g id="Group 1599">
          <path d={svgPaths.p23085180} fill="var(--fill-0, white)" id="Path 2567" />
          <path d={svgPaths.p65a2700} fill="var(--fill-0, white)" id="Path 2568" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[4.55%_52.22%_10.79%_25.06%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[0_21.49%_4.9%_19.89%]">
      <div className="absolute inset-[0.49%_22.34%_5.39%_20.74%]" data-name="Path 2562">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 96">
          <path d={svgPaths.p15ef7df1} fill="var(--fill-0, #EBF2F7)" id="Path 2562" />
        </svg>
      </div>
      <Group1 />
      <div className="absolute inset-[5.52%_30.09%_9.8%_28.51%]" data-name="Path 2565">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 87">
          <path d={svgPaths.pf584500} fill="var(--fill-0, #EBF2F7)" id="Path 2565" />
        </svg>
      </div>
      <div className="absolute inset-[6.54%_31.82%_11.76%_30.24%]" data-name="Path 2566">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 84">
          <path d={svgPaths.p9b5b080} fill="url(#paint0_linear_98_29592)" id="Path 2566" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_29592" x1="-8157.53" x2="-8157.53" y1="83.3344" y2="0">
              <stop stopColor="white" />
              <stop offset="0.25" stopColor="#F2F7FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group3 />
      <div className="absolute inset-[0_21.49%_4.9%_19.89%]" data-name="Path 2569">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 97">
          <path d={svgPaths.p2415bf80} fill="var(--fill-0, #7AABCC)" id="Path 2569" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[51.9%_20.55%_4.39%_18.97%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 45">
        <g id="Group 1602">
          <path d={svgPaths.p30579780} fill="var(--fill-0, #7AABCC)" id="Path 2570" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[0_20.55%_4.39%_18.97%]">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[0_20.55%_4.39%_18.97%]">
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[0_20.55%_4.39%_18.97%]">
      <Group7 />
      <div className="absolute inset-[0_21.49%_4.9%_19.89%]" data-name="Path 2961">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Path 2961"></g>
        </svg>
      </div>
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