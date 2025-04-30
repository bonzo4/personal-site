"use client";
import headshot from "@/public/headshot.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      className="flex min-h-screen grow flex-col items-center justify-center gap-4 pt-10 lg:gap-10"
      id="hero"
    >
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 50, delay: 0.5 }}
      >
        <h2 className="text-center text-3xl lg:text-5xl">Full-stack Web Dev</h2>
      </motion.div>
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-20">
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 20,
            delay: 1,
          }}
        >
          <div className="h-[300px] w-[300px] overflow-hidden rounded-md border-2">
            <Image src={headshot} alt="Alonzo Sabino" width={300} />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 20,
            delay: 1,
          }}
        >
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <h1 className="text-3xl">Alonzo Sabino (He/Him)</h1>
            <span>Former: Syndicate Network</span>
            <span className="">Contact: alonzo.bonzo.dev@gmail.com</span>
            <div className="flex flex-row gap-4">
              <a href="https://github.com/bonzo4" target="_blank">
                <FaGithub size={25} className="hover:opacity-50" />
              </a>
              <a
                href="https://www.linkedin.com/in/alonzo-sabino-a74a5220b/"
                target="_blank"
              >
                <FaLinkedin size={25} className="hover:opacity-50" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 50, delay: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <button
            onClick={() => {
              const nextSection = document.getElementById("about");
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="hidden flex-row items-center justify-center gap-2 rounded-full border-2 border-white bg-black px-4 py-2 hover:bg-white hover:bg-opacity-25 lg:flex"
          >
            <span>About</span>
            <FaAngleDoubleDown size={20} />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
