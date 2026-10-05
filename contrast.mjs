// Pomiar kontrastu WCAG 2.1 (1.4.3 tekst 4.5:1, 1.4.11 UI 3:1).
// Tokeny z Tailwind @theme w src/index.css.
import { readFileSync } from 'node:fs';

const css = readFileSync('src/index.css', 'utf8');
const tokens = {};
for (const m of css.matchAll(/--color-([\w-]+)\s*:\s*(#[0-9a-fA-F]{6})/g)) {
  tokens[m[1]] = m[2].toLowerCase();
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

const TEKST = [
  ['ink', 'surface', 'body / nav / przyciski'],
  ['ink', 'card', 'opcje quizu / karty memory'],
  ['muted', 'surface', 'leady / stopka / opisy'],
  ['muted', 'card', 'opisy i podpisy na kartach'],
  ['primary', 'surface', 'kicker / rok / chip ES'],
  ['secondary', 'surface', 'chip MX'],
  ['tertiary', 'surface', 'linki w treści'],
  ['bialy', 'primary', 'przyciski ES'],
  ['bialy', 'secondary', 'przyciski MX'],
  ['bialy', 'ink', 'przyciski pełne / quiz tło'],
  ['jasny-quiz', 'ink', 'tekst quizu'],
  ['gold', 'czarny', 'timer / zegar'],
  ['gold-foto', 'cien-foto', 'kicker hero na zdjęciu'],
  ['bialy-foto', 'cien-foto', 'tytuł hero na zdjęciu'],
  ['focusring', 'surface', 'outline fokusu'],
  ['muted-press', 'ink-press', 'memory aktywna'],
];
const extra = {
  bialy: '#ffffff', 'jasny-quiz': '#faf5ea', gold: '#ffd97a', czarny: '#000000',
  'bialy-foto': '#ffffff', 'cien-foto': '#14100b', 'gold-foto': '#ffd97a',
  'muted-press': '#e8ddc4', 'ink-press': '#1f1b1a'
};
const hex = (n) => extra[n] || tokens[n];

const UI = [
  ['line', 'surface', 'obramowania kart'],
  ['line', 'card', 'inputy na kartach'],
  ['ink', 'card', 'obramowania przycisków'],
  ['focusring', 'surface', 'wskaźnik fokusu'],
];

let bad = 0;
console.log('--- TEKST (min 4.5:1) ---');
for (const [fg, bg, gdzie] of TEKST) {
  if (!hex(fg) || !hex(bg)) { console.log('SKIP (brak tokenu): ' + fg + ' / ' + bg); bad++; continue; }
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
