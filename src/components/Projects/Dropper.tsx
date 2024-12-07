"use client";

import dropper1 from "@/public/projects/dropper1.png";
import dropper2 from "@/public/projects/dropper2.png";
import Image from "next/image";
import { useState } from "react";

export default function Dropper() {
  const [selectedImage, setSelectedImage] = useState("dropper1");

  return (
    <div
      className="flex min-h-screen grow flex-col items-center justify-center gap-24"
      id="dropper"
    >
      <div className="itmes-center flex max-w-[1200px] flex-row justify-center gap-10">
        <div className="flex flex-col items-start justify-center gap-2">
          <h3 className="text-4xl underline">Dropper</h3>
          <p className="text-xl">
            - SPL Token Giveaway and Promotional Platform
          </p>
          <p className="text-xl">
            - Built with Typescript, Nextjs, Rust, Anchor and Supabase
          </p>
        </div>
        <div className="relative">
          <div
            className={`${
              selectedImage === "dropper1" ? "z-20" : "z-10"
            } relative h-[250px] w-[500px] overflow-hidden rounded-md border-2 bg-white hover:cursor-pointer`}
            onClick={() =>
              setSelectedImage(
                selectedImage === "dropper2" ? "dropper1" : "dropper2",
              )
            }
          >
            <Image src={dropper1} alt="dropper1" width={500} />
          </div>
          <div
            className={`${
              selectedImage === "dropper2" ? "z-20" : "z-10"
            } absolute bottom-[-60px] right-[-60px] flex h-[250px] w-[500px] items-end justify-end overflow-hidden rounded-md border-2 bg-white shadow-lg hover:cursor-pointer`}
            onClick={() =>
              setSelectedImage(
                selectedImage === "dropper1" ? "dropper2" : "dropper1",
              )
            }
          >
            <Image src={dropper2} alt="dropper2" width={500} />
          </div>
        </div>
      </div>
    </div>
  );
}
