import {
  SiCss3,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import { FaRust } from "react-icons/fa";
import {
  RiHtml5Line,
  RiNextjsFill,
  RiNodejsLine,
  RiReactjsLine,
} from "react-icons/ri";
import { motion } from "framer-motion";

export default function Tech() {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-2 lg:w-1/2 lg:gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-xl lg:text-3xl">Tech Stack:</h2>
      </motion.div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
            <SiTypescript size={50} />
            <p>TypeScript</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
            <RiReactjsLine size={50} />
            <p>React</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
            <RiHtml5Line size={50} />
            <p>HTML</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
            <SiCss3 size={50} />
            <p>CSS</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
            <RiNextjsFill size={50} />
            <p>NextJs</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
            <RiNodejsLine size={50} />
            <p>Node.js</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
            <SiPython size={50} />
            <p>Python</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
            <FaRust size={50} />
            <p>Rust</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
            <SiPostgresql size={50} />
            <p>PostgreSQL</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border-2 p-2 text-sm lg:h-24 lg:w-24 lg:text-base">
            <SiMongodb size={50} />
            <p>MongoDB</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
