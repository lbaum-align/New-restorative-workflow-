import svgPaths from "./svg-ue0l5wuxe6";
import imgImage8 from "figma:asset/9fc98949f904edb334a67827da5dd102bb3d721a.png";

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <p className="css-4hzbpn font-['Roboto:Bold',sans-serif] font-bold leading-[28px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-ellipsis w-full" dir="ltr" style={{ fontVariationSettings: "'wdth' 100" }}>{`Straumann® Group · 2.9 mm · BioAbutment `}</p>
      </div>
    </div>
  );
}

function Edit() {
  return (
    <div className="absolute left-[215px] size-[32px] top-[44px]" data-name="Edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Edit">
          <g id="Vector">
            <path d="M30 26H2V28H30V26Z" fill="#0067AC" />
            <path d={svgPaths.p3bc04400} fill="#0067AC" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[80px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
      <Frame />
      <Edit />
    </div>
  );
}

export default function ImplantBasedCard() {
  return (
    <div className="bg-[#eef9fd] relative rounded-[8px] size-full" data-name="Implant based card">
      <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip pt-[12px] relative rounded-[inherit] size-full">
        <div className="h-[70px] relative shrink-0 w-[68px]" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#00adef] border-solid inset-[-4px] pointer-events-none rounded-[12px]" />
    </div>
  );
}