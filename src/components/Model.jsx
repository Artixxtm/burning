"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { Float, useGLTF } from "@react-three/drei";
import { useMemo, useRef } from "react";
import useResponsive from "@/hooks/useResponsive";

const Model = ({ name }) => {
  const { scene } = useGLTF(`/models/${name}.glb`);
  const { viewport } = useThree();
  const { isMobile } = useResponsive();

  const wrapperRef = useRef();
  const modelRef = useRef();

  const rotationSpeed = 0.5;

  const scale = useMemo(() => {
    if (viewport.width > 10.5) return viewport.width / 6;
    if (viewport.width > 8.5) return viewport.width / 4.9;
    if (isMobile) return viewport.width / 2.5;
    return viewport.width / 3.9;
  }, [viewport.width]);

  useFrame((state, delta) => {
    if (wrapperRef.current && isMobile) {
      const t = state.clock.elapsedTime;
      wrapperRef.current.rotation.x = Math.sin(t * rotationSpeed) * 0.2;
    }

    if (modelRef.current && !isMobile) {
      modelRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <group
      ref={wrapperRef}
      position={isMobile ? [0.55, -0.4, 0.3] : [0, 0, 0]}
      scale={scale}
    >
      <group ref={modelRef} rotation={isMobile ? [-0.65, 0, -1] : [0, 0, 0]}>
        {isMobile ? (
          <primitive
            object={scene}
            rotation={[0.9, 1.5, -0.9]}
            position={[0, -0.9, 0]}
          />
        ) : (
          <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.3}>
            <primitive
              object={scene}
              rotation={[0.9, 1.5, -0.9]}
              position={[0, -0.9, 0]}
            />
          </Float>
        )}
      </group>
    </group>
  );
};

export default Model;
