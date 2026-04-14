import svgPaths from "./svg-2vpgl8weyi";

function Group() {
  return (
    <div className="absolute inset-[9.8%_30.17%_23.66%_56.08%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 68">
        <g id="Group 1560">
          <path d={svgPaths.p10d55a00} fill="var(--fill-0, #D1E2ED)" id="Path 2529" />
          <path d={svgPaths.p3e9c2d00} fill="var(--fill-0, #D1E2ED)" id="Path 2530" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[9.8%_30.17%_23.66%_56.08%]">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[7.84%_40.34%_25.62%_30.21%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 68">
        <g id="Group 1562">
          <path d={svgPaths.p1fe85380} fill="var(--fill-0, white)" id="Path 2533" />
          <path d={svgPaths.p3ccf0580} fill="var(--fill-0, white)" id="Path 2534" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[7.84%_40.34%_25.62%_30.21%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[5.88%] contents left-1/4 right-1/4 top-[3.92%]">
      <div className="absolute inset-[4.41%_25.86%_6.37%_25.86%]" data-name="Path 2528">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 91">
          <path d={svgPaths.p28fc5980} fill="var(--fill-0, #EBF2F7)" id="Path 2528" />
        </svg>
      </div>
      <Group1 />
      <div className="absolute inset-[8.82%_33.61%_24.64%_33.67%]" data-name="Path 2531">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 68">
          <path d={svgPaths.p21aa6f00} fill="var(--fill-0, #EBF2F7)" id="Path 2531" />
        </svg>
      </div>
      <div className="absolute inset-[8.8%_35.33%_29.73%_35.44%]" data-name="Path 2532">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 63">
          <path d={svgPaths.p239f3580} fill="url(#paint0_linear_98_29630)" id="Path 2532" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_29630" x1="-7716.69" x2="-7716.69" y1="62.6983" y2="1.80866e-09">
              <stop stopColor="white" />
              <stop offset="0.25" stopColor="#F2F7FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group3 />
      <div className="absolute bottom-[5.88%] left-1/4 right-1/4 top-[3.92%]" data-name="Path 2535">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 92">
          <path d={svgPaths.p17ca9a00} fill="var(--fill-0, #7AABCC)" id="Path 2535" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[4.42%_24.01%_63.8%_24.03%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 33">
        <g id="Group 1565">
          <path d={svgPaths.p39c22b80} fill="var(--fill-0, #7AABCC)" id="Path 2536" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[4.42%_24.01%_63.8%_24.03%]">
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[4.42%_24.01%_63.8%_24.03%]">
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[3.92%_24.01%_5.88%_24.03%]">
      <Group4 />
      <Group7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[3.92%_24.01%_5.88%_24.03%]">
      <Group8 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[3.92%_24.01%_5.88%_24.03%]">
      <Group9 />
    </div>
  );
}

export default function ToothLarge() {
  return (
    <div className="relative size-full" data-name="TOOTH - large">
      <Group10 />
    </div>
  );
}