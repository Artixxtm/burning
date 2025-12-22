"use client";

import React from "react";
import Copy from "./Copy";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="w-full h-screen relative flex flex-col items-center justify-center sm:px-10 px-5 overflow-hidden">
        <div className="w-auto h-auto relative mb-6">
          <div className="font-secondary text-base opacity-75 font-light inline-flex items-center gap-2">
            <span>[</span> ABOUT US <span>]</span>
          </div>
        </div>
        <div className="w-full md:max-w-[63%] relative h-auto centeredTextReveal">
          <Copy blockColor="#ff3605">
            <p className="lg:text-5xl text-2xl uppercase tracking-tight w-full font-secondary leading-[115%] text-center">
              Crafting{" "}
              <span className="text-[#ff3605] font-main relative top-px">
                websites
              </span>{" "}
              and experiences that make you say WOAHH. Based in Poland, we
              deliver standout design and{" "}
              <span className="text-[#ff3605] font-main relative top-px">
                development
              </span>
              . Complete digital solutions that fuel real business or product{" "}
              <span className="text-[#ff3605] font-main relative top-px">
                growth
              </span>
              .
            </p>
          </Copy>
        </div>
      </div>
      <div className="w-full lg:min-h-[75vh] h-auto bg-black relative flex flex-col items-center justify-center sm:px-10 px-5 overflow-hidden">
        <div className="w-full h-auto flex lg:flex-row flex-col justify-between items-start lg:gap-4 gap-2">
          <div className="w-full h-auto relative gap-4 flex flex-col">
            <div className="w-full h-auto flex items-center lg:justify-start justify-between">
              <span className="font-secondary text-xl tracking-wider font-medium lg:block hidden">
                THEY
              </span>
              <span className="font-secondary text-lg tracking-wider font-medium lg:hidden block">
                THEY
              </span>
              <span className="font-secondary text-lg tracking-wider font-medium lg:hidden block">
                TRUST
              </span>
              <span className="font-secondary text-lg tracking-wider font-medium lg:hidden block">
                US
              </span>
            </div>
            <div className="w-full h-auto flex lg:flex-col flex-row lg:gap-4 gap-2">
              <div className="w-full xl:h-[200px] h-[150px] rounded-[10px] py-10 lg:px-10 px-5 bg-white/10 flex justify-center items-center">
                <Image
                  src={"/trust/epikor.png"}
                  alt="Epikor"
                  width={0}
                  height={0}
                  sizes="100vw"
                  draggable={false}
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
              <div className="w-full xl:h-[200px] h-[150px] rounded-[10px] py-10 lg:px-10 px-5 bg-white/10 flex justify-center items-center">
                <Image
                  src={"/trust/wo-studio.png"}
                  alt="Wo Studio"
                  width={0}
                  height={0}
                  sizes="100vw"
                  draggable={false}
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-auto relative gap-4 flex flex-col lg:mt-8">
            <div className="w-full h-auto lg:flex hidden items-center">
              <span className="font-secondary text-xl tracking-wider font-medium">
                TRUST
              </span>
            </div>
            <div className="w-full h-auto flex lg:flex-col flex-row lg:gap-4 gap-2">
              <div className="w-full xl:h-[200px] h-[150px] rounded-[10px] py-13 lg:px-10 px-5 bg-white/10 backdrop-blur-xl flex justify-center items-center">
                <Image
                  src={"/trust/codeum.png"}
                  alt="Codeum Games"
                  width={0}
                  height={0}
                  sizes="100vw"
                  draggable={false}
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
              <div className="w-full xl:h-[200px] h-[150px] rounded-[10px] py-13 lg:px-10 px-5 bg-white/10 backdrop-blur-xl flex justify-center items-center">
                <Image
                  src={"/trust/skytones.png"}
                  alt="Sky Tones"
                  width={0}
                  height={0}
                  sizes="100vw"
                  draggable={false}
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-auto relative gap-4 flex flex-col lg:mt-16">
            <div className="w-full h-auto lg:flex hidden items-center">
              <span className="font-secondary text-xl tracking-wider font-medium">
                US
              </span>
            </div>
            <div className="w-full h-auto flex lg:flex-col flex-row lg:gap-4 gap-2">
              <div className="w-full xl:h-[200px] h-[150px] rounded-[10px] py-13 lg:px-10 px-5 bg-white/10 backdrop-blur-xl flex justify-center items-center">
                <Image
                  src={"/trust/a-studio.png"}
                  alt="A Studio"
                  width={0}
                  height={0}
                  sizes="100vw"
                  draggable={false}
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
              <div className="w-full xl:h-[200px] h-[150px] rounded-[10px] py-10 lg:px-10 px-5 bg-white/10 backdrop-blur-xl flex justify-center items-center">
                <span className="font-main xl:text-7xl md:text-5xl text-3xl uppercase text-center">
                  <span className="text-[#ff3605] font-main">A</span>nd more
                  <span className="text-[#ff3605] font-main">..</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
