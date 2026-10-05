/* Renderer pawilonu krajowego: czyta data-kraj z <html>, ładuje JSON, buduje sekcje. */
import { $, ik, mow, quiz, startWspolny } from './wspolne.js';
import hiszpania from '../data/hiszpania.json';
import meksyk from '../data/meksyk.json';

const DANE = { es: hiszpania, mx: meksyk };
const d = DANE[document.documentElement.dataset.kraj];
if (!d) throw new Error('Nieznany pawilon');
const GLOS = d.id === 'es' ? 'es-ES' : 'es-MX';
const KRAJ_DOP = d.id === 'es' ? 'Hiszpanii' : 'Meksyku';
const FLAGA = d.id === 'es' ? 'i-flag-es' : 'i-flag-mx';

document.title = 'Dzień Języków — ' + d.nazwa;

const h2 = (nr, tytul, slowo) =>
  '<h2><span class="nr">' + nr + '</span> ' + tytul +
  ' <span class="wodny" aria-hidden="true">' + slowo + '</span></h2>';

const fotoImg = (k) =>
  '<figure class="foto" style="margin:12px 0 0"><img class="foto-img" src="' + k.plik + '" alt="' + k.t + '" loading="lazy">' +
  '<figcaption class="foto-podpis">' + (k.podpisFoto || '') + '</figcaption></figure>';

const karta = (k, akcja) =>
  '<article class="card reveal"><div class="karta-gora">' +
  '<div aria-hidden="true">' + ik(k.icon, true) + '</div>' +
  '<div><h3>' + k.t + '</h3></div></div>' +
  (k.plik ? fotoImg(k) : '') +
  '<p class="sub">' + k.d + '</p>' + (akcja || '') + '</article>';

/* Hero — statystyki usunięte; baner i flaga są w HTML */
$('#p-hero').innerHTML =
  '<p><svg class="flaga-duza" role="img" aria-label="Flaga: ' + d.nazwa + '"><use href="icons.svg#' + FLAGA + '"/></svg></p>' +
  '<p><span class="kicker">' + d.nazwa + ' · <span lang="es">' + d.powitanie + '</span></span></p>' +
  '<h1>' + d.hero.tytul + '</h1>' +
  '<p class="lead">' + d.hero.lead + '</p>' +
  '<div class="cta-row"><a class="btn accent" href="#quiz">Sprawdź się w quizie</a>' +
  '<a class="btn btn-ghost" href="#zwroty">Posłuchaj zwrotów</a></div>';

/* Spis treści — kafelki */
const ROZDZIALY = [
  ['#geografia', 'Geografia w pigułce'], ['#historia', 'Historia na osi czasu'],
  ['#swieta', 'Święta i zwyczaje'], ['#kuchnia', 'Kuchnia'],
  ['#muzyka', 'Muzyka i taniec'], ['#zabytki', 'Zabytki i symbole'],
  ['#jezyk', 'Język w pigułce'], ['#zwroty', 'Zwroty z głośnikiem'],
  ['#quiz', 'Quiz: ' + d.nazwa]
];
$('#p-spis').innerHTML =
  '<h2><span class="nr">Mapa</span> Spis treści pawilonu</h2>' +
  '<ol class="spis">' + ROZDZIALY.map((s, i) =>
    '<li><a href="' + s[0] + '"><span class="n" aria-hidden="true">' + (i + 1) + '</span>' + s[1] + '</a></li>').join('') + '</ol>';

/* Geografia */
$('#p-geo').innerHTML =
  h2('01', d.geografia.tytul, 'MAPA') +
  '<p class="lead">' + d.geografia.lead + '</p>' +
  '<div class="prose">' + d.geografia.akapity.map((a) => '<p>' + a + '</p>').join('') + '</div>' +
  '<ul class="fakty">' + d.geografia.fakty.map((f) =>
    '<li><b>' + f.w + '</b>' + f.t + '</li>').join('') + '</ul>';

/* Oś czasu */
$('#p-historia').innerHTML =
  h2('02', 'Historia na osi czasu', 'TIEMPO') +
  '<p class="lead">Osiem przystanków — od początków po współczesność.</p>' +
  '<ol class="os">' + d.historia.map((h) =>
    '<li><span class="rok">' + h.rok + '</span><h3>' + h.t + '</h3><p>' + h.o + '</p></li>').join('') + '</ol>';

/* Święta */
$('#p-swieta').innerHTML =
  h2('03', 'Święta i zwyczaje', 'FIESTA') +
  '<p class="lead">Pięć świąt, które trzeba znać.</p>' +
  '<div class="grid c2">' + d.swieta.map((s) => karta(s)).join('') + '</div>';

/* Kuchnia */
$('#p-kuchnia').innerHTML =
  h2('04', 'Kuchnia', 'SABOR') +
  '<p class="lead">Pięć smaków ' + KRAJ_DOP + ' — nazwę każdej potrawy odtworzysz z lektorem.</p>' +
  '<div class="grid c3">' + d.kuchnia.map((k, i) =>
    karta(k, '<button type="button" class="btn small" data-potrawa="' + i + '">' + ik('i-glosnik') + 'Powiedz nazwę</button>')).join('') + '</div>';
$('#p-kuchnia').addEventListener('click', (e) => {
  const b = e.target.closest('[data-potrawa]');
  if (b) mow(d.kuchnia[+b.dataset.potrawa].t, GLOS);
});

/* Muzyka */
$('#p-muzyka').innerHTML =
  h2('05', 'Muzyka i taniec', 'RITMO') +
  '<p class="lead">Czym żyje ulica i fiesta.</p>' +
  '<div class="grid c2">' + d.muzyka.map((m) => karta(m)).join('') + '</div>';

/* Zabytki — anatomia: tytuł, zdjęcie, opis, tag na końcu */
$('#p-zabytki').innerHTML =
  h2('06', 'Zabytki i symbole', 'ARTE') +
  '<p class="lead">Sześć miejsc do rozpoznania — przydadzą się w Strefie Gier.</p>' +
  '<div class="grid c3">' + d.zabytki.map((z) =>
    '<article class="card reveal"><h3>' + z.t + '</h3>' +
    (z.plik ? fotoImg(z) : '<div aria-hidden="true">' + ik(z.icon, true) + '</div>') +
    '<p class="sub">' + z.d + '</p>' +
    '<p><span class="tag">' + z.foto + '</span></p></article>').join('') + '</div>';

/* Język */
$('#p-jezyk').innerHTML =
  h2('07', 'Język w pigułce', 'PALABRA') +
  '<p class="lead">' + d.jezyk.lead + '</p>' +
  '<div class="prose"><ul>' + d.jezyk.punkty.map((p) => '<li>' + p + '</li>').join('') + '</ul></div>';

/* Zwroty z lektorem */
$('#p-zwroty').innerHTML =
  h2('08', 'Zwroty z głośnikiem', 'HOLA') +
  '<p class="lead">Posłuchaj i powtórz. Głos: ' + (d.id === 'es' ? 'Hiszpania (es-ES)' : 'Meksyk (es-MX)') + '.</p>' +
  '<div class="grid c2">' + d.zwroty.map((z, i) =>
    '<div class="fraza"><div><div class="es" lang="es">' + z.es + '</div>' +
    '<div class="pl">' + z.pl + ' · <span class="fon" lang="es">[' + z.fon + ']</span></div></div>' +
    '<button type="button" class="btn small" data-zwrot="' + i + '" aria-label="Odsłuchaj po hiszpańsku: ' + z.es + '">' + ik('i-glosnik') + 'Odsłuchaj</button></div>').join('') + '</div>';
$('#p-zwroty').addEventListener('click', (e) => {
  const b = e.target.closest('[data-zwrot]');
  if (b) mow(d.zwroty[+b.dataset.zwrot].es, GLOS);
});

/* Quiz pawilonu */
$('#p-quiz-naglowek').innerHTML = h2('Quiz', d.nazwa + ' — 12 pytań', 'JUEGO');
quiz({ pudelko: '#p-quiz', pytania: d.quiz, klucz: d.id === 'es' ? 'hiszpania' : 'meksyk', czasNaPytanie: 20 });

startWspolny();
