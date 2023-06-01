import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";

import Post from "../types/post";

export async function get() {
  const posts = await getCollection("posts");
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://seraphimkablog.netlify.app/",
    items: posts.map((post: Post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}`,
    })),
    customData: "<language>en-us</language>",
  });
}
