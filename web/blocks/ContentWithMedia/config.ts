import { Block } from "payload";

export const ContentWithMedia: Block = {
  slug: "content-with-media",
  interfaceName: "ContentWithMedia",
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
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "mediaPosition",
      type: "select",
      options: [
        {
          label: "Left",
          value: "left",
        },
        {
          label: "Right",
          value: "right",
        },
      ],
      defaultValue: "right",
      required: true,
    },
    {
      name: "background",
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
      defaultValue: "none",
      required: true,
    },
    {
      name: "button",
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
          ],
          defaultValue: "default",
          required: true,
        },
      ],
    },
  ],
};
