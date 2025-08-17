import { type CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "content", type: "text", required: true },
    { name: "writer", type: "relationship", relationTo: "users" },
    {
      name: "category",
      type: "select",
      options: ["Vision", "Hearing", "Speech", "Swallowing"],
    },
  ],
};
