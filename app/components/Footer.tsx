"use client";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { socials } from "../data";

const EMAIL = "numanjaved2001@gmail.com";
const LOCATION = "Islamabad, Pakistan";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const currentYear = new Date().getFullYear();

  const words = EMAIL.split("");

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#333",
      transition: { duration: 0.3, type: "spring", stiffness: 200 },
    },
    tap: {
      scale: 0.95,
      backgroundColor: "#222",
      transition: { duration: 0.2 },
    },
  };

  const MotionLink = motion(Link);

  return (
    <footer className="cursor-auto md:cursor-none mix-blend-difference bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left side - Contact info */}
          <motion.div
            ref={ref}
            className="space-y-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-6">
                Let&apos;s Connect
              </h2>
              <p className="text-base sm:text-lg opacity-80 leading-relaxed mb-8">
                Ready to bring your ideas to life? I&apos;d love to hear about
                your next project and explore how we can work together.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg group-hover:bg-gray-300 transition-colors duration-200">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-sm opacity-60 uppercase tracking-wider">
                    Email
                  </p>
                  <Link
                    href={`mailto:${EMAIL}`}
                    className="text-lg font-medium hover:underline"
                  >
                    {EMAIL}
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg group-hover:bg-gray-300 transition-colors duration-200">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-sm opacity-60 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-lg font-medium">{LOCATION}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Email animation and socials */}
          <motion.div
            className="flex flex-col justify-center items-center lg:items-end space-y-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            {/* Animated email */}
            <motion.div
              className="text-center lg:text-right"
              variants={containerVariants}
            >
              <p className="text-sm opacity-60 uppercase tracking-wider mb-4">
                Drop me a line
              </p>
              <div className="tracking-wider text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif whitespace-nowrap">
                {words.map((word, index) => (
                  <motion.span key={index} variants={wordVariants}>
                    {word}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Social links and resume */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 items-center"
              variants={iconVariants}
            >
              <div className="flex gap-4">
                <MotionLink
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={24} className="text-blue-600" />
                </MotionLink>
                <MotionLink
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={24} className="text-blue-600" />
                </MotionLink>
              </div>

              <MotionLink
                href="/assets/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                locale={false}
              >
                <motion.button
                  className="bg-black text-white px-6 py-3 rounded-lg font-serif text-sm sm:text-base hover:bg-gray-800 transition-colors duration-200"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Download Resume
                </motion.button>
              </MotionLink>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={
            isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
          }
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Bottom section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-60"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <p className="text-center sm:text-left">
            © {currentYear} Numan Javed. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
