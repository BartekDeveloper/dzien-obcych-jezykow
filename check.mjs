// Kontrola jakości: poprawny JSON, pełna polszczyzna, struktura danych,
// zero emoji w źródłach (JSX/JS/JSON; dozwolony tylko ✓ U+2713).
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

let errors = 0;
const fail = (msg) => { errors++; console.error('BLAD: ' + msg); };

const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}]/u;
function skanEmoji(sciezka, raw) {
  const czysty = raw.replace(/✓/g, '');
  const m = czysty.match(EMOJI);
  if (m) {
    const i = czysty.indexOf(m[0]);
    fail(sciezka + ': znaleziono emoji: ' + m[0] + ' (…' + czysty.slice(Math.max(0, i - 30), i + 30).replace(/\n/g, ' ') + '…)');
  }
}
function pliki(katalog, koniec) {
  if (!existsSync(katalog)) return [];
  return readdirSync(katalog, { recursive: true })
    .filter((f) => f.endsWith(koniec))
    .map((f) => join(katalog, f));
}
for (const p of [...pliki('src/data', '.json'), ...pliki('src', '.jsx'), ...pliki('src', '.js')]) {
  skanEmoji(p, readFileSync(p, 'utf8'));
}

// Struktura danych kraju i gier.
for (const f of pliki('src/data', '.json')) {
  let json;
  try { json = JSON.parse(readFileSync(f, 'utf8')); }
  catch (e) { fail(f + ': nieprawidlowy JSON (' + e.message + ')'); continue; }
  if (JSON.stringify(json).match(/„[^”\n]*"[^\n]*/)) {
    fail(f + ': ASCII-" wewnatrz polskiego cudzysłowu');
  }
  if (!/[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/.test(JSON.stringify(json))) fail(f + ': brak polskich znakow');
  const kraje = [json.quiz ? json : null].filter(Boolean);
  for (const kraj of kraje) {
    if (kraj.swieta) {
      if (!Array.isArray(kraj.quiz) || kraj.quiz.length < 10) fail(f + ': quiz ma mniej niz 10 pytan');
      for (const q of kraj.quiz) {
        if (!q.p || !Array.isArray(q.o) || q.o.length < 3 || typeof q.c !== 'number') fail(f + ': zly format pytania');
        if (!q.w) fail(f + ': pytanie bez wyjasnienia (w): ' + String(q.p).slice(0, 50));
      }
      for (const grupa of ['swieta', 'kuchnia', 'muzyka', 'zabytki']) {
        for (const k of kraj[grupa] || []) {
          if (!k.icon) fail(f + ': karta bez ikony: ' + String(k.t).slice(0, 50));
          if (!k.t || !k.d) fail(f + ': karta bez t/d');
        }
      }
      for (const z of kraj.zwroty || []) {
        if (!z.es || !z.pl) fail(f + ': zwrot bez es/pl');
      }
    }
  }
  if (json.memory) {
    for (const p of json.memory) {
      if (!p.es || !p.pl || !p.icon) fail(f + ': para memory bez es/pl/icon');
    }
  }
  if (json.glosariusz) {
    for (const g of json.glosariusz) {
      if (!g.es || !g.mx || !g.pl) fail(f + ': glosariusz bez es/mx/pl');
    }
  }
  if (json.fiszki) {
    if (json.fiszki.length < 20) fail(f + ': fiszek mniej niz 20');
    for (const p of json.fiszki) {
      if (!p.es || !p.pl || !p.fon) fail(f + ': fiszka bez es/pl/fon: ' + String(p.es).slice(0, 40));
    }
  }
  if (json.czytanki) {
    for (const c of json.czytanki) {
      if (!c.tytul || !c.lang || !Array.isArray(c.kwestie) || c.kwestie.length < 5) fail(f + ': zla czytanka: ' + String(c.tytul));
      for (const k of c.kwestie) {
        if (!k.es || !k.pl) fail(f + ': kwestia bez es/pl w: ' + String(c.tytul));
      }
      for (const s of c.slowa || []) {
        if (!s.es || !s.pl || !s.fon) fail(f + ': slowo bez es/pl/fon w: ' + String(c.tytul));
      }
    }
  }
  if (json.wymowa) {
    for (const w of json.wymowa) {
      if (!w.zasada || !w.przyklad || !w.fon || !w.pl) fail(f + ': zasada wymowy bez pol');
    }
  }
  console.log('OK: ' + f);
}

if (errors > 0) { console.error('\nCHECK: ' + errors + ' bledow'); process.exit(1); }
console.log('\nCHECK: wszystko w porzadku');
