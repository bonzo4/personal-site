import About from "@/components/About";
import Hero from "@/components/Hero";
import Core from "@/components/Projects/Core";
import Dropper from "@/components/Projects/Dropper";
import Global from "@/components/Projects/Global";
import News from "@/components/Projects/News";

export default function Home() {
  return (
    <div className="flex h-screen snap-y snap-mandatory flex-col overflow-y-scroll">
      <div className="h-screen snap-start">
        <Hero />
      </div>
      <div className="h-screen snap-start">
        <About />
      </div>
      <div className="h-screen snap-start">
        <News />
      </div>
      <div className="h-screen snap-start">
        <Global />
      </div>
      <div className="h-screen snap-start">
        <Core />
      </div>
      <div className="h-screen snap-start">
        <Dropper />
      </div>
    </div>
  );
}
