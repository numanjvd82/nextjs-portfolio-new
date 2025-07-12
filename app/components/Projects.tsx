import { useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "../data";
import Card from "./Card";

export default function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const Cards = () => (
    <>
      {projects.map((data, i) => {
        const startRange = 100 / projects.length / 100;
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            index={i}
            key={i}
            data={data}
            range={[startRange, 1]}
            targetScale={targetScale}
            globalProgress={scrollYProgress}
          />
        );
      })}
    </>
  );

  return (
    <div
      ref={container}
      id="projects"
      className="cursor-auto md:cursor-none px-6 pt-32 pb-20 mt-[50vh]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 mix-blend-difference text-white">
          <h1 className="uppercase font-bold tracking-widest text-4xl sm:text-5xl md:text-6xl lg:text-7xl break-words font-serif  mb-4">
            Projects
          </h1>
          <p className="text-lg md:text-xl  max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring innovative solutions and
            creative implementations across various technologies.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Cards />
        </div>
      </div>
    </div>
  );
}
