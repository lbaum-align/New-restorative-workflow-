import JawSelectorDefault from "../imports/Frame1618872978-273-4643";
import JawSelectorLower from "../imports/JawSelector";
import JawSelectorBite from "../imports/Frame1618872978";

interface InteractiveJawSelectorProps {
  onUpperJawClick?: () => void;
  onLowerJawClick?: () => void;
  onBiteClick?: () => void;
  upperJawSelected?: boolean;
  lowerJawSelected?: boolean;
  upperJawScanned?: boolean;
  lowerJawScanned?: boolean;
  biteScanned?: boolean;
  biteSelected?: boolean;
  hasBiteToolbar?: boolean;
  jawLabel?: string;
  currentJaw?: 'upper' | 'lower' | 'bite' | null;
}

export default function InteractiveJawSelector({ 
  onUpperJawClick, 
  onLowerJawClick,
  onBiteClick,
  upperJawSelected,
  lowerJawSelected,
  upperJawScanned,
  lowerJawScanned,
  biteScanned,
  biteSelected,
  hasBiteToolbar,
  jawLabel,
  currentJaw
}: InteractiveJawSelectorProps) {
  return (
    <div className="relative">
      {/* Base Jaw Selector - conditionally render based on scanning state */}
      {biteScanned ? <JawSelectorBite /> : (lowerJawScanned ? <JawSelectorLower hasBiteToolbar={hasBiteToolbar} /> : <JawSelectorDefault />)}
      
      {/* Dynamic jaw label overlay - covers the default "Upper"/"Lower" text */}
      {jawLabel && (
        <div 
          className="absolute bottom-0 left-0 right-0 flex items-center justify-center z-20 pointer-events-none"
          style={{ height: '52px' }}
        >
          <div className="bg-white w-[232px] h-[52px] flex items-center justify-center rounded-[4px] px-[16px] py-[12px]">
            <p className="font-['Roboto',sans-serif] text-[#3e3d40] text-[18px] text-center whitespace-nowrap">
              {jawLabel}
            </p>
          </div>
        </div>
      )}
      
      {/* Upper Jaw Click Area */}
      <div 
        className="absolute top-0 left-0 right-0 h-[48%] cursor-pointer z-10"
        onClick={onUpperJawClick}
        style={{
          background: 'transparent',
          border: '2px solid transparent',
          transition: 'all 0.2s ease',
        }}
      />
      
      {/* Bite Click Area - Center area, always clickable */}
      <div 
        className="absolute top-[40%] left-[20%] right-[20%] h-[20%] z-10 cursor-pointer"
        onClick={onBiteClick}
        style={{
          background: 'transparent',
          border: '2px solid transparent',
        }}
      />
      
      {/* Lower Jaw Click Area */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[48%] cursor-pointer z-10"
        onClick={onLowerJawClick}
        style={{
          background: 'transparent',
          border: '2px solid transparent',
          transition: 'all 0.2s ease',
        }}
      />
    </div>
  );
}