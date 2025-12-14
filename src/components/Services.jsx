"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useResponsive from "@/hooks/useResponsive";

const Services = () => {
  const bgRef = useRef();
  const vidContainer = useRef();
  const { isMobile } = useResponsive();

  const data = [
    {
      title: "Website Development",
    },
    {
      title: "UI/UX Design",
    },
    {
      title: "Web Development",
    },
  ];

  useLayoutEffect(() => {
    const element = document.querySelector(".horizontalSection");
    if (element && bgRef.current && vidContainer.current) {
      const horizontalScrollLength =
        element.offsetWidth - window.innerWidth + (80 - isMobile ? 40 : 0);

      gsap.set(element, { x: 0 });

      const animation = gsap.to(element, {
        x: -horizontalScrollLength,
        scrollTrigger: {
          trigger: ".services-content",
          start: "top top",
          end: `+=${horizontalScrollLength}`,
          pin: true,
          scrub: 1,
        },
      });

      const fadeInOut = gsap.to(bgRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: vidContainer.current,
          start: `top+=${horizontalScrollLength} top+=200`,
          end: `top+=${horizontalScrollLength} top`,
          scrub: true,
        },
      });

      return () => {
        animation.kill();
        fadeInOut.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div className="w-full h-screen relative sm:px-10 px-5 services-content overflow-hidden">
      <div className="w-max h-full flex justify-center items-center gap-10 relative z-1 horizontalSection">
        <div className="sm:w-[calc(100vw-80px)] w-[calc(100vw-40px)] h-auto flex items-center justify-center">
          <div className="w-auto h-auto inline-flex items-start gap-3">
            <h2 className="font-main uppercase 2xl:text-[16rem] md:text-[10rem] sm:text-8xl text-7xl">
              Services
            </h2>
            <span className="font-secondary md:text-3xl sm:text-xl opacity-75 relative md:top-8 top-1">
              [4]
            </span>
          </div>
        </div>

        {data.map((item, index) => (
          <div
            className="w-[calc(100vw-40px)] h-auto flex items-center justify-center"
            key={index}
          >
            <div className="w-[1200px] h-[65vh] bg-white backdrop-blur-lg rounded-[10px] inline-flex items-start gap-3 p-5">
              <h3 className="font-main text-5xl uppercase text-black">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-full absolute inset-0 z-2 bg-linear-to-b from-black to-10% to-transparent pointer-events-none"></div>

      <div
        className={`w-full h-svh absolute top-1/2 left-1/2 -translate-1/2 flex justify-start items-end z-[-1]`}
        ref={vidContainer}
      >
        <video
          src="/bg-services.mp4"
          autoPlay
          loop
          muted
          playsInline
          ref={bgRef}
          className="w-full h-full object-cover"
        ></video>
      </div>
    </div>
  );
};

export default Services;
