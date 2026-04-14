import svgPaths from "./dental-arch-coordinate-svg";

export default function CoordinateFullArch() {
  return (
    <div className="relative size-full" data-name="coordinate full arch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="coordinate full arch">
          <path clipRule="evenodd" d={svgPaths.p1136ca30} fill="var(--fill-0, #818181)" fillRule="evenodd" id="Dental Arch Coordinate Path" />
        </g>
      </svg>
    </div>
  );
}