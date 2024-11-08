import { motion, useAnimate, ValueAnimationTransition } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

type Detail = {
  imagePaths: string[];
  description: string;
};

type Props = {
  details?: Detail;
};

export const Detail: React.FC<Props> = ({ details }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [scope, animate] = useAnimate();

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
        className="overflow-hidden"
      >
        <h1>{details.description}</h1>
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.1,
          translateY: 10,
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
        className="grid place-items-center mt-5 cursor-pointer"
      >
        <ArrowDown size={35} />
      </motion.div>
    </>
  );
};
