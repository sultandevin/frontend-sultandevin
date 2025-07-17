"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { cn } from "@/utils/cn";
import { ContentWithMedia as ContentWithMediaType } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";

const ContentWithMediaBlock = ({ block }: { block: ContentWithMediaType }) => {
  // Get background classes
  const getBackgroundClasses = () => {
    switch (block.background) {
      case "light":
        return "bg-gray-100";
      case "dark":
        return "bg-gray-800 text-white";
      default:
        return "";
    }
  };

  return (
    <section className={cn("py-16", getBackgroundClasses())}>
      <Container className="py-0">
        <div
          className={cn(
            "flex flex-col items-center gap-8",
            block.mediaPosition === "left"
              ? "md:flex-row"
              : "md:flex-row-reverse",
          )}
        >
          {/* Media Section */}
          <div className="w-full md:w-1/2">
            {/* @ts-ignore */}
            {block.media?.url && (
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={
                    // @ts-ignore
                    block.media.url
                  }
                  alt={block.heading}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="w-full space-y-4 md:w-1/2">
            <h2 className="text-3xl font-bold">{block.heading}</h2>

            <RichText data={block.content} />

            {block.button && (
              <div className="pt-4">
                <Button variant={block.button.variant} asChild>
                  <Link href={block.button.url}>{block.button.text}</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContentWithMediaBlock;
