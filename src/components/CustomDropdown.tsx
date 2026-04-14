import { useState, useRef, useEffect } from "react";
import { Check } from "lucide-react@0.487.0";

interface DropdownOption {
  label: string;
  icon?: React.ReactNode;
}

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[] | DropdownOption[];
  buttonClassName?: string;
  textClassName?: string;
  caretClassName?: string;
}

function CaretDownIcon({ isOpen, className }: { isOpen: boolean; className?: string }) {
  return (
    <svg
      className={`relative shrink-0 size-[24px] transition-transform duration-200 ${
        isOpen ? "rotate-180" : ""
      } ${className || ""}`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function CustomDropdown({
  value,
  onChange,
  placeholder,
  options,
  buttonClassName,
  textClassName,
  caretClassName,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  const handleClear = () => {
    onChange("");
    setIsOpen(false);
  };

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      {/* Trigger Field */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full cursor-pointer transition-colors ${
          isOpen ? "bg-[#f9f9f9]" : "bg-transparent hover:bg-[#fafafa]"
        } ${buttonClassName}`}
        data-name="Field"
      >
        <div
          aria-hidden="true"
          className={`absolute border-solid inset-0 pointer-events-none transition-colors ${
            isOpen
              ? "border-[#009ace] border-[0px_0px_2px]"
              : "border-[#b0b1b3] border-[0px_0px_1px]"
          }`}
        />
        <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
            <p
              className={`relative shrink-0 text-[18px] text-left ${
                textClassName || "font-['Roboto:Regular',sans-serif] leading-[28px]"
              }`}
              style={{
                fontVariationSettings: "'wdth' 100",
                ...(textClassName ? {} : { color: value ? "#3e3d40" : "#939598" })
              }}
            >
              {value || placeholder}
            </p>
          </div>
        </div>
        <CaretDownIcon isOpen={isOpen} className={caretClassName} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute z-[9999] bg-white content-stretch flex flex-col items-start overflow-hidden rounded-[4px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] w-full mt-[4px] animate-in fade-in-0 slide-in-from-top-2 duration-200"
        >
          {/* Options List */}
          <div 
            className="content-stretch flex flex-col items-start relative shrink-0 w-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#f5f5f5] [&::-webkit-scrollbar-thumb]:bg-[#b0b1b3] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[#939598]" 
            style={{
              maxHeight: '288px',
              scrollbarWidth: 'thin',
              scrollbarColor: '#b0b1b3 #f5f5f5'
            }}
          >
            {options.map((option, index) => {
              const isSelected = value === (typeof option === 'string' ? option : option.label);
              const optionLabel = typeof option === 'string' ? option : option.label;
              const optionIcon = typeof option === 'string' ? null : option.icon;
              
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSelect(optionLabel)}
                  className={`h-[48px] relative shrink-0 w-full transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[#e6f7fd] hover:bg-[#d9f3fb]"
                      : "hover:bg-[#f5f5f5]"
                  }`}
                >
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[20px] py-[8px] relative size-full gap-[12px]">
                      <div className="flex items-center gap-[12px] flex-1 min-w-0">
                        {optionIcon && (
                          <div className={`shrink-0 size-[20px] ${isSelected ? 'text-[#009ace]' : 'text-[#696A6D]'}`}>
                            {optionIcon}
                          </div>
                        )}
                        <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center leading-[0] min-w-0 overflow-ellipsis overflow-hidden text-[18px] text-nowrap text-left">
                          <p
                            className={`leading-[28px] overflow-ellipsis overflow-hidden ${
                              isSelected
                                ? "font-['Roboto:Medium',sans-serif] font-medium text-[#009ace]"
                                : "font-normal text-[#3e3d40]"
                            }`}
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          >
                            {optionLabel}
                          </p>
                        </div>
                      </div>
                      {isSelected && (
                        <Check className="size-[20px] text-[#009ace] shrink-0" />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Clear Selection Button */}
          {value && (
            <div className="bg-white content-stretch flex h-[54px] items-center px-[16px] py-[8px] relative w-full">
              <div
                aria-hidden="true"
                className="absolute border-[1px_0px_0px] border-[rgba(62,61,64,0.2)] border-solid inset-0 pointer-events-none"
              />
              <button
                type="button"
                onClick={handleClear}
                className="bg-[#f9f9f9] content-stretch flex h-[32px] items-center justify-center min-w-[96px] px-[16px] py-[8px] relative rounded-[4px] shrink-0 hover:bg-[#efefef] active:bg-[#e5e5e5] transition-colors cursor-pointer"
              >
                <div
                  aria-hidden="true"
                  className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]"
                />
                <div
                  className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[14px] text-center text-nowrap tracking-[0.3px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p className="leading-[24px]">Clear selection</p>
                </div>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}