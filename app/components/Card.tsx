import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { memo, useRef } from "react";
import Badge from "./ui/Badge";

type Project = {
  id: number;
  name: string;
  technologies: string[];
  description: string;
  githubLink?: string;
  liveAppLink?: string;
  imagePath: string;
};

type Props = {
  data: Project;
  index: number;
  range: [number, number];
  targetScale: number;
  globalProgress: MotionValue<number>;
};

const Card: React.FC<Props> = ({
  data,
  range,
  index,
  targetScale,
  globalProgress,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const variants = {
    initial: { translateY: 30, opacity: 0 },
    enter: { translateY: 0, opacity: 1 },
  };

  // Combine transforms for better performance
  const cardScale = useTransform(globalProgress, range, [1, targetScale]);
  const imageTransform = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const {
    id,
    description,
    githubLink,
    imagePath,
    liveAppLink,
    name,
    technologies,
  } = data;

  return (
    <motion.div
      ref={containerRef}
      style={{
        top: `calc(10% + ${index * 25}px)`,
      }}
      className="h-[100vh] sticky font-sans cursor-auto"
      key={id}
      variants={variants}
      initial="initial"
      animate="enter"
    >
      <motion.div
        style={{
          scale: cardScale,
        }}
        className={`w-[300px] sm:w-[500px] md:w-[1000px] h-auto rounded-2xl p-8 md:p-10 overflow-hidden md:flex md:justify-between gap-6 shadow-2xl border border-gray-200/20 backdrop-blur-sm will-change-transform ${
          index % 2 === 0
            ? "bg-gradient-to-br from-white to-gray-50 text-gray-900"
            : "bg-gradient-to-br from-gray-900 to-black text-white"
        }`}
      >
        <motion.div
          style={{
            scale: imageTransform,
            opacity: imageTransform,
          }}
          className="flex-grow overflow-hidden mb-6 md:mb-0 will-change-transform"
        >
          <div className="relative group">
            <Image
              className="rounded-xl object-cover w-full h-auto transform-gpu transition-transform duration-300 group-hover:scale-[1.02]"
              width={0}
              height={0}
              src={imagePath}
              alt={`${name} project screenshot`}
              sizes="100vw"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>

        <div className="md:w-[500px] flex flex-col justify-between">
          <div>
            <h1 className="uppercase font-bold tracking-wider text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight">
              {name}
            </h1>

            <div className="mb-6">
              <p className="text-sm font-semibold tracking-widest uppercase mb-3 opacity-70">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <Badge
                    key={i}
                    title={tech}
                    className={
                      index % 2 === 0
                        ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 text-blue-600"
                        : "bg-gradient-to-r from-blue-400/20 to-purple-400/20 border-blue-400/30 text-blue-300"
                    }
                  />
                ))}
              </div>
            </div>

            <p className="text-sm md:text-base leading-relaxed mb-6 opacity-90">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-300/20">
            {githubLink ? (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100/10 hover:bg-gray-100/20 transition-colors duration-200">
                <LinkIcon size={16} />
                <Link
                  target="_blank"
                  href={githubLink}
                  className="text-sm font-medium hover:underline"
                >
                  View Code
                </Link>
              </div>
            ) : null}
            {liveAppLink ? (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-200">
                <LinkIcon size={16} />
                <Link
                  target="_blank"
                  href={liveAppLink}
                  className="text-sm font-medium hover:underline"
                >
                  Live Demo
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default memo(Card);
