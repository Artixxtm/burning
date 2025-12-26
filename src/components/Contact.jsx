"use client";

import GooeyText from "./GooeyText";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import StarBorder from "./StarBorder/StarBorder";
import GradientText from "./GradientText/GradientText";

const Contact = () => {
  return (
    <div className="w-full h-full relative sm:px-10 px-5 overflow-hidden">
      <div className="w-full sm:h-screen h-[65vh] flex flex-col items-center justify-between">
        <div className="w-full h-full flex-1 relative flex flex-col sm:pt-28 pt-8">
          <div className="w-full h-auto flex sm:flex-row flex-col sm:justify-between gap-5">
            <h2 className="font-secondary sm:text-4xl text-2xl w-full">
              <span className="text-white/50">Ready to</span> level up
              <br />
              your business?
            </h2>

            <h2 className="font-secondary sm:text-4xl text-2xl text-right w-full">
              We<span className="text-white/50">’re here to</span>
              <br />
              make it happen!
            </h2>
          </div>

          <div className="w-full h-auto flex sm:flex-row flex-col sm:justify-between sm:gap-0 gap-5 mt-16">
            <div className="flex flex-col w-auto h-auto gap-1 relative">
              <span className="font-secondary text-lg inline-flex gap-2 items-center font-light">
                <FaEnvelope size={16} className="text-[#ff3605]" />{" "}
                studio@elevengen.com
              </span>
              <span className="font-secondary text-lg inline-flex gap-2 items-center font-light">
                <FaLocationDot size={16} className="text-[#ff3605]" /> Poland,
                Radom
              </span>
            </div>

            <button className="w-fit overflow-hidden relative">
              <StarBorder>
                <GradientText className="sm:text-base text-sm">
                  Get a free consultation
                </GradientText>
              </StarBorder>
            </button>
          </div>
        </div>
        <div className="w-full h-auto inline-flex justify-between items-end gap-3">
          <GooeyText
            as="h2"
            text={"Cont"}
            triggerStart="start 95%"
            className="w-auto font-main uppercase 2xl:text-[16rem] md:text-[10rem] sm:text-8xl text-7xl"
          />
          <video
            src="/fireok.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-auto object-contain sm:max-h-[450px] max-h-20"
          ></video>
          <GooeyText
            as="h2"
            text={"Acts"}
            triggerStart="start 95%"
            className="w-auto font-main uppercase 2xl:text-[16rem] md:text-[10rem] sm:text-8xl text-7xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
