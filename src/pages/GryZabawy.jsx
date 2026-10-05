import { NaglowekSekcji } from '../lib/ui.jsx';
import { Czytanki, Fiszki, Memory, Quiz, Rekordy, Trabalenguas, Wymowa } from '../components/Gry.jsx';
import { Glosariusz } from './Start.jsx';
import gry from '../data/gry.json';
import dodatki from '../data/dodatki.json';

const MODULY = [
  ['#h-fisz', '1. Słowa'], ['#h-mem', '2. Dopasuj'], ['#h-zag', '3. Zagadki'],
  ['#h-czy', '4. Rozmowy'], ['#h-wym', '5. Wymowa'], ['#h-tra', '6. Łamańce'],
  ['#h-glo', '7. Słowniczek'], ['#h-rek', '8. Wyniki'],
];

function Modul({ id, labelledby, children }) {
  return (
    <section aria-labelledby={labelledby} className="scroll-mt-40">
      {children}
    </section>
  );
}

export default function GryZabawy() {
  return (
    <div>
      <section className="w-full bg-sand py-space-xl" aria-labelledby="tytul">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-10 lg:px-16">
          <span className="inline-flex items-center gap-2 rounded bg-white px-3 py-1 text-label-sm font-bold uppercase tracking-[0.06em] text-primary">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />Dzień Języków Obcych · Gry i zabawy
          </span>
          <h1 id="tytul" className="mt-space-sm font-display text-display-lg font-bold tracking-tight">Posłuchaj, dopasuj, zgadnij</h1>
          <p className="mt-space-sm max-w-2xl text-body-lg text-muted">Co zamówisz w restauracji? Jak zapytasz o drogę? Posłuchaj przydatnych słów, dopasuj znaczenia i rozwiąż zagadki.</p>
        </div>
      </section>
      <nav aria-label="Nawigacja po modułach" className="sticky top-[76px] z-40 w-full bg-sanddeep py-space-sm shadow-sm">
        <div className="mx-auto flex max-w-[1320px] items-center gap-space-sm overflow-x-auto px-5 sm:px-10 lg:px-16">
          {MODULY.map(([href, t]) => (
            <a key={href} href={href} className="whitespace-nowrap rounded-lg bg-white px-4 py-2 text-label-md font-bold text-muted hover:text-primary">{t}</a>
          ))}
        </div>
      </nav>
      <div className="mx-auto max-w-[1320px] space-y-space-xxl px-5 py-space-xl sm:px-10 lg:px-16">
        <Modul labelledby="h-fisz">
          <NaglowekSekcji id="h-fisz" nr="Posłuchaj" tytul="Słowa, które usłyszysz na miejscu"
            lead="28 słów i zwrotów związanych z podróżą, jedzeniem i kulturą. Znaczenie i wymowa zawsze pod ręką." />
          <Fiszki pozycje={dodatki.fiszki} />
        </Modul>

        <Modul labelledby="h-mem">
          <NaglowekSekcji id="h-mem" nr="Dopasuj" tytul="Połącz słowo ze znaczeniem"
            lead="16 par: hiszpańskie słowo i polskie znaczenie. Najpierw fiszki powyżej, potem gra." />
          <Memory pary={gry.memory} />
        </Modul>

        <Modul labelledby="h-zag">
          <NaglowekSekcji id="h-zag" nr="Zgadnij" tytul="Zagadki językowe"
            lead="Sprawdź znaczenie hiszpańskich słów i codziennych powiedzeń." />
          <Quiz pytania={gry.zagadki} klucz="zagadki" czas={25} />
        </Modul>

        <Modul labelledby="h-czy">
          <NaglowekSekcji id="h-czy" nr="Rozmowy" tytul="W restauracji i na fieście"
            lead="Dwie scenki z życia: restauracja i fiesta. Całość, zdanie po zdaniu, z tłumaczeniem." />
          <Czytanki pozycje={dodatki.czytanki} />
        </Modul>

        <Modul labelledby="h-wym">
          <NaglowekSekcji id="h-wym" nr="Wymowa" tytul="Jak to przeczytać"
            lead="7 zasad wymowy z przykładami audio — żeby odczytać szyld, menu i rozkład." />
          <Wymowa pozycje={dodatki.wymowa} />
        </Modul>

        <Modul labelledby="h-tra">
          <NaglowekSekcji id="h-tra" nr="Spróbuj" tytul="Łamańce językowe"
            lead="Dwa łamańce z lektorem: wariant iberyjski i meksykański." />
          <Trabalenguas pozycje={dodatki.trabalenguas} />
        </Modul>

        <Modul labelledby="h-glo">
          <NaglowekSekcji id="h-glo" nr="Porównaj" tytul="Hiszpania mówi inaczej niż Meksyk"
            lead="Osiem par: to samo pojęcie po madrycku i po meksykańsku." />
          <Glosariusz />
        </Modul>

        <Modul labelledby="h-rek">
          <NaglowekSekcji id="h-rek" nr="Wyniki" tytul="Twoje najlepsze wyniki" />
          <Rekordy />
        </Modul>
      </div>
    </div>
  );
}
