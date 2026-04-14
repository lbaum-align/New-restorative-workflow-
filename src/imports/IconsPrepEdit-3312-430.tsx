import svgPaths from "./svg-jgsibnk8ee";

function Mask() {
  return (
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
  );
}

export default function IconsPrepEdit() {
  return (
    <div className="relative size-full" data-name="Icons/Prep edit">
      <Mask />
      <div className="-translate-x-1/2 absolute bottom-[29.17%] left-1/2 top-[29.17%] w-[20px]" data-name="Vector">
        <div className="absolute inset-[-3.75%_-3.75%_-3.75%_-3.95%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5391 21.5002">
            <path d={svgPaths.p3c1c580} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #0067AC)" strokeDasharray="3 3" strokeMiterlimit="10" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[16.67px] size-[23.833px] top-[6.58px]" data-name="Pen">
        <div className="absolute inset-[8.33%_6.7%_6.71%_8.33%]" data-name="pen">
          <div className="absolute inset-[-7.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.2489 23.2483">
              <path d={svgPaths.p3523c080} fill="var(--fill-0, #0067AC)" id="pen" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}