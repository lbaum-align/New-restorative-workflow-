import { useState, useRef, useEffect } from "react";

const labs = ["Ocean lab", "Mountain lab", "City lab", "MyiTero.com", "Chairside"];

export default function Sent({ showRequired = false, onSelectionChange }: { showRequired?: boolean; onSelectionChange?: (value: string) => void } = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const hasError = showRequired && !selected;

  console.log("Sent component rendered, isOpen:", isOpen);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleToggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = !isOpen;
    console.log("Dropdown clicked! Current state:", isOpen, "New state:", newState);
    setIsOpen(newState);
  };

  const handleClearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected("");
    if (onSelectionChange) onSelectionChange("");
  };

  const handleAddFavorites = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selected && selected !== "") {
      console.log("Added to favorites:", selected);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`bg-white relative rounded-[8px] h-full overflow-visible ${
        hasError ? 'border-2 border-[#ff3355]' : 'border border-[#e0e0e0]'
      }`}
      style={{ zIndex: isOpen ? 9999 : 'auto' }}
      data-name="Sent"
    >
      {/* Field row - clickable */}
      <div
        className="content-stretch flex items-center overflow-clip px-[24px] pb-[8px] relative rounded-[inherit] size-full cursor-pointer"
        onClick={handleToggleDropdown}
      >
        <div className="content-stretch flex flex-1 flex-col items-start min-w-0">
          <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full">
            {/* Bottom border on field */}
            <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid left-0 right-0 bottom-0 pointer-events-none" />
            {/* Label / selected text */}
            <div className="content-stretch flex flex-1 flex-col h-full items-start justify-center min-w-0">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                <p
                  className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] shrink-0 text-[18px] text-[#3e3d40]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {selected || "Send to"}
                </p>
                {hasError && (
                  <p
                    className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] shrink-0 text-[#cb2f36] text-[14px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    *
                  </p>
                )}
              </div>
            </div>
            {/* Caret */}
            <div className={`relative shrink-0 size-[40px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} flex items-center justify-center`}>
              {hasError ? (
                <svg className="block w-[16px] h-[10px]" fill="none" viewBox="0 0 16 10">
                  <path d="M16 0L8 10L0 0H16Z" fill="#80D6F7" />
                </svg>
              ) : (
                <svg className="block w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M6 9L12 15L18 9" stroke="#696A6D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </div>
          {/* Error message */}
          {hasError && (
            <p
              className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden shrink-0 text-[#cb2f36] text-[14px] text-ellipsis w-full whitespace-nowrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Required information is missing
            </p>
          )}
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div 
          className="absolute top-full left-0 w-full bg-white rounded-[4px] mt-[2px] flex flex-col"
          style={{ 
            boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.15)",
            zIndex: 10000,
            pointerEvents: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Favorite placeholder */}
          <div className="content-stretch flex h-[54px] items-center py-[8px] shrink-0 w-full border-b border-[rgba(0,0,0,0.1)]">
            <div className="overflow-clip relative shrink-0 size-[54px] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 1L12.5 7.5H19L14 11.5L16 18L10 14L4 18L6 11.5L1 7.5H7.5L10 1Z" stroke="black" strokeOpacity="0.4" fill="none" />
              </svg>
            </div>
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[#939598] text-[18px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Your favorite items will appear here
            </p>
          </div>

          {/* Lab options */}
          {labs.map((lab) => (
            <div key={lab} className="h-[54px] relative shrink-0 w-full border-b border-[rgba(0,0,0,0.05)]">
              <button
                onClick={() => {
                  console.log("Selected:", lab);
                  setSelected(lab);
                  setIsOpen(false);
                  if (onSelectionChange) onSelectionChange(lab);
                }}
                className="flex flex-row items-center size-full hover:bg-[#f5f5f5] transition-colors w-full px-[24px]"
              >
                <p className="font-['Roboto:Regular',sans-serif] font-normal text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {lab}
                </p>
              </button>
            </div>
          ))}

          {/* Bottom buttons */}
          <div className="bg-white content-stretch flex h-[54px] items-center justify-between px-[16px] py-[8px] border-t border-[rgba(62,61,64,0.5)]">
            <button
              onClick={handleClearSelection}
              className="bg-[#f9f9f9] flex h-[32px] items-center justify-center min-w-[96px] px-[16px] py-[8px] rounded-[4px] hover:bg-[#e8e8e8] transition-colors border border-[#939598]"
            >
              <p className="font-['Roboto:Medium',sans-serif] font-medium text-[#3e3d40] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Clear selection
              </p>
            </button>
            <button
              onClick={handleAddFavorites}
              className="bg-[#bfeafb] flex h-[32px] items-center justify-center min-w-[96px] px-[16px] py-[8px] rounded-[4px] hover:bg-[#a0dff5] transition-colors border border-[#408dc1]"
            >
              <p className="font-['Roboto:Medium',sans-serif] font-medium text-[#0067ac] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Add favorites
              </p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}