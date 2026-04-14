import svgPaths from "./svg-nloj24mtqh";
import imgScreenshot20250428At1326328 from "figma:asset/96ea4dcf4260620d98ee147c1ab47831ee366b80.png";

function Frame() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-16px] relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#3e3d40] text-[24px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[30px] overflow-hidden">Select connection</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleBar() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Title bar">
      <div className="content-stretch flex items-center overflow-clip pr-[16px] relative rounded-[inherit] size-full">
        <Frame />
        <button className="content-stretch cursor-pointer flex items-center justify-center mr-[-16px] px-[24px] py-[22px] relative rounded-[4px] shrink-0 size-[64px]" data-name="Right button">
          <div className="relative shrink-0 size-[32px]" data-name="Icon">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[42.426px] top-1/2" style={{ "--transform-inner-width": "300", "--transform-inner-height": "153" } as React.CSSProperties}>
              <div className="flex-none rotate-45">
                <div className="relative size-[30px]" data-name="Union">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                    <path d={svgPaths.p25b48500} fill="var(--fill-0, #3FC1F3)" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[9.31%_6.25%_6.25%_9.31%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2645 20.2645">
            <path d={svgPaths.p277d2af2} fill="var(--fill-0, #696A6D)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#696a6d] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` Search connection`}</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
      <Text />
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
      <Content />
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Text input">
      <Field />
    </div>
  );
}

function Frame33() {
  return (
    <div className="h-[76px] relative shrink-0 w-full">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end px-[24px] relative size-full">
          <TextInput />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="h-[54px] relative shrink-0 w-full" data-name="Favorite placeholder">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[8px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[54px]" data-name="Favorite switch">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="Icon / Star unchecked">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[22px] top-1/2">
                  <div className="absolute inset-[0_2.45%_9.55%_2.45%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9232 19.8992">
                      <path d={svgPaths.p4a34f00} id="Star 1" stroke="var(--stroke-0, black)" strokeOpacity="0.4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[#939598] text-[18px] text-ellipsis" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Your favorite items will appear here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FavoriteSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Favorite section">
      <Frame32 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
        <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-h-px min-w-px overflow-hidden relative text-[18px] text-black text-ellipsis w-full whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Astra Tech OsseoSpeed™ EV
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[73px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
      <Frame1 />
    </div>
  );
}

function ConnectionTypeCard() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[200px]" data-name="Connection type card">
      <div className="content-stretch flex flex-col items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
        <div className="h-[108px] relative shrink-0 w-[107px]" data-name="Screenshot 2025-04-28 at 13.26.32 8">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[214.69%] left-[-116.09%] max-w-none top-[-5.65%] w-[436.21%]" src={imgScreenshot20250428At1326328} />
          </div>
        </div>
        <Frame18 />
        <div className="absolute left-[164px] overflow-clip size-[32px] top-[4px]" data-name="Star outline">
          <div className="absolute inset-[6.25%_4%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
              <path d={svgPaths.p38b95000} fill="var(--fill-0, #B0B1B3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
        <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-h-px min-w-px overflow-hidden relative text-[18px] text-black text-ellipsis w-full whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Astra Tech OsseoSpeed™ TX
        </p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[73px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
      <Frame2 />
    </div>
  );
}

function ConnectionTypeCard1() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[200px]" data-name="Connection type card">
      <div className="content-stretch flex flex-col items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
        <div className="h-[108px] relative shrink-0 w-[107px]" data-name="Screenshot 2025-04-28 at 13.26.32 10">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[215.91%] left-[-329.89%] max-w-none top-[-5.68%] w-[436.21%]" src={imgScreenshot20250428At1326328} />
          </div>
        </div>
        <Frame19 />
        <div className="absolute left-[164px] overflow-clip size-[32px] top-[4px]" data-name="Star outline">
          <div className="absolute inset-[6.25%_4%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
              <path d={svgPaths.p38b95000} fill="var(--fill-0, #B0B1B3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
        <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-h-px min-w-px overflow-hidden relative text-[18px] text-black text-ellipsis w-full whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Certain Internal Connection Straight
        </p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[73px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
      <Frame3 />
    </div>
  );
}

function ConnectionTypeCard2() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[200px]" data-name="Connection type card">
      <div className="content-stretch flex flex-col items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
        <div className="h-[108px] relative shrink-0 w-[107px]" data-name="Screenshot 2025-04-28 at 13.26.32 12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[215.91%] left-[-9.09%] max-w-none top-[-109.09%] w-[431.25%]" src={imgScreenshot20250428At1326328} />
          </div>
        </div>
        <Frame20 />
        <div className="absolute left-[164px] overflow-clip size-[32px] top-[4px]" data-name="Star outline">
          <div className="absolute inset-[6.25%_4%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
              <path d={svgPaths.p38b95000} fill="var(--fill-0, #B0B1B3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[10px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis w-full whitespace-nowrap" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Conical Connection
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[73px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
      <Frame4 />
    </div>
  );
}

function ConnectionTypeCard3() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[200px]" data-name="Connection type card">
      <div className="content-stretch flex flex-col items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
        <div className="h-[108px] relative shrink-0 w-[107px]" data-name="Screenshot 2025-04-28 at 13.26.32 7">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[215.91%] left-[-9.14%] max-w-none top-[-5.68%] w-[433.71%]" src={imgScreenshot20250428At1326328} />
          </div>
        </div>
        <Frame21 />
        <div className="absolute left-[164px] overflow-clip size-[32px] top-[4px]" data-name="Star outline">
          <div className="absolute inset-[6.25%_4%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
              <path d={svgPaths.p38b95000} fill="var(--fill-0, #B0B1B3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
        <p className="flex-[1_0_0] font-['Avenir:Roman',sans-serif] leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[18px] text-black text-ellipsis w-[131px] whitespace-pre-wrap" dir="auto">
          Connection Hex of Trabecular Metal™ and Tapered Screw-Vent®
        </p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[10px] h-[73px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
      <Frame5 />
      <button className="absolute block cursor-pointer left-[164px] overflow-clip size-[32px] top-[37px]" data-name="Arrow up">
        <div className="absolute inset-[12.5%_18.75%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
            <path d={svgPaths.p1b21d500} fill="var(--fill-0, #3E3D40)" id="Vector" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <ConnectionTypeCard />
      <ConnectionTypeCard1 />
      <ConnectionTypeCard2 />
      <ConnectionTypeCard3 />
      <div className="bg-white relative rounded-[10px] shrink-0 w-[200px]" data-name="Connection type card">
        <div className="content-stretch flex flex-col items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
          <div className="h-[108px] relative shrink-0 w-[107px]" data-name="Screenshot 2025-04-28 at 13.26.32 9">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[215.91%] left-[-221.14%] max-w-none top-[-5.68%] w-[433.71%]" src={imgScreenshot20250428At1326328} />
            </div>
          </div>
          <Frame22 />
          <div className="absolute left-[164px] overflow-clip size-[32px] top-[4px]" data-name="Star outline">
            <div className="absolute inset-[6.25%_4%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
                <path d={svgPaths.p38b95000} fill="var(--fill-0, #B0B1B3)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[10px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis w-full whitespace-nowrap" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            CrossFit Connection
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[73px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
      <Frame6 />
    </div>
  );
}

function ConnectionTypeCard4() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[200px]" data-name="Connection type card">
      <div className="content-stretch flex flex-col items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
        <div className="h-[108px] relative shrink-0 w-[107px]" data-name="Screenshot 2025-04-28 at 13.26.32 7">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[215.91%] left-[-9.14%] max-w-none top-[-5.68%] w-[433.71%]" src={imgScreenshot20250428At1326328} />
          </div>
        </div>
        <Frame23 />
        <div className="absolute left-[164px] overflow-clip size-[32px] top-[4px]" data-name="Star outline">
          <div className="absolute inset-[6.25%_4%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
              <path d={svgPaths.p38b95000} fill="var(--fill-0, #B0B1B3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#00adef] border-solid inset-[-4px] pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[10px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis w-full whitespace-nowrap" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            External Hex
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[73px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
      <Frame7 />
    </div>
  );
}

function ConnectionTypeCard5() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[200px]" data-name="Connection type card">
      <div className="content-stretch flex flex-col items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
        <div className="h-[108px] relative shrink-0 w-[107px]" data-name="Screenshot 2025-04-28 at 13.26.32 7">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[215.91%] left-[-9.14%] max-w-none top-[-5.68%] w-[433.71%]" src={imgScreenshot20250428At1326328} />
          </div>
        </div>
        <Frame24 />
        <div className="absolute left-[164px] overflow-clip size-[32px] top-[4px]" data-name="Star outline">
          <div className="absolute inset-[6.25%_4%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
              <path d={svgPaths.p38b95000} fill="var(--fill-0, #B0B1B3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
        <p className="flex-[1_0_0] font-['Avenir:Roman',sans-serif] leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[18px] text-black text-ellipsis w-[131px] whitespace-pre-wrap" dir="auto">
          Microcone / Quattrocone (Connection)
        </p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[10px] h-[73px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
      <Frame8 />
      <button className="absolute block cursor-pointer left-[164px] overflow-clip size-[32px] top-[37px]" data-name="Arrow up">
        <div className="absolute inset-[12.5%_18.75%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
            <path d={svgPaths.p1b21d500} fill="var(--fill-0, #3E3D40)" id="Vector" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
        <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-h-px min-w-px overflow-hidden relative text-[18px] text-black text-ellipsis w-full whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          NobelReplace® Tri-Lobe Connection
        </p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[73px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
      <Frame9 />
    </div>
  );
}

function ConnectionTypeCard6() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[200px]" data-name="Connection type card">
      <div className="content-stretch flex flex-col items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
        <div className="h-[108px] relative shrink-0 w-[107px]" data-name="Screenshot 2025-04-28 at 13.26.32 12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[215.91%] left-[-9.09%] max-w-none top-[-109.09%] w-[431.25%]" src={imgScreenshot20250428At1326328} />
          </div>
        </div>
        <Frame26 />
        <div className="absolute left-[164px] overflow-clip size-[32px] top-[4px]" data-name="Star outline">
          <div className="absolute inset-[6.25%_4%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
              <path d={svgPaths.p38b95000} fill="var(--fill-0, #B0B1B3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
        <p className="flex-[1_0_0] font-['Avenir:Roman',sans-serif] leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[18px] text-black text-ellipsis w-[131px] whitespace-pre-wrap" dir="auto">
          Platform Switch-Connection for all implant lines except S and Mini per diameter
        </p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[10px] h-[73px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
      <Frame10 />
      <button className="absolute block cursor-pointer left-[164px] overflow-clip size-[32px] top-[37px]" data-name="Arrow up">
        <div className="absolute inset-[12.5%_18.75%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
            <path d={svgPaths.p1b21d500} fill="var(--fill-0, #3E3D40)" id="Vector" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <ConnectionTypeCard4 />
      <ConnectionTypeCard5 />
      <div className="bg-white relative rounded-[10px] shrink-0 w-[200px]" data-name="Connection type card">
        <div className="content-stretch flex flex-col items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
          <div className="h-[108px] relative shrink-0 w-[107px]" data-name="Screenshot 2025-04-28 at 13.26.32 9">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[215.91%] left-[-221.14%] max-w-none top-[-5.68%] w-[433.71%]" src={imgScreenshot20250428At1326328} />
            </div>
          </div>
          <Frame25 />
          <div className="absolute left-[164px] overflow-clip size-[32px] top-[4px]" data-name="Star outline">
            <div className="absolute inset-[6.25%_4%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
                <path d={svgPaths.p38b95000} fill="var(--fill-0, #B0B1B3)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <ConnectionTypeCard6 />
      <div className="bg-white relative rounded-[10px] shrink-0 w-[200px]" data-name="Connection type card">
        <div className="content-stretch flex flex-col items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
          <div className="h-[108px] relative shrink-0 w-[107px]" data-name="Screenshot 2025-04-28 at 13.26.32 9">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[215.91%] left-[-221.14%] max-w-none top-[-5.68%] w-[433.71%]" src={imgScreenshot20250428At1326328} />
            </div>
          </div>
          <Frame27 />
          <div className="absolute left-[164px] overflow-clip size-[32px] top-[4px]" data-name="Star outline">
            <div className="absolute inset-[6.25%_4%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
                <path d={svgPaths.p38b95000} fill="var(--fill-0, #B0B1B3)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
        <p className="flex-[1_0_0] font-['Avenir:Roman',sans-serif] leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[18px] text-black text-ellipsis w-[131px] whitespace-pre-wrap" dir="auto">
          Platform Match-Connection for S-Implant line
        </p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[10px] h-[73px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
      <Frame11 />
      <button className="absolute block cursor-pointer left-[164px] overflow-clip size-[32px] top-[37px]" data-name="Arrow up">
        <div className="absolute inset-[12.5%_18.75%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
            <path d={svgPaths.p1b21d500} fill="var(--fill-0, #3E3D40)" id="Vector" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[10px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis w-full whitespace-nowrap" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            synOcta® Connection
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[73px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
      <Frame12 />
    </div>
  );
}

function ConnectionTypeCard7() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[200px]" data-name="Connection type card">
      <div className="content-stretch flex flex-col items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
        <div className="h-[108px] relative shrink-0 w-[107px]" data-name="Screenshot 2025-04-28 at 13.26.32 7">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[215.91%] left-[-9.14%] max-w-none top-[-5.68%] w-[433.71%]" src={imgScreenshot20250428At1326328} />
          </div>
        </div>
        <Frame29 />
        <div className="absolute left-[164px] overflow-clip size-[32px] top-[4px]" data-name="Star outline">
          <div className="absolute inset-[6.25%_4%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
              <path d={svgPaths.p38b95000} fill="var(--fill-0, #B0B1B3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[10px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis w-full whitespace-nowrap" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            TorcFit™
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[73px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
      <Frame13 />
    </div>
  );
}

function ConnectionTypeCard8() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[200px]" data-name="Connection type card">
      <div className="content-stretch flex flex-col items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
        <div className="h-[108px] relative shrink-0 w-[107px]" data-name="Screenshot 2025-04-28 at 13.26.32 7">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[215.91%] left-[-9.14%] max-w-none top-[-5.68%] w-[433.71%]" src={imgScreenshot20250428At1326328} />
          </div>
        </div>
        <Frame30 />
        <div className="absolute left-[164px] overflow-clip size-[32px] top-[4px]" data-name="Star outline">
          <div className="absolute inset-[6.25%_4%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
              <path d={svgPaths.p38b95000} fill="var(--fill-0, #B0B1B3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[10px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis w-full whitespace-nowrap" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            XiVE® S Connection
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[73px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
      <Frame14 />
    </div>
  );
}

function ConnectionTypeCard9() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[200px]" data-name="Connection type card">
      <div className="content-stretch flex flex-col items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
        <div className="h-[108px] relative shrink-0 w-[107px]" data-name="Screenshot 2025-04-28 at 13.26.32 7">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[215.91%] left-[-9.14%] max-w-none top-[-5.68%] w-[433.71%]" src={imgScreenshot20250428At1326328} />
          </div>
        </div>
        <Frame31 />
        <div className="absolute left-[164px] overflow-clip size-[32px] top-[4px]" data-name="Star outline">
          <div className="absolute inset-[6.25%_4%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
              <path d={svgPaths.p38b95000} fill="var(--fill-0, #B0B1B3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[17px] items-center pb-[24px] relative shrink-0">
      <div className="bg-white relative rounded-[10px] shrink-0 w-[200px]" data-name="Connection type card">
        <div className="content-stretch flex flex-col items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
          <div className="h-[108px] relative shrink-0 w-[107px]" data-name="Screenshot 2025-04-28 at 13.26.32 9">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[215.91%] left-[-221.14%] max-w-none top-[-5.68%] w-[433.71%]" src={imgScreenshot20250428At1326328} />
            </div>
          </div>
          <Frame28 />
          <div className="absolute left-[164px] overflow-clip size-[32px] top-[4px]" data-name="Star outline">
            <div className="absolute inset-[6.25%_4%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
                <path d={svgPaths.p38b95000} fill="var(--fill-0, #B0B1B3)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <ConnectionTypeCard7 />
      <ConnectionTypeCard8 />
      <ConnectionTypeCard9 />
    </div>
  );
}

function V3ConnectionTypeConnectionSystem() {
  return (
    <div className="relative shrink-0 w-full" data-name="V3 - connection type/connection system">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center px-[24px] relative w-full">
          <Frame15 />
          <Frame16 />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

export default function ModalWindow() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2),0px_4px_16px_0px_rgba(0,0,0,0.1)] size-full" data-name="Modal window">
      <TitleBar />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px min-w-px overflow-x-clip overflow-y-auto pb-[24px] relative w-full" data-name="Property 1=Connection">
        <Frame33 />
        <FavoriteSection />
        <V3ConnectionTypeConnectionSystem />
      </div>
    </div>
  );
}