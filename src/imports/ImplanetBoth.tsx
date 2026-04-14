import imgRectangle from "figma:asset/646c1588e84153ab0f3a58f0c955f83f7d95b3b0.png";
import imgI from "figma:asset/0739b756c08b73712f33f02a9c7bb00b11f87b89.png";

export default function ImplanetBoth() {
  return (
    <div className="relative size-full" data-name="Implanet both">
      <div className="absolute h-[836px] left-0 top-[168px] w-[1100px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[118.42%] left-[-4.45%] max-w-none top-0 w-[108.16%]" src={imgRectangle} />
        </div>
      </div>
      <div className="absolute h-[808px] left-[30px] top-0 w-[1084px]" data-name="i">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgI} />
      </div>
    </div>
  );
}