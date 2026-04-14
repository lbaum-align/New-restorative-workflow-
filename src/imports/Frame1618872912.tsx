import imgImage from "figma:asset/25dd0071bc0c234a663012cdd25377acaa1cd39c.png";

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <p className="[grid-area:1_/_1] font-['Roboto:Medium',sans-serif] font-medium leading-[40px] ml-0 mt-0 relative text-[32px] text-black w-[189px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mina Young
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#696a6d] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        14129123
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[189px]">
      <Group />
      <Frame />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[80px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="80" src={imgImage} width="80" />
      </div>
      <Frame1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start justify-center leading-[28px] relative shrink-0 text-[18px] text-nowrap">
      <p className="relative shrink-0 text-[#696a6d]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Age
      </p>
      <p className="relative shrink-0 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        25 years old
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start justify-center leading-[28px] relative shrink-0 text-[18px] text-nowrap">
      <p className="relative shrink-0 text-[#696a6d]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gender
      </p>
      <p className="relative shrink-0 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Female
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start justify-center leading-[28px] relative shrink-0 text-[18px] text-nowrap">
      <p className="relative shrink-0 text-[#696a6d]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Last visit
      </p>
      <p className="relative shrink-0 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jan 15, 2025
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[67px] items-center relative shrink-0 w-[580px]">
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative size-full">
      <Frame7 />
      <Frame5 />
    </div>
  );
}