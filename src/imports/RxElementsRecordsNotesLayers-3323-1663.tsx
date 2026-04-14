import clsx from "clsx";
import svgPaths from "./svg-2lsvdob52q";
type Wrapper14Props = {
  additionalClassNames?: string;
};

function Wrapper14({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper14Props>) {
  return (
    <div style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}

function Wrapper13({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper13Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.3px] whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[24px]">{children}</p>
    </div>
  );
}
type Wrapper12Props = {
  additionalClassNames?: string;
};

function Wrapper12({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper12Props>) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative">
        <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.3px] whitespace-nowrap", additionalClassNames)}>
          <p className="leading-[24px]">{children}</p>
        </div>
      </div>
    </div>
  );
}
type Vector1Props = {
  additionalClassNames?: string;
};

function Vector1({ children, additionalClassNames = "" }: React.PropsWithChildren<Vector1Props>) {
  return (
    <div className={clsx("absolute left-1/4 right-1/4", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
        {children}
      </svg>
    </div>
  );
}

function Wrapper11({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
        {children}
      </div>
    </div>
  );
}

function Wrapper10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">{children}</div>
    </div>
  );
}
type Wrapper9Props = {
  additionalClassNames?: string;
};

function Wrapper9({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper9Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={additionalClassNames}>
      <p className="leading-[28px]">{children}</p>
    </div>
  );
}

function Wrapper8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">{children}</div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
        <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Edit">
          <div className="absolute inset-[6.25%_6.25%_12.5%_6.25%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
              <g id="Vector">
                <path d="M28 24H0V26H28V24Z" fill="#3E3D40" />
                <path d={svgPaths.p83df200} fill="#3E3D40" />
              </g>
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Delete">
          <div className="absolute inset-[6.25%_12.5%]" data-name="Shape">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
              <g id="Shape">
                <path d="M10 10H8V22H10V10Z" fill="#3E3D40" />
                <path d="M16 10H14V22H16V10Z" fill="#3E3D40" />
                <path d={svgPaths.p1460b400} fill="#3E3D40" />
                <path d="M16 0H8V2H16V0Z" fill="#3E3D40" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type Text14Props = {
  text: string;
  additionalClassNames?: string;
};

function Text14({ text, children, additionalClassNames = "" }: React.PropsWithChildren<Text14Props>) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Wrapper7 additionalClassNames="text-black">{text}</Wrapper7>
      <Wrapper8>{children}</Wrapper8>
    </div>
  );
}
type Wrapper7Props = {
  additionalClassNames?: string;
};

function Wrapper7({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper7Props>) {
  return <Wrapper9 additionalClassNames={clsx("flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] whitespace-nowrap", additionalClassNames)}>{children}</Wrapper9>;
}
type Wrapper6Props = {
  additionalClassNames?: string;
};

function Wrapper6({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper6Props>) {
  return <Wrapper9 additionalClassNames={clsx("flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-center tracking-[0.2px] whitespace-nowrap", additionalClassNames)}>{children}</Wrapper9>;
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[6.25%_12.5%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
        {children}
      </svg>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
      <Wrapper10>
        <div className="content-stretch flex flex-col items-center p-[24px] relative w-full">
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
              {"Notes"}
            </p>
          </div>
        </div>
      </Wrapper10>
      <div className="content-stretch flex flex-col h-[302px] items-center justify-between relative shrink-0 w-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("relative w-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start pb-[24px] pt-[4px] px-[24px] relative size-full">
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-none rotate-90">
      <div className="h-0 relative w-[20px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper3 additionalClassNames="h-[113px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[16px] relative size-full">{children}</div>
    </Wrapper3>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4>
      <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0">
        <div className="bg-[#ededed] content-stretch flex items-center p-[20px] relative rounded-[50px] shrink-0">
          <NewMessage className="overflow-clip relative shrink-0 size-[32px]" />
        </div>
        <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal items-center leading-[28px] relative shrink-0 text-[18px] text-center">
          <p className="relative shrink-0 text-[#3e3d40]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {"No notes yet"}
          </p>
          <p className="relative shrink-0 text-[#939598]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {"Type below to add your first note"}
          </p>
        </div>
      </div>
      <Wrapper1>{children}</Wrapper1>
    </Wrapper4>
  );
}
type CardProps = {
  additionalClassNames?: string;
};

function Card({ additionalClassNames = "" }: CardProps) {
  return (
    <div className={clsx("bg-white h-[146px] relative rounded-[4px] shrink-0 w-[196px]", additionalClassNames)}>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[12px] relative size-full">
          <div className="relative shrink-0 size-[172px]">
            <div className="absolute h-[58px] left-[52px] top-[4px] w-[68px]">
              <div className="absolute left-[10px] size-[48px] top-[33px]" data-name="Spinner Circular">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <path d={svgPaths.p2d773380} fill="var(--fill-0, #C4C4C4)" id="Ellipse 472" opacity="0.5" />
                </svg>
                <div className="absolute bottom-[21.5%] left-1/2 right-0 top-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 37.6779">
                    <path d={svgPaths.p1eea9280} fill="var(--fill-0, #C4C4C4)" id="Ellipse 473" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex items-center justify-between left-[-12px] pl-[8px] top-[96px] w-[196px]">
              <p className="font-['Avenir:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[14px] text-center">{"Feb 21, 2023"}</p>
              <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
                <div className="content-stretch flex items-start p-[6px] relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Download">
                    <Wrapper5>
                      <g id="Vector">
                        <path d={svgPaths.p269a500} fill="var(--fill-0, black)" fillOpacity="0.93" />
                        <path d={svgPaths.p32180770} fill="var(--fill-0, black)" fillOpacity="0.93" />
                      </g>
                    </Wrapper5>
                  </div>
                </div>
                <div className="content-stretch flex items-start p-[6px] relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Delete">
                    <Wrapper5>
                      <g id="Shape">
                        <path d="M7.5 7.5H6V16.5H7.5V7.5Z" fill="black" fillOpacity="0.93" />
                        <path d="M12 7.5H10.5V16.5H12V7.5Z" fill="black" fillOpacity="0.93" />
                        <path d={svgPaths.p2b28a400} fill="black" fillOpacity="0.93" />
                        <path d="M12 0H6V1.5H12V0Z" fill="black" fillOpacity="0.93" />
                      </g>
                    </Wrapper5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-[-2px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Helper6() {
  return (
    <div className="gap-x-[16px] gap-y-[20px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full">
      <Card additionalClassNames="col-1 row-1" />
      <Card additionalClassNames="col-2 row-1" />
      <Card additionalClassNames="col-3 row-1" />
      <Card additionalClassNames="col-4 row-1" />
      <Card additionalClassNames="col-1 row-2" />
      <Card additionalClassNames="col-2 row-2" />
    </div>
  );
}
type RxElementsRecordsNotesLayersText2Props = {
  text: string;
  additionalClassNames?: string;
};

function RxElementsRecordsNotesLayersText2({ text, additionalClassNames = "" }: RxElementsRecordsNotesLayersText2Props) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[4px] items-start relative shrink-0", additionalClassNames)}>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type Helper5Props = {
  additionalClassNames?: string;
};

function Helper5({ additionalClassNames = "" }: Helper5Props) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start relative", additionalClassNames)}>
      <div className="h-0 shrink-0 w-full" data-name="missing" />
      <div className="h-0 shrink-0 w-full" data-name="missing" />
      <div className="h-0 shrink-0 w-full" data-name="missing" />
      <div className="h-0 shrink-0 w-full" data-name="missing" />
      <div className="h-0 shrink-0 w-full" data-name="missing" />
      <div className="h-0 shrink-0 w-full" data-name="missing" />
      <div className="h-0 shrink-0 w-full" data-name="missing" />
      <div className="h-0 shrink-0 w-full" data-name="missing" />
      <div className="h-0 shrink-0 w-full" data-name="missing" />
      <div className="h-0 shrink-0 w-full" data-name="missing" />
    </div>
  );
}
type HelperbuttonDropdownTemplateProps = {
  additionalClassNames?: string;
};

function HelperbuttonDropdownTemplate({ additionalClassNames = "" }: HelperbuttonDropdownTemplateProps) {
  return (
    <div className={clsx("absolute bg-[#f4f4f5] rounded-[4px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)]" />
      <Helper5 additionalClassNames="w-full" />
    </div>
  );
}
type HelperbuttonDropdownDropdownTextProps = {
  text: string;
};

function HelperbuttonDropdownDropdownText({ text }: HelperbuttonDropdownDropdownTextProps) {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip right-0 top-0">
      <div className="absolute bg-[#c9cacb] bottom-0 h-px left-0 right-0" />
      <p className="absolute font-['Avenir:Book',sans-serif] h-[20px] leading-[normal] left-[16px] not-italic right-[16px] text-[#3e3d40] text-[18px] text-left top-[calc(50%-10px)] whitespace-pre-wrap">{text}</p>
      <div className="-translate-y-1/2 absolute right-[16px] size-[24px] top-1/2" data-name="Icons / Dropdown / Down">
        <div className="absolute h-[11px] left-[4px] top-[7px] w-[16px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
            <path d="M0 0H16L8 11L0 0Z" fill="var(--fill-0, #9ED5F4)" id="Rectangle 1103" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Helper4() {
  return (
    <RxElementsRecordsNotesLayersText1 text="Toggle label">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Vector">
          <path clipRule="evenodd" d={svgPaths.p2c6deaf0} fill="var(--fill-0, black)" fillOpacity="0.93" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p29584c70} fill="var(--fill-0, black)" fillOpacity="0.93" fillRule="evenodd" />
        </g>
      </svg>
    </RxElementsRecordsNotesLayersText1>
  );
}
type RxElementsRecordsNotesLayersText1Props = {
  text: string;
};

function RxElementsRecordsNotesLayersText1({ text, children }: React.PropsWithChildren<RxElementsRecordsNotesLayersText1Props>) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="h-[36px] relative shrink-0" data-name="Toggle">
        <div className="content-stretch flex gap-[8px] h-full items-start px-[8px] py-[4px] relative">
          <div className="h-[28px] relative shrink-0 w-[36px]" data-name="Toggle / Piece">
            <div className="-translate-y-1/2 absolute bg-[#a6e2f9] h-[16px] left-0 rounded-[16px] top-1/2 w-[36px]" data-name="Track" />
            <div className="-translate-y-1/2 absolute bg-[#408dc1] left-[16px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] size-[20px] top-1/2" data-name="Toggle" />
          </div>
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal h-full leading-[28px] min-h-px min-w-px overflow-hidden relative text-[#3e3d40] text-[18px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {text}
          </p>
        </div>
      </div>
      <Wrapper14 additionalClassNames="size-[40px]">
        <div className="-rotate-90 flex-none">
          <div className="content-stretch flex items-center justify-center relative size-[40px]">
            <div className="flex items-center justify-center relative shrink-0 size-[32px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153" } as React.CSSProperties}>
              <div className="flex-none rotate-90">
                <div className="overflow-clip relative size-[32px]" data-name="Adjustmets">
                  <div className="absolute left-[4px] size-[24px] top-[4px]" data-name="Vector">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper14>
    </div>
  );
}
type BadgeTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BadgeText({ text, additionalClassNames = "" }: BadgeTextProps) {
  return (
    <div className="bg-[#edfee6] h-[32px] relative rounded-[32px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#399927] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] h-full isolate items-center justify-center px-[16px] py-[4px] relative">
          <Helper2 additionalClassNames="z-[3]" />
          <Wrapper7 additionalClassNames="text-[#3e3d40] text-center z-[2]">{text}</Wrapper7>
        </div>
      </div>
    </div>
  );
}

function RxElementsRecordsNotesLayersHelper() {
  return (
    <Wrapper14 additionalClassNames="h-[20px] w-0">
      <Wrapper2>
        <line id="Line 1143" stroke="var(--stroke-0, #3E3D40)" x2="20" y1="0.5" y2="0.5" />
      </Wrapper2>
    </Wrapper14>
  );
}
type Text13Props = {
  text: string;
};

function Text13({ text }: Text13Props) {
  return (
    <Wrapper1>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#939598] text-[18px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <Button1 />
    </Wrapper1>
  );
}
type Text12Props = {
  text: string;
  additionalClassNames?: string;
};

function Text12({ text, additionalClassNames = "" }: Text12Props) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#939598] text-[18px] w-full", additionalClassNames)}>
      <p className="leading-[28px] whitespace-pre-wrap">{text}</p>
    </div>
  );
}
type Text11Props = {
  text: string;
};

function Text11({ text }: Text11Props) {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[842px]">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <HelperbuttonHelper text="B, Doctor" text1="12/30/2025" text2="2:09 PM">
        <line id="Line 1143" stroke="var(--stroke-0, #3E3D40)" x2="20" y1="0.5" y2="0.5" />
      </HelperbuttonHelper>
      <Text12 text={text} additionalClassNames="text-left" />
    </div>
  );
}
type Text10Props = {
  text: string;
  additionalClassNames?: string;
};

function Text10({ text, additionalClassNames = "" }: Text10Props) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[28px]" dir="auto">
        {text}
      </p>
    </div>
  );
}
type HelperbuttonHelperProps = {
  text: string;
  text1: string;
  text2: string;
};

function HelperbuttonHelper({ text, text1, text2, children }: React.PropsWithChildren<HelperbuttonHelperProps>) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Wrapper7 additionalClassNames="text-black text-left">{text}</Wrapper7>
      <Wrapper8>
        <Wrapper7 additionalClassNames="text-[#3e3d40] text-left">{text1}</Wrapper7>
        <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "519.40625", "--transform-inner-height": "153" } as React.CSSProperties}>
          <Wrapper2>{children}</Wrapper2>
        </div>
        <Text10 text={text2} additionalClassNames="text-left" />
      </Wrapper8>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#bfeafb] left-[770px] rounded-[4px] size-[60px] top-[12px]">
      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Helper1 />
    </div>
  );
}
type RxElementsRecordsNotesLayersTextProps = {
  text: string;
  additionalClassNames?: string;
};

function RxElementsRecordsNotesLayersText({ text, additionalClassNames = "" }: RxElementsRecordsNotesLayersTextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col p-[24px] relative w-full", additionalClassNames)}>
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
      </div>
    </div>
  );
}
type DropdownContent1Props = {
  label: string;
  isMandatoryField: boolean;
};

function DropdownContent1({ label, isMandatoryField }: DropdownContent1Props) {
  return (
    <Wrapper11>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
      </p>
      {isMandatoryField && (
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#cb2f36] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          *
        </p>
      )}
    </Wrapper11>
  );
}

function DropdownCaretUp() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <Vector1 additionalClassNames="bottom-[37.5%] top-[31.25%]">
        <path d="M0 10L8 0L16 10H0Z" fill="var(--fill-0, #3E3D40)" id="Vector" />
      </Vector1>
    </div>
  );
}

function CaretDown() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <Vector1 additionalClassNames="bottom-[31.25%] top-[37.5%]">
        <path d="M16 0L8 10L0 0H16Z" fill="var(--fill-0, #3E3D40)" id="Vector" />
      </Vector1>
    </div>
  );
}
type Text9Props = {
  value: string;
};

function Text9({ value }: Text9Props) {
  return (
    <div className="content-stretch flex items-center mb-[-4px] relative shrink-0 w-full">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {value}
      </p>
    </div>
  );
}
type LabelProps = {
  label: string;
  isMandatoryField: boolean;
};

function Label({ label, isMandatoryField }: LabelProps) {
  return (
    <div className="content-stretch flex font-['Roboto:Medium',sans-serif] font-medium gap-[4px] items-center leading-[24px] mb-[-4px] relative shrink-0 text-[14px] w-full">
      <p className="overflow-hidden relative shrink-0 text-[#3e3d40] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
      </p>
      {isMandatoryField && (
        <p className="relative shrink-0 text-[#cb2f36]" style={{ fontVariationSettings: "'wdth' 100" }}>
          *
        </p>
      )}
    </div>
  );
}
type DropdownContentProps = {
  label: string;
  isMandatoryField: boolean;
  value: string;
};

function DropdownContent({ label, isMandatoryField, value }: DropdownContentProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px pb-[4px] relative">
      <Label label={label} isMandatoryField={isMandatoryField} />
      <Text9 value={value} />
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute inset-[8.34%_0.01%_8.33%_-0.02%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.002 19.9975">
        <g id="Vector">
          <path clipRule="evenodd" d={svgPaths.p357d7600} fill="var(--fill-0, black)" fillOpacity="0.93" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p2cf9ac00} fill="var(--fill-0, black)" fillOpacity="0.93" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p92d8100} fill="var(--fill-0, black)" fillOpacity="0.93" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}
type ButtonText14Props = {
  text: string;
};

function ButtonText14({ text }: ButtonText14Props) {
  return <Wrapper12 additionalClassNames="text-[#cb2f36]">{text}</Wrapper12>;
}
type Text8Props = {
  text: string;
};

function Text8({ text }: Text8Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative">
        <Helper2 />
        <Wrapper13 additionalClassNames="text-[#cb2f36]">{text}</Wrapper13>
      </div>
    </div>
  );
}
type ButtonText13Props = {
  text: string;
};

function ButtonText13({ text }: ButtonText13Props) {
  return <Wrapper12 additionalClassNames="text-[#3e3d40]">{text}</Wrapper12>;
}
type ButtonText12Props = {
  text: string;
};

function ButtonText12({ text }: ButtonText12Props) {
  return <Wrapper12 additionalClassNames="text-[#0067ac]">{text}</Wrapper12>;
}
type Text7Props = {
  text: string;
};

function Text7({ text }: Text7Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative">
        <Helper2 />
        <Wrapper13 additionalClassNames="text-[#0067ac]">{text}</Wrapper13>
      </div>
    </div>
  );
}
type ButtonText11Props = {
  text: string;
};

function ButtonText11({ text }: ButtonText11Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] px-[24px] py-[22px] relative">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[32px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type ButtonText10Props = {
  text: string;
};

function ButtonText10({ text }: ButtonText10Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] px-[20px] py-[22px] relative">
        <Wrapper6 additionalClassNames="text-[#0067ac]">{text}</Wrapper6>
      </div>
    </div>
  );
}
type Text6Props = {
  text: string;
};

function Text6({ text }: Text6Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex gap-[12px] h-full items-center justify-center min-w-[inherit] px-[20px] py-[22px] relative">
        <Icon1 />
        <Wrapper6 additionalClassNames="text-[#0067ac]">{text}</Wrapper6>
      </div>
    </div>
  );
}
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex gap-[16px] h-full items-center justify-center min-w-[inherit] px-[24px] py-[22px] relative">
        <Icon />
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[32px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative">
        <Helper2 />
        <Wrapper13 additionalClassNames="text-[#3e3d40]">{text}</Wrapper13>
      </div>
    </div>
  );
}
type ButtonText9Props = {
  text: string;
};

function ButtonText9({ text }: ButtonText9Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] px-[20px] py-[22px] relative">
        <Wrapper6 additionalClassNames="text-[#cb2f36]">{text}</Wrapper6>
      </div>
    </div>
  );
}
type ButtonText8Props = {
  text: string;
};

function ButtonText8({ text }: ButtonText8Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] px-[24px] py-[22px] relative">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#cb2f36] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[32px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type ButtonText7Props = {
  text: string;
};

function ButtonText7({ text }: ButtonText7Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] px-[20px] py-[22px] relative">
        <Wrapper6 additionalClassNames="text-[#3e3d40]">{text}</Wrapper6>
      </div>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex gap-[12px] h-full items-center justify-center min-w-[inherit] px-[20px] py-[22px] relative">
        <Icon1 />
        <Wrapper6 additionalClassNames="text-[#cb2f36]">{text}</Wrapper6>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex gap-[12px] h-full items-center justify-center min-w-[inherit] px-[20px] py-[22px] relative">
        <Icon1 />
        <Wrapper6 additionalClassNames="text-[#3e3d40]">{text}</Wrapper6>
      </div>
    </div>
  );
}
type ButtonText6Props = {
  text: string;
};

function ButtonText6({ text }: ButtonText6Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] px-[24px] py-[22px] relative">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[32px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type ButtonText5Props = {
  text: string;
};

function ButtonText5({ text }: ButtonText5Props) {
  return <Wrapper12 additionalClassNames="text-[#b0b1b3]">{text}</Wrapper12>;
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex gap-[16px] h-full items-center justify-center min-w-[inherit] px-[24px] py-[22px] relative">
        <Icon />
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#cb2f36] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[32px]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Helper3() {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
        <Helper2 />
      </div>
    </div>
  );
}
type Helper2Props = {
  additionalClassNames?: string;
};

function Helper2({ additionalClassNames = "" }: Helper2Props) {
  return (
    <div className={clsx("overflow-clip relative shrink-0 size-[20px]", additionalClassNames)}>
      <div className="absolute inset-[6.25%_4%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4 17.5">
          <path d={svgPaths.p2c1e9900} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type ButtonText4Props = {
  text: string;
};

function ButtonText4({ text }: ButtonText4Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative">
        <Helper2 />
        <Wrapper13 additionalClassNames="text-[#b0b1b3]">{text}</Wrapper13>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex gap-[16px] h-full items-center justify-center min-w-[inherit] px-[24px] py-[22px] relative">
        <Icon />
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[32px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type ButtonText3Props = {
  text: string;
};

function ButtonText3({ text }: ButtonText3Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] px-[20px] py-[22px] relative">
        <Wrapper6 additionalClassNames="text-[#b0b1b3]">{text}</Wrapper6>
      </div>
    </div>
  );
}

function Helper1() {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center px-[20px] py-[22px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[6.25%_4%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.08 21">
          <path d={svgPaths.pe9d5d00} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type ButtonText2Props = {
  text: string;
};

function ButtonText2({ text }: ButtonText2Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex gap-[12px] h-full items-center justify-center min-w-[inherit] px-[20px] py-[22px] relative">
        <Icon1 />
        <Wrapper6 additionalClassNames="text-[#b0b1b3]">{text}</Wrapper6>
      </div>
    </div>
  );
}
type ButtonText1Props = {
  text: string;
};

function ButtonText1({ text }: ButtonText1Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] px-[24px] py-[22px] relative">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b0b1b3] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[32px]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Helper() {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center px-[24px] py-[22px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <div className="absolute inset-[6.25%_4%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
          <path d={svgPaths.p38b95000} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex gap-[16px] h-full items-center justify-center min-w-[inherit] px-[24px] py-[22px] relative">
        <Icon />
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b0b1b3] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[32px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type ButtonProps = {
  className?: string;
  content?: "Icon + Text" | "Text" | "Icon";
  size?: "Large" | "Medium" | "Small";
  state?: "Enabled" | "Hovered" | "Pressed" | "Focused" | "Disabled";
  text?: string;
  type?: "Primary" | "Secondary" | "Danger" | "Ghost";
};

function Button({ className, content = "Text", size = "Large", state = "Enabled", text = "Button", type = "Primary" }: ButtonProps) {
  if (size === "Large" && type === "Secondary" && content === "Icon + Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Secondary, Content=Icon + Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Secondary" && content === "Icon" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Secondary, Content=Icon, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Large" && type === "Danger" && content === "Icon + Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Danger, Content=Icon + Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Secondary" && content === "Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Secondary, Content=Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText1 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Danger" && content === "Icon" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Danger, Content=Icon, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Medium" && type === "Secondary" && content === "Icon + Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Secondary, Content=Icon + Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText2 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Secondary" && content === "Icon" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Secondary, Content=Icon, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Danger" && content === "Icon + Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Danger, Content=Icon + Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText2 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Secondary" && content === "Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Secondary, Content=Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText3 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Danger" && content === "Icon" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Danger, Content=Icon, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Large" && type === "Danger" && content === "Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Danger, Content=Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText1 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Danger" && content === "Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Danger, Content=Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText3 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Primary" && content === "Icon + Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f0f0f0] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Primary, Content=Icon + Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Ghost" && content === "Icon + Text" && state === "Disabled") {
    return (
      <div className={className || "h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Ghost, Content=Icon + Text, State=Disabled">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[16px] h-full items-center justify-center min-w-[inherit] px-[24px] py-[22px] relative">
            <Icon />
            <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#939598] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[32px]">{text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && type === "Secondary" && content === "Icon + Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Secondary, Content=Icon + Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Secondary" && content === "Icon + Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Secondary, Content=Icon + Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#939598] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Text text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Secondary" && content === "Icon + Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#dff5fc] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Secondary, Content=Icon + Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Primary" && content === "Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f0f0f0] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Primary, Content=Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText1 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Primary" && content === "Icon" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f0f0f0] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Primary, Content=Icon, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Large" && type === "Secondary" && content === "Icon + Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#bfeafb] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Secondary, Content=Icon + Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Ghost" && content === "Text" && state === "Disabled") {
    return (
      <div className={className || "h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Ghost, Content=Text, State=Disabled">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] px-[24px] py-[22px] relative">
            <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#939598] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[32px]">{text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && type === "Ghost" && content === "Icon" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Ghost, Content=Icon, State=Disabled">
        <Helper />
      </div>
    );
  }
  if (size === "Large" && type === "Secondary" && content === "Icon" && state === "Enabled") {
    return (
      <div className={className || "bg-[#f9f9f9] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Secondary, Content=Icon, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Large" && type === "Secondary" && content === "Icon" && state === "Focused") {
    return (
      <div className={className || "bg-[#f9f9f9] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Secondary, Content=Icon, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#939598] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Large" && type === "Secondary" && content === "Icon" && state === "Hovered") {
    return (
      <div className={className || "bg-[#dff5fc] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Secondary, Content=Icon, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Large" && type === "Secondary" && content === "Icon" && state === "Pressed") {
    return (
      <div className={className || "bg-[#bfeafb] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Secondary, Content=Icon, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && content === "Icon + Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Secondary, Content=Icon + Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText4 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && content === "Icon" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Secondary, Content=Icon, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Danger" && content === "Icon + Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Danger, Content=Icon + Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText4 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Danger" && content === "Icon" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Danger, Content=Icon, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Large" && type === "Danger" && content === "Icon + Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#ffccd4] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Danger, Content=Icon + Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text1 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Danger" && content === "Icon + Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#ffccd4] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Danger, Content=Icon + Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#f35] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Text1 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Danger" && content === "Icon + Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#ffb8c3] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Danger, Content=Icon + Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text1 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Danger" && content === "Icon + Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#ff9ead] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Danger, Content=Icon + Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text1 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && content === "Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Secondary, Content=Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText5 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Danger" && content === "Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Danger, Content=Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText5 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Secondary" && content === "Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Secondary, Content=Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText6 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Secondary" && content === "Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Secondary, Content=Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#939598] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <ButtonText6 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Secondary" && content === "Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#dff5fc] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Secondary, Content=Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText6 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Secondary" && content === "Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#bfeafb] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Secondary, Content=Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText6 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Danger" && content === "Icon" && state === "Enabled") {
    return (
      <div className={className || "bg-[#ffccd4] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Danger, Content=Icon, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Large" && type === "Danger" && content === "Icon" && state === "Focused") {
    return (
      <div className={className || "bg-[#ffccd4] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Danger, Content=Icon, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#f35] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Large" && type === "Danger" && content === "Icon" && state === "Hovered") {
    return (
      <div className={className || "bg-[#ffb8c3] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Danger, Content=Icon, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Medium" && type === "Secondary" && content === "Icon + Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Secondary, Content=Icon + Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text2 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Icon + Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f0f0f0] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Primary, Content=Icon + Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText4 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Secondary" && content === "Icon + Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Secondary, Content=Icon + Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#939598] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Text2 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Secondary" && content === "Icon + Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#dff5fc] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Secondary, Content=Icon + Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text2 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Danger" && content === "Icon" && state === "Pressed") {
    return (
      <div className={className || "bg-[#ff9ead] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Danger, Content=Icon, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Icon + Text" && state === "Disabled") {
    return (
      <div className={className || "h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Ghost, Content=Icon + Text, State=Disabled">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative">
            <Helper2 />
            <Wrapper13 additionalClassNames="text-[#939598]">{text}</Wrapper13>
          </div>
        </div>
      </div>
    );
  }
  if (size === "Medium" && type === "Secondary" && content === "Icon" && state === "Enabled") {
    return (
      <div className={className || "bg-[#f9f9f9] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Secondary, Content=Icon, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Secondary" && content === "Icon" && state === "Focused") {
    return (
      <div className={className || "bg-[#f9f9f9] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Secondary, Content=Icon, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#939598] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Secondary" && content === "Icon + Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#bfeafb] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Secondary, Content=Icon + Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text2 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Danger" && content === "Icon + Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#ffccd4] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Danger, Content=Icon + Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text3 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Icon" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f0f0f0] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Primary, Content=Icon, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f0f0f0] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Primary, Content=Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText5 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Danger" && content === "Icon + Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#ffccd4] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Danger, Content=Icon + Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#f35] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Text3 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Danger" && content === "Icon + Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#ffb8c3] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Danger, Content=Icon + Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text3 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Danger" && content === "Icon + Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#ff9ead] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Danger, Content=Icon + Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text3 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Secondary" && content === "Icon" && state === "Hovered") {
    return (
      <div className={className || "bg-[#dff5fc] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Secondary, Content=Icon, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Icon" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Ghost, Content=Icon, State=Disabled">
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Text" && state === "Disabled") {
    return (
      <div className={className || "h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Ghost, Content=Text, State=Disabled">
        <Wrapper12 additionalClassNames="text-[#939598]">{text}</Wrapper12>
      </div>
    );
  }
  if (size === "Medium" && type === "Secondary" && content === "Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Secondary, Content=Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText7 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Secondary" && content === "Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Secondary, Content=Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#939598] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <ButtonText7 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Secondary" && content === "Icon" && state === "Pressed") {
    return (
      <div className={className || "bg-[#bfeafb] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Secondary, Content=Icon, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Danger" && content === "Icon" && state === "Enabled") {
    return (
      <div className={className || "bg-[#ffccd4] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Danger, Content=Icon, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Danger" && content === "Icon" && state === "Focused") {
    return (
      <div className={className || "bg-[#ffccd4] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Danger, Content=Icon, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#f35] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Danger" && content === "Icon" && state === "Hovered") {
    return (
      <div className={className || "bg-[#ffb8c3] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Danger, Content=Icon, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Danger" && content === "Icon" && state === "Pressed") {
    return (
      <div className={className || "bg-[#ff9ead] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Danger, Content=Icon, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Secondary" && content === "Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#dff5fc] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Secondary, Content=Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText7 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Danger" && content === "Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#ffccd4] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Danger, Content=Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText8 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Danger" && content === "Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#ffccd4] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Danger, Content=Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#f35] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <ButtonText8 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Danger" && content === "Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#ffb8c3] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Danger, Content=Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText8 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Danger" && content === "Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#ff9ead] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Danger, Content=Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText8 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Secondary" && content === "Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#bfeafb] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Secondary, Content=Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText7 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Danger" && content === "Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#ffccd4] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Danger, Content=Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText9 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Danger" && content === "Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#ffccd4] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Danger, Content=Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#f35] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <ButtonText9 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && content === "Icon + Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Secondary, Content=Icon + Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text4 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && content === "Icon" && state === "Enabled") {
    return (
      <div className={className || "bg-[#f9f9f9] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Secondary, Content=Icon, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && content === "Icon + Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Secondary, Content=Icon + Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#939598] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Text4 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && content === "Icon" && state === "Focused") {
    return (
      <div className={className || "bg-[#f9f9f9] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Secondary, Content=Icon, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#939598] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Large" && type === "Primary" && content === "Icon + Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#bfeafb] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Primary, Content=Icon + Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text5 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Danger" && content === "Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#ffb8c3] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Danger, Content=Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText9 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Primary" && content === "Icon" && state === "Enabled") {
    return (
      <div className={className || "bg-[#bfeafb] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Primary, Content=Icon, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Medium" && type === "Primary" && content === "Icon + Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#bfeafb] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Primary, Content=Icon + Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text6 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Primary" && content === "Icon + Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#a6e2f9] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Primary, Content=Icon + Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text6 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Primary" && content === "Icon + Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#80d6f7] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Primary, Content=Icon + Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text6 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Primary" && content === "Icon" && state === "Enabled") {
    return (
      <div className={className || "bg-[#bfeafb] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Primary, Content=Icon, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Primary" && content === "Icon" && state === "Hovered") {
    return (
      <div className={className || "bg-[#a6e2f9] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Primary, Content=Icon, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Primary" && content === "Icon + Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#bfeafb] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Primary, Content=Icon + Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#408dc1] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Text6 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Primary" && content === "Icon + Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f0f0f0] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Primary, Content=Icon + Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText2 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Primary" && content === "Icon" && state === "Pressed") {
    return (
      <div className={className || "bg-[#80d6f7] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Primary, Content=Icon, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Primary" && content === "Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#bfeafb] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Primary, Content=Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText10 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Primary" && content === "Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#a6e2f9] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Primary, Content=Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText10 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Primary" && content === "Icon" && state === "Focused") {
    return (
      <div className={className || "bg-[#bfeafb] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Primary, Content=Icon, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#408dc1] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Primary" && content === "Icon" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f0f0f0] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Primary, Content=Icon, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Primary" && content === "Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#80d6f7] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Primary, Content=Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText10 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Primary" && content === "Icon + Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#bfeafb] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Primary, Content=Icon + Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#408dc1] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Text5 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Primary" && content === "Icon + Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#80d6f7] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Primary, Content=Icon + Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text5 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Primary" && content === "Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#bfeafb] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Primary, Content=Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#408dc1] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <ButtonText10 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Primary" && content === "Text" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f0f0f0] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Primary, Content=Text, State=Disabled">
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText3 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Primary" && content === "Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#bfeafb] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Primary, Content=Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#408dc1] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <ButtonText11 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Primary" && content === "Icon" && state === "Focused") {
    return (
      <div className={className || "bg-[#bfeafb] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Primary, Content=Icon, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#408dc1] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Large" && type === "Primary" && content === "Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#80d6f7] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Primary, Content=Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText11 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Primary" && content === "Icon" && state === "Pressed") {
    return (
      <div className={className || "bg-[#80d6f7] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Primary, Content=Icon, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Icon + Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#bfeafb] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Primary, Content=Icon + Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text7 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Icon + Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#bfeafb] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Primary, Content=Icon + Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#408dc1] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Text7 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && content === "Icon + Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#dff5fc] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Secondary, Content=Icon + Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text4 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && content === "Icon" && state === "Hovered") {
    return (
      <div className={className || "bg-[#dff5fc] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Secondary, Content=Icon, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Icon + Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#80d6f7] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Primary, Content=Icon + Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text7 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Primary" && content === "Icon + Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#a6e2f9] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Primary, Content=Icon + Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text5 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Icon" && state === "Enabled") {
    return (
      <div className={className || "bg-[#bfeafb] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Primary, Content=Icon, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Icon" && state === "Focused") {
    return (
      <div className={className || "bg-[#bfeafb] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Primary, Content=Icon, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#408dc1] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Icon" && state === "Pressed") {
    return (
      <div className={className || "bg-[#80d6f7] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Primary, Content=Icon, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Medium" && type === "Danger" && content === "Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#ff9ead] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Danger, Content=Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText9 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#bfeafb] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Primary, Content=Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText12 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && content === "Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Secondary, Content=Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText13 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && content === "Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#f9f9f9] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Secondary, Content=Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#939598] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <ButtonText13 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Ghost" && content === "Icon + Text" && state === "Enabled") {
    return (
      <div className={className || "h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Ghost, Content=Icon + Text, State=Enabled">
        <Text5 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && content === "Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#dff5fc] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Secondary, Content=Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText13 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Ghost" && content === "Text" && state === "Enabled") {
    return (
      <div className={className || "h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Ghost, Content=Text, State=Enabled">
        <ButtonText11 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Ghost" && content === "Icon" && state === "Enabled") {
    return (
      <div className={className || "relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Ghost, Content=Icon, State=Enabled">
        <Helper />
      </div>
    );
  }
  if (size === "Medium" && type === "Ghost" && content === "Icon + Text" && state === "Enabled") {
    return (
      <div className={className || "h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Ghost, Content=Icon + Text, State=Enabled">
        <Text6 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Ghost" && content === "Icon + Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#f0f0f0] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Ghost, Content=Icon + Text, State=Hovered">
        <Text6 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Icon + Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#a6e2f9] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Primary, Content=Icon + Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text7 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#bfeafb] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Primary, Content=Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#408dc1] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <ButtonText12 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#80d6f7] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Primary, Content=Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText12 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Primary" && content === "Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#a6e2f9] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Primary, Content=Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText11 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Primary" && content === "Icon" && state === "Hovered") {
    return (
      <div className={className || "bg-[#a6e2f9] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Primary, Content=Icon, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Icon" && state === "Hovered") {
    return (
      <div className={className || "bg-[#a6e2f9] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Primary, Content=Icon, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Medium" && type === "Ghost" && content === "Icon + Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#e0e0e0] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Ghost, Content=Icon + Text, State=Pressed">
        <Text6 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Ghost" && content === "Icon" && state === "Enabled") {
    return (
      <div className={className || "relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Ghost, Content=Icon, State=Enabled">
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Ghost" && content === "Icon" && state === "Hovered") {
    return (
      <div className={className || "bg-[#f0f0f0] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Ghost, Content=Icon, State=Hovered">
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Ghost" && content === "Icon + Text" && state === "Focused") {
    return (
      <div className={className || "h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Ghost, Content=Icon + Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#b0b1b3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Text6 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#a6e2f9] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Primary, Content=Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText12 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Ghost" && content === "Icon + Text" && state === "Disabled") {
    return (
      <div className={className || "h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Ghost, Content=Icon + Text, State=Disabled">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] h-full items-center justify-center min-w-[inherit] px-[20px] py-[22px] relative">
            <Icon1 />
            <Wrapper6 additionalClassNames="text-[#939598]">{text}</Wrapper6>
          </div>
        </div>
      </div>
    );
  }
  if (size === "Medium" && type === "Ghost" && content === "Icon" && state === "Pressed") {
    return (
      <div className={className || "bg-[#e0e0e0] relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Ghost, Content=Icon, State=Pressed">
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Ghost" && content === "Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#f0f0f0] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Ghost, Content=Text, State=Hovered">
        <ButtonText10 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Ghost" && content === "Text" && state === "Enabled") {
    return (
      <div className={className || "h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Ghost, Content=Text, State=Enabled">
        <ButtonText10 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Ghost" && content === "Icon" && state === "Focused") {
    return (
      <div className={className || "relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Ghost, Content=Icon, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#b0b1b3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Ghost" && content === "Icon" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[4px] size-[48px]"} data-name="Size=Medium, Type=Ghost, Content=Icon, State=Disabled">
        <Helper1 />
      </div>
    );
  }
  if (size === "Medium" && type === "Ghost" && content === "Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#e0e0e0] h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Ghost, Content=Text, State=Pressed">
        <ButtonText10 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Ghost" && content === "Icon + Text" && state === "Focused") {
    return (
      <div className={className || "h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Ghost, Content=Icon + Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#b0b1b3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Text5 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Ghost" && content === "Icon + Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#e0e0e0] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Ghost, Content=Icon + Text, State=Pressed">
        <Text5 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Ghost" && content === "Text" && state === "Focused") {
    return (
      <div className={className || "h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Ghost, Content=Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#b0b1b3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <ButtonText10 text={text} />
      </div>
    );
  }
  if (size === "Medium" && type === "Ghost" && content === "Text" && state === "Disabled") {
    return (
      <div className={className || "h-[48px] min-w-[108px] relative rounded-[4px]"} data-name="Size=Medium, Type=Ghost, Content=Text, State=Disabled">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] px-[20px] py-[22px] relative">
            <Wrapper6 additionalClassNames="text-[#939598]">{text}</Wrapper6>
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && type === "Ghost" && content === "Text" && state === "Focused") {
    return (
      <div className={className || "h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Ghost, Content=Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#b0b1b3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <ButtonText11 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Ghost" && content === "Icon" && state === "Focused") {
    return (
      <div className={className || "relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Ghost, Content=Icon, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#b0b1b3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Helper />
      </div>
    );
  }
  if (size === "Large" && type === "Ghost" && content === "Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#e0e0e0] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Ghost, Content=Text, State=Pressed">
        <ButtonText11 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Ghost" && content === "Icon" && state === "Pressed") {
    return (
      <div className={className || "bg-[#e0e0e0] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Ghost, Content=Icon, State=Pressed">
        <Helper />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Icon + Text" && state === "Enabled") {
    return (
      <div className={className || "h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Ghost, Content=Icon + Text, State=Enabled">
        <Text7 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Icon + Text" && state === "Focused") {
    return (
      <div className={className || "h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Ghost, Content=Icon + Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#b0b1b3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Text7 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && content === "Icon + Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#bfeafb] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Secondary, Content=Icon + Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text4 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && content === "Icon" && state === "Pressed") {
    return (
      <div className={className || "bg-[#bfeafb] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Secondary, Content=Icon, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Icon + Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#e0e0e0] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Ghost, Content=Icon + Text, State=Pressed">
        <Text7 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Ghost" && content === "Icon + Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#f0f0f0] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Ghost, Content=Icon + Text, State=Hovered">
        <Text5 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Icon" && state === "Enabled") {
    return (
      <div className={className || "relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Ghost, Content=Icon, State=Enabled">
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Icon" && state === "Focused") {
    return (
      <div className={className || "relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Ghost, Content=Icon, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#b0b1b3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Icon" && state === "Pressed") {
    return (
      <div className={className || "bg-[#e0e0e0] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Ghost, Content=Icon, State=Pressed">
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && content === "Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#bfeafb] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Secondary, Content=Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText13 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Text" && state === "Enabled") {
    return (
      <div className={className || "h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Ghost, Content=Text, State=Enabled">
        <ButtonText12 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Danger" && content === "Icon + Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#ffccd4] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Danger, Content=Icon + Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text8 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Danger" && content === "Icon" && state === "Enabled") {
    return (
      <div className={className || "bg-[#ffccd4] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Danger, Content=Icon, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Danger" && content === "Icon + Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#ffccd4] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Danger, Content=Icon + Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#f35] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Text8 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Danger" && content === "Icon" && state === "Focused") {
    return (
      <div className={className || "bg-[#ffccd4] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Danger, Content=Icon, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#f35] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Danger" && content === "Icon + Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#ffb8c3] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Danger, Content=Icon + Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text8 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Danger" && content === "Icon" && state === "Hovered") {
    return (
      <div className={className || "bg-[#ffb8c3] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Danger, Content=Icon, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Danger" && content === "Icon + Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#ff9ead] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Danger, Content=Icon + Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text8 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Danger" && content === "Icon" && state === "Pressed") {
    return (
      <div className={className || "bg-[#ff9ead] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Danger, Content=Icon, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Icon + Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#f0f0f0] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Ghost, Content=Icon + Text, State=Hovered">
        <Text7 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Text" && state === "Focused") {
    return (
      <div className={className || "h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Ghost, Content=Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#b0b1b3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <ButtonText12 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#e0e0e0] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Ghost, Content=Text, State=Pressed">
        <ButtonText12 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Ghost" && content === "Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#f0f0f0] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Ghost, Content=Text, State=Hovered">
        <ButtonText11 text={text} />
      </div>
    );
  }
  if (size === "Large" && type === "Ghost" && content === "Icon" && state === "Hovered") {
    return (
      <div className={className || "bg-[#f0f0f0] relative rounded-[4px] size-[64px]"} data-name="Size=Large, Type=Ghost, Content=Icon, State=Hovered">
        <Helper />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Icon" && state === "Hovered") {
    return (
      <div className={className || "bg-[#f0f0f0] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Ghost, Content=Icon, State=Hovered">
        <Helper3 />
      </div>
    );
  }
  if (size === "Small" && type === "Danger" && content === "Text" && state === "Enabled") {
    return (
      <div className={className || "bg-[#ffccd4] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Danger, Content=Text, State=Enabled">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText14 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Danger" && content === "Text" && state === "Focused") {
    return (
      <div className={className || "bg-[#ffccd4] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Danger, Content=Text, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#f35] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <ButtonText14 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Danger" && content === "Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#ffb8c3] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Danger, Content=Text, State=Hovered">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText14 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Danger" && content === "Text" && state === "Pressed") {
    return (
      <div className={className || "bg-[#ff9ead] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Danger, Content=Text, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#f35] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <ButtonText14 text={text} />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Text" && state === "Hovered") {
    return (
      <div className={className || "bg-[#f0f0f0] h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Ghost, Content=Text, State=Hovered">
        <ButtonText12 text={text} />
      </div>
    );
  }
  return (
    <div className={className || "bg-[#bfeafb] h-[64px] min-w-[120px] relative rounded-[4px]"} data-name="Size=Large, Type=Primary, Content=Text, State=Enabled">
      <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <ButtonText11 text={text} />
    </div>
  );
}
type DropdownProps = {
  className?: string;
  helperText?: string;
  isMandatoryField?: boolean;
  label?: string;
  selected?: boolean;
  showHelperText?: boolean;
  state?: "Enabled" | "Hovered" | "Focused" | "Pressed" | "Error" | "Disabled";
  value?: string;
};

function Dropdown({ className, helperText = "Helper text", isMandatoryField = true, label = "Label", selected = false, showHelperText = true, state = "Enabled", value = "Option" }: DropdownProps) {
  if (selected && state === "Enabled") {
    return (
      <div className={className || "relative w-[240px]"} data-name="Selected=True, State=Enabled">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
            <DropdownContent label={label} isMandatoryField={isMandatoryField} value={value} />
            <CaretDown />
          </div>
          {showHelperText && (
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
  if (selected && state === "Error") {
    return (
      <div className={className || "relative w-[240px]"} data-name="Selected=True, State=Error">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border-[#cb2f36] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px pb-[4px] relative" data-name="Content">
              <div className="content-stretch flex font-['Roboto:Medium',sans-serif] font-medium gap-[4px] items-center leading-[24px] mb-[-4px] relative shrink-0 text-[#cb2f36] text-[14px] w-full" data-name="Label">
                <p className="overflow-hidden relative shrink-0 text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {label}
                </p>
                {isMandatoryField && (
                  <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                    *
                  </p>
                )}
              </div>
              <Text9 value={value} />
            </div>
            <CaretDown />
          </div>
          {showHelperText && (
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#cb2f36] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
  if (selected && state === "Hovered") {
    return (
      <div className={className || "relative w-[240px]"} data-name="Selected=True, State=Hovered">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="bg-[rgba(62,61,64,0.05)] content-stretch flex gap-[8px] h-[52px] items-center relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
            <DropdownContent label={label} isMandatoryField={isMandatoryField} value={value} />
            <CaretDown />
          </div>
          {showHelperText && (
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
  if (selected && state === "Focused") {
    return (
      <div className={className || "relative w-[240px]"} data-name="Selected=True, State=Focused">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b-2 border-solid inset-0 pointer-events-none" />
            <DropdownContent label={label} isMandatoryField={isMandatoryField} value={value} />
            <CaretDown />
          </div>
          {showHelperText && (
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
  if (selected && state === "Pressed") {
    return (
      <div className={className || "relative w-[240px]"} data-name="Selected=True, State=Pressed">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b-2 border-solid inset-0 pointer-events-none" />
            <DropdownContent label={label} isMandatoryField={isMandatoryField} value={value} />
            <DropdownCaretUp />
          </div>
          {showHelperText && (
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
  if (selected && state === "Disabled") {
    return (
      <div className={className || "relative w-[240px]"} data-name="Selected=True, State=Disabled">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px pb-[4px] relative" data-name="Content">
              <div className="content-stretch flex items-center mb-[-4px] relative shrink-0 w-full" data-name="Label">
                <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#b0b1b3] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {label}
                </p>
              </div>
              <div className="content-stretch flex items-center mb-[-4px] relative shrink-0 w-full" data-name="Text">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#b0b1b3] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {value}
                </p>
              </div>
            </div>
            <CaretDown />
          </div>
          {showHelperText && (
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#b0b1b3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
  if (!selected && state === "Error") {
    return (
      <div className={className || "relative w-[240px]"} data-name="Selected=False, State=Error">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border-[#cb2f36] border-b border-solid inset-0 pointer-events-none" />
            <DropdownContent1 label={label} isMandatoryField={isMandatoryField} />
            <CaretDown />
          </div>
          {showHelperText && (
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#cb2f36] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
  if (!selected && state === "Hovered") {
    return (
      <div className={className || "relative w-[240px]"} data-name="Selected=False, State=Hovered">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="bg-[rgba(62,61,64,0.05)] content-stretch flex gap-[8px] h-[52px] items-center relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
            <DropdownContent1 label={label} isMandatoryField={isMandatoryField} />
            <CaretDown />
          </div>
          {showHelperText && (
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
  if (!selected && state === "Focused") {
    return (
      <div className={className || "relative w-[240px]"} data-name="Selected=False, State=Focused">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b-2 border-solid inset-0 pointer-events-none" />
            <DropdownContent1 label={label} isMandatoryField={isMandatoryField} />
            <CaretDown />
          </div>
          {showHelperText && (
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
  if (!selected && state === "Pressed") {
    return (
      <div className={className || "relative w-[240px]"} data-name="Selected=False, State=Pressed">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b-2 border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px pb-[4px] relative" data-name="Content">
              <Label label={label} isMandatoryField={isMandatoryField} />
              <div className="h-[20px] mb-[-4px] shrink-0 w-full" data-name="Text" />
            </div>
            <DropdownCaretUp />
          </div>
          {showHelperText && (
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
  if (!selected && state === "Disabled") {
    return (
      <div className={className || "relative w-[240px]"} data-name="Selected=False, State=Disabled">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#b0b1b3] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {label}
                </p>
              </div>
            </div>
            <CaretDown />
          </div>
          {showHelperText && (
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#b0b1b3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className={className || "relative w-[240px]"} data-name="Selected=False, State=Enabled">
      <div className="content-stretch flex flex-col items-start relative w-full">
        <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
          <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
          <DropdownContent1 label={label} isMandatoryField={isMandatoryField} />
          <CaretDown />
        </div>
        {showHelperText && (
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
}
type NewMessageProps = {
  className?: string;
  size?: "32x32" | "24x24" | "20x20" | "16x16";
};

function NewMessage({ className, size = "32x32" }: NewMessageProps) {
  const is16X16 = size === "16x16";
  const is20X20 = size === "20x20";
  const is24X24 = size === "24x24";
  return (
    <div className={className || `relative ${is16X16 ? "size-[16px]" : is20X20 ? "size-[20px]" : is24X24 ? "size-[24px]" : "size-[32px]"}`}>
      <div className="absolute inset-[6.25%]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is16X16 ? "0 0 14 14" : is20X20 ? "0 0 17.5 17.5" : is24X24 ? "0 0 21 21" : "0 0 28 28"}>
          <g id="Shape">
            <path d={is16X16 ? svgPaths.p142ed300 : is20X20 ? svgPaths.p22906a00 : is24X24 ? svgPaths.p46b1080 : svgPaths.pb779c00} fill="#3E3D40" />
            <path d={is16X16 ? svgPaths.pd2e8f00 : is20X20 ? svgPaths.pfc79200 : is24X24 ? svgPaths.p7528600 : svgPaths.p18674980} fill="#3E3D40" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type NoImageProps = {
  className?: string;
  size?: "32x32" | "20x20" | "24x24" | "16x16";
};

function NoImage({ className, size = "32x32" }: NoImageProps) {
  const is16X16 = size === "16x16";
  const is20X20 = size === "20x20";
  const is24X24 = size === "24x24";
  return (
    <div className={className || `relative ${is16X16 ? "size-[16px]" : is20X20 ? "size-[20px]" : is24X24 ? "size-[24px]" : "size-[32px]"}`}>
      <div className="absolute inset-[6.25%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is16X16 ? "0 0 14 14" : is20X20 ? "0 0 17.5 17.5" : is24X24 ? "0 0 21 21" : "0 0 28 28"}>
          <g id="Vector">
            <path d={is16X16 ? svgPaths.p1ad5aa80 : is20X20 ? svgPaths.p1888d600 : is24X24 ? svgPaths.p3d994472 : svgPaths.p15e177c0} fill="var(--fill-0, #3E3D40)" />
            <path d={is16X16 ? svgPaths.p370ceef0 : is20X20 ? svgPaths.p2c8bb800 : is24X24 ? svgPaths.p27520c00 : svgPaths.pfb0e800} fill="var(--fill-0, #3E3D40)" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type RxElementsRecordsNotesLayersProps = {
  className?: string;
  component?: "Notes" | "Invisalign simulation" | "Scanned layers" | "Attachments" | "Due date" | "Send to" | "Default";
  state?: "--" | "type1" | "1" | "2" | "3" | "Empty";
  type?: "Collapsed" | "Expanded" | "Empty" | "myitero - empty" | "myitero - images" | "Sticky concept";
};

function RxElementsRecordsNotesLayers({ className, component = "Attachments", state = "--", type = "myitero - empty" }: RxElementsRecordsNotesLayersProps) {
  if (component === "Attachments" && type === "Empty") {
    return (
      <div className={className || "bg-white h-[380px] relative rounded-[8px] w-[890px]"} data-name="Component=Attachments, Type=Empty">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <div className="bg-white relative shrink-0 w-full" data-name="Rx elements (records, notes, layers)">
            <div className="overflow-clip rounded-[inherit] size-full">
              <RxElementsRecordsNotesLayersText text="Attachments" additionalClassNames="items-start" />
            </div>
          </div>
          <Wrapper3 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[24px] py-[32px] relative size-full">
                <div className="bg-[#ededed] content-stretch flex items-center p-[20px] relative rounded-[50px] shrink-0">
                  <NoImage className="overflow-clip relative shrink-0 size-[32px]" />
                </div>
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#939598] text-[18px] text-center" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {`You can share external-related files, including images, videos and X-rays, with your lab. `}
                  <br aria-hidden="true" />
                  To upload files use MyiTero.com
                </p>
              </div>
            </div>
          </Wrapper3>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }
  if (component === "Notes" && type === "Sticky concept" && state === "Empty") {
    return (
      <button className={className || "bg-white cursor-pointer h-[380px] relative rounded-[8px] w-[890px]"} data-name="Component=Notes, Type=Sticky concept, state=Empty">
        <Wrapper>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#939598] text-[18px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
            Add your note here...
          </p>
          <div className="absolute bg-[#bfeafb] left-[770px] rounded-[4px] size-[60px] top-[12px]" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[22px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                  <div className="absolute inset-[12.51%_12.52%_12.5%_12.39%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0214 17.9972">
                      <path d={svgPaths.p1f804340} fill="var(--fill-0, #0067AC)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </button>
    );
  }
  if (component === "Notes" && type === "Sticky concept" && state === "type1") {
    return (
      <button className={className || "bg-white cursor-pointer h-[380px] relative rounded-[8px] w-[890px]"} data-name="Component=Notes, Type=Sticky concept, state=type1">
        <Wrapper>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
            Please keep mesial and distal contacts slightly light; patient is sensitive to tight contacts.
          </p>
          <Button1 />
        </Wrapper>
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </button>
    );
  }
  if (component === "Notes" && type === "Sticky concept" && state === "1") {
    return (
      <button className={className || "bg-white cursor-pointer h-[380px] relative rounded-[8px] w-[890px]"} data-name="Component=Notes, Type=Sticky concept, state=1">
        <Wrapper4>
          <Text11 text="Please keep mesial and distal contacts slightly light; patient is sensitive to tight contacts." />
          <Text13 text="Add your note here..." />
        </Wrapper4>
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </button>
    );
  }
  if (component === "Notes" && type === "Sticky concept" && state === "2") {
    return (
      <button className={className || "bg-white cursor-pointer h-[380px] relative rounded-[8px] w-[890px]"} data-name="Component=Notes, Type=Sticky concept, state=2">
        <Wrapper4>
          <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[842px]">
            <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <HelperbuttonHelper text="B, Doctor" text1="02/15/2026" text2="1 minute ago">
              <line id="Line 1143" stroke="var(--stroke-0, #3E3D40)" x2="20" y1="0.5" y2="0.5" />
            </HelperbuttonHelper>
            <Text12 text="Please keep mesial and distal contacts slightly light; patient is sensitive to tight contacts." additionalClassNames="text-left" />
          </div>
          <Text11 text="Please keep mesial and distal contacts slightly light; patient is sensitive to tight contacts." />
          <Text13 text="Add your note here..." />
        </Wrapper4>
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </button>
    );
  }
  if (component === "Notes" && type === "Sticky concept" && state === "3") {
    return (
      <div className={className || "bg-white h-[380px] relative rounded-[8px] w-[890px]"} data-name="Component=Notes, Type=Sticky concept, state=3">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <Wrapper10>
            <RxElementsRecordsNotesLayersText text="Notes" additionalClassNames="items-center" />
          </Wrapper10>
          <div className="content-stretch flex flex-col h-[302px] items-center justify-between relative shrink-0 w-full">
            <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[842px]">
              <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <Text14 text="B, Doctor">
                <Wrapper7 additionalClassNames="text-[#3e3d40]">02/16/2025</Wrapper7>
                <RxElementsRecordsNotesLayersHelper />
                <Text10 text="just now" />
              </Text14>
              <Text12 text="Yet another comment" />
            </div>
            <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[842px]">
              <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <Text14 text="B, Doctor">
                <Wrapper7 additionalClassNames="text-[#3e3d40]">02/15/2026</Wrapper7>
                <RxElementsRecordsNotesLayersHelper />
                <Text10 text="1 minute ago" />
              </Text14>
              <Text12 text="Please keep mesial and distal contacts slightly light; patient is sensitive to tight contacts." />
            </div>
            <div className="absolute bg-[#7f7f7f] h-[100px] left-[875px] rounded-[20px] top-[3px] w-[7px]" />
            <Wrapper1>
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#939598] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Add your note here...
              </p>
              <Button1 />
            </Wrapper1>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }
  if (component === "Scanned layers" && type === "Collapsed") {
    return (
      <div className={className || "bg-white relative rounded-[8px] w-[1860px]"} data-name="Component=Scanned layers, Type=Collapsed">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              Scan workflow: Fixed restorative
            </p>
            <div className="flex items-center justify-center relative shrink-0 size-[40px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="-rotate-90 flex-none">
                <div className="size-[40px]" />
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
              <BadgeText text="Badge text" />
              <BadgeText text="Badge text" />
              <BadgeText text="Badge text" />
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }
  if (component === "Invisalign simulation" && type === "Collapsed") {
    return (
      <div className={className || "bg-white relative rounded-[8px] w-[920px]"} data-name="Component=Invisalign simulation, Type=Collapsed">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
          <Helper4 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }
  if (component === "Invisalign simulation" && type === "Expanded") {
    return (
      <div className={className || "bg-white h-[675px] relative rounded-[8px] w-[920px]"} data-name="Component=Invisalign simulation, Type=Expanded">
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
          <Helper4 />
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="col-1 h-px ml-0 mt-[495px] relative row-1 w-[860px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 860 1">
                <path d="M860 0H0V1H860V0Z" fill="var(--fill-0, #C9CACB)" id="Rectangle 75" />
              </svg>
            </div>
            <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[28px] ml-[24px] mt-[18px] relative row-1 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Invisalign treatment option
            </p>
            <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[28px] ml-[24px] mt-[98px] relative row-1 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Arch to treat
            </p>
            <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[28px] ml-[24px] mt-[258px] relative row-1 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Dental midline
            </p>
            <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[28px] ml-[24px] mt-[338px] relative row-1 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Spacing
            </p>
            <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[28px] ml-[24px] mt-[178px] relative row-1 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Attachments
            </p>
            <div className="col-1 flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center ml-[24px] mt-[506px] relative row-1 text-[#3e3d40] text-[18px] w-[804px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[28px] whitespace-pre-wrap">Simulation update takes up to 3 minutes. Invisalign Outcome Simulator Pro will temporarily close.</p>
            </div>
            <div className="col-1 h-[96px] ml-0 mt-[392px] relative row-1 w-[860px]" data-name="Defaults menu">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[24px] text-[#3e3d40] text-[18px] top-[48px] w-[826px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[28px] whitespace-pre-wrap">These are your default preferences.</p>
              </div>
            </div>
            <button className="block col-1 cursor-pointer h-[56px] ml-[256px] mt-[320px] relative row-1 w-[367px]" data-name="Simulation settings / Spaces">
              <HelperbuttonDropdownDropdownText text="fsd" />
              <div className="absolute h-[320px] left-0 opacity-0 right-0 top-[48px]" data-name="Simulation settings / 04 Spaces">
                <HelperbuttonDropdownTemplate additionalClassNames="inset-[160px_0]" />
              </div>
            </button>
            <button className="block col-1 cursor-pointer h-[56px] ml-[256px] mt-[240px] relative row-1 w-[367px]" data-name="Simulation settings / Dental midline aligned">
              <HelperbuttonDropdownDropdownText text="fsd" />
              <div className="absolute h-[256px] left-0 opacity-0 right-0 top-[48px]" data-name="Simulation settings / 03 Dental midline aligned">
                <HelperbuttonDropdownTemplate additionalClassNames="inset-[128px_0]" />
              </div>
            </button>
            <button className="block col-1 cursor-pointer h-[56px] ml-[256px] mt-[160px] relative row-1 w-[367px]" data-name="Simulation settings / Attachments">
              <HelperbuttonDropdownDropdownText text="fsd" />
              <div className="absolute h-[192px] left-0 opacity-0 right-0 top-[48px]" data-name="Simulation settings / 05 Attachments">
                <HelperbuttonDropdownTemplate additionalClassNames="inset-[96px_0]" />
              </div>
            </button>
            <button className="block col-1 cursor-pointer h-[56px] ml-[256px] mt-[80px] relative row-1 w-[367px]" data-name="Simulation settings / Arch to treat">
              <HelperbuttonDropdownDropdownText text="fsd" />
              <div className="absolute h-[192px] left-0 opacity-0 right-0 top-[48px]" data-name="Simulation settings / 02 Arch to treat">
                <HelperbuttonDropdownTemplate additionalClassNames="inset-[96px_0]" />
              </div>
            </button>
            <button className="block col-1 cursor-pointer h-[56px] ml-[256px] mt-0 relative row-1 w-[367px]" data-name="Simulation settings / Invisalign product type">
              <div className="absolute h-[296px] left-0 opacity-0 right-0 top-[48px]" data-name="Simulation settings / 01 Invisalign product type">
                <div className="absolute bg-[#f4f4f5] inset-0 rounded-[4px]" data-name="Dropdown / Template">
                  <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)]" />
                  <Helper5 additionalClassNames="size-full" />
                </div>
                <p className="absolute bottom-[88px] font-['Avenir:Book',sans-serif] leading-[normal] left-[16px] not-italic right-[16px] text-[#9e9e9f] text-[18px] text-left translate-y-full whitespace-pre-wrap">Some of your products may be currently unavailable for Invisalign Outcome Simulator Pro</p>
              </div>
              <HelperbuttonDropdownDropdownText text="fsd" />
            </button>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }
  if (component === "Send to") {
    return (
      <div className={className || "bg-white h-[88px] relative rounded-[8px] w-[690px]"} data-name="Component=Send to">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center overflow-clip pb-[8px] px-[24px] relative size-full">
            <Dropdown className="flex-[1_0_0] min-h-px min-w-px relative" isMandatoryField={false} label="Send to" selected showHelperText={false} value="Ocean lab" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }
  if (component === "Due date") {
    return (
      <div className={className || "bg-white h-[88px] relative rounded-[8px] w-[690px]"} data-name="Component=Due date">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center overflow-clip pb-[8px] px-[24px] relative size-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Dropdown">
              <div className="content-stretch flex flex-col items-start relative w-full">
                <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
                  <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
                  <Wrapper11>
                    <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Due date
                    </p>
                  </Wrapper11>
                  <CaretDown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }
  if (component === "Attachments" && type === "myitero - images" && state === "--") {
    return (
      <div className={className || "bg-white h-[380px] relative rounded-[8px] w-[890px]"} data-name="Component=Attachments, Type=myitero - images, state=--">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip p-[24px] relative size-full">
            <RxElementsRecordsNotesLayersText2 text="Attachments" additionalClassNames="w-full" />
            <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0">
                <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="upload-cloud">
                    <Vector />
                  </div>
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#262626] text-[18px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Drop files to upload
                  </p>
                </div>
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.23)] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                  or
                </p>
                <Button className="bg-[#f9f9f9] h-[32px] min-w-[96px] relative rounded-[4px] shrink-0" size="Small" text="Browse" type="Secondary" />
              </div>
              <Helper6 />
            </div>
            <div className="absolute bg-[#7f7f7f] h-[100px] left-[875px] rounded-[20px] top-[132px] w-[7px]" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }
  if (component === "Default") {
    return (
      <div className={className || "bg-white h-[380px] relative rounded-[8px]"} data-name="Component=Default">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[24px] h-full items-center overflow-clip p-[24px] relative">
            <RxElementsRecordsNotesLayersText2 text="Attachments" additionalClassNames="w-[842px]" />
            <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[842px]">
              <Helper6 />
            </div>
            <div className="absolute bg-[#7f7f7f] h-[100px] left-[875px] rounded-[20px] top-[78px] w-[7px]" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }
  return (
    <div className={className || "bg-white h-[380px] relative rounded-[8px] w-[890px]"} data-name="Component=Attachments, Type=myitero - empty, state=--">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <RxElementsRecordsNotesLayersText2 text="Attachments" additionalClassNames="w-full" />
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
              <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0">
                <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="upload-cloud">
                    <Vector />
                  </div>
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#3e3d40] text-[18px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Drop files to upload
                  </p>
                </div>
                <p className="font-['Avenir:Medium_Oblique',sans-serif] italic leading-[normal] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.23)] text-center">or</p>
                <Button className="bg-[#f9f9f9] h-[32px] min-w-[96px] relative rounded-[4px] shrink-0" size="Small" text="Browse" type="Secondary" />
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#696a6d] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Upload photos, scans, X-rays or any other file relevant for the treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function RxElementsRecordsNotesLayers1() {
  return <RxElementsRecordsNotesLayers className="bg-white cursor-pointer relative rounded-[8px] size-full" component="Notes" state="Empty" type="Sticky concept" />;
}