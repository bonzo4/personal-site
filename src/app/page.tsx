import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

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
      {/* <div className="h-screen snap-start px-4">
        <News />
      </div>
      <div className="h-screen snap-start px-4">
        <Global />
      </div>
      <div className="h-screen snap-start px-4">
        <Core />
      </div>
      <div className="h-screen snap-start px-4">
        <Dropper />
      </div> */}
    </div>
  );
}
