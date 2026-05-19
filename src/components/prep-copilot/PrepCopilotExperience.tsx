import { useCallback, useState } from 'react';
import CopilotModelViewer from './CopilotModelViewer';
import PrepCopilotPanel from './PrepCopilotPanel';
import { usePrepCopilotStateMachine } from './usePrepCopilotStateMachine';
import type { ViewId, ZoneId } from './types';

import PrepPulseOverlay from './overlays/PrepPulseOverlay';
import ZoneOverlay from './overlays/ZoneOverlay';
import CopilotProgressStrip from './CopilotProgressStrip';
import PrepGeometry from './PrepGeometry';

interface PrepCopilotExperienceProps {
  onClose: () => void;
  toolbarCollapsed?: boolean;
}

export default function PrepCopilotExperience({ onClose, toolbarCollapsed = true }: PrepCopilotExperienceProps) {
  const { state, setActiveView, setSelectedMaterial, setSelectedZone, statusText } = usePrepCopilotStateMachine(true);
  const [isPrepMoveMode, setIsPrepMoveMode] = useState(false);
  // Values based on your provided screenshot
  const [prepPosition, setPrepPosition] = useState<[number, number, number]>([1.1, 0.1, 0.75]);
  const [prepRotation, setPrepRotation] = useState<[number, number, number]>([1.6, 0.8, 0.35]);
  const [prepScale, setPrepScale] = useState(4);

  const handleViewChange = useCallback((view: ViewId) => {
    setActiveView(view);
  }, [setActiveView]);

  const handleZoneSelect = useCallback((zone: ZoneId) => {
    setSelectedZone(zone);
  }, [setSelectedZone]);

  const { activeView, selectedMaterial, selectedZone, phase } = state;
  const showPulse = phase === 'detecting' || phase === 'detected';
  const reductionZone = activeView === 'reduction'
    ? (selectedZone ?? 'occlusal')
    : selectedZone;
  const showReductionAnalysis = activeView === 'reduction';
  const moveStep = 0.01;
  const rotateStep = 0.05;
  const scaleStep = 0.05;

  const nudgePrep = useCallback((dx: number, dy: number, dz: number) => {
    setPrepPosition(([x, y, z]) => [x + dx, y + dy, z + dz]);
  }, []);
  const nudgeRotation = useCallback((drx: number, dry: number, drz: number) => {
    setPrepRotation(([rx, ry, rz]) => [rx + drx, ry + dry, rz + drz]);
  }, []);
  const nudgeScale = useCallback((delta: number) => {
    setPrepScale(prev => Math.min(4, Math.max(0.3, prev + delta)));
  }, []);

  return (
    <div className="absolute inset-0 z-[15]">
      <div className="absolute left-4 top-4 z-[60] flex flex-col gap-2 rounded-lg bg-white/95 p-3 shadow-md">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold text-slate-700">Prep Move Mode</span>
          <button
            type="button"
            onClick={() => setIsPrepMoveMode(v => !v)}
            className={`rounded px-2 py-1 text-xs font-medium ${
              isPrepMoveMode ? 'bg-[#009ACE] text-white' : 'bg-slate-200 text-slate-700'
            }`}
          >
            {isPrepMoveMode ? 'ON' : 'OFF'}
          </button>
        </div>

        {isPrepMoveMode && (
          <>
            <div className="text-[11px] text-slate-600">
              {`XYZ: (${prepPosition[0].toFixed(3)}, ${prepPosition[1].toFixed(3)}, ${prepPosition[2].toFixed(3)})`}
            </div>
            <div className="text-[11px] text-slate-600">
              {`ROT: (${prepRotation[0].toFixed(2)}, ${prepRotation[1].toFixed(2)}, ${prepRotation[2].toFixed(2)})`}
            </div>
            <div className="text-[11px] text-slate-600">
              {`SCALE: ${prepScale.toFixed(2)}`}
            </div>
            <div className="grid grid-cols-3 gap-1">
              <button type="button" className="rounded bg-slate-100 px-2 py-1 text-xs" onClick={() => nudgePrep(-moveStep, 0, 0)}>X-</button>
              <button type="button" className="rounded bg-slate-100 px-2 py-1 text-xs" onClick={() => nudgePrep(0, moveStep, 0)}>Y+</button>
              <button type="button" className="rounded bg-slate-100 px-2 py-1 text-xs" onClick={() => nudgePrep(moveStep, 0, 0)}>X+</button>
              <button type="button" className="rounded bg-slate-100 px-2 py-1 text-xs" onClick={() => nudgePrep(0, 0, -moveStep)}>Z-</button>
              <button
                type="button"
                className="rounded bg-slate-100 px-2 py-1 text-xs"
                onClick={() => {
                  setPrepPosition([1.1, 0.1, 0.75]);
                  setPrepRotation([1.6, 0.8, 0.35]);
                  setPrepScale(4);
                }}
              >
                Reset
              </button>
              <button type="button" className="rounded bg-slate-100 px-2 py-1 text-xs" onClick={() => nudgePrep(0, 0, moveStep)}>Z+</button>
              <button type="button" className="col-span-3 rounded bg-slate-100 px-2 py-1 text-xs" onClick={() => nudgePrep(0, -moveStep, 0)}>Y-</button>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <button type="button" className="rounded bg-slate-100 px-2 py-1 text-xs" onClick={() => nudgeRotation(-rotateStep, 0, 0)}>Rx-</button>
              <button type="button" className="rounded bg-slate-100 px-2 py-1 text-xs" onClick={() => nudgeRotation(0, rotateStep, 0)}>Ry+</button>
              <button type="button" className="rounded bg-slate-100 px-2 py-1 text-xs" onClick={() => nudgeRotation(rotateStep, 0, 0)}>Rx+</button>
              <button type="button" className="rounded bg-slate-100 px-2 py-1 text-xs" onClick={() => nudgeRotation(0, 0, -rotateStep)}>Rz-</button>
              <button type="button" className="rounded bg-slate-100 px-2 py-1 text-xs" onClick={() => nudgeRotation(0, -rotateStep, 0)}>Ry-</button>
              <button type="button" className="rounded bg-slate-100 px-2 py-1 text-xs" onClick={() => nudgeRotation(0, 0, rotateStep)}>Rz+</button>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <button type="button" className="rounded bg-slate-100 px-2 py-1 text-xs" onClick={() => nudgeScale(-scaleStep)}>Smaller</button>
              <button type="button" className="rounded bg-slate-100 px-2 py-1 text-xs" onClick={() => nudgeScale(scaleStep)}>Bigger</button>
            </div>
          </>
        )}
      </div>

      <div className="absolute inset-0" style={{ pointerEvents: 'auto' }}>
        <CopilotModelViewer>
          {/* Realistic 3D Preparation Geometry */}
          <PrepGeometry 
            visible={true}
            selectedZone={reductionZone}
            selectedMaterial={selectedMaterial}
            showMarginLine={activeView === 'margin'}
            showReductionAnalysis={showReductionAnalysis}
            showInsertionPath={activeView === 'insertion'}
            showUndercuts={activeView === 'undercuts'}
            showCrown={activeView === 'crown'}
            prepPosition={prepPosition}
            prepRotation={prepRotation}
            prepScale={prepScale}
            showCoordinates={isPrepMoveMode}
          />
          
          <PrepPulseOverlay visible={showPulse} />
          <ZoneOverlay visible={activeView === 'reduction'} selectedZone={selectedZone} onZoneClick={handleZoneSelect} />
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
