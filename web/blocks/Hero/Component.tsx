"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import NavbarResolver from "@/lib/modules/layout/navbar-resolver";
import { Hero as HeroType } from "@/payload-types";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// Helper function for parallax effect
const useParallax = (value: any, distance: number) => {
  return useTransform(value, [0, 1], [0, distance]);
};

const HeroBlock = ({ block }: { block: HeroType }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useParallax(scrollYProgress, 100);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Set variant-specific styles
  const getContainerClasses = () => {
    switch (block.variant) {
      case "high-impact":
        return "min-h-[85vh] items-center justify-center text-white";
      case "medium-impact":
        return "min-h-[60vh] items-center justify-center text-white";
      case "small-impact":
        return "min-h-[30vh] items-center justify-end pb-8 text-white";
      default:
        return "min-h-[85vh] items-center justify-center text-white";
    }
  };

  // Set heading text size based on variant
  const getHeadingClasses = () => {
    switch (block.variant) {
      case "high-impact":
        return "text-5xl md:text-6xl font-bold";
      case "medium-impact":
        return "text-4xl md:text-5xl font-bold";
      case "small-impact":
        return "text-3xl md:text-4xl font-bold";
      default:
        return "text-5xl md:text-6xl font-bold";
    }
  };

  // Set subheading text size based on variant
  const getSubheadingClasses = () => {
    switch (block.variant) {
      case "high-impact":
        return "text-xl md:text-2xl mt-4";
      case "medium-impact":
        return "text-lg md:text-xl mt-3";
      case "small-impact":
        return "text-base md:text-lg mt-2";
      default:
        return "text-xl md:text-2xl mt-4";
    }
  };

  return (
    <section ref={ref} className="relative overflow-hidden">
      <NavbarResolver />
      <Container className={`relative z-10 ${getContainerClasses()}`}>
        <motion.div
          className="flex max-w-4xl flex-col items-center text-center"
          style={{ opacity }}
        >
          <h1 className={getHeadingClasses()}>{block.heading}</h1>
          {block.subheading && (
            <h2 className={getSubheadingClasses()}>{block.subheading}</h2>
          )}

          {/* Show CTA buttons only for high and medium impact variants */}
          {(block.variant === "high-impact" ||
            block.variant === "medium-impact") &&
            block.ctaButtons && (
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {block.ctaButtons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || "default"}
                    size="lg"
                    asChild
                  >
                    <Link href={button.link}>{button.label}</Link>
                  </Button>
                ))}
              </div>
            )}
        </motion.div>
      </Container>

      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: block.variant === "small-impact" ? 0 : y }}
      >
        <Image
          // @ts-expect-error Typescript may not recognize the type of `block.backgroundImage`
          src={block.backgroundImage?.url || `/placeholder.webp`}
          alt={block.heading || "Hero Image"}
          className="pointer-events-none object-cover select-none"
          fill
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Overlay with varying opacity based on variant */}
      <div
        className={`absolute inset-0 -z-10 bg-black ${
          block.variant === "high-impact"
            ? "opacity-40"
            : block.variant === "medium-impact"
              ? "opacity-30"
              : "opacity-50"
        }`}
      />
    </section>
  );
};

export default HeroBlock;
