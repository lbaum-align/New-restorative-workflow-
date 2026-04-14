import { useState } from "react";
import { ChevronDown } from "lucide-react";
import svgPaths from "../imports/svg-hvn2vjvjox";

interface AttachmentCollapsibleProps {
  onAddFromGallery?: () => void;
  onUploadWithCode?: () => void;
  defaultExpanded?: boolean;
}

export default function AttachmentCollapsible({
  onAddFromGallery,
  onUploadWithCode,
  defaultExpanded = false,
}: AttachmentCollapsibleProps = {}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-white relative rounded-[8px] w-full" data-name="AttachmentCollapsible">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        {/* Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-white relative shrink-0 w-full cursor-pointer hover:bg-[#f9f9f9] transition-colors"
        >
          <div className="overflow-clip rounded-[inherit] w-full">
            <div className="content-stretch flex flex-col items-start px-[28px] py-[24px] relative w-full">
              <div className="content-stretch flex items-center justify-between gap-6 relative shrink-0 w-full">
                <p
                  className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Attachments
                </p>
                <ChevronDown 
                  className={`w-[24px] h-[24px] text-[#696a6d] transition-transform ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
          />
        </button>

        {/* Content - Collapsible */}
        {isExpanded && (
          <div className="w-full">
            <div className="h-[260px] relative shrink-0 w-full">
              <div className="size-full">
                <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
                  <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full">
                    <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[32px] relative size-full">
                        <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
                          {/* Add from Patient Gallery Button */}
                          <button
                            onClick={onAddFromGallery}
                            className="bg-[#f9f9f9] content-stretch flex gap-[16px] h-[64px] items-center justify-center min-w-[120px] px-[24px] py-[22px] relative rounded-[4px] shrink-0 hover:bg-[#efefef] transition-colors cursor-pointer"
                          >
                            <div
                              aria-hidden="true"
                              className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]"
                            />
                            <div className="relative shrink-0 size-[32px]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 32 32"
                              >
                                <path
                                  d={svgPaths.p373ac80}
                                  fill="var(--fill-0, #3E3D40)"
                                />
                              </svg>
                            </div>
                            <div
                              className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[20px] text-center text-nowrap"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              <p className="leading-[32px]">Add from Patient Gallery</p>
                            </div>
                          </button>

                          {/* Upload with code Button */}
                          <button
                            onClick={onUploadWithCode}
                            className="bg-[#f9f9f9] content-stretch flex gap-[16px] h-[64px] items-center justify-center min-w-[120px] px-[24px] py-[22px] relative rounded-[4px] shrink-0 hover:bg-[#efefef] transition-colors cursor-pointer"
                          >
                            <div
                              aria-hidden="true"
                              className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]"
                            />
                            <div className="relative shrink-0 size-[32px]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 32 32"
                              >
                                <path
                                  d="M26 6H22V10H26V6Z"
                                  fill="var(--fill-0, #3E3D40)"
                                />
                                <path
                                  clipRule="evenodd"
                                  d={svgPaths.p15aff080}
                                  fill="var(--fill-0, #3E3D40)"
                                  fillRule="evenodd"
                                />
                                <path
                                  d="M10 22H6V26H10V22Z"
                                  fill="var(--fill-0, #3E3D40)"
                                />
                                <path
                                  clipRule="evenodd"
                                  d={svgPaths.p3b03f480}
                                  fill="var(--fill-0, #3E3D40)"
                                  fillRule="evenodd"
                                />
                                <path
                                  clipRule="evenodd"
                                  d={svgPaths.p2c1b6100}
                                  fill="var(--fill-0, #3E3D40)"
                                  fillRule="evenodd"
                                />
                                <path
                                  d="M10 6H6V10H10V6Z"
                                  fill="var(--fill-0, #3E3D40)"
                                />
                                <path
                                  clipRule="evenodd"
                                  d={svgPaths.p31ed2f00}
                                  fill="var(--fill-0, #3E3D40)"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div
                              className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[20px] text-center text-nowrap"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              <p className="leading-[32px]">Upload with code</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[4px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </div>
  );
}