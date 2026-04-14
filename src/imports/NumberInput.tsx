import svgPaths from "./svg-zpnimo0k04";

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Current aligner #:
      </p>
    </div>
  );
}

function LabelGroup() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0" data-name="Label group">
      <Label />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#696a6d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        only numerical values from 0–99
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M18 11.25H6V12.75H18V11.25Z" fill="var(--fill-0, #0067AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[22px] relative rounded-[4px] shrink-0 size-[48px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-full items-center justify-center min-w-[48px] relative shrink-0 w-[82px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p209700} fill="var(--fill-0, #0067AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[22px] relative rounded-[4px] shrink-0 size-[48px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center justify-end relative shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Button />
      <Text />
      <Button1 />
    </div>
  );
}

export default function NumberInput() {
  return (
    <div className="content-stretch flex items-start justify-between relative size-full" data-name="Number input">
      <LabelGroup />
      <Field />
    </div>
  );
}