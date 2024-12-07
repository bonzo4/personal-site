import { SiTypescript } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { CgAnchor } from "react-icons/cg";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { FiFigma } from "react-icons/fi";
import { RiNotionFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";

export default function Tech() {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-4 lg:w-1/2">
      <h2 className="text-xl lg:text-3xl">Tech Stack:</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
          <SiTypescript size={50} />
          <p>TypeScript</p>
        </div>
        <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
          <RiNextjsFill size={50} />
          <p>NextJs</p>
        </div>
        <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
          <SiNestjs size={50} />
          <p>NestJs</p>
        </div>
        <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
          <FaRust size={50} />
          <p>Rust</p>
        </div>
        <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
          <CgAnchor size={50} className="" />
          <p>Anchor</p>
        </div>
        <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
          <RiTailwindCssFill size={50} />
          <p>Tailwind</p>
        </div>
        <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
          <RiSupabaseFill size={50} />
          <p>Supabase</p>
        </div>
        <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
          <FiFigma size={50} />
          <p>Figma</p>
        </div>
        <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
          <RiNotionFill size={50} />
          <p>Notion</p>
        </div>
      </div>
    </div>
  );
}
