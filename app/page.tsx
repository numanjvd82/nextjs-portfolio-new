"use client";
import {
  motion,
  SpringOptions,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import TextPath from "./components/TextPath";

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const CURSOR_SIZE = hovered ? 50 : 30;

  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouseOptions: SpringOptions = {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  };

  const smoothMouse = {
    x: useSpring(mousePosition.x, smoothMouseOptions),
    y: useSpring(mousePosition.y, smoothMouseOptions),
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mousePosition.x.set(clientX - CURSOR_SIZE / 2);
    mousePosition.y.set(clientY - CURSOR_SIZE / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return (
    <div className="h-full">
      <motion.div
        initial={false}
        animate={{
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
        }}
        style={{
          top: smoothMouse.y,
          left: smoothMouse.x,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
        className="
          bg-black rounded-full fixed pointer-events-none
        "
      ></motion.div>
      <Navbar setHovered={setHovered} />
      <Hero />
      <TextPath />
      <Projects />
    </div>
  );
}
