import fs from "fs";
import path from "path";

import { getPayload } from "payload";

import config from "../src/payload.config";

import { seedUsers, seedTips, seedMedia, seedPosts } from "./seed-data";

const seed = async (): Promise<void> => {
  const payload = await getPayload({ config });

  try {
    console.log("🌱 Starting database seeding...");

    console.log("🧹 Clearing existing data...");
    await payload.delete({ collection: "tips", where: {} });
    await payload.delete({ collection: "posts", where: {} });
    await payload.delete({ collection: "media", where: {} });
    await payload.delete({ collection: "users", where: {} });

    console.log("👥 Seeding users...");
    const createdUsers = [];
    for (const userData of seedUsers) {
      try {
        const user = await payload.create({
          collection: "users",
          data: userData,
        });
        createdUsers.push(user);
        console.log(`✅ Created user: ${userData.email}`);
      } catch (error) {
        console.error(`❌ Failed to create user ${userData.email}:`, error);
      }
    }

    console.log("🖼️  Seeding media files...");
    const createdMedia = [];
    const mediaDir = path.join(process.cwd(), "media");

    for (const mediaData of seedMedia) {
      try {
        const filePath = path.join(mediaDir, mediaData.filename);

        if (fs.existsSync(filePath)) {
          const media = await payload.create({
            collection: "media",
            data: {
              alt: mediaData.alt,
            },
            filePath,
          });
          createdMedia.push(media);
          console.log(`✅ Uploaded media: ${mediaData.filename}`);
        } else {
          console.log(`⚠️  Media file not found: ${mediaData.filename}`);
          const media = await payload.create({
            collection: "media",
            data: {
              alt: mediaData.alt,
            },
          });
          createdMedia.push(media);
          console.log(
            `✅ Created media entry (no file): ${mediaData.filename}`
          );
        }
      } catch (error) {
        console.error(
          `❌ Failed to create media ${mediaData.filename}:`,
          error
        );
      }
    }

    console.log("💡 Seeding tips...");
    for (let i = 0; i < seedTips.length; i++) {
      const tipData = seedTips[i];
      let image = null;
      if (tipData.category === "Food") {
        image = createdMedia[0].id;
      } else if (tipData.category === "Weather") {
        image = createdMedia[1].id;
      } else {
        image = createdMedia[2].id;
      }
      try {
        await payload.create({
          collection: "tips",
          data: {
            title: tipData.title,
            content: tipData.content,
            category: tipData.category,
            image,
          },
        });
        console.log(`✅ Created tip: ${tipData.title}`);
      } catch (error) {
        console.error(`❌ Failed to create tip ${tipData.title}:`, error);
      }
    }

    // Seed Posts with user relationships
    console.log("📝 Seeding posts...");
    let postsCreated = 0;
    for (const postData of seedPosts) {
      try {
        const writer = createdUsers.length > 0 ? createdUsers[0].id : null;

        await payload.create({
          collection: "posts",
          data: {
            title: postData.title,
            content: postData.content,
            category: postData.category,
            writer,
          },
        });
        postsCreated++;
        console.log(`✅ Created post: ${postData.title}`);
      } catch (error) {
        console.error(`❌ Failed to create post ${postData.title}:`, error);
      }
    }

    console.log("\n🎉 Database seeding completed successfully!");
    console.log(`📊 Summary:`);
    console.log(
      `   - ${createdUsers.length}/${seedUsers.length} users created`
    );
    console.log(
      `   - ${createdMedia.length}/${seedMedia.length} media files uploaded`
    );
    console.log(`   - ${seedTips.length} tips created`);
    console.log(`   - ${postsCreated}/${seedPosts.length} posts created`);

    console.log("\n🔗 Admin panel: http://localhost:3000/admin");
    console.log("📧 Default admin: test@email.com / MyAdminPassword");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    throw error;
  } finally {
    process.exit(0);
  }
};

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
  process.exit(1);
});

seed().catch((error) => {
  console.error("Seed script failed:", error);
  process.exit(1);
});
