"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { Float, useGLTF } from "@react-three/drei";
import { useMemo, useRef } from "react";
import useResponsive from "@/hooks/useResponsive";

const Model = ({ name }) => {
  const { scene } = useGLTF(`/models/${name}.glb`);
  const { viewport } = useThree();
  const { isMobile } = useResponsive();

  const modelRef = useRef();

  const rotationSpeed = isMobile ? 0.15 : 0.5;

  const scale = useMemo(() => {
    if (viewport.width > 10.5) return viewport.width / 6;
    if (viewport.width > 8.5) return viewport.width / 4.9;
    if (isMobile) return viewport.width / 2.5;
    return viewport.width / 3.9;
  }, [viewport.width]);

  useFrame((state, delta) => {
    if (modelRef.current && !isMobile) {
      modelRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <group
      ref={modelRef}
      position={isMobile ? [0.55, -0.4, 0.3] : [0, 0, 0]}
      rotation={isMobile ? [-0.65,0,-1] : [0,0,0]}
      scale={scale}
    >
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
  );
};

export default Model;
