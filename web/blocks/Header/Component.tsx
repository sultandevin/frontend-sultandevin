"use client";

import Container from "@/components/ui/container";
import NavbarResolver from "@/lib/modules/layout/navbar-resolver";
import { Header, Page } from "@/payload-types";
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const HeaderBlock = ({ block }: { block: Header }) => {
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
          <h1 className="text-4xl font-bold">{block.heading}</h1>
          <h2 className="">{block.subheading}</h2>
        </motion.div>
      </Container>

      <motion.div className="absolute inset-0 -z-10" style={{ y }}>
        <Image
          // @ts-ignore typescript doesn't recognize the `url` property
          src={block.image?.url || `/placeholder.webp`}
          alt="Ideas Image"
          className="pointer-events-none translate-y-30 object-cover select-none"
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

export default HeaderBlock;
