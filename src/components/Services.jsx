"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useResponsive from "@/hooks/useResponsive";
import ServiceCard from "./ServiceCard";
import GooeyText from "./GooeyText";

const Services = () => {
  const bgRef = useRef();
  const vidContainer = useRef();
  const { isMobile } = useResponsive();

  const data = [
    {
      title: "Landing Pages",
      description:
        "We architect stunning landing pages that do more than just catch the eye. We build intuitive, high-performance landings that captivate users, drive engagement, and convert your vision into value.",
      offer: [
        "Unique & Futuristic Design",
        "High Performance",
        "User Friendly",
        "Fully Responsive",
        "Modern Tech Stack",
        "Optimization",
      ],
    },
    {
      title: "Web Apps",
      description:
        "We design and develop powerful web applications beyond functionality. Scalable, secure, and performance-driven. Built to streamline workflows, engage users, and turn complex ideas into seamless products.",
      offer: [
        "Custom App Architecture",
        "Scalable & Secure",
        "High Performance",
        "Intuitive UX/UI",
        "Modern Tech Stack",
        "API & Integrations",
      ],
    },
    {
      title: "E-commerce",
      description:
        "We create high-converting e-commerce platforms that blend sleek design with seamless functionality. Our solutions make shopping effortless, drive sales, and empower your brand with scalable, reliable online stores.",
      offer: [
        "Custom Store Architecture",
        "Admin Panel",
        "Secure Payments",
        "Intuitive Shopping Experience",
        "Modern Tech Stack",
        "Performance Optimization",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "We design intuitive and visually engaging experiences that captivate users and simplify interaction. From wireframes to polished interfaces, our designs combine creativity with usability for seamless, enjoyable journeys.",
      offer: [
        "User-Centered Design",
        "Interactive Prototypes",
        "Responsive Interfaces",
        "Visual Consistency",
        "Modern Design Tools",
        "Seamless User Journeys",
      ],
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
      <div className="w-max h-full flex justify-center items-center sm:gap-10 gap-5 relative z-1 horizontalSection sm:pr-10 p-0">
        <div className="sm:w-[calc(100vw-80px)] w-[calc(100vw-40px)] h-auto flex items-center justify-center">
          <div className="w-auto h-auto inline-flex items-start gap-3">
            <GooeyText
              as="h2"
              text="Services"
              className="font-main uppercase 2xl:text-[16rem] md:text-[10rem] sm:text-8xl text-7xl"
            />
            <span className="font-secondary md:text-3xl sm:text-xl opacity-75 relative md:top-8 top-1">
              [{data.length}]
            </span>
          </div>
        </div>

        {data.map((item, index) => (
          <ServiceCard key={index} data={item} index={index} />
        ))}
      </div>

      <div className="w-full h-full absolute inset-0 -top-px z-2 bg-linear-to-b from-black to-10% to-transparent pointer-events-none"></div>

      <div
        className={`w-full h-full absolute top-1/2 left-1/2 -translate-1/2 flex justify-center items-center z-[-1]`}
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
