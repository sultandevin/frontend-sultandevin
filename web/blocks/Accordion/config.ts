import { Block } from "payload";

export const Accordion: Block = {
  slug: "accordion",
  interfaceName: "Accordion",
  fields: [
    {
      name: "title",
      type: "text",
      required: false,
    },
    {
      name: "content",
      type: "array",
      fields: [
        {
          name: "trigger",
          type: "text",
          required: true,
        },
        {
          name: "content",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
