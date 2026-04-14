import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  onSearch?: (value: string) => void;
}

export default function SearchBar({
  value = "",
  onChange,
  placeholder = "Patient name",
  disabled = false,
  label = "Type your patient name",
  onSearch,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  const currentValue = onChange ? value : internalValue;
  const isActive = isFocused || Boolean(currentValue);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(currentValue);
    }
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(currentValue);
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative w-full">
      <p
        className="font-['Roboto:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.93)] w-full"
        dir="auto"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Type patient name or chart number
      </p>

      <div className="content-stretch flex items-center relative rounded-[20px] w-full">
        <div
          className={`basis-0 grow min-h-px min-w-px relative rounded-[4px] transition-all ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
          }}
        >
          <div
            aria-hidden="true"
            className={`absolute inset-0 pointer-events-none rounded-[4px] border-2 border-solid transition-colors ${
              isActive ? "border-[#0067ac]" : "border-[#ddd]"
            }`}
          />

          <div className="size-full">
            <div className="content-stretch flex items-center p-[20px] relative w-full gap-[12px]">
              <button
                onClick={handleSearchClick}
                disabled={disabled}
                className={`flex items-center justify-center shrink-0 transition-colors ${
                  disabled
                    ? "cursor-not-allowed"
                    : "cursor-pointer hover:opacity-70"
                }`}
                aria-label="Search"
              >
                <Search
                  className={`w-[24px] h-[24px] ${
                    isActive
                      ? "text-[#0067ac]"
                      : "text-[#939598]"
                  }`}
                />
              </button>

              <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative">
                <div className="content-stretch flex gap-[4px] items-center relative w-full h-[52px]">
                  <input
                    type="text"
                    value={currentValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={`font-['Roboto:Regular',sans-serif] font-normal leading-[32px] w-full text-[24px] bg-transparent border-none outline-none ${
                      currentValue
                        ? "text-[#3e3d40]"
                        : "text-[#939598]"
                    }`}
                    style={{
                      fontVariationSettings: "'wdth' 100",
                    }}
                  />
                </div>
              </div>

              {currentValue && !disabled && (
                <button
                  onClick={() => {
                    if (onChange) {
                      onChange("");
                    } else {
                      setInternalValue("");
                    }
                  }}
                  className="flex items-center justify-center shrink-0 w-[24px] h-[24px] cursor-pointer hover:opacity-70 transition-opacity"
                  aria-label="Clear"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="#939598"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}