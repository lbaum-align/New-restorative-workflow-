import { useState, useEffect, useRef, useCallback } from 'react';
import type { ChatMessage, ScoreData, CommandChip } from './types';
import { AGENT_SEQUENCE, INITIAL_SCORES, RESCAN_SCORES, COMMAND_CHIPS } from './constants';

interface OrchestratorResult {
  messages: ChatMessage[];
  scores: ScoreData;
  activeOverlays: Set<string>;
  commandChips: CommandChip[];
  currentAgentStep: string | null;
  isSequenceComplete: boolean;
  isRescanning: boolean;
  triggerRescan: () => void;
  executeCommand: (chipId: string) => void;
}

export function useCopilotOrchestrator(isActive: boolean): OrchestratorResult {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [scores, setScores] = useState<ScoreData>({ ...INITIAL_SCORES });
  const [activeOverlays, setActiveOverlays] = useState<Set<string>>(new Set());
  const [commandChips, setCommandChips] = useState<CommandChip[]>([]);
  const [currentStep, setCurrentStep] = useState<string | null>(null);
  const [isSequenceComplete, setIsSequenceComplete] = useState(false);
  const [isRescanning, setIsRescanning] = useState(false);

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const stepIndexRef = useRef(0);

  const addMessage = useCallback((agentName: string, text: string) => {
    const msg: ChatMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      agentName,
      text,
      timestamp: Date.now(),
      isTyping: true,
    };
    setMessages(prev => [...prev, msg]);

    // Mark typing as done after text reveal completes
    const typingDuration = text.length * 25 + 200;
    const timer = setTimeout(() => {
      setMessages(prev =>
        prev.map(m => m.id === msg.id ? { ...m, isTyping: false } : m)
      );
    }, typingDuration);
    timersRef.current.push(timer);
  }, []);

  const activateOverlay = useCallback((overlay: string) => {
    setActiveOverlays(prev => new Set([...prev, overlay]));
  }, []);

  const deactivateOverlay = useCallback((overlay: string) => {
    setActiveOverlays(prev => {
      const next = new Set(prev);
      next.delete(overlay);
      return next;
    });
  }, []);

  // Run the agent sequence
  useEffect(() => {
    if (!isActive) {
      // Reset everything
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
      setMessages([]);
      setScores({ ...INITIAL_SCORES });
      setActiveOverlays(new Set());
      setCommandChips([]);
      setCurrentStep(null);
      setIsSequenceComplete(false);
      setIsRescanning(false);
      stepIndexRef.current = 0;
      return;
    }

    // Start with intro message
    addMessage('Prep Copilot', 'Starting comprehensive prep analysis...');

    let cumulativeDelay = 0;

    AGENT_SEQUENCE.forEach((step, idx) => {
      cumulativeDelay += step.delay;
      const stepDelay = cumulativeDelay;

      const timer = setTimeout(() => {
        setCurrentStep(step.id);
        stepIndexRef.current = idx;

        // Add chat message
        addMessage(step.agentName, step.message);

        // Activate overlay
        if (step.overlay) {
          activateOverlay(step.overlay);
        }

        // Update scores
        if (step.scores) {
          setScores(prev => ({ ...prev, ...step.scores }));
        }

        // If this step has a finite duration, add that to cumulative
        // (duration is already accounted for in the next step's delay)
      }, stepDelay);

      timersRef.current.push(timer);

      // Add the step's duration to cumulative delay for subsequent steps
      if (step.duration > 0) {
        cumulativeDelay += step.duration;
      } else if (step.duration === -1) {
        // Continuous step — add a small gap before next
        cumulativeDelay += 500;
      }
    });

    // After all steps complete, show command chips
    const completeTimer = setTimeout(() => {
      setCurrentStep(null);
      setIsSequenceComplete(true);
      addMessage('Prep Copilot', 'Analysis complete. Tap a suggestion below to explore further, or rotate the model to see details from different angles.');
      setCommandChips(COMMAND_CHIPS.map(c => ({ ...c, isNew: true })));

      // Clear "new" flag after a brief pulse
      const clearNewTimer = setTimeout(() => {
        setCommandChips(prev => prev.map(c => ({ ...c, isNew: false })));
      }, 2000);
      timersRef.current.push(clearNewTimer);
    }, cumulativeDelay + 500);

    timersRef.current.push(completeTimer);

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [isActive, addMessage, activateOverlay]);

  const triggerRescan = useCallback(() => {
    if (isRescanning) return;
    setIsRescanning(true);

    addMessage('Prep Copilot', 'New scan detected — recalculating reduction and structural analysis...');

    // Remove heatmap briefly
    deactivateOverlay('heatmap');

    const t1 = setTimeout(() => {
      // Re-add with new data
      activateOverlay('heatmap');
      activateOverlay('rescan-update');
      setScores(prev => ({ ...prev, ...RESCAN_SCORES }));
      addMessage('Prep Copilot', 'Rescan analysis complete. Prep quality has improved — reduction is now more uniform across all surfaces.');
    }, 2000);

    const t2 = setTimeout(() => {
      deactivateOverlay('rescan-update');
      setIsRescanning(false);
    }, 4000);

    timersRef.current.push(t1, t2);
  }, [isRescanning, addMessage, activateOverlay, deactivateOverlay]);

  const executeCommand = useCallback((chipId: string) => {
    setCommandChips(prev =>
      prev.map(c => c.id === chipId ? { ...c, active: !c.active } : c)
    );

    switch (chipId) {
      case 'reduction-scale':
        addMessage('Prep Copilot', 'Switching to detailed 0.1 mm step view. Drag the scale slider to adjust the visible range.');
        activateOverlay('reduction-slider');
        break;
      case 'interproximal':
        addMessage('Prep Copilot', 'Filtering reduction heatmap to interproximal surfaces only. Green indicates sufficient clearance for Zirconia restoration.');
        activateOverlay('interproximal-filter');
        break;
      case 'recalculate-crown':
        addMessage('Prep Copilot', 'Recalculating crown design with updated parameters...');
        deactivateOverlay('crown');
        const t = setTimeout(() => activateOverlay('crown'), 500);
        timersRef.current.push(t);
        break;
      case 'compare-views':
        addMessage('Prep Copilot', 'Showing side-by-side comparison of reduction analysis and crown design.');
        activateOverlay('compare-mode');
        break;
    }
  }, [addMessage, activateOverlay, deactivateOverlay]);

  return {
    messages,
    scores,
    activeOverlays,
    commandChips,
    currentAgentStep: currentStep,
    isSequenceComplete,
    isRescanning,
    triggerRescan,
    executeCommand,
  };
}
