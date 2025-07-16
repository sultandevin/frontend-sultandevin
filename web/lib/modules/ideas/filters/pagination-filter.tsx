import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { ApiResponse } from "@/lib/types/suitmedia-api";
import { cn } from "@/utils/cn";
import { ChevronLeft, ChevronsLeft } from "lucide-react";
import Link from "next/link";

const PaginationFilter = (props: { posts: ApiResponse }) => {
  const allLinks = props.posts.meta.links;
  const navigationLinks = allLinks.filter(
    (link) =>
      link.label.toLowerCase().includes("previous") ||
      link.label.toLowerCase().includes("next"),
  );
  const pageLinks = allLinks.filter(
    (link) =>
      !link.label.toLowerCase().includes("previous") &&
      !link.label.toLowerCase().includes("next"),
  );

  const currentIndex = pageLinks.findIndex((link) => link.active);
  const totalPages = pageLinks.length;

  let startIndex = Math.max(0, currentIndex - 2);
  const endIndex = Math.min(totalPages - 1, startIndex + 4);

  if (endIndex - startIndex < 4) {
    startIndex = Math.max(0, endIndex - 4);
  }

  const visiblePageLinks = pageLinks.slice(startIndex, endIndex + 1);
  const links = [
    ...navigationLinks.filter((link) =>
      link.label.toLowerCase().includes("previous"),
    ),
    ...visiblePageLinks,
    ...navigationLinks.filter((link) =>
      link.label.toLowerCase().includes("next"),
    ),
  ];

  return (
    <Container className="flex items-center justify-center">
      <div className="flex items-center gap-3">
        <Slot href={props.posts.links.first?.split("/").pop() || "/"}>
          <Button
            variant="link"
            size="none"
            className="text-base text-orange-400/80 hover:text-orange-400 hover:no-underline"
          >
            <ChevronsLeft className="font-bold" />
          </Button>
        </Slot>
        {links.map((link, i) => (
          <Slot
            key={link.label}
            disabled={link.url === null}
            href={link.url?.split("/").pop() || "/"}
            scroll={false}
            replace
          >
            <Button
              variant={link.active ? `default` : `link`}
              size={link.active ? `sm` : `none`}
              disabled={link.url === null}
              className={cn(
                "text-base text-orange-400/80 hover:text-orange-400 hover:no-underline",
                link.active && "font-bold text-white",
              )}
            >
              {(() => {
                switch (i) {
                  case 0:
                    return <ChevronLeft className="font-bold" />;
                  case links.length - 1:
                    return <ChevronLeft className="rotate-180 font-bold" />;
                  default:
                    return <>{link.label}</>;
                }
              })()}
            </Button>
          </Slot>
        ))}
        <Slot href={props.posts.links.last?.split("/").pop() || "/"}>
          <Button
            variant="link"
            size="none"
            className="text-base text-orange-400/80 hover:text-orange-400 hover:no-underline"
          >
            <ChevronsLeft className="rotate-180 font-bold" />
          </Button>
        </Slot>
      </div>
    </Container>
  );
};

const Slot = ({
  disabled = false,
  children,
  ...props
}: { disabled?: boolean; children?: React.ReactNode } & React.ComponentProps<
  typeof Link
>) => {
  if (disabled) {
    return <span>{children}</span>;
  }

  return <Link {...props}>{children}</Link>;
};

export default PaginationFilter;
