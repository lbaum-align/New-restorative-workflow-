import svgPaths from "./svg-1tmbs8rjjm";

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p16b96000} fill="var(--fill-0, #0067AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Button() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[22px] relative rounded-[4px] size-full" data-name="Button">
      <Icon />
    </div>
  );
}