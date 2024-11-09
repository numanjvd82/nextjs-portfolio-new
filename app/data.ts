export const projects = [
  {
    id: 1,
    name: "Multi Cipher Framework",
    technologies: ["HTML", "CSS", "NextJS", "Typescript", "Algorithims"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            tempore libero hic ea. Nihil ratione aliquam sunt magnam esse
            suscipit!`,
    githubLink: "https://www.github.com",
    liveAppLink: "https://multi-cipher-framework",
    imagePath: "/assets/projects/project-1.jpeg",
  },
  {
    id: 2,
    name: "Multi Cipher Framework",
    technologies: ["HTML", "CSS", "NextJS", "Typescript", "Algorithims"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            tempore libero hic ea. Nihil ratione aliquam sunt magnam esse
            suscipit!`,
    githubLink: "https://www.github.com",
    liveAppLink: "https://multi-cipher-framework",
    imagePath: "/assets/projects/project-1.jpeg",
  },
  {
    id: 3,
    name: "Multi Cipher Framework",
    technologies: ["HTML", "CSS", "NextJS", "Typescript", "Algorithims"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            tempore libero hic ea. Nihil ratione aliquam sunt magnam esse
            suscipit!`,
    githubLink: "https://www.github.com",
    liveAppLink: "https://multi-cipher-framework",
    imagePath: "/assets/projects/project-1.jpeg",
  },
  {
    id: 4,
    name: "Multi Cipher Framework",
    technologies: ["HTML", "CSS", "NextJS", "Typescript", "Algorithims"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            tempore libero hic ea. Nihil ratione aliquam sunt magnam esse
            suscipit!`,
    githubLink: "https://www.github.com",
    liveAppLink: "https://multi-cipher-framework",
    imagePath: "/assets/projects/project-1.jpeg",
  },
  {
    id: 5,
    name: "Multi Cipher Framework",
    technologies: ["HTML", "CSS", "NextJS", "Typescript", "Algorithims"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            tempore libero hic ea. Nihil ratione aliquam sunt magnam esse
            suscipit!`,
    githubLink: "https://www.github.com",
    liveAppLink: "https://multi-cipher-framework",
    imagePath: "/assets/projects/project-1.jpeg",
  },
];

export const experienceSectionText = `Over the past 3+ years, i've had the oppurtunity to work on a wide range of complex projects, colloborate with talented individuals and learn from some of the best in the industry. Here are some of the highlights of my journey so far.`;

export type Experience = {
  id: number;
  companyName: string;
  duration: string;
  roles: string[];
  tags: string[];
  details?: {
    imagePaths?: string[];
    description: string;
    companyWebsite?: string;
  };
};

export const experiences: Experience[] = [
  {
    id: 1,
    companyName: "Operational Software, Bristol, UK, Remote",
    duration: `January 2023 - June 2024`,
    roles: ["Full stack Developer", "JavaScript Developer", "MERN Stack"],
    tags: ["NextJS", "NodeJS", "Typescript", "Tailwind", "SQLITE"],
    details: {
      companyWebsite: "https://www.operationalsoftware.co",
      imagePaths: [
        "/assets/experiences/experience-1.png",
        "/assets/experiences/experience-2.png",
        "/assets/experiences/experience-3.png",
      ],
      description: `As a Full Stack Developer at Operational Software, I specialized in creating bespoke features using TypeScript, ReactJS, NodeJS, CSS, and a variety of other technologies. My role involved handling both front-end and back-end development, ensuring seamless integration and robust functionality across the entire stack.`,
    },
  },
  {
    id: 2,
    companyName: "Bytewise Ltd, Islamabad, Pakistan",
    duration: `April 2022 - November 2022`,
    roles: ["Frontend Developer", "Innovated designs", "Motion designs"],
    tags: ["React", "Typescript", "Styled Components", "Framer Motion", "GSAP"],
    details: {
      companyWebsite: "https://www.bytewiseltd.com/",
      imagePaths: ["/assets/experiences/experience-4.png"],
      description: `As a frontend developer at Bitwise, I specialized in building modern, high-performance user interfaces with React, Styled Components, CSS, and TypeScript. I focused on responsive, seamless user experiences across devices and created dynamic components for fast rendering and efficient state management. Using Styled Components, I maintained a clean, scalable, and modular codebase for easy maintenance.`,
    },
  },
  {
    id: 3,
    companyName: "Freelancer",
    duration: `January
    2021 - March 2022`,
    roles: ["Frontend Developer", "UI/UX Designer", "Web Developer"],
    tags: ["Go", "PHP", "Wordpress", "C++", "React"],
    details: {
      description: `As a freelance developer, I worked with a variety of clients to create custom websites, web applications, and user interfaces. I specialized in React, NextJS, and TypeScript, building high-performance, responsive, and user-friendly applications that met the unique needs of each client. I collaborated closely with clients to understand their vision and goals, translating them into engaging, interactive digital experiences.`,
    },
  },
];

export const socials = {
  linkedin: "https://www.linkedin.com/in/numan-javed-1ba2b4315/",
  github: "https://www.github.com/numanjvd82",
};
