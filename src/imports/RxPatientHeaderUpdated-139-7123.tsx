import svgPaths from "./svg-2xogra27i";

function AddEmpty() {
  return (
    <div className="absolute left-[16px] size-[48px] top-[15px]" data-name="Add empty">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Add empty">
          <rect fill="var(--fill-0, #EEEEEE)" height="48" rx="24" width="48" />
          <path d={svgPaths.p4364880} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <p className="[grid-area:1_/_1] font-['Roboto:Regular',sans-serif] font-normal leading-[32px] ml-0 mt-0 relative text-[24px] text-black w-[339px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create new patient
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Group1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[339px]">
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[455px]">
      <AddEmpty />
      <div className="relative shrink-0 size-[80px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <circle cx="40" cy="40" fill="var(--fill-0, #EEEEEE)" id="Image" r="40" />
        </svg>
      </div>
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[62px] items-center relative shrink-0 w-[645px]">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame2 />
    </div>
  );
}

export default function RxPatientHeaderUpdated() {
  return (
    <div className="bg-[#eee] relative size-full" data-name="Rx / Patient header - updated">
      <div aria-hidden="true" className="absolute border border-[#c0c0c0] border-dashed inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[28px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}