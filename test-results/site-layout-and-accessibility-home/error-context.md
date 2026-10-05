# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.js >> layout and accessibility: home
- Location: tests\site.spec.js:5:3

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 105
Received:   132
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Przejdź do treści" [ref=e3] [cursor=pointer]:
    - /url: "#tresc"
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link "Dzień Języków" [ref=e6] [cursor=pointer]:
        - /url: /dzien-obcych-jezykow/
      - button "Menu" [ref=e12]
      - group "Udostępnianie" [ref=e15]:
        - button "Pokaż kod QR do wysłania klasie" [ref=e16]
  - main [ref=e19]:
    - generic [ref=e20]:
      - region [ref=e21]:
        - generic [ref=e24]:
          - paragraph [ref=e25]:
            - generic [ref=e26]: Materiał na 1 lekcję · Dzień Języków Obcych
          - heading [level=1] [ref=e27]:
            - text: Dwa Kontynenty,
            - emphasis [ref=e28]: Jeden Język
          - paragraph [ref=e29]: "Wszystko na jedną szybką lekcję: dwa pawilony (Hiszpania i Meksyk) plus gry i zabawy z głośnikiem. Otwórz, czytaj, słuchaj i graj — po polsku, od razu."
          - list "Liczby wystawy" [ref=e30]:
            - listitem [ref=e31]: 600 mlnmówi po hiszpańsku
            - listitem [ref=e32]: 21krajów i terytoriów
            - listitem [ref=e33]: 2kontynenty
            - listitem [ref=e34]: 1wspólny język
          - generic [ref=e35]:
            - link "Odkryj Pawilon Hiszpanii" [ref=e36] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/hiszpania/
            - link "Odkryj Pawilon Meksyku" [ref=e37] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/meksyk/
            - link "Przejdź do gier i zabaw" [ref=e38] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/gry/
      - region [ref=e39]:
        - generic [ref=e53]:
          - heading "Lekcja Scenariusz lekcji w 45 minut" [level=2] [ref=e54]:
            - generic [ref=e55]: Lekcja
            - text: Scenariusz lekcji w 45 minut
          - generic [aria-hidden]: RUTA
          - paragraph [ref=e56]: "Gotowy plan na Dzień Języków Obcych: od rozgrzewki po finał."
        - list [ref=e57]:
          - listitem [ref=e58]:
            - paragraph [ref=e59]: 5 minut
            - paragraph [ref=e60]: "Rozgrzewka: quiz „Zgadnij, który to kraj” na dole tej strony."
          - listitem [ref=e61]:
            - paragraph [ref=e62]: 15 minut
            - paragraph [ref=e63]: "Jeden pawilon: Hiszpania albo Meksyk — czytaj i słuchaj zwrotów."
          - listitem [ref=e64]:
            - paragraph [ref=e65]: 15 minut
            - paragraph [ref=e66]: "Gry i zabawy: fiszki, dopasowanie i zagadki — solo lub w parach."
          - listitem [ref=e67]:
            - paragraph [ref=e68]: 10 minut
            - paragraph [ref=e69]: "Finał: quiz pawilonu na czas i rekord sali."
      - region [ref=e70]:
        - generic [ref=e71]:
          - heading "Zestawienie Hiszpania vs Meksyk — podobieństwa i różnice" [level=2] [ref=e72]:
            - generic [ref=e73]: Zestawienie
            - text: Hiszpania vs Meksyk — podobieństwa i różnice
          - generic [aria-hidden]: DIÁLOGO
          - paragraph [ref=e74]: "Dwa filary hiszpańskojęzycznego świata: demografia, dialektologia, święta i kuchnia."
        - generic [ref=e75]:
          - article [ref=e76]:
            - generic [ref=e77]: Europa Południowa
            - heading "Królestwo Hiszpanii" [level=3] [ref=e78]
            - img "Królestwo Hiszpanii" [ref=e79]
            - paragraph [ref=e80]: Fot. Diego Delso, CC BY-SA 4.0, via Wikimedia Commons
            - generic [ref=e81]:
              - generic [ref=e82]:
                - term [ref=e83]: Kraj i stolica
                - definition [ref=e84]: "Hiszpania · ok. 48 mln; stolica: Madryt"
              - generic [ref=e85]:
                - term [ref=e86]: Sztuka i ekspresja
                - definition [ref=e87]: Flamenco, cante jondo, architektura Gaudiego
              - generic [ref=e88]:
                - term [ref=e89]: Wielkie święto narodowe
                - definition [ref=e90]: Fiesta de San Fermín (Pampeluna), La Tomatina
              - generic [ref=e91]:
                - term [ref=e92]: Fundament kulinarny
                - definition [ref=e93]: Paella walencjańska, jamón ibérico, oliwki
          - article [ref=e94]:
            - generic [ref=e95]: Ameryka Północna
            - heading "Stany Zjednoczone Meksyku" [level=3] [ref=e96]
            - img "Stany Zjednoczone Meksyku" [ref=e97]
            - paragraph [ref=e98]: Fot. Daniel Schwen, CC BY-SA 4.0, via Wikimedia Commons
            - generic [ref=e99]:
              - generic [ref=e100]:
                - term [ref=e101]: Kraj i stolica
                - definition [ref=e102]: "Meksyk · ok. 128 mln; stolica: Ciudad de México"
              - generic [ref=e103]:
                - term [ref=e104]: Sztuka i ekspresja
                - definition [ref=e105]: Mariachi, murale, ceramika Talavera
              - generic [ref=e106]:
                - term [ref=e107]: Wielkie święto narodowe
                - definition [ref=e108]: Día de Muertos (UNESCO), Grito de Dolores
              - generic [ref=e109]:
                - term [ref=e110]: Fundament kulinarny
                - definition [ref=e111]: Mole poblano, kukurydza, papryczki
      - region [ref=e112]:
        - generic [ref=e113]:
          - heading "Słowniczek Miniaturowy słowniczek porównawczy" [level=2] [ref=e114]:
            - generic [ref=e115]: Słowniczek
            - text: Miniaturowy słowniczek porównawczy
          - generic [aria-hidden]: PALABRAS
          - paragraph [ref=e116]: Ten sam język, inne słowa. Posłuchaj różnicy między wymową madrycką a meksykańską.
        - generic [ref=e117]:
          - generic [ref=e118]:
            - generic [ref=e119]:
              - paragraph [ref=e120]: el coche
              - paragraph [ref=e121]: Hiszpania
              - 'button "Odsłuchaj: el coche" [ref=e122]': ES
            - generic [ref=e125]: "znaczysamochóda w Meksyku:"
            - generic [ref=e126]:
              - paragraph [ref=e127]: el carro
              - paragraph [ref=e128]: Meksyk
              - 'button "Odsłuchaj: el carro" [ref=e129]': MX
          - generic [ref=e132]:
            - generic [ref=e133]:
              - paragraph [ref=e134]: el ordenador
              - paragraph [ref=e135]: Hiszpania
              - 'button "Odsłuchaj: el ordenador" [ref=e136]': ES
            - generic [ref=e139]: "znaczykomputera w Meksyku:"
            - generic [ref=e140]:
              - paragraph [ref=e141]: la computadora
              - paragraph [ref=e142]: Meksyk
              - 'button "Odsłuchaj: la computadora" [ref=e143]': MX
          - generic [ref=e146]:
            - generic [ref=e147]:
              - paragraph [ref=e148]: el zumo
              - paragraph [ref=e149]: Hiszpania
              - 'button "Odsłuchaj: el zumo" [ref=e150]': ES
            - generic [ref=e153]: "znaczysoka w Meksyku:"
            - generic [ref=e154]:
              - paragraph [ref=e155]: el jugo
              - paragraph [ref=e156]: Meksyk
              - 'button "Odsłuchaj: el jugo" [ref=e157]': MX
          - generic [ref=e160]:
            - generic [ref=e161]:
              - paragraph [ref=e162]: el melocotón
              - paragraph [ref=e163]: Hiszpania
              - 'button "Odsłuchaj: el melocotón" [ref=e164]': ES
            - generic [ref=e167]: "znaczybrzoskwiniaa w Meksyku:"
            - generic [ref=e168]:
              - paragraph [ref=e169]: el durazno
              - paragraph [ref=e170]: Meksyk
              - 'button "Odsłuchaj: el durazno" [ref=e171]': MX
        - paragraph [ref=e174]:
          - link "Cały słowniczek w grach i zabawach" [ref=e175] [cursor=pointer]:
            - /url: /dzien-obcych-jezykow/gry/
      - region [ref=e176]:
        - generic [ref=e177]:
          - heading "Przewodnik Przewodnik po modułach platformy" [level=2] [ref=e178]:
            - generic [ref=e179]: Przewodnik
            - text: Przewodnik po modułach platformy
          - generic [aria-hidden]: RUTA
        - generic [ref=e180]:
          - article [ref=e181]:
            - heading "Pawilon Hiszpański" [level=3] [ref=e182]
            - paragraph [ref=e183]: Historia, sztuka, fonetyka i kuchnia Półwyspu Iberyjskiego.
            - paragraph [ref=e184]:
              - link "Rozpocznij zwiedzanie" [ref=e185] [cursor=pointer]:
                - /url: /dzien-obcych-jezykow/hiszpania/
          - article [ref=e186]:
            - heading "Pawilon Meksykański" [level=3] [ref=e187]
            - paragraph [ref=e188]: Kultura, tradycja i język Ameryki Północnej.
            - paragraph [ref=e189]:
              - link "Rozpocznij zwiedzanie" [ref=e190] [cursor=pointer]:
                - /url: /dzien-obcych-jezykow/meksyk/
          - article [ref=e191]:
            - heading "Wielkie gry i zabawy" [level=3] [ref=e192]
            - paragraph [ref=e193]: Quizy, memory, zagadki i trabalenguas.
            - paragraph [ref=e194]:
              - link "Rozpocznij zwiedzanie" [ref=e195] [cursor=pointer]:
                - /url: /dzien-obcych-jezykow/gry/
      - region [ref=e196]:
        - generic [ref=e210]:
          - heading "Quiz wstępny Zgadnij, który to kraj" [level=2] [ref=e211]:
            - generic [ref=e212]: Quiz wstępny
            - text: Zgadnij, który to kraj
          - generic [aria-hidden]: JUEGO
          - paragraph [ref=e213]: "Rozgrzewka przed pawilonami: 12 pytań o to, co hiszpańskie, a co meksykańskie."
        - generic [ref=e215]:
          - paragraph [ref=e216]: Naciśnij start. Na każde pytanie masz 20 sekund.
          - paragraph [ref=e217]: "Rekord sali: nikt jeszcze nie grał. Bądź pierwszy!"
          - status [ref=e218]
          - button "Start quizu" [ref=e219]
  - contentinfo [ref=e220]:
    - generic [ref=e221]:
      - navigation "Pawilony" [ref=e222]:
        - heading "Pawilony" [level=2] [ref=e223]
        - list [ref=e224]:
          - listitem [ref=e225]:
            - link "Pawilon Hiszpanii" [ref=e226] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/hiszpania/
          - listitem [ref=e227]:
            - 'link "Quiz: Hiszpania" [ref=e228] [cursor=pointer]':
              - /url: /dzien-obcych-jezykow/hiszpania/#quiz
          - listitem [ref=e229]:
            - link "Pawilon Meksyku" [ref=e230] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/meksyk/
          - listitem [ref=e231]:
            - 'link "Quiz: Meksyk" [ref=e232] [cursor=pointer]':
              - /url: /dzien-obcych-jezykow/meksyk/#quiz
      - navigation "Gry i zabawy" [ref=e233]:
        - heading "Gry i zabawy" [level=2] [ref=e234]
        - list [ref=e235]:
          - listitem [ref=e236]:
            - link "Strona główna i scenariusz lekcji" [ref=e237] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/
          - listitem [ref=e238]:
            - link "Fiszki, dopasowanie, zagadki" [ref=e239] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/gry/
          - listitem [ref=e240]:
            - link "Rekordy sali" [ref=e241] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/gry/#h-rek
      - generic [ref=e242]:
        - heading "Materiały" [level=2] [ref=e243]
        - list [ref=e244]:
          - listitem [ref=e245]:
            - link "Mapa strony (sitemap.xml)" [ref=e246] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/sitemap.xml
          - listitem [ref=e247]:
            - link "Wróć na górę strony" [ref=e248] [cursor=pointer]:
              - /url: "#tresc"
    - paragraph [ref=e249]: © 2026 Dzień Języków Obcych — materiał na jedną lekcję o Hiszpanii i Meksyku.
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
> 14 |       expect(header.height).toBeLessThan(105);
     |                             ^ Error: expect(received).toBeLessThan(expected)
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
  30 |   await expect(page.locator('body')).not.toContainText(/Scenariusz lekcji|modułach platformy|Materiał na 1 lekcję/);
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