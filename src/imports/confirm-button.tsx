<div className="flex items-center justify-end px-[46px] py-[13px]">
          <div 
            className="relative"
            onMouseEnter={() => isConfirmDisabled && setShowConfirmTooltip(true)}
            onMouseLeave={() => setShowConfirmTooltip(false)}
          >
            {/* Tooltip */}
            {showConfirmTooltip && isConfirmDisabled && (
              <div 
                className="absolute bottom-full right-0 mb-[8px] bg-[#3e3d40] rounded-[8px] px-[16px] py-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.2)] whitespace-nowrap"
                style={{ zIndex: 20 }}
              >
                <p
                  className="font-['Roboto:Medium',sans-serif] font-medium text-[14px] text-white leading-[20px] mb-[4px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Required information is missing:
                </p>
                {getMissingInfoMessages().map((msg, idx) => (
                  <div key={idx} className="flex items-center gap-[8px]">
                    <div className="size-[4px] rounded-full bg-[#ff3355] shrink-0" />
                    <p
                      className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#d1d1d1] leading-[20px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {msg}
                    </p>
                  </div>
                ))}
                {/* Tooltip arrow */}
                <div className="absolute top-full right-[76px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#3e3d40]" />
              </div>
            )}
            <button
              onClick={() => !isConfirmDisabled && setIsSignaturePanelOpen(true)}
              disabled={isConfirmDisabled}
              className={`rounded-[4px] h-[54px] w-[168px] flex items-center justify-center relative z-[11] transition-opacity ${
                isConfirmDisabled
                  ? 'bg-[#e0e0e0] cursor-not-allowed opacity-60'
                  : 'bg-[#bfeafb] cursor-pointer hover:opacity-80'
              }`}
            >
              <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[4px] ${
                isConfirmDisabled ? 'border-[#b0b1b3]' : 'border-[#408dc1]'
              }`} />
              <span
                className={`font-['Roboto:Medium',sans-serif] font-medium text-[20px] leading-[32px] ${
                  isConfirmDisabled ? 'text-[#939598]' : 'text-[#0067ac]'
                }`}
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Confirm
              </span>
            </button>
          </div>
        </div>