import { Suspense, useCallback, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import CopilotScene from './CopilotScene';

interface CopilotModelViewerProps {
  onCameraChange?: (theta: number, phi: number) => void;
  children?: React.ReactNode;
}

function LoadingSpinner() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshBasicMaterial color="#009ACE" wireframe />
    </mesh>
  );
}

export default function CopilotModelViewer({ onCameraChange, children }: CopilotModelViewerProps) {
  const throttleRef = useRef(0);

  const handleCameraChange = useCallback((theta: number, phi: number) => {
    const now = performance.now();
    if (now - throttleRef.current > 100) {
      throttleRef.current = now;
      onCameraChange?.(theta, phi);
    }
  }, [onCameraChange]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, -1.5, 3.5], fov: 40, near: 0.01, far: 1000, up: [0, 1, 0] }}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.7,
        }}
        style={{ touchAction: 'none' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <CopilotScene onCameraChange={handleCameraChange}>
            {children}
          </CopilotScene>
        </Suspense>
      </Canvas>
    </div>
  );
}
