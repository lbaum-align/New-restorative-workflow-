import clsx from "clsx";
import svgPaths from "./svg-eqjiurbr72";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[28px]">{children}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[8px] relative rounded-[8px] size-full">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <Wrapper additionalClassNames="text-black">B, Doctor</Wrapper>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <Wrapper additionalClassNames="text-[#3e3d40]">02/15/2026</Wrapper>
            <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[20px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                      <line id="Line 1143" stroke="var(--stroke-0, #3E3D40)" x2="20" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[28px]" dir="auto">
                1 minute ago
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Edit">
              <div className="absolute inset-[6.25%_6.25%_12.5%_6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
                  <g id="Vector">
                    <path d="M28 24H0V26H28V24Z" fill="#3E3D40" />
                    <path d={svgPaths.p83df200} fill="#3E3D40" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Delete">
              <div className="absolute inset-[6.25%_12.5%]" data-name="Shape">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
                  <g id="Shape">
                    <path d="M10 10H8V22H10V10Z" fill="#3E3D40" />
                    <path d="M16 10H14V22H16V10Z" fill="#3E3D40" />
                    <path d={svgPaths.p1460b400} fill="#3E3D40" />
                    <path d="M16 0H8V2H16V0Z" fill="#3E3D40" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#939598] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">Please keep mesial and distal contacts slightly light; patient is sensitive to tight contacts.</p>
      </div>
    </div>
  );
}