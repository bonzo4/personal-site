"use client";

import news1 from "@/public/projects/news1.png";
import news2 from "@/public/projects/news2.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function News() {
  const [selectedImage, setSelectedImage] = useState("news1");

  return (
    <div
      className="flex min-h-screen grow flex-col items-center justify-center gap-8"
      id="news"
    >
      <h2 className="text-3xl lg:text-5xl">Projects</h2>
      <div className="flex max-w-[700px] flex-col items-center justify-center gap-10 lg:max-w-[1200px] lg:flex-row lg:gap-24">
        <div className="flex flex-col items-start justify-center gap-2">
          <h3 className="text-lg underline lg:text-3xl">Syndicate News</h3>
          <p className="text-base lg:text-xl">
            - The leading Web3 Discord Newsletter distributing to over 1,300
            servers
          </p>
          <p className="text-base lg:text-xl">
            - Built with Typescript and Supabase
          </p>
        </div>
        <div className="relative ml-16 mt-10 lg:mt-36">
          <div
            className={`${
              selectedImage === "news1" ? "z-20" : "z-10"
            } hover:shadow-glow absolute left-[-50px] top-[-50px] h-[200px] w-[200px] overflow-hidden rounded-md border-2 bg-white drop-shadow-md hover:cursor-pointer hover:drop-shadow-lg lg:left-[-100px] lg:top-[-100px] lg:h-[400px] lg:w-[400px]`}
            onClick={() =>
              setSelectedImage(selectedImage === "news2" ? "news1" : "news2")
            }
          >
            <Image src={news1} alt="news1" width={400} />
          </div>
          <div
            className={`${
              selectedImage === "news2" ? "z-20" : "z-10"
            } hover:shadow-glow relative flex h-[200px] w-[200px] items-end justify-end overflow-hidden rounded-md border-2 bg-white shadow-lg drop-shadow-md hover:cursor-pointer hover:drop-shadow-lg lg:h-[400px] lg:w-[400px]`}
            onClick={() =>
              setSelectedImage(selectedImage === "news1" ? "news2" : "news1")
            }
          >
            <Image src={news2} alt="news2" width={400} />
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <button
          onClick={() => {
            const nextSection = document.getElementById("global");
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="hidden flex-row items-center justify-center gap-2 rounded-full border-2 border-white bg-black px-4 py-2 hover:bg-white hover:bg-opacity-25 lg:flex"
        >
          <span>Global Chat</span>
          <FaAngleDoubleDown size={20} />
        </button>
      </motion.div>
    </div>
  );
}
