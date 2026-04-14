import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CollapseButton from "../imports/CollapseButton";
import IconsMonochrome from "../imports/IconsMonochrome";
import IconsIocNiri from "../imports/IconsIocNiri";
import IconsOccusgram from "../imports/IconsOccusgram";
import IconsPrepQc from "../imports/IconsPrepQc";
import IconsTrim from "../imports/IconsTrim";
import IconsMarginLine from "../imports/IconsMarginLine";
import Banner from "../imports/Banner-3318-28560";
import ReviewToolPanel from "./ReviewToolPanel";
import TrimToolPanel from "./TrimToolPanel";
import MarginLinePanel from "./MarginLinePanel";
import OcclusogramPanel from "./OcclusogramPanel";
import PrepQcPanel from "./PrepQcPanel";

interface ToolbarViewProps {
  onActiveToolChange?: (toolId: number | null) => void;
}

export function ToolbarView({ onActiveToolChange }: ToolbarViewProps = {}) {
  const [selectedTool, setSelectedTool] = useState(-1);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isTrimPanelOpen, setIsTrimPanelOpen] = useState(false);
  const [isMarginLinePanelOpen, setIsMarginLinePanelOpen] = useState(false);
  const [isPrepQcPanelOpen, setIsPrepQcPanelOpen] = useState(false);
  const [isOcclusogramPanelOpen, setIsOcclusogramPanelOpen] = useState(false);
  const [isReviewPanelOpen, setIsReviewPanelOpen] = useState(false);
  const [isPrepQcBannerVisible, setIsPrepQcBannerVisible] = useState(false);

  const tools = [
    { id: 0, component: IconsMonochrome, label: "Monochrome" },
    { id: 1, component: IconsIocNiri, label: "IOC.Niri" },
    { id: 2, component: IconsOccusgram, label: "Occlusgram" },
    { id: 3, component: IconsMarginLine, label: "Margin line" },
    { id: 4, component: IconsPrepQc, label: "Prep QC" },
    { id: 5, component: IconsTrim, label: "Trim" },
  ];

  const handleToolClick = (toolId: number) => {
    // All tools are mutually exclusive - only one can be active at a time
    
    // Determine if we're toggling off the currently active tool
    const isCurrentlyActive = 
      (toolId === 0 && selectedTool === 0) ||
      (toolId === 1 && isReviewPanelOpen) ||
      (toolId === 2 && isOcclusogramPanelOpen) ||
      (toolId === 3 && isMarginLinePanelOpen) ||
      (toolId === 4 && isPrepQcPanelOpen) ||
      (toolId === 5 && isTrimPanelOpen);

    // Close ALL panels first
    setIsReviewPanelOpen(false);
    setIsOcclusogramPanelOpen(false);
    setIsMarginLinePanelOpen(false);
    setIsPrepQcPanelOpen(false);
    setIsTrimPanelOpen(false);

    if (isCurrentlyActive) {
      // Toggling off - no tool active
      setSelectedTool(-1);
      if (onActiveToolChange) onActiveToolChange(null);
    } else {
      // Activate the clicked tool
      setSelectedTool(toolId);
      if (toolId === 1) setIsReviewPanelOpen(true);
      else if (toolId === 2) setIsOcclusogramPanelOpen(true);
      else if (toolId === 3) setIsMarginLinePanelOpen(true);
      else if (toolId === 4) {
        setIsPrepQcPanelOpen(true);
        setIsPrepQcBannerVisible(true); // Show banner when Prep QC is activated
      }
      else if (toolId === 5) setIsTrimPanelOpen(true);
      
      if (onActiveToolChange) onActiveToolChange(toolId);
    }
  };

  // Helper function to check if a button should be active
  const isButtonActive = (toolId: number) => {
    if (toolId === 0) return selectedTool === 0;
    if (toolId === 5) return isTrimPanelOpen;
    if (toolId === 3) return isMarginLinePanelOpen;
    if (toolId === 2) return isOcclusogramPanelOpen;
    if (toolId === 1) return isReviewPanelOpen;
    if (toolId === 4) return isPrepQcPanelOpen;
    return false;
  };

  return (
    <div className="flex flex-col gap-4 items-end">
      {/* Toolbar */}
      <motion.div 
        className="bg-white rounded-[8px] p-2 w-fit flex items-stretch"
        layout
        transition={{
          layout: { 
            duration: 0.25,
            ease: [0, 0, 1, 1]
          }
        }}
      >
        {/* Tool Buttons with/without Labels */}
        <motion.div
          className={`flex ${isCollapsed ? 'gap-2' : 'gap-4'} items-center pr-2`}
          layout
          transition={{
            duration: 0.25,
            ease: [0, 0, 1, 1]
          }}
        >
          {tools.map((tool, index) => {
            const ToolComponent = tool.component;
            const isSelected = isButtonActive(tool.id);
            return (
              <motion.div
                key={tool.id}
                className="flex flex-col items-center justify-center"
                layout
                initial={false}
                transition={{
                  duration: 0.25,
                  ease: [0, 0, 1, 1]
                }}
              >
                <button
                  onClick={() => handleToolClick(tool.id)}
                  className={`w-[60px] h-[60px] rounded-[10px] flex items-center justify-center transition-all duration-150 ${
                    isSelected ? 'bg-[#A6E2F9]' : 'bg-white hover:bg-gray-50'
                  } active:scale-95 active:shadow-inner`}
                >
                  {/* Inner 48x48 container for icon */}
                  <div className="w-[48px] h-[48px] flex items-center justify-center overflow-hidden relative">
                    <ToolComponent className="relative size-[48px]" />
                  </div>
                </button>
                <AnimatePresence mode="wait">
                  {!isCollapsed && (
                    <motion.p 
                      key="label"
                      className={`text-[16px] leading-[20px] tracking-[-0.1504px] mt-1 transition-colors ${
                        isSelected ? 'text-[#408DC1]' : 'text-black'
                      }`}
                      initial={{ 
                        opacity: 0, 
                        y: -3
                      }}
                      animate={{ 
                        opacity: 1, 
                        y: 0
                      }}
                      exit={{ 
                        opacity: 0, 
                        y: -3
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0, 0, 1, 1]
                      }}
                    >
                      {tool.label}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Collapse/Expand Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-[60px] flex items-center justify-center transition-all duration-150 bg-white hover:bg-gray-50 active:scale-95 active:shadow-inner rounded-none"
          style={{ borderLeft: '1px solid #d1d1d1' }}
        >
          <motion.div 
            className="w-8 h-8 flex items-center justify-center"
            animate={{ rotate: isCollapsed ? 180 : 0 }}
            transition={{
              duration: 0.25,
              ease: [0, 0, 1, 1]
            }}
          >
            <CollapseButton />
          </motion.div>
        </button>
      </motion.div>

      {/* Prep QC Banner - Shows below toolbar with 16px gap when Prep QC is active */}
      {isPrepQcPanelOpen && isPrepQcBannerVisible && (
        <div className="h-[96px]" style={{ width: '484px' }}>
          <div className="cursor-pointer" onClick={() => setIsPrepQcBannerVisible(false)}>
            <Banner />
          </div>
        </div>
      )}

      {/* Review Panel - Positioned under toolbar aligned to right */}
      {isReviewPanelOpen && (
        <div className="w-[480px] max-w-[calc(100vw-32px)]" style={{ height: 'calc(100vh - 220px - 16px)' }}>
          <ReviewToolPanel
            isExpanded={true}
            onToggleExpand={() => console.log('Toggle expand')}
            onZoomImage={(index) => console.log('Zoom image', index)}
          />
        </div>
      )}

      {/* Trim Panel - Positioned at bottom left */}
      {isTrimPanelOpen && (
        <div className="fixed bottom-4 left-4 z-50">
          <TrimToolPanel
            onClose={() => setIsTrimPanelOpen(false)}
            onTrim={() => console.log('Trim action')}
            onUndo={() => console.log('Undo action')}
          />
        </div>
      )}

      {/* Margin Line Panel - Positioned at bottom left */}
      {isMarginLinePanelOpen && (
        <div className="fixed bottom-4 left-4 z-50">
          <MarginLinePanel
            onClose={() => setIsMarginLinePanelOpen(false)}
            onTrim={() => console.log('Trim action')}
            onUndo={() => console.log('Undo action')}
          />
        </div>
      )}

      {/* Prep QC Panel - Positioned at bottom left */}
      {isPrepQcPanelOpen && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <PrepQcPanel onClose={() => setIsPrepQcPanelOpen(false)} />
        </div>
      )}

      {/* Occlusogram Panel - Positioned at center bottom */}
      {isOcclusogramPanelOpen && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <OcclusogramPanel
            onClose={() => setIsOcclusogramPanelOpen(false)}
            onTrim={() => console.log('Occlusogram action')}
            onUndo={() => console.log('Undo action')}
          />
        </div>
      )}
    </div>
  );
}