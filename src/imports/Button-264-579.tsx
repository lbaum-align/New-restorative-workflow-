function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <rect fill="var(--fill-0, #1F8FFF)" height="20" rx="10" width="20" x="2" y="2" />
          <rect height="20" rx="10" stroke="var(--stroke-0, #F9F9F9)" strokeWidth="4" width="20" x="2" y="2" />
          <g id="Vector"></g>
        </g>
      </svg>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#f9f9f9] relative rounded-[4px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center min-w-[inherit] px-[20px] py-[22px] relative size-full">
          <Icon />
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] text-center text-nowrap tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[28px]">Eggshell crown</p>
          </div>
        </div>
      </div>
    </div>
  );
}