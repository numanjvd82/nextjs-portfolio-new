export const projects = [
  {
    id: 1,
    name: "Pass Keeper",
    technologies: ["NextJS", "Cryptography", "Encryption", "Algorithims"],
    description: `Pass Keeper is a practical and secure password manager app built with ReactJS, designed to provide a seamless and user-friendly experience. Featuring a modern and sleek interface, Pass Keeper makes managing your passwords intuitive and efficient.`,
    githubLink: "https://github.com/numanjvd82/pass-keeper",
    imagePath: "/assets/projects/project-5.png",
  },
  {
    id: 2,
    name: "Multi Cipher Framework",
    technologies: ["ReactJS", "Cryptography", "Typescript", "Algorithims"],
    description: `Built with React, this project pairs powerful cipher functions with a sleek and intuitive user interface, providing users with a seamless experience. Each cipher comes with customizable settings, allowing users to easily encrypt and decrypt messages while understanding the mechanics behind these historical encryption techniques.`,
    githubLink: "https://multicipherframework.netlify.app/",
    liveAppLink: "https://multi-cipher-framework",
    imagePath: "/assets/projects/project-2.jpeg",
  },
  {
    id: 3,
    name: "Text to Image Converter",
    technologies: ["AI", "Machine Learning", "NextJS", "Typescript", "ShadCN"],
    description: `Welcome to AI Toolkit, a Next.js project built with ShadCN UI and powered by Hugging Face models. This project aims to automate classical tasks with AI tools. Currently, it supports generating images from text prompts, with more features coming soon!`,
    githubLink: "https://github.com/numanjvd82/nextjs-ai-toolkit",
    imagePath: "/assets/projects/project-1.png",
  },
  {
    id: 4,
    name: "Wilderness Weather App",
    technologies: [
      "Data Transformation",
      "Graphs",
      "Server Side",
      "Typescript",
      "AntD",
    ],
    description: `This project is a weather dashboard application built using React and Ant Design (Antd). The application displays various weather-related data fetched from the Open Meteo API, including current weather, hourly forecasts, daily forecasts, and additional information like air quality, UV index, and dust and pollen levels.`,
    githubLink: "https://github.com/numanjvd82/nextjs-ai-toolkit",
    liveAppLink: "https://wilderness-weather-station.netlify.app",
    imagePath: "/assets/projects/project-3.png",
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
