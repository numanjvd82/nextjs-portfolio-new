import { AnimatedText } from "./AnimatedText";
import ExperienceTag from "./ui/ExperienceTag";

export default function Hero() {
  const data = {
    experience: "Junior",
    title: "Full Stack Developer",
    infoOne: `I'm a full-stack web developer with around 3 years of experience. I specialize in creating modern, responsive web applications that solve real-world problems. With expertise in both frontend and backend technologies.`,
    infoTwo: `I've developed scalable and efficient solutions for various clients, including manufacturing resource planning (MRP) systems. I'm always looking for new opportunities to contribute to open-source projects and collaborate with the developer community.`,
  };

  return (
    <div
      style={{
        height: "calc(100vh - 80px)",
      }}
      className="cursor-auto md:cursor-none flex justify-center items-center py-8 md:py-30 px-4 md:p-2 font-sans mix-blend-difference text-white"
    >
      <div className="flex flex-col justify-center items-center max-w-6xl w-full">
        <ExperienceTag value={data.experience} />

        <h1 className="uppercase font-bold tracking-widest text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5 break-words text-center">
          <AnimatedText text={data.title} />
        </h1>

        <div className="mt-6 text-sm sm:text-base md:text-lg flex flex-col sm:flex-row sm:gap-2 lg:gap-4 justify-center items-start max-w-4xl w-full text-center">
          <p className="w-full sm:w-80 lg:w-96 min-h-[120px] sm:min-h-[128px] mb-3 sm:mb-0 leading-relaxed">
            <AnimatedText text={data.infoOne} />
          </p>
          <p className="w-full sm:w-80 lg:w-96 min-h-[120px] sm:min-h-[128px] leading-relaxed">
            <AnimatedText text={data.infoTwo} />
          </p>
        </div>
      </div>
    </div>
  );
}
