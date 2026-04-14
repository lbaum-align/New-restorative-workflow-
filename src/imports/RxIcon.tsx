import svgPaths from "./svg-hn1oce3ok0";

function Group1() {
  return (
    <div className="absolute inset-[1.18%_7.29%_16.03%_1.04%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 33.9445">
        <g id="Group 3015">
          <path d={svgPaths.p2a9adc00} fill="url(#paint0_linear_273_5267)" id="Path 4119" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_273_5267" x1="-5.36291e-07" x2="32.6046" y1="-0.475222" y2="42.9714">
            <stop stopColor="#59CAF5" />
            <stop offset="1" stopColor="#00ADEF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0_6.25%_14.84%_0]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 34.9143">
        <g id="Group 3016">
          <path d={svgPaths.p10aff280} fill="var(--fill-0, #0067AC)" id="Path 4120" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[4.73%_10.42%_19.57%_4.17%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 31.035">
        <g id="Group 3017">
          <path d={svgPaths.p29058d70} fill="var(--fill-0, #9DDCF9)" id="Path 4121" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[0_6.25%_14.84%_0]">
      <Group1 />
      <Group2 />
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[0_6.25%_14.84%_0]">
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[0_6.25%_14.84%_0]">
      <Group5 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[23.65%_0_5.38%_0]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 29.0953">
        <g id="Group 3014">
          <path d={svgPaths.pc49d400} fill="url(#paint0_linear_273_5256)" id="Path 4116" />
          <path d={svgPaths.p1a61c500} fill="var(--fill-0, #0067AC)" id="Path 4117" />
          <path d={svgPaths.p15e80f0} fill="var(--fill-0, #9DDCF9)" id="Path 4118" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_273_5256" x1="24" x2="24" y1="0.485105" y2="28.6105">
            <stop stopColor="#59CAF5" />
            <stop offset="1" stopColor="#00ADEF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-0">
      <p className="absolute font-['Arial_Unicode_MS:Regular',sans-serif] inset-[19.57%_30.22%_0_32.28%] leading-[normal] not-italic text-[25.5px] text-white">℞</p>
      <Group6 />
      <Group />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[44.18%_35.06%_19.79%_35.06%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Group 5173">
          <path d={svgPaths.p1c526e00} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-0">
      <Group7 />
      <Group8 />
    </div>
  );
}

export default function RxIcon() {
  return (
    <div className="relative size-full" data-name="Rx Icon">
      <Group9 />
    </div>
  );
}