import ExperienceTag from "./ui/ExperienceTag";

export default function Hero() {
  const data = {
    experience: "Junior",
    title: "full stack developer",
    infoOne: `I'm a full-stack web developer with around 3 years of experience. I specialize in creating modern, responsive web applications that solve real-world problems. With expertise in both frontend and backend technologies.`,
    infoTwo: `I've developed scalable and efficient solutions for various clients, including manufacturing resource planning (MRP) systems. I'm always looking for new opportunities to contribute to open-source projects and collaborate with the developer community.`,
  };

  return (
    <div
      style={{
        height: "calc(100vh - 80px)",
      }}
      className="flex justify-center items-center py-20 p-2 font-sans mix-blend-difference text-white"
    >
      <div className="flex flex-col justify-center items-center">
        <ExperienceTag value={data.experience} />
        <h1 className="uppercase font-bold tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-5 break-words">
          {data.title}
        </h1>
        <div className="mt-6 text-sm sm:flex sm:gap-4 justify-between items-center">
          <p className="w-80 h-32 mb-3 sm:mb-0">{data.infoOne}</p>
          <p className="w-80 h-32">{data.infoTwo}</p>
        </div>
      </div>
    </div>
  );
}
