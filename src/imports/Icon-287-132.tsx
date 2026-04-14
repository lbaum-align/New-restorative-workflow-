import svgPaths from "./svg-x1iprapfuv";
import { imgPath4141 } from "./svg-306dg";

function Path() {
  return (
    <div className="absolute inset-[27.96%_10.38%_0.15%_-2.55%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.131px_-10.397px] mask-size-[37.732px_35.361px]" data-name="Path 4141" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 27">
        <g id="Path 4141">
          <path d={svgPaths.p2db7f900} fill="url(#paint0_linear_122_2852)" id="Vector" />
          <path d={svgPaths.p3f495b80} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_122_2852" x1="20.4474" x2="20.4474" y1="0.449379" y2="26.2895">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path1() {
  return (
    <div className="absolute inset-[5.6%_-18.49%_24.31%_65.82%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-29.203px_-2.083px] mask-size-[37.732px_35.361px]" data-name="Path 4142" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3683 26.0648">
        <g id="Path 4142">
          <path d={svgPaths.p14ed8980} fill="url(#paint0_linear_287_83)" id="Vector" />
          <path d={svgPaths.p1da05600} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_287_83" x1="11.6829" x2="11.6829" y1="0.449387" y2="25.6154">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path2() {
  return (
    <div className="absolute inset-[5.6%_80.77%_24.31%_-33.44%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[14.838px_-2.083px] mask-size-[37.732px_35.361px]" data-name="Path 4143" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3683 26.0648">
        <g id="Path 4142">
          <path d={svgPaths.p14ed8980} fill="url(#paint0_linear_287_83)" id="Vector" />
          <path d={svgPaths.p1da05600} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_287_83" x1="11.6829" x2="11.6829" y1="0.449387" y2="25.6154">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Path3() {
  return (
    <div className="absolute inset-[5.6%_30.13%_24.31%_17.2%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7.631px_-2.083px] mask-size-[37.732px_35.361px]" data-name="Path 4144" style={{ maskImage: `url('${imgPath4141}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3683 26.0648">
        <g id="Path 4142">
          <path d={svgPaths.p14ed8980} fill="url(#paint0_linear_287_83)" id="Vector" />
          <path d={svgPaths.p1da05600} fill="var(--fill-0, #949496)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_287_83" x1="11.6829" x2="11.6829" y1="0.449387" y2="25.6154">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E7E7E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[5.6%_-18.49%_0.15%_-33.44%]">
      <Path />
      <Path1 />
      <Path2 />
      <Path3 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[0_14.95%_4.92%_0]" data-name="Mask Group">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[15.3%_0_0_29%]">
      <div className="absolute inset-[-1.59%_-6.35%_-6.35%_-1.59%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <g id="Group 4961">
            <g id="Ellipse 464">
              <path d={svgPaths.p35509000} id="Vector" stroke="var(--stroke-0, #0067AC)" strokeMiterlimit="10" />
            </g>
            <path d="M23 23L32 32" id="Line 274" stroke="var(--stroke-0, #0067AC)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Icon() {
  return (
    <div className="relative size-full" data-name="Icon">
      <MaskGroup />
      <Group1 />
    </div>
  );
}