import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface NotesCollapsibleProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  defaultExpanded?: boolean;
}

export default function NotesCollapsible({
  value = "",
  onChange,
  placeholder = "Add your note here...",
  defaultExpanded = false,
}: NotesCollapsibleProps = {}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="bg-white relative rounded-[8px] w-full" data-name="NotesCollapsible">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        {/* Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-white relative shrink-0 w-full cursor-pointer hover:bg-[#f9f9f9] transition-colors"
        >
          <div className="overflow-clip rounded-[inherit] w-full">
            <div className="content-stretch flex flex-col items-start px-[28px] py-[24px] relative w-full">
              <div className="content-stretch flex items-center justify-between gap-6 relative shrink-0 w-full">
                <p
                  className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Notes
                </p>
                <ChevronDown 
                  className={`w-[24px] h-[24px] text-[#696a6d] transition-transform ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
          />
        </button>

        {/* Content - Collapsible */}
        {isExpanded && (
          <div className="w-full">
            <div className="h-[260px] relative shrink-0 w-full">
              <div className="size-full">
                <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
                  <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full">
                    <div
                      aria-hidden="true"
                      className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[4px]"
                    />
                    <div className="size-full">
                      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
                        <textarea
                          value={value}
                          onChange={handleChange}
                          placeholder={placeholder}
                          className="w-full h-full resize-none bg-transparent border-none outline-none font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px] placeholder:text-[#9e9e9e]"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </div>
  );
}
