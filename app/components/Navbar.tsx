"use client";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  setHovered: (value: boolean) => void;
};

export const Navbar: React.FC<Props> = ({ setHovered }) => {
  const links = [
    {
      id: 1,
      name: "Story",
      link: "#story",
    },
    {
      id: 2,
      name: "Workflow",
      link: "#workflow",
    },
    {
      id: 3,
      name: "Projects",
      link: "#projects",
    },
    {
      id: 4,
      name: "Experience",
      link: "#experience",
    },
    {
      id: 5,
      name: "Contacts",
      link: "#contacts",
    },
  ];

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const Links = () => (
    <ul
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="hidden md:flex gap-x-6  text-sm font-semibold font-sans relative"
    >
      {links.map(({ id, link, name }) => (
        <li key={id}>
          <Link href={link}>
            <p>{name.toUpperCase()}</p>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full h-20 text-white mix-blend-difference">
      <div className="container mx-auto px-2 h-full">
        <div className="flex justify-between items-center h-full">
          <h1 className="font-sans font-semibold">Numan Javed</h1>
          <MenuIcon className="md:hidden" />
          <Links />
        </div>
      </div>
    </div>
  );
};
