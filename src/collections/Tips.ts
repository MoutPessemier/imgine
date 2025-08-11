import { type CollectionConfig } from "payload";

export const Tips: CollectionConfig = {
  slug: "tips",
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "content", type: "text", required: true },
    { name: "image", type: "relationship", relationTo: "media" },
    {
      name: "category",
      type: "select",
      options: ["Food", "Weather", "Stress"],
    },
  ],
};
