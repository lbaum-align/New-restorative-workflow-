interface AdditionalInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: () => void;
}

function CaretDown() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Caret down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Caret down">
          <path d="M24 12L16 22L8 12H24Z" fill="#80D6F7" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DropdownField({ label }: { label: string }) {
  return (
    <div className="content-stretch flex flex-col items-start w-full" data-name="Dropdown">
      <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
        <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {label}
            </p>
          </div>
        </div>
        <CaretDown />
      </div>
    </div>
  );
}

export default function AdditionalInfoModal({ isOpen, onClose, onSave }: AdditionalInfoModalProps) {
  if (!isOpen) return null;

  const handleSave = () => {
    onSave?.();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50" onClick={onClose}>
      <div 
        className="bg-white content-stretch flex flex-col items-start overflow-clip rounded-[4px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2),0px_4px_16px_0px_rgba(0,0,0,0.1)] w-[1280px] max-w-[95vw]" 
        data-name="Modal window - additional info"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Bar */}
        <div className="h-[64px] relative shrink-0 w-full" data-name="Title bar">
          <div className="content-stretch flex items-center overflow-clip pr-[16px] relative rounded-[inherit] size-full">
            <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-16px] relative">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] relative size-full">
                  <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#3e3d40] text-[24px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[30px] overflow-hidden">Additional information (optional)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
        </div>

        {/* Content with Dropdowns */}
        <div className="bg-white content-stretch flex items-start overflow-clip py-[16px] px-[26px] shrink-0 w-full" data-name="Text content">
          <div className="grid grid-cols-3 gap-x-[35px] gap-y-[24px] w-full">
            <DropdownField label="Preperation Design- Buccal" />
            <DropdownField label="Preperation Design - Lingual" />
            <DropdownField label="Incisial" />
            <DropdownField label="Margin Design - Buccal" />
            <DropdownField label="Margin Design - Lingual" />
            <DropdownField label="Gingival" />
            <div></div>
            <div></div>
            <DropdownField label="Stump Shade" />
          </div>
        </div>

        {/* Footer */}
        <div className="relative shrink-0 w-full" data-name="Footer">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px" data-name="Filler" />
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Right button group">
                <button 
                  className="bg-[#f9f9f9] content-stretch flex h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity" 
                  data-name="Button"
                  onClick={onClose}
                >
                  <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] text-center tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[28px]">Cancel</p>
                  </div>
                </button>
                <button 
                  className="bg-[#bfeafb] content-stretch flex h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity" 
                  data-name="Button"
                  onClick={handleSave}
                >
                  <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[18px] text-center tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[28px]">Save</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
