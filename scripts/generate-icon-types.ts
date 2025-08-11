import { readFile, writeFile } from "fs/promises";
import { join } from "path";

async function generateIconTypes() {
  try {
    const spritesheetPath = join(
      process.cwd(),
      "public",
      "icons",
      "spritesheet.svg"
    );
    const spritesheetContent = await readFile(spritesheetPath, "utf-8");

    // Extract symbol IDs using regex
    const symbolIdRegex = /<symbol\s+id="([^"]+)"/g;
    const matches = [...spritesheetContent.matchAll(symbolIdRegex)];
    const iconNames = matches.map((match) => match[1]);

    if (iconNames.length === 0) {
      throw new Error("No symbol IDs found in spritesheet.svg");
    }

    // Generate the type definition
    const typeContent = `export type IconName = ${iconNames.map((name) => `'${name}'`).join(" | ")};

export const ICON_NAMES = [
  ${iconNames.map((name) => `'${name}'`).join(",\n  ")}
] as const;
`;

    // Write to the types file
    const typesDir = join(process.cwd(), "src", "types");
    const typesFile = join(typesDir, "icons.ts");

    await writeFile(typesFile, typeContent);

    console.log(
      `✅ Generated icon types for ${iconNames.length} icons from spritesheet:`
    );
    iconNames.forEach((name) => console.log(`  - ${name}`));
    console.log(`📝 Types written to: src/types/icons.ts`);
  } catch (error) {
    console.error("❌ Error generating icon types:", error);
    process.exit(1);
  }
}

generateIconTypes();
