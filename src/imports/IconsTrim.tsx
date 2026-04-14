import svgPaths from "./svg-cg4cyn1c8f";

export default function IconsTrim({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[48px]"} data-name="Icons/Trim">
      <div className="absolute left-[2px] size-[44px] top-[2px]" data-name="Mask">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
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
      <div className="absolute inset-[16.51%_16.51%_23.56%_23.56%]" data-name="trim area">
        <div className="absolute inset-[-2.61%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.2692 30.2692">
            <g id="trim area">
              <path d={svgPaths.p19c7e00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #3D3935)" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p2484b380} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #3D3935)" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p34e2d200} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, #3D3935)" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p9edaa00} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, #3D3935)" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.pe065280} fill="var(--fill-0, #3D3935)" id="Vector_5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}