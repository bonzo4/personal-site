"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div className="flex h-screen snap-y snap-mandatory flex-col overflow-x-hidden overflow-y-scroll">
      <div className="h-screen snap-start">
        <Hero />
      </div>
      <div className="h-screen snap-start px-4">
        <About />
      </div>
      <div className="h-screen snap-start px-4">
        <Projects />
      </div>
      <div className="h-screen snap-start px-4">
        <Contact />
      </div>
      <ToastContainer />
    </div>
  );
}
