import clsx from "clsx";
import svgPaths from "./svg-1ct72l2f50";

function RestorationCrownInfoImplantBased1Helper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[40px] px-[40px] relative w-full">{children}</div>
    </div>
  );
}
type DropdownVectorProps = {
  additionalClassNames?: string;
};

function DropdownVector({ children, additionalClassNames = "" }: React.PropsWithChildren<DropdownVectorProps>) {
  return (
    <div className={clsx("absolute left-1/4 right-1/4", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-[20px] relative w-full">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">{children}</div>
    </div>
  );
}
type VectorProps = {
  additionalClassNames?: string;
};

function Vector({ children, additionalClassNames = "" }: React.PropsWithChildren<VectorProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 11.4">
        {children}
      </svg>
    </div>
  );
}

function HelperbuttonChevronUp({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <Vector additionalClassNames="inset-[31.25%_18.75%_33.13%_18.75%]">{children}</Vector>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[10px] items-center px-[22px] py-[14px] relative size-full">
        <ChevronDown />
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#3e3d40] text-[24px] text-left whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {children}
        </p>
      </div>
    </div>
  );
}

function RestorationCrownInfoImplantBased1Helper({ children }: React.PropsWithChildren<{}>) {
  return (
    <button className="bg-[#f0f0f0] cursor-pointer relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <Wrapper1>{children}</Wrapper1>
      </div>
    </button>
  );
}

function ChevronDown() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <Vector additionalClassNames="inset-[33.13%_18.75%_31.25%_18.75%]">
        <path d={svgPaths.p1bcf5d80} fill="var(--fill-0, #3E3D40)" id="Vector" />
      </Vector>
    </div>
  );
}
type HelperbuttonTextProps = {
  text: string;
};

function HelperbuttonText({ text }: HelperbuttonTextProps) {
  return (
    <Wrapper1>
      <ChevronDown />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#3e3d40] text-[24px] text-left whitespace-nowrap" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </Wrapper1>
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
  const isErrorAndIsTrueOrFalse = state === "Error" && [true, false].includes(selected);
  const isHoveredAndIsTrueOrFalse = state === "Hovered" && [true, false].includes(selected);
  const isNotSelectedAndDisabled = !selected && state === "Disabled";
  const isNotSelectedAndEnabled = !selected && state === "Enabled";
  const isNotSelectedAndFocused = !selected && state === "Focused";
  const isNotSelectedAndHovered = !selected && state === "Hovered";
  const isNotSelectedAndIsEnabledOrErrorOrHoveredOrFocused = !selected && ["Enabled", "Error", "Hovered", "Focused"].includes(state);
  const isNotSelectedAndPressed = !selected && state === "Pressed";
  const isSelectedAndDisabled = selected && state === "Disabled";
  const isSelectedAndEnabled = selected && state === "Enabled";
  const isSelectedAndError = selected && state === "Error";
  const isSelectedAndFocused = selected && state === "Focused";
  const isSelectedAndHovered = selected && state === "Hovered";
  const isSelectedAndPressed = selected && state === "Pressed";
  return (
    <div className={className || "relative w-[240px]"}>
      <div className="content-stretch flex flex-col items-start relative w-full">
        <div className={`content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full ${isHoveredAndIsTrueOrFalse ? "bg-[rgba(62,61,64,0.05)] rounded-tl-[4px] rounded-tr-[4px]" : ""}`} data-name="Field">
          <div aria-hidden="true" className={`absolute border-solid inset-0 pointer-events-none ${isSelectedAndFocused || isSelectedAndPressed || isNotSelectedAndFocused || isNotSelectedAndPressed ? "border-[#b0b1b3] border-b-2" : isHoveredAndIsTrueOrFalse ? "border-[#b0b1b3] border-b rounded-tl-[4px] rounded-tr-[4px]" : isErrorAndIsTrueOrFalse ? "border-[#cb2f36] border-b" : "border-[#b0b1b3] border-b"}`} />
          <div className={`content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative ${!selected && ["Enabled", "Error", "Hovered", "Focused", "Disabled"].includes(state) ? "" : "pb-[4px]"}`} data-name="Content">
            {(isSelectedAndEnabled || isSelectedAndError || isSelectedAndHovered || isSelectedAndFocused || isSelectedAndPressed || isSelectedAndDisabled || isNotSelectedAndPressed) && (
              <div className={`content-stretch flex items-center mb-[-4px] relative shrink-0 w-full ${isSelectedAndDisabled ? "" : isSelectedAndError ? 'font-["Roboto:Medium",sans-serif] font-medium gap-[4px] leading-[24px] text-[#cb2f36] text-[14px] whitespace-nowrap' : 'font-["Roboto:Medium",sans-serif] font-medium gap-[4px] leading-[24px] text-[14px] whitespace-nowrap'}`} data-name="Label">
                {(isSelectedAndEnabled || isSelectedAndHovered || isSelectedAndFocused || isSelectedAndPressed || isNotSelectedAndPressed) && (
                  <p className="overflow-hidden relative shrink-0 text-[#3e3d40] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {label}
                  </p>
                )}
                {(isSelectedAndEnabled || isSelectedAndHovered || isSelectedAndFocused || isSelectedAndPressed || isNotSelectedAndPressed) && isMandatoryField && (
                  <p className="relative shrink-0 text-[#cb2f36]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    *
                  </p>
                )}
                {isSelectedAndError && (
                  <p className="overflow-hidden relative shrink-0 text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {label}
                  </p>
                )}
                {isSelectedAndError && isMandatoryField && (
                  <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                    *
                  </p>
                )}
                {isSelectedAndDisabled && (
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#b0b1b3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {label}
                  </p>
                )}
              </div>
            )}
            <div className={`shrink-0 w-full ${isNotSelectedAndDisabled ? "content-stretch flex items-center relative" : isNotSelectedAndPressed ? "h-[20px] mb-[-4px]" : isNotSelectedAndIsEnabledOrErrorOrHoveredOrFocused ? "content-stretch flex gap-[4px] items-center relative whitespace-nowrap" : "content-stretch flex items-center mb-[-4px] relative"}`} data-name="Text">
              {selected && ["Enabled", "Error", "Hovered", "Focused", "Pressed"].includes(state) && (
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {value}
                </p>
              )}
              {isNotSelectedAndIsEnabledOrErrorOrHoveredOrFocused && (
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3e3d40] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {label}
                </p>
              )}
              {isNotSelectedAndIsEnabledOrErrorOrHoveredOrFocused && isMandatoryField && (
                <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#cb2f36] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  *
                </p>
              )}
              {isSelectedAndDisabled && (
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#b0b1b3] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {value}
                </p>
              )}
              {isNotSelectedAndDisabled && (
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#b0b1b3] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {label}
                </p>
              )}
            </div>
          </div>
          {(isSelectedAndEnabled || isSelectedAndError || isSelectedAndHovered || isSelectedAndFocused || isSelectedAndDisabled || isNotSelectedAndEnabled || (!selected && state === "Error") || isNotSelectedAndHovered || isNotSelectedAndFocused || isNotSelectedAndDisabled) && (
            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Caret down">
              <DropdownVector additionalClassNames="bottom-[31.25%] top-[37.5%]">
                <path d="M16 0L8 10L0 0H16Z" fill={isNotSelectedAndDisabled ? "var(--fill-0, #B0B1B3)" : isNotSelectedAndEnabled ? "var(--fill-0, #80D6F7)" : "var(--fill-0, #3E3D40)"} id="Vector" />
              </DropdownVector>
            </div>
          )}
          {state === "Pressed" && [true, false].includes(selected) && (
            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Caret up">
              <DropdownVector additionalClassNames="bottom-[37.5%] top-[31.25%]">
                <path d="M0 10L8 0L16 10H0Z" fill="var(--fill-0, #3E3D40)" id="Vector" />
              </DropdownVector>
            </div>
          )}
        </div>
        {(isSelectedAndEnabled || isSelectedAndHovered || isSelectedAndFocused || isSelectedAndPressed || isNotSelectedAndEnabled || isNotSelectedAndHovered || isNotSelectedAndFocused || isNotSelectedAndPressed) && showHelperText && (
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {helperText}
          </p>
        )}
        {isErrorAndIsTrueOrFalse && showHelperText && (
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#cb2f36] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {helperText}
          </p>
        )}
        {state === "Disabled" && [true, false].includes(selected) && showHelperText && (
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#b0b1b3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
}
type RestorationCrownInfoImplantBasedProps = {
  className?: string;
  property1?: "Expanded" | "Collapsed";
};

function RestorationCrownInfoImplantBased({ className, property1 = "Collapsed" }: RestorationCrownInfoImplantBasedProps) {
  const isExpanded = property1 === "Expanded";
  return (
    <button className={className || `relative w-[996px] ${isExpanded ? "bg-white" : "bg-[#f0f0f0]"}`}>
      <div className={`flex flex-col ${isExpanded ? "content-stretch gap-[24px] items-start pb-[16px] relative w-full" : "justify-center size-full"}`}>
        {property1 === "Collapsed" && <HelperbuttonText text="Additional information" />}
        {isExpanded && (
          <>
            <div className="bg-[#f0f0f0] relative shrink-0 w-[996px]" data-name="Note/Frame 1618873182">
              <div className="flex flex-col justify-center size-full">
                <HelperbuttonText text="Additional information" />
              </div>
            </div>
            <div className="relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[32px] items-start px-[16px] relative w-full">
                <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="Field row">
                  <Dropdown className="flex-[1_0_0] min-h-px min-w-px relative" isMandatoryField={false} label="Preparation design - Buccal" showHelperText={false} state="Disabled" value="MyiTero.com account" />
                  <Dropdown className="flex-[1_0_0] min-h-px min-w-px relative" isMandatoryField={false} label="Preparation design - Lingual" showHelperText={false} state="Disabled" value="MyiTero.com account" />
                  <Dropdown className="flex-[1_0_0] min-h-px min-w-px relative" isMandatoryField={false} label="Incisal" showHelperText={false} state="Disabled" value="VITA Lumin" />
                </div>
                <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="Field row">
                  <Dropdown className="flex-[1_0_0] min-h-px min-w-px relative" isMandatoryField={false} label="Margin design - Buccal" showHelperText={false} state="Disabled" value="MyiTero.com account" />
                  <Dropdown className="flex-[1_0_0] min-h-px min-w-px relative" isMandatoryField={false} label="Margin design - Lingual" showHelperText={false} state="Disabled" value="MyiTero.com account" />
                  <Dropdown className="flex-[1_0_0] min-h-px min-w-px relative" isMandatoryField={false} label="Gingival" showHelperText={false} state="Disabled" value="MyiTero.com account" />
                </div>
                <div className="content-stretch flex gap-[48px] items-center justify-end relative shrink-0 w-full" data-name="Field row">
                  <Dropdown className="relative shrink-0 w-[289.33px]" isMandatoryField={false} label="Stump shage" showHelperText={false} state="Disabled" value="MyiTero.com account" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </button>
  );
}
type TogglePieceProps = {
  className?: string;
  selected?: boolean;
  state?: "Enabled" | "Hovered" | "Focused" | "Disabled";
};

function TogglePiece({ className, selected = false, state = "Enabled" }: TogglePieceProps) {
  const isNotSelectedAndFocused = !selected && state === "Focused";
  const isSelectedAndFocused = selected && state === "Focused";
  const isSelectedAndHovered = selected && state === "Hovered";
  const isSelectedAndIsEnabledOrHoveredOrFocused = selected && ["Enabled", "Hovered", "Focused"].includes(state);
  return (
    <div className={className || "h-[28px] relative w-[36px]"}>
      <div className={`-translate-y-1/2 absolute h-[16px] left-0 rounded-[16px] top-1/2 w-[36px] ${isSelectedAndIsEnabledOrHoveredOrFocused ? "bg-[#a6e2f9]" : "bg-[#e0e0e0]"}`} data-name="Track" />
      <div className={`-translate-y-1/2 absolute rounded-[16px] size-[20px] top-1/2 ${selected && state === "Disabled" ? "bg-[#dff5fc] border border-[#d1d1d1] border-solid left-[16px]" : isSelectedAndIsEnabledOrHoveredOrFocused ? "bg-[#408dc1] left-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)]" : !selected && state === "Disabled" ? "bg-[#f0f0f0] border border-[#d1d1d1] border-solid left-0" : "bg-[#b0b1b3] left-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)]"}`} data-name="Toggle" />
      {((!selected && state === "Hovered") || isNotSelectedAndFocused || isSelectedAndHovered || isSelectedAndFocused) && <div className={`-translate-y-1/2 absolute border-solid top-1/2 ${isSelectedAndFocused ? "border-2 border-[#408dc1] left-[12px] rounded-[16px] size-[28px]" : isSelectedAndHovered ? "border-8 border-[#408dc1] left-[8px] opacity-20 rounded-[32px] size-[36px]" : isNotSelectedAndFocused ? "border-2 border-[#408dc1] left-[-4px] rounded-[16px] size-[28px]" : "border-8 border-[#b0b1b3] left-[-8px] opacity-20 rounded-[32px] size-[36px]"}`} data-name="Hover" />}
    </div>
  );
}
type RestorationCrownInfoImplantBased1Props = {
  className?: string;
  property1?: "Collapsed" | "Exapnded";
};

function RestorationCrownInfoImplantBased1({ className, property1 = "Collapsed" }: RestorationCrownInfoImplantBased1Props) {
  if (property1 === "Collapsed") {
    return (
      <button className={className || "bg-[#f0f0f0] cursor-pointer h-[72px] relative w-[1076px]"} data-name="Property 1=Collapsed">
        <Wrapper>Crown</Wrapper>
      </button>
    );
  }
  if (property1 === "Exapnded") {
    return (
      <div className={className || "bg-white relative w-[1076px]"} data-name="Property 1=Exapnded">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
          <RestorationCrownInfoImplantBased1Helper>
            <HelperbuttonChevronUp>
              <path d={svgPaths.p3370f400} fill="var(--fill-0, #0067AC)" id="Vector" />
            </HelperbuttonChevronUp>
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#3e3d40] text-[24px] text-left whitespace-nowrap" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>{`Restoration type `}</p>
          </RestorationCrownInfoImplantBased1Helper>
          <RestorationCrownInfoImplantBased1Helper1>
            <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="Field row">
              <Dropdown className="flex-[1_0_0] min-h-px min-w-px relative" isMandatoryField={false} label="Restoration type" showHelperText={false} value="MyiTero.com account" />
              <Dropdown className="flex-[1_0_0] min-h-px min-w-px relative" isMandatoryField={false} label="Abutment material" showHelperText={false} state="Disabled" value="MyiTero.com account" />
            </div>
            <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="Field row">
              <Dropdown className="flex-[1_0_0] min-h-px min-w-px relative" isMandatoryField={false} label="Abutment type" showHelperText={false} state="Disabled" value="MyiTero.com account" />
              <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Toggle">
                <div className="content-stretch flex gap-[8px] items-start px-[8px] py-[4px] relative size-full">
                  <TogglePiece className="h-[28px] relative shrink-0 w-[36px]" state="Disabled" />
                  <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal h-full leading-[28px] min-h-px min-w-px overflow-hidden relative text-[#b0b1b3] text-[18px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Ti-Base
                  </p>
                </div>
              </div>
            </div>
          </RestorationCrownInfoImplantBased1Helper1>
        </div>
      </div>
    );
  }
  if (property1 === "Exapnded") {
    return (
      <div className={className || "bg-white relative w-[1076px]"} data-name="Property 1=Exapnded">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
          <RestorationCrownInfoImplantBased1Helper>
            <HelperbuttonChevronUp>
              <path d={svgPaths.p3370f400} fill="var(--fill-0, #3E3D40)" id="Vector" />
            </HelperbuttonChevronUp>
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#3e3d40] text-[24px] text-left whitespace-nowrap" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
              Crown
            </p>
          </RestorationCrownInfoImplantBased1Helper>
          <RestorationCrownInfoImplantBased1Helper1>
            <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="Field row">
              <Dropdown className="flex-[1_0_0] min-h-px min-w-px relative" isMandatoryField={false} label="Specification" showHelperText={false} value="MyiTero.com account" />
              <Dropdown className="flex-[1_0_0] min-h-px min-w-px relative" isMandatoryField={false} label="Shade system" selected showHelperText={false} state="Disabled" value="VITA Lumin" />
            </div>
            <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="Field row">
              <Dropdown className="flex-[1_0_0] min-h-px min-w-px relative" isMandatoryField={false} label="Material" showHelperText={false} state="Disabled" value="MyiTero.com account" />
              <Dropdown className="flex-[1_0_0] min-h-px min-w-px relative" isMandatoryField={false} label="Body" showHelperText={false} state="Disabled" value="MyiTero.com account" />
            </div>
            <RestorationCrownInfoImplantBased className="bg-[#f0f0f0] cursor-pointer relative shrink-0 w-full" />
          </RestorationCrownInfoImplantBased1Helper1>
        </div>
      </div>
    );
  }
  return (
    <button className={className || "bg-[#f0f0f0] cursor-pointer h-[72px] relative w-[1076px]"} data-name="Property 1=Collapsed">
      <Wrapper>{`Restoration type `}</Wrapper>
    </button>
  );
}

export default function RestorationCrownInfoImplantBased2() {
  return <RestorationCrownInfoImplantBased1 className="bg-white relative size-full" property1="Exapnded" />;
}