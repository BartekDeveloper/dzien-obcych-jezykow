# Dzień Języków Obcych — Meksyk i Hiszpania 🇲🇽🇪🇸

Wersja 3: dwa pawilony krajowe + strefa gier. W całości po polsku, statyczna, darmowy GitHub Pages.

## Strony

- `index.html` — prolog: po co Dzień Języków, jak korzystać, wybór pawilonu
- `hiszpania.html` — 8 rozdziałów (geografia, oś czasu, święta, kuchnia, muzyka, zabytki, język, zwroty z lektorem es-ES) + quiz 12 pytań
- `meksyk.html` — 8 rozdziałów + lektor es-MX + quiz 12 pytań
- `gry.html` — pojedynek 12 pytań, memory 16 par, zagadki 12 pytań, kalambury 60 haseł (drużyny A/B)

## Komendy

```bash
npm install
npm run check    # JSON + zero-emoji + zmierzony kontrast WCAG 2.1 AA
npm run dev      # podgląd
npm run build    # buduje dist/
```

Zasada: **najpierw `npm run check`, potem build**. Check wyłapuje niezbalansowane cudzysłowy i brak polskich znaków, zanim popsują build.

## Publikacja (darmo, GitHub Pages)

1. Repo `dzien-obcych-jezykow` na koncie `bartekdeveloper`, push na `main`.
2. Workflow `.github/workflows/deploy.yml` buduje i wdraża sam.
3. Adres: **https://bartekdeveloper.github.io/dzien-obcych-jezykow**
4. Settings → Pages → Source: GitHub Actions.

## Jak dodać treść

Wszystkie teksty są w `src/data/*.json` (pełny UTF-8, polskie znaki mile widziane):
- pytanie quizu: `{ "p": "…", "o": ["a","b","c","d"], "c": 0 }` — `c` to indeks poprawnej
- zwrot: `{ "es": "…", "pl": "…", "fon": "…" }`
- hasło do kalamburów: dopisz string do tablicy `kalambury` w `gry.json`

## Grafika i dostępność

- Zero emoji (bramka w `npm run check`). Ikony: `public/icons.svg` (53 znaki konturowe + flagi ES/MX rysowane kodem), zawsze z etykietą tekstową.
- Zdjęcia: `public/foto/` (13× JPG z Wikimedia Commons) + `ATRYBUCJE.md`. Karty bez zdjęcia używają ikony.
- Fonty self-hosted variable woff2 (latin-ext): Fraunces + Source Sans 3.
- Kontrast: `contrast.mjs` mierzy każdą parę (tekst ≥ 4,5:1, granice ≥ 3:1) — build nie przejdzie przy niespełnieniu.
- Quizy mają ekran powtórki z wyjaśnieniami (pole `w` w JSON).
