function CloseIcon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" viewBox="0 0 32 32">
        <path d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4L14.6 16L8 22.6L9.4 24L16 17.4L22.6 24L24 22.6L17.4 16L24 9.4Z" fill="#3E3D40" />
      </svg>
    </div>
  );
}

export default function Banner() {
  return (
    <div className="flex items-start bg-white rounded-[4px] size-full overflow-hidden" data-name="Toast">
      {/* Status indicator — blue left bar */}
      <div className="shrink-0 w-[12px] self-stretch bg-[#00adef]" />

      {/* Content */}
      <div className="flex-1 flex flex-col gap-[12px] px-[20px] py-[16px] text-[#3e3d40]">
        <div className="flex flex-col gap-[4px]">
          <p className="font-['Roboto',sans-serif] font-medium text-[18px] leading-[24px]">
            Instantly evaluate reduction
          </p>
          <p className="font-['Roboto',sans-serif] font-normal text-[18px] leading-[28px]">
            The heatmap allows you to evaluate reduction in different areas of the prep.{' '}
          </p>
        </div>
      </div>

      {/* Close button */}
      <div className="shrink-0 flex items-start p-[16px]">
        <div className="flex items-center justify-center size-[64px] rounded-[4px] cursor-pointer">
          <CloseIcon />
        </div>
      </div>
    </div>
  );
}