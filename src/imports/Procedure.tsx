function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-center text-white w-[207px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dentures
      </p>
    </div>
  );
}

export default function Procedure() {
  return (
    <div className="bg-[#009ace] relative rounded-[6px] size-full" data-name="Procedure">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[17px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}