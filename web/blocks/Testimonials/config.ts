import { Block } from "payload";

export const Testimonials: Block = {
  slug: "testimonials",
  interfaceName: "Testimonials",
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "subheading",
      type: "text",
    },
    {
      name: "layout",
      type: "select",
      options: [
        {
          label: "Grid",
          value: "grid",
        },
        {
          label: "Carousel",
          value: "carousel",
        },
        {
          label: "Single Featured",
          value: "featured",
        },
      ],
      defaultValue: "grid",
      required: true,
    },
    {
      name: "testimonials",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "quote",
          type: "textarea",
          required: true,
        },
        {
          name: "author",
          type: "text",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: false,
        },
        {
          name: "avatar",
          type: "upload",
          relationTo: "media",
          required: false,
        },
        {
          name: "rating",
          type: "select",
          options: [
            { label: "None", value: "0" },
            { label: "1 Star", value: "1" },
            { label: "2 Stars", value: "2" },
            { label: "3 Stars", value: "3" },
            { label: "4 Stars", value: "4" },
            { label: "5 Stars", value: "5" },
          ],
          defaultValue: "5",
          required: true,
        },
      ],
    },
    {
      name: "backgroundColor",
      type: "select",
      options: [
        {
          label: "None",
          value: "none",
        },
        {
          label: "Light",
          value: "light",
        },
        {
          label: "Dark",
          value: "dark",
        },
      ],
      defaultValue: "light",
      required: true,
    },
  ],
};
