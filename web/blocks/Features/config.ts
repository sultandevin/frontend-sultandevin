import { Block } from "payload";

export const Features: Block = {
  slug: "features",
  interfaceName: "Features",
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
          label: "Grid (3 columns)",
          value: "grid",
        },
        {
          label: "List (2 columns with images)",
          value: "list",
        },
        {
          label: "Cards",
          value: "cards",
        },
      ],
      defaultValue: "grid",
      required: true,
    },
    {
      name: "features",
      type: "array",
      required: true,
      minRows: 1,
      maxRows: 9,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
        {
          name: "icon",
          type: "select",
          options: [
            { label: "None", value: "none" },
            { label: "Lightbulb", value: "lightbulb" },
            { label: "Star", value: "star" },
            { label: "Heart", value: "heart" },
            { label: "Shield", value: "shield" },
            { label: "Rocket", value: "rocket" },
            { label: "Chart", value: "chart" },
            { label: "Target", value: "target" },
            { label: "Settings", value: "settings" },
          ],
          defaultValue: "none",
          required: true,
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: false,
          admin: {
            description: "Used in List and Cards layouts",
          },
        },
        {
          name: "link",
          type: "group",
          required: false,
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
            },
            {
              name: "url",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
