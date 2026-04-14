import { useState } from "react";
import svgPaths from "../imports/svg-bzvw4nbr6p";
import imgManufacturer1 from "figma:asset/c91769eed4d8b1cda506092633b63eddf279cb05.png";
import imgManufacturer2 from "figma:asset/2981aa8537dc51af8520b3e0528acdd9545eb4d4.png";
import imgManufacturer3 from "figma:asset/1c1f8b562227330c59a0710039983b34cedd4903.png";
import imgManufacturer4 from "figma:asset/d22ace91ace5871943677fd2d8ecf2de75d06993.png";
import imgManufacturer5 from "figma:asset/85153ad6dcd065716f779d18d7577f73a694a348.png";
import imgManufacturer6 from "figma:asset/250b277a8c148ca35b8c4c90aac18615bb051364.png";
import imgManufacturer7 from "figma:asset/50720d6eaa6f06b220be469cdc36d8526a41dc2a.png";
import imgManufacturer8 from "figma:asset/11b6f0201829f6fb75d8f5c41800a7a5a99774cf.png";
import imgManufacturer9 from "figma:asset/7c2a381be850478e6a079db0f0e96269253816f6.png";
import imgManufacturer10 from "figma:asset/edf36a85ec66bc0a2c66a3f80a3054072e247991.png";
import imgManufacturer11 from "figma:asset/4bee5fc0bbbdcfb32c3c6e62509a8a1d47a38cc3.png";
import imgManufacturer12 from "figma:asset/30a21a873bd0a56e9a88e5912b09e4555aeebf35.png";

interface Manufacturer {
  id: string;
  name: string;
  image: string;
  favorited: boolean;
}

const manufacturers: Manufacturer[] = [
  { id: "1", name: "AB Dental Devices", image: imgManufacturer1, favorited: false },
  { id: "2", name: "Altracore Biomedical", image: imgManufacturer2, favorited: false },
  { id: "3", name: "CAMLOG Biotechnologies", image: imgManufacturer3, favorited: false },
  { id: "4", name: "CENDRES + MÉTAUX Ltd.", image: imgManufacturer4, favorited: false },
  { id: "5", name: "Core3d Protech S.L.", image: imgManufacturer5, favorited: false },
  { id: "6", name: "FGM Dental Group", image: imgManufacturer6, favorited: false },
  { id: "7", name: "Medentika", image: imgManufacturer7, favorited: false },
  { id: "8", name: "Neodent® - JJGC Indústria e Comércio de Materiais Dentários S.A.", image: imgManufacturer8, favorited: false },
  { id: "9", name: "Straumann® Group", image: imgManufacturer9, favorited: true },
  { id: "10", name: "Surgilkor", image: imgManufacturer10, favorited: false },
  { id: "11", name: "Systhex© Sistemas de Implantes Ósseo Integrado Ltda.", image: imgManufacturer11, favorited: false },
  { id: "12", name: "TAV Dental", image: imgManufacturer12, favorited: false },
  { id: "13", name: "Zimmer Biomet", image: imgManufacturer1, favorited: false },
  { id: "14", name: "Dentsply Sirona", image: imgManufacturer2, favorited: false },
  { id: "15", name: "Nobel Biocare", image: imgManufacturer3, favorited: false },
];

interface ManufacturerSelectionModalProps {
  onClose: () => void;
  onSelect: (name: string) => void;
  currentSelection?: string;
}

export default function ManufacturerSelectionModal({ onClose, onSelect, currentSelection }: ManufacturerSelectionModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [manufacturerList, setManufacturerList] = useState<Manufacturer[]>(manufacturers);
  const [selectedId, setSelectedId] = useState<string | null>(
    manufacturers.find(m => m.name === currentSelection)?.id || null
  );

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setManufacturerList(prev => prev.map(m => m.id === id ? { ...m, favorited: !m.favorited } : m));
  };

  const handleSelect = (manufacturer: Manufacturer) => {
    setSelectedId(manufacturer.id);
    onSelect(manufacturer.name);
    onClose();
  };

  const filteredManufacturers = manufacturerList.filter(m =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const chunkManufacturers = (arr: Manufacturer[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const rows = chunkManufacturers(filteredManufacturers, 5);

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
                  <p className="leading-[30px] overflow-hidden">Select implant manufacturer</p>
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
                    placeholder="Search implant manufacturer"
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

        {/* Manufacturer cards */}
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] px-[24px] relative w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              {rows.map((row, rowIdx) => (
                <div key={rowIdx} className="content-stretch flex items-center gap-[16px] relative shrink-0 w-full">
                  {row.map((manufacturer) => {
                    const isSelected = selectedId === manufacturer.id;
                    
                    return (
                      <div
                        key={manufacturer.id}
                        className="relative rounded-[10px] shrink-0 w-[200px] cursor-pointer"
                        onClick={() => handleSelect(manufacturer)}
                      >
                        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                          {/* Image section */}
                          <div className="bg-white h-[118px] overflow-clip relative shrink-0 w-full flex items-center justify-center">
                            <img 
                              alt={manufacturer.name} 
                              className="max-w-[90%] max-h-[90%] object-contain" 
                              src={manufacturer.image} 
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
                                  {manufacturer.name}
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Star icon */}
                          <button
                            onClick={(e) => toggleFavorite(e, manufacturer.id)}
                            className="absolute right-[4px] top-[4px] overflow-clip size-[32px] hover:opacity-70 transition-opacity cursor-pointer z-10"
                          >
                            <div className="absolute inset-[6.25%_4%]">
                              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
                                <path d={svgPaths.p38b95000} fill={manufacturer.favorited ? "#00ADEF" : "#B0B1B3"} />
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}