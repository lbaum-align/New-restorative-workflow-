function Button() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex h-[64px] items-center justify-center px-[24px] py-[22px] relative rounded-[4px] shrink-0 w-[168px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Back</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#bfeafb] content-stretch flex h-[64px] items-center justify-center px-[24px] py-[22px] relative rounded-[4px] shrink-0 w-[168px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Create</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}