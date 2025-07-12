"use client";
import { experienceSectionText } from "@/app/data";
import { motion, useInView } from "framer-motion";
import { DotIcon } from "lucide-react";
import { useRef } from "react";
import { headerLeftVariants, headerRightVariants } from "./variants";

const wordRevealVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const SplitText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <motion.span key={index} variants={wordRevealVariants} custom={index}>
          {word}{" "}
        </motion.span>
      ))}
    </>
  );
};

export const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="flex flex-col sm:flex-row sm:justify-between items-center mb-12 sm:mb-16 md:mb-20 text-white mix-blend-difference mt-10"
    >
      <div className="flex-1 text-center sm:text-left mb-6 sm:mb-0">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={headerLeftVariants}
          className="flex items-center justify-center sm:justify-start"
        >
          <DotIcon />
          <h1 className="uppercase font-bold tracking-widest text-sm sm:text-md break-words font-serif">
            <SplitText text="Experience" />
          </h1>
        </motion.div>
        <motion.p
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={headerLeftVariants}
          className="uppercase font-bold tracking-widest text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 sm:mt-5 break-words font-serif"
        >
          <SplitText text="Explore my journey" />
        </motion.p>
      </div>
      <motion.p
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={headerRightVariants}
        className="text-sm sm:text-base font-sans w-full sm:w-[280px] md:w-[320px] lg:w-[360px] text-center sm:text-left"
      >
        <SplitText text={experienceSectionText} />
      </motion.p>
    </div>
  );
};
