function BlueMark() {
  return <div className="bg-[#9ed9f4] h-full shrink-0 w-[12px]" data-name="blue mark" />;
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pl-0 pr-[20px] py-0 relative shrink-0">
      <p className="font-['Roboto',sans-serif] leading-[normal] relative shrink-0 text-[#3e3d40] text-[14px] text-nowrap">All Study Model/iRecord scans are available for Invisalign</p>
    </div>
  );
}

function Frame1() {
  return <div className="content-stretch flex items-center justify-end shrink-0" />;
}

function Content() {
  return (
    <div className="basis-0 bg-[#f5fbfe] grow min-h-px min-w-px opacity-[0.998] relative shrink-0" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[10px] pr-[20px] py-[10px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Frame />
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

export default function InfoBanner() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full" data-name="Info banner">
      <BlueMark />
      <Content />
    </div>
  );
}