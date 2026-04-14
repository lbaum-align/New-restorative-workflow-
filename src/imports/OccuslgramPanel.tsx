function Color() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color">
      <div className="bg-[#a00a0a] h-[20px] relative shrink-0 w-full" data-name="Color background">
        <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Color1() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Color">
      <Color />
    </div>
  );
}

function ColorBlock() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Color block">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <Color1 />
        </div>
      </div>
      <p className="font-['Roboto',sans-serif] h-[49.421px] leading-[32px] relative shrink-0 text-[16px] text-black text-center w-full">0.1</p>
    </div>
  );
}

function Color2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color">
      <div className="bg-[#c61313] h-[20px] relative shrink-0 w-full" data-name="Color background">
        <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Color3() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Color">
      <Color2 />
    </div>
  );
}

function ColorBlock1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Color block">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <Color3 />
        </div>
      </div>
      <p className="font-['Roboto',sans-serif] h-[49.421px] leading-[32px] relative shrink-0 text-[16px] text-black text-center w-full">0.2</p>
    </div>
  );
}

function Color4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color">
      <div className="bg-[red] h-[20px] relative shrink-0 w-full" data-name="Color background">
        <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Color5() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Color">
      <Color4 />
    </div>
  );
}

function ColorBlock2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Color block">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <Color5 />
        </div>
      </div>
      <p className="font-['Roboto',sans-serif] h-[49.421px] leading-[32px] relative shrink-0 text-[16px] text-black text-center w-full">0.3</p>
    </div>
  );
}

function Color6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color">
      <div className="bg-[#f7771a] h-[20px] relative shrink-0 w-full" data-name="Color background">
        <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Color7() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Color">
      <Color6 />
    </div>
  );
}

function ColorBlock3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Color block">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <Color7 />
        </div>
      </div>
      <p className="font-['Roboto',sans-serif] h-[49.421px] leading-[32px] relative shrink-0 text-[16px] text-black text-center w-full">0.4</p>
    </div>
  );
}

function Color8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color">
      <div className="bg-[#ffa008] h-[20px] relative shrink-0 w-full" data-name="Color background">
        <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Color9() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Color">
      <Color8 />
    </div>
  );
}

function ColorBlock4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Color block">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <Color9 />
        </div>
      </div>
      <p className="font-['Roboto',sans-serif] h-[49.421px] leading-[32px] relative shrink-0 text-[16px] text-black text-center w-full">0.5</p>
    </div>
  );
}

function Color10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color">
      <div className="bg-[#ffd600] h-[20px] relative shrink-0 w-full" data-name="Color background">
        <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Color11() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Color">
      <Color10 />
    </div>
  );
}

function ColorBlock5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Color block">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <Color11 />
        </div>
      </div>
      <p className="font-['Roboto',sans-serif] h-[49.421px] leading-[32px] relative shrink-0 text-[16px] text-black text-center w-full">0.7</p>
    </div>
  );
}

function Color12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color">
      <div className="bg-[#ffe500] h-[20px] relative shrink-0 w-full" data-name="Color background">
        <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Color13() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Color">
      <Color12 />
    </div>
  );
}

function ColorBlock6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Color block">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <Color13 />
        </div>
      </div>
      <p className="font-['Roboto',sans-serif] h-[49.421px] leading-[32px] relative shrink-0 text-[16px] text-black text-center w-full">0.8</p>
    </div>
  );
}

function Color14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color">
      <div className="bg-[#54bf00] h-[20px] relative shrink-0 w-full" data-name="Color background">
        <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Color15() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Color">
      <Color14 />
    </div>
  );
}

function ColorBlock7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Color block">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <Color15 />
        </div>
      </div>
      <p className="font-['Roboto',sans-serif] h-[49.421px] leading-[32px] relative shrink-0 text-[16px] text-black text-center w-full">0.9</p>
    </div>
  );
}

function Color16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color">
      <div className="bg-[#2ce9c6] h-[20px] relative shrink-0 w-full" data-name="Color background">
        <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Color17() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Color">
      <Color16 />
    </div>
  );
}

function ColorBlock8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Color block">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <Color17 />
        </div>
      </div>
      <p className="font-['Roboto',sans-serif] h-[49.421px] leading-[32px] relative shrink-0 text-[16px] text-black text-center w-full">1.0</p>
    </div>
  );
}

function Color18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color">
      <div className="bg-[#0ff4fc] h-[20px] relative shrink-0 w-full" data-name="Color background">
        <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Color19() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Color">
      <Color18 />
    </div>
  );
}

function ColorBlock9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Color block">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <Color19 />
        </div>
      </div>
      <p className="font-['Roboto',sans-serif] h-[49.421px] leading-[32px] relative shrink-0 text-[16px] text-black text-center w-full">1.1</p>
    </div>
  );
}

function Color20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color">
      <div className="bg-[#3fbaff] h-[20px] relative shrink-0 w-full" data-name="Color background">
        <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Color21() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Color">
      <Color20 />
    </div>
  );
}

function ColorBlock10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Color block">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <Color21 />
        </div>
      </div>
      <p className="font-['Roboto',sans-serif] h-[49.421px] leading-[32px] relative shrink-0 text-[16px] text-black text-center w-full">1.2</p>
    </div>
  );
}

function Color22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color">
      <div className="bg-[#0197ec] h-[20px] relative shrink-0 w-full" data-name="Color background">
        <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Color23() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Color">
      <Color22 />
    </div>
  );
}

function ColorBlock11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Color block">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <Color23 />
        </div>
      </div>
      <p className="font-['Roboto',sans-serif] h-[49.421px] leading-[32px] relative shrink-0 text-[16px] text-black text-center w-full">1.3</p>
    </div>
  );
}

function Color24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color">
      <div className="bg-[#0197ec] h-[20px] relative shrink-0 w-full" data-name="Color background">
        <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Color25() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Color">
      <Color24 />
    </div>
  );
}

function ColorBlock12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Color block">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <Color25 />
        </div>
      </div>
      <p className="font-['Roboto',sans-serif] h-[49.421px] leading-[32px] relative shrink-0 text-[16px] text-black text-center w-full">1.4</p>
    </div>
  );
}

function Color26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color">
      <div className="bg-[#06f] h-[20px] relative shrink-0 w-full" data-name="Color background">
        <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Color27() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Color">
      <Color26 />
    </div>
  );
}

function ColorBlock13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Color block">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <Color27 />
        </div>
      </div>
      <p className="font-['Roboto',sans-serif] h-[49.421px] leading-[32px] relative shrink-0 text-[16px] text-black text-center w-full">1.5</p>
    </div>
  );
}

function ColorBlock14() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Color block">
      <ColorBlock />
      <ColorBlock1 />
      <ColorBlock2 />
      <ColorBlock3 />
      <ColorBlock4 />
      <ColorBlock5 />
      <ColorBlock6 />
      <ColorBlock7 />
      <ColorBlock8 />
      <ColorBlock9 />
      <ColorBlock10 />
      <ColorBlock11 />
      <ColorBlock12 />
      <ColorBlock13 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#ffffff] items-center justify-center px-[24px] py-[22px] relative rounded-[4px] shrink-0 to-[#f3f3f3] w-[168px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Avenir:Roman',sans-serif] justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[16px] text-center text-nowrap">
        <p className="leading-[20px]">Change scale</p>
      </div>
    </div>
  );
}

export default function OccuslgramPanel() {
  return (
    <div className="content-stretch flex gap-[26px] items-start justify-center relative size-full" data-name="Occuslgram panel">
      <ColorBlock14 />
      <Button />
    </div>
  );
}