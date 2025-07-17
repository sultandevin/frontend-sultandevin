"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { CallToAction as CallToActionType } from "@/payload-types";

const CallToActionBlock = ({ block }: { block: CallToActionType }) => {
  // Get alignment classes
  const getAlignmentClasses = () => {
    switch (block.alignment) {
      case "left":
        return "items-start text-left";
      case "center":
        return "items-center text-center";
      case "right":
        return "items-end text-right";
      default:
        return "items-center text-center";
    }
  };

  // Get background color classes
  const getBackgroundClasses = () => {
    switch (block.backgroundColor) {
      case "light":
        return "bg-gray-100";
      case "dark":
        return "bg-gray-800 text-white";
      case "primary":
        return "bg-primary text-primary-foreground";
      default:
        return "";
    }
  };

  return (
    <section className={cn("w-full", getBackgroundClasses())}>
      <Container className={cn("py-16", getAlignmentClasses())}>
        <h2 className="mb-4 text-3xl font-bold">{block.heading}</h2>

        <div className="mb-8 max-w-2xl">
          {/* Note: In a real implementation, you would need a richText serializer */}
          <div dangerouslySetInnerHTML={{ __html: block.content }} />
        </div>

        <div
          className={cn("flex flex-wrap gap-4", {
            "justify-center": block.alignment === "center",
            "justify-end": block.alignment === "right",
            "justify-start": block.alignment === "left",
          })}
        >
          {block.buttons?.map((button, index) => (
            <Button
              key={index}
              variant={button.variant as any}
              size={button.size as any}
              asChild
            >
              <Link href={button.link}>{button.label}</Link>
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CallToActionBlock;
