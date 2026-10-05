// Pomiar kontrastu WCAG 2.1 (1.4.3 tekst 4.5:1, 1.4.11 UI 3:1).
// Uruchomienie: node contrast.mjs (woła też npm run check).
import { readFileSync } from 'node:fs';

const css = readFileSync('src/styles.css', 'utf8');

// Wyciągnij tokeny hex z :root.
const tokens = {};
const root = css.match(/:root\s*{([^}]*)}/s);
if (root) {
  for (const m of root[1].matchAll(/--([\w-]+)\s*:\s*(#[0-9a-fA-F]{6})/g)) {
    tokens[m[1]] = m[2].toLowerCase();
  }
}

function lum(hex) {
  const c = [1, 3, 5].map((i) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
function ratio(a, b) {
  const l1 = lum(a), l2 = lum(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

// Pary tekst/tło faktycznie używane w UI (zweryfikowane z selektorami w styles.css).
const TEKST = [
  ['ink', 'paper', 'body / nav / .btn'],
  ['ink', 'card', '.opcje button / .mem'],
  ['muted', 'paper', '.lead / footer / .sub na paper'],
  ['muted', 'card', '.sub / figcaption / .mem small na card'],
  ['es', 'paper', '.kicker / .rok / linki kraju ES'],
  ['mx', 'paper', '.kicker / .rok MX'],
  ['tala', 'paper', 'linki w stopce'],
  ['ink', 'paper-2', '.prose / .haslo'],
  ['muted', 'paper-2', '.fraza .pl na paper-2'],
  ['fff-ink', 'ink', '.quiz tekst na tle quizu'],
  ['zolty', 'czarny', '.timer / .zegar'],
  ['bialy-es', 'es', '.btn.accent / .nr na ES'],
  ['bialy-mx', 'mx', '.btn.accent / .nr na MX'],
  ['bialy-ink', 'ink', '.btn.primary / .statline'],
  ['focus', 'paper', 'outline fokusu'],
  ['muted-press', 'ink-press', '.mem[pressed] small na ink'],
  ['bialy-foto', 'cien-foto', 'hero: tytuł i lead na zdjęciu pod gradientem'],
  ['zolty-foto', 'cien-foto', 'hero: kicker na zdjęciu pod gradientem'],
];
const extra = {
  'fff-ink': '#faf5ea', 'zolty': '#ffd97a', 'czarny': '#000000',
  'bialy-es': '#ffffff', 'bialy-mx': '#ffffff', 'bialy-ink': '#ffffff',
  'muted-press': '#e8ddc4', 'ink-press': '#211a13',
  'bialy-foto': '#ffffff', 'cien-foto': '#14100b', 'zolty-foto': '#ffd97a'
};
const hex = (n) => extra[n] || tokens[n];

// Pary granic komponentów (1.4.11, min 3:1): granica na tle, na którym leży.
const UI = [
  ['line', 'paper', 'obramowania kart na paper'],
  ['line', 'card', 'input.link na card'],
  ['ink', 'card', 'obramowanie .btn / .mem'],
  ['focus', 'paper', 'wskaźnik fokusu'],
];

let bad = 0;
console.log('--- TEKST (min 4.5:1) ---');
for (const [fg, bg, gdzie] of TEKST) {
  const r = ratio(hex(fg), hex(bg));
  const ok = r >= 4.5;
  if (!ok) bad++;
  console.log((ok ? 'OK   ' : 'FAIL ') + r.toFixed(2) + ':1  ' + fg + ' na ' + bg + '  [' + gdzie + ']');
}
console.log('--- UI (min 3:1) ---');
for (const [fg, bg, gdzie] of UI) {
  const r = ratio(hex(fg), hex(bg));
  const ok = r >= 3.0;
  if (!ok) bad++;
  console.log((ok ? 'OK   ' : 'FAIL ') + r.toFixed(2) + ':1  ' + fg + ' na ' + bg + '  [' + gdzie + ']');
}
if (bad > 0) { console.error('\nCONTRAST: ' + bad + ' par NIE SPEŁNIA WCAG'); process.exit(1); }
console.log('\nCONTRAST: wszystkie pary spełniają WCAG 2.1 AA');
