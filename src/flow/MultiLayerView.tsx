import { Patient } from "../components/PatientList";
import Header from "../components/Header";
import { MultiLayerOption2 } from "../components/MultiLayerOption2";
import { ToolbarView } from "../components/ToolbarView";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import ScanProgressBar from "../imports/ScanProgressBar";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import implantUpperArchScan from "figma:asset/0739b756c08b73712f33f02a9c7bb00b11f87b89.png";
import implantLowerArchScan from "figma:asset/64cb500b2db813f97ee598c6ffdd80d6f5d5a1d5.png";
import implantTreatmentLowerScan from "figma:asset/646c1588e84153ab0f3a58f0c955f83f7d95b3b0.png";
import implantAdditionalLowerScan from "figma:asset/53d8f75306714da38cdb9f7814d0f84af89ca544.png";
import crownPreTreatmentUpperScan from "figma:asset/1a5bcf3da0e5c9324eb0e6ccf78bc69843e5e88e.png";
import crownPreTreatmentLowerScan from "figma:asset/febe43c81aeab5ab275db2c6ae589381ee1f8f33.png";
import crownTreatmentLowerScan from "figma:asset/24c58f3ce671456a5911284503eff6df6b81e11e.png";
import prepQcHeatmapLowerScan from "figma:asset/3e19a34b48e1330b42de2047b5fcc2a7833b11cb.png";
import additionalScanHeatmap from "../assets/Addintosl scan Heatmap.png";

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
}

export default function MultiLayerView({ patient, onBack, onHome, onNavigateToMultiLayer, onNavigateToView, onNavigateToSummary, onNavigateToRx, scannedLayers, scanType, selectedBiteOptions }: MultiLayerViewProps) {
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

  // Prep QC panel variant (1=current, 2=with radios, 3=image design)
  const [prepQCVariant, setPrepQCVariant] = useState<1 | 2 | 3>(1);
  
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
    <div className="flex flex-col h-screen w-full bg-[#D6E7F1]">
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
      />
      
      {/* Main content area */}
      <div className="flex-1 bg-[#D6E7F1] relative p-6">
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
        
        {/* Prep QC variant switcher — draggable floating panel, only visible in Prep QC mode */}
        {isPrepQCActive && (
          <motion.div
            drag
            dragMomentum={false}
            initial={{ x: 0, y: 80 }}
            className="absolute top-4 left-4 z-20 cursor-grab active:cursor-grabbing select-none"
          >
            <div className="bg-white rounded-[10px] shadow-md px-2 py-2 flex flex-col items-center gap-1"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.13)' }}
            >
              {/* Drag handle */}
              <div className="flex gap-[3px] mb-1 opacity-30">
                {[0,1,2].map(i => (
                  <div key={i} className="flex flex-col gap-[3px]">
                    <div className="w-[3px] h-[3px] rounded-full bg-[#555]" />
                    <div className="w-[3px] h-[3px] rounded-full bg-[#555]" />
                  </div>
                ))}
              </div>
              {/* Variant buttons */}
              {([1, 2, 3] as const).map(v => (
                <button
                  key={v}
                  onPointerDown={e => e.stopPropagation()}
                  onClick={() => setPrepQCVariant(v)}
                  className={`w-8 h-8 rounded-full text-[13px] font-semibold transition-colors ${
                    prepQCVariant === v
                      ? 'bg-[#00ADEF] text-white'
                      : 'bg-[#f0f0f0] text-[#818181] hover:text-black'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </motion.div>
        )}

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

        {/* Canvas area - display stacked models based on view and layer states */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]">
          {/* Lower Jaw View (selectedView === 1) - Show all lower jaw scans stacked */}
          {selectedView === 1 && (
            <>
              {/* Additional lower scan - bottom layer, behind everything */}
              {(!isToolActive || isPrepQCActive) && layerStates.additional && layerStates.additional.lowerVisible && (
                <div
                  className="absolute inset-0 transition-opacity duration-200 flex items-center justify-center"
                  style={{ opacity: layerStates.additional.lower / 100, zIndex: 1 }}
                >
                  <ImageWithFallback
                    src={additionalScanHeatmap}
                    alt="Additional scan lower"
                    className="w-full h-full object-contain"
                    style={{ marginTop: '40px' }}
                  />
                </div>
              )}

              {/* Treatment lower scan - middle layer: show when no tool, or tool active (incl. trim with treatment selected) */}
              {(!isTrimActive || trimSelectedLayer === 'treatment') && layerStates.treatment && layerStates.treatment.lowerVisible && (
                <div
                  className="absolute inset-0 transition-opacity duration-200 flex items-center justify-center"
                  style={{ opacity: (isToolActive && !isPrepQCActive) ? 1 : layerStates.treatment.lower / 100, zIndex: 2 }}
                >
                  <ImageWithFallback
                    src={isCrownWorkflow ? crownTreatmentLowerScan : implantTreatmentLowerScan}
                    alt="Treatment lower scan"
                    className={isCrownWorkflow ? "max-w-[720px] max-h-[520px] object-contain" : "w-full h-full object-contain"}
                    style={isCrownWorkflow ? { marginTop: '15%' } : { marginTop: '40px' }}
                  />
                </div>
              )}

              {/* Pre-treatment lower scan - layer 3 (above treatment lower, below uppers) */}
              {(!isToolActive || isPrepQCActive || (isTrimActive && trimSelectedLayer === 'pre-treatment')) && layerStates.pretreatment && layerStates.pretreatment.lowerVisible && (
                <div 
                  className="absolute inset-0 transition-opacity duration-200 flex items-center justify-center"
                  style={{ opacity: (isTrimActive && trimSelectedLayer === 'pre-treatment') ? 1 : layerStates.pretreatment.lower / 100, zIndex: 3 }}
                >
                  <ImageWithFallback 
                    src={isPrepQCActive ? prepQcHeatmapLowerScan : (isCrownWorkflow ? crownPreTreatmentLowerScan : implantLowerArchScan)}
                    alt="Pre-treatment lower scan"
                    className={isCrownWorkflow ? "max-w-[720px] max-h-[520px] object-contain" : "w-full h-full object-contain"}
                    style={isCrownWorkflow ? { marginTop: '15%' } : undefined}
                  />
                </div>
              )}
            </>
          )}

          {/* Upper Jaw View (selectedView === 0) - Show all upper jaw scans stacked */}
          {selectedView === 0 && (
            <>
              {/* When tool active (not Prep QC, not Trim with pre-treatment), show treatment upper at full opacity */}
              {(isToolActive && !isPrepQCActive && !(isTrimActive && trimSelectedLayer === 'pre-treatment')) ? (
                // Tool active: show treatment upper scan at full opacity
                layerStates.treatment && layerStates.treatment.upperVisible && (
                  <div 
                    className="absolute inset-0 transition-opacity duration-200 flex items-center justify-center"
                    style={{ opacity: 1 }}
                  >
                    <ImageWithFallback 
                      src={isCrownWorkflow ? crownPreTreatmentUpperScan : implantUpperArchScan}
                      alt="Treatment upper scan"
                      className={isCrownWorkflow ? "max-w-[780px] max-h-[560px] object-contain" : "max-w-[720px] max-h-[520px] object-contain"}
                    />
                  </div>
                )
              ) : (isTrimActive && trimSelectedLayer === 'pre-treatment') ? (
                // Trim with pre-treatment selected: show pre-treatment at full opacity
                layerStates.pretreatment && layerStates.pretreatment.upperVisible && (
                  <div 
                    className="absolute inset-0 transition-opacity duration-200 flex items-center justify-center"
                    style={{ opacity: 1 }}
                  >
                    <ImageWithFallback 
                      src={isCrownWorkflow ? crownPreTreatmentUpperScan : implantUpperArchScan}
                      alt="Pre-treatment upper scan"
                      className={isCrownWorkflow ? "max-w-[780px] max-h-[560px] object-contain" : "max-w-[720px] max-h-[520px] object-contain"}
                    />
                  </div>
                )
              ) : (
                // No tool active OR Prep QC active: show both with slider opacity
                <>
                  {layerStates.treatment && layerStates.treatment.upperVisible && (
                    <div 
                      className="absolute inset-0 transition-opacity duration-200 flex items-center justify-center"
                      style={{ opacity: layerStates.treatment.upper / 100, zIndex: 1 }}
                    >
                      <ImageWithFallback 
                        src={isCrownWorkflow ? crownPreTreatmentUpperScan : implantUpperArchScan}
                        alt="Treatment upper scan"
                        className={isCrownWorkflow ? "max-w-[780px] max-h-[560px] object-contain" : "max-w-[720px] max-h-[520px] object-contain"}
                      />
                    </div>
                  )}
                  {layerStates.pretreatment && layerStates.pretreatment.upperVisible && (
                    <div 
                      className="absolute inset-0 transition-opacity duration-200 flex items-center justify-center"
                      style={{ opacity: layerStates.pretreatment.upper / 100, zIndex: 2 }}
                    >
                      <ImageWithFallback 
                        src={isCrownWorkflow ? crownPreTreatmentUpperScan : implantUpperArchScan}
                        alt="Pre-treatment upper scan"
                        className={isCrownWorkflow ? "max-w-[780px] max-h-[560px] object-contain" : "max-w-[720px] max-h-[520px] object-contain"}
                      />
                    </div>
                  )}
                </>
              )}
            </>
          )}

          {/* Both Jaws View (selectedView === 2) - Show stacked layers */}
          {selectedView === 2 && (
            <>
              {/* Additional lower scan - bottom layer, behind everything */}
              {(!isToolActive || isPrepQCActive) && layerStates.additional && layerStates.additional.lowerVisible && (
                <div
                  className="absolute inset-0 transition-opacity duration-200 flex items-center justify-center"
                  style={{ opacity: layerStates.additional.lower / 100, zIndex: 1 }}
                >
                  <ImageWithFallback
                    src={additionalScanHeatmap}
                    alt="Additional scan lower"
                    className="w-full h-full object-contain"
                    style={{ marginTop: '40px' }}
                  />
                </div>
              )}

              {/* Treatment lower scan - layer 2 (below uppers) */}
              {(!isTrimActive || trimSelectedLayer === 'treatment') && layerStates.treatment && layerStates.treatment.lowerVisible && (
                <div
                  className="absolute inset-0 transition-opacity duration-200 flex items-center justify-center"
                  style={{ opacity: (isToolActive && !isPrepQCActive) ? 1 : layerStates.treatment.lower / 100, zIndex: 2 }}
                >
                  <ImageWithFallback 
                    src={isCrownWorkflow ? crownTreatmentLowerScan : implantTreatmentLowerScan}
                    alt="Treatment lower scan"
                    className={isCrownWorkflow ? "max-w-[640px] max-h-[460px] object-contain" : "w-full h-full object-contain"}
                    style={isCrownWorkflow ? { marginTop: '15%' } : { marginTop: '40px' }}
                  />
                </div>
              )}
              
              {/* Pre-treatment lower scan - layer 3 (above treatment lower, below uppers) */}
              {(!isToolActive || isPrepQCActive || (isTrimActive && trimSelectedLayer === 'pre-treatment')) && layerStates.pretreatment && layerStates.pretreatment.lowerVisible && (
                <div 
                  className="absolute inset-0 transition-opacity duration-200 flex items-center justify-center"
                  style={{ opacity: (isTrimActive && trimSelectedLayer === 'pre-treatment') ? 1 : layerStates.pretreatment.lower / 100, zIndex: 3 }}
                >
                  <ImageWithFallback 
                    src={isPrepQCActive ? prepQcHeatmapLowerScan : (isCrownWorkflow ? crownPreTreatmentLowerScan : implantLowerArchScan)}
                    alt="Pre-treatment lower scan"
                    className={isCrownWorkflow ? "max-w-[640px] max-h-[460px] object-contain" : "w-full h-full object-contain"}
                    style={isCrownWorkflow ? { marginTop: '15%' } : undefined}
                  />
                </div>
              )}

              {/* Treatment upper scan - for crown workflow (layer 4, above lowers) */}
              {isCrownWorkflow && (!isTrimActive || trimSelectedLayer === 'treatment') && layerStates.treatment && layerStates.treatment.upperVisible && (
                <div
                  className="absolute inset-0 transition-opacity duration-200 flex items-center justify-center"
                  style={{ opacity: (isToolActive && !isPrepQCActive) ? 1 : layerStates.treatment.upper / 100, zIndex: 4 }}
                >
                  <ImageWithFallback 
                    src={crownPreTreatmentUpperScan}
                    alt="Treatment upper scan"
                    className="max-w-[680px] max-h-[500px] object-contain"
                    style={{ marginTop: '-15%' }}
                  />
                </div>
              )}
              
              {/* Treatment upper scan - for implant workflow (layer 4, above lowers) */}
              {isImplantWorkflow && (!isTrimActive || trimSelectedLayer === 'treatment') && layerStates.treatment && layerStates.treatment.upperVisible && (
                <div
                  className="absolute inset-0 transition-opacity duration-200 flex items-center justify-center"
                  style={{ opacity: (isToolActive && !isPrepQCActive) ? 1 : layerStates.treatment.upper / 100, zIndex: 4 }}
                >
                  <ImageWithFallback 
                    src={implantUpperArchScan}
                    alt="Treatment upper scan"
                    className="max-w-[600px] max-h-[450px] object-contain"
                    style={{ marginTop: '-38%' }}
                  />
                </div>
              )}
              
              {/* Pre-treatment upper scan - top layer (layer 5) */}
              {(!isToolActive || isPrepQCActive || (isTrimActive && trimSelectedLayer === 'pre-treatment')) && layerStates.pretreatment && layerStates.pretreatment.upperVisible && (
                <div 
                  className="absolute inset-0 transition-opacity duration-200 flex items-center justify-center"
                  style={{ opacity: (isTrimActive && trimSelectedLayer === 'pre-treatment') ? 1 : layerStates.pretreatment.upper / 100, zIndex: 5 }}
                >
                  <ImageWithFallback 
                    src={isCrownWorkflow ? crownPreTreatmentUpperScan : implantUpperArchScan}
                    alt="Pre-treatment upper scan"
                    className={isCrownWorkflow ? "max-w-[680px] max-h-[500px] object-contain" : "max-w-[600px] max-h-[450px] object-contain"}
                    style={{ marginTop: isCrownWorkflow ? '-15%' : '-38%' }}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}