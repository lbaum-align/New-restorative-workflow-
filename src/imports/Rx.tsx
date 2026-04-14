function TogglePiece() {
  return (
    <div className="h-[28px] relative shrink-0 w-[36px]" data-name="Toggle / Piece">
      <div className="absolute bg-[#a6e2f9] h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px]" data-name="Track" />
      <div className="absolute bg-[#408dc1] left-[16px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%]" data-name="Toggle" />
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Toggle">
      <TogglePiece />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        NIRI Capture
      </p>
    </div>
  );
}

function TogglePiece1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[36px]" data-name="Toggle / Piece">
      <div className="absolute bg-[#a6e2f9] h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px]" data-name="Track" />
      <div className="absolute bg-[#408dc1] left-[16px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%]" data-name="Toggle" />
    </div>
  );
}

function Toggle1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Toggle">
      <TogglePiece1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        New Sleeve Attached
      </p>
    </div>
  );
}

function TogglePiece2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[36px]" data-name="Toggle / Piece">
      <div className="absolute bg-[#e0e0e0] h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px]" data-name="Track" />
      <div className="absolute bg-[#b0b1b3] left-0 rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%]" data-name="Toggle" />
    </div>
  );
}

function Toggle2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Toggle">
      <TogglePiece2 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ortho Model / iCast
      </p>
    </div>
  );
}

function TogglePiece3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[36px]" data-name="Toggle / Piece">
      <div className="absolute bg-[#e0e0e0] h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px]" data-name="Track" />
      <div className="absolute bg-[#b0b1b3] left-0 rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%]" data-name="Toggle" />
    </div>
  );
}

function Toggle3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Toggle">
      <TogglePiece3 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Multi Bite
      </p>
    </div>
  );
}

function TogglePiece4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[36px]" data-name="Toggle / Piece">
      <div className="absolute bg-[#e0e0e0] h-[16px] left-0 rounded-[16px] top-1/2 translate-y-[-50%] w-[36px]" data-name="Track" />
      <div className="absolute bg-[#b0b1b3] left-0 rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2 translate-y-[-50%]" data-name="Toggle" />
    </div>
  );
}

function Toggle4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Toggle">
      <TogglePiece4 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Palatal Guidance
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full">
      <Toggle />
      <Toggle1 />
      <Toggle2 />
      <Toggle3 />
      <Toggle4 />
    </div>
  );
}

export default function Rx() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Rx">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}