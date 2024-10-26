import { motion } from "framer-motion";

export default function Hero() {
  const data = {
    experience: "Junior",
    title: "full stack developer",
    infoOne: `I'm a full-stack web developer with around 3 years of experience. I specialize in creating modern, responsive web applications that solve real-world problems. With expertise in both frontend and backend technologies.`,
    infoTwo: `I've developed scalable and efficient solutions for various clients, including manufacturing resource planning (MRP) systems. I'm always looking for new opportunities to contribute to open-source projects and collaborate with the developer community.`,
  };

  return (
    <div
      id="story"
      style={{
        height: "calc(100vh - 80px)",
      }}
      className="flex justify-center items-center py-20 p-2 font-sans mix-blend-difference text-white"
    >
      <div className="flex flex-col justify-center items-center">
        <motion.div
          style={{ touchAction: "none" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
          }}
          drag="x"
          dragConstraints={{
            left: -50,
            right: 50,
          }}
          dragSnapToOrigin
          className="border-2 border-primary py-2 px-4 rounded-2xl"
        >
          <p className="font-semibold uppercase tracking-widest">
            {data.experience}
          </p>
        </motion.div>
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

{
  /* <motion.div 
        className="absolute -top-[6px] w-24 h-10 border-2 border-primary py-2 px-4 rounded-2xl"></motion.div> */
}
