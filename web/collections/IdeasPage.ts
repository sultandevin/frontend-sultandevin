import { CollectionConfig } from "payload";

export const IdeasPage: CollectionConfig = {
  slug: "ideas",
  admin: {
    livePreview: {
      url: process.env.NEXT_PUBLIC_BASE_URL + "/ideas",
    },
  },
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
      required: true,
    },
  ],
};
