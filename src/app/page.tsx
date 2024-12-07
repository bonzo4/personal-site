import About from "@/components/About";
import Hero from "@/components/Hero";
import Core from "@/components/Projects/Core";
import Dropper from "@/components/Projects/Dropper";
import Global from "@/components/Projects/Global";
import News from "@/components/Projects/News";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <News />
      <Global />
      <Core />
      <Dropper />
    </div>
  );
}
