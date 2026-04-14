import clsx from "clsx";
import svgPaths from "./svg-pjieo3oeca";

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#00adef] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#0099d6] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}

function Vector({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-1/4">
      <div className="absolute inset-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4444 12.4444">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="mr-[-24px] relative shrink-0 size-[64px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative size-full">{children}</div>
      </div>
    </div>
  );
}
type ListItem1Props = {
  additionalClassNames?: string;
};

function ListItem1({ children, additionalClassNames = "" }: React.PropsWithChildren<ListItem1Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="content-stretch flex items-start pr-[24px] relative shrink-0" data-name="Content">
            {children}
          </div>
          <div className="absolute bg-[#e0e0e0] bottom-0 h-px left-0 opacity-0 right-0" data-name="Divider" />
        </div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative w-full">
      <div className="h-[22.5px] relative shrink-0 w-[118.828px]" data-name="Text">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[30px] left-0 text-[24px] text-white top-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {children}
          </p>
        </div>
      </div>
      <div className="relative rounded-[5.333px] shrink-0 size-[32px]">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5.333px] px-[5.333px] relative size-full">
          <div className="h-[21.333px] overflow-clip relative shrink-0 w-full" data-name="Icon">
            <Vector>
              <path d={svgPaths.p1330f52c} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.77778" />
            </Vector>
            <Vector>
              <path d={svgPaths.p2a13940} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.77778" />
            </Vector>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftItem({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Left icon">
        {children}
      </div>
    </Wrapper1>
  );
}
type ListItemProps = {
  additionalClassNames?: string;
};

function ListItem({ additionalClassNames = "" }: ListItemProps) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <PanelText1 text="Title">
          <path d={svgPaths.pe9d5d00} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </PanelText1>
      </div>
    </div>
  );
}
type TextPartTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextPartText({ text, additionalClassNames = "" }: TextPartTextProps) {
  return (
    <div className={clsx("mr-[-24px] relative self-stretch", additionalClassNames)}>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[6px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[28px] overflow-hidden">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type PanelText1Props = {
  text: string;
};

function PanelText1({ text, children }: React.PropsWithChildren<PanelText1Props>) {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full">
      <div className="content-stretch flex items-start pr-[24px] relative shrink-0 w-full" data-name="Content">
        <LeftItem>
          <div className="absolute inset-[6.25%_4%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.08 21">
              {children}
            </svg>
          </div>
        </LeftItem>
        <TextPartText text={text} additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
      </div>
      <div className="absolute bg-[#e0e0e0] bottom-0 h-px left-0 right-0" data-name="Divider" />
    </div>
  );
}
type PanelRightItemProps = {
  additionalClassNames?: string;
};

function PanelRightItem({ additionalClassNames = "" }: PanelRightItemProps) {
  return (
    <div className={clsx("bg-white content-stretch flex flex-col items-center justify-center relative rounded-[23.102px] size-[52px]", additionalClassNames)}>
      <div className="overflow-clip relative shrink-0 size-[24.643px]" data-name="Right icon">
        <div className="absolute inset-[18.75%_31.25%_18.75%_33.13%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4 20">
            <path d={svgPaths.p3ca33d80} fill="var(--fill-0, #3E3D40)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type PanelTextProps = {
  text: string;
};

function PanelText({ text }: PanelTextProps) {
  return <Wrapper>{text}</Wrapper>;
}
type PanelProps = {
  className?: string;
  header?: boolean;
  selectTooth?: boolean;
  tool?: "Margin line" | "Prepe dit" | "Trim tool";
  toolName?: string;
};

function Panel({ className, header = true, selectTooth = true, tool = "Margin line", toolName = "Prep edit" }: PanelProps) {
  const isMarginLine = tool === "Margin line";
  const isPrepeDit = tool === "Prepe dit";
  const isTrimTool = tool === "Trim tool";
  return (
    <div className={className || "relative w-[284px]"}>
      <div className="content-stretch flex flex-col items-start relative w-full">
        {isMarginLine && header && (
          <Container>
            <PanelText text="Margin line" />
          </Container>
        )}
        {isMarginLine && selectTooth && (
          <div className="bg-[#dff5fc] h-[80px] relative shrink-0 w-full" data-name="List item">
            <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Middle part">
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="-scale-y-100 flex-none rotate-180">
                        <PanelRightItem additionalClassNames="opacity-0" />
                      </div>
                    </div>
                    <p className="font-['Avenir:Heavy',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Tooth 47
                    </p>
                    <PanelRightItem additionalClassNames="shrink-0" />
                  </div>
                </div>
                <div className="absolute bg-[#e0e0e0] bottom-[0.39px] h-[0.77px] left-0 right-0" data-name="Divider" />
              </div>
            </div>
          </div>
        )}
        {isMarginLine && (
          <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
            <ListItem />
            <ListItem additionalClassNames="rounded-[8px]" />
            <ListItem additionalClassNames="rounded-[8px]" />
            <ListItem additionalClassNames="rounded-[8px]" />
            <div className="absolute left-[20px] size-[24px] top-[20px]" data-name="wand icon">
              <div className="absolute inset-[49.04%_0_0_53.74%]" data-name="Vector 23 (Stroke)">
                <div className="absolute inset-[4.42%_3.51%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.29708 10.0268">
                    <path clipRule="evenodd" d={svgPaths.p4914980} fill="var(--fill-0, #3E3D40)" fillRule="evenodd" id="Vector 23 (Stroke)" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[26.26%_41.44%_45.09%_28.18%]" data-name="Vector 24 (Stroke)">
                <div className="absolute inset-[8.65%_9.99%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.25443 5.11507">
                    <path clipRule="evenodd" d={svgPaths.p32966800} fill="var(--fill-0, #3E3D40)" fillRule="evenodd" id="Vector 24 (Stroke)" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[0_18.21%_20.46%_0]" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6793 17.1679">
                  <path d={svgPaths.p288ea0c0} fill="var(--fill-0, #3E3D40)" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        )}
        {isTrimTool && header && (
          <Container>
            <PanelText text="Trim tool" />
          </Container>
        )}
        {isTrimTool && (
          <div className="bg-white content-stretch flex flex-col items-start relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-[284px]">
            <ListItem additionalClassNames="rounded-[8px]" />
            <ListItem additionalClassNames="rounded-[8px]" />
          </div>
        )}
        {isPrepeDit && header && (
          <Container>
            <Wrapper>{toolName}</Wrapper>
          </Container>
        )}
        {isPrepeDit && (
          <div className="bg-white content-stretch flex flex-col items-start relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-[284px]">
            <ListItem1>
              <Wrapper1>
                <div className="opacity-0 overflow-clip relative shrink-0 size-[24px]" data-name="Left icon">
                  <div className="absolute inset-[12.85%_18.75%_12.5%_15.63%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 17.9153">
                      <path d={svgPaths.p2f0cf800} fill="var(--fill-0, #3E3D40)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </Wrapper1>
              <TextPartText text="Select" additionalClassNames="shrink-0 w-[240px]" />
            </ListItem1>
            <div className="absolute left-[20px] size-[24px] top-[20px]" data-name="wand icon">
              <div className="absolute inset-[49.04%_0_0_53.74%]" data-name="Vector 23 (Stroke)">
                <div className="absolute inset-[2.99%_2.37%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5776 11.4996">
                    <path clipRule="evenodd" d={svgPaths.p64dac00} fill="var(--fill-0, #3E3D40)" fillRule="evenodd" id="Vector 23 (Stroke)" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[26.26%_41.44%_45.09%_28.18%]" data-name="Vector 24 (Stroke)">
                <div className="absolute inset-[5.85%_6.73%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.30959 6.07269">
                    <path clipRule="evenodd" d={svgPaths.p61daf00} fill="var(--fill-0, #3E3D40)" fillRule="evenodd" id="Vector 24 (Stroke)" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[0_18.21%_20.46%_0]" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1909 18.6675">
                  <path d={svgPaths.p20d68e00} fill="var(--fill-0, #3E3D40)" id="Union" />
                </svg>
              </div>
            </div>
            <ListItem1 additionalClassNames="rounded-[8px]">
              <LeftItem>
                <div className="absolute inset-[15.63%_12.5%_18.75%_12.5%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15.75">
                    <path d={svgPaths.p1dd0d00} fill="var(--fill-0, #3E3D40)" id="Vector" />
                  </svg>
                </div>
              </LeftItem>
              <TextPartText text="Erase and scan" additionalClassNames="shrink-0 w-[240px]" />
            </ListItem1>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Panel1() {
  return <Panel className="relative size-full" tool="Prepe dit" />;
}