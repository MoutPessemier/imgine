import Image from "next/image";
import { getPayload } from "payload";

import { BackButton } from "@/components/back-button/back-button";
import { Card } from "@/components/card";
import { Icon } from "@/components/icon";
import { IconCircle } from "@/components/icon-circle";
import { Search } from "@/components/search";
import { TimeSelector } from "@/components/time-selector";
import { type Media } from "@/payload-types";
import config from "@payload-config";

import styles from "./page.module.css";

export default async function General() {
  const payload = await getPayload({ config });
  const tips = await payload.find({
    collection: "tips",
    depth: 2,
  });

  return (
    <main className={styles.container}>
      <BackButton className={styles["back-button"]} />
      <h1 className={styles.title}>Tips/FAQ</h1>
      <Search />
      <TimeSelector title="Tips of the " totalDocs={tips.totalDocs} />

      <div className={styles["tips-container"]}>
        {tips.docs.map((tip) => {
          const image = tip.image as Media;
          return (
            <Card.Root key={tip.id}>
              <Card.Header>
                <IconCircle.Root>
                  <IconCircle.Circle variant="Tips" size="medium">
                    <Icon name="tips" />
                  </IconCircle.Circle>
                </IconCircle.Root>
                <span>{tip.category} Tip</span>
              </Card.Header>
              <Card.Content>
                <Image src={image.url!} alt={image.alt} fill />
                <Card.Text>
                  <span className="tips-title">{tip.title}</span>
                  <span className="tips-content">
                    {tip.content as unknown as string}
                  </span>
                </Card.Text>
              </Card.Content>
              <Card.Footer>
                <Card.Action href="#">MORE LIKE THIS</Card.Action>
                <Card.Action href={`/tips/general/${tip.id}`}>
                  EXPLORE TIP
                </Card.Action>
              </Card.Footer>
            </Card.Root>
          );
        })}
      </div>
    </main>
  );
}
