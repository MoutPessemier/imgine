# IMGine

A Next.js application with Payload CMS integration, providing a content management system for tips and media with categorized content delivery.

## Project Overview

IMGine is a modern web application built with Next.js 15 and Payload CMS that helps users manage and display categorized tips and content. The application features a clean interface for browsing different categories like Info, Tips, Trails, Community, Status, and Appointments, with rich media support and content management capabilities.

## Technologies Used

- **Next.js 15**: Modern React framework with App Router architecture
- **Payload CMS**: Headless CMS for content management with admin panel
- **TypeScript**: For type-safe JavaScript development
- **PostgreSQL**: Database for storing content and user data
- **React 19**: Latest React version for UI components
- **CSS Modules**: Scoped styling for components
- **Sharp**: High-performance image processing
- **Radix UI**: Accessible component primitives

## Prerequisites

- Node.js (v18 or later recommended)
- PostgreSQL database
- npm or yarn package manager

## Getting Started

1. Clone the repository

```bash
git clone git@github.com:MoutPessemier/imgine.git
cd imgine
```

2. Install dependencies

```bash
npm install
```

3. Set up PostgreSQL database

```bash
docker pull postgres
docker run --name imgine-postgres -e POSTGRES_PASSWORD=<your-password> -d -p 5433:5432 postgres
```

4. Set up environment variables

Create a `.env` file with your database connection:

```env
DATABASE_URL=postgres://postgres:<your-password>@localhost:5433/postgres
PAYLOAD_SECRET=your-secret-key-here
```

5. Start the development server

```bash
npm run dev
```

The application will be available at <http://localhost:3000>

## Live Deployment

The application is deployed and available at: **<https://imgine-app-178452309711.europe-west1.run.app/>**

## Development Commands

- `npm run dev` - Start development server with Turbopack (faster builds)
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint, Prettier, and Stylelint checks
- `npm run typecheck` - Run TypeScript type checking
- `npm run generate-icon-types` - Generate TypeScript types from SVG sprite
- `npm run seed` - Seed the database with initial content (wip)
- `npm run payload` - Start Payload commands

## Admin Access

**Admin Panel:** <http://localhost:3000/admin>

**First User Credentials:**

- Email: `test@email.com`
- Password: `MyAdminPassword`

## Content Management

The application includes four main collections:

1. **Tips**: Categorized content with title, content, images, and categories (Food, Weather, Stress)
2. **Posts**: Community posts with title, content, writer relationship, and categories (Vision, Hearing, Speech, Swallowing)
3. **Media**: File uploads and media management
4. **Users**: User authentication and management

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/collections/` - Payload CMS collection definitions
- `src/components/` - Reusable React components
- `src/types/` - TypeScript type definitions
- `src/styles/` - Global CSS styles
- `public/` - Static assets including SVG icons and images
- `scripts/` - Utility scripts for development

  You can find the [project structure visualised](<https://tree.nathanfriend.com/?s=(%27optiZs!(%27fancy!true~fullPath!falW~trailingSlash!true~rootDot!falW)~source!(%27source!%27.8CLAUDE.md8es%22mediaVoceanBVskiingB3Ynext-env.d68next.O68node_modules8packI-lock.jsZ8packI.jsZ8H-X68publicViFs3*4spritesheet.svg34imIs352cyan-background.png352oceanB352skiingB35YREADME.md8scripts34generate-iF-X68WedVREADME.mdVWed-data634Wed68srcVapp3J%7Bapp%7D92layoutN2pI7JpIN4tips954general9552%5Bid%5D955JerrorN55JpI7*55*4pIN552pI7*554pI6x3J%7BH%7D92admin9J%5B%5B...Wgments%5D%5D9*Jnot-foundN**4pIN*4importMap.js92api9J%5B...slug%5D9**QJgraphql9**Q*4graphql-playground9*5Q4layout6x3JfaviF.ico3*4global-error6xVcollectiZs3JMedia63JTips63*4UWrs6VcompZents3J%2392%23N4G3Jcard92card7JcardN4G3JiF94iF6x3JK92K7JKN4G3JWarch92G92Warch7*4Warch6x3*4Wlect3*52G3*52Wlect754Wlect6xVmigratiZsVH-generated-schema6VH-X6VH.O6Vstyles3*4globals.css34X352iFs6354G8style%22tsO.jsZ%5Cn4tsO6buildinfo%27)~versiZ!%271%27)*%E2%94%82z%200%E2%94%80%E2%94%80%202%E2%94%9C03%5Cn*4%E2%94%9405zz6.ts7.module.css3*8%5Cn293**B-visual.pngFcZGindex6HpayloadIageJ*2KiF-circleN6x9OFfigQ4route69V32WseXtypesY4swallowingB8Zonz%20%20%22lint.O.mjs8%23back-buttZ%01%23%22zZYXWVQONKJIHGFB987654320*>).

## Features

- **Content Management**: Full CMS capabilities with Payload admin panel
- **Categorized Content**: Organized tips and content by category
- **Community Posts**: User-generated posts with different categories
- **Media Management**: Upload and manage images and files
- **Responsive Design**: Mobile-friendly interface
- **Type Safety**: Full TypeScript integration
- **Icon System**: SVG sprite-based icon system with auto-generated types
- **Modern Tooling**: ESLint, Prettier, and Stylelint for code quality
- **Database Seeding**: Comprehensive seeding system for initial content

## Payload API Endpoints

- `GET /api/tips` - Retrieve tips content
- `GET /api/posts` - Retrieve community posts
- `GET /api/media` - Access media files
- `POST /api/graphql` - GraphQL endpoint for data queries
- `GET /api/graphql-playground` - GraphQL playground for testing

## Development Notes

- Uses Turbopack for faster development builds
- Configured with comprehensive ESLint rules for code quality
- Supports both REST and GraphQL APIs
- Automatic icon type generation from SVG sprites
- CSS Modules for component-scoped styling

## Database Seeding (WIP)

The project includes a comprehensive seeding system to populate the database with initial content:

- **Users**: Admin and regular user accounts
- **Tips**: 14 pre-defined tips across Food, Weather, and Stress categories
- **Posts**: 8 community posts across Vision, Hearing, Speech, and Swallowing categories
- **Media**: 3 sample images for content

Run `npm run seed` to populate your database with this initial content.

## Author

Mout Pessemier
