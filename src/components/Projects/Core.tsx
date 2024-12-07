"use client";

import core1 from "@/public/projects/core1.png";
import core2 from "@/public/projects/core2.png";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Core() {
  const [selectedImage, setSelectedImage] = useState("core2");

  return (
    <div
      className="flex min-h-screen grow flex-col items-center justify-center gap-24 pb-16 pt-16 lg:pb-0"
      id="core"
    >
      <div className="flex max-w-[1200px] flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="flex flex-col items-start justify-center gap-2">
          <h3 className="text-lg underline lg:text-3xl">C.O.R.E.</h3>
          <p className="text-base lg:text-xl">
            - Internal management and compensation system for the Syndicate team
          </p>
          <p className="text-base lg:text-xl">
            - Built with Typescript, Nextjs, Rust, Anchor and Supabase
          </p>
        </div>
        <div className="relative mr-8">
          <div
            className={`${
              selectedImage === "core1" ? "z-20" : "z-10"
            } relative h-[150px] w-[300px] overflow-hidden rounded-md border-2 bg-white hover:cursor-pointer lg:h-[250px] lg:w-[500px]`}
            onClick={() =>
              setSelectedImage(selectedImage === "core2" ? "core1" : "core2")
            }
          >
            <Image src={core1} alt="core1" width={500} />
          </div>
          <div
            className={`${
              selectedImage === "core2" ? "z-20" : "z-10"
            } absolute bottom-[-40px] right-[-40px] flex h-[150px] w-[300px] items-end justify-end overflow-hidden rounded-md border-2 bg-white shadow-lg hover:cursor-pointer lg:h-[250px] lg:w-[500px]`}
            onClick={() =>
              setSelectedImage(selectedImage === "core1" ? "core2" : "core1")
            }
          >
            <Image src={core2} alt="core2" width={500} />
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          const nextSection = document.getElementById("dropper");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="hidden flex-row items-center justify-center gap-2 rounded-full border-2 border-white px-4 py-2 lg:flex"
      >
        <span>Dropper</span>
        <FaAngleDoubleDown size={20} />
      </button>
    </div>
  );
}
