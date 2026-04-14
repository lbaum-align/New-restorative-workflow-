import svgPaths from "./svg-ro36ge505n";

function Group() {
  return (
    <div className="absolute inset-[18.18%_25.85%_3.92%_46.63%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 80">
        <g id="Group 1613">
          <path d={svgPaths.p1316d500} fill="var(--fill-0, #D1E2ED)" id="Path 2579" />
          <path d={svgPaths.p24d51f00} fill="var(--fill-0, #D1E2ED)" id="Path 2580" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[18.18%_25.85%_3.92%_46.63%]">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[16.22%_46.88%_5.88%_32.77%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 80">
        <g id="Group 1615">
          <path d={svgPaths.p321df70} fill="var(--fill-0, white)" id="Path 2583" />
          <path d={svgPaths.p1f02fe80} fill="var(--fill-0, white)" id="Path 2584" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[16.22%_46.88%_5.88%_32.77%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[0_20.68%_0_27.59%]">
      <div className="absolute inset-[0.49%_21.54%_0.49%_28.44%]" data-name="Path 2578">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 101">
          <path d={svgPaths.p1d0be380} fill="var(--fill-0, #EBF2F7)" id="Path 2578" />
        </svg>
      </div>
      <Group1 />
      <div className="absolute inset-[17.2%_29.31%_4.9%_36.22%]" data-name="Path 2581">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 80">
          <path d={svgPaths.p13e056b0} fill="var(--fill-0, #EBF2F7)" id="Path 2581" />
        </svg>
      </div>
      <div className="absolute inset-[22.05%_31.02%_6.87%_37.94%]" data-name="Path 2582">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 73">
          <path d={svgPaths.p5b25500} fill="url(#paint0_linear_98_28565)" id="Path 2582" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_28565" x1="-7866.15" x2="-7866.15" y1="72.501" y2="0">
              <stop stopColor="white" />
              <stop offset="0.25" stopColor="#F2F7FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group3 />
      <div className="absolute inset-[0_20.68%_0_27.59%]" data-name="Path 2585">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 102">
          <path d={svgPaths.p3ee3d370} fill="var(--fill-0, #7AABCC)" id="Path 2585" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[59.86%_19.73%_10.24%_57.9%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 31">
        <g id="Group 1618">
          <path d={svgPaths.p30551600} fill="var(--fill-0, #7AABCC)" id="Path 2586" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[0_19.73%_0_27.59%]">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[0_19.73%_0_27.59%]">
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[0_19.73%_0_27.59%]">
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