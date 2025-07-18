"use client";

import dropperGif from "@/public/projects/dropper.gif";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

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
          - Giveaway and Promotional Platform
        </p>
        <p className="text-base lg:text-xl">- Built with Typescript and Rust</p>
        <a
          href="https://github.com/bonzo4/dropper-monorepo"
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
