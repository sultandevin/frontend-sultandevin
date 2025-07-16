"use client";

import { motion, useScroll } from "motion/react";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        originX: 0,
        backgroundColor: "blue",
        zIndex: 60,
      }}
    />
  );
};

export default ScrollProgressBar;
