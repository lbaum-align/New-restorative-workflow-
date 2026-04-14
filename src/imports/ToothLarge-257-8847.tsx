import svgPaths from "./svg-fhrh2zzgt6";

function Group() {
  return (
    <div className="absolute inset-[12.9%_28.39%_8.83%_35.64%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 80">
        <g id="Group 1414">
          <path d={svgPaths.p32a93500} fill="var(--fill-0, #D1E2ED)" id="Path 2385" />
          <path d={svgPaths.p11301900} fill="var(--fill-0, #D1E2ED)" id="Path 2386" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[12.9%_28.39%_8.83%_35.64%]">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[10.94%_44.33%_10.78%_28.52%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7458 79.8461">
        <g id="Group 1416">
          <path d={svgPaths.p1be88400} fill="var(--fill-0, white)" id="Path 2389" />
          <path d={svgPaths.p1fb1c740} fill="var(--fill-0, white)" id="Path 2390" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[10.94%_44.33%_10.78%_28.52%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[4.9%_23.2%_4.9%_23.35%]">
      <div className="absolute inset-[5.39%_24.05%_5.39%_24.2%]" data-name="Path 2384">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 91">
          <path d={svgPaths.p6cb2580} fill="var(--fill-0, #EBF2F7)" id="Path 2384" />
        </svg>
      </div>
      <Group1 />
      <div className="absolute inset-[11.92%_31.84%_9.81%_31.97%]" data-name="Path 2387">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 80">
          <path d={svgPaths.p4f939f2} fill="var(--fill-0, #EBF2F7)" id="Path 2387" />
        </svg>
      </div>
      <div className="absolute inset-[14.1%_33.56%_11.76%_33.69%]" data-name="Path 2388">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 76">
          <path d={svgPaths.p4a7d300} fill="url(#paint0_linear_98_29922)" id="Path 2388" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_29922" x1="9.49898" x2="9.49898" y1="75.616" y2="0">
              <stop stopColor="white" />
              <stop offset="0.25" stopColor="#F2F7FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group3 />
      <div className="absolute inset-[4.9%_23.2%_4.9%_23.35%]" data-name="Path 2391">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 92">
          <path d={svgPaths.p103d6a80} fill="var(--fill-0, #7AABCC)" id="Path 2391" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[53.91%_22.27%_4.41%_22.41%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 43">
        <g id="Group 1419">
          <path d={svgPaths.p1685bc00} fill="var(--fill-0, #7AABCC)" id="Path 2392" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[4.9%_22.27%_4.41%_22.41%]">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[4.9%_22.27%_4.41%_22.41%]">
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[4.9%_22.27%_4.41%_22.41%]">
      <Group7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[4.9%_22.27%_4.41%_22.41%]">
      <Group8 />
    </div>
  );
}

export default function ToothLarge() {
  return (
    <div className="relative size-full" data-name="TOOTH - large">
      <Group9 />
    </div>
  );
}