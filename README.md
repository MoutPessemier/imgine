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
git clone <repository-url>
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

## Development Commands

- `npm run dev` - Start development server with Turbopack (faster builds)
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint, Prettier, and Stylelint checks
- `npm run typecheck` - Run TypeScript type checking
- `npm run generate-icon-types` - Generate TypeScript types from SVG sprite
- `npm run payload` - Start Payload commands

## Admin Access

**Admin Panel:** <http://localhost:3000/admin>

**First User Credentials:**

- Email: `test@email.com`
- Password: `MyAdminPassword`

## Content Management

The application includes three main collections:

1. **Tips**: Categorized content with title, content, images, and categories (Food, Weather, Stress)
2. **Media**: File uploads and media management
3. **Users**: User authentication and management

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/collections/` - Payload CMS collection definitions
- `src/components/` - Reusable React components
- `src/types/` - TypeScript type definitions
- `src/styles/` - Global CSS styles
- `public/` - Static assets including SVG icons and images
- `scripts/` - Utility scripts for development

## Features

- **Content Management**: Full CMS capabilities with Payload admin panel
- **Categorized Content**: Organized tips and content by category
- **Media Management**: Upload and manage images and files
- **Responsive Design**: Mobile-friendly interface
- **Type Safety**: Full TypeScript integration
- **Icon System**: SVG sprite-based icon system with auto-generated types
- **Modern Tooling**: ESLint, Prettier, and Stylelint for code quality

## Payload API Endpoints

- `GET /api/tips` - Retrieve tips content
- `GET /api/media` - Access media files
- `POST /api/graphql` - GraphQL endpoint for data queries
- `GET /api/graphql-playground` - GraphQL playground for testing

## Development Notes

- Uses Turbopack for faster development builds
- Configured with comprehensive ESLint rules for code quality
- Supports both REST and GraphQL APIs
- Automatic icon type generation from SVG sprites
- CSS Modules for component-scoped styling

## Author

Mout Pessemier
