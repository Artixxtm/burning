"use client";

const ServiceCard = ({ data, index }) => {
  return (
    <div
      className={`sm:w-auto w-[calc(100vw-40px)] h-auto flex items-center justify-center`}
    >
      <div className="md:w-[800px] w-full overflow-hidden sm:h-[60vh] bg-white backdrop-blur-lg rounded-[10px] flex flex-col justify-between sm:gap-10 gap-5 relative">
        <div className="w-full h-auto gap-4 sm:px-5 px-2.5 sm:pt-5 pt-2.5">
          <div className="w-full h-auto flex justify-between items-center border-b-2 border-transparent [border-image:repeating-linear-gradient(to_right,black_0,black_15px,transparent_15px,transparent_30px)_1] sm:pb-5 pb-2.5">
            <h3 className="font-main xl:text-5xl text-3xl uppercase text-black">
              {data.title}
            </h3>
            <h3 className="font-secondary font-medium xl:text-5xl text-3xl uppercase text-black">
              0{index + 1}
            </h3>
          </div>
        </div>

        <div className="w-full h-full flex-1 flex flex-col gap-5 px-5">
          <p className="text-black font-secondary sm:max-w-[80%] sm:text-sm text-xs opacity-85">
            {data.description}
          </p>

          <div className="w-full flex sm:flex-row flex-col justify-between sm:gap-5 gap-10 h-auto relative sm:items-center">
            <div className="flex flex-col w-auto h-auto text-black font-secondary font-medium sm:text-lg text-base">
              {data.offer?.map((item, index) => (
                <div
                  className="inline-flex gap-3 items-center ml-2"
                  key={index}
                >
                  <div className="w-2 h-1 rounded-xs bg-[#ff3605]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="w-auto h-auto relative sm:mr-10">
              <button
                className={`sm:w-[120px] sm:h-[120px] flex shadow-xl items-center justify-center bg-black hover:bg-[#ff3605] transition-[background-color,scale] duration-250 sm:rounded-3xl rounded-2xl font-secondary font-medium hover:scale-110 active:scale-90 sm:py-5 sm:px-5 py-2.5 px-5 ${
                  index % 2 ? "sm:-rotate-6" : "sm:rotate-6"
                } cursor-pointer`}
              >
                Talk with an Expert
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-auto gap-4 sm:px-5 px-2.5 sm:pb-5 pb-2.5">
          <div className="w-full h-auto border-t-2 border-transparent [border-image:repeating-linear-gradient(to_right,black_0,black_15px,transparent_15px,transparent_30px)_1] flex justify-between items-center sm:pt-5 pt-2.5">
            <h3 className="font-secondary font-medium xl:text-5xl text-3xl uppercase text-black">
              0{index + 1}
            </h3>
            <h3 className="font-main xl:text-5xl text-3xl uppercase text-black">
              {data.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
