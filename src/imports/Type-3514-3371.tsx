function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[54px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[8px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type TypeListItemTextProps = {
  text: string;
};

function TypeListItemText({ text }: TypeListItemTextProps) {
  return (
    <Wrapper>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#3e3d40] text-[18px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] overflow-hidden">{text}</p>
      </div>
    </Wrapper>
  );
}

export default function Type() {
  return (
    <div className="bg-white relative rounded-[4px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] size-full" data-name="Type">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="content-stretch flex h-px items-start relative shrink-0 w-full" data-name="Tab contents">
          <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Full list / Linear - Non sorted">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <TypeListItemText text="Partial denture/framework" />
              <TypeListItemText text="Partial denture acrylic" />
              <TypeListItemText text="Partial immediate denture" />
              <TypeListItemText text="Full immediate denture" />
              <TypeListItemText text="Full denture tissue based" />
              <Wrapper>
                <p className="flex-[1_0_0] font-['Avenir:Book','Noto_Sans:Light',sans-serif] h-[24px] leading-[24px] min-h-px min-w-px overflow-hidden relative text-[18px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
                  Full denture implant based
                </p>
              </Wrapper>
            </div>
          </div>
        </div>
        <div className="absolute bg-white bottom-0 content-stretch flex h-[54px] items-center left-0 px-[16px] py-[8px] right-0" data-name="List / Item">
          <div aria-hidden="true" className="absolute border-[rgba(62,61,64,0.5)] border-solid border-t inset-0 pointer-events-none" />
          <div className="bg-[#f9f9f9] h-[32px] min-w-[96px] relative rounded-[4px] shrink-0" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
              <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative">
                <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[14px] text-center tracking-[0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[24px]">Clear selection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}