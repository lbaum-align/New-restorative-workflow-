import svgPaths from "./svg-lak87qouyk";

function Container() {
  return (
    <div className="bg-[#a00a0a] h-[20px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PrepQcNumber() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative" data-name="Prep qc number">
      <Container />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        0.00
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f7771a] h-[20px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PrepQcNumber1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative" data-name="Prep qc number">
      <Container1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        0.20
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#ffe500] h-[20px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PrepQcNumber2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative" data-name="Prep qc number">
      <Container2 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        0.40
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#54bf00] h-[20px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PrepQcNumber3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative" data-name="Prep qc number">
      <Container3 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        0.60
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#0ff4fc] h-[20px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PrepQcNumber4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative" data-name="Prep qc number">
      <Container4 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        0.80
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#0197ec] h-[20px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PrepQcNumber5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative" data-name="Prep qc number">
      <Container5 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        1.00
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#06f] h-[20px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(112,112,112,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PrepQcNumber6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative" data-name="Prep qc number">
      <Container6 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        1.20
      </p>
    </div>
  );
}

function ScaleBar() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1053px]" data-name="Scale Bar">
      <PrepQcNumber />
      <PrepQcNumber1 />
      <PrepQcNumber2 />
      <PrepQcNumber3 />
      <PrepQcNumber4 />
      <PrepQcNumber5 />
      <PrepQcNumber6 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p34c74780} fill="var(--fill-0, #0067AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#bfeafb] h-[48px] min-w-[108px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-full items-center justify-center min-w-[inherit] px-[16px] py-[22px] relative">
        <Icon />
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[28px]">0.00 - 1.20</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0 w-[157px]" data-name="Container">
      <Button />
    </div>
  );
}

function OccScale() {
  return (
    <div className="h-[48px] relative shrink-0 w-[157px]" data-name="Occ Scale">
      <Container7 />
    </div>
  );
}

export default function OccuslgramNaama() {
  return (
    <div className="content-stretch flex gap-[16px] items-end justify-center relative size-full" data-name="Occuslgram - naama">
      <ScaleBar />
      <OccScale />
    </div>
  );
}