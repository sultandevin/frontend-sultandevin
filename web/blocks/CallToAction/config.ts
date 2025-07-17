import { Block } from "payload";

export const CallToAction: Block = {
  slug: "call-to-action",
  interfaceName: "CallToAction",
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "alignment",
      type: "select",
      options: [
        {
          label: "Left",
          value: "left",
        },
        {
          label: "Center",
          value: "center",
        },
        {
          label: "Right",
          value: "right",
        },
      ],
      defaultValue: "center",
      required: true,
    },
    {
      name: "buttons",
      type: "array",
      required: true,
      minRows: 1,
      maxRows: 2,
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
            {
              label: "Ghost",
              value: "ghost",
            },
          ],
          defaultValue: "default",
          required: true,
        },
        {
          name: "size",
          type: "select",
          options: [
            {
              label: "Default",
              value: "default",
            },
            {
              label: "Small",
              value: "sm",
            },
            {
              label: "Large",
              value: "lg",
            },
          ],
          defaultValue: "default",
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
        {
          label: "Primary",
          value: "primary",
        },
      ],
      defaultValue: "none",
      required: true,
    },
  ],
};
