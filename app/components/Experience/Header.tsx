import { experienceSectionText } from "@/app/data";
import { motion } from "framer-motion";
import { DotIcon } from "lucide-react";
import { headerLeftVariants, headerRightVariants } from "./variants";

export const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-20">
      <div className="flex-1">
        <motion.div
          initial="initial"
          animate="animate"
          variants={headerLeftVariants}
          className="flex items-center"
        >
          <DotIcon />
          <h1 className="uppercase font-bold tracking-widest text-md break-words text-center font-serif">
            Experience
          </h1>
        </motion.div>
        <motion.p
          initial="initial"
          animate="animate"
          variants={headerLeftVariants}
          className="
    uppercase font-bold tracking-widest text-lg sm:text-xl md:text-2xl lg:text-3xl mt-5 break-words text-left font-serif mb-10 
    "
        >
          Explore my journey
        </motion.p>
      </div>
      <motion.p
        initial="initial"
        animate="animate"
        variants={headerRightVariants}
        className="text-sm font-sans w-[300px]"
      >
        {experienceSectionText}
      </motion.p>
    </div>
  );
};
