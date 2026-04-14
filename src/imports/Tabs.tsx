function Container() {
  return <div className="absolute left-[142.08px] size-0 top-[4px]" data-name="Container" />;
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[18px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
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

export default function Tabs() {
  return (
    <div className="bg-[#009ace] content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Tabs">
      <Container />
      <Frame1 />
    </div>
  );
}