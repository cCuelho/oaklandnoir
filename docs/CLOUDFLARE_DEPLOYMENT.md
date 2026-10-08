# Oakland Noir site — Cloudflare Workers (Static Assets)

Same hosting pattern as **Bloodline**: Workers **Static Assets** on a **`*.sanctumos.net`** custom hostname (no `workers.dev`).

| Item | Value |
|------|--------|
| Worker name | `oaklandnoir` |
| Hostname | `https://oaklandnoir.sanctumos.net` |
| Build output | `out/` (Next.js static export) |

## Deploy

```bash
npm ci
npm run lint
npm run build:production
npx wrangler whoami
npm run deploy
```

`build:production` sets `NEXT_PUBLIC_SITE_URL=https://oaklandnoir.sanctumos.net` for metadata and sitemap.

## Wrangler safety (matches Bloodline)

- `workers_dev = false`
- `preview_urls = false`
- Custom domain route only in `wrangler.jsonc`

## Forms on static hosting

Subscribe/contact API routes are not deployed. Form UIs remain; wire `SUBSCRIBE_WEBHOOK_URL` / `CONTACT_WEBHOOK_URL` via a future Worker or external form endpoint when ready.

## Optional Access

Bloodline uses Cloudflare Access on its hostname. Oakland Noir is public by default; add an Access application in Zero Trust if you need a private preview.
