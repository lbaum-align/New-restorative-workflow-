import svgPaths from "../imports/svg-lpkasrtqzz";
import { createPortal } from "react-dom";

interface MoveToPretreatmentModalProps {
  onYes: () => void;
  onNo: () => void;
}

export default function MoveToPretreatmentModal({ onYes, onNo }: MoveToPretreatmentModalProps) {
  return createPortal(
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center" 
      style={{ zIndex: 99999, pointerEvents: 'auto' }}
      onClick={(e) => {
        // Only close if clicking the backdrop itself
        if (e.target === e.currentTarget) onNo();
      }}
    >
      <div 
        className="bg-white relative rounded-[4px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2),0px_4px_16px_0px_rgba(0,0,0,0.1)] w-[540px]" 
        data-name="Modal window"
        style={{ pointerEvents: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col justify-center min-w-[inherit]">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] relative">
            <div className="h-[64px] relative shrink-0 w-full" data-name="Title bar">
              <div className="content-stretch flex items-center overflow-clip pr-[16px] relative rounded-[inherit] size-full">
                <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-16px] relative">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[16px] relative size-full">
                      <div className="flex flex-[1_0_0] flex-col font-['Roboto',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#3e3d40] text-[24px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[30px] overflow-hidden">Move the scan to pre-treatment?</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={onNo}
                  className="mr-[-16px] relative rounded-[4px] shrink-0 size-[64px] hover:bg-gray-50 transition-colors"
                  data-name="Right button"
                >
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[24px] py-[22px] relative size-full">
                      <div className="relative shrink-0 size-[32px]" data-name="Icon">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[42.426px] top-1/2" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
                          <div className="flex-none rotate-45">
                            <div className="relative size-[30px]" data-name="Union">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                                <path d={svgPaths.p25b48500} fill="#3FC1F3" id="Union" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
            </div>
            <div className="relative shrink-0 w-full" data-name="Text content">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-start p-[16px] relative w-full">
                  <p className="font-['Roboto',sans-serif] font-normal leading-[0] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <span className="leading-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`This will move the current `}</span>
                    <span className="leading-[28px]">scan to</span>
                    <span className="leading-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` the pre-treatment scan.`}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Footer">
              <div className="flex flex-row items-center rounded-[inherit]">
                <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px" data-name="Filler" />
                  <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Right button group">
                    <button
                      onClick={(e) => { 
                        e.preventDefault();
                        e.stopPropagation(); 
                        console.log('No button clicked');
                        onNo(); 
                      }}
                      className="bg-[#f9f9f9] h-[48px] min-w-[108px] relative rounded-[4px] shrink-0 hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center px-[20px] py-[22px]"
                      data-name="Button"
                    >
                      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      <span 
                        style={{ fontVariationSettings: "'wdth' 100" }} 
                        className="font-['Roboto',sans-serif] font-normal text-[18px] text-center text-[#3e3d40] leading-[28px] relative z-10"
                      >
                        No, keep here
                      </span>
                    </button>
                    <button
                      onClick={(e) => { 
                        e.preventDefault();
                        e.stopPropagation(); 
                        console.log('Yes button clicked');
                        onYes(); 
                      }}
                      className="bg-[#bfeafb] h-[48px] min-w-[108px] relative rounded-[4px] shrink-0 hover:bg-[#a0d9ee] transition-colors cursor-pointer flex items-center justify-center px-[20px] py-[22px]"
                      data-name="Button"
                    >
                      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      <span 
                        style={{ fontVariationSettings: "'wdth' 100" }} 
                        className="font-['Roboto',sans-serif] font-normal text-[18px] text-center text-[#0067ac] leading-[28px] relative z-10"
                      >
                        Yes, Move it
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}