import svgPaths from "./collapse-arrow-svg";

export default function CollapseButton() {
  return (
    <div className="relative size-full" data-name="Collapse Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Collapse Button">
          <path d={svgPaths.p22197900} fill="var(--fill-0, #3E3D40)" id="Collapse Arrow" />
        </g>
      </svg>
    </div>
  );
}