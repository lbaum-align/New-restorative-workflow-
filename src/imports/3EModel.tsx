import imgGroup1 from "figma:asset/6dfd43dcea8336927bd27624e25b077334382eb5.png";
import imgGroup2 from "figma:asset/c2d1771cde07af8b008c646f168476cad21d4943.png";

function Group() {
  return (
    <div className="absolute contents inset-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup1} />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0">
      <Group />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute aspect-[797/462] left-[4.67%] right-[4.56%] top-[279px]" data-name="Component 2">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup2} />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-0">
      <Group3 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute aspect-[882/512] left-[-0.23%] right-[-0.23%] top-[-2px]" data-name="Component 3">
      <Group4 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[-0.23%] right-[-0.23%] top-[-2px]">
      <Component />
      <Component1 />
    </div>
  );
}

export default function Component3EModel() {
  return (
    <div className="relative size-full z-0" data-name="3e Model">
      <Group2 />
    </div>
  );
}