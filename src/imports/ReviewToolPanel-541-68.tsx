import svgPaths from "./svg-86noxb5b24";
import imgScreenshot20221109At13092 from "figma:asset/22c8274398284723cf97f1470cd780174dd5439c.png";
import imgScreenShot20220727At2350 from "figma:asset/85992d98a85ebda774e1363fea1b11c53b299457.png";

function ExpandButton() {
  return (
    <div className="h-[23px] relative shrink-0 w-[24px]" data-name="Expand Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23">
        <g id="Expand Button">
          <path d={svgPaths.p309bc740} fill="var(--fill-0, #0067AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0.16%_0_0_0]">
      <div className="absolute inset-[0.16%_0_0_0] rounded-[4px]" data-name="Screenshot 2022-11-09 at 13.09 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
          <img alt="" className="absolute h-[261.15%] left-0 max-w-none top-[-146%] w-[101.88%]" src={imgScreenshot20221109At13092} />
        </div>
      </div>
    </div>
  );
}

function ZoomButton() {
  return (
    <div className="[grid-area:1_/_1] h-[28.079px] ml-[24.55%] mt-[24.56%] relative w-[33.973px]" data-name="Zoom Button">
      <div className="absolute inset-[-0.21%_-5.89%_-7.12%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9725 30.1378">
          <g id="Zoom Button">
            <g id="Ellipse 205">
              <path d={svgPaths.p5c77a30} fill="var(--fill-0, #F2FBFF)" id="Vector" />
              <path d={svgPaths.p14502300} id="Vector_2" stroke="var(--stroke-0, #0067AC)" strokeMiterlimit="10" />
            </g>
            <path d={svgPaths.p3f745980} fill="var(--fill-0, #00ADEF)" id="Rectangle 866" />
            <path d={svgPaths.p12c289f0} fill="var(--fill-0, #00ADEF)" id="Rectangle 867" />
            <path d={svgPaths.p2d195780} id="Line 105" stroke="var(--stroke-0, #0067AC)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ZoomButtonContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Zoom Button Container">
      <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.54)] h-[55.192px] ml-0 mt-0 rounded-[4px] w-[66.759px]" data-name="Zoom Button Background" />
      <ZoomButton />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[410px] relative shrink-0 w-full" data-name="Image">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-end px-px py-0 relative size-full">
          <div className="absolute inset-[0_0_0.25%_0] rounded-[4px]" data-name="Screen Shot 2022-07-27 at 23.50">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgScreenShot20220727At2350} />
          </div>
          <Group />
          <ZoomButtonContainer />
        </div>
      </div>
    </div>
  );
}

function ZoomButton1() {
  return (
    <div className="[grid-area:1_/_1] h-[28.079px] ml-[24.55%] mt-[24.56%] relative w-[33.973px]" data-name="Zoom Button">
      <div className="absolute inset-[-0.21%_-5.89%_-7.12%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9725 30.1378">
          <g id="Zoom Button">
            <g id="Ellipse 205">
              <path d={svgPaths.p5c77a30} fill="var(--fill-0, #F2FBFF)" id="Vector" />
              <path d={svgPaths.p14502300} id="Vector_2" stroke="var(--stroke-0, #0067AC)" strokeMiterlimit="10" />
            </g>
            <path d={svgPaths.p3f745980} fill="var(--fill-0, #00ADEF)" id="Rectangle 866" />
            <path d={svgPaths.p12c289f0} fill="var(--fill-0, #00ADEF)" id="Rectangle 867" />
            <path d={svgPaths.p2d195780} id="Line 105" stroke="var(--stroke-0, #0067AC)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ZoomButtonContainer1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Zoom Button Container">
      <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.54)] h-[55.192px] ml-0 mt-0 rounded-[4px] w-[66.759px]" data-name="Zoom Button Background" />
      <ZoomButton1 />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[410px] relative shrink-0 w-full" data-name="Image">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-end px-px py-0 relative size-full">
          <div className="absolute inset-0 rounded-[4px]" data-name="Screenshot 2022-11-09 at 13.09 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
              <img alt="" className="absolute h-[262.51%] left-0 max-w-none top-[-15.59%] w-[102.37%]" src={imgScreenshot20221109At13092} />
            </div>
          </div>
          <ZoomButtonContainer1 />
        </div>
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Image Container">
      <Image />
      <Image1 />
    </div>
  );
}

export default function ReviewToolPanel() {
  return (
    <div className="bg-[#ecf1f5] relative size-full" data-name="Review-Tool-Panel">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-0 py-0 relative size-full">
          <ExpandButton />
          <ImageContainer />
        </div>
      </div>
    </div>
  );
}