// Kontrola jakości danych: poprawny JSON, pełna polszczyzna, zbalansowane cudzysłowy.
// Uruchomienie: npm run check
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const DATA = 'src/data'
let errors = 0
const fail = (msg) => { errors++; console.error('BLAD: ' + msg) }

// 0. Bramka zero-emoji: skanuje dane, JS i HTML (dozwolony tylko ✓ U+2713).
const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}]/u;
function skanEmoji(sciezka, raw) {
  const bezFajki = raw.replace(/✓/g, '');
  const m = bezFajki.match(EMOJI);
  if (m) fail(sciezka + ': znaleziono emoji: ' + m[0] + ' (kontekst: …' + bezFajki.slice(Math.max(0, bezFajki.indexOf(m[0]) - 30), bezFajki.indexOf(m[0]) + 30) + '…)');
}
for (const f of readdirSync(DATA)) {
  if (f.endsWith('.json')) skanEmoji('data/' + f, readFileSync(join(DATA, f), 'utf8'));
}
for (const f of readdirSync('src/js')) skanEmoji('js/' + f, readFileSync(join('src/js', f), 'utf8'));
for (const f of readdirSync('.')) {
  if (f.endsWith('.html')) skanEmoji(f, readFileSync(f, 'utf8'));
}

if (!existsSync(DATA)) fail('brak katalogu ' + DATA)

for (const f of readdirSync(DATA)) {
  if (!f.endsWith('.json')) continue
  const path = join(DATA, f)
  let raw
  try { raw = readFileSync(path, 'utf8') } catch { fail(f + ': nie da sie odczytac'); continue }
  let json
  try { json = JSON.parse(raw) } catch (e) { fail(f + ': nieprawidlowy JSON (' + e.message + ')'); continue }

  // 1. Wykryj podejrzane ASCII-cudzysłowy po polskim „ (klasyczny objaw uciętego stringa w JS)
  const suspect = raw.match(/„[^”\n]*"[^\n]*/g)
  if (suspect) fail(f + ': znaleziono ASCII-" wewnatrz polskiego cudzysłowu: ' + suspect[0].slice(0, 80))

  // 2. Sprawdź polskie znaki w tekstach (dane muszą je zawierać)
  const texts = JSON.stringify(json)
  if (!/[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/.test(texts)) fail(f + ': brak polskich znakow diakrytycznych w danych')

  // 3. Struktura kraju
  if (json.rozdzialy || json.swieta) {
    if (!Array.isArray(json.quiz) || json.quiz.length < 10) fail(f + ': quiz kraju ma mniej niz 10 pytan')
    for (const q of json.quiz) {
      if (!q.p || !Array.isArray(q.o) || q.o.length < 3 || typeof q.c !== 'number') fail(f + ': zly format pytania: ' + JSON.stringify(q).slice(0, 60))
      if (!q.w) fail(f + ': pytanie bez wyjasnienia (w): ' + String(q.p).slice(0, 50))
    }
    for (const grupa of ['swieta', 'kuchnia', 'muzyka', 'zabytki']) {
      for (const k of json[grupa] || []) {
        if (!k.icon) fail(f + ': karta bez ikony: ' + String(k.t).slice(0, 50))
        if (!k.t || !k.d) fail(f + ': karta bez t/d')
      }
    }
    for (const z of json.zwroty || []) {
      if (!z.es || !z.pl) fail(f + ': zwrot bez es/pl')
    }
  }
  if (json.memory) {
    for (const p of json.memory) {
      if (!p.es || !p.pl || !p.icon) fail(f + ': para memory bez es/pl/icon')
    }
  }
  console.log('OK: ' + f)
}

if (errors > 0) { console.error('\nCHECK: ' + errors + ' bledow'); process.exit(1) }
console.log('\nCHECK: wszystko w porzadku')
