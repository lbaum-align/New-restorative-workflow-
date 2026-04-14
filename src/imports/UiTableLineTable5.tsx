function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(90deg, rgb(244, 244, 245) 0%, rgb(244, 244, 245) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} className="relative shrink-0 w-full">
      {children}
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-start pl-[16px] pr-[12px] py-[12px] relative w-full">
      <div className="relative shrink-0 w-[15px]" data-name="UI/ Text / table col info 4">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <BackgroundImage3>{children}</BackgroundImage3>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#ddd]" />
    </div>
  );
}
type BackgroundImage1Props = {
  text: string;
};

function BackgroundImage1({ children, text }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <BackgroundImage2>
      <div className="content-stretch flex items-start relative w-full">
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
          <div className="relative shrink-0" data-name="Txt">
            <div className="content-stretch flex flex-col items-start relative">
              <p className="font-['Avenir:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.93)]">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage2>
  );
}

function BackgroundImage() {
  return (
    <BackgroundImage3>
      <div className="content-stretch flex items-start relative w-full">
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
          <div className="relative shrink-0" data-name="Txt">
            <div className="content-stretch flex flex-col items-start" />
          </div>
        </div>
      </div>
    </BackgroundImage3>
  );
}

function LineBackgroundImage() {
  return (
    <BackgroundImage4>
      <BackgroundImage3>
        <div className="content-stretch flex items-start relative w-full">
          <TextIcon4PxMarginBackgroundImageAndText text="-" />
        </div>
      </BackgroundImage3>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#ddd]" />
    </BackgroundImage4>
  );
}

function TextIcon4PxMarginBackgroundImageAndText({ text }: TextIcon4PxMarginBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <div className="relative shrink-0" data-name="Txt">
        <div className="content-stretch flex flex-col items-start relative">
          <p className="font-['Avenir:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.93)]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type DdUiTextTableColInfoBackgroundImageAndTextProps = {
  text: string;
};

function DdUiTextTableColInfoBackgroundImageAndText({ text }: DdUiTextTableColInfoBackgroundImageAndTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="content-stretch flex flex-col items-start relative">
        <p className="font-['Avenir:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3e3d40] text-[14px]">{text}</p>
      </div>
    </div>
  );
}
type DdProps = {
  className?: string;
  property1?: "D" | "U";
};

function Dd({ className, property1 = "D" }: DdProps) {
  const isU = property1 === "U";
  return (
    <div className={className || "h-[12px] opacity-60 relative w-[16px]"}>
      {property1 === "D" && (
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
          <path d="M8 12L0 0L16 0L8 12Z" fill="var(--fill-0, black)" fillOpacity="0.445" id="D" />
        </svg>
      )}
      {isU && (
        <>
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="-scale-y-100 flex-none h-[12px] w-[16px]">
              <div className="relative size-full" data-name="U">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                  <path d="M8 12L0 0H16L8 12Z" fill="var(--fill-0, black)" fillOpacity="0.445" id="U" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute left-[-347px] top-[702px]" data-name="./DD/UI/Text/table col info 1">
            <div className="content-stretch flex flex-col items-start relative">
              <p className="font-['Avenir:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#009ace] text-[14px]">Txt</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function UiTableLineTable() {
  return (
    <div className="bg-white relative rounded-[4px] size-full" data-name="./UI/Table/line table 5">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="./col">
          <div className="content-stretch flex flex-col items-start relative w-full">
            <div className="bg-white h-[35px] relative shrink-0 w-full" data-name="./name of culumn">
              <div className="content-stretch flex gap-[12px] items-start pl-[16px] pr-[12px] py-[8px] relative size-full">
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[80px]" data-name="ID">
                  <DdUiTextTableColInfoBackgroundImageAndText text="Tooth No." />
                  <Dd className="h-[12px] opacity-60 relative shrink-0 w-[16px]" />
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_#ddd]" />
            </div>
            <BackgroundImage1 text="11,21" />
            <BackgroundImage4>
              <BackgroundImage3>
                <div className="content-stretch flex items-start relative w-full">
                  <TextIcon4PxMarginBackgroundImageAndText text="12" />
                </div>
              </BackgroundImage3>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#ddd]" />
            </BackgroundImage4>
            <BackgroundImage1 text="17,48" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="./col">
          <div className="content-stretch flex flex-col items-start relative w-full">
            <div className="bg-white h-[35px] relative shrink-0 w-full" data-name="./name of culumn">
              <div className="content-stretch flex gap-[12px] items-start pl-[16px] pr-[12px] py-[8px] relative size-full">
                <DdUiTextTableColInfoBackgroundImageAndText text="Treatment" />
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_#ddd]" />
            </div>
            <BackgroundImage1 text="Veneer" />
            <BackgroundImage4>
              <BackgroundImage3>
                <div className="content-stretch flex items-start relative w-full">
                  <TextIcon4PxMarginBackgroundImageAndText text="Implant Based" />
                </div>
              </BackgroundImage3>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#ddd]" />
            </BackgroundImage4>
            <BackgroundImage1 text="Crown" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="./col">
          <div className="content-stretch flex flex-col items-start relative w-full">
            <div className="bg-white h-[35px] relative shrink-0 w-full" data-name="./name of culumn">
              <div className="content-stretch flex gap-[12px] items-start pl-[16px] pr-[12px] py-[8px] relative size-full">
                <DdUiTextTableColInfoBackgroundImageAndText text="Specification" />
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_#ddd]" />
            </div>
            <BackgroundImage1 text="PFM/PFZ" />
            <LineBackgroundImage />
            <BackgroundImage1 text="PFM/PFZ" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="./col">
          <div className="content-stretch flex flex-col items-start relative w-full">
            <div className="bg-white h-[35px] relative shrink-0 w-full" data-name="./name of culumn">
              <div className="content-stretch flex gap-[12px] items-start pl-[16px] pr-[12px] py-[8px] relative size-full">
                <DdUiTextTableColInfoBackgroundImageAndText text="Material" />
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_#ddd]" />
            </div>
            <BackgroundImage1 text="Ceramic: Zirconia" />
            <LineBackgroundImage />
            <BackgroundImage1 text="Ceramic: Zirconia" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="./col">
          <div className="content-stretch flex flex-col items-start relative w-full">
            <div className="bg-white h-[35px] relative shrink-0 w-full" data-name="./name of culumn">
              <div className="content-stretch flex gap-[12px] items-start pl-[16px] pr-[12px] py-[8px] relative size-full">
                <DdUiTextTableColInfoBackgroundImageAndText text="Shade Body" />
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_#ddd]" />
            </div>
            <BackgroundImage1 text="VITA Lumin" />
            <LineBackgroundImage />
            <BackgroundImage1 text="VITA Lumin" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="./col">
          <div className="content-stretch flex flex-col items-start relative w-full">
            <div className="bg-white h-[35px] relative shrink-0 w-full" data-name="./name of culumn">
              <div className="content-stretch flex gap-[12px] items-start pl-[16px] pr-[12px] py-[8px] relative size-full">
                <div className="relative shrink-0" data-name="./DD/UI/Text/table col info 2">
                  <div className="content-stretch flex flex-col items-start relative">
                    <p className="font-['Avenir:Black',sans-serif] leading-[normal] not-italic opacity-0 relative shrink-0 text-[#009ace] text-[14px]">Shade Body</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_#ddd]" />
            </div>
            <BackgroundImage2>
              <div className="content-stretch flex items-start w-full" />
            </BackgroundImage2>
            <BackgroundImage4>
              <BackgroundImage />
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#ddd]" />
            </BackgroundImage4>
            <div className="bg-white relative shrink-0 w-full" data-name="./Line">
              <BackgroundImage />
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#ddd]" />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d1d1d1] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}