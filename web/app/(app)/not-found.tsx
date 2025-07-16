import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { cn } from "@/utils/cn";
import { Frown } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main>
      <Container className="min-h-screen items-center justify-center text-center">
        <Frown className="size-30 font-extrabold" />
        <h1 className="text-2xl font-bold">Oops! Page not found.</h1>
        <Link
          href={`/`}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          Go Home
        </Link>
      </Container>
    </main>
  );
};

export default NotFoundPage;
