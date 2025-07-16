"use client";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { cn } from "@/utils/cn";
import { useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  {
    href: "/work",
    label: "Work",
  },
  {
    href: "/about",
    label: "Services",
  },
  {
    href: "/ideas",
    label: "Ideas",
  },
  {
    href: "/careers",
    label: "Careers",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - (scrollY?.getPrevious() ?? 0);
    const threshold = 30;

    if (Math.abs(diff) > threshold) {
      setScrollDirection(diff > 0 ? "down" : "up");
    }

    setIsScrolled(current > 100);
    console.log(diff);
  });

  return (
    <nav
      className={cn(
        "bg-primary/80 fixed inset-x-0 top-0 z-50 flex h-25 items-center text-white backdrop-blur-sm transition-transform duration-300 ease-out",
        isScrolled && scrollDirection === "down" && "-translate-y-full",
      )}
    >
      <Container className="flex-row items-center justify-between py-0">
        <Link href={`/`}>
          <Image
            src="/logo.webp"
            alt="Suitmedia Logo"
            width={100}
            height={100}
            className="pointer-events-none brightness-0 invert select-none"
          />
        </Link>

        <div>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                buttonVariants({ variant: "link", size: "sm" }),
                pathname.startsWith(link.href) && "font-bold underline",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
