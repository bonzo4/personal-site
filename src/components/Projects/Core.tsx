"use client";

import Image from "next/image";
import coreGif from "@/public/projects/core.gif";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Core() {
  return (
    <div className="flex max-w-[1200px] flex-col items-center justify-center gap-10 lg:flex-row">
      <div className="flex flex-col items-start justify-center gap-2">
        <h3 className="text-lg underline lg:text-3xl">C.O.R.E.</h3>
        <p className="text-base lg:text-xl">
          - Internal management and compensation system for the Syndicate team
        </p>
        <p className="text-base lg:text-xl">
          - Over 300 tickets completed and 80 employees
        </p>
        <p className="text-base lg:text-xl">- Built with Typescript and Rust</p>
        <a
          href="https://github.com/bonzo4/core-app"
          target="_blank"
          className="flex flex-row items-center gap-2 text-base underline hover:no-underline lg:text-xl"
        >
          <span>Learn More</span>
          <FaExternalLinkAlt size={16} />
        </a>
      </div>
      <div className="flex flex-row items-center justify-center overflow-hidden">
        <Image src={coreGif} alt={"core gif"} width={700} priority={true} />
      </div>
    </div>
  );
}
