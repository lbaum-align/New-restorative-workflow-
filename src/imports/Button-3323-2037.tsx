import svgPaths from "./svg-0ymc5817fs";

export default function Button() {
  return (
    <div className="bg-[#bfeafb] relative rounded-[4px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[22px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
            <div className="absolute inset-[12.51%_12.52%_12.5%_12.39%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0214 17.9972">
                <path d={svgPaths.p1f804340} fill="var(--fill-0, #0067AC)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}