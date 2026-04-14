import { useState } from "react";
import svgPaths from "../imports/svg-9582p975d3";
import editSvgPaths from "../imports/svg-ue0l5wuxe6";
import imgImage8 from "figma:asset/9fc98949f904edb334a67827da5dd102bb3d721a.png";
import RxDetailView from "../imports/Rx-1136-6763";
import { EditImplantModal } from "./ImplantBasedModal";

function RecordOutline() {
  return (
    <div className="relative shrink-0 size-[16px] z-[3]" data-name="Record outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Record outline">
          <rect fill="white" height="14" rx="7" width="14" x="1" y="1" />
          <rect height="14" rx="7" stroke="#ED6464" strokeWidth="2" width="14" x="1" y="1" />
          <g id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#ed6464] content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] relative rounded-[32px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(62,61,64,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <RecordOutline />
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-white z-[2]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg font-['Roboto',sans-serif] leading-[24px] text-[14px]">Implant based</p>
      </div>
    </div>
  );
}

function Frame8({ tooth }: { tooth: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        {tooth}
      </p>
      <Badge />
    </div>
  );
}

function Frame18({ tooth }: { tooth: string }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame8 tooth={tooth} />
    </div>
  );
}

function Delete({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      className="relative shrink-0 size-[40px] cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Delete"
      onClick={onClick}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Delete">
          <g id="Shape">
            <path d="M17.5 15H15V30H17.5V15Z" fill="#3E3D40" />
            <path d="M25 15H22.5V30H25V15Z" fill="#3E3D40" />
            <path d={svgPaths.p2b381a00} fill="#3E3D40" />
            <path d="M25 2.5H15V5H25V2.5Z" fill="#3E3D40" />
          </g>
        </g>
      </svg>
    </button>
  );
}

function Frame16({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[60px]">
      <Delete onClick={onClick} />
    </div>
  );
}

function OpenInNew() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Open in new">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g clipPath="url(#clip0_1126_4573)" id="Open in new">
          <g id="Vector" />
          <path d={svgPaths.pdf52780} fill="#3E3D40" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1126_4573">
            <rect fill="white" height="60" width="60" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame19({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame16 onClick={onClick} />
      <OpenInNew />
    </div>
  );
}

function Frame17({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame19 onClick={onClick} />
    </div>
  );
}

function Frame10({ tooth, onDelete }: { tooth: string; onDelete?: () => void }) {
  return (
    <div className="h-[64px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[24px] pr-[8px] relative size-full">
          <Frame18 tooth={tooth} />
          <Frame17 onClick={onDelete} />
        </div>
      </div>
    </div>
  );
}

function Frame9({ tooth, onDelete }: { tooth: string; onDelete?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center pt-[24px] relative shrink-0 w-full">
      <Frame10 tooth={tooth} onDelete={onDelete} />
      <div className="h-0 relative shrink-0 w-full px-[24px]">
        <div className="absolute left-[24px] right-[24px] top-0">
          <svg className="block w-full h-[1px]" fill="none" preserveAspectRatio="none" viewBox="0 0 522 1">
            <line id="Line 1" stroke="#E0E0E0" x1="0" x2="522" y1="0.5" y2="0.5" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component01Item({ active }: { active?: boolean }) {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[12px] relative shrink-0" data-name="01 Item">
      <div aria-hidden="true" className={`absolute ${active ? 'border-[#009ace] border-b-2' : 'border-[rgba(0,0,0,0.09)] border-b'} border-solid inset-0 pointer-events-none`} />
      <p className={`css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 ${active ? 'text-[#3e3d40]' : 'text-[#939598]'} text-[18px] text-center`} style={{ fontVariationSettings: "'wdth' 100" }}>
        Recents
      </p>
    </div>
  );
}

function Component01Item1({ active }: { active?: boolean }) {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[12px] relative shrink-0" data-name="01 Item">
      <div aria-hidden="true" className={`absolute ${active ? 'border-[#009ace] border-b-2' : 'border-[rgba(0,0,0,0.09)] border-b'} border-solid inset-0 pointer-events-none`} />
      <p className={`css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 ${active ? 'text-[#3e3d40]' : 'text-[#939598]'} text-[18px] text-center`} style={{ fontVariationSettings: "'wdth' 100" }}>
        Favorites
      </p>
    </div>
  );
}

function Component01Item2({ active }: { active?: boolean }) {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[12px] relative shrink-0" data-name="01 Item">
      <div aria-hidden="true" className={`absolute ${active ? 'border-[#009ace] border-b-2' : 'border-[rgba(0,0,0,0.09)] border-b'} border-solid inset-0 pointer-events-none`} />
      <p className={`css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 ${active ? 'text-[#3e3d40]' : 'text-[#939598]'} text-[18px] text-center`} style={{ fontVariationSettings: "'wdth' 100" }}>
        Library
      </p>
    </div>
  );
}

function Component02Group() {
  const [activeTab, setActiveTab] = useState<'recents' | 'favorites' | 'library'>('recents');
  
  return (
    <div className="content-stretch flex items-start pb-[24px] pt-[8px] relative shrink-0" data-name="02 Group">
      <button onClick={() => setActiveTab('recents')} className="flex-1">
        <Component01Item active={activeTab === 'recents'} />
      </button>
      <button onClick={() => setActiveTab('favorites')} className="flex-1">
        <Component01Item1 active={activeTab === 'favorites'} />
      </button>
      <button onClick={() => setActiveTab('library')} className="flex-1">
        <Component01Item2 active={activeTab === 'library'} />
      </button>
    </div>
  );
}

function Frame({ title }: { title: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <p className="css-4hzbpn font-['Roboto:Bold',sans-serif] font-bold leading-[28px] overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-ellipsis w-full" dir="ltr" style={{ fontVariationSettings: "'wdth' 100" }}>
          {title}
        </p>
      </div>
    </div>
  );
}

function Edit({ onClick }: { onClick?: (e: React.MouseEvent) => void }) {
  return (
    <div
      className="absolute right-[8px] size-[32px] top-[8px] z-10 cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Edit"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.(e as any);
        }
      }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Edit">
          <g id="Vector">
            <path d="M30 26H2V28H30V26Z" fill="#0067AC" />
            <path d={editSvgPaths.p3bc04400} fill="#0067AC" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4({ title }: { title: string }) {
  return (
    <div className="bg-white content-stretch flex flex-col min-h-[80px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
      <Frame title={title} />
    </div>
  );
}

function ImplantBasedCard({ title, image, isSelected, onClick, onEditClick }: { title: string; image?: string; isSelected?: boolean; onClick?: () => void; onEditClick?: (e: React.MouseEvent) => void }) {
  return (
    <button 
      className="bg-[#eef9fd] relative rounded-[8px] shrink-0 flex-1 min-w-0 cursor-pointer hover:opacity-90 transition-opacity text-left" 
      data-name="Implant based card"
      onClick={onClick}
    >
      {isSelected && <Edit onClick={onEditClick} />}
      <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip pt-[12px] relative rounded-[inherit] w-full">
        <div className="h-[70px] relative shrink-0 w-[68px]" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={image || imgImage8} />
        </div>
        <Frame4 title={title} />
      </div>
      <div aria-hidden="true" className={`absolute ${isSelected ? 'border-[4px] border-[#00adef] inset-[-4px] rounded-[12px]' : 'border border-[#d1d1d1] inset-0 rounded-[8px]'} border-solid pointer-events-none`} />
    </button>
  );
}

function Frame12({ selectedCardId, onCardSelect, onEditClick }: { selectedCardId: string | null; onCardSelect: (id: string) => void; onEditClick: (e: React.MouseEvent) => void }) {
  return (
    <div className="content-stretch flex items-start gap-[12px] relative shrink-0 w-full">
      <ImplantBasedCard 
        title="Straumann® Group · 2.9 mm · BioAbutment" 
        isSelected={selectedCardId === 'card-1'}
        onClick={() => onCardSelect('card-1')}
        onEditClick={onEditClick}
      />
      <ImplantBasedCard 
        title="Straumann® Group · 2.9 mm · BioAbutment" 
        isSelected={selectedCardId === 'card-2'}
        onClick={() => onCardSelect('card-2')}
        onEditClick={onEditClick}
      />
    </div>
  );
}

function Frame15({ selectedCardId, onCardSelect, onEditClick }: { selectedCardId: string | null; onCardSelect: (id: string) => void; onEditClick: (e: React.MouseEvent) => void }) {
  return (
    <div className="content-stretch flex items-start gap-[12px] relative shrink-0 w-full">
      <ImplantBasedCard 
        title="Straumann® Group · 2.9 mm · BioAbutment" 
        isSelected={selectedCardId === 'card-3'}
        onClick={() => onCardSelect('card-3')}
        onEditClick={onEditClick}
      />
      <ImplantBasedCard 
        title="Straumann® Group · 2.9 mm · BioAbutment" 
        isSelected={selectedCardId === 'card-4'}
        onClick={() => onCardSelect('card-4')}
        onEditClick={onEditClick}
      />
    </div>
  );
}

function Frame13({ selectedCardId, onCardSelect, onEditClick }: { selectedCardId: string | null; onCardSelect: (id: string) => void; onEditClick: (e: React.MouseEvent) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame12 selectedCardId={selectedCardId} onCardSelect={onCardSelect} onEditClick={onEditClick} />
      <Frame15 selectedCardId={selectedCardId} onCardSelect={onCardSelect} onEditClick={onEditClick} />
    </div>
  );
}

function Frame14({ selectedCardId, onCardSelect, onEditClick }: { selectedCardId: string | null; onCardSelect: (id: string) => void; onEditClick: (e: React.MouseEvent) => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pb-[8px] px-[24px] relative w-full">
        <Component02Group />
        <Frame13 selectedCardId={selectedCardId} onCardSelect={onCardSelect} onEditClick={onEditClick} />
      </div>
    </div>
  );
}

function AddEmpty() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add empty">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Add empty">
          <path d={svgPaths.p209700} fill="#0067AC" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      className="content-stretch flex gap-[12px] h-[48px] items-center justify-center min-w-[108px] px-[20px] py-[22px] relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Button"
      onClick={onClick}
    >
      <AddEmpty />
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0067ac] text-[0px] text-center tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[28px] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Add restoration & crown info
        </p>
      </div>
    </button>
  );
}

function Frame11({ tooth, onDelete, onAddInfo, selectedCardId, onCardSelect, onEditClick }: { tooth: string; onDelete?: () => void; onAddInfo?: () => void; selectedCardId: string | null; onCardSelect: (id: string) => void; onEditClick: (e: React.MouseEvent) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full h-full">
      <Frame9 tooth={tooth} onDelete={onDelete} />
      <div className="flex-1 overflow-y-auto w-full">
        <Frame14 selectedCardId={selectedCardId} onCardSelect={onCardSelect} onEditClick={onEditClick} />
      </div>
      <div className="w-full px-[24px] py-[16px]">
        <Button onClick={onAddInfo} />
      </div>
    </div>
  );
}

interface DetailPanelImplantBasedProps {
  tooth?: string;
  onDelete?: () => void;
  onAddInfo?: () => void;
  onEditModeChange?: (isEditMode: boolean) => void;
  isEditMode?: boolean;
}

export default function DetailPanelImplantBased({ 
  tooth = "Tooth 46,47",
  onDelete,
  onAddInfo,
  onEditModeChange,
  isEditMode: externalIsEditMode
}: DetailPanelImplantBasedProps) {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [localIsEditMode, setLocalIsEditMode] = useState(false);
  const [showEditImplantModal, setShowEditImplantModal] = useState(false);
  
  // If parent provides isEditMode prop, use it. Otherwise use local state.
  const isEditMode = externalIsEditMode ?? localIsEditMode;

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card selection when clicking edit
    // Open the EditImplantModal instead of switching to edit mode
    setShowEditImplantModal(true);
  };

  const handleBackFromEdit = () => {
    // If controlled by parent, notify parent. Otherwise update local state.
    if (onEditModeChange) {
      onEditModeChange(false);
    } else {
      setLocalIsEditMode(false);
    }
  };
  
  // Extract tooth numbers from the tooth string (e.g., "Tooth 32,33" -> ["32", "33"])
  const selectedTeeth = tooth.replace(/Tooth\s*/i, '').split(',').map(t => t.trim());
  
  return (
    <>
      <div className="bg-white relative size-full rounded-[8px] flex flex-col overflow-hidden" data-name="DetailPanelImplantBased">
        {isEditMode ? (
          <div className="content-stretch flex flex-col items-center relative flex-1 min-h-0">
            <RxDetailView selectedTeeth={selectedTeeth} />
          </div>
        ) : (
          <div className="content-stretch flex flex-col items-center relative flex-1 min-h-0">
            <Frame11 
              tooth={tooth} 
              onDelete={onDelete} 
              onAddInfo={onAddInfo}
              selectedCardId={selectedCardId}
              onCardSelect={setSelectedCardId}
              onEditClick={handleEditClick}
            />
          </div>
        )}
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      
      {/* Edit Implant Modal */}
      {showEditImplantModal && (
        <EditImplantModal
          teeth={selectedTeeth}
          onClose={() => setShowEditImplantModal(false)}
          onDone={() => setShowEditImplantModal(false)}
        />
      )}
    </>
  );
}