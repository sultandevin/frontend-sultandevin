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

  const y = useParallax(scrollYProgress, 100);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <NavbarResolver />
      <Container className="relative z-10 min-h-[40vh] items-center justify-center text-white">
        <motion.div className="flex flex-col items-center" style={{ opacity }}>
          <h1 className="text-4xl font-bold">Ideas</h1>
          <h2 className="">Where all our great things begin</h2>
        </motion.div>
      </Container>

      <motion.div className="absolute inset-0 -z-10" style={{ y }}>
        <Image
          src={`/placeholder.webp`}
          alt="Ideas Image"
          className="translate-y-30 pointer-events-none select-none object-cover"
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
