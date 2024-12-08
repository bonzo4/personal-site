"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dropperSection = document.getElementById("dropper");

    if (!dropperSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Uses the viewport as the root
        threshold: 0.5, // Adjusts how much of the element needs to be visible
      },
    );

    observer.observe(dropperSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer
      className={`fixed bottom-0 flex h-20 w-full flex-col items-center justify-center gap-2 border-t-2 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-row gap-4">
        <a
          href="https://github.com/bonzo4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={25} className="hover:opacity-50" />
        </a>
        <a
          href="https://www.linkedin.com/in/alonzo-sabino-a74a5220b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={25} className="hover:opacity-50" />
        </a>
      </div>
      <span className="text-xs">ALONZO SABINO © 2024</span>
    </footer>
  );
}
