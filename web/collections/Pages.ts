import { Accordion } from "@/blocks/Accordion/config";
import { Header } from "@/blocks/Header/config";
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
      name: "layout",
      type: "blocks",
      required: true,
      blocks: [Header, Accordion],
      minRows: 1,
      maxRows: 10,
    },
  ],
};
