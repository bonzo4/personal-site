"use client";

import global1 from "@/public/projects/global1.png";
import global2 from "@/public/projects/global2.png";
import Image from "next/image";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Global() {
  const [selectedImage, setSelectedImage] = useState("global2");

  return (
    <div className="flex max-w-[1200px] flex-col-reverse items-center justify-center gap-20 lg:flex-row lg:gap-40">
      <div className="relative ml-8 lg:ml-24">
        <div
          className={`${
            selectedImage === "global1" ? "z-20" : "z-10"
          } absolute left-[-30px] top-[-30px] h-[200px] w-[200px] overflow-hidden rounded-md border-2 bg-white drop-shadow-md hover:cursor-pointer hover:shadow-glow hover:drop-shadow-lg lg:left-[-100px] lg:top-[-100px] lg:h-[400px] lg:w-[400px]`}
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
          } relative flex h-[150px] w-[300px] items-end justify-end overflow-hidden rounded-md border-2 bg-white shadow-lg drop-shadow-md hover:cursor-pointer hover:shadow-glow hover:drop-shadow-lg lg:h-[250px] lg:w-[500px]`}
          onClick={() =>
            setSelectedImage(
              selectedImage === "global1" ? "global2" : "global1",
            )
          }
        >
          <Image src={global2} alt="global2" width={500} />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <h3 className="text-lg underline lg:text-3xl">Global Chat</h3>
        <p className="text-base lg:text-xl">
          - Connecting the top communities through a single Discord Chat Room
        </p>
        <p className="text-base lg:text-xl">
          - Over 1,500 users and 10,000 messages
        </p>
        <p className="text-base lg:text-xl">- Built with Typescript</p>
        <a
          href="https://github.com/bonzo4/global-bot"
          target="_blank"
          className="flex flex-row items-center gap-2 text-base underline hover:no-underline lg:text-xl"
        >
          <span>Learn More</span>
          <FaExternalLinkAlt size={16} />
        </a>
      </div>
    </div>
  );
}
