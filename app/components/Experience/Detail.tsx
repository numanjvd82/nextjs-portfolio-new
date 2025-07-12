import { Experience } from "@/app/data";
import { motion, useAnimate, ValueAnimationTransition } from "framer-motion";
import { ArrowDown, SquareArrowOutUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Detail = Experience["details"];

type Props = {
  details?: Detail;
};

export const Detail: React.FC<Props> = ({ details }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [scope, animate] = useAnimate();

  const MotionLink = motion(Link);

  if (!details) return null;

  const handleClick = () => {
    setShowDetails(!showDetails);

    const showProps = {
      opacity: 1,
      height: "auto",
      marginTop: 20,
    };

    const hideProps = {
      opacity: 0,
      height: 0,
      marginTop: 0,
    };

    const transition: ValueAnimationTransition = {
      duration: 0.3,
      ease: "easeInOut",
    };

    if (!showDetails) {
      animate(scope.current, showProps, transition);
    } else {
      animate(scope.current, hideProps, transition);
    }
  };

  return (
    <>
      <motion.div
        ref={scope}
        initial={{ opacity: 0, height: 0, marginTop: 0 }}
        className="overflow-hidden my-5"
      >
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-4 lg:gap-6">
          {details.imagePaths ? (
            <div className="flex justify-center flex-wrap gap-2 lg:gap-4 lg:basis-1/2">
              {details.imagePaths.map((path, i) => (
                <Image
                  key={i}
                  src={path}
                  sizes="100vw"
                  alt={"Experience" + i}
                  className="object-cover rounded-2xl cursor-auto w-full h-auto min-w-[120px] max-w-[160px] sm:min-w-[150px] sm:max-w-[200px] lg:min-w-[180px] lg:max-w-[240px]"
                  width={200}
                  height={150}
                />
              ))}
            </div>
          ) : null}
          <div className="flex flex-col lg:basis-1/2 gap-4">
            <p className="text-sm sm:text-base font-sans text-white mix-blend-difference leading-relaxed">
              {details.description}
            </p>

            {details.companyWebsite ? (
              <MotionLink
                target="_blank"
                href={details.companyWebsite}
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                }}
                transition={{
                  type: "spring",
                  duration: 0.7,
                  bounce: 0.2,
                }}
                className="flex items-center justify-center lg:justify-start mt-2 text-white mix-blend-difference"
              >
                <SquareArrowOutUpRightIcon
                  size={24}
                  className="sm:w-7 sm:h-7"
                />
              </MotionLink>
            ) : null}
          </div>
        </div>
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.1,
          translateY: showDetails ? -10 : 10,
        }}
        transition={{
          type: "spring",
          duration: 0.5,
          bounce: 0.6,
        }}
        animate={{
          rotate: showDetails ? 180 : 0,
          transition: {
            type: "tween",
            duration: 0.5,
            bounce: 0.6,
            stiffness: 300,
          },
        }}
        onClick={handleClick}
        className="grid place-items-center mt-5 text-white mix-blend-difference cursor-pointer"
      >
        <ArrowDown size={24} className="sm:w-7 sm:h-7" />
      </motion.div>
    </>
  );
};
