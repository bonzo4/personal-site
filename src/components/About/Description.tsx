import { motion } from "framer-motion";

export default function Description() {
  return (
    <div className="bg-w flex w-full flex-col items-start justify-start gap-4 lg:w-1/2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-xl lg:text-3xl">Description:</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-base lg:text-xl">
          Hello, I&apos;m Alonzo, a passionate developer with a experience in
          building Web3 platforms. I have proven track record in building
          engaging media tools, crafting responsive UIs, and creating robust
          blockchain applications using Typescript, Rust, and Open Source
          Technology. My time working with startups and smaller teams has honed
          my ability to adapt quickly, collaborate effectively, and deliver
          impactful solutions in dynamic environments.
        </p>
      </motion.div>
    </div>
  );
}
