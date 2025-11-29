"use client";

import React, { useRef, useEffect } from "react";
import { useLenis } from "lenis/react";
import useResponsive from "@/hooks/useResponsive";

const lerp = (start, end, factor) => start + (end - start) * factor;

const ParallaxImage = ({
  src,
  alt,
  className,
  parallaxEnabled = true,
  top,
}) => {
  const imageRef = useRef(null);
  const bounds = useRef(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const rafId = useRef(null);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
          height: rect.height,
        };
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    const animate = () => {
      if (imageRef.current) {
        if (parallaxEnabled) {
          currentTranslateY.current = lerp(
            currentTranslateY.current,
            targetTranslateY.current,
            0.1
          );
          imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`;
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateBounds);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [parallaxEnabled]);

  useLenis(({ scroll }) => {
    if (!bounds.current || !parallaxEnabled) return;

    const relativeScroll = scroll - bounds.current.top;
    const parallaxFactor = isMobile ? 0.15 : 0.2;
    targetTranslateY.current = relativeScroll * parallaxFactor;
  });

  return (
    <img
      src={src}
      alt={alt}
      ref={imageRef}
      className={`absolute w-full h-full object-cover will-change-transform ${className}`}
      style={{
        willChange: "transform",
        transform: "translateY(0) scale(1.25)",
        top: top ? top : "0",
        left: "0",
      }}
    />
  );
};

export default ParallaxImage;
