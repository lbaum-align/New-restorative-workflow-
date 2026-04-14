import clsx from "clsx";
import svgPaths from "./svg-diyxao0emc";

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.3px] whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[24px]">{children}</p>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
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
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("flex flex-row items-center justify-center size-full", additionalClassNames)}>
      <div className="content-stretch flex items-center justify-center py-[4px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">{children}</div>
    </div>
  );
}

function Days2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1 additionalClassNames="aspect-[44/44]">
      <div className="content-stretch flex h-full items-center justify-center py-[4px] relative">{children}</div>
    </Wrapper1>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1 additionalClassNames="size-[52px]">
      <div className="content-stretch flex items-center justify-center py-[4px] relative size-full">{children}</div>
    </Wrapper1>
  );
}

function Days1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="aspect-[44/44] flex-[1_0_0] min-h-px min-w-px relative">
      <Wrapper2 additionalClassNames="overflow-clip rounded-[inherit]">{children}</Wrapper2>
    </div>
  );
}
type PickerTextProps = {
  text: string;
};

function PickerText({ text }: PickerTextProps) {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[50px]">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[24px] left-[21px] right-[20px] text-[#121212] text-[16px] text-center top-[calc(50%-10px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type DayTextProps = {
  text: string;
};

function DayText({ text }: DayTextProps) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[4px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,0,0,0.44)] text-center whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
type ButtonText14Props = {
  text: string;
};

function ButtonText14({ text }: ButtonText14Props) {
  return <Wrapper3 additionalClassNames="text-[#cb2f36]">{text}</Wrapper3>;
}
type Text8Props = {
  text: string;
};

function Text8({ text }: Text8Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative">
        <Icon2 />
        <Wrapper4 additionalClassNames="text-[#cb2f36]">{text}</Wrapper4>
      </div>
    </div>
  );
}
type ButtonText13Props = {
  text: string;
};

function ButtonText13({ text }: ButtonText13Props) {
  return <Wrapper3 additionalClassNames="text-[#3e3d40]">{text}</Wrapper3>;
}
type ButtonText12Props = {
  text: string;
};

function ButtonText12({ text }: ButtonText12Props) {
  return <Wrapper3 additionalClassNames="text-[#0067ac]">{text}</Wrapper3>;
}
type Text7Props = {
  text: string;
};

function Text7({ text }: Text7Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative">
        <Icon2 />
        <Wrapper4 additionalClassNames="text-[#0067ac]">{text}</Wrapper4>
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
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">{text}</p>
        </div>
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
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">{text}</p>
        </div>
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
        <Icon2 />
        <Wrapper4 additionalClassNames="text-[#3e3d40]">{text}</Wrapper4>
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
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#cb2f36] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">{text}</p>
        </div>
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
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">{text}</p>
        </div>
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
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#cb2f36] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">{text}</p>
        </div>
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
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">{text}</p>
        </div>
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
  return <Wrapper3 additionalClassNames="text-[#b0b1b3]">{text}</Wrapper3>;
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

function Helper2() {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
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
        <Icon2 />
        <Wrapper4 additionalClassNames="text-[#b0b1b3]">{text}</Wrapper4>
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
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b0b1b3] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">{text}</p>
        </div>
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
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b0b1b3] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">{text}</p>
        </div>
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
        <Helper2 />
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
        <Helper2 />
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
            <Icon2 />
            <Wrapper4 additionalClassNames="text-[#939598]">{text}</Wrapper4>
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
        <Helper2 />
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
        <Helper2 />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Text" && state === "Disabled") {
    return (
      <div className={className || "h-[32px] min-w-[96px] relative rounded-[4px]"} data-name="Size=Small, Type=Ghost, Content=Text, State=Disabled">
        <Wrapper3 additionalClassNames="text-[#939598]">{text}</Wrapper3>
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
        <Helper2 />
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
        <Helper2 />
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
        <Helper2 />
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
        <Helper2 />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Icon" && state === "Focused") {
    return (
      <div className={className || "bg-[#bfeafb] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Primary, Content=Icon, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#408dc1] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Helper2 />
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && content === "Icon" && state === "Pressed") {
    return (
      <div className={className || "bg-[#80d6f7] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Primary, Content=Icon, State=Pressed">
        <div aria-hidden="true" className="absolute border border-[#408dc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper2 />
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
        <Helper2 />
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
            <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#939598] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[28px]">{text}</p>
            </div>
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
            <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#939598] text-[18px] text-center tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[28px]">{text}</p>
            </div>
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
        <Helper2 />
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
        <Helper2 />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Icon" && state === "Focused") {
    return (
      <div className={className || "relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Ghost, Content=Icon, State=Focused">
        <div aria-hidden="true" className="absolute border-2 border-[#b0b1b3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Helper2 />
      </div>
    );
  }
  if (size === "Small" && type === "Ghost" && content === "Icon" && state === "Pressed") {
    return (
      <div className={className || "bg-[#e0e0e0] relative rounded-[4px] size-[32px]"} data-name="Size=Small, Type=Ghost, Content=Icon, State=Pressed">
        <Helper2 />
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
        <Helper2 />
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
        <Helper2 />
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
        <Helper2 />
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
        <Helper2 />
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
        <Helper2 />
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
type DaysProps = {
  className?: string;
  state?: "Enabled" | "Hovered" | "Pressed" | "Focused" | "Selected" | "In range" | "Disabled";
  today?: boolean;
};

function Days({ className, state = "Enabled", today = false }: DaysProps) {
  const isFocused = state === "Focused";
  const isSelected = state === "Selected";
  return (
    <div className={className || `relative size-[52px] ${state === "Hovered" ? "cursor-pointer" : ""}`}>
      <Wrapper2>
        <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
        <div className={`relative rounded-[8px] shrink-0 size-[50px] ${isSelected ? "bg-[#009ace] overflow-clip" : isFocused ? "" : state === "Pressed" ? "bg-[rgba(0,0,0,0.09)] overflow-clip" : ["Hovered", "In range"].includes(state) ? "bg-[rgba(0,0,0,0.04)] overflow-clip" : "overflow-clip"}`} data-name="Picker">
          {["Enabled", "Hovered", "Pressed", "Selected", "In range", "Disabled"].includes(state) && (
            <p className={`absolute font-["Roboto:Regular",sans-serif] font-normal leading-[24px] left-[21px] right-[20px] text-[16px] text-center top-[calc(50%-10px)] ${state === "Disabled" ? "text-[rgba(0,0,0,0.23)]" : isSelected ? "text-white" : "text-[#121212]"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
              1
            </p>
          )}
          {["Enabled", "Hovered", "Pressed"].includes(state) && today && <div className="-translate-x-1/2 absolute border-2 border-[#009ace] border-solid h-[2px] left-1/2 rounded-[10000px] top-[30px] w-[12px]" data-name="Today indicator" />}
          {isFocused && (
            <>
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[24px] left-[21px] right-[20px] text-[#121212] text-[16px] text-center top-[calc(50%-10px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  1
                </p>
                {today && <div className="-translate-x-1/2 absolute border-2 border-[#009ace] border-solid h-[2px] left-1/2 rounded-[10000px] top-[30px] w-[12px]" data-name="Today indicator" />}
              </div>
              <div aria-hidden="true" className="absolute border border-[#009ace] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </>
          )}
          {isSelected && today && <div className="-translate-x-1/2 absolute border-2 border-solid border-white h-[2px] left-1/2 rounded-[10000px] top-[29px] w-[12px]" data-name="Today indicator" />}
          {state === "In range" && today && <div className="-translate-x-1/2 absolute border-2 border-[#009ace] border-solid h-[2px] left-1/2 rounded-[10000px] top-[29px] w-[12px]" data-name="Today indicator" />}
        </div>
        <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
      </Wrapper2>
    </div>
  );
}

export default function DatePicker() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Date picker">
      <div className="bg-white max-h-[350px] max-w-[324px] min-h-[308px] min-w-[324px] relative rounded-[4px] shrink-0" data-name="02 Calendar">
        <div className="max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] relative">
            <div className="relative shrink-0 w-[324px]" data-name="Header">
              <div className="content-stretch flex gap-[8px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-full">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron left">
                  <div className="absolute inset-[18.75%_33.13%_18.75%_31.25%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.55 15">
                      <path d={svgPaths.p280f1600} fill="var(--fill-0, black)" fillOpacity="0.63" id="Vector" />
                    </svg>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-center min-h-px min-w-px relative" data-name="Data">
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                    July 2024
                  </p>
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Caret down">
                    <div className="absolute bottom-[31.25%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.5">
                        <path d="M12 0L6 7.5L0 0H12Z" fill="var(--fill-0, black)" fillOpacity="0.63" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start relative shrink-0" data-name="Icons">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Chevron right">
                    <div className="absolute inset-[18.75%_31.25%_18.75%_33.13%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.125 12.5">
                        <path d={svgPaths.p75c6800} fill="var(--fill-0, black)" fillOpacity="0.63" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b border-solid inset-0 pointer-events-none" />
            </div>
            <div className="content-stretch flex flex-col items-start p-[8px] relative shrink-0" data-name="Date container">
              <div className="content-stretch flex items-start relative shrink-0 w-[308px]" data-name="Days">
                <DayText text="Sun" />
                <DayText text="Mon" />
                <DayText text="Tue" />
                <DayText text="Wed" />
                <DayText text="Thu" />
                <DayText text="Fri" />
                <DayText text="Sat" />
              </div>
              <div className="content-stretch flex items-start justify-end relative shrink-0 w-[308px]" data-name="Week">
                <Days className="relative shrink-0 size-[52px]" />
                <Wrapper>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="2" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Wrapper>
                <Wrapper>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="3" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Wrapper>
                <Wrapper>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="4" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Wrapper>
                <Wrapper>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="5" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Wrapper>
                <Wrapper>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="6" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Wrapper>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-[308px]" data-name="Week">
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="7" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <div className="overflow-clip relative rounded-[8px] shrink-0 size-[50px]" data-name="Picker">
                    <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[24px] left-[21px] right-[20px] text-[#121212] text-[16px] text-center top-[calc(50%-10px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      8
                    </p>
                    <div className="-translate-x-1/2 absolute border-2 border-[#009ace] border-solid h-[2px] left-1/2 rounded-[10000px] top-[30px] w-[12px]" data-name="Today indicator" />
                  </div>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="9" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="10" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="11" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Wrapper>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="12" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Wrapper>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="13" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-[308px]" data-name="Week">
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="14" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="15" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="16" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="17" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="18" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="19" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="20" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-[308px]" data-name="Week">
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="21" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="22" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="23" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="24" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="25" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="26" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
                <Days1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range left" />
                  <PickerText text="27" />
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px" data-name="Range right" />
                </Days1>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-[308px]" data-name="Week">
                <Days2>
                  <div className="h-[36px] shrink-0 w-px" data-name="Range left" />
                  <PickerText text="28" />
                  <div className="h-[36px] shrink-0 w-px" data-name="Range right" />
                </Days2>
                <Days2>
                  <div className="h-[36px] shrink-0 w-px" data-name="Range left" />
                  <PickerText text="29" />
                  <div className="h-[36px] shrink-0 w-px" data-name="Range right" />
                </Days2>
                <Days2>
                  <div className="h-[36px] shrink-0 w-px" data-name="Range left" />
                  <PickerText text="30" />
                  <div className="h-[36px] shrink-0 w-px" data-name="Range right" />
                </Days2>
                <Days2>
                  <div className="h-[36px] shrink-0 w-px" data-name="Range left" />
                  <PickerText text="31" />
                  <div className="h-[36px] shrink-0 w-px" data-name="Range right" />
                </Days2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative shrink-0 w-[324px]">
        <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
        <Button className="bg-[#f9f9f9] h-[32px] min-w-[96px] relative rounded-[4px] shrink-0" size="Small" text="Clear selection" type="Secondary" />
      </div>
    </div>
  );
}