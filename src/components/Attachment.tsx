import svgPaths from "../imports/svg-hvn2vjvjox";

interface AttachmentProps {
  onAddFromGallery?: () => void;
  onUploadWithCode?: () => void;
}

export default function Attachment({
  onAddFromGallery,
  onUploadWithCode,
}: AttachmentProps = {}) {
  return (
    <div className="bg-white relative rounded-[8px] w-full h-[580px] flex flex-col" data-name="Attachment">
      {/* Header */}
      <div className="bg-white px-[24px] py-[24px] shrink-0">
        <p
          className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] text-[24px] text-black"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Attachments
        </p>
      </div>

      {/* Empty State Content - Centered */}
      <div className="flex-1 flex items-center justify-center px-[24px]">
        <div className="flex flex-col items-center gap-[16px]">
          {/* Icon */}
          <div className="bg-[#ededed] rounded-full p-[20px]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="4" width="24" height="24" rx="2" stroke="#939598" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="12" r="3" fill="#939598"/>
              <path d="M28 20L22 14L10 26H28V20Z" fill="#939598"/>
            </svg>
          </div>

          {/* Text */}
          <div className="flex flex-col items-center gap-[8px]">
            <p
              className="font-['Roboto:Regular',sans-serif] font-normal text-[18px] text-[#3e3d40] leading-[28px] text-center"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              No attachments for this case yet.
            </p>
            <p
              className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#696a6d] leading-[24px] text-center max-w-[400px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Go to MyiTero.com to upload photos, scans, X-rays or any other file relevant for the treatment.
            </p>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </div>
  );
}