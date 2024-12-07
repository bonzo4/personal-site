import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex h-20 grow flex-col items-center justify-center gap-2 border-t-2">
      <div className="flex flex-row gap-4">
        <a href="https://github.com/bonzo4" target="_blank">
          <FaGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/alonzo-sabino-a74a5220b/"
          target="_blank"
        >
          <FaLinkedin size={25} />
        </a>
      </div>
      <span className="text-xs">ALONZO SABINO © 2024</span>
    </footer>
  );
}
