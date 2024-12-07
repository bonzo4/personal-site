"use client";

import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting); // Show button when Hero is not in view
      },
      {
        root: null, // Uses the viewport as the root
        threshold: 0.75, // Adjusts how much of the element needs to be visible
      },
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`flex flex-row items-center justify-center gap-2 rounded-full border-2 border-white bg-black px-4 py-2 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <span>Top</span>
      <FaAngleDoubleUp size={20} />
    </button>
  );
}
