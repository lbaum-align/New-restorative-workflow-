import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CollapseButton from "../imports/CollapseButton";
import IconsMonochrome from "../imports/IconsMonochrome";
import IconsLiveFeedback from "../imports/IconsLiveFeedback";
import IconsPrepEdit from "../imports/IconsPrepEdit";
import IconsSwapScans from "../imports/IconsSwapScans";
import IconsUndo from "../imports/IconsUndo";
import PrepCopilotButton from "./prep-copilot/PrepCopilotButton";
import { UndoToast, useUndoToast } from "./UndoToast";
import type { ScanSnapshot } from "../hooks/useUndoHistory";

// ─── Hidden-menu icon assets (each icon is a separate PNG) ───────────────────
import imgDisableAutoCleanup from "../assets/hidden-menu/icon-disable-auto-cleanup.png";
import imgDeleteSegment       from "../assets/hidden-menu/icon-delete-segment.png";
import imgTrim                from "../assets/hidden-menu/icon-trim.png";
import imgApplianceScan       from "../assets/hidden-menu/icon-appliance-scan.png";

// Each icon as an individual, self-contained component
const IconDisableAutoCleanup = () => (
  <img src={imgDisableAutoCleanup} alt="Disable Auto Cleanup" width={48} height={49} style={{ objectFit: "contain" }} />
);

const IconDeleteSegment = () => (
  <img src={imgDeleteSegment} alt="Delete Segment" width={48} height={46} style={{ objectFit: "contain" }} />
);

const IconTrim = () => (
  <img src={imgTrim} alt="Trim" width={48} height={50} style={{ objectFit: "contain" }} />
);

const IconApplianceScan = () => (
  <img src={imgApplianceScan} alt="Appliance Scan" width={48} height={47} style={{ objectFit: "contain" }} />
);

// ─── Hidden menu tool definitions ────────────────────────────────────────────
const HIDDEN_MENU_TOOLS = [
  { id: "segment",  label: "Delete Segment", Icon: IconDeleteSegment       },
  { id: "trim",     label: "Trim",           Icon: IconTrim                },
  { id: "appliance",label: "Appliance Scan", Icon: IconApplianceScan       },
  { id: "cleanup",  label: "Auto-cleanup",   Icon: IconDisableAutoCleanup  },
] as const;

// Scan Assist icon: target/crosshair with wand hint
const IconScanAssist = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="10" stroke="#3E3D40" strokeWidth="2" />
    <circle cx="22" cy="22" r="4" fill="#3E3D40" />
    <line x1="22" y1="4" x2="22" y2="10" stroke="#3E3D40" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="34" x2="22" y2="40" stroke="#3E3D40" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="22" x2="10" y2="22" stroke="#3E3D40" strokeWidth="2" strokeLinecap="round" />
    <line x1="34" y1="22" x2="40" y2="22" stroke="#3E3D40" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ─── Props ────────────────────────────────────────────────────────────────────
interface ToolbarScanProps {
  onPrepEditChange?: (isOpen: boolean) => void;
  onCopilotChange?: (isActive: boolean) => void;
  onCollapseChange?: (isCollapsed: boolean) => void;
  onAnyToolActiveChange?: (isActive: boolean) => void;
  onMonochromeChange?: (isMonochrome: boolean) => void;
  onUndoPanelOpenChange?: (isOpen: boolean, closeHandler?: () => void) => void;
  undoState?: {
    canUndo: boolean;
    canRedo: boolean;
    stepInfo: string;
    lastLabel: string;
    past: ScanSnapshot[];
    future: ScanSnapshot[];
  };
  onUndo?: (action: "undo" | "redo" | "accept") => void;
  undoVariant?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  hideCopilot?: boolean;
  copilotActive?: boolean;
  /**
   * 1 = "+" button opens flyout panel (inline, rounded)
   * 2 = "···" button opens flyout panel (inline, rounded)
   * 3 = "+" button with divider (like collapse button), collapse button has no divider
   */
  menuOption?: 1 | 2 | 3;
  showScanAssistButton?: boolean;
  scanAssistEnabled?: boolean;
  onScanAssistChange?: (v: boolean) => void;
  scanAssistOption?: 1 | 2 | 3;
}

export function ToolbarScan({
  onPrepEditChange,
  onCopilotChange,
  onCollapseChange,
  onAnyToolActiveChange,
  onMonochromeChange,
  onUndoPanelOpenChange,
  undoState,
  onUndo,
  undoVariant = 1,
  hideCopilot = false,
  copilotActive,
  menuOption = 1,
  showScanAssistButton = false,
  scanAssistEnabled = true,
  onScanAssistChange,
  scanAssistOption,
}: ToolbarScanProps = {}) {
  const [selectedTool, setSelectedTool] = useState<number | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isPrepEditPanelOpen, setIsPrepEditPanelOpen] = useState(false);
  const [isCopilotActive, setIsCopilotActive] = useState(false);
  const [isUndoPanelOpen, setIsUndoPanelOpen] = useState(false);
  const [hiddenMenuOpen, setHiddenMenuOpen] = useState(false);
  const [activeHiddenTool, setActiveHiddenTool] = useState<string | null>(null);

  // Sync copilot button highlight when panel is closed from inside the experience
  useEffect(() => {
    if (copilotActive === false && isCopilotActive) {
      setIsCopilotActive(false);
      setSelectedTool(null);
      onAnyToolActiveChange?.(false);
    }
  }, [copilotActive]);

  // Close flyout when switching to an option that doesn't use it
  useEffect(() => {
    setHiddenMenuOpen(false);
  }, [menuOption]);

  const toast = useUndoToast();

  const tools = [
    { id: 0, component: IconsMonochrome,   label: "Monochrome"   },
    { id: 1, component: IconsLiveFeedback, label: "Feedback"     },
    { id: 2, component: IconsPrepEdit,     label: "Prep edit"    },
    { id: 3, component: IconsSwapScans,    label: "Swap arches"  },
    { id: 4, component: PrepCopilotButton, label: "Prep Copilot", isAI: true },
    { id: 5, component: IconsUndo,         label: "Undo"         },
  ].filter(t => !(t.id === 4 && hideCopilot));

  const handleToolClick = (toolId: number) => {
    const isCurrentlyActive =
      (toolId === 2 && isPrepEditPanelOpen) ||
      (toolId === 4 && isCopilotActive)     ||
      (toolId === 5 && isUndoPanelOpen)     ||
      (toolId !== 2 && toolId !== 4 && toolId !== 5 && selectedTool === toolId);

    setIsPrepEditPanelOpen(false); onPrepEditChange?.(false);
    setIsCopilotActive(false);     onCopilotChange?.(false);
    setIsUndoPanelOpen(false);     onUndoPanelOpenChange?.(false);

    if (isCurrentlyActive) {
      setSelectedTool(null);
      onAnyToolActiveChange?.(false);
      onMonochromeChange?.(false);
    } else {
      setSelectedTool(toolId);
      onAnyToolActiveChange?.(true);
      onMonochromeChange?.(toolId === 0 || toolId === 5);
      if (toolId === 2) { setIsPrepEditPanelOpen(true); onPrepEditChange?.(true); }
      else if (toolId === 4) { setIsCopilotActive(true); onCopilotChange?.(true); }
      else if (toolId === 5) { setIsUndoPanelOpen(true); onUndoPanelOpenChange?.(true, handleUndoPanelClose); }
    }
  };

  const isButtonActive = (toolId: number) => {
    if (toolId === 0) return selectedTool === 0 || isUndoPanelOpen;
    if (toolId === 2) return isPrepEditPanelOpen;
    if (toolId === 4) return isCopilotActive;
    if (toolId === 5) return isUndoPanelOpen;
    return selectedTool === toolId;
  };

  const handleUndoPanelClose = () => {
    setIsUndoPanelOpen(false);
    setSelectedTool(null);
    onAnyToolActiveChange?.(false);
    onUndoPanelOpenChange?.(false);
  };

  const handleHiddenToolClick = (toolId: string) => {
    setActiveHiddenTool(prev => prev === toolId ? null : toolId);
    setHiddenMenuOpen(false);
  };

  // ─── Shared button renderer for primary tools ─────────────────────────────
  const renderToolButton = (tool: typeof tools[number]) => {
    const isSelected = isButtonActive(tool.id);
    const isDisabled = false;
    return (
      <motion.div
        key={tool.id}
        className="flex flex-col items-center justify-center relative"
        layout initial={false}
        transition={{ duration: 0.25, ease: [0, 0, 1, 1] }}
      >
        <button
          onClick={() => !isDisabled && handleToolClick(tool.id)}
          className={`w-[60px] h-[60px] rounded-[10px] flex items-center justify-center transition-all duration-200 ${
            tool.isAI
              ? isSelected
                ? "shadow-[0_0_16px_rgba(0,200,220,0.35)]"
                : "bg-white hover:shadow-[0_0_12px_rgba(0,200,220,0.25)]"
              : isSelected
              ? "bg-[#dff5fc] border border-[#00adef]"
              : "bg-white hover:bg-gray-50"
          } active:scale-95 active:shadow-inner`}
          style={tool.isAI && isSelected ? { background: "linear-gradient(135deg, #A6E2F9 0%, #D4BCFA 100%)" } : undefined}
        >
          <div className="w-[48px] h-[48px] flex items-center justify-center">
            <tool.component />
          </div>
        </button>
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.p
              key="label"
              className={`text-[16px] leading-[20px] tracking-[-0.1504px] mt-1 ${isSelected ? "text-[#408DC1]" : "text-black"}`}
              initial={{ opacity: 0, y: -3 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.2, ease: [0, 0, 1, 1] }}
            >
              {tool.label}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  // ─── Renderer for flyout menu buttons ────────────────────────────────────
  const renderHiddenMenuButton = (tool: typeof HIDDEN_MENU_TOOLS[number]) => {
    const isActive = activeHiddenTool === tool.id;
    return (
      <motion.div
        key={tool.id}
        className="flex flex-col items-center justify-center relative"
        layout initial={false}
        transition={{ duration: 0.25, ease: [0, 0, 1, 1] }}
      >
        <button
          onClick={() => handleHiddenToolClick(tool.id)}
          className={`w-[60px] h-[60px] rounded-[10px] flex items-center justify-center transition-all duration-200 ${
            isActive ? "bg-[#dff5fc] border border-[#00adef]" : "bg-transparent hover:bg-gray-100"
          } active:scale-95 active:shadow-inner`}
        >
          <div className="w-[48px] h-[48px] flex items-center justify-center">
            <tool.Icon />
          </div>
        </button>
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.p
              key="label"
              className={`text-[16px] leading-[20px] tracking-[-0.1504px] mt-1 ${isActive ? "text-[#408DC1]" : "text-black"}`}
              initial={{ opacity: 0, y: -3 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.2, ease: [0, 0, 1, 1] }}
            >
              {tool.label}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  // ─── Renderer for the selected tool pinned inside the toolbar ─────────────
  const renderPinnedTool = (tool: typeof HIDDEN_MENU_TOOLS[number]) => (
    <motion.div
      key={`pinned-${tool.id}`}
      className="flex flex-col items-center justify-center relative"
      layout initial={false}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.2, ease: [0, 0, 1, 1] }}
    >
      <button
        onClick={() => { setActiveHiddenTool(null); }}
        className="w-[60px] h-[60px] rounded-[10px] flex items-center justify-center transition-all duration-200 bg-[#dff5fc] border border-[#00adef] active:scale-95 active:shadow-inner"
      >
        <div className="w-[48px] h-[48px] flex items-center justify-center">
          <tool.Icon />
        </div>
      </button>
      <AnimatePresence mode="wait">
        {!isCollapsed && (
          <motion.p
            key="pinned-label"
            className="text-[16px] leading-[20px] tracking-[-0.1504px] mt-1 text-[#408DC1]"
            initial={{ opacity: 0, y: -3 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.2, ease: [0, 0, 1, 1] }}
          >
            {tool.label}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );

  // ─── Flyout pill (shared by both options, just the trigger differs) ─────────
  const flyoutPill = (
    <AnimatePresence>
      {hiddenMenuOpen && (
        <motion.div
          className="bg-white rounded-[8px] p-2 flex gap-2 items-center shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          initial={{ opacity: 0, y: -8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ duration: 0.2, ease: [0, 0, 1, 1] }}
        >
          {HIDDEN_MENU_TOOLS.map(t => renderHiddenMenuButton(t))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  const plusIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke="#3E3D40" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
  const dotsIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="5"  cy="12" r="2" fill="#3E3D40" />
      <circle cx="12" cy="12" r="2" fill="#3E3D40" />
      <circle cx="19" cy="12" r="2" fill="#3E3D40" />
    </svg>
  );

  // ─── Trigger button — inline rounded variant (options 1 & 2) ─────────────
  const triggerButtonInline = (
    <motion.div
      className="flex flex-col items-center justify-center relative"
      layout initial={false}
      transition={{ duration: 0.25, ease: [0, 0, 1, 1] }}
    >
      <button
        onClick={() => setHiddenMenuOpen(o => !o)}
        className={`w-[60px] h-[60px] rounded-[10px] flex items-center justify-center transition-all duration-200 ${
          hiddenMenuOpen ? "bg-[#dff5fc] border border-[#00adef]" : "bg-white hover:bg-gray-50"
        } active:scale-95`}
      >
        <div className="w-[48px] h-[48px] flex items-center justify-center">
          {menuOption === 2 ? dotsIcon : plusIcon}
        </div>
      </button>
      <AnimatePresence mode="wait">
        {!isCollapsed && (
          <motion.p
            key="more-label"
            className={`text-[16px] leading-[20px] tracking-[-0.1504px] mt-1 ${hiddenMenuOpen ? "text-[#408DC1]" : "text-black"}`}
            initial={{ opacity: 0, y: -3 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.2 }}
          >
            More
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );

  // ─── Trigger button — divider variant (option 3), matches collapse style ──
  const triggerButtonDivider = (
    <button
      onClick={() => setHiddenMenuOpen(o => !o)}
      className={`w-[60px] self-stretch flex items-center justify-center transition-all duration-150 ${
        hiddenMenuOpen ? "bg-[#dff5fc]" : "bg-white hover:bg-gray-50"
      } active:scale-95`}
      style={{ borderLeft: "1px solid #d1d1d1", borderRadius: 0 }}
    >
      <div className="w-[48px] h-[48px] flex items-center justify-center">
        {plusIcon}
      </div>
    </button>
  );

  return (
    <div className="flex flex-col gap-2 items-end">
      {/* Option badges */}
      <div className="self-end flex gap-1">
        <div className="text-[11px] font-semibold bg-black/50 text-white px-2 py-0.5 rounded-full select-none pointer-events-none tracking-wide">
          T+{menuOption}
        </div>
        {scanAssistOption != null && (
          <div className={`text-[11px] font-semibold px-2 py-0.5 rounded-full select-none pointer-events-none tracking-wide ${scanAssistOption === 3 ? 'bg-[#009ACE] text-white' : 'bg-black/30 text-white'}`}>
            A+{scanAssistOption}
          </div>
        )}
      </div>

      {/* Main toolbar */}
      <motion.div
        className="bg-white rounded-[8px] p-2 w-fit flex gap-2 items-center shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
        layout
        transition={{ layout: { duration: 0.25, ease: [0, 0, 1, 1] } }}
      >
        <motion.div
          className={`flex ${isCollapsed ? "gap-2" : "gap-4"} items-center`}
          layout
          transition={{ duration: 0.25, ease: [0, 0, 1, 1] }}
        >
          {tools.map(t => renderToolButton(t))}
          <AnimatePresence>
            {activeHiddenTool && (() => {
              const pinned = HIDDEN_MENU_TOOLS.find(t => t.id === activeHiddenTool);
              return pinned ? renderPinnedTool(pinned) : null;
            })()}
          </AnimatePresence>
          {/* Scan Assist button — Option 3, inside the tool row */}
          {showScanAssistButton && (
            <motion.div
              className="flex flex-col items-center justify-center relative"
              layout initial={false}
              transition={{ duration: 0.25, ease: [0, 0, 1, 1] }}
            >
              <button
                onClick={() => onScanAssistChange?.(!scanAssistEnabled)}
                className={`w-[60px] h-[60px] rounded-[10px] flex items-center justify-center transition-all duration-200 ${
                  scanAssistEnabled ? "bg-[#dff5fc] border border-[#00adef]" : "bg-white hover:bg-gray-50"
                } active:scale-95 active:shadow-inner`}
              >
                <div className="w-[48px] h-[48px] flex items-center justify-center">
                  <IconScanAssist />
                </div>
              </button>
              <AnimatePresence mode="wait">
                {!isCollapsed && (
                  <motion.p
                    key="sa-label"
                    className={`text-[16px] leading-[20px] tracking-[-0.1504px] mt-1 ${scanAssistEnabled ? "text-[#408DC1]" : "text-black"}`}
                    initial={{ opacity: 0, y: -3 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    Scan Assist
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          )}
          {/* Inline trigger for options 1 & 2 */}
          {menuOption !== 3 && triggerButtonInline}
        </motion.div>

        {/* Option 3: + and collapse share a no-gap wrapper so they sit flush */}
        {menuOption === 3 ? (
          <div className="flex self-stretch">
            {triggerButtonDivider}
            <button
              onClick={() => { const next = !isCollapsed; setIsCollapsed(next); onCollapseChange?.(next); }}
              className="w-[60px] self-stretch flex items-center justify-center transition-all duration-150 bg-white hover:bg-gray-50 active:scale-95 active:shadow-inner"
              style={{ borderRadius: 0 }}
            >
              <motion.div
                className="w-8 h-8 flex items-center justify-center"
                animate={{ rotate: isCollapsed ? 180 : 0 }}
                transition={{ duration: 0.25, ease: [0, 0, 1, 1] }}
              >
                <CollapseButton />
              </motion.div>
            </button>
          </div>
        ) : (
          /* Options 1 & 2: collapse with left divider, normal gap from container */
          <button
            onClick={() => { const next = !isCollapsed; setIsCollapsed(next); onCollapseChange?.(next); }}
            className="w-[60px] self-stretch flex items-center justify-center transition-all duration-150 bg-white hover:bg-gray-50 active:scale-95 active:shadow-inner"
            style={{ borderLeft: "1px solid #d1d1d1", borderRadius: 0 }}
          >
            <motion.div
              className="w-8 h-8 flex items-center justify-center"
              animate={{ rotate: isCollapsed ? 180 : 0 }}
              transition={{ duration: 0.25, ease: [0, 0, 1, 1] }}
            >
              <CollapseButton />
            </motion.div>
          </button>
        )}
      </motion.div>

      {/* Flyout pill — shared by both options, trigger icon differs */}
      {flyoutPill}

      {/* Toast */}
      <div className="self-end">
        <UndoToast message={toast.message} visible={toast.visible} />
      </div>
    </div>
  );
}
