"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/utils/projects";

export default function ProjectsContent() {
  useEffect(() => {
    gsap.set(".work-item", { y: 1000 });

    document.querySelectorAll(".row").forEach((row) => {
      const items = row.querySelectorAll(".work-item");

      items.forEach((item, index) => {
        gsap.set(item, {
          rotation: index === 0 ? -60 : 60,
          transformOrigin: "center center",
        });
      });

      ScrollTrigger.create({
        trigger: row,
        start: "top 60%",
        onEnter: () => {
          gsap.to(items, {
            y: 0,
            rotation: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0.25,
          });
        },
      });
    });

    ScrollTrigger.refresh();

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const rows = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push([
      projects[i % projects.length],
      projects[(i + 1) % projects.length],
    ]);
  }

  return (
    <section className="relative w-full h-full flex flex-col gap-20">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="row flex flex-1 w-full gap-6 max-[1000px]:flex-col max-[1000px]:gap-10"
        >
          {row.map((project, index) => (
            <div
              key={`${project.name}-${index}`}
              className="work-item flex-1 flex flex-col gap-4 will-change-transform"
            >
              <div className="aspect-4/3 overflow-hidden rounded-[10px]">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-lg font-medium font-secondary">{project.name}</h3>
                <p className="text-[#999] font-secondary">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}