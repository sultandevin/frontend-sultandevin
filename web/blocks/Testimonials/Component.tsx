"use client";

import Container from "@/components/ui/container";
import { cn } from "@/utils/cn";
import {
  Testimonials,
  Testimonials as TestimonialsType,
} from "@/payload-types";
import Image from "next/image";
import { useState, useEffect } from "react";

// Star Rating Component
const StarRating = ({ rating }: { rating: string }) => {
  const stars = parseInt(rating, 10);
  return (
    <div className="flex gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i < stars ? "currentColor" : "none"}
          stroke={i < stars ? "none" : "currentColor"}
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({
  testimonial,
}: {
  testimonial: Testimonials["testimonials"][number];
}) => {
  return (
    <div className="flex flex-col rounded-lg bg-white p-6 shadow-md">
      <div className="mb-4">
        {parseInt(testimonial.rating, 10) > 0 && (
          <StarRating rating={testimonial.rating} />
        )}
      </div>

      <blockquote className="mb-6 flex-grow text-gray-700 italic">
        "{testimonial.quote}"
      </blockquote>

      <div className="flex items-center">
        {
          // @ts-ignore
          testimonial.avatar?.url ? (
            <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={
                  // @ts-ignore
                  testimonial.avatar.url
                }
                alt={testimonial.author}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
          ) : (
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-600">
              {testimonial.author.charAt(0)}
            </div>
          )
        }

        <div>
          <div className="font-bold">{testimonial.author}</div>
          {testimonial.title && (
            <div className="text-sm text-gray-600">{testimonial.title}</div>
          )}
        </div>
      </div>
    </div>
  );
};

// Carousel Component
const TestimonialCarousel = ({ testimonials }: { testimonials: any[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (!testimonials?.length) return null;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === activeIndex ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
        onClick={() =>
          setActiveIndex((current) =>
            current === 0 ? testimonials.length - 1 : current - 1,
          )
        }
        aria-label="Previous testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <button
        className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
        onClick={() =>
          setActiveIndex((current) =>
            current === testimonials.length - 1 ? 0 : current + 1,
          )
        }
        aria-label="Next testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

const TestimonialsBlock = ({ block }: { block: TestimonialsType }) => {
  // Get background classes
  const getBackgroundClasses = () => {
    switch (block.backgroundColor) {
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
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">{block.heading}</h2>
          {block.subheading && (
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {block.subheading}
            </p>
          )}
        </div>

        {/* Grid Layout */}
        {block.layout === "grid" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {block.testimonials?.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        )}

        {/* Carousel Layout */}
        {block.layout === "carousel" && (
          <TestimonialCarousel testimonials={block.testimonials || []} />
        )}

        {/* Featured Layout - Shows one large testimonial */}
        {block.layout === "featured" && block.testimonials?.length > 0 && (
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-700">
              <div className="text-primary mb-6 font-serif text-5xl">"</div>

              <blockquote className="mx-auto mb-8 max-w-2xl text-xl italic">
                {block.testimonials[0].quote}
              </blockquote>

              <div className="mb-4 flex items-center justify-center">
                {parseInt(block.testimonials[0].rating, 10) > 0 && (
                  <StarRating rating={block.testimonials[0].rating} />
                )}
              </div>

              <div className="flex flex-col items-center">
                {
                  // @ts-ignore
                  block.testimonials[0].avatar?.url ? (
                    <div className="mb-4 h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={
                          // @ts-ignore
                          block.testimonials[0].avatar.url
                        }
                        alt={block.testimonials[0].author}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-xl text-gray-600">
                      {block.testimonials[0].author.charAt(0)}
                    </div>
                  )
                }

                <div className="text-lg font-bold">
                  {block.testimonials[0].author}
                </div>
                {block.testimonials[0].title && (
                  <div className="text-gray-600 dark:text-gray-300">
                    {block.testimonials[0].title}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default TestimonialsBlock;
