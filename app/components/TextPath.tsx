"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TextPath() {
  const container = useRef<HTMLDivElement>(null);
  const path1 = useRef<SVGTextPathElement>();
  const path2 = useRef<SVGTextPathElement>();
  const path3 = useRef<SVGTextPathElement>();
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to different speeds for each path
  const path1Progress = useTransform(scrollYProgress, [0, 1], [-40, 80]);
  const path2Progress = useTransform(scrollYProgress, [0, 1], [-60, 100]);
  const path3Progress = useTransform(scrollYProgress, [0, 1], [-20, 60]);

  // Transform for opacity and scale effects
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.4, 1, 1, 0.4]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  useEffect(() => {
    const unsubscribe1 = path1Progress.on("change", (latest) => {
      if (path1.current) {
        path1.current.setAttribute("startOffset", `${latest}%`);
      }
    });

    const unsubscribe2 = path2Progress.on("change", (latest) => {
      if (path2.current) {
        path2.current.setAttribute("startOffset", `${latest}%`);
      }
    });

    const unsubscribe3 = path3Progress.on("change", (latest) => {
      if (path3.current) {
        path3.current.setAttribute("startOffset", `${latest}%`);
      }
    });

    return () => {
      unsubscribe1();
      unsubscribe2();
      unsubscribe3();
    };
  }, [path1Progress, path2Progress, path3Progress]);

  const texts = [
    "Controlling complexity is the essence of computer programming",
    "Code is poetry written in logic",
    "Innovation distinguishes between a leader and a follower",
  ];

  return (
    <div className="cursor-auto md:cursor-none relative" ref={container}>
      <motion.div
        className="relative overflow-hidden"
        style={{ opacity, scale }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-30 rounded-3xl" />

        {/* Main SVG with multiple paths */}
        <svg
          className="w-full mb-16 sm:mb-24 md:mb-32 lg:mb-40 relative z-10"
          viewBox="0 0 400 140"
          style={{
            filter: isHovered
              ? "drop-shadow(0 4px 20px rgba(0,0,0,0.1))"
              : "none",
            transition: "filter 0.3s ease",
            minHeight: "120px",
          }}
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient
              id="textGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#3B82F6", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#8B5CF6", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#EC4899", stopOpacity: 1 }}
              />
            </linearGradient>

            <linearGradient
              id="textGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#10B981", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#3B82F6", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#8B5CF6", stopOpacity: 1 }}
              />
            </linearGradient>

            <linearGradient
              id="textGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#F59E0B", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#EF4444", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#EC4899", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          {/* Path 1 - Main curve */}
          <path
            fill="none"
            id="curve1"
            d="m0,100c80,0,80-70,160-70,80,0,80,70,160,70"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="1"
          />

          {/* Path 2 - Secondary curve */}
          <path
            fill="none"
            id="curve2"
            d="m0,60c100,0,60-30,200-30,100,0,60,30,200,30"
            stroke="rgba(139, 92, 246, 0.1)"
            strokeWidth="1"
          />

          {/* Path 3 - Tertiary curve */}
          <path
            fill="none"
            id="curve3"
            d="m0,120c120,0,40-80,200-80,120,0,40,80,200,80"
            stroke="rgba(236, 72, 153, 0.1)"
            strokeWidth="1"
          />

          {/* Text on Path 1 */}
          <text
            className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-medium uppercase tracking-wider"
            fill="url(#textGradient1)"
            opacity={isHovered ? 1 : 0.8}
            style={{
              transition: "opacity 0.3s ease",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <textPath
              ref={(ref) => {
                if (!ref) return;
                path1.current = ref;
              }}
              href="#curve1"
            >
              {texts[0]}
            </textPath>
          </text>

          {/* Text on Path 2 */}
          <text
            className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-light uppercase tracking-widest"
            fill="url(#textGradient2)"
            opacity={isHovered ? 0.9 : 0.6}
            style={{
              transition: "opacity 0.3s ease",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <textPath
              ref={(ref) => {
                if (!ref) return;
                path2.current = ref;
              }}
              href="#curve2"
            >
              {texts[1]}
            </textPath>
          </text>

          {/* Text on Path 3 */}
          <text
            className="text-[9px] sm:text-[11px] md:text-[13px] lg:text-[15px] font-thin uppercase tracking-[0.2em]"
            fill="url(#textGradient3)"
            opacity={isHovered ? 0.8 : 0.4}
            style={{
              transition: "opacity 0.3s ease",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <textPath
              ref={(ref) => {
                if (!ref) return;
                path3.current = ref;
              }}
              href="#curve3"
            >
              {texts[2]}
            </textPath>
          </text>
        </svg>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-3 h-3 sm:w-2 sm:h-2 bg-blue-400 rounded-full opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-2 h-2 sm:w-1 sm:h-1 bg-purple-400 rounded-full opacity-40"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>
    </div>
  );
}
