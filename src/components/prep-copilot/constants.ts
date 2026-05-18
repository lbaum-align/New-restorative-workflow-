import type { AgentStep, ScoreData, CommandChip } from './types';

export const INITIAL_SCORES: ScoreData = {
  prepStrength: null,
  undercutScore: null,
  undercutCount: null,
  undercutMax: null,
  viewAngle: '--',
  rxMaterial: 'Zirconia',
  reductionMin: null,
  reductionMax: null,
  reductionAvg: null,
  insertionAngle: null,
};

export const RESCAN_SCORES: Partial<ScoreData> = {
  prepStrength: 93,
  undercutScore: 97,
  undercutCount: 1,
  undercutMax: 0.05,
  reductionMin: 1.0,
  reductionMax: 2.0,
  reductionAvg: 1.5,
};

export const AGENT_SEQUENCE: AgentStep[] = [
  {
    id: 'prep-detection',
    agentName: 'Prep Detection',
    delay: 2000,
    duration: 3000,
    message: 'Analyzing scan... Prep detected at position #14. Highlighting preparation area.',
    overlay: 'pulse',
    scores: null,
  },
  {
    id: 'margin-line',
    agentName: 'Margin Analysis',
    delay: 1000,
    duration: 2500,
    message: 'Tracing margin line... Margin is continuous with 0.3 mm average depth. No open margins detected.',
    overlay: 'margin-line',
    scores: null,
  },
  {
    id: 'crown-design',
    agentName: 'AI Crown Design',
    delay: 1500,
    duration: 3000,
    message: 'Generating crown design based on adjacent tooth morphology and occlusal scheme...',
    overlay: 'crown',
    scores: null,
  },
  {
    id: 'reduction-calc',
    agentName: 'Reduction Analysis',
    delay: 1000,
    duration: 2000,
    message: 'Calculating material reduction across all surfaces. Minimum: 0.8 mm, Maximum: 2.1 mm, Average: 1.4 mm.',
    overlay: 'heatmap',
    scores: { reductionMin: 0.8, reductionMax: 2.1, reductionAvg: 1.4 },
  },
  {
    id: 'view-angle',
    agentName: 'View Angle Detection',
    delay: 500,
    duration: -1,
    message: 'Now tracking your viewing angle in real-time. Rotate the model to explore different surfaces.',
    overlay: 'view-angle-label',
    scores: null,
  },
  {
    id: 'prep-strength',
    agentName: 'Prep Strength',
    delay: 2000,
    duration: 2500,
    message: 'Evaluating structural integrity of the preparation... Prep strength score: 87/100 — Good.',
    overlay: null,
    scores: { prepStrength: 87 },
  },
  {
    id: 'insertion-path',
    agentName: 'Insertion Path',
    delay: 1500,
    duration: 2000,
    message: 'Computing optimal insertion path... Path deviation: 2.3° from ideal axis. Within acceptable range.',
    overlay: 'insertion-arrow',
    scores: { insertionAngle: 2.3 },
  },
  {
    id: 'undercuts',
    agentName: 'Undercut Analysis',
    delay: 1500,
    duration: 2000,
    message: 'Scanning for undercuts... Found 2 minor undercut regions (0.12 mm max depth). Undercut score: 92/100.',
    overlay: 'undercuts',
    scores: { undercutScore: 92, undercutCount: 2, undercutMax: 0.12 },
  },
];

export const COMMAND_CHIPS: CommandChip[] = [
  { id: 'reduction-scale', label: 'Show reduction at 0.1 – 2.4 mm (0.1 mm steps)', active: false },
  { id: 'interproximal', label: 'Show interproximal reduction for Zirconia', active: false },
  { id: 'recalculate-crown', label: 'Recalculate crown design', active: false },
  { id: 'compare-views', label: 'Compare reduction vs. crown design', active: false },
];

// Pre-baked margin line points (normalized coords on the upper jaw model)
// These form a closed loop around a simulated prep margin on tooth #14
export const MARGIN_LINE_POINTS: [number, number, number][] = [
  [-0.8, 0.2, -0.3],
  [-0.7, 0.35, -0.25],
  [-0.55, 0.4, -0.15],
  [-0.4, 0.38, -0.05],
  [-0.3, 0.3, 0.05],
  [-0.25, 0.2, 0.1],
  [-0.3, 0.1, 0.05],
  [-0.4, 0.05, -0.05],
  [-0.55, 0.03, -0.15],
  [-0.7, 0.08, -0.25],
  [-0.8, 0.2, -0.3], // close the loop
];

// Heatmap color ramp (reduction mm -> color)
export const HEATMAP_COLORS = [
  { threshold: 0.3, color: [0.85, 0.1, 0.1] },   // deep red - insufficient
  { threshold: 0.5, color: [1.0, 0.3, 0.1] },    // red-orange
  { threshold: 0.7, color: [1.0, 0.55, 0.1] },   // orange
  { threshold: 0.9, color: [1.0, 0.8, 0.0] },    // yellow
  { threshold: 1.1, color: [0.7, 0.9, 0.0] },    // yellow-green
  { threshold: 1.3, color: [0.2, 0.85, 0.2] },   // green - good
  { threshold: 1.6, color: [0.1, 0.7, 0.6] },    // teal
  { threshold: 2.0, color: [0.1, 0.5, 0.9] },    // blue
  { threshold: 2.5, color: [0.2, 0.2, 0.8] },    // deep blue - excess
] as const;

// Insertion arrow position and direction
export const INSERTION_ARROW = {
  position: [-0.5, 1.2, -0.1] as [number, number, number],
  direction: [0.05, -1, 0.02] as [number, number, number],
  length: 1.0,
};

// Prep region center (for pulse highlight and crown placement)
export const PREP_CENTER: [number, number, number] = [-0.5, 0.25, -0.1];
export const PREP_RADIUS = 0.35;

// Crown geometry parameters
export const CROWN_PARAMS = {
  position: [-0.5, 0.45, -0.1] as [number, number, number],
  radiusTop: 0.18,
  radiusBottom: 0.22,
  height: 0.35,
};

// Typing speed for chat messages (ms per character)
export const TYPING_SPEED_MS = 25;

// Panel width
export const PANEL_WIDTH = 320;
