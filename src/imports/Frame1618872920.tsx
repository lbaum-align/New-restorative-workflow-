import svgPaths from "./svg-olb0dkq8bn";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+0.78px)] size-[15.556px] top-[calc(50%-2.22px)]">
      <div className="-rotate-45 flex-none">
        <div className="h-[7px] relative w-[15px]" data-name="Check">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 7">
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckboxPieceHelper() {
  return (
    <Wrapper>
      <path d="M0 0H3V4H15V7H0V0Z" fill="var(--fill-0, #0067AC)" id="Check" />
    </Wrapper>
  );
}
type CheckboxPieceProps = {
  className?: string;
  checked?: "Checked" | "Not checked" | "Intermediate";
  state?: "Enabled" | "Hovered" | "Focused" | "Disabled";
};

function CheckboxPiece({ className, checked = "Checked", state = "Enabled" }: CheckboxPieceProps) {
  if (checked === "Checked" && state === "Hovered") {
    return (
      <div className={className || "relative rounded-[3px] size-[28px]"} data-name="Checked=Checked, State=Hovered">
        <div className="absolute bg-[#408dc1] left-[-4px] opacity-20 rounded-[8px] size-[36px] top-[-4px]" data-name="Hover" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#939598] border-solid left-1/2 rounded-[4px] size-[20px] top-1/2" data-name="Box" />
        <CheckboxPieceHelper />
      </div>
    );
  }
  if (checked === "Checked" && state === "Focused") {
    return (
      <div className={className || "relative rounded-[3px] size-[28px]"} data-name="Checked=Checked, State=Focused">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute border-2 border-[#408dc1] border-solid left-1/2 rounded-[8px] size-[28px] top-1/2" data-name="Focus" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#939598] border-solid left-1/2 rounded-[4px] size-[20px] top-1/2" data-name="Box" />
        <CheckboxPieceHelper />
      </div>
    );
  }
  if (checked === "Checked" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[3px] size-[28px]"} data-name="Checked=Checked, State=Disabled">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#d1d1d1] border-solid left-1/2 rounded-[4px] size-[20px] top-1/2" data-name="Box" />
        <Wrapper>
          <path d="M0 0H3V4H15V7H0V0Z" fill="var(--fill-0, #B0B1B3)" id="Check" />
        </Wrapper>
      </div>
    );
  }
  if (checked === "Intermediate" && state === "Enabled") {
    return (
      <div className={className || "relative rounded-[3px] size-[28px]"} data-name="Checked=Intermediate, State=Enabled">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#939598] border-solid left-1/2 rounded-[4px] size-[20px] top-1/2" data-name="Box" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#0067ac] h-[4px] left-1/2 top-1/2 w-[8px]" data-name="Intermediate check" />
      </div>
    );
  }
  if (checked === "Not checked" && state === "Enabled") {
    return (
      <div className={className || "relative rounded-[3px] size-[28px]"} data-name="Checked=Not checked, State=Enabled">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#939598] border-solid left-1/2 rounded-[4px] size-[20px] top-1/2" data-name="Box" />
      </div>
    );
  }
  if (checked === "Intermediate" && state === "Hovered") {
    return (
      <div className={className || "relative rounded-[3px] size-[28px]"} data-name="Checked=Intermediate, State=Hovered">
        <div className="absolute bg-[#408dc1] left-[-4px] opacity-20 rounded-[8px] size-[36px] top-[-4px]" data-name="Hover" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#939598] border-solid left-1/2 rounded-[4px] size-[20px] top-1/2" data-name="Box" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#0067ac] h-[4px] left-1/2 top-1/2 w-[8px]" data-name="Intermediate check" />
      </div>
    );
  }
  if (checked === "Not checked" && state === "Hovered") {
    return (
      <div className={className || "relative rounded-[3px] size-[28px]"} data-name="Checked=Not checked, State=Hovered">
        <div className="absolute bg-[#408dc1] left-[-4px] opacity-20 rounded-[8px] size-[36px] top-[-4px]" data-name="Hover" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#939598] border-solid left-1/2 rounded-[4px] size-[20px] top-1/2" data-name="Box" />
      </div>
    );
  }
  if (checked === "Intermediate" && state === "Focused") {
    return (
      <div className={className || "relative rounded-[3px] size-[28px]"} data-name="Checked=Intermediate, State=Focused">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute border-2 border-[#408dc1] border-solid left-1/2 rounded-[8px] size-[28px] top-1/2" data-name="Focus" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#939598] border-solid left-1/2 rounded-[4px] size-[20px] top-1/2" data-name="Box" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#0067ac] h-[4px] left-1/2 top-1/2 w-[8px]" data-name="Intermediate check" />
      </div>
    );
  }
  if (checked === "Not checked" && state === "Focused") {
    return (
      <div className={className || "relative rounded-[3px] size-[28px]"} data-name="Checked=Not checked, State=Focused">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute border-2 border-[#408dc1] border-solid left-1/2 rounded-[8px] size-[28px] top-1/2" data-name="Focus" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#939598] border-solid left-1/2 rounded-[4px] size-[20px] top-1/2" data-name="Box" />
      </div>
    );
  }
  if (checked === "Intermediate" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[3px] size-[28px]"} data-name="Checked=Intermediate, State=Disabled">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#d1d1d1] border-solid left-1/2 rounded-[4px] size-[20px] top-1/2" data-name="Box" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#b0b1b3] h-[4px] left-1/2 top-1/2 w-[8px]" data-name="Intermediate check" />
      </div>
    );
  }
  if (checked === "Not checked" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[3px] size-[28px]"} data-name="Checked=Not checked, State=Disabled">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#d1d1d1] border-solid left-1/2 rounded-[4px] size-[20px] top-1/2" data-name="Box" />
      </div>
    );
  }
  return (
    <div className={className || "relative rounded-[3px] size-[28px]"} data-name="Checked=Checked, State=Enabled">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#939598] border-solid left-1/2 rounded-[4px] size-[20px] top-1/2" data-name="Box" />
      <CheckboxPieceHelper />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex flex-col items-start justify-end overflow-clip relative rounded-[4px] size-full">
      <div className="content-stretch flex flex-col gap-[8px] h-[160px] items-start relative shrink-0 w-full" data-name="03 Text area">
        <div className="bg-[#f0f0f0] flex-[1_0_0] min-h-px min-w-px rounded-[4px] w-full" data-name="Field" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[100px] left-[calc(50%+1px)] top-1/2 w-[223px]">
          <div className="absolute inset-[-1%_-0.45%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225 102">
              <path d={svgPaths.p1a8e2700} id="Vector 91" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
            <div className="relative shrink-0 w-[184px]" data-name="Checkbox">
              <div className="content-stretch flex gap-[4px] items-start py-[4px] relative w-full">
                <CheckboxPiece className="relative rounded-[3px] shrink-0 size-[28px]" />
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px min-w-px relative">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Save signature
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[48px] min-w-[108px] relative rounded-[4px] shrink-0" data-name="Button">
              <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
                <div className="content-stretch flex gap-[12px] h-full items-center justify-center min-w-[inherit] px-[20px] py-[22px] relative">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                    <div className="absolute inset-[6.26%_6.25%_9.37%_6.35%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9749 20.2474">
                        <g id="Vector">
                          <path d={svgPaths.p18321200} fill="var(--fill-0, #0067AC)" />
                          <path d={svgPaths.p118a1300} fill="var(--fill-0, #0067AC)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[28px]">Clear</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}