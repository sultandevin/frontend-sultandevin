import type { CollectionConfig } from "payload";

export const Page: CollectionConfig = {
  slug: "pages",
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
      blocks: [
        {
          slug: "hero",
          fields: [
            {
              name: "heading",
              type: "text",
              required: true,
            },
            {
              name: "subheading",
              type: "text",
              required: true,
            },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
            },
          ],
        },
      ],
    },
  ],
};
