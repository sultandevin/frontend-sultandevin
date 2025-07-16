"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="min-h-[50vh] items-center justify-center">
      <h2>Something went wrong! Please try again.</h2>
      <Button
        variant={`secondary`}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Container>
  );
}
