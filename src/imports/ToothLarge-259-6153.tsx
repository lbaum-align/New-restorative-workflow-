import svgPaths from "./svg-q7hgrmfmif";

function Group() {
  return (
    <div className="absolute inset-[3.92%_25.86%_1.96%_25.86%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 96">
        <g id="Group 1385">
          <path d={svgPaths.p1d118c80} fill="var(--fill-0, #EBF2F7)" id="Path 2353" />
          <g id="Group 1383">
            <path d={svgPaths.pd6c5f00} fill="var(--fill-0, #D1E2ED)" id="Path 2354" />
          </g>
          <path d={svgPaths.p10cf0780} fill="var(--fill-0, #EBF2F7)" id="Path 2355" />
          <path d={svgPaths.p36a6a800} fill="url(#paint0_linear_98_29291)" id="Path 2356" />
          <g id="Group 1384">
            <path d={svgPaths.p98d7f80} fill="var(--fill-0, white)" id="Path 2357" />
          </g>
          <path d={svgPaths.p15daf500} fill="var(--fill-0, #7AABCC)" id="Path 2358" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_29291" x1="13.994" x2="13.994" y1="71.744" y2="5.29999">
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
    <div className="absolute inset-[3.43%_24.88%_57.85%_24.91%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 40">
        <g id="Group 1386">
          <path d={svgPaths.p1418c100} fill="var(--fill-0, #7AABCC)" id="Path 2359" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[35.29%_53.45%_55.88%_32.52%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="Group 1387">
          <path d={svgPaths.pfa31800} fill="var(--fill-0, #7AABCC)" id="Path 2360" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[3.43%_24.88%_1.96%_24.91%]">
      <Group />
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[3.43%_24.88%_1.96%_24.91%]">
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[3.43%_24.88%_1.96%_24.91%]">
      <Group4 />
    </div>
  );
}

export default function ToothLarge() {
  return (
    <div className="relative size-full" data-name="TOOTH - large">
      <Group5 />
    </div>
  );
}