function ListItem() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="List / Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[8px] relative size-full">
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#3e3d40] text-[18px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-g0mm18 leading-[28px] overflow-hidden">VITA Lumin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="List / Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[8px] relative size-full">
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#3e3d40] text-[18px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-g0mm18 leading-[28px] overflow-hidden">VITApan 3D Master</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="List / Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[8px] relative size-full">
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#3e3d40] text-[18px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-g0mm18 leading-[28px] overflow-hidden">Other</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FullListLinearNonSorted() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Full list / Linear - Non sorted">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function TabContents() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Tab contents">
      <FullListLinearNonSorted />
    </div>
  );
}

export default function Dropdowns() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] size-full" data-name="Dropdowns">
      <TabContents />
    </div>
  );
}