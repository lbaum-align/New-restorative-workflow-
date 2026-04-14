import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const PROCEDURES = [
  "Study model",
  "Invisalign",
  "Fixed restorative",
  "Appliances",
  "Dentures",
  "Scan for surgical guide",
  "All on X",
];

export default function Procedure({ 
  text = "Dentures",
  onProcedureChange,
  onEditClick,
  onExpandChange,
  expanded
}: { 
  text?: string;
  onProcedureChange?: (procedure: string) => void;
  onEditClick?: () => void;
  onExpandChange?: (isExpanded: boolean) => void;
  expanded?: boolean;
}) {
  const [selectedProcedure, setSelectedProcedure] = useState(text);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync with parent's text prop
  useEffect(() => {
    setSelectedProcedure(text);
  }, [text]);

  // Sync with parent's expanded prop
  useEffect(() => {
    if (expanded !== undefined) {
      setIsExpanded(expanded);
    }
  }, [expanded]);

  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    if (onExpandChange) onExpandChange(newState);
  };

  const handleSelect = (procedure: string) => {
    setSelectedProcedure(procedure);
    setIsExpanded(false);
    if (onExpandChange) onExpandChange(false);
    if (onProcedureChange) onProcedureChange(procedure);
  };

  // Expose handleSelect via onProcedureChange prop for external use
  useEffect(() => {
    if (window) {
      (window as any).__procedureSelect = handleSelect;
    }
  }, []);

  return (
    <div ref={containerRef} className="relative shrink-0" data-name="Procedure">
      {/* Main Button */}
      <button
        onClick={handleToggle}
        className="bg-[#009ace] content-stretch flex h-[80px] items-center justify-center px-[20px] py-[17px] relative rounded-[6px] w-[302px] hover:opacity-90 transition-opacity cursor-pointer"
      >
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full gap-[12px]">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-center text-white flex-1" style={{ fontVariationSettings: "'wdth' 100" }}>
            {selectedProcedure}
          </p>

          {/* Dropdown Chevron */}
          <div className="relative shrink-0 size-[32px] flex items-center justify-center">
            <ChevronDown
              size={24}
              color="white"
              strokeWidth={2}
              className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : "rotate-0"}`}
            />
          </div>
        </div>
      </button>
    </div>
  );
}