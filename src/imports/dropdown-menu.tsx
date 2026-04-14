
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