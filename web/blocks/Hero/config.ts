import { Block } from "payload";

export const Hero: Block = {
  slug: "hero",
  interfaceName: "Hero",
  fields: [
    {
      name: "variant",
      type: "select",
      required: true,
      options: [
        {
          label: "High Impact",
          value: "high-impact",
        },
        {
          label: "Medium Impact",
          value: "medium-impact",
        },
        {
          label: "Small Impact",
          value: "small-impact",
        },
      ],
      defaultValue: "high-impact",
    },
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
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "ctaButtons",
      type: "array",
      required: false,
      admin: {
        description:
          "Call to action buttons (only for high and medium impact variants)",
      },
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "link",
          type: "text",
          required: true,
        },
        {
          name: "variant",
          type: "select",
          required: true,
          options: [
            {
              label: "Primary",
              value: "default",
            },
            {
              label: "Secondary",
              value: "secondary",
            },
            {
              label: "Outline",
              value: "outline",
            },
          ],
          defaultValue: "default",
        },
      ],
      maxRows: 2,
    },
  ],
};
