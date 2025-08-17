"use client";

import Image from "next/image";

import { Icon } from "@/components/icon";
import { PostCard } from "@/components/post-card";
import { type User, type Post } from "@/payload-types";
import { calculateDaysDifference } from "@/utils/calculate-days-difference";
import { truncate } from "@/utils/truncate";

import styles from "./posts-carousel.module.css";

type PostsCarouselProps = {
  posts: Post[];
};

export const PostsCarousel = ({ posts }: PostsCarouselProps) => {
  if (posts.length === 0) {
    return <div className={styles.empty}>No posts available</div>;
  }

  return (
    <div className={styles.carousel}>
      <div className={styles["slides-container"]}>
        {posts.map((post) => {
          const writer = post.writer as User;

          return (
            <div key={post.id} className={styles.slide}>
              <PostCard.Root>
                <PostCard.Header>
                  <Image
                    src="/images/profile.png"
                    alt="profile picture"
                    width={26}
                    height={26}
                  />
                  <div>
                    <PostCard.Meta>
                      {`posted ${calculateDaysDifference(post.createdAt)} days ago • ${writer.name}`}
                    </PostCard.Meta>
                    <PostCard.Title>{post.title}</PostCard.Title>
                  </div>
                </PostCard.Header>
                <PostCard.Content>
                  {truncate(post.content, 300)}
                </PostCard.Content>
                <PostCard.Action href={`/community/general/${post.id}`}>
                  <span>Continue reading</span>
                  <Icon
                    name="arrow-left"
                    color="#fff"
                    width={20}
                    height={20}
                    // For some reason, the arrow-right would just not show up
                    style={{ transform: "rotate(180deg)" }}
                  />
                </PostCard.Action>
              </PostCard.Root>
            </div>
          );
        })}
      </div>
    </div>
  );
};
