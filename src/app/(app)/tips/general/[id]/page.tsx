import Image from "next/image";
import { getPayload } from "payload";

import { BackButton } from "@/components/back-button/back-button";
import { type Media } from "@/payload-types";
import config from "@payload-config";

import styles from "./page.module.css";

type PageParams = {
  id: string;
};

export default async function TipsDetail({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { id } = await params;
  const payload = await getPayload({ config });

  const tip = await payload.findByID({
    collection: "tips",
    id,
    depth: 2,
  });

  const image = tip.image as Media;
  const content = tip.content as unknown as string;

  return (
    <main className={styles.container}>
      <div className={styles["tip-image-container"]}>
        <Image src={image.url!} alt={image.alt} fill />
      </div>
      <div className={styles["tip-header-container"]}>
        <BackButton />
        <h1 className={styles["tip-title"]}>{tip.title}</h1>
      </div>
      <p className={styles["tip-content"]}>{content}</p>
    </main>
  );
}
