"use client";

import news1 from "@/public/projects/news1.png";
import news2 from "@/public/projects/news2.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function News() {
  const [selectedImage, setSelectedImage] = useState("news1");

  return (
    <div className="flex max-w-[700px] flex-col items-center justify-center gap-10 lg:max-w-[1200px] lg:flex-row lg:gap-24">
      <div className="flex flex-col items-start justify-center gap-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-lg underline lg:text-3xl">Syndicate News</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex flex-col gap-2">
            <p className="text-base lg:text-xl">
              - The leading Web3 Discord Newsletter distributing to over 2,000
              communities and 35,000 unique readers
            </p>
            <p className="text-base lg:text-xl">
              - Over 2 million views, 240,000 interactions, and 40,000 link
              clicks
            </p>
            <p className="text-base lg:text-xl">
              - Built with Typescript and Supabase
            </p>
            {/* <a
              href="https://syndicatenetwork.io"
              target="_blank"
              className="flex flex-row items-center gap-2 text-base hover:underline lg:text-xl"
            >
              <span>Learn More</span>
              <FaExternalLinkAlt size={16} />
            </a> */}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="relative ml-16 mt-10 lg:mt-36">
          <div
            className={`${
              selectedImage === "news1" ? "z-20" : "z-10"
            } absolute left-[-50px] top-[-50px] h-[200px] w-[200px] overflow-hidden rounded-md border-2 bg-white drop-shadow-md hover:cursor-pointer hover:shadow-glow hover:drop-shadow-lg lg:left-[-100px] lg:top-[-100px] lg:h-[400px] lg:w-[400px]`}
            onClick={() =>
              setSelectedImage(selectedImage === "news2" ? "news1" : "news2")
            }
          >
            <Image src={news1} alt="news1" width={400} />
          </div>
          <div
            className={`${
              selectedImage === "news2" ? "z-20" : "z-10"
            } relative flex h-[200px] w-[200px] items-end justify-end overflow-hidden rounded-md border-2 bg-white shadow-lg drop-shadow-md hover:cursor-pointer hover:shadow-glow hover:drop-shadow-lg lg:h-[400px] lg:w-[400px]`}
            onClick={() =>
              setSelectedImage(selectedImage === "news1" ? "news2" : "news1")
            }
          >
            <Image src={news2} alt="news2" width={400} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
