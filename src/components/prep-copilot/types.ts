export interface AgentStep {
  id: string;
  agentName: string;
  delay: number;       // ms before this step starts (after previous completes)
  duration: number;    // ms this step runs (-1 = continuous)
  message: string;
  overlay: string | null;
  scores: Partial<ScoreData> | null;
}

export interface ChatMessage {
  id: string;
  agentName: string;
  text: string;
  timestamp: number;
  isTyping?: boolean;
}

export interface ScoreData {
  prepStrength: number | null;
  undercutScore: number | null;
  undercutCount: number | null;
  undercutMax: number | null;
  viewAngle: string;
  rxMaterial: string;
  reductionMin: number | null;
  reductionMax: number | null;
  reductionAvg: number | null;
  insertionAngle: number | null;
}

export interface CommandChip {
  id: string;
  label: string;
  active: boolean;
  isNew?: boolean;
}

export interface CopilotState {
  isActive: boolean;
  currentStep: string | null;
  messages: ChatMessage[];
  scores: ScoreData;
  activeOverlays: Set<string>;
  commandChips: CommandChip[];
  isSequenceComplete: boolean;
  isRescanning: boolean;
}

export type ViewAngleLabel =
  | 'Occlusal'
  | 'Buccal'
  | 'Lingual'
  | 'Mesial'
  | 'Distal'
  | 'Interproximal';
