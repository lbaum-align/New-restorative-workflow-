import { motion } from 'framer-motion';
import CopilotPanelHeader from './CopilotPanelHeader';
import CopilotViewSwitcher from './CopilotViewSwitcher';
import CopilotFindingCard from './CopilotFindingCard';
import CopilotActionBar from './CopilotActionBar';
import { PANEL_WIDTH } from './constants';
import type { PrepCopilotState, ViewId, MaterialType, ZoneId } from './types';

interface PrepCopilotPanelProps {
  onClose: () => void;
  state: PrepCopilotState;
  statusText: string;
  onViewChange: (view: ViewId) => void;
  onMaterialChange: (material: MaterialType) => void;
  onZoneSelect: (zone: ZoneId) => void;
  toolbarCollapsed?: boolean;
}

export default function PrepCopilotPanel({
  onClose,
  state,
  statusText,
  onViewChange,
  onMaterialChange,
  onZoneSelect,
  toolbarCollapsed = true,
}: PrepCopilotPanelProps) {
  const { activeView, analysisProgress, overallProgress, selectedMaterial, selectedZone, findings, zoneReductions } = state;
  const currentFinding = activeView ? findings[activeView] : null;

  const panelTop = toolbarCollapsed ? 16 + 76 + 8 : 16 + 100 + 8;

  return (
    <motion.div
      initial={{ x: PANEL_WIDTH }}
      animate={{ x: 0 }}
      exit={{ x: PANEL_WIDTH }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="absolute z-[45] flex flex-col bg-white shadow-[-4px_0_16px_rgba(0,0,0,0.1)] rounded-[8px] overflow-hidden"
      style={{
        width: PANEL_WIDTH,
        right: 16,
        bottom: 16,
        top: panelTop,
        transition: 'top 0.25s cubic-bezier(0,0,1,1)',
      }}
    >
      <CopilotPanelHeader
        onClose={onClose}
        selectedMaterial={selectedMaterial}
        onMaterialChange={onMaterialChange}
        statusText={statusText || undefined}
      />

      <CopilotViewSwitcher
        activeView={activeView}
        analysisProgress={analysisProgress}
        onViewChange={onViewChange}
      />

      <CopilotFindingCard
        activeView={activeView}
        finding={currentFinding}
        zoneReductions={zoneReductions}
        selectedZone={selectedZone}
        onZoneSelect={onZoneSelect}
      />

      <CopilotActionBar
        activeView={activeView}
        analysisProgress={analysisProgress}
        overallProgress={overallProgress}
        onViewChange={onViewChange}
      />
    </motion.div>
  );
}
