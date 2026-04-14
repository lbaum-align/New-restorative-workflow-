import svgPaths from "./svg-m5l327svxt";
import imgScreenshot20221109At13091 from "figma:asset/22c8274398284723cf97f1470cd780174dd5439c.png";

function ArrowsRightArrow() {
  return (
    <div className="h-[34.901px] relative w-[26px]" data-name="Arrows / right arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 34.9012">
        <g id="Arrows / right arrow">
          <g clipPath="url(#clip0_3198_37)">
            <path d={svgPaths.p16907d80} fill="var(--fill-0, #0067AC)" id="Vector" />
            <g id="Arrows / right arrow_2">
              <path d={svgPaths.p198ac280} fill="var(--fill-0, #0067AC)" id="Vector_2" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_3198_37">
            <rect fill="white" height="34.9012" rx="4" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ZoomButton() {
  return (
    <div className="col-1 h-[28.49px] ml-[24.55%] mt-[24.56%] relative row-1 w-[28.498px]" data-name="Zoom Button">
      <div className="absolute inset-[-0.18%_-7.02%_-7.02%_-0.19%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.5522 30.5406">
          <g id="Zoom Button">
            <g id="Ellipse 205">
              <path d={svgPaths.pd48a500} fill="var(--fill-0, #F2FBFF)" id="Vector" />
              <path d={svgPaths.p2dac0600} id="Vector_2" stroke="var(--stroke-0, #0067AC)" strokeMiterlimit="10" />
            </g>
            <path d={svgPaths.p278be700} fill="var(--fill-0, #00ADEF)" id="Rectangle 866" />
            <path d={svgPaths.p2edbb200} fill="var(--fill-0, #00ADEF)" id="Rectangle 867" />
            <path d={svgPaths.p3ad3cf80} id="Line 105" stroke="var(--stroke-0, #0067AC)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ZoomButtonContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Zoom Button Container">
      <div className="bg-[rgba(255,255,255,0.54)] col-1 ml-0 mt-0 rounded-[4px] row-1 size-[56px]" data-name="Zoom Button Background" />
      <ZoomButton />
    </div>
  );
}

function NiriIocImages() {
  return (
    <div className="content-stretch flex gap-[10px] h-[416px] items-start justify-end relative shrink-0 w-full" data-name="NIRI + IOC Images">
      <div className="absolute inset-0 rounded-[4px]" data-name="Screenshot 2022-11-09 at 13.09 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
          <img alt="" className="absolute h-[262.51%] left-0 max-w-none top-[-15.59%] w-[102.37%]" src={imgScreenshot20221109At13091} />
        </div>
      </div>
      <ZoomButtonContainer />
    </div>
  );
}

function ZoomButton1() {
  return (
    <div className="col-1 h-[28.49px] ml-[24.55%] mt-[24.56%] relative row-1 w-[28.498px]" data-name="Zoom Button">
      <div className="absolute inset-[-0.18%_-7.02%_-7.02%_-0.19%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.5522 30.5406">
          <g id="Zoom Button">
            <g id="Ellipse 205">
              <path d={svgPaths.pd48a500} fill="var(--fill-0, #F2FBFF)" id="Vector" />
              <path d={svgPaths.p2dac0600} id="Vector_2" stroke="var(--stroke-0, #0067AC)" strokeMiterlimit="10" />
            </g>
            <path d={svgPaths.p278be700} fill="var(--fill-0, #00ADEF)" id="Rectangle 866" />
            <path d={svgPaths.p2edbb200} fill="var(--fill-0, #00ADEF)" id="Rectangle 867" />
            <path d={svgPaths.p3ad3cf80} id="Line 105" stroke="var(--stroke-0, #0067AC)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ZoomButtonContainer1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Zoom Button Container">
      <div className="bg-[rgba(255,255,255,0.54)] col-1 ml-0 mt-0 rounded-[4px] row-1 size-[56px]" data-name="Zoom Button Background" />
      <ZoomButton1 />
    </div>
  );
}

function NiriIocImages1() {
  return (
    <div className="content-stretch flex gap-[10px] h-[416px] items-start justify-end relative shrink-0 w-full" data-name="NIRI + IOC Images">
      <div className="absolute inset-[0.08%_0] rounded-[4px]" data-name="Screenshot 2022-11-09 at 13.09 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
          <img alt="" className="absolute h-[261.15%] left-0 max-w-none top-[-146%] w-[101.88%]" src={imgScreenshot20221109At13091} />
        </div>
      </div>
      <ZoomButtonContainer1 />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[330px]" data-name="Image Container">
      <NiriIocImages />
      <NiriIocImages1 />
    </div>
  );
}

export default function ReviewContainer() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex gap-[4px] items-center p-[8px] relative size-full" data-name="Review-Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ArrowsRightArrow />
        </div>
      </div>
      <ImageContainer />
    </div>
  );
}