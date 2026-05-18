import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import type { ModelBounds } from './types';

interface RevealMaterialProps {
  coverageTexture: THREE.DataTexture;
  bounds: ModelBounds;
}

export default function RevealMaterial({ coverageTexture, bounds }: RevealMaterialProps) {
  const matRef = useRef<THREE.MeshPhysicalMaterial>(null);

  const uniformsRef = useRef<{
    uCoverage: { value: THREE.DataTexture };
    uBBoxMin: { value: THREE.Vector2 };
    uBBoxMax: { value: THREE.Vector2 };
  } | null>(null);

  useEffect(() => {
    const mat = matRef.current;
    if (!mat) return;

    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uCoverage = { value: coverageTexture };
      shader.uniforms.uBBoxMin = { value: new THREE.Vector2(bounds.minX, bounds.minZ) };
      shader.uniforms.uBBoxMax = { value: new THREE.Vector2(bounds.maxX, bounds.maxZ) };

      uniformsRef.current = shader.uniforms as any;

      shader.fragmentShader = `
        uniform sampler2D uCoverage;
        uniform vec2 uBBoxMin;
        uniform vec2 uBBoxMax;
        varying vec3 vLocalPos;
      ` + shader.fragmentShader;

      shader.vertexShader = `
        varying vec3 vLocalPos;
      ` + shader.vertexShader;

      shader.vertexShader = shader.vertexShader.replace(
        '#include <worldpos_vertex>',
        `
        #include <worldpos_vertex>
        vLocalPos = transformed;
        `
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <dithering_fragment>',
        `
        #include <dithering_fragment>

        vec2 coverageUV = (vLocalPos.xz - uBBoxMin) / (uBBoxMax - uBBoxMin);
        coverageUV = clamp(coverageUV, 0.0, 1.0);

        float coverage = texture2D(uCoverage, coverageUV).r;
        float reveal = smoothstep(0.08, 0.45, coverage);

        // Ghost: translucent white-blue tint
        vec3 ghostColor = vec3(0.90, 0.93, 0.96);

        // Solid: full material with slight enhancement
        vec3 solidColor = gl_FragColor.rgb * 1.05 + vec3(0.0, 0.01, 0.005);

        gl_FragColor.rgb = mix(ghostColor, solidColor, reveal);
        gl_FragColor.a = mix(0.18, 1.0, reveal);
        `
      );
    };

    mat.needsUpdate = true;
  }, [coverageTexture, bounds]);

  useFrame(() => {
    if (uniformsRef.current) {
      uniformsRef.current.uCoverage.value = coverageTexture;
    }
  });

  return (
    <meshPhysicalMaterial
      ref={matRef}
      vertexColors={true}
      color={new THREE.Color(0xc8c8c0)}
      roughness={0.35}
      metalness={0.02}
      side={THREE.DoubleSide}
      clearcoat={0.4}
      clearcoatRoughness={0.25}
      reflectivity={0.5}
      envMapIntensity={0.6}
      ior={1.45}
      sheen={0.1}
      sheenRoughness={0.4}
      sheenColor={new THREE.Color(0xe8e8e0)}
      transparent={true}
      depthWrite={true}
    />
  );
}
