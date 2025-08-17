# Database Seeding

This directory contains scripts and data for seeding the Payload CMS database with initial content.

## Files

- `seed-data.ts` - Contains all seed data definitions for users, tips, and media
- `seed.ts` - Main seeding script that populates the database
- `README.md` - This documentation file

## Usage

### Prerequisites

1. Ensure your PostgreSQL database is running
2. Set up your environment variables in `.env`:

   ```env
   DATABASE_URL=postgres://postgres:your-password@localhost:5433/postgres
   PAYLOAD_SECRET=your-secret-key-here
   ```

### Running the Seed Script

```bash
# Install dependencies first
npm install

# Run the seed script
npm run seed
```

### What Gets Seeded

**Users (1):**

- `test@email.com` / `MyAdminPassword` (admin user)
- `tine@nimble.com` / `Nimble123` (user)

**Tips (14 total):**

- 4 Food category tips (hydration, vegetables, portion control, meal planning)
- 4 Weather category tips (layering, forecast checking, sun protection, hot weather)
- 6 Stress category tips (breathing, breaks, organization, mindfulness, exercise, sleep)

**Posts (8 total):**

- 2 Vision category posts (visual processing disorders, vision therapy)
- 2 Hearing category posts (hearing loss impact, hearing protection)
- 2 Speech category posts (speech development milestones, stuttering)
- 2 Swallowing category posts (swallowing difficulties, dietary modifications)

**Media (3 files):**

- `ocean-visual.png` - Peaceful ocean waves
- `skiing-visual.png` - Person skiing down mountain
- `swallowing-visual.png` - Healthy swallowing illustration

### Behavior

- **Clears existing data** - The script will delete all existing tips, posts, media, and users before seeding
- **User relationships** - Posts are assigned to the first created user as the writer
- **Media assignment** - Tips are assigned media images based on their category
- **Error handling** - Individual item failures won't stop the entire process
- **Progress logging** - Detailed console output shows what's happening

### After Seeding

1. Visit the admin panel: <http://localhost:3000/admin>
2. Login with: `test@email.com` / `MyAdminPassword`
3. Browse the created content in the Tips, Posts, and Media collections

### Customization

To modify the seed data:

1. Edit `seed-data.ts` to change users, tips, posts, or media information
2. Add more entries to any of the arrays
3. Modify categories in the tips (must match the schema: "Food", "Weather", "Stress")
4. Modify categories in the posts (must match the schema: "Vision", "Hearing", "Speech", "Swallowing")
5. Update media files by placing them in the `/media` directory

### Notes

- The script uses the actual media files from the `/media` directory
- If media files don't exist, entries are still created without file uploads
- All relationships between tips and media are created automatically
- Posts are automatically assigned to the first created user as the writer
- The script will exit automatically when complete
