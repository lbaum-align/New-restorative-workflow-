import svgPaths from "./svg-8psimwmo83";

export default function IconsMarginLine({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[48px]"} data-name="Icons/Margin line">
      <div className="absolute left-[2px] size-[44px] top-[2px]" data-name="Mask">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g id="Mask">
            <mask height="44" id="mask0_3312_390" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="44" x="0" y="0">
              <circle cx="22" cy="22" fill="var(--fill-0, #D9D9D9)" id="Ellipse 623" r="22" />
            </mask>
            <g mask="url(#mask0_3312_390)">
              <rect fill="var(--fill-0, #FFD6D6)" height="17" id="Rectangle 22339" width="49" x="-1" y="28" />
            </g>
          </g>
        </svg>
      </div>
      <div className="absolute inset-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-3.76%_-3.75%_-3.75%_-3.95%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5391 21.5015">
            <path d={svgPaths.p3ceee590} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #3E3D40)" strokeMiterlimit="10" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[17px] size-[23px] top-[7px]" data-name="Pen">
        <div className="absolute inset-[8.33%_6.7%_6.71%_8.33%]" data-name="pen">
          <div className="absolute inset-[-7.68%_-7.68%_-7.68%_-7.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5409 22.5403">
              <path d={svgPaths.p3e2ea400} fill="var(--fill-0, #399927)" id="pen" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[56.25%_16.67%_20.83%_16.67%]" data-name="Group">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 11">
          <g id="Group">
            <path d={svgPaths.p357a2180} fill="var(--fill-0, #239B28)" id="Vector" />
            <path d={svgPaths.p367aff00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}