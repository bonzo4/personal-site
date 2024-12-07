"use client";

import news1 from "@/public/projects/news1.png";
import news2 from "@/public/projects/news2.png";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function News() {
  const [selectedImage, setSelectedImage] = useState("news1");

  return (
    <div
      className="gpa-8 flex min-h-screen grow flex-col items-center justify-center lg:gap-16"
      id="news"
    >
      <h2 className="text-4xl lg:text-5xl">Projects</h2>
      <div className="flex max-w-[700px] flex-col items-center justify-center gap-10 lg:max-w-[1200px] lg:flex-row">
        <div className="flex flex-col items-start justify-center gap-2">
          <h3 className="text-4xl underline">Syndicate News</h3>
          <p className="text-xl">
            - The leading Web3 Discord Newsletter distributing to 1,300
            Communities and 35,000 unique users
          </p>
          <p className="text-xl">- Built with Typescript and Supabase</p>
        </div>
        <div className="relative">
          <div
            className={`${
              selectedImage === "news1" ? "z-20" : "z-10"
            } relative h-[400px] w-[400px] overflow-hidden rounded-md border-2 bg-white hover:cursor-pointer`}
            onClick={() =>
              setSelectedImage(selectedImage === "news2" ? "news1" : "news2")
            }
          >
            <Image src={news1} alt="news1" width={400} />
          </div>
          <div
            className={`${
              selectedImage === "news2" ? "z-20" : "z-10"
            } absolute bottom-[-100px] right-[-100px] flex h-[400px] w-[400px] items-end justify-end overflow-hidden rounded-md border-2 bg-white shadow-lg hover:cursor-pointer`}
            onClick={() =>
              setSelectedImage(selectedImage === "news1" ? "news2" : "news1")
            }
          >
            <Image src={news2} alt="news2" width={400} />
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          const nextSection = document.getElementById("global");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="flex flex-row items-center justify-center gap-2 rounded-full border-2 border-white bg-black px-4 py-2"
      >
        <span>Global Chat</span>
        <FaAngleDoubleDown size={20} />
      </button>
    </div>
  );
}
