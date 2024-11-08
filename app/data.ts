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

type Experience = {
  id: number;
  companyName: string;
  duration: string;
  roles: string[];
  tags: string[];
  details?: {
    imagePaths: string[];
    description: string;
  };
};

export const experiences: Experience[] = [
  {
    id: 1,
    companyName: "Operational Software, Bristol, UK, Remote",
    duration: `February
            2022 - Present`,
    roles: ["Full stack Developer", "Innovated designs", "Nextjs"],
    tags: ["HTML", "CSS", "NextJS", "Typescript", "Algorithims"],
    details: {
      imagePaths: ["/project-1.jpeg"],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            tempore libero hic ea. Nihil ratione aliquam sunt magnam esse
            suscipit!`,
    },
  },
  {
    id: 2,
    companyName: "Operational Software, Bristol, UK, Remote",
    duration: `February
            2022 - Present`,
    roles: ["Full stack Developer", "Innovated designs", "Nextjs"],
    tags: ["HTML", "CSS", "NextJS", "Typescript", "Algorithims"],
    details: {
      imagePaths: ["/project-1.jpeg"],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            tempore libero hic ea. Nihil ratione aliquam sunt magnam esse
            suscipit!`,
    },
  },
  {
    id: 3,
    companyName: "Operational Software, Bristol, UK, Remote",
    duration: `February
            2022 - Present`,
    roles: ["Full stack Developer", "Innovated designs", "Nextjs"],
    tags: ["HTML", "CSS", "NextJS", "Typescript", "Algorithims"],
    details: {
      imagePaths: ["/project-1.jpeg"],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            tempore libero hic ea. Nihil ratione aliquam sunt magnam esse
            suscipit!`,
    },
  },
  {
    id: 4,
    companyName: "Operational Software, Bristol, UK, Remote",
    duration: `February
            2022 - Present`,
    roles: ["Full stack Developer", "Innovated designs", "Nextjs"],
    tags: ["HTML", "CSS", "NextJS", "Typescript", "Algorithims"],
  },
  {
    id: 5,
    companyName: "Operational Software, Bristol, UK, Remote",
    duration: `February
            2022 - Present`,
    roles: ["Full stack Developer", "Innovated designs", "Nextjs"],
    tags: ["HTML", "CSS", "NextJS", "Typescript", "Algorithims"],
  },
];
