import svgPaths from "./svg-f5t9byorgk";
import imgGalleryCard from "figma:asset/0512cf914537083b6b0db26e0fd224f682769315.png";
import imgGalleryCard1 from "figma:asset/1a941203e7084e9ce5e4542fbf17cac6be771828.png";
import imgGalleryCard2 from "figma:asset/eb5f3baae48dd7c8a255ecb2783d3a70a97ed44c.png";
import imgGalleryCard3 from "figma:asset/f5ad251fdfc02165f353468553ab45b76580b276.png";

function AddEmpty() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add empty">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Add empty">
          <path d={svgPaths.p209700} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex gap-[12px] h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <AddEmpty />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] text-center text-nowrap tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">Add from Patient Gallery</p>
      </div>
    </div>
  );
}

function QrCode() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="QR code">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="QR code">
          <g id="Vector">
            <path d="M19.5 4.5H16.5V7.5H19.5V4.5Z" fill="var(--fill-0, #3E3D40)" />
            <path clipRule="evenodd" d={svgPaths.p2c59f700} fill="var(--fill-0, #3E3D40)" fillRule="evenodd" />
            <path d="M7.5 16.5H4.5V19.5H7.5V16.5Z" fill="var(--fill-0, #3E3D40)" />
            <path clipRule="evenodd" d={svgPaths.p34fc5d80} fill="var(--fill-0, #3E3D40)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3957e780} fill="var(--fill-0, #3E3D40)" fillRule="evenodd" />
            <path d="M7.5 4.5H4.5V7.5H7.5V4.5Z" fill="var(--fill-0, #3E3D40)" />
            <path clipRule="evenodd" d={svgPaths.p123c800} fill="var(--fill-0, #3E3D40)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex gap-[12px] h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#939598] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <QrCode />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3e3d40] text-[18px] text-center text-nowrap tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">Upload with code</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function ChevronUp() {
  return (
    <div className="relative size-[40px]" data-name="Chevron up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Chevron up">
          <path d={svgPaths.p22197900} fill="var(--fill-0, #696A6D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative size-[40px]">
      <div className="flex items-center justify-center relative shrink-0 size-[40px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ChevronUp />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame1 />
      <div className="flex items-center justify-center relative shrink-0 size-[40px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Attachments
      </p>
      <Frame5 />
    </div>
  );
}

function RxElementsRecordsNotesLayers() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Rx elements (records, notes, layers)">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[28px] py-[24px] relative w-full">
          <Frame3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function GalleryCard() {
  return (
    <div className="h-[140px] pointer-events-none relative rounded-[3.904px] shrink-0 w-[148px]" data-name="Gallery card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[3.904px] size-full" src={imgGalleryCard} />
      <div aria-hidden="true" className="absolute border-[#f4f4f4] border-[3px] border-solid inset-0 rounded-[3.904px]" />
    </div>
  );
}

function GalleryCard1() {
  return (
    <div className="h-[140px] pointer-events-none relative shrink-0 w-[153px]" data-name="Gallery card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgGalleryCard1} />
      <div aria-hidden="true" className="absolute border-[#f4f4f4] border-[3px] border-solid inset-0" />
    </div>
  );
}

function Widesmile() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Widesmile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Widesmile">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p2b599100} fill="var(--fill-0, black)" fillOpacity="0.445" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2e152400} fill="var(--fill-0, black)" fillOpacity="0.445" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GalleryCard2() {
  return (
    <div className="h-[140px] relative shrink-0 w-[182px]" data-name="Gallery card">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[143.81%] left-[-12.92%] max-w-none top-[-30.77%] w-[125.84%]" src={imgGalleryCard2} />
      </div>
      <div aria-hidden="true" className="absolute border-[#f4f4f4] border-[3px] border-solid inset-0 pointer-events-none" />
      <Widesmile />
    </div>
  );
}

function GalleryCard3() {
  return (
    <div className="h-[140px] pointer-events-none relative shrink-0 w-[188px]" data-name="Gallery card">
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[220.97%] left-[-12.42%] max-w-none top-[-11.83%] w-[337.89%]" src={imgGalleryCard3} />
      </div>
      <div aria-hidden="true" className="absolute border-[#f4f4f4] border-[3px] border-solid inset-0" />
    </div>
  );
}

function GalleryCard4() {
  return (
    <div className="h-[140px] pointer-events-none relative shrink-0 w-[184px]" data-name="Gallery card">
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[220.97%] left-[-115.5%] max-w-none top-[-11.83%] w-[330.7%]" src={imgGalleryCard3} />
      </div>
      <div aria-hidden="true" className="absolute border-[#f4f4f4] border-[3px] border-solid inset-0" />
    </div>
  );
}

function CheckmarkFill() {
  return (
    <div className="absolute left-[787px] size-[24px] top-[50px]" data-name="Checkmark fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark fill"></g>
      </svg>
    </div>
  );
}

function CheckmarkFill1() {
  return (
    <div className="absolute left-[833px] size-[24px] top-[77px]" data-name="Checkmark fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark fill"></g>
      </svg>
    </div>
  );
}

function CheckmarkFill2() {
  return (
    <div className="absolute left-[720px] size-[24px] top-[77px]" data-name="Checkmark fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark fill"></g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <GalleryCard />
      <GalleryCard1 />
      <GalleryCard2 />
      <GalleryCard3 />
      <GalleryCard4 />
      <CheckmarkFill />
      <CheckmarkFill1 />
      <CheckmarkFill2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[32px] relative size-full">
          <Frame4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[252px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

export default function RxElementsRecordsNotesLayers1() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Rx elements (records, notes, layers)">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <RxElementsRecordsNotesLayers />
        <Frame6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}