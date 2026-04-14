import svgPaths from "../imports/svg-e1p45oh92v";

function IconStarUnchecked() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon / Star unchecked">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Star unchecked">
          <path d={svgPaths.p1f47bff0} id="Star 1" stroke="var(--stroke-0, black)" strokeOpacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function FavoriteSwitch() {
  return (
    <div className="overflow-clip relative shrink-0 size-[54px]" data-name="Favorite switch">
      <IconStarUnchecked />
    </div>
  );
}

function FavoritePlaceholder() {
  return (
    <div className="content-stretch flex h-[54px] items-center py-[8px] relative shrink-0 w-full" data-name="Favorite placeholder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <FavoriteSwitch />
      <p className="css-g0mm18 flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal h-[24px] leading-[28px] min-h-px min-w-px opacity-50 overflow-hidden relative text-[18px] text-black text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your favorite items will appear here
      </p>
    </div>
  );
}

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

function Button() {
  return (
    <div className="bg-[#bfeafb] content-stretch flex h-[32px] items-center justify-center min-w-[96px] px-[16px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[14px] text-center tracking-[0.3px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[24px]">Add favorites</p>
      </div>
    </div>
  );
}

function ListItemFooter() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex h-[54px] items-center justify-end left-0 pr-[16px] py-[8px] right-0" data-name="List / Item">
      <div aria-hidden="true" className="absolute border-[rgba(62,61,64,0.5)] border-solid border-t inset-0 pointer-events-none" />
      <Button />
    </div>
  );
}

interface MaterialDropdownProps {
  onSelect?: (value: string) => void;
  selectedValue?: string;
}

export default function MaterialDropdown({ onSelect, selectedValue }: MaterialDropdownProps) {
  const ceramicOptions = [
    'Ceramic: Zirconia',
    'Ceramic: Lithium Disilicate (e.g. e.max)',
    'Ceramic: Lithium Silicate',
    'Ceramic: Glass Ceramic',
    'Ceramic: Feldspathic Ceramic',
    'Ceramic: Hybrid',
    'Ceramic: Lab Preference'
  ];
  
  const metalOptions = [
    'Metal: High Noble',
    'Metal: Semi Precious',
    'Metal: Titanuim',
    'Metal: Cobalt Chrome'
  ];
  
  const otherOptions = ['Other (check note)'];
  
  const allOptions = [...ceramicOptions, ...metalOptions, ...otherOptions];
  
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[4px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] w-full max-h-[300px] overflow-y-auto" data-name="MaterialDropdown">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Tab contents">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Full list / Linear - Non sorted">
          <FavoritePlaceholder />
          {allOptions.map((option, index) => (
            <ListItem 
              key={index} 
              label={option}
              isSelected={selectedValue === option}
              onClick={() => onSelect?.(option)}
            />
          ))}
        </div>
      </div>
      <ListItemFooter />
    </div>
  );
}