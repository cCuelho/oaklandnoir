# M. A. Warren — Author Website

Pre-publication site for crime-fiction author **M. A. Warren** (Oakland Noir positioning).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description          |
| -------------- | -------------------- |
| `npm run dev`  | Development server   |
| `npm run build`| Production build     |
| `npm run start`| Serve production build |
| `npm run lint` | ESLint               |
| `npm run screenshots` | Full-page PNGs → `screenshots/demo/` (requires dev server or auto-starts `npm run dev`) |

## Content

Editable copy and book data live in `src/content/`:

- `site.ts` — navigation, provisional marketing copy, social URLs, unresolved decision list (maintainers)
- `books.ts` — book metadata and author-supplied descriptions
- `excerpt.ts` — manuscript excerpt (do not rewrite)
- `characters.ts` — character names only

## Integrations

Forms do **not** fake success. Configure webhooks in `.env`:

- `SUBSCRIBE_WEBHOOK_URL` — release-interest signups (`src/lib/subscribe.ts`)
- `CONTACT_WEBHOOK_URL` — contact form (`src/lib/contact.ts`)

Copy `.env.example` to `.env.local` and set values before launch.

## Deployment (Cloudflare — same base as Bloodline)

Production URL: **https://oaklandnoir.sanctumos.net**

```bash
npm run deploy
```

See [docs/CLOUDFLARE_DEPLOYMENT.md](docs/CLOUDFLARE_DEPLOYMENT.md).
