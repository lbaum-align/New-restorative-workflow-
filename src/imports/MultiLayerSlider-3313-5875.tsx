import svgPaths from "./svg-5qbpxau1y2";
type SliderControlProps = {
  className?: string;
  property1?: "Default" | "Pressed" | "Disable";
};

function SliderControl({ className, property1 = "Default" }: SliderControlProps) {
  const isPressed = property1 === "Pressed";
  return (
    <div className={className || "relative size-[32px]"}>
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2 ${isPressed ? "" : "bg-white rounded-[42705596px]"}`} data-name="Slider">
        <div aria-hidden={["Default", "Disable"].includes(property1) ? "true" : undefined} className={`absolute ${isPressed ? "inset-[-4.17%]" : property1 === "Disable" ? "border-2 border-[#b0b1b3] border-solid inset-[-1px] pointer-events-none rounded-[42705597px]" : "border-2 border-[#00adef] border-solid inset-[-1px] pointer-events-none rounded-[42705597px]"}`}>
          {isPressed && (
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
              <g id="Slider">
                <path d={svgPaths.p6441b00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p6441b00} stroke="var(--stroke-0, #00ADEF)" strokeWidth="2" />
                <circle cx="13" cy="13" fill="var(--fill-0, #00ADEF)" id="Ellipse 1" r="8" />
              </g>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
type MultiLayerSliderProps = {
  className?: string;
  prachentage?: "75%" | "50%" | "0%" | "100%" | "Disabled/Full" | "Disabled/0%";
};

function MultiLayerSlider({ className, prachentage = "75%" }: MultiLayerSliderProps) {
  const is0 = prachentage === "0%";
  const isDisabled0 = prachentage === "Disabled/0%";
  return (
    <div className={className || `h-[18px] relative w-[164px] ${["Disabled/Full", "Disabled/0%"].includes(prachentage) ? "opacity-30" : ""}`}>
      <div className="absolute h-[6px] left-0 top-[6px] w-[160px]">
        <div className="absolute h-[6px] left-0 top-0 w-[160px]">
          <div className={`absolute bg-[#818181] h-[4px] left-0 rounded-[33554400px] top-0 w-[160px] ${isDisabled0 ? "" : "content-stretch flex flex-col items-start overflow-clip"}`} data-name="Text">
            {["75%", "100%", "0%", "50%", "Disabled/Full"].includes(prachentage) && <div className={`h-[4px] rounded-[33554400px] shrink-0 ${prachentage === "50%" ? "bg-[#00adef] w-[82px]" : is0 ? "bg-[#818181] w-[160px]" : ["100%", "Disabled/Full"].includes(prachentage) ? "bg-[#00adef] w-[160px]" : "bg-[#00adef] w-[117px]"}`} data-name="Text" />}
          </div>
        </div>
      </div>
      {["75%", "100%", "0%", "Disabled/Full"].includes(prachentage) && <SliderControl className={`-translate-y-1/2 absolute overflow-clip size-[32px] top-1/2 ${prachentage === "Disabled/Full" ? "right-0" : is0 ? "left-[-3px]" : prachentage === "100%" ? "left-[132px]" : "left-[99px]"}`} />}
      {["50%", "Disabled/0%"].includes(prachentage) && (
        <div className={`-translate-y-1/2 absolute overflow-clip size-[32px] top-1/2 ${isDisabled0 ? "left-[-2px]" : "-translate-x-1/2 left-1/2"}`} data-name="Slider-Control">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 rounded-[42705596px] size-[24px] top-1/2" data-name="Slider">
            <div aria-hidden="true" className="absolute border-2 border-[#00adef] border-solid inset-[-1px] pointer-events-none rounded-[42705597px]" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function MultiLayerSlider1() {
  return <MultiLayerSlider className="relative size-full" />;
}