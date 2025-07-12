"use client";
import { useLenis } from "@studio-freight/react-lenis";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  setHovered: (value: boolean) => void;
};

export const Navbar: React.FC<Props> = ({ setHovered }) => {
  const lenis = useLenis();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileNavClick = (link: string) => {
    lenis?.scrollTo(link);
    setMobileMenuOpen(false);
  };

  // Burger menu animation variants
  const burgerVariants = {
    closed: {
      rotate: 0,
      scale: 1,
    },
    open: {
      rotate: 180,
      scale: 1.1,
    },
  };

  // Mobile menu overlay variants
  const overlayVariants = {
    closed: {
      opacity: 0,
      backdropFilter: "blur(0px)",
    },
    open: {
      opacity: 1,
      backdropFilter: "blur(20px)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Mobile menu container variants
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  // Mobile menu items stagger animation
  const menuItemsVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const Links = () => (
    <ul
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="hidden md:flex gap-x-6 text-sm font-semibold font-sans relative"
    >
      {links.map(({ id, link, name }) => (
        <li
          onClick={() => lenis?.scrollTo(link)}
          key={id}
          className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
        >
          <Link href="">
            <p>{name.toUpperCase()}</p>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <motion.div
        className="cursor-auto md:cursor-none w-full text-white mix-blend-difference fixed top-0 left-0 right-0 z-50"
        animate={{
          height: isScrolled ? "60px" : "80px",
          backgroundColor: isScrolled
            ? "rgba(0, 0, 0, 0.8)"
            : "rgba(0, 0, 0, 0)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
          borderBottom: isScrolled
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "1px solid rgba(255, 255, 255, 0)",
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          duration: 0.3,
        }}
      >
        <div className="container mx-auto p-2 h-full">
          <div className="flex justify-between items-center h-full">
            <motion.h1
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="font-sans font-semibold"
              animate={{
                fontSize: isScrolled ? "1rem" : "1.125rem",
                opacity: isScrolled ? 0.9 : 1,
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
              }}
            >
              Numan Javed
            </motion.h1>

            {/* Animated burger button */}
            <motion.button
              variants={burgerVariants}
              animate={mobileMenuOpen ? "open" : "closed"}
              onClick={toggleMobileMenu}
              className="md:hidden relative z-50 p-2 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MenuIcon size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <Links />
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={toggleMobileMenu}
          >
            {/* Mobile Menu Container */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-0 right-0 h-full w-80 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-l border-white/10"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Menu Content */}
              <div className="flex flex-col h-full pt-24 px-8">
                {/* Decorative line */}
                <div className="w-12 h-px bg-gradient-to-r from-white/50 to-transparent mb-8"></div>

                {/* Navigation Links */}
                <motion.nav
                  variants={containerVariants}
                  initial="closed"
                  animate="open"
                  className="flex flex-col space-y-8"
                >
                  {links.map(({ id, link, name }, index) => (
                    <motion.div
                      key={id}
                      variants={menuItemsVariants}
                      className="relative"
                    >
                      <motion.button
                        onClick={() => handleMobileNavClick(link)}
                        className="text-white text-2xl font-bold tracking-wider uppercase font-sans hover:text-gray-300 transition-colors duration-200 relative group"
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Hover line */}
                        <motion.div
                          className="absolute -left-4 top-1/2 w-2 h-px bg-white"
                          initial={{ width: 0 }}
                          whileHover={{ width: 8 }}
                          transition={{ duration: 0.2 }}
                        />
                        {name}

                        {/* Number indicator */}
                        <motion.span
                          className="absolute -right-8 top-0 text-xs text-gray-500 font-mono"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          0{index + 1}
                        </motion.span>
                      </motion.button>
                    </motion.div>
                  ))}
                </motion.nav>

                {/* Footer decorative elements */}
                <div className="mt-auto mb-8 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-2"
                  >
                    <div className="w-24 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                    <p className="text-gray-400 text-sm font-mono">
                      Full Stack Developer
                    </p>
                    <div className="w-16 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-1/4 right-8 w-32 h-32 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-1/4 right-16 w-20 h-20 border border-white/10 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
