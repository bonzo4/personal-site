"use client";

import Image from "next/image";
import tallyGif from "@/public/projects/tally.gif";

export default function Tally() {
  return (
    <div className="flex max-w-[1200px] flex-col items-center justify-center gap-10 lg:flex-row">
      <div className="flex flex-col items-start justify-center gap-2">
        <h3 className="text-lg underline lg:text-3xl">Tally Markets</h3>
        <p className="text-base lg:text-xl">
          - Decentralized Prediction Markets on Solana
        </p>
        <p className="text-base lg:text-xl">
          - Built with Typescript, Nextjs, Rust, Anchor and Supabase
        </p>
      </div>
      <div className="flex flex-row items-center justify-center overflow-hidden">
        <Image
          src={tallyGif}
          alt={"tally gif"}
          width={700}
          priority={true}
          unoptimized
        />
      </div>
    </div>
  );
}
