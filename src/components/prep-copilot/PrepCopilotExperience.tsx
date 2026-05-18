import { useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import CopilotModelViewer from './CopilotModelViewer';
import PrepCopilotPanel from './PrepCopilotPanel';
import { useCopilotOrchestrator } from './useCopilotOrchestrator';
import { useCameraViewAngle } from './useCameraViewAngle';

// 3D overlay components
import MarginLineOverlay from './overlays/MarginLineOverlay';
import CrownOverlay from './overlays/CrownOverlay';
import ReductionHeatmap from './overlays/ReductionHeatmap';
import InsertionPathArrow from './overlays/InsertionPathArrow';
import UndercutHighlights from './overlays/UndercutHighlights';
import GhostPreTreatment from './overlays/GhostPreTreatment';
import PrepPulseOverlay from './overlays/PrepPulseOverlay';

// HTML overlay components
import PrepQcPanel from '../PrepQcPanel';
import ViewAngleLabel from './overlays/ViewAngleLabel';

interface PrepCopilotExperienceProps {
  onClose: () => void;
  toolbarCollapsed?: boolean;
}

export default function PrepCopilotExperience({ onClose, toolbarCollapsed = true }: PrepCopilotExperienceProps) {
  const orchestrator = useCopilotOrchestrator(true);
  const { viewAngle, updateFromCamera } = useCameraViewAngle();

  const handleCameraChange = useCallback((theta: number, phi: number) => {
    updateFromCamera(theta, phi);
  }, [updateFromCamera]);

  const { activeOverlays } = orchestrator;
  const isRescan = activeOverlays.has('rescan-update');

  // Heatmap is always visible when Copilot is active (shows on the teeth immediately)
  const showHeatmap = true;

  return (
    <>
      {/* 3D Viewer with overlays */}
      <div className="absolute inset-0 z-[5]" style={{ pointerEvents: 'auto' }}>
        <CopilotModelViewer onCameraChange={handleCameraChange}>
          {/* Heatmap — always on when Copilot is active */}
          <ReductionHeatmap visible={showHeatmap} isRescan={isRescan} />
          <GhostPreTreatment visible={showHeatmap} />

          {/* Prep detection pulse */}
          <PrepPulseOverlay visible={activeOverlays.has('pulse')} />

          <MarginLineOverlay visible={activeOverlays.has('margin-line')} />
          <CrownOverlay visible={activeOverlays.has('crown')} />
          <InsertionPathArrow visible={activeOverlays.has('insertion-arrow')} />
          <UndercutHighlights visible={activeOverlays.has('undercuts')} />
        </CopilotModelViewer>

        {/* HTML overlays (positioned over the 3D canvas) */}
        {showHeatmap && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
            <PrepQcPanel />
          </div>
        )}
        <AnimatePresence>
          {activeOverlays.has('view-angle-label') && (
            <ViewAngleLabel visible={true} angle={viewAngle} />
          )}
        </AnimatePresence>
      </div>

      {/* Side Panel */}
      <PrepCopilotPanel
        onClose={onClose}
        orchestrator={orchestrator}
        viewAngle={viewAngle}
        toolbarCollapsed={toolbarCollapsed}
      />
    </>
  );
}
