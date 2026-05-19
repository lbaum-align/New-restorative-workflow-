import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import JawMesh from './JawMesh';
import { jawModels } from './jawModelPaths';
import hdrUrl from '@/assets/lebombo_1k.hdr?url';

interface LayerState {
  upper: number;
  lower: number;
  upperVisible: boolean;
  lowerVisible: boolean;
}

interface JawModelSceneProps {
  selectedView: number;
  layerStates: {
    pretreatment?: LayerState;
    treatment?: LayerState;
    additional?: LayerState;
  };
  isToolActive: boolean;
  isPrepQCActive: boolean;
  isTrimActive: boolean;
  trimSelectedLayer: 'pre-treatment' | 'treatment';
  monochrome?: boolean;
}

const SCALE = 0.055;

const UPPER_ROT: [number, number, number] = [0.1, -0.4, 0];
const LOWER_ROT: [number, number, number] = [0, -0.4, 0];

const BOTH_UPPER_POS: [number, number, number] = [0, 1.0, 0];
const BOTH_LOWER_POS: [number, number, number] = [0, -0.5, 0];

export default function JawModelScene({
  selectedView,
  layerStates,
  isToolActive,
  isPrepQCActive,
  isTrimActive,
  trimSelectedLayer,
  monochrome = false,
}: JawModelSceneProps) {
  const isBoth = selectedView === 2;
  const showBiteModel = isBoth;
  const showUpper = selectedView === 0;
  const showLower = selectedView === 1;

  function getLayerProps(layer: 'pretreatment' | 'treatment', jaw: 'upper' | 'lower') {
    const state = layerStates[layer];
    if (!state) return { opacity: 0, visible: false };
    const isVisible = jaw === 'upper' ? state.upperVisible : state.lowerVisible;
    const sliderOpacity = (jaw === 'upper' ? state.upper : state.lower) / 100;
    if (!isVisible) return { opacity: 0, visible: false };
    if (isToolActive && !isPrepQCActive && !isTrimActive) {
      if (layer === 'treatment') return { opacity: 1, visible: true };
      return { opacity: 0, visible: false };
    }
    if (isTrimActive) {
      const trimLayer = trimSelectedLayer === 'pre-treatment' ? 'pretreatment' : 'treatment';
      if (layer === trimLayer) return { opacity: 1, visible: true };
      return { opacity: 0, visible: false };
    }
    return { opacity: sliderOpacity, visible: sliderOpacity > 0 };
  }

  const uPre = getLayerProps('pretreatment', 'upper');
  const uTrt = getLayerProps('treatment', 'upper');
  const lPre = getLayerProps('pretreatment', 'lower');
  const lTrt = getLayerProps('treatment', 'lower');

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 5]} intensity={0.9} castShadow color="#ffffff" />
      <directionalLight position={[-5, 5, -5]} intensity={0.4} color="#f0f5ff" />
      <directionalLight position={[0, -3, 5]} intensity={0.3} />
      <directionalLight position={[0, 5, -5]} intensity={0.2} />
      <pointLight position={[0, 10, 0]} intensity={0.2} color="#ffffff" />
      <pointLight position={[3, 0, 3]} intensity={0.15} color="#e6f0ff" />
      <Environment files={hdrUrl} background={false} />

      {showUpper && (
        <group position={[0, 0, 0]}>
          <JawMesh url={jawModels.upper_treatment} opacity={uTrt.opacity} visible={uTrt.visible} rotation={UPPER_ROT} scale={SCALE} monochrome={monochrome} />
          <JawMesh url={jawModels.upper_pretreatment} opacity={uPre.opacity} visible={uPre.visible} rotation={UPPER_ROT} scale={SCALE} monochrome={monochrome} />
        </group>
      )}

      {showLower && (
        <group position={[0, 0, 0]}>
          <JawMesh url={jawModels.lower_treatment} opacity={lTrt.opacity} visible={lTrt.visible} rotation={LOWER_ROT} scale={SCALE} monochrome={monochrome} />
          <JawMesh url={jawModels.lower_pretreatment} opacity={lPre.opacity} visible={lPre.visible} rotation={LOWER_ROT} scale={SCALE} monochrome={monochrome} />
        </group>
      )}

      {showBiteModel && (
        <group position={[0, 0, 0]}>
          <JawMesh url={jawModels.bite} opacity={1} visible={true} rotation={UPPER_ROT} scale={SCALE} monochrome={monochrome} />
        </group>
      )}

      <OrbitControls
        enablePan
        enableZoom
        enableRotate
        mouseButtons={{ LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN }}
        rotateSpeed={1.5}
        zoomSpeed={1.2}
        panSpeed={0.8}
        enableDamping
        dampingFactor={0.08}
        minDistance={0.5}
        maxDistance={15}
        makeDefault
      />
    </>
  );
}
