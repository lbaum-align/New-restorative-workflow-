import svgPaths from "./svg-1iyhr9mq7s";

function Group() {
  return (
    <div className="absolute inset-[3.92%_18.03%_5.88%_28.52%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 92">
        <g id="Group 1608">
          <path d={svgPaths.p3d7feb70} fill="var(--fill-0, #EBF2F7)" id="Path 2571" />
          <g id="Group 1606">
            <path d={svgPaths.p1d550e80} fill="var(--fill-0, #D1E2ED)" id="Path 2572" />
          </g>
          <path d={svgPaths.p1cc5db00} fill="var(--fill-0, #EBF2F7)" id="Path 2573" />
          <path d={svgPaths.p11e3a680} fill="url(#paint0_linear_98_29405)" id="Path 2574" />
          <g id="Group 1607">
            <path d={svgPaths.p3dd25700} fill="var(--fill-0, white)" id="Path 2575" />
          </g>
          <path d={svgPaths.p1b7aca00} fill="var(--fill-0, #7AABCC)" id="Path 2576" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_29405" x1="-8006.5" x2="-8006.5" y1="84.9992" y2="9.38306">
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
    <div className="absolute inset-[52.93%_17.1%_5.39%_27.59%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 43">
        <g id="Group 1609">
          <path d={svgPaths.p73bf400} fill="var(--fill-0, #7AABCC)" id="Path 2577" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[3.92%_17.1%_5.39%_27.59%]">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[3.92%_17.1%_5.39%_27.59%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[3.92%_17.1%_5.39%_27.59%]">
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