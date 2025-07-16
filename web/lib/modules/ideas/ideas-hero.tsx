"use client";

import Container from "@/components/ui/container";
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import NavbarResolver from "../layout/navbar-resolver";

const IdeasHero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useParallax(scrollYProgress, 50);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <NavbarResolver />
      <Container className="relative z-10 min-h-[40vh] items-center justify-center text-white">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ideas
        </motion.h1>
        <motion.h2
          className=""
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where all our great things begin
        </motion.h2>
      </Container>

      <motion.div className="absolute inset-0 -z-10" style={{ y }}>
        <Image
          src={`/placeholder.webp`}
          alt="Ideas Image"
          className="translate-y-15 pointer-events-none select-none object-cover"
          fill
          sizes="100%"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-black/40" />
    </section>
  );
};

function useParallax(value: MotionValue<number>, distance = 100) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default IdeasHero;
