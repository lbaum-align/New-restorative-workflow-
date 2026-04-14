import { useState, useRef, useEffect, useCallback } from "react";
import svgPathsIcons from "../imports/svg-audsipxixy";

interface DateOfBirthPickerProps {
  value?: string; // accepts MM/DD/YYYY or YYYY-MM-DD
  onChange?: (date: string) => void; // emits YYYY-MM-DD
}

function parseDateValue(value: string | undefined): Date | null {
  if (!value) return null;
  // Try MM/DD/YYYY
  const slashParts = value.split("/");
  if (slashParts.length === 3) {
    const [m, d, y] = slashParts.map(Number);
    const date = new Date(y, m - 1, d);
    if (!isNaN(date.getTime())) return date;
  }
  // Try YYYY-MM-DD
  const dashParts = value.split("-");
  if (dashParts.length === 3) {
    const [y, m, d] = dashParts.map(Number);
    const date = new Date(y, m - 1, d);
    if (!isNaN(date.getTime())) return date;
  }
  return null;
}

function formatDisplayDate(value: string | undefined): string {
  const date = parseDateValue(value);
  if (!date) return "";
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export default function DateOfBirthPicker({ value, onChange }: DateOfBirthPickerProps) {
  const [selectedDate, setSelectedDate] = useState(value || "");
  const [showCalendar, setShowCalendar] = useState(false);
  const parsed = parseDateValue(value);
  const [currentMonth, setCurrentMonth] = useState(parsed || new Date());
  const containerRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Sync external value changes
  useEffect(() => {
    if (value !== undefined) setSelectedDate(value);
  }, [value]);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    const target = e.target as Node;
    if (
      containerRef.current && !containerRef.current.contains(target) &&
      calendarRef.current && !calendarRef.current.contains(target)
    ) {
      setShowCalendar(false);
    }
  }, []);

  useEffect(() => {
    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCalendar, handleClickOutside]);

  const toggleCalendar = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setShowCalendar((prev) => !prev);
  };

  const handleDateSelect = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    const dateString = `${y}-${m}-${d}`;
    setSelectedDate(dateString);
    onChange?.(dateString);
    setShowCalendar(false);
  };

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
    const sel = parseDateValue(selectedDate);
    if (!sel) return false;
    return date.getDate() === sel.getDate() && date.getMonth() === sel.getMonth() && date.getFullYear() === sel.getFullYear();
  };

  const isFuture = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d > today;
  };

  const days = getDaysInMonth(currentMonth);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div ref={containerRef} className="relative w-full" style={{ zIndex: 100 }}>
      {/* Input Field */}
      <div
        className="relative cursor-pointer"
        onClick={toggleCalendar}
      >
        <input
          type="text"
          value={formatDisplayDate(selectedDate)}
          readOnly
          placeholder="Select date of birth"
          className="w-full h-[36px] pb-[4px] pr-[40px] border-b border-[#b0b1b3] bg-transparent text-[18px] font-normal text-[#3e3d40] leading-[28px] focus:outline-none focus:border-[#009ACE] cursor-pointer"
          style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100", pointerEvents: "none" }}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="block size-[32px]" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Calendar">
              <path d={svgPathsIcons.p27287472} fill="#80D6F7" id="Vector" />
            </g>
          </svg>
        </div>
      </div>

      {/* Calendar Dropdown */}
      {showCalendar && (
        <div
          ref={calendarRef}
          className="absolute top-full left-0 mt-[4px] bg-white rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.15)] p-[16px] w-[328px]"
          style={{ zIndex: 99999 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Month Navigation Header */}
          <div className="flex items-center justify-between mb-[16px] px-[8px]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
              }}
              className="p-[4px] hover:bg-[#f5f5f5] rounded-[4px] transition-colors"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="#3E3D40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <p
              className="font-['Roboto:Medium',sans-serif] font-medium text-[16px] text-[#3e3d40]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
              }}
              className="p-[4px] hover:bg-[#f5f5f5] rounded-[4px] transition-colors"
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
                      if (!isFuture(day)) handleDateSelect(day);
                    }}
                    disabled={isFuture(day)}
                    className={`w-full h-full rounded-full flex items-center justify-center font-['Roboto:Regular',sans-serif] text-[16px] transition-all
                      ${isSelected(day) ? "bg-[#5fcefa] text-[#121212]" : ""}
                      ${isToday(day) && !isSelected(day) ? "text-[#0067ac] font-medium" : ""}
                      ${!isSelected(day) && !isToday(day) && !isFuture(day) ? "hover:bg-[#f5f5f5] text-[#121212]" : ""}
                      ${isFuture(day) ? "text-[#d0d0d0] cursor-not-allowed" : "cursor-pointer"}
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
          {parseDateValue(selectedDate) && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedDate("");
                onChange?.("");
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
    </div>
  );
}
