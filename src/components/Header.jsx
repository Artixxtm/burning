"use client";

import React, { Suspense, useEffect, useState } from "react";
import Model from "./Model";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerformanceMonitor,
  AdaptiveDpr,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { motion, useReducedMotion } from "framer-motion";
import StarBorder from "./StarBorder/StarBorder";
import GradientText from "./GradientText/GradientText";
import ParallaxImage from "./ParallaxImage";
import { useLenis } from "lenis/react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";
import useResponsive from "@/hooks/useResponsive";
import dynamic from "next/dynamic";

const GooeyText = dynamic(() => import("./GooeyText"), { ssr: false });

const Header = () => {
  const { isMobile } = useResponsive();
  const lenis = useLenis();
  const shouldReduceMotion = useReducedMotion();

  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (!animationComplete) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [animationComplete, lenis]);

  const handleAnimationComplete = () => setAnimationComplete(true);

  const social = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "#",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "#",
    },
    {
      name: "Behance",
      icon: <FaBehance />,
      link: "#",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      link: "#",
    },
  ];
  const stats = [
    {
      title: "Projects",
      number: 30,
      symbol: "+",
      background: "#ff3605",
      color: "white",
    },
    {
      title: "In Industry",
      number: 8,
      symbol: "YEARS",
      background: "#ffc436",
      color: "black",
    },
    {
      title: "Focused",
      number: 100,
      symbol: "%",
      background: "#999999",
      color: "white",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="w-full h-svh relative overflow-hidden bg-black">
      <div className="content py-10 sm:px-10 px-5 w-full flex flex-col relative h-auto z-2">
        <div className="w-full h-auto flex lg:flex-row flex-col justify-between xl:items-center uppercase text-white mt-10 2xl:min-h-[190px] lg:min-h-[136px] sm:min-h-[272px] min-h-[163px]">
          <GooeyText
            as="h1"
            text="Burning"
            className="z-3 relative font-main 2xl:text-[14rem] sm:text-[10rem] text-8xl leading-[85%] left-[-0.5%] opacity-0"
          />
          <div className="relative w-auto h-auto inline-flex items-center">
            <GooeyText
              as="h1"
              text="Studio"
              className="z-3 relative font-main 2xl:text-[14rem] sm:text-[10rem] text-8xl leading-[85%] xl:ml-0 ml-auto"
            />
            <GooeyText
              as="span"
              text="®"
              className="font-sans sm:text-5xl text-3xl relative -top-12"
            />
          </div>
        </div>

        <div className="lg:w-full w-fit h-auto flex lg:flex-row flex-col lg:justify-between justify-end lg:items-center gap-7.5 text-white/65 relative mt-7.5">
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.9, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="font-secondary font-regural sm:text-xl! MobileResText leading-[135%] opacity-90 text-left"
          >
            <span className="font-medium text-white">Web studio</span> that
            builds smart, sales-driven
            <br />
            websites helping you{" "}
            <span className="font-medium italic text-white">
              attract more clients
            </span>
            <br />
            and close more deals
            <br />
          </motion.p>

          <motion.button
            variants={fadeRight}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.9, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="w-fit overflow-hidden relative"
          >
            <StarBorder>
              <GradientText className="sm:text-base text-sm">
                Get a free consultation
              </GradientText>
            </StarBorder>
          </motion.button>
        </div>
      </div>

      {/* socials */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 1.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="absolute left-10 bottom-10 w-auto h-auto z-3 lg:flex hidden justify-between gap-4.5 items-center py-2.5"
      >
        <div className="w-full h-full flex items-center gap-2 rounded-[10px]">
          {social.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className="flex flex-col gap-2 p-3.5 px-4 text-white/60 bg-white/10 rounded-[10px]"
            >
              <span className="text-4xl mx-auto">{item.icon}</span>
            </Link>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 1.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        onAnimationComplete={handleAnimationComplete}
        className="absolute lg:right-10 sm:bottom-10 bottom-5 w-full lg:max-w-[420px] h-[130px] z-3 rounded-[20px] flex justify-between gap-2.5 items-center sm:py-2.5 py-4 lg:px-0 sm:px-10 px-5"
      >
        {stats.map((item, index) => (
          <div
            className="w-full h-full rounded-[10px] flex flex-col items-center justify-center gap-1"
            style={{
              backgroundColor: `${item.background}`,
              color: `${item.color}`,
            }}
            key={index}
          >
            <div className="flex w-auto items-center font-main">
              <span className="sm:text-5xl text-3xl">{item.number}</span>
              <span
                className={`${
                  item.symbol === "YEARS"
                    ? "[writing-mode:vertical-rl] text-xs ml-0"
                    : item.symbol === "+"
                    ? "text-4xl ml-0.5"
                    : "text-2xl ml-0.5"
                }`}
              >
                {item.symbol}
              </span>
            </div>
            <span className="font-secondary opacity-90 font-medium sm:text-base text-sm">
              {item.title}
            </span>
          </div>
        ))}
      </motion.div>

      <div className="w-full h-full absolute inset-0 -bottom-px z-2 bg-linear-to-t from-black to-40% to-transparent pointer-events-none"></div>
      <div className="vignette"></div>

      <ParallaxImage
        src={"/bg-2c.png"}
        alt={"bg"}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover absolute inset-0 opacity-95"
      />

      <div className="bgHero"></div>

      {/* model */}
      <div
        className={`w-full h-svh absolute top-1/2 left-1/2 -translate-1/2 flex justify-center items-center`}
      >
        {/* <video
          src="vid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-contain"
        ></video> */}
        <Canvas dpr={[1, 1.2]} camera={{ position: [0, 0, 9], fov: 40 }}>
          <PerformanceMonitor onDecline={() => console.log("FPS Down")} />
          <AdaptiveDpr pixelated />

          <ambientLight intensity={isMobile ? 0.35 : 0.5} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={isMobile ? 1.2 : 2}
          />

          <Suspense fallback={null}>
            <Model name={"burned_sword"} />
          </Suspense>

          {!isMobile && (
            <EffectComposer>
              <Bloom
                intensity={1.6}
                luminanceThreshold={0.8}
                luminanceSmoothing={0.9}
                mipmapBlur
              />
            </EffectComposer>
          )}

          {isMobile ? (
            <Environment preset="studio" resolution={256} />
          ) : (
            <Environment preset="studio" />
          )}

          {!isMobile && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          )}
        </Canvas>
      </div>
    </div>
  );
};

export default Header;
