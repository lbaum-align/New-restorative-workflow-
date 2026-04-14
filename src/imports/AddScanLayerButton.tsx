import svgPaths from "./svg-pf1pg6l3zu";

function AddEmpty() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Add empty">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Add empty">
          <path d={svgPaths.p373ac80} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Add() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[52px]" data-name="Add">
      <AddEmpty />
    </div>
  );
}

export default function AddScanLayerButton() {
  return (
    <div className="bg-white relative rounded-[8px] h-[72px]" data-name="Add scan layer button">
      <div className="flex flex-row items-center h-full">
        <div className="content-stretch flex gap-[12px] items-center px-[20px] py-0 relative w-full h-full">
          <Add />
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Add scan layer</p>
        </div>
      </div>
    </div>
  );
}