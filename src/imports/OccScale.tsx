import svgPaths from "./svg-9644pqpon4";

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

function Container() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Button />
    </div>
  );
}

function MenuPiece() {
  return (
    <div className="bg-[#bfeafb] h-[56px] relative shrink-0 w-full" data-name="Menu / Piece">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[28px] overflow-hidden">0.00 - 1.20</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuPiece1() {
  return (
    <div className="bg-white h-[56px] relative shrink-0 w-full" data-name="Menu / Piece">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[28px] overflow-hidden">0.55 - 1.45</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuPiece2() {
  return (
    <div className="bg-white h-[56px] relative shrink-0 w-full" data-name="Menu / Piece">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[28px] overflow-hidden">1.10 - 2.30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start max-w-[640px] overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_2px_8px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="Menu">
      <MenuPiece />
      <MenuPiece1 />
      <MenuPiece2 />
    </div>
  );
}

export default function OccScale() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-name="Occ Scale">
      <Container />
      <Menu />
    </div>
  );
}