"use client";

import GooeyText from "./GooeyText";

const Contact = () => {
  return (
    <div className="w-full h-full relative sm:px-10 px-5 overflow-hidden pb-10">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-auto h-auto inline-flex items-start gap-3">
          <GooeyText
            as="h2"
            text={"Contact"}
            className="w-full font-main uppercase 2xl:text-[16rem] md:text-[10rem] sm:text-8xl text-7xl"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
