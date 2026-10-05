/* Strefa Gier: quiz mieszany, zagadki, memory, kalambury. */
import { $, $$, ik, konfetti, quiz, startWspolny } from './wspolne.js';
import gry from '../data/gry.json';

quiz({ pudelko: '#g-mieszany', pytania: gry.mieszany, klucz: 'mieszany', czasNaPytanie: 20 });
quiz({ pudelko: '#g-zagadki', pytania: gry.zagadki, klucz: 'zagadki', czasNaPytanie: 25 });

/* --- Memory 16 par: klik + pełna klawiatura, bez przeciągania --- */
function memory() {
  const box = $('#g-memory');
  const zyje = $('#g-memory-live');
  const licznik = $('#g-memory-licznik');
  const tasuj = (t) => { for (let i = t.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[t[i], t[j]] = [t[j], t[i]]; } return t; };

  function rozdaj() {
    const karty = tasuj([
      ...gry.memory.map((p) => ({ klucz: p.es, napis: p.es, lang: 'es', pod: 'po hiszpańsku', icon: p.icon })),
      ...gry.memory.map((p) => ({ klucz: p.es, napis: p.pl, lang: 'pl', pod: 'po polsku', icon: null }))
    ]);
    let pierwsza = null, pary = 0, proby = 0, blokada = false;
    box.innerHTML = karty.map((k) =>
      '<button type="button" class="mem" data-klucz="' + k.klucz + '" aria-pressed="false">' +
      (k.icon ? ik(k.icon) + ' ' : '') +
      '<span lang="' + k.lang + '">' + k.napis + '</span><small>' + k.pod + '</small></button>').join('');
    const raport = () => { licznik.textContent = 'Próby: ' + proby + ' · Pary: ' + pary + '/' + gry.memory.length; };
    raport();
    zyje.textContent = 'Znajdź ' + gry.memory.length + ' par: hiszpańskie słowo i polskie znaczenie.';
    box.onclick = (e) => {
      const b = e.target.closest('.mem');
      if (!b || blokada || b.classList.contains('trafiona') || b === pierwsza) return;
      b.setAttribute('aria-pressed', 'true');
      if (!pierwsza) { pierwsza = b; return; }
      proby++;
      if (pierwsza.dataset.klucz === b.dataset.klucz) {
        pierwsza.classList.add('trafiona'); b.classList.add('trafiona');
        pierwsza.setAttribute('aria-pressed', 'false'); b.setAttribute('aria-pressed', 'false');
        pary++; pierwsza = null; raport();
        zyje.textContent = 'Brawo! Para numer ' + pary + ' z ' + gry.memory.length + '.';
        if (pary === gry.memory.length) {
          const poprz = +(localStorage.getItem('djo-memory') || 9999);
          if (proby < poprz) localStorage.setItem('djo-memory', String(proby));
          zyje.textContent = 'Koniec! ' + pary + ' par w ' + proby + ' próbach. ¡Olé!';
          konfetti();
        }
      } else {
        const a = pierwsza; pierwsza = null; blokada = true; raport();
        setTimeout(() => { a.setAttribute('aria-pressed', 'false'); b.setAttribute('aria-pressed', 'false'); blokada = false; }, 550);
      }
    };
  }
  $('#g-memory-nowe').addEventListener('click', rozdaj);
  rozdaj();
}
memory();

/* --- Kalambury 60 haseł, drużyny A/B, skróty --- */
(function kalambury() {
  let pula = [...gry.kalambury], zegar = null, zostalo = 60;
  const haslo = $('#g-haslo'), czas = $('#g-czas');
  const historia = $('#g-historia');
  const losuj = () => {
    if (!pula.length) pula = [...gry.kalambury];
    haslo.textContent = pula.splice(Math.floor(Math.random() * pula.length), 1)[0];
    if (historia) {
      const li = document.createElement('li');
      li.textContent = haslo.textContent;
      historia.prepend(li);
      while (historia.children.length > 5) historia.lastChild.remove();
    }
  };
  const punkt = (kto) => {
    const el = kto === 'A' ? $('#g-a') : $('#g-b');
    el.textContent = +el.textContent + 1;
    losuj();
  };
  $('#g-losuj').addEventListener('click', losuj);
  $('#g-start').addEventListener('click', () => {
    clearInterval(zegar); zostalo = 60; czas.textContent = '60 s'; losuj();
    zegar = setInterval(() => {
      zostalo--; czas.textContent = zostalo > 0 ? zostalo + ' s' : '¡TIEMPO!';
      if (zostalo <= 0) clearInterval(zegar);
    }, 1000);
  });
  $('#g-stop').addEventListener('click', () => clearInterval(zegar));
  $('#g-zero').addEventListener('click', () => { $('#g-a').textContent = '0'; $('#g-b').textContent = '0'; });
  $('#g-punkt-a').addEventListener('click', () => punkt('A'));
  $('#g-punkt-b').addEventListener('click', () => punkt('B'));
  document.addEventListener('keydown', (e) => {
    if (!$('#strefa').contains(document.activeElement)) return;
    if (e.key === ' ') { e.preventDefault(); $('#g-start').click(); }
    else if (e.key.toLowerCase() === 'a') punkt('A');
    else if (e.key.toLowerCase() === 'b') punkt('B');
    else if (e.key.toLowerCase() === 'n') losuj();
  });
  losuj();
})();

startWspolny();
