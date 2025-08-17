import { getPayload } from "payload";

import { BackButton } from "@/components/back-button";
import { PostsCarousel } from "@/components/post-carousel";
import { Search } from "@/components/search";
import { TimeSelector } from "@/components/time-selector";
import config from "@payload-config";

import styles from "./page.module.css";

export default async function General() {
  const payload = await getPayload({ config });
  const posts = await payload.find({
    collection: "posts",
    depth: 2,
  });

  return (
    <main className={styles.container}>
      <BackButton className={styles["back-button"]} />
      <h1 className={styles.title}>Community</h1>
      <Search />
      <TimeSelector title="Popular this " totalDocs={posts.totalDocs} />

      <PostsCarousel posts={posts.docs} />
    </main>
  );
}
