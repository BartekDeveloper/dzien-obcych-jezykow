# Dzień Języków Obcych — Meksyk i Hiszpania 🇲🇽🇪🇸

React 19 + Tailwind v4 + prerender SSG. Design: `DESIGN.md` („Iberia & México”, ekrany Stitch). Statyczny hosting GitHub Pages — za darmo.

## Komendy

```bash
npm install
npm run check    # JSON + zero-emoji + zmierzony kontrast WCAG 2.1 AA
npm run dev      # podgląd (nawigacja po ścieżkach działa w dev)
npm run build    # Vite build → SSR bundle → prerender 4 tras + sitemap.xml
npm run preview  # podgląd buildu
```

`npm run build` generuje: `dist/index.html`, `dist/hiszpania/`, `dist/meksyk/`,
`dist/gry/`, `dist/sitemap.xml`, `dist/404.html`. Treść jest w HTML
(SSR `renderToString`) — strona czytelna z wyłączonym JavaScript.

## Struktura

- `src/App.jsx` + `src/entry-{client,server}.jsx` — trasy `/`, `/hiszpania`, `/meksyk`, `/gry`
- `src/pages/` — Start (hero, porównanie, glosariusz, moduły), Pawilon (8 rozdziałów z JSON), Arena (gry)
- `src/components/` — Chrome (header/footer), Gry (Quiz+powtórka, Memory, Kalambury, Trabalenguas, Rekordy, Foto)
- `src/lib/` — ui (Ik, Chip, Przycisk, linki z base), hooks (localStorage, timer, TTS, konfetti)
- `src/data/*.json` — treści; `prerender.mjs` — SSG + sitemap
- `public/foto/` — 16 zdjęć Wikimedia; `public/icons.svg` — 55 ikon SVG

## Publikacja (GitHub Pages)

Repo `dzien-obcych-jezykow` na `bartekdeveloper`, push na `main` —
workflow `.github/workflows/deploy.yml` buduje i wdraża sam.
Adres: **https://bartekdeveloper.github.io/dzien-obcych-jezykow**

## Jak dodać treść

- Pytanie: `{ "p": "…", "o": ["a","b","c","d"], "c": 0, "w": "wyjaśnienie" }`
- Zwrot: `{ "es": "…", "pl": "…", "fon": "…" }` · hasło: string w `kalambury`
- Para glosariusza: `{ "es": "…", "mx": "…", "pl": "…" }`
