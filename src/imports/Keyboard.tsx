import { useState, useRef } from "react";
import clsx from "clsx";
import svgPaths from "./svg-68soinm809";

interface KeyboardProps {
  onKeyPress?: (char: string) => void;
  onBackspace?: () => void;
  onEnter?: () => void;
  onClose?: () => void;
}

type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("absolute bottom-1/4 flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] text-[20px] text-center text-white top-[21.67%]", additionalClassNames)}>
      <p className="leading-[32px]">{children}</p>
    </div>
  );
}

function Helper01Button({ children, onClick }: React.PropsWithChildren<{ onClick?: () => void }>) {
  return (
    <div
      className="bg-[rgba(0,0,0,0.63)] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px] cursor-pointer hover:bg-[rgba(255,255,255,0.15)] active:bg-[rgba(255,255,255,0.25)] transition-colors"
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[20px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children, onClick }: React.PropsWithChildren<{ onClick?: () => void }>) {
  return (
    <div className="h-[64px] relative rounded-[4px] shrink-0 w-[68px]" onClick={onClick}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center relative size-full">
          <Helper01Button>{children}</Helper01Button>
        </div>
      </div>
    </div>
  );
}

type KeyboardNumberKey1Props = {
  additionalClassNames?: string;
  onClick?: () => void;
};

function KeyboardNumberKey1({ children, additionalClassNames = "", onClick }: React.PropsWithChildren<KeyboardNumberKey1Props>) {
  return (
    <Wrapper onClick={onClick}>
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon">
        <div className={clsx("absolute", additionalClassNames)}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4 20">
            {children}
          </svg>
        </div>
      </div>
    </Wrapper>
  );
}

function ShiftKey({ isShifted, isCapsLock, onClick }: { isShifted: boolean; isCapsLock?: boolean; onClick: () => void }) {
  return (
    <div className="h-[64px] relative rounded-[4px] shrink-0 w-[68px] cursor-pointer" onClick={onClick} onMouseDown={(e) => e.preventDefault()}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center relative size-full">
          <div className={clsx(
            "flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px] cursor-pointer hover:bg-[rgba(255,255,255,0.15)] active:bg-[rgba(255,255,255,0.25)] transition-colors",
            isCapsLock ? "bg-[rgba(255,255,255,0.35)]" : isShifted ? "bg-[rgba(255,255,255,0.2)]" : "bg-[rgba(0,0,0,0.63)]"
          )}>
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[8px] py-[20px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                  <div className="absolute inset-[12.5%_18.75%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18">
                      <path d={svgPaths.p20749100} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                </div>
                {isCapsLock && (
                  <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-white rounded-full" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KeyboardNumberKey({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[12.5%_18.75%]" data-name="Vector">
          {children}
        </div>
      </div>
    </Wrapper>
  );
}

type KeyboardKeyTextProps = {
  text: string;
  additionalClassNames?: string;
  onClick?: () => void;
};

function KeyboardKeyText({ text, additionalClassNames = "", onClick }: KeyboardKeyTextProps) {
  return (
    <button
      className={clsx("group block cursor-pointer h-[64px] relative shadow-[0px_2px_12px_0px_rgba(0,0,0,0.13)] shrink-0 w-[68px] transition-all", additionalClassNames)}
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="absolute bg-[rgba(0,0,0,0.63)] group-hover:bg-[rgba(255,255,255,0.15)] group-active:bg-[rgba(255,255,255,0.25)] transition-colors inset-0 rounded-[4px]" />
      <Wrapper1 additionalClassNames="left-[40%] right-[40.8%]">{text}</Wrapper1>
    </button>
  );
}

export default function Keyboard({ onKeyPress, onBackspace, onEnter, onClose }: KeyboardProps) {
  const [isShifted, setIsShifted] = useState(false);
  const [isCapsLock, setIsCapsLock] = useState(false);
  const [showNumbers, setShowNumbers] = useState(false);
  const lastShiftTapRef = useRef<number>(0);

  const isUpperCase = isShifted || isCapsLock;

  const handleShiftPress = () => {
    const now = Date.now();
    if (now - lastShiftTapRef.current < 400) {
      // Double tap → toggle caps lock
      setIsCapsLock((prev) => !prev);
      setIsShifted(false);
    } else {
      if (isCapsLock) {
        // Turn off caps lock
        setIsCapsLock(false);
        setIsShifted(false);
      } else {
        // Single tap → one-time shift
        setIsShifted((prev) => !prev);
      }
    }
    lastShiftTapRef.current = now;
  };

  const handleKey = (char: string) => {
    const output = isUpperCase ? char.toUpperCase() : char;
    onKeyPress?.(output);
    // Only reset if single shift, not caps lock
    if (isShifted && !isCapsLock) setIsShifted(false);
  };

  const numberRow1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const numberRow2 = ["@", "#", "$", "%", "&", "*", "-", "+", "(", ")"];
  const numberRow3 = ["!", '"', "'", ":", ";", "/", "?"];
  const symbolRow4 = ["_", "=", "|", "~", "<", ">", "{", "}"];

  if (showNumbers) {
    return (
      <div className="bg-[#1b1b1b] relative w-full" style={{ height: '356px' }} data-name="keyboard">
        {/* Top bar with close button */}
        <div className="absolute flex items-start justify-end right-[16px] top-0">
          <button
            className="flex items-center justify-center shrink-0 size-[44px] cursor-pointer hover:bg-[rgba(255,255,255,0.1)] rounded-[4px] transition-colors"
            onClick={onClose}
            onMouseDown={(e) => e.preventDefault()}
          >
            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Close empty">
              <div className="absolute inset-1/4" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p1ad09500} fill="var(--fill-0, white)" id="Vector" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        <div className="-translate-x-1/2 absolute left-1/2 rounded-[4px] top-[52px] w-[908px]" data-name="Keyboard-Description">
          <div className="content-stretch flex flex-col gap-[8px] items-center">
            {/* Number row */}
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
              {numberRow1.map(n => (
                <KeyboardKeyText key={n} text={n} onClick={() => onKeyPress?.(n)} />
              ))}
              {/* Backspace */}
              <button
                className="bg-[rgba(0,0,0,0.63)] flex-[1_0_0] h-[64px] min-h-px min-w-px overflow-clip relative rounded-[4px] cursor-pointer hover:bg-[rgba(255,255,255,0.15)] active:bg-[rgba(255,255,255,0.25)] transition-colors"
                onClick={onBackspace}
                onMouseDown={(e) => e.preventDefault()}
              >
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2">
                  <div className="absolute inset-[0_-4.81%_0_-13.78%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4605 24">
                      <g id="Delete"><g id="Android">
                        <path clipRule="evenodd" d={svgPaths.p1620ad00} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="2.37037" />
                        <path d={svgPaths.p27d46300} fill="var(--fill-0, white)" />
                      </g></g>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
            {/* Symbol row 1 */}
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
              {numberRow2.map(s => (
                <KeyboardKeyText key={s} text={s} onClick={() => onKeyPress?.(s)} />
              ))}
              {/* Enter */}
              <button
                className="bg-[rgba(0,0,0,0.63)] h-[64px] overflow-clip relative rounded-[4px] shrink-0 w-[124px] cursor-pointer hover:bg-[rgba(255,255,255,0.15)] active:bg-[rgba(255,255,255,0.25)] transition-colors"
                onClick={onEnter}
                onMouseDown={(e) => e.preventDefault()}
              >
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2">
                  <div className="absolute inset-[0_0_0_-3.09%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.7407 24">
                      <g id="Next"><path d={svgPaths.p2cf61a00} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37037" /></g>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
            {/* Symbol row 2 */}
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
              {numberRow3.map(s => (
                <KeyboardKeyText key={s} text={s} onClick={() => onKeyPress?.(s)} />
              ))}
            </div>
            {/* Bottom row */}
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
              <button
                className="group block cursor-pointer h-[64px] relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.35)] shrink-0 w-[68px] transition-all"
                onClick={() => setShowNumbers(false)}
                onMouseDown={(e) => e.preventDefault()}
              >
                <div className="absolute bg-[rgba(255,255,255,0.15)] group-hover:bg-[rgba(255,255,255,0.25)] group-active:bg-[rgba(255,255,255,0.35)] transition-colors inset-0 rounded-[4px]" />
                <Wrapper1 additionalClassNames="left-[13.44%] right-[13.12%]">ABC</Wrapper1>
              </button>
              <button
                className="group block cursor-pointer flex-[1_0_0] h-[64px] min-h-px min-w-px relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.35)] transition-all"
                onClick={() => onKeyPress?.(" ")}
                onMouseDown={(e) => e.preventDefault()}
              >
                <div className="absolute bg-[rgba(0,0,0,0.63)] group-hover:bg-[rgba(255,255,255,0.15)] group-active:bg-[rgba(255,255,255,0.25)] transition-colors inset-0 rounded-[4px]" />
              </button>
              <KeyboardKeyText text="-" onClick={() => onKeyPress?.("-")} />
              <KeyboardKeyText text="_" onClick={() => onKeyPress?.("_")} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1b1b1b] relative w-full" style={{ height: '356px' }} data-name="keyboard">
      {/* Top bar with keyboard toggle & close buttons */}
      <div className="absolute flex items-start justify-end right-[16px] top-0">
        <button
          className="flex items-center justify-center shrink-0 size-[44px] cursor-pointer hover:bg-[rgba(255,255,255,0.1)] rounded-[4px] transition-colors"
          onMouseDown={(e) => e.preventDefault()}
        >
          <div className="h-[14px] relative shrink-0 w-[21px]" data-name="Icon keyboard 2">
            <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none" />
            <div className="absolute border-2 border-solid border-white h-[6px] left-[4px] top-[5px] w-[13px]" />
          </div>
        </button>
        <button
          className="flex items-center justify-center shrink-0 size-[44px] cursor-pointer hover:bg-[rgba(255,255,255,0.1)] rounded-[4px] transition-colors"
          onClick={onClose}
          onMouseDown={(e) => e.preventDefault()}
        >
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Close empty">
            <div className="absolute inset-1/4" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p1ad09500} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      <div className="-translate-x-1/2 absolute left-1/2 rounded-[4px] top-[52px] w-[908px]" data-name="Keyboard-Description">
        <div className="content-stretch flex flex-col gap-[8px] items-end left-[4px] top-[4px]">
          {/* Row 1: q-p + backspace */}
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
            {["q","w","e","r","t","y","u","i","o","p"].map(k => (
              <KeyboardKeyText key={k} text={isUpperCase ? k.toUpperCase() : k} onClick={() => handleKey(k)} />
            ))}
            {/* Backspace */}
            <button
              className="bg-[rgba(0,0,0,0.63)] flex-[1_0_0] h-[64px] min-h-px min-w-px overflow-clip relative rounded-[4px] cursor-pointer hover:bg-[rgba(255,255,255,0.15)] active:bg-[rgba(255,255,255,0.25)] transition-colors"
              data-name="Action Items"
              onClick={onBackspace}
              onMouseDown={(e) => e.preventDefault()}
            >
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Delete">
                <div className="absolute inset-[0_-4.81%_0_-13.78%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4605 24">
                    <g id="Delete"><g id="Android">
                      <path clipRule="evenodd" d={svgPaths.p1620ad00} fillRule="evenodd" id="Path" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="2.37037" />
                      <path d={svgPaths.p27d46300} fill="var(--fill-0, white)" id="Union" />
                    </g></g>
                  </svg>
                </div>
              </div>
            </button>
          </div>
          {/* Row 2: a-' + enter */}
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            {["a","s","d","f","g","h","j","k","l"].map(k => (
              <KeyboardKeyText key={k} text={isUpperCase ? k.toUpperCase() : k} onClick={() => handleKey(k)} />
            ))}
            <KeyboardKeyText text="'" onClick={() => onKeyPress?.("'")} />
            {/* Enter key */}
            <button
              className="bg-[rgba(0,0,0,0.63)] h-[64px] overflow-clip relative rounded-[4px] shrink-0 w-[124px] cursor-pointer hover:bg-[rgba(255,255,255,0.15)] active:bg-[rgba(255,255,255,0.25)] transition-colors"
              data-name="Action Items"
              onClick={onEnter}
              onMouseDown={(e) => e.preventDefault()}
            >
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Next">
                <div className="absolute inset-[0_0_0_-3.09%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.7407 24">
                    <g id="Next">
                      <path d={svgPaths.p2cf61a00} id="Vector 17" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37037" />
                    </g>
                  </svg>
                </div>
              </div>
            </button>
          </div>
          {/* Row 3: shift + z-? + shift */}
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
            <ShiftKey isShifted={isShifted} isCapsLock={isCapsLock} onClick={handleShiftPress} />
            {["z","x","c","v","b","n","m"].map(k => (
              <KeyboardKeyText key={k} text={isUpperCase ? k.toUpperCase() : k} onClick={() => handleKey(k)} />
            ))}
            <KeyboardKeyText text="," onClick={() => onKeyPress?.(",")} />
            <KeyboardKeyText text="." onClick={() => onKeyPress?.(".")} />
            <KeyboardKeyText text="?" onClick={() => onKeyPress?.("?")} />
            <ShiftKey isShifted={isShifted} isCapsLock={isCapsLock} onClick={handleShiftPress} />
          </div>
          {/* Row 4: &123, Ctrl, emoji, spacebar, arrows, keyboard icon */}
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
            <button
              className="group block cursor-pointer h-[64px] relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.35)] shrink-0 w-[68px] transition-all"
              data-name="Key"
              onClick={() => setShowNumbers(true)}
              onMouseDown={(e) => e.preventDefault()}
            >
              <div className="absolute bg-[rgba(0,0,0,0.63)] group-hover:bg-[rgba(255,255,255,0.15)] group-active:bg-[rgba(255,255,255,0.25)] transition-colors inset-0 rounded-[4px]" />
              <Wrapper1 additionalClassNames="left-[13.44%] right-[13.12%]">{`&123`}</Wrapper1>
            </button>
            <button className="group block cursor-pointer h-[64px] relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.35)] shrink-0 w-[68px] transition-all" data-name="Key" onMouseDown={(e) => e.preventDefault()}>
              <div className="absolute bg-[rgba(0,0,0,0.63)] group-hover:bg-[rgba(255,255,255,0.15)] group-active:bg-[rgba(255,255,255,0.25)] transition-colors inset-0 rounded-[4px]" />
              <Wrapper1 additionalClassNames="left-[24.38%] right-[25.62%]">Ctrl</Wrapper1>
            </button>
            <div className="content-stretch flex gap-[10px] h-[64px] items-center overflow-clip relative rounded-[4px] shrink-0 w-[68px]" data-name="Number Key">
              <Helper01Button>
                <div className="relative shrink-0 size-[32px]" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Icon">
                      <g id="Vector">
                        <path d={svgPaths.p1c047080} fill="var(--fill-0, white)" />
                        <path d={svgPaths.p10908e00} fill="var(--fill-0, white)" />
                      </g>
                      <circle cx="11.5" cy="12.5" fill="var(--fill-0, white)" id="Ellipse 1" r="1.5" />
                      <circle cx="20.5" cy="12.5" fill="var(--fill-0, white)" id="Ellipse 2" r="1.5" />
                    </g>
                  </svg>
                </div>
              </Helper01Button>
            </div>
            {/* Spacebar */}
            <button
              className="group block cursor-pointer flex-[1_0_0] h-[64px] min-h-px min-w-px relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.35)] transition-all"
              data-name="spacebar"
              onClick={() => onKeyPress?.(" ")}
              onMouseDown={(e) => e.preventDefault()}
            >
              <div className="absolute bg-[rgba(0,0,0,0.63)] group-hover:bg-[rgba(255,255,255,0.15)] group-active:bg-[rgba(255,255,255,0.25)] transition-colors inset-0 rounded-[4px]" />
            </button>
            {/* Left arrow */}
            <KeyboardNumberKey1 additionalClassNames="inset-[18.75%_33.13%_18.75%_31.25%]">
              <path d={svgPaths.p3f79cc40} fill="var(--fill-0, white)" id="Vector" />
            </KeyboardNumberKey1>
            {/* Right arrow */}
            <KeyboardNumberKey1 additionalClassNames="inset-[18.75%_31.25%_18.75%_33.13%]">
              <path d={svgPaths.p3ca33d80} fill="var(--fill-0, white)" id="Vector" />
            </KeyboardNumberKey1>
            {/* Keyboard icon */}
            <Wrapper>
              <div className="h-[16px] relative rounded-[1px] shrink-0 w-[28px]" data-name="Icon">
                <div aria-hidden="true" className="absolute border-[#262626] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[1px]" />
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col items-start justify-center p-[3px] relative size-full">
                    <div className="content-stretch flex flex-col gap-[1.5px] items-start relative shrink-0 w-[22px]">
                      <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
                        <div className="bg-white shrink-0 size-[2px]" />
                        <div className="bg-white shrink-0 size-[2px]" />
                        <div className="bg-white shrink-0 size-[2px]" />
                        <div className="bg-white shrink-0 size-[2px]" />
                        <div className="bg-white shrink-0 size-[2px]" />
                        <div className="bg-white shrink-0 size-[2px]" />
                      </div>
                      <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-[22px]">
                        <div className="bg-white flex-[1_0_0] h-[2px] min-h-px min-w-px" />
                        <div className="bg-white shrink-0 size-[2px]" />
                        <div className="bg-white shrink-0 size-[2px]" />
                        <div className="bg-white shrink-0 size-[2px]" />
                        <div className="bg-white flex-[1_0_0] h-[2px] min-h-px min-w-px" />
                      </div>
                      <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
                        <div className="bg-white flex-[1_0_0] h-[2px] min-h-px min-w-px" />
                        <div className="bg-white flex-[1_0_0] h-[2px] min-h-px min-w-px" />
                        <div className="bg-white flex-[1_0_0] h-[2px] min-h-px min-w-px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
    </div>
  );
}