"use client";

import dropperGif from "@/public/projects/dropper.gif";
import Image from "next/image";

export default function Dropper() {
  return (
    <div className="flex max-w-[1200px] flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:gap-24">
      <div className="flex items-center justify-center overflow-hidden">
        <Image
          src={dropperGif}
          alt={"dropper gif"}
          width={700}
          priority={true}
          unoptimized
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <h3 className="text-lg underline lg:text-3xl">Dropper</h3>
        <p className="text-base lg:text-xl">
          - SPL Token Giveaway and Promotional Platform
        </p>
        <p className="text-base lg:text-xl">
          - Built with Typescript, Nextjs, Rust and Supabase
        </p>
      </div>
    </div>
  );
}
