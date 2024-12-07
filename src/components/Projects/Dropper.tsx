"use client";

import dropper1 from "@/public/projects/dropper1.png";
import dropper2 from "@/public/projects/dropper2.png";
import Image from "next/image";
import { useState } from "react";

export default function Dropper() {
  const [selectedImage, setSelectedImage] = useState("dropper1");

  return (
    <div
      className="flex min-h-screen grow flex-col items-center justify-center gap-20"
      id="dropper"
    >
      <div className="flex max-w-[1200px] flex-col-reverse items-center justify-center gap-24 lg:flex-row">
        <div className="relative ml-8 mt-4 lg:ml-0">
          <div
            className={`${
              selectedImage === "dropper1" ? "z-20" : "z-10"
            } absolute left-[-30px] top-[-30px] h-[150px] w-[300px] overflow-hidden rounded-md border-2 bg-white hover:cursor-pointer lg:left-[-60px] lg:top-[-60px] lg:h-[250px] lg:w-[500px]`}
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
            } relative flex h-[150px] w-[300px] items-end justify-end overflow-hidden rounded-md border-2 bg-white shadow-lg hover:cursor-pointer lg:h-[250px] lg:w-[500px]`}
            onClick={() =>
              setSelectedImage(
                selectedImage === "dropper1" ? "dropper2" : "dropper1",
              )
            }
          >
            <Image src={dropper2} alt="dropper2" width={500} />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <h3 className="text-lg underline lg:text-3xl">Dropper</h3>
          <p className="text-base lg:text-xl">
            - SPL Token Giveaway and Promotional Platform
          </p>
          <p className="text-base lg:text-xl">
            - Built with Typescript, Nextjs, Rust, Anchor and Supabase
          </p>
        </div>
      </div>
    </div>
  );
}
