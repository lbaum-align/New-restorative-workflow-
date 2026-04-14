function ListItem({ label, isSelected, onClick }: { label: string; isSelected?: boolean; onClick?: () => void }) {
  return (
    <div 
      className="h-[54px] relative shrink-0 w-full cursor-pointer hover:bg-[#f5f5f5] transition-colors" 
      data-name="List / Item"
      onClick={onClick}
    >
      <div className="flex flex-row items-center size-full">
        <div className={`content-stretch flex items-center px-[24px] py-[8px] relative size-full ${isSelected ? 'bg-[#e3f2fd]' : ''}`}>
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#3e3d40] text-[18px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-g0mm18 leading-[28px] overflow-hidden">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BodyDropdownProps {
  onSelect?: (value: string) => void;
  selectedValue?: string;
}

export default function BodyDropdown({ onSelect, selectedValue }: BodyDropdownProps) {
  const options = [
    'A1', 'A2', 'A3', 'A3.5', 'A4',
    'B1', 'B2', 'B3', 'B4',
    'C1', 'C2', 'C3', 'C4',
    'D1', 'D2', 'D3', 'D4',
    'OM1', 'OM2', 'OM3'
  ];
  
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[4px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] w-full max-h-[300px] overflow-y-auto" data-name="BodyDropdown">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Tab contents">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Full list / Linear - Non sorted">
          {options.map((option, index) => (
            <ListItem 
              key={index} 
              label={option}
              isSelected={selectedValue === option}
              onClick={() => onSelect?.(option)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}