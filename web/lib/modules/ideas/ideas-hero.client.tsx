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
import { Idea } from "@/payload-types";

interface IdeasHeroClientProps {
  page: Idea | null;
}

export const IdeasHeroClient = ({ page }: IdeasHeroClientProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useParallax(scrollYProgress, 100);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <NavbarResolver />
      <Container className="relative z-10 min-h-[40vh] items-center justify-center text-white">
        <motion.div
          className="flex translate-y-25 flex-col items-center"
          style={{ y, opacity, scale }}
        >
          <h1 className="text-4xl font-bold">{page?.heading || "Ideas"}</h1>
          <h2 className="">
            {page?.subheading || "Where all our great things begin"}
          </h2>
        </motion.div>
      </Container>

      <motion.div className="absolute inset-0 -z-10" style={{ y }}>
        <Image
          // @ts-expect-error typescript doesn't recognize the nested interface
          src={page?.image.url || `/placeholder.webp`}
          alt="Ideas Image"
          className="pointer-events-none translate-y-30 object-cover select-none"
          fill
          sizes="100%"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-black/40" />
      <div
        className="absolute inset-x-0 bottom-0 h-20 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      />
    </section>
  );
};

function useParallax(value: MotionValue<number>, distance = 100) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
