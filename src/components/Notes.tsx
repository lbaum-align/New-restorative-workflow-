import { useState } from "react";
import SendButton from "../imports/Button-3323-2037";
import svgPaths from "../imports/svg-eqjiurbr72";

interface Note {
  id: string;
  text: string;
  timestamp: Date;
  author: string;
}

interface NotesProps {
  notes?: Note[];
  onNotesChange?: (notes: Note[]) => void;
}

export default function Notes({
  notes: initialNotes = [],
  onNotesChange,
}: NotesProps = {}) {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [currentNote, setCurrentNote] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const handleSubmit = () => {
    if (currentNote.trim() === "") return;

    const newNote: Note = {
      id: Date.now().toString(),
      text: currentNote,
      timestamp: new Date(),
      author: "B, Doctor",
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    setCurrentNote("");
    onNotesChange?.(updatedNotes);
  };

  const handleNoteChange = (value: string) => {
    setCurrentNote(value);
  };

  const handleEdit = (note: Note) => {
    setEditingId(note.id);
    setEditText(note.text);
  };

  const handleSaveEdit = () => {
    if (editText.trim() === "") return;

    const updatedNotes = notes.map(note =>
      note.id === editingId ? { ...note, text: editText } : note
    );
    setNotes(updatedNotes);
    setEditingId(null);
    setEditText("");
    onNotesChange?.(updatedNotes);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const handleDelete = (id: string) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    onNotesChange?.(updatedNotes);
  };

  const formatDate = (date: Date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "Just now";
    if (minutes === 1) return "1 minute ago";
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours === 1) return "1 hour ago";
    if (hours < 24) return `${hours} hours ago`;
    if (days === 1) return "1 day ago";
    return `${days} days ago`;
  };

  return (
    <div className="bg-white relative rounded-[8px] w-full h-[580px] flex flex-col z-10" data-name="Notes">
      {/* Header */}
      <div className="bg-white px-[24px] py-[24px] shrink-0">
        <p
          className="font-['Roboto:Medium',sans-serif] font-medium leading-[30px] text-[24px] text-black"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Notes
        </p>
      </div>

      {/* Content - Scrollable List of Notes or Empty State */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {notes.length === 0 ? (
          /* Empty State */
          <div className="h-full flex flex-col items-center justify-center gap-[10px] px-[24px]">
            <div className="bg-[#ededed] rounded-full p-[20px]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M28 24H4C3.44772 24 3 24.4477 3 25V27C3 27.5523 3.44772 28 4 28H28C28.5523 28 29 27.5523 29 27V25C29 24.4477 28.5523 24 28 24Z" fill="#939598"/>
                <path d="M4 7H28V21H4V7Z" stroke="#939598" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12H24" stroke="#939598" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 16H24" stroke="#939598" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col items-center font-['Roboto:Regular',sans-serif] font-normal text-[18px] text-center leading-[28px]">
              <p className="text-[#3e3d40]" style={{ fontVariationSettings: "'wdth' 100" }}>
                No notes yet
              </p>
              <p className="text-[#939598]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Type below to add your first note
              </p>
            </div>
          </div>
        ) : (
          /* Notes List */
          <div className="px-[24px] pt-[4px] pb-[16px] flex flex-col gap-[16px]">
            {notes.map(note => (
              <div key={note.id} className="bg-[#f9f9f9] relative rounded-[8px] px-[16px] py-[8px] z-0">
                <div
                  aria-hidden="true"
                  className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]"
                />
                {editingId === note.id ? (
                  <div className="flex flex-col gap-[12px] relative z-10">
                    <textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="w-full min-h-[80px] resize-none bg-white border border-[#e0e0e0] rounded-[4px] p-[12px] outline-none font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                      autoFocus
                    />
                    <div className="flex gap-[8px] justify-end">
                      <button
                        onClick={handleCancelEdit}
                        className="px-[16px] py-[8px] rounded-[4px] font-['Roboto:Medium',sans-serif] font-medium text-[14px] text-[#696a6d] hover:bg-[#e0e0e0] transition-colors"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSaveEdit}
                        className="px-[16px] py-[8px] rounded-[4px] bg-[#009ace] font-['Roboto:Medium',sans-serif] font-medium text-[14px] text-white hover:bg-[#0088b8] transition-colors"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-[8px] relative z-10">
                    {/* Header row with author, date, time ago and action icons */}
                    <div className="flex items-center justify-between w-full">
                      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] shrink-0 text-[18px] whitespace-nowrap text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[28px]">{note.author}</p>
                      </div>
                      <div className="flex gap-[24px] items-center shrink-0">
                        <div className="flex gap-[16px] items-center shrink-0">
                          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] shrink-0 text-[#3e3d40] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="leading-[28px]">{formatDate(note.timestamp)}</p>
                          </div>
                          <div className="flex h-[20px] items-center justify-center shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
                            <div className="flex-none rotate-90">
                              <div className="h-0 relative w-[20px]">
                                <div className="absolute inset-[-1px_0_0_0]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                                    <line stroke="#3E3D40" x2="20" y1="0.5" y2="0.5" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] shrink-0 text-[#3e3d40] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="leading-[28px]">{formatTimeAgo(note.timestamp)}</p>
                          </div>
                        </div>
                        <div className="flex gap-[16px] items-center shrink-0">
                          <button
                            onClick={() => handleEdit(note)}
                            className="overflow-clip relative shrink-0 size-[32px] hover:opacity-70 transition-opacity z-20"
                            aria-label="Edit note"
                          >
                            <div className="absolute inset-[6.25%_6.25%_12.5%_6.25%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
                                <path d="M28 24H0V26H28V24Z" fill="#3E3D40" />
                                <path d={svgPaths.p83df200} fill="#3E3D40" />
                              </svg>
                            </div>
                          </button>
                          <button
                            onClick={() => handleDelete(note.id)}
                            className="overflow-clip relative shrink-0 size-[32px] hover:opacity-70 transition-opacity z-20"
                            aria-label="Delete note"
                          >
                            <div className="absolute inset-[6.25%_12.5%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
                                <path d="M10 10H8V22H10V10Z" fill="#3E3D40" />
                                <path d="M16 10H14V22H16V10Z" fill="#3E3D40" />
                                <path d={svgPaths.p1460b400} fill="#3E3D40" />
                                <path d="M16 0H8V2H16V0Z" fill="#3E3D40" />
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Note text */}
                    <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] shrink-0 text-[#939598] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[28px] whitespace-pre-wrap">{note.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input Section - Fixed at Bottom */}
      <div className="px-[24px] pt-[4px] pb-[24px] shrink-0 relative z-20">
        <div className="relative h-[160px] bg-white rounded-[4px] border border-[#f0f0f0] flex items-start">
          <textarea
            value={currentNote}
            onChange={(e) => handleNoteChange(e.target.value)}
            className="w-full h-full resize-none bg-transparent p-[16px] pr-[76px] outline-none font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[#3e3d40] text-[18px] placeholder:text-transparent focus:border-[#5fcefa] transition-colors relative z-10"
            style={{ fontVariationSettings: "'wdth' 100" }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.ctrlKey) {
                handleSubmit();
              }
            }}
          />
          {/* Send button positioned absolutely in center right */}
          <div className="absolute right-[12px] top-[16px] z-20">
            <button
              onClick={handleSubmit}
              disabled={currentNote.trim() === ""}
              className={`w-[60px] h-[60px] transition-opacity ${
                currentNote.trim() === "" ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:opacity-80"
              }`}
              type="button"
            >
              <SendButton />
            </button>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] z-0"
      />
    </div>
  );
}