"use client";

import news1 from "@/public/projects/news1.png";
import news2 from "@/public/projects/news2.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import News from "./News";
import Global from "./Global";
import Core from "./Core";
import Dropper from "./Dropper";

export default function Projects() {
  return (
    <div
      className="flex min-h-screen grow flex-col items-center justify-center gap-8"
      id="projects"
    >
      <h2 className="text-3xl lg:text-5xl">Projects</h2>
      <div
        className="flex w-full snap-x snap-mandatory overflow-x-auto"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Section 1 */}
        <div
          id="news-section"
          className="flex w-full shrink-0 snap-start items-center justify-center"
        >
          <News />
        </div>
        {/* Section 2 */}
        <div
          id="global-section"
          className="flex w-full shrink-0 snap-start items-center justify-center"
        >
          <Global />
        </div>
        {/* Section 3 */}
        <div
          id="core-section"
          className="flex w-full shrink-0 snap-start items-center justify-center"
        >
          <Core />
        </div>
        {/* Section 4 */}
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
