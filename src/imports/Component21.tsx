import svgPaths from "./svg-no2nmn84fl";
import imgImage8 from "figma:asset/9fc98949f904edb334a67827da5dd102bb3d721a.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[28px] relative shrink-0 text-[18px] text-center w-full">
      <p className="css-4hzbpn font-['Roboto',sans-serif] font-medium relative shrink-0 text-[#3e3d40] w-full" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        SBYSBSC ALLONUS Tech Co., Ltd
      </p>
      <p className="css-4hzbpn font-['Roboto',sans-serif] font-medium not-italic relative shrink-0 text-[#3e3d40] w-full" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        BioAbutment
      </p>
    </div>
  );
}

function ArrowUp() {
  return (
    <div className="absolute left-[390px] size-[32px] top-[116px]" data-name="Arrow up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Arrow up">
          <path d={svgPaths.p2daf9980} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[30px] items-start px-[24px] py-[48px] relative w-full">
        <Frame />
        <ArrowUp />
      </div>
    </div>
  );
}

function Minimize() {
  return (
    <div className="absolute left-[8px] size-[32px] top-[8px]" data-name="Minimize">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Minimize">
          <g id="Vector">
            <path d={svgPaths.p16c03600} fill="var(--fill-0, #3E3D40)" />
            <path d={svgPaths.p39aea780} fill="var(--fill-0, #3E3D40)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StarOutline() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Star outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Star outline">
          <path d={svgPaths.p10b32200} fill="var(--fill-0, #B0B1B3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#eef9fd] relative rounded-bl-[8px] rounded-tl-[8px] size-full" data-name="Component 21">
      <div className="content-stretch flex flex-col gap-[80px] items-center overflow-clip pt-[80px] relative rounded-[inherit] size-full">
        <div className="h-[304px] relative shrink-0 w-[270px]" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
        <Frame1 />
        <Minimize />
        <StarOutline />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-tl-[8px]" />
    </div>
  );
}