"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/utils/cn";
import { Menu } from "lucide-react";
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
    const threshold = 10;

    if (Math.abs(diff) > threshold) {
      setScrollDirection(diff > 0 ? "down" : "up");
    }

    setIsScrolled(current > 100);
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

        <DesktopLinks pathname={pathname} />
        <MobileLinks pathname={pathname} />
      </Container>
    </nav>
  );
};

const DesktopLinks = (props: { pathname: string }) => (
  <div className="hidden items-center md:flex">
    {NAV_LINKS.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          buttonVariants({ variant: "link", size: "sm" }),
          props.pathname.startsWith(link.href) && "font-bold underline",
        )}
      >
        {link.label}
      </Link>
    ))}
  </div>
);

const MobileLinks = (props: { pathname: string }) => (
  <div className="md:hidden">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={`ghost`}>
          <Menu className="text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col items-start justify-between px-8 pt-[15vh] pb-[10vh] *:text-start">
        <SheetHeader>
          <SheetTitle className="sr-only">Sidebar</SheetTitle>
          <SheetDescription className="sr-only">
            Description for sidebar
          </SheetDescription>
        </SheetHeader>
        <main className="flex h-full w-full flex-col justify-between gap-8 text-lg font-semibold text-black">
          <section className="flex flex-col gap-2">
            {NAV_LINKS.map((nav, i) => (
              <Link
                key={i}
                href={nav.href}
                className={cn(
                  "font-normal",
                  props.pathname.startsWith(nav.href) && "font-bold",
                )}
              >
                <SheetClose>{nav.label}</SheetClose>
              </Link>
            ))}
          </section>
        </main>
      </SheetContent>
    </Sheet>
  </div>
);

export default Navbar;
