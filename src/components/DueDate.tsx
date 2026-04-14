import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-omx21ki433";

interface DueDateProps {
  value?: string;
  onChange?: (date: string) => void;
}

export default function DueDate({ value, onChange }: DueDateProps = {}) {
  const [selectedDate, setSelectedDate] = useState(value || "");
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  const formatDate = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString + "T00:00:00");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const handleDateSelect = (date: Date) => {
    const dateString = date.toISOString().split("T")[0];
    setSelectedDate(dateString);
    onChange?.(dateString);
    setShowCalendar(false);
  };

  const handleClearSelection = () => {
    setSelectedDate("");
    onChange?.("");
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowCalendar(false);
      }
    };
    if (showCalendar) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCalendar]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: (Date | null)[] = [];
    for (let i = 0; i < firstDay.getDay(); i++) days.push(null);
    for (let d = 1; d <= lastDay.getDate(); d++) days.push(new Date(year, month, d));
    return days;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  };

  const isSelected = (date: Date) => {
    if (!selectedDate) return false;
    const sel = new Date(selectedDate + "T00:00:00");
    return date.getDate() === sel.getDate() && date.getMonth() === sel.getMonth() && date.getFullYear() === sel.getFullYear();
  };

  const days = getDaysInMonth(currentMonth);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div 
      ref={containerRef} 
      className="bg-white relative rounded-[8px] h-full z-10 border-0"
      data-name="Due Date"
    >
      {/* Field row */}
      <div
        className="content-stretch flex items-center overflow-clip px-[24px] pb-[8px] relative rounded-[inherit] size-full cursor-pointer z-20"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <div className="content-stretch flex flex-1 flex-col items-start min-w-0">
          <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full">
            {/* Bottom border on field */}
            <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
            {/* Label / selected date */}
            <div className="content-stretch flex flex-1 flex-col h-full items-start justify-center min-w-0">
              <p
                className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] shrink-0 text-[18px] text-[#3e3d40]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {selectedDate ? formatDate(selectedDate) : "Due date"}
              </p>
            </div>
            {/* Calendar icon instead of caret */}
            <div className="relative shrink-0 size-[40px] flex items-center justify-center">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <path d={svgPaths.p27287472} fill="#696A6D" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Dropdown - Figma Style */}
      {showCalendar && (
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
      )}

      {/* Outer border */}
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] z-0" />
    </div>
  );
}