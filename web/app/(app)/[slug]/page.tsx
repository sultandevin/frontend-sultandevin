import AccordionBlock from "@/blocks/Accordion/Component";
import CallToActionBlock from "@/blocks/CallToAction/Component";
import ContentWithMediaBlock from "@/blocks/ContentWithMedia/Component";
import FeaturesBlock from "@/blocks/Features/Component";
import HeaderBlock from "@/blocks/Header/Component";
import HeroBlock from "@/blocks/Hero/Component";
import TestimonialsBlock from "@/blocks/Testimonials/Component";
import { getPageBySlug, getPages } from "@/lib/payload/utils";
import { Page } from "@/payload-types";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const pages = await getPages();

  return pages.map((page) => ({
    slug: page.slug,
  }));
}

const DynamicPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) notFound();

  return (
    <>
      {page && page.hero.map((block) => renderHero(block))}
      {page && page.layout?.map((block) => renderBlock(block))}
    </>
  );
};

const renderHero = (block: Page["hero"][number]) => {
  switch (block.blockType) {
    case "hero":
      return <HeroBlock key={block.id} block={block} />;
    default:
      return null;
  }
};

const renderBlock = (block: Page["layout"][number]) => {
  switch (block.blockType) {
    case "header":
      return <HeaderBlock key={block.id} block={block} />;
    case "accordion":
      return <AccordionBlock key={block.id} block={block} />;
    case "testimonials":
      return <TestimonialsBlock key={block.id} block={block} />;
    case "content-with-media":
      return <ContentWithMediaBlock key={block.id} block={block} />;
    case "call-to-action":
      return <CallToActionBlock key={block.id} block={block} />;
    case "features":
      return <FeaturesBlock key={block.id} block={block} />;
    default:
      return null;
  }
};

export default DynamicPage;
