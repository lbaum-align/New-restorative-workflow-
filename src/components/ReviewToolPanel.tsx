import svgPaths from "../imports/svg-m5l327svxt";
import imgScreenshot20221109At13091 from "figma:asset/22c8274398284723cf97f1470cd780174dd5439c.png";

interface ReviewToolPanelProps {
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  onZoomImage?: (index: number) => void;
}

function ArrowsRightArrow() {
  return (
    <div className="h-[34.901px] relative w-[26px]" data-name="Arrows / right arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 34.9012">
        <g id="Arrows / right arrow">
          <g clipPath="url(#clip0_3198_37)">
            <path d={svgPaths.p16907d80} fill="var(--fill-0, #0067AC)" id="Vector" />
            <g id="Arrows / right arrow_2">
              <path d={svgPaths.p198ac280} fill="var(--fill-0, #0067AC)" id="Vector_2" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_3198_37">
            <rect fill="white" height="34.9012" rx="4" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ZoomButton() {
  return (
    <div className="h-[28.49px] relative w-[28.498px]" data-name="Zoom Button">
      <div className="absolute inset-[-0.18%_-7.02%_-7.02%_-0.19%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.5522 30.5406">
          <g id="Zoom Button">
            <g id="Ellipse 205">
              <path d={svgPaths.pd48a500} fill="var(--fill-0, #F2FBFF)" id="Vector" />
              <path d={svgPaths.p2dac0600} id="Vector_2" stroke="var(--stroke-0, #0067AC)" strokeMiterlimit="10" />
            </g>
            <path d={svgPaths.p278be700} fill="var(--fill-0, #00ADEF)" id="Rectangle 866" />
            <path d={svgPaths.p2edbb200} fill="var(--fill-0, #00ADEF)" id="Rectangle 867" />
            <path d={svgPaths.p3ad3cf80} id="Line 105" stroke="var(--stroke-0, #0067AC)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ZoomButtonContainer({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-[10px] right-[10px] z-10 bg-[rgba(255,255,255,0.54)] rounded-[4px] size-[56px] flex items-center justify-center hover:bg-[rgba(255,255,255,0.7)] transition-colors cursor-pointer"
      data-name="Zoom Button Container"
      aria-label="Zoom image"
    >
      <ZoomButton />
    </button>
  );
}

function NiriIocImages({ onZoom }: { onZoom?: () => void }) {
  return (
    <div className="relative flex-1 w-full min-h-0" data-name="NIRI + IOC Images">
      <div className="absolute inset-0 rounded-[4px]" data-name="Screenshot 2022-11-09 at 13.09 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
          <img alt="NIRI scan - lower arch" className="absolute h-[262.51%] left-0 max-w-none top-[-15.59%] w-[102.37%]" src={imgScreenshot20221109At13091} />
        </div>
      </div>
      <ZoomButtonContainer onClick={onZoom} />
    </div>
  );
}

function NiriIocImages1({ onZoom }: { onZoom?: () => void }) {
  return (
    <div className="relative flex-1 w-full min-h-0" data-name="NIRI + IOC Images">
      <div className="absolute inset-0 rounded-[4px]" data-name="Screenshot 2022-11-09 at 13.09 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
          <img alt="NIRI scan - upper arch" className="absolute h-[261.15%] left-0 max-w-none top-[-146%] w-[101.88%]" src={imgScreenshot20221109At13091} />
        </div>
      </div>
      <ZoomButtonContainer onClick={onZoom} />
    </div>
  );
}

function ImageContainer({ onZoomImage }: { onZoomImage?: (index: number) => void }) {
  return (
    <div className="flex flex-col gap-[4px] flex-1 h-full min-w-0" data-name="Image Container">
      <NiriIocImages onZoom={() => onZoomImage?.(0)} />
      <NiriIocImages1 onZoom={() => onZoomImage?.(1)} />
    </div>
  );
}

export default function ReviewToolPanel({
  isExpanded = true,
  onToggleExpand,
  onZoomImage
}: ReviewToolPanelProps) {
  return (
    <div className="bg-[#f1f6fa] flex gap-[4px] items-stretch p-[8px] h-full w-full rounded-[8px]" data-name="Review-Container">
      <button
        onClick={onToggleExpand}
        className="flex items-center justify-center shrink-0 hover:opacity-70 transition-opacity cursor-pointer"
        aria-label={isExpanded ? "Collapse panel" : "Expand panel"}
      >
        <div className={`flex-none transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
          <ArrowsRightArrow />
        </div>
      </button>
      {isExpanded && <ImageContainer onZoomImage={onZoomImage} />}
    </div>
  );
}
