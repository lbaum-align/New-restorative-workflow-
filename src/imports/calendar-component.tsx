<div className="absolute top-full left-0 bg-white rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.15)] z-[100] p-[16px] w-[328px] mt-[4px]">
          {/* Month Navigation Header */}
          <div className="flex items-center justify-between mb-[16px] px-[8px]">
            {/* Left Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
              }}
              className="p-[4px] hover:bg-[#f5f5f5] rounded-[4px] transition-colors"
              aria-label="Previous month"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="#3E3D40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Month and Year with Dropdown indicator */}
            <div className="flex items-center gap-[8px]">
              <p
                className="font-['Roboto:Medium',sans-serif] font-medium text-[16px] text-[#3e3d40]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#3E3D40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Right Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
              }}
              className="p-[4px] hover:bg-[#f5f5f5] rounded-[4px] transition-colors"
              aria-label="Next month"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="#3E3D40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-[4px] mb-[8px]">
            {dayNames.map((day) => (
              <div
                key={day}
                className="text-center font-['Roboto:Medium',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.44)] py-[4px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days Grid */}
          <div className="grid grid-cols-7 gap-[2px] mb-[16px]">
            {days.map((day, i) => (
              <div key={i} className="aspect-square flex items-center justify-center">
                {day ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDateSelect(day);
                    }}
                    className={`w-full h-full rounded-full flex items-center justify-center font-['Roboto:Regular',sans-serif] text-[16px] transition-all
                      ${isSelected(day) ? "bg-[#5fcefa] text-[#121212]" : ""}
                      ${isToday(day) && !isSelected(day) ? "text-[#0067ac] font-medium" : ""}
                      ${!isSelected(day) && !isToday(day) ? "hover:bg-[#f5f5f5] text-[#121212]" : ""}
                    `}
                    style={{ fontVariationSettings: "'wdth' 100" }}
                    type="button"
                  >
                    {day.getDate()}
                  </button>
                ) : (
                  <div />
                )}
              </div>
            ))}
          </div>

          {/* Clear Selection Button */}
          {selectedDate && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClearSelection();
                setShowCalendar(false);
              }}
              className="w-full py-[8px] px-[16px] rounded-[4px] border border-[#939598] bg-[#f9f9f9] font-['Roboto:Medium',sans-serif] font-medium text-[14px] text-[#3e3d40] hover:bg-[#ededed] transition-colors"
              style={{ fontVariationSettings: "'wdth' 100" }}
              type="button"
            >
              Clear selection
            </button>
          )}
        </div>