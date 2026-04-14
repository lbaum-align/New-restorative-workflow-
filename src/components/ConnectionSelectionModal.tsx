import { useState } from "react";
import svgPaths from "../imports/svg-9s3q5teetl";
import imgConnection from "figma:asset/96ea4dcf4260620d98ee147c1ab47831ee366b80.png";

interface Connection {
  id: string;
  name: string;
  imageStyle: React.CSSProperties;
  favorited: boolean;
  hasArrow?: boolean;
}

// Each connection has a unique crop position from the sprite sheet
const connections: Connection[] = [
  { 
    id: "1", 
    name: "Astra Tech OsseoSpeed™ EV", 
    imageStyle: { height: "214.69%", left: "-116.09%", top: "-5.65%", width: "436.21%" },
    favorited: false 
  },
  { 
    id: "2", 
    name: "Astra Tech OsseoSpeed™ TX", 
    imageStyle: { height: "215.91%", left: "-329.89%", top: "-5.68%", width: "436.21%" },
    favorited: false 
  },
  { 
    id: "3", 
    name: "Certain Internal Connection Straight", 
    imageStyle: { height: "215.91%", left: "-9.09%", top: "-109.09%", width: "431.25%" },
    favorited: false 
  },
  { 
    id: "4", 
    name: "Conical Connection", 
    imageStyle: { height: "215.91%", left: "-9.14%", top: "-5.68%", width: "433.71%" },
    favorited: false 
  },
  { 
    id: "5", 
    name: "Connection Hex of Trabecular Metal™ and Tapered Screw-Vent®", 
    imageStyle: { height: "215.91%", left: "-221.14%", top: "-5.68%", width: "433.71%" },
    favorited: false, 
    hasArrow: true 
  },
  { 
    id: "6", 
    name: "CrossFit Connection", 
    imageStyle: { height: "215.91%", left: "-9.14%", top: "-5.68%", width: "433.71%" },
    favorited: false 
  },
  { 
    id: "7", 
    name: "External Hex", 
    imageStyle: { height: "215.91%", left: "-9.14%", top: "-5.68%", width: "433.71%" },
    favorited: false 
  },
  { 
    id: "8", 
    name: "Microcone / Quattrocone (Connection)", 
    imageStyle: { height: "215.91%", left: "-221.14%", top: "-5.68%", width: "433.71%" },
    favorited: false, 
    hasArrow: true 
  },
  { 
    id: "9", 
    name: "NobelReplace® Tri-Lobe Connection", 
    imageStyle: { height: "215.91%", left: "-9.09%", top: "-109.09%", width: "431.25%" },
    favorited: false 
  },
  { 
    id: "10", 
    name: "Platform Switch-Connection for all implant lines except S and Mini per diameter", 
    imageStyle: { height: "215.91%", left: "-221.14%", top: "-5.68%", width: "433.71%" },
    favorited: false, 
    hasArrow: true 
  },
  { 
    id: "11", 
    name: "Platform Match-Connection for S-Implant line", 
    imageStyle: { height: "215.91%", left: "-221.14%", top: "-5.68%", width: "433.71%" },
    favorited: false, 
    hasArrow: true 
  },
  { 
    id: "12", 
    name: "synOcta® Connection", 
    imageStyle: { height: "215.91%", left: "-9.14%", top: "-5.68%", width: "433.71%" },
    favorited: false 
  },
  { 
    id: "13", 
    name: "TorcFit™", 
    imageStyle: { height: "215.91%", left: "-9.14%", top: "-5.68%", width: "433.71%" },
    favorited: false 
  },
  { 
    id: "14", 
    name: "XiVE® S Connection", 
    imageStyle: { height: "215.91%", left: "-9.14%", top: "-5.68%", width: "433.71%" },
    favorited: false 
  },
];

interface ConnectionSelectionModalProps {
  onClose: () => void;
  onSelect: (name: string) => void;
  currentSelection?: string;
}

export default function ConnectionSelectionModal({ onClose, onSelect, currentSelection }: ConnectionSelectionModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [connectionList, setConnectionList] = useState<Connection[]>(connections);
  const [selectedId, setSelectedId] = useState<string | null>(
    connections.find(c => c.name === currentSelection)?.id || null
  );

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setConnectionList(prev => prev.map(c => c.id === id ? { ...c, favorited: !c.favorited } : c));
  };

  const handleSelect = (connection: Connection) => {
    setSelectedId(connection.id);
    onSelect(connection.name);
    onClose();
  };

  const filteredConnections = connectionList.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const chunkConnections = (arr: Connection[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const rows = chunkConnections(filteredConnections, 5);

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
                  <p className="leading-[30px] overflow-hidden">Select connection</p>
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
                    placeholder="Search connection"
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

        {/* Connection cards */}
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] px-[24px] relative w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              {rows.map((row, rowIdx) => (
                <div key={rowIdx} className="content-stretch flex items-center gap-[16px] relative shrink-0 w-full">
                  {row.map((connection) => {
                    const isSelected = selectedId === connection.id;
                    
                    return (
                      <div
                        key={connection.id}
                        className="relative rounded-[10px] shrink-0 w-[200px] cursor-pointer"
                        onClick={() => handleSelect(connection)}
                      >
                        <div className="content-stretch flex flex-col items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
                          {/* Image section with sprite positioning */}
                          <div className="h-[108px] relative shrink-0 w-[107px]">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img 
                                alt={connection.name} 
                                className="absolute max-w-none" 
                                src={imgConnection}
                                style={connection.imageStyle}
                              />
                            </div>
                          </div>
                          
                          {/* Label section */}
                          <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[73px] items-start py-[8px] relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border-[#d1d1d1] border-solid border-t inset-0 pointer-events-none" />
                            <div className="h-[56px] relative shrink-0 w-full">
                              <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
                                <p 
                                  className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-h-px min-w-px overflow-hidden relative text-[18px] text-black text-ellipsis w-full whitespace-pre-wrap"
                                  style={{ fontVariationSettings: "'wdth' 100" }}
                                >
                                  {connection.name}
                                </p>
                              </div>
                            </div>
                            
                            {/* Arrow up icon for long names */}
                            {connection.hasArrow && (
                              <button className="absolute right-[4px] bottom-[5px] overflow-clip size-[32px] cursor-pointer">
                                <div className="absolute inset-[12.5%_18.75%]">
                                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
                                    <path d={svgPaths.p1b21d500} fill="#3E3D40" />
                                  </svg>
                                </div>
                              </button>
                            )}
                          </div>
                          
                          {/* Star icon */}
                          <button
                            onClick={(e) => toggleFavorite(e, connection.id)}
                            className="absolute right-[4px] top-[4px] overflow-clip size-[32px] hover:opacity-70 transition-opacity cursor-pointer z-10"
                          >
                            <div className="absolute inset-[6.25%_4%]">
                              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29.44 28">
                                <path d={svgPaths.p38b95000} fill={connection.favorited ? "#00ADEF" : "#B0B1B3"} />
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
