"use client";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useQRCode } from "next-qrcode";
import Link from "next/link";
import { useRef } from "react";
import { socials } from "../data";

const EMAIL = "numanjaved2001@gmail.com";
export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const { Canvas } = useQRCode();

  const words = EMAIL.split("");

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.05, // Delay between each word reveal
      },
    },
  };

  const MotionLink = motion(Link);

  return (
    <footer className="cursor-auto md:cursor-none bg-white mix-blend-difference text-black h-[40vh] flex flex-col md:flex-row md:justify-between md:items-center p-2">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={iconVariants}
        className="flex flex-col justify-center items-center"
      >
        <Link
          className=""
          href="/assets/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
        >
          <Canvas
            text="/assets/Resume.pdf"
            options={{
              errorCorrectionLevel: "M",
              margin: 3,
              scale: 2,
              width: 100,
            }}
          />
        </Link>
      </motion.div>

      <div>
        <motion.div
          ref={ref}
          className="tracking-widest text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-5 break-words text-center font-serif flex gap-1"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {words.map((word, index) => (
            <motion.span key={index} variants={wordVariants}>
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-6 mt-5"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={iconVariants}
        >
          <MotionLink
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover={{ scale: 1.2, color: "#0e76a8" }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={30} />
          </MotionLink>
          <MotionLink
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover={{ scale: 1.2, color: "#333" }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={30} />
          </MotionLink>
        </motion.div>
      </div>
    </footer>
  );
}
