# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application called "imgine" using the App Router architecture. The project is configured with:

- TypeScript for type safety
- Drizzle ORM with PostgreSQL for database operations
- ESLint and Prettier for code quality
- Stylelint for CSS linting
- Turbopack for faster development builds

## Development Commands

- `npm run dev` - Start development server with Turbopack (faster builds)
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint, prettier and stylelint checks

## Database Architecture

The project uses Drizzle ORM with PostgreSQL:

- Database configurations should be in `src/db/` directory
- Use `drizzle-kit` for database migrations and schema management
- PostgreSQL connection details managed through environment variables

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components
- `src/db/` - Database schemas, connections, and Drizzle ORM setup
- `public/` - Static assets (SVG icons and images)

## TypeScript Configuration

- Path aliases configured: `@/*` maps to `./src/*`
- Strict mode enabled

## Code Style and Linting

- ESLint configured with Next.js core web vitals and TypeScript rules
- Prettier available for code formatting
- Stylelint configured for CSS linting