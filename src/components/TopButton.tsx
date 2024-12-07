"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function TopButton() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };
  }, []);

  return (
    <motion.div
      style={{ display: "flex" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isTop ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => {
          const nextSection = document.getElementById("hero");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="flex flex-row items-center justify-center gap-2 rounded-full border-2 border-white bg-black px-4 py-2"
      >
        <span>Top</span>
        <FaAngleDoubleUp size={20} />
      </button>
    </motion.div>
  );
}
