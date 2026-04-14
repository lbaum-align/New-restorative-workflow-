import svgPaths from "./svg-jxm6fmpisr";

function Group() {
  return (
    <div className="absolute inset-[6.5%_27.58%_8.82%_31.36%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 87">
        <g id="Group 1405">
          <path d={svgPaths.p2db54b80} fill="var(--fill-0, #D1E2ED)" id="Path 2376" />
          <path d={svgPaths.p224d8100} fill="var(--fill-0, #D1E2ED)" id="Path 2377" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[6.5%_27.58%_8.82%_31.36%]">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[4.55%_41.45%_10.82%_24.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 87">
        <g id="Group 1407">
          <path d={svgPaths.p19dd1300} fill="var(--fill-0, white)" id="Path 2380" />
          <path d={svgPaths.pc944b00} fill="var(--fill-0, white)" id="Path 2381" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[4.55%_41.45%_10.82%_24.13%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[0_22.42%_4.9%_18.96%]">
      <div className="absolute inset-[0.49%_23.27%_5.39%_19.81%]" data-name="Path 2375">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 96">
          <path d={svgPaths.p2ce3ef00} fill="var(--fill-0, #EBF2F7)" id="Path 2375" />
        </svg>
      </div>
      <Group1 />
      <div className="absolute inset-[5.53%_31.02%_9.8%_27.58%]" data-name="Path 2378">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 87">
          <path d={svgPaths.p2f1d1800} fill="var(--fill-0, #EBF2F7)" id="Path 2378" />
        </svg>
      </div>
      <div className="absolute inset-[6.53%_32.77%_11.76%_29.29%]" data-name="Path 2379">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 84">
          <path d={svgPaths.p13d808f0} fill="url(#paint0_linear_98_29367)" id="Path 2379" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_29367" x1="11.0017" x2="11.0017" y1="83.3441" y2="0">
              <stop stopColor="white" />
              <stop offset="0.25" stopColor="#F2F7FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group3 />
      <div className="absolute inset-[0_22.42%_4.9%_18.96%]" data-name="Path 2382">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 97">
          <path d={svgPaths.p17ec3100} fill="var(--fill-0, #7AABCC)" id="Path 2382" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[51.9%_21.48%_4.38%_18.04%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 45">
        <g id="Group 1410">
          <path d={svgPaths.p5d1800} fill="var(--fill-0, #7AABCC)" id="Path 2383" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[0_21.48%_4.38%_18.04%]">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[0_21.48%_4.38%_18.04%]">
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[0_21.48%_4.38%_18.04%]">
      <Group7 />
    </div>
  );
}

function High() {
  return (
    <div className="absolute contents inset-[-3.92%_1.72%_0.98%_-1.72%]" data-name="high9">
      <div className="absolute inset-[-3.92%_1.72%_0.98%_-1.72%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 253"></g>
        </svg>
      </div>
      <Group8 />
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