"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import dynamic from "next/dynamic";

import "lenis/dist/lenis.css";

const Menu = dynamic(() => import("../components/Menu"), {
  ssr: false,
});

export default function LayoutWrapper({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    let rafId;

    function raf(time) {
      lenisRef.current?.lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      <Menu />
      <ReactLenis
        root
        ref={lenisRef}
        options={{
          duration: 2,
          easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
          lerp: 0.1,
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          smoothTouch: true,
          touchMultiplier: 2,
          autoRaf: false,
        }}
      >
        {children}
      </ReactLenis>
    </>
  );
}
