"use client";

import core1 from "@/public/projects/core1.png";
import core2 from "@/public/projects/core2.png";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Core() {
  const [selectedImage, setSelectedImage] = useState("core1");

  return (
    <div
      className="flex min-h-screen grow flex-col items-center justify-center gap-24 pt-16"
      id="core"
    >
      <div className="itmes-center flex max-w-[1200px] flex-row justify-center gap-10">
        <div className="flex flex-col items-start justify-center gap-2">
          <h3 className="text-4xl underline">C.O.R.E.</h3>
          <p className="text-xl">
            - Internal management and compensation system for the Syndicate team
          </p>
          <p className="text-xl">
            - Built with Typescript, Nextjs, Rust, Anchor and Supabase
          </p>
        </div>
        <div className="relative">
          <div
            className={`${
              selectedImage === "core1" ? "z-20" : "z-10"
            } relative h-[250px] w-[500px] overflow-hidden rounded-md border-2 bg-white hover:cursor-pointer`}
            onClick={() =>
              setSelectedImage(selectedImage === "core2" ? "core1" : "core2")
            }
          >
            <Image src={core1} alt="core1" width={500} />
          </div>
          <div
            className={`${
              selectedImage === "core2" ? "z-20" : "z-10"
            } absolute bottom-[-60px] right-[-60px] flex h-[250px] w-[500px] items-end justify-end overflow-hidden rounded-md border-2 bg-white shadow-lg hover:cursor-pointer`}
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
        className="flex flex-row items-center justify-center gap-2 rounded-full border-2 border-white px-4 py-2"
      >
        <span>Dropper</span>
        <FaAngleDoubleDown size={20} />
      </button>
    </div>
  );
}
