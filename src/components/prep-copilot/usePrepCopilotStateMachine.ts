import { useState, useEffect, useRef, useCallback } from 'react';
import type { ViewId, MaterialType, CopilotPhase, AnalysisStatus, ZoneId, PrepCopilotState } from './types';
import { ANALYSIS_DURATIONS, PHASE_DURATIONS, getFindings, getZoneReductions } from './constants';

const VIEW_ORDER: ViewId[] = ['margin', 'reduction', 'insertion', 'undercuts', 'zones', 'crown'];

const INITIAL_ANALYSIS: Record<ViewId, AnalysisStatus> = {
  margin: 'pending',
  reduction: 'pending',
  insertion: 'pending',
  undercuts: 'pending',
  zones: 'pending',
  crown: 'pending',
};

export interface StateMachineResult {
  state: PrepCopilotState;
  setActiveView: (view: ViewId) => void;
  setSelectedMaterial: (material: MaterialType) => void;
  setSelectedZone: (zone: ZoneId | null) => void;
  statusText: string;
}

export function usePrepCopilotStateMachine(isActive: boolean): StateMachineResult {
  const [phase, setPhase] = useState<CopilotPhase>('idle');
  const [activeView, setActiveViewState] = useState<ViewId | null>(null);
  const [analysisProgress, setAnalysisProgress] = useState<Record<ViewId, AnalysisStatus>>({ ...INITIAL_ANALYSIS });
  const [overallProgress, setOverallProgress] = useState(0);
  const [selectedMaterial, setSelectedMaterialState] = useState<MaterialType>('bruxzir-esthetic');
  const [selectedZone, setSelectedZone] = useState<ZoneId | null>(null);
  const [statusText, setStatusText] = useState('');

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const setActiveView = useCallback((view: ViewId) => {
    if (analysisProgress[view] === 'complete') {
      setActiveViewState(view);
      setPhase('viewing');
    }
  }, [analysisProgress]);

  const setSelectedMaterial = useCallback((material: MaterialType) => {
    setSelectedMaterialState(material);
  }, []);

  // Phase transitions
  useEffect(() => {
    if (!isActive) {
      clearTimers();
      setPhase('idle');
      setActiveViewState(null);
      setAnalysisProgress({ ...INITIAL_ANALYSIS });
      setOverallProgress(0);
      setSelectedZone(null);
      setStatusText('');
      return;
    }

    // Start the detection sequence
    setPhase('detecting');
    setStatusText('Analyzing scan...');

    const t1 = setTimeout(() => {
      setPhase('detected');
      setStatusText('Prep detected');
    }, PHASE_DURATIONS.detecting);

    const t2 = setTimeout(() => {
      setPhase('analyzing');
      setStatusText('Running analysis...');
      startAnalysis();
    }, PHASE_DURATIONS.detecting + PHASE_DURATIONS.detected);

    timersRef.current.push(t1, t2);

    return clearTimers;
  }, [isActive, clearTimers]);

  function startAnalysis() {
    let cumulativeDelay = 0;
    const totalDuration = VIEW_ORDER.reduce((sum, v) => sum + ANALYSIS_DURATIONS[v], 0);
    let completedDuration = 0;

    VIEW_ORDER.forEach((view, idx) => {
      // Mark as running
      const startTimer = setTimeout(() => {
        setAnalysisProgress(prev => ({ ...prev, [view]: 'running' }));
      }, cumulativeDelay);
      timersRef.current.push(startTimer);

      cumulativeDelay += ANALYSIS_DURATIONS[view];
      completedDuration += ANALYSIS_DURATIONS[view];
      const progressAtEnd = Math.round((completedDuration / totalDuration) * 100);

      // Mark as complete
      const endTimer = setTimeout(() => {
        setAnalysisProgress(prev => ({ ...prev, [view]: 'complete' }));
        setOverallProgress(progressAtEnd);

        // Auto-select first completed view
        if (idx === 0) {
          setActiveViewState('margin');
          setPhase('viewing');
          setStatusText('');
        }

        // All done
        if (idx === VIEW_ORDER.length - 1) {
          setPhase('ready');
        }
      }, cumulativeDelay);
      timersRef.current.push(endTimer);
    });
  }

  const findings = getFindings(selectedMaterial);
  const zoneReductions = getZoneReductions(selectedMaterial);

  const state: PrepCopilotState = {
    phase,
    activeView,
    analysisProgress,
    overallProgress,
    selectedMaterial,
    selectedZone,
    findings,
    zoneReductions,
  };

  return {
    state,
    setActiveView,
    setSelectedMaterial,
    setSelectedZone,
    statusText,
  };
}
