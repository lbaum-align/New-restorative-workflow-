import svgPaths from "./svg-9zc6y3gs8w";

function Container() {
  return <div className="absolute left-[142.08px] size-0 top-[4px]" data-name="Container" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[18px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pre-treatment
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-[#009ace] content-stretch flex gap-[12px] h-[48px] items-center max-h-[48px] px-[16px] py-[12px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="Tabs">
      <Container />
      <Frame3 />
    </div>
  );
}

function Container1() {
  return <div className="absolute left-[142.08px] size-0 top-[4px]" data-name="Container" />;
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#3b3b3b] text-[18px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Treatment scan
      </p>
    </div>
  );
}

function Frame2() {
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

function Tabs1() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] content-stretch flex gap-[16px] h-[48px] items-center max-h-[48px] px-[16px] py-[12px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="Tabs">
      <Container1 />
      <Frame2 />
      <Component01Button />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Tabs />
      <Tabs1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c4bd700} fill="var(--fill-0, black)" fillOpacity="0.93" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex items-center justify-center left-1/2 p-[12px] rounded-[4px] size-[36px] top-1/2" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]">
      <Button />
    </div>
  );
}

function AddLayers() {
  return (
    <div className="content-stretch flex h-[48px] items-start relative shrink-0" data-name="Add-Layers">
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame5 />
      <AddLayers />
    </div>
  );
}

export default function TabBar() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center pt-[16px] px-[16px] relative size-full" data-name="Tab-Bar">
      <Frame4 />
    </div>
  );
}