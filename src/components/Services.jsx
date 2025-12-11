"use client";

import Image from "next/image";

const Services = () => {
  return (
    <div className="w-full h-screen relative p-10">
      <div className="w-full h-full flex justify-center items-center relative z-1">
        <div className="w-auto h-auto inline-flex items-start gap-3">
          <h2 className="font-main uppercase 2xl:text-[16rem] md:text-[10rem] sm:text-8xl text-7xl">
            Services
          </h2>
          <span className="font-secondary md:text-3xl sm:text-xl opacity-75 relative md:top-8 top-1">
            [4]
          </span>
        </div>
      </div>

      <div className="w-full h-full absolute inset-0 z-2 bg-linear-to-b from-black to-10% to-transparent pointer-events-none"></div>
      {/* <div className="vignette"></div> */}

      <div
        className={`w-full h-svh absolute top-1/2 left-1/2 -translate-1/2 flex justify-start items-end z-[-1]`}
      >
        <video
          src="/bg-services.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        ></video>
        {/* <Image
          src={"/6.png"}
          alt="fire"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[300px] h-auto object-contain z-[1]"
        /> */}

        {/* <Image
          src={"/bbgg.jpg"}
          alt="fire"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover absolute left-1/2 top-1/2 -translate-1/2"
        /> */}
      </div>
    </div>
  );
};

export default Services;
