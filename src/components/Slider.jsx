"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

export default function Slider({data}) {
  const sliderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    CustomEase.create("cubic", "0.83, 0, 0.17, 1");

    splitTextIntoSpans();
    initializeCards();

    gsap.set("h1 span", { y: -200 });
    gsap.set(".slider .card:last-child h1 span", { y: 0 });
  }, []);

  const splitTextIntoSpans = () => {
    const headings = document.querySelectorAll(".copy h1");
    headings.forEach((heading) => {
      const text = heading.innerText;
      heading.innerHTML = text
        .split("")
        .map((char) =>
          char === " "
            ? `<span>&nbsp;&nbsp;</span>`
            : `<span>${char}</span>`
        )
        .join("");
    });
  };

  const initializeCards = () => {
    const cards = Array.from(document.querySelectorAll(".card"));
    gsap.to(cards, {
      y: (i) => -15 + 15 * i + "%",
      z: (i) => 15 * i,
      duration: 1,
      ease: "cubic",
      stagger: -0.1,
    });
  };

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const slider = sliderRef.current;
    const cards = Array.from(slider.querySelectorAll(".card"));
    const lastCard = cards.pop();
    const nextCard = cards[cards.length - 1];

    gsap.to(lastCard.querySelectorAll("h1 span"), {
      y: 200,
      duration: 0.75,
      ease: "cubic",
    });

    gsap.to(lastCard, {
      y: "+=150%",
      duration: 0.75,
      ease: "cubic",
      onComplete: () => {
        slider.prepend(lastCard);
        initializeCards();
        gsap.set(lastCard.querySelectorAll("h1 span"), { y: -200 });

        setTimeout(() => setIsAnimating(false), 1000);
      },
    });

    gsap.to(nextCard.querySelectorAll("h1 span"), {
      y: 0,
      duration: 1,
      ease: "cubic",
      stagger: 0.05,
    });
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onClick={handleClick}
    >
      <div
        ref={sliderRef}
        className="slider absolute top-0 w-full h-full overflow-hidden"
        style={{
          perspective: "200px",
          perspectiveOrigin: "50% 100%",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="card absolute top-1/2 left-1/2 w-[45%] h-[450px] rounded-xl overflow-hidden bg-black"
            style={{
              transform: "translate3d(-50%, -50%, 0)",
            }}
          >
            <img
              src={item.src}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="copy absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
              <h1 className="text-center font-light font-secondary uppercase text-white text-[3vw]">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}