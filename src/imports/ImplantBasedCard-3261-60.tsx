import svgPaths from "./svg-auh6aiwotf";
import imgImplantBasedCard from "figma:asset/9fc98949f904edb334a67827da5dd102bb3d721a.png";

export default function ImplantBasedCard() {
  return (
    <div className="bg-[#eef9fd] relative rounded-[8px] size-full" data-name="Implant based card">
      <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip pt-[12px] relative rounded-[inherit] size-full">
        <div className="h-[70px] relative shrink-0 w-[68px]" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImplantBasedCard} />
        </div>
        <div className="bg-white content-stretch flex flex-col h-[80px] items-start py-[8px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-ellipsis w-full whitespace-pre-wrap" dir="ltr" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                <span className="leading-[28px]">{`Straumann® Group `}</span>
                <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  ·
                </span>
                <span className="leading-[28px]">{` 2.9 mm `}</span>
                <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  ·
                </span>
                <span className="leading-[28px]">{` BioAbutment `}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-[215px] overflow-clip size-[32px] top-[4px]" data-name="Star outline">
          <div className="absolute inset-[6.25%_4%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
              <path d={svgPaths.p38b95000} fill="var(--fill-0, #B0B1B3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}