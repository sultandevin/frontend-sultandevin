import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <Container className="flex min-h-[90vh] justify-end">
        <div className="flex max-w-lg flex-col gap-3 text-white">
          <h1 className="text-4xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam earum
          </p>
          <Link
            href="/ideas"
            className={cn(buttonVariants({ variant: "default" }), "w-fit")}
          >
            Explore Ideas
          </Link>
        </div>
      </Container>
      <Image
        src="/hero.webp"
        alt="Hero Image"
        fill
        sizes="80%"
        className="pointer-events-none -z-20 object-cover select-none"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black to-transparent" />
    </main>
  );
}
