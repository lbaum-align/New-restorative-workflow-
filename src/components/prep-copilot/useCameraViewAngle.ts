import { useState, useCallback, useRef } from 'react';
import type { ViewAngleLabel } from './types';

export function useCameraViewAngle() {
  const [viewAngle, setViewAngle] = useState<ViewAngleLabel>('Occlusal');
  const [rawAngles, setRawAngles] = useState({ theta: 0, phi: Math.PI / 2 });
  const lastUpdate = useRef(0);

  const updateFromCamera = useCallback((theta: number, phi: number) => {
    const now = performance.now();
    if (now - lastUpdate.current < 150) return;
    lastUpdate.current = now;

    setRawAngles({ theta, phi });

    // Classify the viewing angle based on spherical coordinates
    // phi = polar angle (0 = top, PI/2 = equator, PI = bottom)
    // theta = azimuthal angle (horizontal orbit)

    // Occlusal: looking from above (phi close to 0 or close to PI)
    if (phi < 0.6 || phi > Math.PI - 0.6) {
      setViewAngle('Occlusal');
      return;
    }

    // Normalize theta to 0..2PI
    const t = ((theta % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    // Buccal: looking from the front (theta near 0 or 2PI)
    if (t < 0.6 || t > 2 * Math.PI - 0.6) {
      setViewAngle('Buccal');
      return;
    }

    // Lingual: looking from the back (theta near PI)
    if (Math.abs(t - Math.PI) < 0.6) {
      setViewAngle('Lingual');
      return;
    }

    // Mesial / Distal: looking from the sides
    if (Math.abs(t - Math.PI / 2) < 0.5) {
      setViewAngle('Mesial');
      return;
    }

    if (Math.abs(t - 3 * Math.PI / 2) < 0.5) {
      setViewAngle('Distal');
      return;
    }

    // Default: interproximal (between categories)
    setViewAngle('Interproximal');
  }, []);

  return { viewAngle, rawAngles, updateFromCamera };
}
