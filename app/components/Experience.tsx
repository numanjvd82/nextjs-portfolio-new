import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowDown, DotIcon } from "lucide-react";
import { useState } from "react";
import { experiences, experienceSectionText } from "../data";
import Badge from "./ui/Badge";

export default function Experience() {
  const [showDetails, setShowDetails] = useState(false);
  const variants: Variants = {
    initial: {
      opacity: 0,
      translateX: -20,
      transition: {
        type: "spring",
        damping: 30,
      },
    },
    animate: {
      opacity: 1,
      translateX: 0,
      transition: {
        type: "spring",
        damping: 30,
      },
    },
  };

  const Header = () => {
    return (
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-20">
        <div className="flex-1">
          <div className="flex items-center">
            <DotIcon />
            <motion.h1
              initial="initial"
              animate="animate"
              variants={variants}
              className="uppercase font-bold tracking-widest text-md break-words text-center font-serif"
            >
              Experience
            </motion.h1>
          </div>
          <motion.p
            initial="initial"
            animate="animate"
            variants={variants}
            className="
      uppercase font-bold tracking-widest text-lg sm:text-xl md:text-2xl lg:text-3xl mt-5 break-words text-left font-serif mb-10 
      "
          >
            Explore my journey
          </motion.p>
        </div>
        <p className="text-sm font-sans w-[300px]">{experienceSectionText}</p>
      </div>
    );
  };

  const Experiences = () => {
    return (
      <>
        {experiences.map(
          ({ companyName, details, duration, id, roles, tags }) => (
            <div key={id} className="border-b-[1px] border-secondary p-4 ">
              <div className="flex flex-col gap-4 items-center justify-center sm:flex-row sm:justify-between ">
                <div>
                  <h2 className="tracking-widest text-lg break-words  font-sans">
                    {companyName}
                  </h2>
                  <div className="flex justify-center sm:justify-start items-center mt-2">
                    <DotIcon size={30} />
                    <p className="tracking-widest break-words text-sm  font-serif">
                      {duration}
                    </p>
                  </div>
                </div>
                <p className="tracking-widest break-words text-sm font-sans sm:basis-48">
                  {roles.join(", ")}
                </p>
                <div className="flex items-center flex-wrap gap-2">
                  {tags.map((tech, i) => (
                    <Badge className="bg-secondary" key={i} title={tech} />
                  ))}
                </div>
              </div>
              {details ? (
                <div
                  onClick={() => setShowDetails(!showDetails)}
                  className="inline-flex justify-center items-center bg-white text-black mt-5 rounded-full"
                >
                  <ArrowDown
                    className="align-middle justify-self-center"
                    size={35}
                  />
                </div>
              ) : null}
              <AnimatePresence>
                {showDetails ? (
                  <motion.div>
                    <h1>Hello world</h1>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          )
        )}
      </>
    );
  };

  return (
    <div className="p-10 text-white mix-blend-difference">
      <Header />
      <Experiences />
    </div>
  );
}
