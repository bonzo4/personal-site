"use client";

import { FaAngleDoubleDown } from "react-icons/fa";
import Description from "./Description";
import Tech from "./Tech";

export default function About() {
  return (
    <div
      className="z-10 flex min-h-screen grow flex-col items-center justify-center gap-5 pt-0 lg:gap-10 lg:pt-10"
      id="about"
    >
      <h2 className="text-4xl lg:text-5xl">About</h2>
      <div className="flex max-w-[1200px] flex-col items-center justify-center gap-4 lg:flex-row lg:items-start lg:gap-10">
        <Description />
        <Tech />
      </div>
      <button
        onClick={() => {
          const nextSection = document.getElementById("news");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="flex flex-row items-center justify-center gap-2 rounded-full border-2 border-white bg-black px-4 py-2"
      >
        <span>Projects</span>
        <FaAngleDoubleDown size={20} />
      </button>
    </div>
  );
}
