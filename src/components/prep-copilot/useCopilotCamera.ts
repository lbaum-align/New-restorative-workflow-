import { useRef, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { CameraPreset } from './types';

interface CopilotCameraControls {
  animateTo: (preset: CameraPreset) => void;
  zoomToPrep: () => void;
}

const LERP_SPEED = 0.04;
const ARRIVAL_THRESHOLD = 0.02;

const PREP_FOCUS: CameraPreset = { theta: 0.2, phi: 0.6, radius: 2.2 };

export function useCopilotCamera(controlsRef: React.RefObject<any>): CopilotCameraControls {
  const targetRef = useRef<CameraPreset | null>(null);
  const isAnimatingRef = useRef(false);

  useFrame(() => {
    if (!isAnimatingRef.current || !targetRef.current || !controlsRef.current) return;

    const controls = controlsRef.current;
    const target = targetRef.current;

    // Get current spherical coordinates
    const offset = new THREE.Vector3();
    offset.copy(controls.object.position).sub(controls.target);
    const spherical = new THREE.Spherical().setFromVector3(offset);

    // Lerp towards target
    spherical.theta += (target.theta - spherical.theta) * LERP_SPEED;
    spherical.phi += (target.phi - spherical.phi) * LERP_SPEED;
    spherical.radius += (target.radius - spherical.radius) * LERP_SPEED;

    // Apply
    offset.setFromSpherical(spherical);
    controls.object.position.copy(controls.target).add(offset);
    controls.update();

    // Check if arrived
    const dTheta = Math.abs(target.theta - spherical.theta);
    const dPhi = Math.abs(target.phi - spherical.phi);
    const dRadius = Math.abs(target.radius - spherical.radius);
    if (dTheta < ARRIVAL_THRESHOLD && dPhi < ARRIVAL_THRESHOLD && dRadius < ARRIVAL_THRESHOLD) {
      isAnimatingRef.current = false;
      targetRef.current = null;
    }
  });

  const animateTo = useCallback((preset: CameraPreset) => {
    targetRef.current = preset;
    isAnimatingRef.current = true;
  }, []);

  const zoomToPrep = useCallback(() => {
    animateTo(PREP_FOCUS);
  }, [animateTo]);

  return { animateTo, zoomToPrep };
}
