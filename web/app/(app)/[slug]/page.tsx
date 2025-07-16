import AccordionBlock from "@/blocks/Accordion/Component";
import HeaderBlock from "@/blocks/Header/Component";
import { getPageBySlug } from "@/lib/payload/utils";
import { Page } from "@/payload-types";
import { notFound } from "next/navigation";

const DynamicPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  const renderBlock = (block: Page["layout"][number]) => {
    switch (block.blockType) {
      case "header":
        return <HeaderBlock key={block.id} block={block} />;
      case "accordion":
        return <AccordionBlock key={block.id} block={block} />;
      default:
        return null;
    }
  };

  if (!page) notFound();

  return page && page.layout?.map((block) => renderBlock(block));
};

export default DynamicPage;
