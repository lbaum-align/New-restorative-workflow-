import { useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import CopilotModelViewer from './CopilotModelViewer';
import PrepCopilotPanel from './PrepCopilotPanel';
import { usePrepCopilotStateMachine } from './usePrepCopilotStateMachine';
import { useCameraViewAngle } from './useCameraViewAngle';
import { MATERIAL_THRESHOLDS } from './constants';
import type { ViewId, ZoneId } from './types';

import MarginLineOverlay from './overlays/MarginLineOverlay';
import CrownOverlay from './overlays/CrownOverlay';
import ReductionHeatmap from './overlays/ReductionHeatmap';
import InsertionPathArrow from './overlays/InsertionPathArrow';
import UndercutHighlights from './overlays/UndercutHighlights';
import PrepPulseOverlay from './overlays/PrepPulseOverlay';
import ZoneOverlay from './overlays/ZoneOverlay';
import ViewAngleLabel from './overlays/ViewAngleLabel';
import CopilotProgressStrip from './CopilotProgressStrip';

interface PrepCopilotExperienceProps {
  onClose: () => void;
  toolbarCollapsed?: boolean;
}

export default function PrepCopilotExperience({ onClose, toolbarCollapsed = true }: PrepCopilotExperienceProps) {
  const { state, setActiveView, setSelectedMaterial, setSelectedZone, statusText } = usePrepCopilotStateMachine(true);
  const { viewAngle, updateFromCamera } = useCameraViewAngle();

  const handleCameraChange = useCallback((theta: number, phi: number) => {
    updateFromCamera(theta, phi);
  }, [updateFromCamera]);

  const handleViewChange = useCallback((view: ViewId) => {
    setActiveView(view);
  }, [setActiveView]);

  const handleZoneSelect = useCallback((zone: ZoneId) => {
    setSelectedZone(zone);
  }, [setSelectedZone]);

  const { activeView, selectedMaterial, selectedZone, phase } = state;
  const thresholds = MATERIAL_THRESHOLDS[selectedMaterial];
  const showPulse = phase === 'detecting' || phase === 'detected';

  return (
    <>
      {/* 3D Viewer — full screen, panel overlaps on right */}
      <div className="absolute inset-0 z-[5]" style={{ pointerEvents: 'auto' }}>
        <CopilotModelViewer onCameraChange={handleCameraChange}>
          {/* Detection pulse */}
          <PrepPulseOverlay visible={showPulse} />

          {/* Only one overlay at a time */}
          <MarginLineOverlay visible={activeView === 'margin'} />
          <ReductionHeatmap visible={activeView === 'reduction'} materialThresholds={thresholds} />
          <InsertionPathArrow visible={activeView === 'insertion'} />
          <UndercutHighlights visible={activeView === 'undercuts'} />
          <ZoneOverlay visible={activeView === 'zones'} selectedZone={selectedZone} onZoneClick={handleZoneSelect} />
          <CrownOverlay visible={activeView === 'crown'} />
        </CopilotModelViewer>

        {/* View angle label */}
        <AnimatePresence>
          {(phase === 'viewing' || phase === 'ready') && (
            <ViewAngleLabel visible={true} angle={viewAngle} />
          )}
        </AnimatePresence>

        {/* Progress strip */}
        <CopilotProgressStrip
          phase={phase}
          progress={state.overallProgress}
          statusText={statusText}
        />
      </div>

      {/* Side Panel */}
      <PrepCopilotPanel
        onClose={onClose}
        state={state}
        statusText={statusText}
        onViewChange={handleViewChange}
        onMaterialChange={setSelectedMaterial}
        onZoneSelect={handleZoneSelect}
        toolbarCollapsed={toolbarCollapsed}
      />
    </>
  );
}
