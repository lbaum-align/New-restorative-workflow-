import svgPaths from "./svg-dhwtxuzll1";

function Group() {
  return (
    <div className="absolute inset-[23.83%_35.26%_7.84%_39.99%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 70">
        <g id="Group 1443">
          <path d={svgPaths.p2c94f200} fill="var(--fill-0, #D1E2ED)" id="Path 2414" />
          <path d={svgPaths.p27e688f0} fill="var(--fill-0, #D1E2ED)" id="Path 2415" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[23.83%_35.26%_7.84%_39.99%]">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[21.87%_54.01%_10.22%_26.81%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.122 69.268">
        <g id="Group 1445">
          <path d={svgPaths.p3b36eb00} fill="var(--fill-0, white)" id="Path 2418" />
          <path d={svgPaths.p1c922000} fill="var(--fill-0, white)" id="Path 2419" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[21.87%_54.01%_10.22%_26.81%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[2.94%_30.08%_3.92%_21.64%]">
      <div className="absolute inset-[3.43%_30.95%_4.41%_22.5%]" data-name="Path 2413">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 94">
          <path d={svgPaths.p39427500} fill="var(--fill-0, #EBF2F7)" id="Path 2413" />
        </svg>
      </div>
      <Group1 />
      <div className="absolute inset-[22.85%_38.71%_8.82%_30.26%]" data-name="Path 2416">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 70">
          <path d={svgPaths.p3ff8fe00} fill="var(--fill-0, #EBF2F7)" id="Path 2416" />
        </svg>
      </div>
      <div className="absolute inset-[29.45%_40.43%_10.78%_31.95%]" data-name="Path 2417">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 61">
          <path d={svgPaths.p67fe370} fill="url(#paint0_linear_98_29957)" id="Path 2417" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_98_29957" x1="8.0096" x2="8.0096" y1="60.9587" y2="0">
              <stop stopColor="white" />
              <stop offset="0.25" stopColor="#F2F7FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group3 />
      <div className="absolute inset-[2.94%_30.08%_3.92%_21.64%]" data-name="Path 2420">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 95">
          <path d={svgPaths.p17603800} fill="var(--fill-0, #7AABCC)" id="Path 2420" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[57.83%_29.11%_3.44%_20.69%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 40">
        <g id="Group 1448">
          <path d={svgPaths.p193484f0} fill="var(--fill-0, #7AABCC)" id="Path 2421" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[2.94%_29.11%_3.44%_20.69%]">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[2.94%_29.11%_3.44%_20.69%]">
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[2.94%_29.11%_3.44%_20.69%]">
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