"use client";

import GooeyText from "./GooeyText";
import ProjectsContent from "./ProjectsContent";

const Projects = () => {
  return (
    <div className="w-full h-full relative sm:px-10 px-5 overflow-hidden pb-20">
        <div className="w-full h-auto p-14 flex items-center justify-center mt-5 mb-10">
          <div className="w-auto h-auto inline-flex items-start gap-3">
            <GooeyText as="h2" text={'Projects'} className="w-full font-main uppercase 2xl:text-[16rem] md:text-[10rem] sm:text-8xl text-7xl" />
          </div>
      </div>

      <ProjectsContent />
    </div>
  );
};

export default Projects;
