"use client";

import { useEffect, useId, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GooeyText({
  text,
  as: Tag = "h2",
  className = "",
  duration = 1.2,
  blurStart = 35,
  triggerStart = "top 85%",
  keepFilter = false, // ← оставить gooey после анимации
}) {
  const textRef = useRef(null);
  const filterId = useId().replace(/:/g, "");

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const feBlur = document.querySelector(
      `#${filterId} feGaussianBlur`
    );

    if (!feBlur) return;

    // prefers-reduced-motion
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.style.opacity = 1;
      el.style.filter = "none";
      return;
    }

    const ctx = gsap.context(() => {
      // старт
      gsap.set(el, {
        opacity: 0,
        filter: `url(#${filterId})`,
        willChange: "filter, opacity",
      });

      feBlur.setAttribute("stdDeviation", blurStart);

      ScrollTrigger.create({
        trigger: el,
        start: triggerStart,
        once: true, // 🔥 важно
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            duration,
            ease: "power3.out",
          });

          gsap.to(feBlur, {
            attr: { stdDeviation: 0 },
            duration,
            ease: "power3.out",
            onComplete: () => {
              if (!keepFilter) {
                el.style.filter = "none"; // 🔥 убираем нагрузку
              }
            },
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, [filterId, duration, blurStart, triggerStart, keepFilter]);

  return (
    <>
      <Tag ref={textRef} className={className}>
        {text}
      </Tag>

      {/* SVG gooey filter */}
      <svg className="absolute w-0 h-0 overflow-hidden">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="0"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 18 -8
              "
              result="goo"
            />
            <feComposite
              in="SourceGraphic"
              in2="goo"
              operator="atop"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}