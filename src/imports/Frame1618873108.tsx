import svgPaths from "./svg-tqqbwgsck";

function Edit() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Edit">
          <g id="Vector">
            <path d="M30 26H2V28H30V26Z" fill="#3E3D40" />
            <path d={svgPaths.p3bc04400} fill="#3E3D40" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-end relative size-full">
      <Edit />
    </div>
  );
}