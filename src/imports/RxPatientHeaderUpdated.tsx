function Container() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Container">
      <p className="[grid-area:1_/_1] font-['Roboto:Medium',sans-serif] font-medium leading-[40px] ml-0 mt-0 relative text-[32px] text-black w-[242px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Amelie Purple
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#696a6d] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3948309483
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[189px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[80px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <circle cx="40" cy="40" fill="var(--fill-0, #EEEEEE)" id="Image" r="40" />
        </svg>
      </div>
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start justify-center leading-[28px] relative shrink-0 text-[18px] text-nowrap" data-name="Container">
      <p className="relative shrink-0 text-[#696a6d]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Age
      </p>
      <p className="relative shrink-0 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        50 years old
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start justify-center leading-[28px] relative shrink-0 text-[18px] text-nowrap" data-name="Container">
      <p className="relative shrink-0 text-[#696a6d]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gender
      </p>
      <p className="relative shrink-0 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Female
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start justify-center leading-[28px] relative shrink-0 text-[18px] text-nowrap" data-name="Container">
      <p className="relative shrink-0 text-[#696a6d]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Last visit
      </p>
      <p className="relative shrink-0 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aug 23, 1975
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[67px] items-center relative shrink-0 w-[580px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative shrink-0" data-name="Container">
      <Container5 />
      <Container9 />
    </div>
  );
}

export default function RxPatientHeaderUpdated() {
  return (
    <div className="bg-white relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_2px_8px_0px_rgba(0,0,0,0.15)] size-full" data-name="Rx / Patient header - updated">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[28px] relative size-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}