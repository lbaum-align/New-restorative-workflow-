export default function Button() {
  return (
    <div className="bg-[#bfeafb] content-stretch flex items-center justify-center px-[24px] py-[22px] relative rounded-[4px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[32px]">Create</p>
      </div>
    </div>
  );
}