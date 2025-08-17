import Image from "next/image";
import Link from "next/link";
import { getPayload } from "payload";

import { Card } from "@/components/card";
import { Icon } from "@/components/icon";
import { IconCircle } from "@/components/icon-circle";
import { PostCard } from "@/components/post-card";
import { type User } from "@/payload-types";
import { CATEGORIES } from "@/types";
import { type IconName } from "@/types/icons";
import { calculateDaysDifference } from "@/utils/calculate-days-difference";
import { truncate } from "@/utils/truncate";
import config from "@payload-config";

import styles from "./page.module.css";

import "@/styles/globals.css";

const getIconName = (category: string): IconName => {
  const iconMap: Record<string, IconName> = {
    Info: "info",
    Tips: "tips",
    Trails: "trails",
    Community: "community",
    Status: "status",
    Appointments: "appointments",
  };

  return iconMap[category] || "info";
};

export default async function Home() {
  const payload = await getPayload({ config });
  const posts = await payload.find({
    collection: "posts",
    depth: 2,
  });

  return (
    <main className={styles.container}>
      <div>
        <h1 className="page-title">Hi Tine.</h1>
        <h3 className={styles["sub-title"]}>How can I help you today?</h3>
      </div>

      <div className={styles["tips-container"]}>
        {CATEGORIES.map((category) => {
          const iconName = getIconName(category);
          return (
            <Link href={`/${category.toLowerCase()}/general`} key={category}>
              <IconCircle.Root>
                <IconCircle.Circle variant={category} size="large">
                  <Icon name={iconName} />
                </IconCircle.Circle>
                <IconCircle.Label>{category}</IconCircle.Label>
              </IconCircle.Root>
            </Link>
          );
        })}
      </div>

      <Card.Root>
        <Card.Header>
          <IconCircle.Root>
            <IconCircle.Circle variant="Tips" size="medium">
              <Icon name="tips" />
            </IconCircle.Circle>
          </IconCircle.Root>
          <span>Tip of the day</span>
        </Card.Header>
        <Card.Content>
          <Image
            src="/images/swallowing-visual.png"
            alt="Swallowing visual"
            fill
          />
          <Card.Text>
            <span className="tips-title">Swallowing</span>
            <span className="tips-content">
              If you struggle with swallowing, eat soft foods wherever possible.
              You can check out some of our soft food recipes for ideas here.
            </span>
          </Card.Text>
        </Card.Content>
        <Card.Footer>
          <Card.Action href="/tips/general">see all</Card.Action>
          <Card.Action href="/tips/general/2">explore tip</Card.Action>
        </Card.Footer>
      </Card.Root>

      <Card.Root>
        <Card.Header>
          <IconCircle.Root>
            <IconCircle.Circle variant="Community" size="medium">
              <Icon name="community" />
            </IconCircle.Circle>
          </IconCircle.Root>
          <span>Community</span>
        </Card.Header>
        <Card.Content>
          <span className="tips-title">This week&apos;s topics</span>
          <div className={styles["posts-container"]}>
            {posts.docs.map((post) => {
              const writer = post.writer as User;

              return (
                <PostCard.Root key={post.id}>
                  <PostCard.Header>
                    <Image
                      src="/images/profile.png"
                      alt="profile picture"
                      width={26}
                      height={26}
                    />
                    <div>
                      <PostCard.Meta>{`posted ${calculateDaysDifference(post.createdAt)} days ago •  ${writer.name}`}</PostCard.Meta>
                      <PostCard.Title>{post.title}</PostCard.Title>
                    </div>
                  </PostCard.Header>
                  <PostCard.Content>{truncate(post.content)}</PostCard.Content>
                </PostCard.Root>
              );
            })}
          </div>
        </Card.Content>
        <Card.Footer>
          <Card.Action href="#">SEE ALL</Card.Action>
          <Card.Action href="#">ADD TOPIC</Card.Action>
        </Card.Footer>
      </Card.Root>

      <Card.Root>
        <Card.Header>
          <IconCircle.Root>
            <IconCircle.Circle variant="Info" size="medium">
              <Icon name="info" />
            </IconCircle.Circle>
          </IconCircle.Root>
          <span>MG Update</span>
        </Card.Header>
        <Card.Content>
          <Image
            src="/images/swallowing-visual.png"
            alt="Swallowing visual"
            fill
          />
          <Card.Text>
            <span className="tips-title">Swallowing</span>
            <span className="tips-content">
              If you struggle with swallowing, eat soft foods wherever possible.
              You can check out some of our soft food recipes for ideas here.
            </span>
          </Card.Text>
        </Card.Content>
        <Card.Footer>
          <Card.Action href="#">SEE ALL</Card.Action>
          <Card.Action href="#">CHECK UPDATE</Card.Action>
        </Card.Footer>
      </Card.Root>

      <footer className={styles.footer}>
        <Link href="#">
          <Icon name="stats" width={48} height={48} />
        </Link>
        <Link href="#">
          <Icon name="home-active" width={48} height={48} />
        </Link>
        <Link href="#">
          <Icon name="profile" width={48} height={48} />
        </Link>
      </footer>
    </main>
  );
}
