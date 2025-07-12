"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function TextPath() {
  const container = useRef<HTMLDivElement>(null);
  const path1 = useRef<SVGTextPathElement>();
  const path2 = useRef<SVGTextPathElement>();
  const path3 = useRef<SVGTextPathElement>();

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
    <div
      className="cursor-auto md:cursor-none relative mix-blend-difference"
      ref={container}
    >
      <motion.div
        className="relative overflow-hidden"
        style={{ opacity, scale }}
      >
        {/* Main SVG with multiple paths */}
        <svg
          className="w-full mb-16 sm:mb-24 md:mb-32 lg:mb-40 relative z-10"
          viewBox="0 0 400 200"
          style={{
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
                style={{ stopColor: "#ffffff", stopOpacity: 0.8 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#ffffff", stopOpacity: 0.6 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ffffff", stopOpacity: 0.4 }}
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
                style={{ stopColor: "#ffffff", stopOpacity: 0.6 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#ffffff", stopOpacity: 0.4 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ffffff", stopOpacity: 0.3 }}
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
                style={{ stopColor: "#ffffff", stopOpacity: 0.4 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#ffffff", stopOpacity: 0.3 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ffffff", stopOpacity: 0.2 }}
              />
            </linearGradient>
          </defs>

          {/* Path 1 - First curve */}
          <path
            fill="none"
            id="curve1"
            d="m0,60c80,0,80-40,160-40,80,0,80,40,160,40"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />

          {/* Path 2 - Second curve */}
          <path
            fill="none"
            id="curve2"
            d="m0,120c80,0,80-40,160-40,80,0,80,40,160,40"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />

          {/* Path 3 - Third curve */}
          <path
            fill="none"
            id="curve3"
            d="m0,180c80,0,80-40,160-40,80,0,80,40,160,40"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />

          {/* Text on Path 1 */}
          <text
            className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-medium uppercase tracking-wider"
            fill="url(#textGradient1)"
            opacity={0.8}
            style={{
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
            opacity={0.6}
            style={{
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
            opacity={0.4}
            style={{
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
      </motion.div>
    </div>
  );
}
