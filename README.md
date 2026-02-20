# Scalify — Next.js Portfolio

## Kom i gang

```bash
npm install
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000) i din browser.

## Deploy på Vercel

1. Push til GitHub
2. Gå til [vercel.com](https://vercel.com) og importer dit repo
3. Vercel auto-detekterer Next.js og deployer automatisk
4. SSL, CDN og headers håndteres automatisk

## Skift domæne

Opdater `canonical` URL og `sitemap` i:
- `app/layout.tsx` (openGraph url + alternates.canonical)
- `app/sitemap.ts`
- `app/robots.ts`

## SEO inkluderet

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Card
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URL
- ✅ Google Fonts via next/font (ingen layout shift)
- ✅ `poweredByHeader: false` (sikkerhed)
