import { useState } from "react";
import svgPaths from "../imports/svg-bzvw4nbr6p";
import imgScanBody1 from "figma:asset/4cd5d3a3be03d0b11f4cf3d7e7a7fa3aed8fc4eb.png";
import imgScanBody2 from "figma:asset/f5a2ea12d94afbb7a7aa0f91d9bbc72ced832a4f.png";
import imgScanBody3 from "figma:asset/c0e2f6b2fe52a14cce14c65ae974e1cd77a09c75.png";
import imgScanBody4 from "figma:asset/81bfc59e2ea61e5f5c2c8ae7e0c455ec82f98a3a.png";
import imgScanBody5 from "figma:asset/54d67e9bb6f67cf60cba67c565d7f0ee68ccef1c.png";
import imgScanBody6 from "figma:asset/fe7b0eb774c8bcbba43b3abcc3d12a6e3e1b5d1e.png";

interface ScanBodyType {
  id: string;
  name: string;
  image: string;
  favorited: boolean;
}

const scanBodyTypes: ScanBodyType[] = [
  { id: "1", name: "SBYSBSC ALLONUS Tech Co., Ltd", image: imgScanBody1, favorited: true },
  { id: "2", name: "SBYSASC ALLONUS Tech Co., Ltd", image: imgScanBody2, favorited: false },
  { id: "3", name: "SBYSWSC ALLONUS Tech Co., Ltd", image: imgScanBody3, favorited: false },
  { id: "4", name: "AB0204 AB Dental Devices LLC", image: imgScanBody4, favorited: false },
  { id: "5", name: "AB0304 AB Dental Devices LLC", image: imgScanBody5, favorited: false },
  { id: "6", name: "AB0404 AB Dental Devices LLC", image: imgScanBody6, favorited: false },
  { id: "7", name: "SBYSBSC ALLONUS Tech Co., Ltd", image: imgScanBody1, favorited: false },
  { id: "8", name: "SBYSASC ALLONUS Tech Co., Ltd", image: imgScanBody2, favorited: false },
  { id: "9", name: "SBYSWSC ALLONUS Tech Co., Ltd", image: imgScanBody3, favorited: false },
  { id: "10", name: "AB0204 AB Dental Devices LLC", image: imgScanBody4, favorited: false },
  { id: "11", name: "AB0304 AB Dental Devices LLC", image: imgScanBody5, favorited: false },
  { id: "12", name: "AB0404 AB Dental Devices LLC", image: imgScanBody6, favorited: false },
  { id: "13", name: "SBYSBSC ALLONUS Tech Co., Ltd", image: imgScanBody1, favorited: false },
  { id: "14", name: "SBYSASC ALLONUS Tech Co., Ltd", image: imgScanBody2, favorited: false },
  { id: "15", name: "SBYSWSC ALLONUS Tech Co., Ltd", image: imgScanBody3, favorited: false },
];

interface ScanBodyTypeModalProps {
  onClose: () => void;
  onSelect: (name: string) => void;
  currentSelection?: string;
}

export default function ScanBodyTypeModal({ onClose, onSelect, currentSelection }: ScanBodyTypeModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [scanBodyList, setScanBodyList] = useState<ScanBodyType[]>(scanBodyTypes);
  const [selectedId, setSelectedId] = useState<string | null>(
    scanBodyTypes.find(s => s.name === currentSelection)?.id || null
  );

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setScanBodyList(prev => prev.map(s => s.id === id ? { ...s, favorited: !s.favorited } : s));
  };

  const handleSelect = (scanBody: ScanBodyType) => {
    setSelectedId(scanBody.id);
    onSelect(scanBody.name);
    onClose();
  };

  const filteredScanBodies = scanBodyList.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const chunkScanBodies = (arr: ScanBodyType[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const rows = chunkScanBodies(filteredScanBodies, 5);

  return (
    <div
      className="bg-white rounded-[4px] flex flex-col"
      style={{
        width: "1200px",
        height: "820px",
        boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.2), 0px 4px 16px 0px rgba(0,0,0,0.1)",
      }}
    >
      {/* Title bar */}
      <div className="h-[64px] relative shrink-0 w-full">
        <div className="content-stretch flex items-center overflow-clip pr-[16px] relative rounded-[inherit] size-full">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-16px] relative">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] relative size-full">
                <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#3e3d40] text-[24px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[30px] overflow-hidden">Select scan body type</p>
                </div>
              </div>
            </div>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="content-stretch cursor-pointer flex items-center justify-center mr-[-16px] px-[24px] py-[22px] relative rounded-[4px] shrink-0 size-[64px] hover:opacity-70 transition-opacity z-10"
          >
            <div className="relative shrink-0 size-[32px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[42.426px] top-1/2">
                <div className="flex-none rotate-45">
                  <div className="relative size-[30px]">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                      <path d={svgPaths.p25b48500} fill="#3FC1F3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px min-w-px pb-[24px] relative w-full overflow-y-auto">
        {/* Search input */}
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative w-full">
            <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#b0b1b3] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <div className="absolute inset-[9.31%_6.25%_6.25%_9.31%]">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2645 20.2645">
                        <path d={svgPaths.p277d2af2} fill="#696A6D" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search scan body type"
                    className="flex-1 bg-transparent outline-none font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px] placeholder:text-[#696a6d]"
                    style={{ fontVariationSettings: "'wdth' 100", border: "none", padding: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Favorite section placeholder */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="h-[54px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid border-t inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[24px] py-[8px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[54px]">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[22px] top-1/2">
                        <div className="absolute inset-[0_2.45%_9.55%_2.45%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9232 19.8992">
                            <path d={svgPaths.p4a34f00} stroke="black" strokeOpacity="0.4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[#939598] text-[18px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Your favorite items will appear here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scan body cards */}
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] px-[24px] relative w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              {rows.map((row, rowIdx) => (
                <div key={rowIdx} className="content-stretch flex items-center gap-[16px] relative shrink-0 w-full">
                  {row.map((scanBody) => {
                    const isSelected = selectedId === scanBody.id;
                    
                    return (
                      <div
                        key={scanBody.id}
                        className="relative rounded-[10px] shrink-0 w-[200px] cursor-pointer"
                        onClick={() => handleSelect(scanBody)}
                      >
                        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                          {/* Image section */}
                          <div className="bg-white h-[118px] overflow-clip relative shrink-0 w-full flex items-center justify-center">
                            <img 
                              alt={scanBody.name} 
                              className="max-w-[90%] max-h-[90%] object-contain" 
                              src={scanBody.image} 
                            />
                          </div>
                          
                          {/* Label section */}
                          <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[73px] items-center justify-center py-[8px] relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
                            <div className="relative shrink-0 w-full h-[56px] flex items-center">
                              <div className="content-stretch flex flex-col items-start px-[10px] relative w-full">
                                <p 
                                  className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[18px] text-black w-full overflow-hidden"
                                  style={{ 
                                    fontVariationSettings: "'wdth' 100",
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    textOverflow: 'ellipsis'
                                  }}
                                >
                                  {scanBody.name}
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Star icon */}
                          <button
                            onClick={(e) => toggleFavorite(e, scanBody.id)}
                            className="absolute right-[4px] top-[4px] overflow-clip size-[32px] hover:opacity-70 transition-opacity cursor-pointer z-10"
                          >
                            <div className="absolute inset-[6.25%_4%]">
                              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
                                <path d={svgPaths.p38b95000} fill={scanBody.favorited ? "#00ADEF" : "#B0B1B3"} />
                              </svg>
                            </div>
                          </button>
                        </div>
                        
                        {/* Selection border */}
                        {isSelected ? (
                          <div aria-hidden="true" className="absolute border-4 border-[#00adef] border-solid inset-[-4px] pointer-events-none rounded-[14px]" />
                        ) : (
                          <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[10px]" />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}\n            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
