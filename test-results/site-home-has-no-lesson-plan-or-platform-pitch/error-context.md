# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.js >> home has no lesson plan or platform pitch
- Location: tests\site.spec.js:28:1

# Error details

```
Error: expect(locator).not.toContainText(expected) failed

Locator: locator('body')
Expected pattern: not /Scenariusz lekcji|modułach platformy|Materiał na 1 lekcję/
Received string: "
    Przejdź do treściDzień Języków MenuStrona GłównaPawilon HiszpaniiPawilon MeksykuGry i zabawyMateriał na 1 lekcję · Dzień Języków ObcychDwa Kontynenty, Jeden JęzykWszystko na jedną szybką lekcję: dwa pawilony (Hiszpania i Meksyk) plus gry i zabawy z głośnikiem. Otwórz, czytaj, słuchaj i graj — po polsku, od razu.600 mlnmówi po hiszpańsku21krajów i terytoriów2kontynenty1wspólny językOdkryj Pawilon HiszpaniiOdkryj Pawilon MeksykuPrzejdź do gier i zabawLekcjaScenariusz lekcji w 45 minutRUTAGotowy plan na Dzień Języków Obcych: od rozgrzewki po finał.5 minutRozgrzewka: quiz „Zgadnij, który to kraj” na dole tej strony.15 minutJeden pawilon: Hiszpania albo Meksyk — czytaj i słuchaj zwrotów.15 minutGry i zabawy: fiszki, dopasowanie i zagadki — solo lub w parach.10 minutFinał: quiz pawilonu na czas i rekord sali.ZestawienieHiszpania vs Meksyk — podobieństwa i różniceDIÁLOGODwa filary hiszpańskojęzycznego świata: demografia, dialektologia, święta i kuchnia.Europa PołudniowaKrólestwo HiszpaniiFot. Diego Delso, CC BY-SA 4.0, via Wikimedia CommonsKraj i stolicaHiszpania · ok. 48 mln; stolica: MadrytSztuka i ekspresjaFlamenco, cante jondo, architektura GaudiegoWielkie święto narodoweFiesta de San Fermín (Pampeluna), La TomatinaFundament kulinarnyPaella walencjańska, jamón ibérico, oliwkiAmeryka PółnocnaStany Zjednoczone MeksykuFot. Daniel Schwen, CC BY-SA 4.0, via Wikimedia CommonsKraj i stolicaMeksyk · ok. 128 mln; stolica: Ciudad de MéxicoSztuka i ekspresjaMariachi, murale, ceramika TalaveraWielkie święto narodoweDía de Muertos (UNESCO), Grito de DoloresFundament kulinarnyMole poblano, kukurydza, papryczkiSłowniczekMiniaturowy słowniczek porównawczyPALABRASTen sam język, inne słowa. Posłuchaj różnicy między wymową madrycką a meksykańską.el cocheHiszpania ESznaczysamochóda w Meksyku:el carroMeksyk MXel ordenadorHiszpania ESznaczykomputera w Meksyku:la computadoraMeksyk MXel zumoHiszpania ESznaczysoka w Meksyku:el jugoMeksyk MXel melocotónHiszpania ESznaczybrzoskwiniaa w Meksyku:el duraznoMeksyk MXCały słowniczek w grach i zabawachPrzewodnikPrzewodnik po modułach platformyRUTAPawilon HiszpańskiHistoria, sztuka, fonetyka i kuchnia Półwyspu Iberyjskiego.Rozpocznij zwiedzaniePawilon MeksykańskiKultura, tradycja i język Ameryki Północnej.Rozpocznij zwiedzanieWielkie gry i zabawyQuizy, memory, zagadki i trabalenguas.Rozpocznij zwiedzanieQuiz wstępnyZgadnij, który to krajJUEGORozgrzewka przed pawilonami: 12 pytań o to, co hiszpańskie, a co meksykańskie.Naciśnij start. Na każde pytanie masz 20 sekund.Rekord sali: nikt jeszcze nie grał. Bądź pierwszy!Start quizuPawilonyPawilon HiszpaniiQuiz: HiszpaniaPawilon MeksykuQuiz: MeksykGry i zabawyStrona główna i scenariusz lekcjiFiszki, dopasowanie, zagadkiRekordy saliMateriałyMapa strony (sitemap.xml)Wróć na górę strony© 2026 Dzień Języków Obcych — materiał na jedną lekcję o Hiszpanii i Meksyku.
  

"
Timeout: 5000ms

Call log:
  - Expect "not toContainText" locator('body') with timeout 5000ms
  - waiting for locator('body')
    13 × locator resolved to <body>…</body>
       - unexpected value "
    Przejdź do treściDzień Języków MenuStrona GłównaPawilon HiszpaniiPawilon MeksykuGry i zabawyMateriał na 1 lekcję · Dzień Języków ObcychDwa Kontynenty, Jeden JęzykWszystko na jedną szybką lekcję: dwa pawilony (Hiszpania i Meksyk) plus gry i zabawy z głośnikiem. Otwórz, czytaj, słuchaj i graj — po polsku, od razu.600 mlnmówi po hiszpańsku21krajów i terytoriów2kontynenty1wspólny językOdkryj Pawilon HiszpaniiOdkryj Pawilon MeksykuPrzejdź do gier i zabawLekcjaScenariusz lekcji w 45 minutRUTAGotowy plan na Dzień Języków Obcych: od rozgrzewki po finał.5 minutRozgrzewka: quiz „Zgadnij, który to kraj” na dole tej strony.15 minutJeden pawilon: Hiszpania albo Meksyk — czytaj i słuchaj zwrotów.15 minutGry i zabawy: fiszki, dopasowanie i zagadki — solo lub w parach.10 minutFinał: quiz pawilonu na czas i rekord sali.ZestawienieHiszpania vs Meksyk — podobieństwa i różniceDIÁLOGODwa filary hiszpańskojęzycznego świata: demografia, dialektologia, święta i kuchnia.Europa PołudniowaKrólestwo HiszpaniiFot. Diego Delso, CC BY-SA 4.0, via Wikimedia CommonsKraj i stolicaHiszpania · ok. 48 mln; stolica: MadrytSztuka i ekspresjaFlamenco, cante jondo, architektura GaudiegoWielkie święto narodoweFiesta de San Fermín (Pampeluna), La TomatinaFundament kulinarnyPaella walencjańska, jamón ibérico, oliwkiAmeryka PółnocnaStany Zjednoczone MeksykuFot. Daniel Schwen, CC BY-SA 4.0, via Wikimedia CommonsKraj i stolicaMeksyk · ok. 128 mln; stolica: Ciudad de MéxicoSztuka i ekspresjaMariachi, murale, ceramika TalaveraWielkie święto narodoweDía de Muertos (UNESCO), Grito de DoloresFundament kulinarnyMole poblano, kukurydza, papryczkiSłowniczekMiniaturowy słowniczek porównawczyPALABRASTen sam język, inne słowa. Posłuchaj różnicy między wymową madrycką a meksykańską.el cocheHiszpania ESznaczysamochóda w Meksyku:el carroMeksyk MXel ordenadorHiszpania ESznaczykomputera w Meksyku:la computadoraMeksyk MXel zumoHiszpania ESznaczysoka w Meksyku:el jugoMeksyk MXel melocotónHiszpania ESznaczybrzoskwiniaa w Meksyku:el duraznoMeksyk MXCały słowniczek w grach i zabawachPrzewodnikPrzewodnik po modułach platformyRUTAPawilon HiszpańskiHistoria, sztuka, fonetyka i kuchnia Półwyspu Iberyjskiego.Rozpocznij zwiedzaniePawilon MeksykańskiKultura, tradycja i język Ameryki Północnej.Rozpocznij zwiedzanieWielkie gry i zabawyQuizy, memory, zagadki i trabalenguas.Rozpocznij zwiedzanieQuiz wstępnyZgadnij, który to krajJUEGORozgrzewka przed pawilonami: 12 pytań o to, co hiszpańskie, a co meksykańskie.Naciśnij start. Na każde pytanie masz 20 sekund.Rekord sali: nikt jeszcze nie grał. Bądź pierwszy!Start quizuPawilonyPawilon HiszpaniiQuiz: HiszpaniaPawilon MeksykuQuiz: MeksykGry i zabawyStrona główna i scenariusz lekcjiFiszki, dopasowanie, zagadkiRekordy saliMateriałyMapa strony (sitemap.xml)Wróć na górę strony© 2026 Dzień Języków Obcych — materiał na jedną lekcję o Hiszpanii i Meksyku.
  

"

```

```yaml
- link "Przejdź do treści":
  - /url: "#tresc"
- banner:
  - link "Dzień Języków":
    - /url: /dzien-obcych-jezykow/
  - navigation "Nawigacja główna":
    - link "Strona Główna":
      - /url: /dzien-obcych-jezykow/
    - link "Pawilon Hiszpanii":
      - /url: /dzien-obcych-jezykow/hiszpania/
    - link "Pawilon Meksyku":
      - /url: /dzien-obcych-jezykow/meksyk/
    - link "Gry i zabawy":
      - /url: /dzien-obcych-jezykow/gry/
  - group "Udostępnianie":
    - button "Pokaż kod QR do wysłania klasie"
- main:
  - region "Dwa Kontynenty, Jeden Język":
    - paragraph: Materiał na 1 lekcję · Dzień Języków Obcych
    - heading "Dwa Kontynenty, Jeden Język" [level=1]:
      - text: Dwa Kontynenty,
      - emphasis: Jeden Język
    - paragraph: "Wszystko na jedną szybką lekcję: dwa pawilony (Hiszpania i Meksyk) plus gry i zabawy z głośnikiem. Otwórz, czytaj, słuchaj i graj — po polsku, od razu."
    - list "Liczby wystawy":
      - listitem: 600 mln mówi po hiszpańsku
      - listitem: 21 krajów i terytoriów
      - listitem: 2 kontynenty
      - listitem: 1 wspólny język
    - link "Odkryj Pawilon Hiszpanii":
      - /url: /dzien-obcych-jezykow/hiszpania/
    - link "Odkryj Pawilon Meksyku":
      - /url: /dzien-obcych-jezykow/meksyk/
    - link "Przejdź do gier i zabaw":
      - /url: /dzien-obcych-jezykow/gry/
  - region:
    - heading "Lekcja Scenariusz lekcji w 45 minut" [level=2]
    - paragraph: "Gotowy plan na Dzień Języków Obcych: od rozgrzewki po finał."
    - list:
      - listitem:
        - paragraph: 5 minut
        - paragraph: "Rozgrzewka: quiz „Zgadnij, który to kraj” na dole tej strony."
      - listitem:
        - paragraph: 15 minut
        - paragraph: "Jeden pawilon: Hiszpania albo Meksyk — czytaj i słuchaj zwrotów."
      - listitem:
        - paragraph: 15 minut
        - paragraph: "Gry i zabawy: fiszki, dopasowanie i zagadki — solo lub w parach."
      - listitem:
        - paragraph: 10 minut
        - paragraph: "Finał: quiz pawilonu na czas i rekord sali."
  - region:
    - heading "Zestawienie Hiszpania vs Meksyk — podobieństwa i różnice" [level=2]
    - paragraph: "Dwa filary hiszpańskojęzycznego świata: demografia, dialektologia, święta i kuchnia."
    - article:
      - text: Europa Południowa
      - heading "Królestwo Hiszpanii" [level=3]
      - img "Królestwo Hiszpanii"
      - paragraph: Fot. Diego Delso, CC BY-SA 4.0, via Wikimedia Commons
      - term: Kraj i stolica
      - definition: "Hiszpania · ok. 48 mln; stolica: Madryt"
      - term: Sztuka i ekspresja
      - definition: Flamenco, cante jondo, architektura Gaudiego
      - term: Wielkie święto narodowe
      - definition: Fiesta de San Fermín (Pampeluna), La Tomatina
      - term: Fundament kulinarny
      - definition: Paella walencjańska, jamón ibérico, oliwki
    - article:
      - text: Ameryka Północna
      - heading "Stany Zjednoczone Meksyku" [level=3]
      - img "Stany Zjednoczone Meksyku"
      - paragraph: Fot. Daniel Schwen, CC BY-SA 4.0, via Wikimedia Commons
      - term: Kraj i stolica
      - definition: "Meksyk · ok. 128 mln; stolica: Ciudad de México"
      - term: Sztuka i ekspresja
      - definition: Mariachi, murale, ceramika Talavera
      - term: Wielkie święto narodowe
      - definition: Día de Muertos (UNESCO), Grito de Dolores
      - term: Fundament kulinarny
      - definition: Mole poblano, kukurydza, papryczki
  - region:
    - heading "Słowniczek Miniaturowy słowniczek porównawczy" [level=2]
    - paragraph: Ten sam język, inne słowa. Posłuchaj różnicy między wymową madrycką a meksykańską.
    - paragraph: el coche
    - paragraph: Hiszpania
    - 'button "Odsłuchaj: el coche"': ES
    - text: "znaczy samochód a w Meksyku:"
    - paragraph: el carro
    - paragraph: Meksyk
    - 'button "Odsłuchaj: el carro"': MX
    - paragraph: el ordenador
    - paragraph: Hiszpania
    - 'button "Odsłuchaj: el ordenador"': ES
    - text: "znaczy komputer a w Meksyku:"
    - paragraph: la computadora
    - paragraph: Meksyk
    - 'button "Odsłuchaj: la computadora"': MX
    - paragraph: el zumo
    - paragraph: Hiszpania
    - 'button "Odsłuchaj: el zumo"': ES
    - text: "znaczy sok a w Meksyku:"
    - paragraph: el jugo
    - paragraph: Meksyk
    - 'button "Odsłuchaj: el jugo"': MX
    - paragraph: el melocotón
    - paragraph: Hiszpania
    - 'button "Odsłuchaj: el melocotón"': ES
    - text: "znaczy brzoskwinia a w Meksyku:"
    - paragraph: el durazno
    - paragraph: Meksyk
    - 'button "Odsłuchaj: el durazno"': MX
    - paragraph:
      - link "Cały słowniczek w grach i zabawach":
        - /url: /dzien-obcych-jezykow/gry/
  - region:
    - heading "Przewodnik Przewodnik po modułach platformy" [level=2]
    - article:
      - heading "Pawilon Hiszpański" [level=3]
      - paragraph: Historia, sztuka, fonetyka i kuchnia Półwyspu Iberyjskiego.
      - paragraph:
        - link "Rozpocznij zwiedzanie":
          - /url: /dzien-obcych-jezykow/hiszpania/
    - article:
      - heading "Pawilon Meksykański" [level=3]
      - paragraph: Kultura, tradycja i język Ameryki Północnej.
      - paragraph:
        - link "Rozpocznij zwiedzanie":
          - /url: /dzien-obcych-jezykow/meksyk/
    - article:
      - heading "Wielkie gry i zabawy" [level=3]
      - paragraph: Quizy, memory, zagadki i trabalenguas.
      - paragraph:
        - link "Rozpocznij zwiedzanie":
          - /url: /dzien-obcych-jezykow/gry/
  - region:
    - heading "Quiz wstępny Zgadnij, który to kraj" [level=2]
    - paragraph: "Rozgrzewka przed pawilonami: 12 pytań o to, co hiszpańskie, a co meksykańskie."
    - paragraph: Naciśnij start. Na każde pytanie masz 20 sekund.
    - paragraph: "Rekord sali: nikt jeszcze nie grał. Bądź pierwszy!"
    - status
    - button "Start quizu"
- contentinfo:
  - navigation "Pawilony":
    - heading "Pawilony" [level=2]
    - list:
      - listitem:
        - link "Pawilon Hiszpanii":
          - /url: /dzien-obcych-jezykow/hiszpania/
      - listitem:
        - 'link "Quiz: Hiszpania"':
          - /url: /dzien-obcych-jezykow/hiszpania/#quiz
      - listitem:
        - link "Pawilon Meksyku":
          - /url: /dzien-obcych-jezykow/meksyk/
      - listitem:
        - 'link "Quiz: Meksyk"':
          - /url: /dzien-obcych-jezykow/meksyk/#quiz
  - navigation "Gry i zabawy":
    - heading "Gry i zabawy" [level=2]
    - list:
      - listitem:
        - link "Strona główna i scenariusz lekcji":
          - /url: /dzien-obcych-jezykow/
      - listitem:
        - link "Fiszki, dopasowanie, zagadki":
          - /url: /dzien-obcych-jezykow/gry/
      - listitem:
        - link "Rekordy sali":
          - /url: /dzien-obcych-jezykow/gry/#h-rek
  - heading "Materiały" [level=2]
  - list:
    - listitem:
      - link "Mapa strony (sitemap.xml)":
        - /url: /dzien-obcych-jezykow/sitemap.xml
    - listitem:
      - link "Wróć na górę strony":
        - /url: "#tresc"
  - paragraph: © 2026 Dzień Języków Obcych — materiał na jedną lekcję o Hiszpanii i Meksyku.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | for (const route of ['', 'hiszpania/', 'meksyk/', 'gry/']) {
  5  |   test(`layout and accessibility: ${route || 'home'}`, async ({ page }) => {
  6  |     const errors = [];
  7  |     page.on('pageerror', e => errors.push(e.message));
  8  |     await page.goto(route || './');
  9  |     await page.evaluate(() => document.fonts.ready);
  10 |     for (const width of [360, 768, 1024, 1440]) {
  11 |       await page.setViewportSize({ width, height: 900 });
  12 |       expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  13 |       const header = await page.locator('header').boundingBox();
  14 |       expect(header.height).toBeLessThan(105);
  15 |       for (const mark of await page.locator('.wodny').all()) {
  16 |         const bounds = await mark.boundingBox();
  17 |         const title = await mark.locator('..').locator('h2').boundingBox();
  18 |         if (bounds && title) expect(bounds.y + bounds.height <= title.y || bounds.x >= title.x + title.width).toBe(true);
  19 |       }
  20 |     }
  21 |     const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  22 |     expect(result.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) }))).toEqual([]);
  23 |     expect(errors).toEqual([]);
  24 |     await page.screenshot({ path: `test-results/${route.replace('/', '') || 'home'}-desktop.png`, fullPage: true });
  25 |   });
  26 | }
  27 | 
  28 | test('home has no lesson plan or platform pitch', async ({ page }) => {
  29 |   await page.goto('./');
> 30 |   await expect(page.locator('body')).not.toContainText(/Scenariusz lekcji|modułach platformy|Materiał na 1 lekcję/);
     |                                          ^ Error: expect(locator).not.toContainText(expected) failed
  31 | });
  32 | 
  33 | test('mobile menu works with keyboard and returns focus', async ({ page }) => {
  34 |   await page.setViewportSize({ width: 360, height: 800 });
  35 |   await page.goto('./');
  36 |   const menu = page.getByRole('button', { name: 'Menu', exact: true });
  37 |   await menu.focus();
  38 |   await page.keyboard.press('Enter');
  39 |   await expect(menu).toHaveAttribute('aria-expanded', 'true');
  40 |   await page.keyboard.press('Escape');
  41 |   await expect(menu).toBeFocused();
  42 |   await expect(menu).toHaveAttribute('aria-expanded', 'false');
  43 | });
  44 | 
  45 | test('all local fragment links have targets', async ({ page }) => {
  46 |   for (const route of ['', 'hiszpania/', 'meksyk/', 'gry/']) {
  47 |     await page.goto(route || './');
  48 |     const broken = await page.evaluate(() => [...document.querySelectorAll('a[href*="#"]')].filter(a => {
  49 |       const u = new URL(a.href);
  50 |       return u.pathname === location.pathname && u.hash && !document.getElementById(decodeURIComponent(u.hash.slice(1)));
  51 |     }).map(a => a.getAttribute('href')));
  52 |     expect(broken).toEqual([]);
  53 |   }
  54 | });
  55 | 
```