"use client";

import { motion } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";
import News from "./News";
import Global from "./Global";
import Core from "./Core";
import Dropper from "./Dropper";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

export default function Projects() {
  return (
    <div
      className="relative flex min-h-screen grow flex-col items-center justify-center gap-8"
      id="projects"
    >
      <h2 className="text-3xl lg:text-5xl">Projects</h2>
      <button
        className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border-2 border-white bg-black p-2 text-white hover:bg-white hover:bg-opacity-25 lg:flex"
        onClick={() => {
          const section = document.getElementById("scroll-container");
          if (section) section.scrollBy({ left: -300, behavior: "smooth" });
        }}
      >
        <FaAnglesLeft size={20} />
      </button>

      <button
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border-2 border-white bg-black p-2 text-white hover:bg-white hover:bg-opacity-25 lg:flex"
        onClick={() => {
          const section = document.getElementById("scroll-container");
          if (section) section.scrollBy({ left: 300, behavior: "smooth" });
        }}
      >
        <FaAnglesRight size={20} />
      </button>
      <div
        id="scroll-container"
        className="scrollbar-hide flex w-full snap-x snap-mandatory overflow-x-scroll"
        style={{ scrollBehavior: "smooth" }}
      >
        <div
          id="news-section"
          className="flex w-full shrink-0 snap-start items-center justify-center"
        >
          <motion.div
            animate={{ x: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatDelay: 4,
              delay: 5,
            }}
          >
            <News />
          </motion.div>
        </div>

        <div
          id="global-section"
          className="flex w-full shrink-0 snap-start items-center justify-center"
        >
          <Global />
        </div>
        <div
          id="core-section"
          className="flex w-full shrink-0 snap-start items-center justify-center"
        >
          <Core />
        </div>
        {/* <div
          id="tally-section"
          className="flex w-full shrink-0 snap-start items-center justify-center"
        >
          <Tally />
        </div> */}
        <div
          id="dropper-section"
          className="flex w-full shrink-0 snap-start items-center justify-center"
        >
          <Dropper />
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <button
          onClick={() => {
            const nextSection = document.getElementById("contact");
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="hidden flex-row items-center justify-center gap-2 rounded-full border-2 border-white bg-black px-4 py-2 hover:bg-white hover:bg-opacity-25 lg:flex"
        >
          <span>Contact</span>
          <FaAngleDoubleDown size={20} />
        </button>
      </motion.div>
    </div>
  );
}
