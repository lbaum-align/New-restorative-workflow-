import svgPaths from "./svg-89pe75mc90";

function Container() {
  return <div className="absolute left-[142.08px] size-0 top-[4px]" data-name="Container" />;
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#3b3b3b] text-[18px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Treatment scan
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p27099900} fill="var(--fill-0, #121212)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component01Button() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0 size-[36px]" data-name="01 Button">
      <Icon />
    </div>
  );
}

export default function Tabs() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Tabs">
      <Container />
      <Frame1 />
      <Component01Button />
    </div>
  );
}