import { useCallback } from 'react';
import CopilotModelViewer from './CopilotModelViewer';
import PrepCopilotPanel from './PrepCopilotPanel';
import { usePrepCopilotStateMachine } from './usePrepCopilotStateMachine';
import { MATERIAL_THRESHOLDS } from './constants';
import type { ViewId, ZoneId } from './types';

import MarginLineOverlay from './overlays/MarginLineOverlay';
import CrownOverlay from './overlays/CrownOverlay';
import InsertionPathArrow from './overlays/InsertionPathArrow';
import UndercutHighlights from './overlays/UndercutHighlights';
import PrepPulseOverlay from './overlays/PrepPulseOverlay';
import ZoneOverlay from './overlays/ZoneOverlay';
import CopilotProgressStrip from './CopilotProgressStrip';
import ZoneHighlight from './overlays/ZoneHighlight';

interface PrepCopilotExperienceProps {
  onClose: () => void;
  toolbarCollapsed?: boolean;
}

export default function PrepCopilotExperience({ onClose, toolbarCollapsed = true }: PrepCopilotExperienceProps) {
  const { state, setActiveView, setSelectedMaterial, setSelectedZone, statusText } = usePrepCopilotStateMachine(true);

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
    <div className="absolute inset-0 z-[15]">
      <div className="absolute inset-0" style={{ pointerEvents: 'auto' }}>
        <CopilotModelViewer>
          {/* Zone-specific reduction analysis on molar */}
          {(phase === 'analyzing' || phase === 'complete') && (
            <group>
              {/* Occlusal surface (top of tooth) */}
              {(selectedZone === 'occlusal' || selectedZone === null) && (
                <>
                  <mesh position={[0.4, -0.05, -0.15]}>
                    <sphereGeometry args={[0.04]} />
                    <meshBasicMaterial color="#ff3333" transparent opacity={0.9} />
                  </mesh>
                  <mesh position={[0.42, -0.06, -0.12]}>
                    <sphereGeometry args={[0.03]} />
                    <meshBasicMaterial color="#ff9933" transparent opacity={0.8} />
                  </mesh>
                </>
              )}
              
              {/* Buccal surface (cheek side) */}
              {selectedZone === 'buccal' && (
                <>
                  <mesh position={[0.32, -0.08, -0.15]}>
                    <sphereGeometry args={[0.035]} />
                    <meshBasicMaterial color="#33ff33" transparent opacity={0.9} />
                  </mesh>
                  <mesh position={[0.3, -0.1, -0.18]}>
                    <sphereGeometry args={[0.025]} />
                    <meshBasicMaterial color="#ff9933" transparent opacity={0.8} />
                  </mesh>
                </>
              )}
              
              {/* Lingual surface (tongue side) */}
              {selectedZone === 'lingual' && (
                <>
                  <mesh position={[0.48, -0.08, -0.15]}>
                    <sphereGeometry args={[0.035]} />
                    <meshBasicMaterial color="#ff9933" transparent opacity={0.9} />
                  </mesh>
                  <mesh position={[0.5, -0.1, -0.12]}>
                    <sphereGeometry args={[0.025]} />
                    <meshBasicMaterial color="#33ff33" transparent opacity={0.8} />
                  </mesh>
                </>
              )}
              
              {/* Mesial surface (front of tooth) */}
              {selectedZone === 'mesial' && (
                <>
                  <mesh position={[0.4, -0.08, -0.08]}>
                    <sphereGeometry args={[0.03]} />
                    <meshBasicMaterial color="#33ff33" transparent opacity={0.9} />
                  </mesh>
                  <mesh position={[0.38, -0.1, -0.05]}>
                    <sphereGeometry args={[0.02]} />
                    <meshBasicMaterial color="#ff9933" transparent opacity={0.8} />
                  </mesh>
                </>
              )}
              
              {/* Distal surface (back of tooth) */}
              {selectedZone === 'distal' && (
                <>
                  <mesh position={[0.4, -0.08, -0.22]}>
                    <sphereGeometry args={[0.03]} />
                    <meshBasicMaterial color="#ff9933" transparent opacity={0.9} />
                  </mesh>
                  <mesh position={[0.42, -0.1, -0.25]}>
                    <sphereGeometry args={[0.02]} />
                    <meshBasicMaterial color="#33ff33" transparent opacity={0.8} />
                  </mesh>
                </>
              )}
            </group>
          )}
          
          <PrepPulseOverlay visible={showPulse} />
          <MarginLineOverlay visible={activeView === 'margin'} />
          <InsertionPathArrow visible={activeView === 'insertion'} />
          <UndercutHighlights visible={activeView === 'undercuts'} />
          <ZoneOverlay visible={activeView === 'zones'} selectedZone={selectedZone} onZoneClick={handleZoneSelect} />
          <ZoneHighlight visible={activeView === 'zones'} selectedZone={selectedZone} />
          <CrownOverlay visible={activeView === 'crown'} />
        </CopilotModelViewer>

        <CopilotProgressStrip
          phase={phase}
          progress={state.overallProgress}
          statusText={statusText}
        />
      </div>

      <PrepCopilotPanel
        onClose={onClose}
        state={state}
        statusText={statusText}
        onViewChange={handleViewChange}
        onMaterialChange={setSelectedMaterial}
        onZoneSelect={handleZoneSelect}
        toolbarCollapsed={toolbarCollapsed}
      />
    </div>
  );
}
