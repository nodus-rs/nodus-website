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

The website keeps vendored copies of the public installer scripts and AI prompt markdown at:

- `public/install.sh`
- `public/install.ps1`
- `public/prompts/README.md`
- `public/zh-cn/prompts/README.md`

To refresh them from a local `nodus` checkout:

```bash
NODUS_SOURCE_DIR=../nodus npm run sync:installers
```

To sync installers, prompt markdown, and bump the published release version together:

```bash
NODUS_SOURCE_DIR=../nodus NODUS_RELEASE_TAG=v0.5.2 npm run sync:release
```

## Cloudflare Pages

Use these build settings in Cloudflare Pages:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `20` or newer

### Deploy from GitHub

1. In Cloudflare, go to Workers & Pages and create a new Pages project.
2. Choose `Import an existing Git repository`.
3. Select this repository and keep the production branch on `main`.
4. Use:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `20`
5. Deploy once, then add your custom domain in the Pages project settings.

This project is a static Astro site, so Cloudflare Pages is the intended deployment target.
