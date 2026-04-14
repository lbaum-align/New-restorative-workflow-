function ListItem() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="List / Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[8px] relative size-full">
          <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow h-[24px] justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[28px] overflow-ellipsis overflow-hidden">Partial denture/framework</p>
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
          <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow h-[24px] justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[28px] overflow-ellipsis overflow-hidden">Partial denture acrylic</p>
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
          <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow h-[24px] justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[28px] overflow-ellipsis overflow-hidden">Partial immediate denture</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="List / Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[8px] relative size-full">
          <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow h-[24px] justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[28px] overflow-ellipsis overflow-hidden">Full immediate denture</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="List / Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[8px] relative size-full">
          <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow h-[24px] justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[28px] overflow-ellipsis overflow-hidden">Full denture tissue based</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="List / Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[8px] relative size-full">
          <p className="basis-0 font-['Roboto',sans-serif] grow h-[24px] leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-nowrap">Full denture implant based</p>
        </div>
      </div>
    </div>
  );
}

function FullListLinearNonSorted() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Full list / Linear - Non sorted">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
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

function Button() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex h-[32px] items-center justify-center min-w-[96px] px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[14px] text-center text-nowrap tracking-[0.3px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Clear selection</p>
      </div>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex h-[54px] items-center left-0 px-[16px] py-[8px] right-0" data-name="List / Item">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(62,61,64,0.5)] border-solid inset-0 pointer-events-none" />
      <Button />
    </div>
  );
}

export default function Type() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] size-full" data-name="Type">
      <TabContents />
      <ListItem6 />
    </div>
  );
}