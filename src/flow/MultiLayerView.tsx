import { Suspense } from "react";
import { Patient } from "../components/PatientList";
import Header from "../components/Header";
import { MultiLayerOption2 } from "../components/MultiLayerOption2";
import { ToolbarView } from "../components/ToolbarView";
import ScanProgressBar from "../imports/ScanProgressBar";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import JawModelScene from "../components/jaw-viewer/JawModelScene";

interface ScannedLayer {
  id: string;
  label: string;
  type: "treatment" | "bite" | "pre-treatment" | "additional";
  scannedJaws: {
    upper: boolean;
    lower: boolean;
    bite: boolean;
  };
}

interface MultiLayerViewProps {
  patient: Patient | null;
  onBack: () => void;
  onHome: () => void;
  onNavigateToMultiLayer?: () => void;
  onNavigateToView?: () => void;
  onNavigateToSummary?: () => void;
  onNavigateToRx?: () => void;
  scannedLayers?: ScannedLayer[];
  scanType?: string | null;
  selectedBiteOptions?: string[];
  /** Custom canvas background color (default: #D6E7F1) */
  canvasBg?: string;
  onCanvasBgChange?: (color: string) => void;
}

export default function MultiLayerView({ patient, onBack, onHome, onNavigateToMultiLayer, onNavigateToView, onNavigateToSummary, onNavigateToRx, scannedLayers, scanType, selectedBiteOptions, canvasBg = '#D6E7F1', onCanvasBgChange }: MultiLayerViewProps) {
  // Determine if this is a crown workflow
  const isCrownWorkflow = scanType === 'crown';
  const isImplantWorkflow = scanType === 'implantPlanning';

  // Generate default complete layers for Crown and Implant-based workflows
  // This ensures the view always shows all necessary scans as if the full flow was completed
  // Memoized to prevent new array references on every render which would cause infinite update loops
  const effectiveLayers: ScannedLayer[] = useMemo(() => {
    if (isCrownWorkflow) {
      // Crown workflow ALWAYS shows the complete model regardless of scan state
      // Both pre-treatment and treatment have upper + lower fully available
      return [
        {
          id: 'default-pretreatment',
          label: 'Pre-treatment',
          type: 'pre-treatment' as const,
          scannedJaws: { upper: true, lower: true, bite: false },
        },
        {
          id: 'default-treatment',
          label: 'Treatment scan',
          type: 'treatment' as const,
          scannedJaws: { upper: true, lower: true, bite: false },
        },
      ];
    }

    if (isImplantWorkflow) {
      // Implant-based workflow ALWAYS shows the complete model regardless of scan state
      // Same pattern as Crown: hardcoded layers, no merging with scanned data
      return [
        {
          id: 'default-pretreatment',
          label: 'Pre-treatment',
          type: 'pre-treatment' as const,
          scannedJaws: { upper: true, lower: true, bite: false },
        },
        {
          id: 'default-treatment',
          label: 'Treatment scan',
          type: 'treatment' as const,
          scannedJaws: { upper: true, lower: true, bite: false },
        },
        {
          id: 'default-additional',
          label: 'Emergence profile',
          type: 'additional' as const,
          scannedJaws: { upper: false, lower: true, bite: false },
        },
      ];
    }

    // For other workflows, just use whatever was scanned
    return scannedLayers || [];
  }, [isCrownWorkflow, isImplantWorkflow, scannedLayers]);
  
  // For implant-based and crown workflows, start with lower arch view selected
  const hasLowerScans = effectiveLayers.some(layer => layer.scannedJaws.lower);
  const [selectedView, setSelectedView] = useState(hasLowerScans ? 1 : 2); // 0 = upper, 1 = lower, 2 = both jaws
  const [opacityValues, setOpacityValues] = useState({ upperOpacity: 1.0, lowerOpacity: 1.0 });
  
  // Track active tool from toolbar (1=Review, 2=Occlusogram, 3=Margin Line, 4=Prep QC, 5=Trim)
  const [activeTool, setActiveTool] = useState<number | null>(null);
  
  // When a tool is active, only show treatment scan (hide pre-treatment and additional)
  const isToolActive = activeTool !== null;
  
  // Prep QC (tool 4) is special - shows both pre-treatment and treatment layers
  const isPrepQCActive = activeTool === 4;

  const prepQCVariant = 1 as const;
  
  // Trim (tool 5) is special - shows layer selection
  const isTrimActive = activeTool === 5;
  const [trimSelectedLayer, setTrimSelectedLayer] = useState<'pre-treatment' | 'treatment'>('treatment');
  
  // Initialize layer states with default values based on scannedLayers
  const [layerStates, setLayerStates] = useState<{
    pretreatment?: { upper: number; lower: number; upperVisible: boolean; lowerVisible: boolean };
    treatment?: { upper: number; lower: number; upperVisible: boolean; lowerVisible: boolean };
    additional?: { upper: number; lower: number; upperVisible: boolean; lowerVisible: boolean };
  }>(() => {
    const initialStates: {
      pretreatment?: { upper: number; lower: number; upperVisible: boolean; lowerVisible: boolean };
      treatment?: { upper: number; lower: number; upperVisible: boolean; lowerVisible: boolean };
      additional?: { upper: number; lower: number; upperVisible: boolean; lowerVisible: boolean };
    } = {};
    
    const pretreatmentLayer = effectiveLayers.find(layer => layer.type === 'pre-treatment');
    const treatmentLayer = effectiveLayers.find(layer => layer.type === 'treatment' || layer.label === 'Treatment scan');
    const additionalLayer = effectiveLayers.find(layer => layer.type === 'additional');
    
    if (pretreatmentLayer) {
      initialStates.pretreatment = { 
        upper: 50, 
        lower: 50, 
        upperVisible: pretreatmentLayer.scannedJaws.upper ?? false, 
        lowerVisible: pretreatmentLayer.scannedJaws.lower ?? false 
      };
    }
    if (treatmentLayer) {
      initialStates.treatment = { 
        upper: 50, 
        lower: 50, 
        upperVisible: treatmentLayer.scannedJaws.upper ?? false, 
        lowerVisible: treatmentLayer.scannedJaws.lower ?? false 
      };
    }
    if (additionalLayer) {
      initialStates.additional = { 
        upper: 50, 
        lower: 50, 
        upperVisible: additionalLayer.scannedJaws.upper ?? false, 
        lowerVisible: additionalLayer.scannedJaws.lower ?? false 
      };
    }
    
    return initialStates;
  });
  // const [multiLayerOption, setMultiLayerOption] = useState<1 | 2>(1); // Backup: Option 1 available but hidden

  // Ensure additional layer state exists when Prep QC is activated
  useEffect(() => {
    if (isPrepQCActive && !layerStates.additional) {
      setLayerStates(prev => ({
        ...prev,
        additional: { upper: 50, lower: 50, upperVisible: true, lowerVisible: true }
      }));
    }
  }, [isPrepQCActive]);

  // Post-processing progress bar state
  const [postProcessingProgress, setPostProcessingProgress] = useState(0);
  const [isPostProcessing, setIsPostProcessing] = useState(true);

  // Simulate post-processing progress
  useEffect(() => {
    if (isPostProcessing) {
      const duration = 3000; // 3 seconds total processing time
      const interval = 50; // Update every 50ms
      const steps = duration / interval;
      const increment = 100 / steps;
      
      const timer = setInterval(() => {
        setPostProcessingProgress(prev => {
          const next = prev + increment;
          if (next >= 100) {
            clearInterval(timer);
            // Keep showing 100% for a moment before hiding
            setTimeout(() => setIsPostProcessing(false), 500);
            return 100;
          }
          return next;
        });
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [isPostProcessing]);

  // Handle bite click
  const handleBiteClick = useCallback((bite: string) => {
    // When a bite is clicked, switch to "both" view
    setSelectedView(2);
  }, []);

  return (
    <div className="flex flex-col h-screen w-full" style={{ background: canvasBg }}>
      <Header 
        activeSteps={{ search: true }}
        onStepToggle={(step) => {
          if (step === 'email') {
            onNavigateToSummary?.();
          } else if (step === 'rx') {
            onNavigateToRx?.();
          } else if (step === 'stepIcon') {
            onNavigateToMultiLayer?.();
          }
        }}
        onNavigateToRx={onNavigateToRx}
        onNavigateToScan={onNavigateToMultiLayer}
        onNavigateToView={onNavigateToView}
        onNavigateToSummary={onNavigateToSummary}
        canvasBg={canvasBg}
        onCanvasBgChange={onCanvasBgChange}
      />

      {/* Main content area */}
      <div className="flex-1 relative p-6" style={{ background: canvasBg }}>
        {/* Multi Layer Panel - Top Left, next to toolbar */}
        <div className="absolute top-4 left-4 z-10">
          <MultiLayerOption2
            onViewChange={setSelectedView}
            onSliderChange={setOpacityValues}
            onLayerStatesChange={setLayerStates}
            scannedLayers={effectiveLayers}
            isViewTab={true}
            simplifiedMode={activeTool === 1 || activeTool === 2 || activeTool === 3}
            selectedView={selectedView}
            prepQCMode={isPrepQCActive}
            prepQCVariant={prepQCVariant}
            trimMode={isTrimActive}
            onTrimLayerChange={setTrimSelectedLayer}
            selectedBiteOptions={selectedBiteOptions}
            onBiteClick={handleBiteClick}
          />
        </div>
        

        {/* Post-processing Progress Bar - Top Center, aligned with panels */}
        {isPostProcessing && (
          <div 
            className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-[264px]"
            style={{
              opacity: postProcessingProgress >= 100 ? 0 : 1,
              transition: 'opacity 0.5s ease',
            }}
          >
            <ScanProgressBar progress={postProcessingProgress} label="Post processing" />
          </div>
        )}
        
        {/* ToolbarView - Top Right */}
        <div className="absolute top-4 right-4 z-10">
          <ToolbarView onActiveToolChange={setActiveTool} />
        </div>

        {/* 3D Canvas — renders PLY jaw models based on view and layer states */}
        <div className="absolute inset-0">
          <Canvas
            camera={{ position: [0, -10, 0], fov: 35, near: 0.01, far: 1000, up: [0, 1, 0] }}
            gl={{
              antialias: true,
              alpha: true,
              preserveDrawingBuffer: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 1.0,
            }}
            style={{ touchAction: 'none', background: 'transparent' }}
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              <JawModelScene
                selectedView={selectedView}
                layerStates={layerStates}
                isToolActive={isToolActive}
                isPrepQCActive={isPrepQCActive}
                isTrimActive={isTrimActive}
                trimSelectedLayer={trimSelectedLayer}
                monochrome={activeTool === 0}
              />
            </Suspense>
          </Canvas>
        </div>

      </div>
    </div>
  );
}