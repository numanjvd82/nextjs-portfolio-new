import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const subTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
};

export default function CTA() {
  return (
    <div
      id="contacts"
      className="cursor-auto md:cursor-none h-[60vh] flex flex-col justify-center items-center px-4 py-8 md:p-4 relative"
    >
      <div className="flex flex-col justify-center items-center max-w-4xl w-full text-center">
        <motion.h1
          className="uppercase font-bold tracking-widest text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-5 break-words text-center font-serif mb-5 md:mb-8 text-white mix-blend-difference leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textVariants}
        >
          Got a vision? Let&apos;s bring It to life!
        </motion.h1>
        <motion.p
          className="text-sm sm:text-base md:text-lg font-sans text-white mix-blend-difference leading-relaxed max-w-2xl mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={subTextVariants}
        >
          I&apos;m always excited to collaborate on new and innovative projects.
          Whether you&apos;re starting from scratch or refining an existing
          idea.
        </motion.p>
      </div>
    </div>
  );
}
