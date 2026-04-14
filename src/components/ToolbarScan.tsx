import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CollapseButton from "../imports/CollapseButton";
import IconsMonochrome from "../imports/IconsMonochrome";
import IconsLiveFeedback from "../imports/IconsLiveFeedback";
import IconsPrepEdit from "../imports/IconsPrepEdit";
import IconsSwapScans from "../imports/IconsSwapScans";

export function ToolbarScan({ onPrepEditChange }: { onPrepEditChange?: (isOpen: boolean) => void } = {}) {
  const [selectedTool, setSelectedTool] = useState<number | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isPrepEditPanelOpen, setIsPrepEditPanelOpen] = useState(false);

  const tools = [
    { id: 0, component: IconsMonochrome, label: "Monochrome" },
    { id: 1, component: IconsLiveFeedback, label: "Feedback" },
    { id: 2, component: IconsPrepEdit, label: "Prep edit" },
    { id: 3, component: IconsSwapScans, label: "Swap arches" },
  ];

  const handleToolClick = (toolId: number) => {
    const isCurrentlyActive =
      (toolId === 2 && isPrepEditPanelOpen) ||
      (toolId !== 2 && selectedTool === toolId);

    // Close all panels first
    setIsPrepEditPanelOpen(false);
    onPrepEditChange?.(false);

    if (isCurrentlyActive) {
      // Toggling off
      setSelectedTool(null);
      onPrepEditChange?.(false);
    } else {
      // Activate clicked tool
      setSelectedTool(toolId);
      if (toolId === 2) {
        setIsPrepEditPanelOpen(true);
        onPrepEditChange?.(true);
      }
    }
  };

  const isButtonActive = (toolId: number) => {
    if (toolId === 2) return isPrepEditPanelOpen;
    return selectedTool === toolId;
  };

  return (
    <div className="flex flex-col gap-4 items-end">
      {/* Toolbar */}
      <motion.div 
        className="bg-white rounded-[8px] p-2 w-fit flex gap-2 items-center"
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
          className={`flex ${isCollapsed ? 'gap-2' : 'gap-4'} items-center`}
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
                  <div className="w-[48px] h-[48px] flex items-center justify-center">
                    <ToolComponent />
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
          className="w-[60px] self-stretch flex items-center justify-center transition-all duration-150 bg-white hover:bg-gray-50 active:scale-95 active:shadow-inner"
          style={{ borderLeft: '1px solid #d1d1d1', borderRadius: 0 }}
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
    </div>
  );
}