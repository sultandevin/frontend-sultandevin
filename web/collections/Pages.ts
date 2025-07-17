import { Accordion } from "@/blocks/Accordion/config";
import { CallToAction } from "@/blocks/CallToAction/config";
import { ContentWithMedia } from "@/blocks/ContentWithMedia/config";
import { Features } from "@/blocks/Features/config";
import { Header } from "@/blocks/Header/config";
import { Hero } from "@/blocks/Hero/config";
import { Testimonials } from "@/blocks/Testimonials/config";
import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    livePreview: {
      url: ({ data }) => {
        const isHomePage = data.slug === "home";
        return `${process.env.NEXT_PUBLIC_BASE_URL}${!isHomePage ? `/${data.slug}` : ""}`;
      },
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
    },
    {
      name: "hero",
      type: "blocks",
      blocks: [Hero],
      required: true,
      minRows: 1,
      maxRows: 1,
    },
    {
      name: "layout",
      type: "blocks",
      required: true,
      blocks: [
        Header,
        Accordion,
        CallToAction,
        ContentWithMedia,
        Features,
        Testimonials,
      ],
      minRows: 1,
      maxRows: 10,
    },
  ],
};
