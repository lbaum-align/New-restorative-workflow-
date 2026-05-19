export type ViewId = 'margin' | 'reduction' | 'insertion' | 'undercuts' | 'zones' | 'crown';

export type MaterialType = 'bruxzir-esthetic' | 'bruxzir-full-strength';

export type CopilotPhase = 'idle' | 'detecting' | 'detected' | 'zooming' | 'analyzing' | 'ready' | 'viewing';

export type ZoneId = 'occlusal' | 'buccal' | 'lingual' | 'mesial' | 'distal';

export type AnalysisStatus = 'pending' | 'running' | 'complete';

export type FindingStatus = 'pass' | 'warning' | 'fail';

export interface MaterialThresholds {
  ideal: number;
  min: number;
}

export interface ZoneReduction {
  zone: ZoneId;
  measured: number;
  target: number;
  status: FindingStatus;
}

export interface ViewFinding {
  title: string;
  area?: string;
  measurement?: string;
  target?: string;
  status: FindingStatus;
  statusLabel: string;
  recommendation: string;
}

export interface PrepCopilotState {
  phase: CopilotPhase;
  activeView: ViewId | null;
  analysisProgress: Record<ViewId, AnalysisStatus>;
  overallProgress: number;
  selectedMaterial: MaterialType;
  selectedZone: ZoneId | null;
  findings: Record<ViewId, ViewFinding>;
  zoneReductions: ZoneReduction[];
}

export type ViewAngleLabel =
  | 'Occlusal'
  | 'Buccal'
  | 'Lingual'
  | 'Mesial'
  | 'Distal'
  | 'Interproximal';

export interface CameraPreset {
  theta: number;
  phi: number;
  radius: number;
}
