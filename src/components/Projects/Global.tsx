"use client";

import global1 from "@/public/projects/global1.png";
import global2 from "@/public/projects/global2.png";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Global() {
  const [selectedImage, setSelectedImage] = useState("global1");

  return (
    <div
      className="flex min-h-screen grow flex-col items-center justify-center gap-10 pt-16"
      id="global"
    >
      <div className="itmes-center flex max-w-[1200px] flex-row justify-center gap-10">
        <div className="flex flex-col items-start justify-center gap-2">
          <h3 className="text-4xl underline">Global Chat</h3>
          <p className="text-xl">
            - Connecting the top Solana Communities through a single discord
            chat room
          </p>
          <p className="text-xl">
            - Built with Typescript, NestJs and Supabase
          </p>
        </div>
        <div className="relative">
          <div
            className={`${
              selectedImage === "global1" ? "z-20" : "z-10"
            } relative h-[400px] w-[400px] overflow-hidden rounded-md border-2 bg-white hover:cursor-pointer`}
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
            } absolute bottom-[-100px] right-[-100px] flex h-[200px] w-[400px] items-end justify-end overflow-hidden rounded-md border-2 bg-white shadow-lg hover:cursor-pointer`}
            onClick={() =>
              setSelectedImage(
                selectedImage === "global1" ? "global2" : "global1",
              )
            }
          >
            <Image src={global2} alt="global2" width={400} />
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          const nextSection = document.getElementById("core");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="flex flex-row items-center justify-center gap-2 rounded-full border-2 border-white bg-black px-4 py-2"
      >
        <span>C.O.R.E.</span>
        <FaAngleDoubleDown size={20} />
      </button>
    </div>
  );
}
