import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import CopilotScene from './CopilotScene';

interface CopilotModelViewerProps {
  children?: React.ReactNode;
}

export default function CopilotModelViewer({ children }: CopilotModelViewerProps) {
  return (
    <div className="relative w-full h-full min-h-0">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 35, near: 0.1, far: 1000 }}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.7,
        }}
        style={{ width: '100%', height: '100%', background: '#d6e7f1' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <CopilotScene>{children}</CopilotScene>
        </Suspense>
      </Canvas>
    </div>
  );
}

