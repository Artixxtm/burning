"use client";

import React from "react";
import Copy from "./Copy";

const About = () => {
  return (
    <div className="w-full h-screen bg-black relative flex flex-col items-center justify-center px-5 overflow-hidden">
      <div className="w-auto h-auto relative mb-6">
        <span className="font-secondary text-base opacity-75 font-light">ABOUT US</span>
      </div>
      <div className="w-full md:max-w-[63%] relative h-auto centeredTextReveal">
        <Copy blockColor="#ff3605">
          <p className="lg:text-5xl text-2xl uppercase tracking-tight w-full font-secondary leading-[115%] text-center">
            This is <span className="text-[#ff3605] font-main relative top-px">cinematography</span> in its raw form with parctical lamps, soft
            falloff, and the oresence of grain that fills each <span className="text-[#ff3605] font-main relative top-px">corner</span> of the frame. Every room functions as a set and every posture becomes a
            composition. Light moves across <span className="text-[#ff3605] font-main relative top-px">furniture</span> and faces, shaping.
          </p>
        </Copy>
      </div>
    </div>
  );
};

export default About;