# Nodus Website

Standalone marketing, docs, install, and package-command site for Nodus.

## Stack

- Astro
- Static deployment to Cloudflare Pages

## Development

```bash
npm install
npm run dev
```

## Sync installer endpoints

The website keeps vendored copies of the public installer scripts at:

- `public/install.sh`
- `public/install.ps1`

To refresh them from a local `nodus` checkout:

```bash
NODUS_SOURCE_DIR=../nodus npm run sync:installers
```

## Cloudflare Pages

Use these build settings in Cloudflare Pages:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `20` or newer
