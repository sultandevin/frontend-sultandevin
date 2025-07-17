"use client";

import Container from "@/components/ui/container";
import { cn } from "@/utils/cn";
import { Features as FeaturesType } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

// SVG icons for features
const FeatureIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "lightbulb":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.75 6.75 0 1 1 1.5 0v4.661c0 .326.277.585.6.544.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
          <path
            fillRule="evenodd"
            d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "star":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "heart":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
      );
    case "shield":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "rocket":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
        </svg>
      );
    case "chart":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "target":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "settings":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.986.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return null;
  }
};

const FeaturesBlock = ({ block }: { block: FeaturesType }) => {
  // Grid Layout (3 columns)
  if (block.layout === "grid") {
    return (
      <Container className="py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">{block.heading}</h2>
          {block.subheading && (
            <p className="text-lg text-gray-600">{block.subheading}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {block.features?.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg border p-6 text-center"
            >
              {feature.icon !== "none" && (
                <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <FeatureIcon icon={feature.icon} />
                </div>
              )}

              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="mb-4 text-gray-600">{feature.description}</p>

              {feature.link && (
                <Link
                  href={feature.link.url}
                  className="text-primary mt-auto hover:underline"
                >
                  {feature.link.text}
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    );
  }

  // List Layout (2 columns with images)
  if (block.layout === "list") {
    return (
      <Container className="py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">{block.heading}</h2>
          {block.subheading && (
            <p className="text-lg text-gray-600">{block.subheading}</p>
          )}
        </div>

        <div className="space-y-12">
          {block.features?.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center gap-8 md:flex-row",
                index % 2 === 1 ? "md:flex-row-reverse" : "",
              )}
            >
              {
                // @ts-ignore
                feature.image?.url && (
                  <div className="w-full md:w-1/2">
                    <Image
                      src={
                        // @ts-ignore
                        feature.image.url
                      }
                      alt={feature.title}
                      width={500}
                      height={300}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                )
              }

              <div className="w-full space-y-4 md:w-1/2">
                {feature.icon !== "none" && (
                  <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                    <FeatureIcon icon={feature.icon} />
                  </div>
                )}

                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>

                {feature.link && (
                  <Link
                    href={feature.link.url}
                    className="text-primary mt-2 inline-block hover:underline"
                  >
                    {feature.link.text}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    );
  }

  // Cards Layout
  return (
    <Container className="py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">{block.heading}</h2>
        {block.subheading && (
          <p className="text-lg text-gray-600">{block.subheading}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {block.features?.map((feature, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border shadow-sm"
          >
            {
              // @ts-ignore
              feature.image?.url && (
                <div className="relative h-48">
                  <Image
                    src={
                      // @ts-ignore
                      feature.image.url
                    }
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )
            }

            <div className="p-6">
              <div className="mb-3 flex items-center gap-2">
                {feature.icon !== "none" && (
                  <div className="text-primary">
                    <FeatureIcon icon={feature.icon} />
                  </div>
                )}
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>

              <p className="mb-4 text-gray-600">{feature.description}</p>

              {feature.link && (
                <Link
                  href={feature.link.url}
                  className="text-primary mt-2 inline-block hover:underline"
                >
                  {feature.link.text}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeaturesBlock;
