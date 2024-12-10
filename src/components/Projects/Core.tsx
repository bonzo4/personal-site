"use client";

import Image from "next/image";
import coreGif from "@/public/projects/core.gif";

export default function Core() {
  return (
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
      <div className="flex flex-row items-center justify-center overflow-hidden">
        <Image src={coreGif} alt={"core gif"} width={700} priority={true} />
      </div>
      {/* <div className="relative mr-8">
        <div
          className={`${
            selectedImage === "core1" ? "z-20" : "z-10"
          } relative h-[150px] w-[300px] overflow-hidden rounded-md border-2 bg-white drop-shadow-md hover:cursor-pointer hover:shadow-glow hover:drop-shadow-lg lg:h-[250px] lg:w-[500px]`}
          onClick={() =>
            setSelectedImage(selectedImage === "core2" ? "core1" : "core2")
          }
        >
          <Image src={core1} alt="core1" width={500} />
        </div>
        <div
          className={`${
            selectedImage === "core2" ? "z-20" : "z-10"
          } absolute bottom-[-40px] right-[-40px] flex h-[150px] w-[300px] items-end justify-end overflow-hidden rounded-md border-2 bg-white shadow-lg drop-shadow-md hover:cursor-pointer hover:shadow-glow hover:drop-shadow-lg lg:bottom-[-60px] lg:right-[-60px] lg:h-[250px] lg:w-[500px]`}
          onClick={() =>
            setSelectedImage(selectedImage === "core1" ? "core2" : "core1")
          }
        >
          <Image src={core2} alt="core2" width={500} />
        </div>
      </div> */}
    </div>
  );
}
