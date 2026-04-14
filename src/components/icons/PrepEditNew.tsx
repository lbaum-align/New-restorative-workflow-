import svgPaths from "../../imports/svg-88qi54abaa";

function Frame4() {
  return (
    <div className="absolute h-[39px] left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[47px]">
      <div className="absolute inset-[-2.56%_-2.13%_0_-6.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 40">
          <g id="Frame 1618873037">
            <g id="trim area">
              <path d={svgPaths.p3d2968c0} fill="var(--fill-0, #FFD6D6)" id="Vector" />
              <path d={svgPaths.p15368980} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #3D3935)" strokeMiterlimit="10" strokeWidth="1.75" />
            </g>
            <g id="Shape">
              <path d={svgPaths.p1e660000} fill="var(--fill-0, #009ACE)" />
              <path clipRule="evenodd" d={svgPaths.pbdf0800} fill="white" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p362805c0} fill="white" fillRule="evenodd" />
              <path d={svgPaths.p3f02d080} stroke="var(--stroke-0, white)" strokeLinejoin="round" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-0 size-[60px] top-0">
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[calc(50%+1px)] size-[60px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame2 />
    </div>
  );
}

export default function PrepEditNew() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Prep edit new">
      <Frame1 />
    </div>
  );
}
