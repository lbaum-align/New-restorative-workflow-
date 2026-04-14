import svgPaths from "../imports/svg-5vlrge7p1m";

interface MarginLinePanelProps {
  toothNumber?: string;
  onClose?: () => void;
  onPreviousTooth?: () => void;
  onNextTooth?: () => void;
  onDetectMargin?: () => void;
  onMarkManually?: () => void;
  onClear?: () => void;
  onUndo?: () => void;
}

function CloseIcon() {
  return (
    <div className="h-[21.333px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4444 12.4444">
            <path d={svgPaths.p1330f52c} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.77778" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4444 12.4444">
            <path d={svgPaths.p2a13940} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.77778" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative rounded-[5.333px] shrink-0 size-[32px] hover:bg-[#0099d6] transition-colors"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[5.333px] px-[5.333px] relative size-full">
        <CloseIcon />
      </div>
    </button>
  );
}

function Header({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-[#00adef] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#0099d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative w-full">
          <div className="h-[22.5px] relative shrink-0" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22.5px] not-italic text-[20px] text-nowrap text-white tracking-[-0.2344px]">
                Margin line
              </p>
            </div>
          </div>
          <CloseButton onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

function PreviousIcon() {
  return (
    <div className="relative shrink-0 size-[24.643px]" data-name="Right icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6427 24.6427">
        <g id="Right icon">
          <path d={svgPaths.p1f867f00} fill="#3E3D40" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NextIcon() {
  return (
    <div className="relative shrink-0 size-[24.643px]" data-name="Right icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6427 24.6427">
        <g id="Right icon">
          <path d={svgPaths.p100a6f80} fill="#3E3D40" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ToothSelector({ 
  toothNumber, 
  onPrevious, 
  onNext 
}: { 
  toothNumber?: string; 
  onPrevious?: () => void; 
  onNext?: () => void 
}) {
  return (
    <div className="bg-[#dff5fc] content-stretch flex flex-col h-[61.607px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="List item">
      <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Middle part">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[53.906px] items-center justify-center px-[20.022px] py-0 relative w-full">
              <button
                onClick={onPrevious}
                className="flex items-center justify-center relative shrink-0 hover:opacity-70 transition-opacity"
              >
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[23.102px] size-[40.044px]" data-name="Right item">
                    <PreviousIcon />
                  </div>
                </div>
              </button>
              <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18.482px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[24.643px] overflow-ellipsis overflow-hidden">{toothNumber || "Tooth 45"}</p>
              </div>
              <button
                onClick={onNext}
                className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[23.102px] shrink-0 size-[40.044px] hover:opacity-70 transition-opacity"
                data-name="Right item"
              >
                <NextIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#e0e0e0] bottom-0 h-[0.77px] left-0 right-0" data-name="Divider" />
    </div>
  );
}

function DetectMarginIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Left icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Left icon">
          <path d={svgPaths.p1cbe0c00} fill="#3E3D40" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DrawIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Draw">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Draw">
          <path d={svgPaths.p34bbca00} fill="#3E3D40" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DeleteIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Delete">
          <g id="Shape">
            <path d="M10.5 9H9V18H10.5V9Z" fill="#3E3D40" />
            <path d="M15 9H13.5V18H15V9Z" fill="#3E3D40" />
            <path d={svgPaths.p2fd4ae40} fill="#3E3D40" />
            <path d="M15 1.5H9V3H15V1.5Z" fill="#3E3D40" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function UndoIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Undo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Undo">
          <path d={svgPaths.p34ab8900} fill="#3E3D40" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListItem({ 
  icon, 
  text, 
  onClick 
}: { 
  icon: React.ReactNode; 
  text: string; 
  onClick?: () => void 
}) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full hover:bg-gray-50 transition-colors cursor-pointer"
      data-name="List item"
    >
      <div className="content-stretch flex items-start pl-0 pr-[24px] py-0 relative shrink-0" data-name="Content">
        <div className="content-stretch flex flex-col items-center justify-center mr-[-24px] relative shrink-0 size-[64px]" data-name="Left item">
          {icon}
        </div>
        <div className="content-stretch flex flex-col items-start justify-center mr-[-24px] px-[16px] py-[6px] relative self-stretch shrink-0" data-name="Text part">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[28px] overflow-ellipsis overflow-hidden">{text}</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#e0e0e0] bottom-0 h-px left-0 opacity-0 right-0" data-name="Divider" />
    </button>
  );
}

function Body({ 
  onDetectMargin, 
  onMarkManually, 
  onClear, 
  onUndo 
}: { 
  onDetectMargin?: () => void; 
  onMarkManually?: () => void; 
  onClear?: () => void; 
  onUndo?: () => void 
}) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full">
      <ListItem icon={<DetectMarginIcon />} text="Detect Margin" onClick={onDetectMargin} />
      <ListItem icon={<DrawIcon />} text="Mark manually" onClick={onMarkManually} />
      <ListItem icon={<DeleteIcon />} text="Clear" onClick={onClear} />
      <ListItem icon={<UndoIcon />} text="Undo" onClick={onUndo} />
    </div>
  );
}

export default function MarginLinePanel({
  toothNumber,
  onClose,
  onPreviousTooth,
  onNextTooth,
  onDetectMargin,
  onMarkManually,
  onClear,
  onUndo
}: MarginLinePanelProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full max-w-[300px]" data-name="Margin line">
      <Header onClose={onClose} />
      <ToothSelector 
        toothNumber={toothNumber} 
        onPrevious={onPreviousTooth} 
        onNext={onNextTooth} 
      />
      <Body 
        onDetectMargin={onDetectMargin}
        onMarkManually={onMarkManually}
        onClear={onClear}
        onUndo={onUndo}
      />
    </div>
  );
}
