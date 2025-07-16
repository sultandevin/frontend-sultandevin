import { getPayload } from "payload";
import config from "@payload-config";
import { unstable_cache as cache } from "next/cache";

const payload = await getPayload({ config });

export const getPageBySlug = cache(
  async (slug: string) => {
    const {
      docs: [page],
    } = await payload.find({
      collection: "pages",
      where: {
        slug: { equals: slug },
      },
    });

    return page;
  },
  // cache-key parts
  ["pages-collection"],
  {
    revalidate: 300,
    tags: ["pages"],
  },
);
