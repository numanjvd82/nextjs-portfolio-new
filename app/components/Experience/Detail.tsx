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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {details.imagePaths ? (
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                {details.imagePaths.map((path, i) => (
                  <Image
                    key={i}
                    src={path}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    alt={`Experience ${i + 1}`}
                    className="object-cover rounded-xl cursor-auto w-full h-auto aspect-[4/3]"
                    width={300}
                    height={225}
                  />
                ))}
              </div>
            </div>
          ) : null}

          <div className="order-1 lg:order-2 flex flex-col gap-4">
            <p className="text-sm sm:text-base font-sans text-white mix-blend-difference leading-relaxed">
              {details.description}
            </p>

            {details.companyWebsite ? (
              <MotionLink
                target="_blank"
                href={details.companyWebsite}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  duration: 0.5,
                  bounce: 0.2,
                }}
                className="flex items-center justify-center lg:justify-start mt-2 text-white mix-blend-difference w-fit"
              >
                <div className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:border-white/40 transition-colors duration-200">
                  <span className="text-sm">Visit Website</span>
                  <SquareArrowOutUpRightIcon
                    size={16}
                    className="sm:w-5 sm:h-5"
                  />
                </div>
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
