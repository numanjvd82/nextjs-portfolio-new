export const projects = [
  {
    id: 1,
    name: "Cube Master",
    technologies: [
      "NextJS",
      "React Three Fiber",
      "Three.js",
      "Prisma",
      "NextAuth",
      "TypeScript",
    ],
    description: `A fully interactive 3D Rubik's Cube simulator with multiple game modes, user authentication, and progress tracking. Features include Classic Mode, Time Attack, Daily Challenges, Google OAuth authentication, detailed analytics, and smooth 3D animations. Built with cutting-edge web technologies for an immersive puzzle-solving experience.`,
    githubLink: "https://github.com/numanjvd82/cubemaster",
    liveAppLink: "https://cubemaster.vercel.app/",
    imagePath: "/assets/projects/cube.png",
  },
  {
    id: 2,
    name: "Pass Keeper",
    technologies: ["NextJS", "Cryptography", "Encryption", "Algorithims"],
    description: `Pass Keeper is a practical and secure password manager app built with ReactJS, designed to provide a seamless and user-friendly experience. Featuring a modern and sleek interface, Pass Keeper makes managing your passwords intuitive and efficient.`,
    githubLink: "https://github.com/numanjvd82/pass-keeper",
    imagePath: "/assets/projects/project-5.png",
  },
  {
    id: 3,
    name: "Multi Cipher Framework",
    technologies: ["ReactJS", "Cryptography", "Typescript", "Algorithims"],
    description: `Built with React, this project pairs powerful cipher functions with a sleek and intuitive user interface, providing users with a seamless experience. Each cipher comes with customizable settings, allowing users to easily encrypt and decrypt messages while understanding the mechanics behind these historical encryption techniques.`,
    githubLink: "https://multicipherframework.netlify.app/",
    liveAppLink: "https://multi-cipher-framework",
    imagePath: "/assets/projects/project-2.jpeg",
  },
  {
    id: 4,
    name: "Text to Image Converter",
    technologies: ["AI", "Machine Learning", "NextJS", "Typescript", "ShadCN"],
    description: `Welcome to AI Toolkit, a Next.js project built with ShadCN UI and powered by Hugging Face models. This project aims to automate classical tasks with AI tools. Currently, it supports generating images from text prompts, with more features coming soon!`,
    githubLink: "https://github.com/numanjvd82/nextjs-ai-toolkit",
    imagePath: "/assets/projects/project-1.png",
  },
  {
    id: 5,
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

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqData: FAQItem[] = [
  {
    question: "What modern web technologies do you specialize in?",
    answer:
      "I specialize in React, Next.js, TypeScript, Node.js, Websockets and a liitle touch of solidity and modern web development. I have experience with Three.js for 3D web experiences and I'm familiar with PostgreSQL, MongoDB and pgvector. I'm always learning and adapting to new technologies to deliver cutting-edge solutions.",
  },
  {
    question: "How do you ensure pixel-perfect designs?",
    answer:
      "I have a keen eye for detail and take pride in delivering pixel-perfect implementations. I carefully review designs, use precise measurements, and test across multiple devices and browsers to ensure every element matches the intended design exactly.",
  },
  {
    question: "Are you adaptable to new technologies and requirements?",
    answer:
      "Absolutely! I thrive on learning new technologies and adapting to changing project requirements. Whether it's a new framework, API, or design pattern, I quickly research, experiment, and implement solutions that meet your specific needs.",
  },
  {
    question: "What's your experience with 3D web development?",
    answer:
      "I have hands-on experience with Three.js and have built interactive 3D projects. While I continue to expand my 3D development skills, I can create engaging 3D experiences and am eager to take on more complex 3D challenges.",
  },
  {
    question: "How do you handle deployment and modern web practices?",
    answer:
      "I use modern deployment strategies with platforms like Vercel, Netlify, and AWS. I implement responsive design, optimize performance, ensure SEO best practices, and maintain clean, scalable code. I'm experienced with Git workflows and collaborative development.",
  },
  {
    question: "Do you take ownership of projects from start to finish?",
    answer:
      "Yes, I take full ownership of projects and am committed to delivering exceptional results. I communicate proactively, meet deadlines, solve problems independently, and ensure the final product exceeds expectations. Your success is my priority.",
  },
  {
    question: "How do you approach innovation and problem-solving?",
    answer:
      "I bring fresh perspectives and innovative solutions to every project. I research best practices, experiment with new approaches, and find creative ways to solve complex problems. I'm not afraid to push boundaries while maintaining code quality and user experience.",
  },
  {
    question: "What can I expect from your work process?",
    answer:
      "You can expect transparent communication, regular updates, and meticulous attention to detail. I deliver clean, maintainable code, provide realistic timelines, and ensure every aspect of the project meets your standards. I stand behind my work with ongoing support.",
  },
];
