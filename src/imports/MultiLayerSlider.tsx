function Text1() {
  return <div className="bg-[#00adef] h-[4px] rounded-[33554400px] shrink-0 w-[160px]" data-name="Text" />;
}

function Text() {
  return (
    <div className="absolute bg-[#818181] content-stretch flex flex-col h-[4px] items-start left-0 overflow-clip rounded-[33554400px] top-0 w-[160px]" data-name="Text">
      <Text1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[6px] left-0 top-0 w-[160px]">
      <Text />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[6px] left-0 top-[6px] w-[160px]">
      <Frame1 />
    </div>
  );
}

function Slider() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 rounded-[42705596px] size-[24px] top-1/2" data-name="Slider">
      <div aria-hidden="true" className="absolute border-2 border-[#00adef] border-solid inset-[-1px] pointer-events-none rounded-[42705597px]" />
    </div>
  );
}

function SliderControl() {
  return (
    <div className="-translate-y-1/2 absolute overflow-clip right-0 size-[32px] top-1/2" data-name="Slider-Control">
      <Slider />
    </div>
  );
}

export default function MultiLayerSlider() {
  return (
    <div className="opacity-30 relative size-full" data-name="Multi-Layer-Slider">
      <Frame />
      <SliderControl />
    </div>
  );
}