"use client";

import global1 from "@/public/projects/global1.png";
import global2 from "@/public/projects/global2.png";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Global() {
  const [selectedImage, setSelectedImage] = useState("global2");

  return (
    <div
      className="flex min-h-screen grow flex-col items-center justify-center gap-20 pb-16 pt-16 lg:pb-0"
      id="global"
    >
      <div className="flex max-w-[1200px] flex-col-reverse items-center justify-center gap-20 lg:flex-row lg:gap-40">
        <div className="relative ml-8 lg:ml-24">
          <div
            className={`${
              selectedImage === "global1" ? "z-20" : "z-10"
            } absolute left-[-30px] top-[-30px] h-[200px] w-[200px] overflow-hidden rounded-md border-2 bg-white hover:cursor-pointer lg:left-[-100px] lg:top-[-100px] lg:h-[400px] lg:w-[400px]`}
            onClick={() =>
              setSelectedImage(
                selectedImage === "global2" ? "global1" : "global2",
              )
            }
          >
            <Image src={global1} alt="global1" width={400} />
          </div>
          <div
            className={`${
              selectedImage === "global2" ? "z-20" : "z-10"
            } relative flex h-[150px] w-[300px] items-end justify-end overflow-hidden rounded-md border-2 bg-white shadow-lg hover:cursor-pointer lg:h-[200px] lg:w-[400px]`}
            onClick={() =>
              setSelectedImage(
                selectedImage === "global1" ? "global2" : "global1",
              )
            }
          >
            <Image src={global2} alt="global2" width={400} />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <h3 className="text-lg underline lg:text-3xl">Global Chat</h3>
          <p className="text-base lg:text-xl">
            - Connecting the top Solana Communities through a single discord
            chat room
          </p>
          <p className="text-base lg:text-xl">
            - Built with Typescript, NestJs and Supabase
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          const nextSection = document.getElementById("core");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="hidden flex-row items-center justify-center gap-2 rounded-full border-2 border-white bg-black px-4 py-2 lg:flex"
      >
        <span>C.O.R.E.</span>
        <FaAngleDoubleDown size={20} />
      </button>
    </div>
  );
}
