# Tiago Eira portfolio

This is the Next.js App Router migration of the original Gatsby portfolio. It is configured as a static export and does not require a Node.js server in production.

## Requirements

- Node.js 22.13 or newer
- npm

## Develop locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Lint and format

The project uses [Biome](https://biomejs.dev) for linting and formatting, with its Next.js and React rule sets enabled (`biome.json`).

```bash
pnpm lint       # check lint + formatting + import order
pnpm lint:fix   # apply safe fixes and formatting
pnpm format     # format only
pnpm typecheck  # TypeScript
```

## Build the static site

```bash
pnpm build
```

The deployable static files are generated in `out/`. Upload that directory to any static host.

## Content map

- `app/content.ts` — work experience
- `app/page.tsx` — page structure, biography, contact, and links
- `app/layout.tsx` — title, description, canonical URL, social metadata, font, and manifest
- `app/not-found.tsx` — 404 page
- `app/globals.css` — layout and visual styling
- `public/` — profile photo, company logos, hero background, favicons, and social card (`images/og-image.jpg`, 1200×630)

Before deploying under another domain, update `metadataBase`, the canonical URL, `robots.ts`, and `sitemap.ts`.

