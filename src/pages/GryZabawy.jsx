import { NaglowekSekcji } from '../lib/ui.jsx';
import { Czytanki, Fiszki, Memory, Quiz, Rekordy, Trabalenguas, Wymowa } from '../components/Gry.jsx';
import { Glosariusz } from './Start.jsx';
import gry from '../data/gry.json';
import dodatki from '../data/dodatki.json';

export default function GryZabawy() {
  return (
    <div className="mx-auto max-w-[1320px] px-5">
      <section className="border-b-2 border-ink px-5 pb-8 pt-14 text-center" aria-labelledby="tytul">
        <p><span className="inline-block rounded-full border-2 border-primary bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">Gry i zabawy · na lekcję i do domu</span></p>
        <h1 id="tytul" className="mx-auto mt-3 max-w-4xl font-display font-bold" style={{ fontSize: 'clamp(2.4rem, 6vw, 3.5rem)', lineHeight: 1.15 }}>Posłuchaj, dopasuj, zgadnij</h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-muted">Najpierw osłuchaj się z fiszkami, potem sprawdź się w dopasowaniu i quizach. Wszystko z głośnikiem — mów razem z lektorem.</p>
      </section>

      <section className="py-16" aria-labelledby="h-fisz">
        <NaglowekSekcji nr="Słowa 1" tytul="Fiszki: usłyszysz to na miejscu" slowo="HOLA"
          lead="28 słów i zwrotów z ulicy, targu i fiesty. Posłuchaj normalnie i wolno, powtórz na głos." />
        <Fiszki pozycje={dodatki.fiszki} />
      </section>

      <section className="py-16" aria-labelledby="h-mem">
        <NaglowekSekcji nr="Gra 2" tytul="Dopasuj pojęcia: Hiszpania i Meksyk" slowo="MEMO"
          lead="16 par: hiszpańskie słowo i polskie znaczenie. Najpierw fiszki powyżej, potem gra." />
        <Memory pary={gry.memory} />
      </section>

      <section className="py-16" aria-labelledby="h-zag">
        <NaglowekSekcji nr="Gra 3" tytul="Zagadki językowe" slowo="MISTERIO"
          lead="Idiomy, fałszywi przyjaciele i meksykańskie „jutro, które nigdy nie nadchodzi”." />
        <Quiz pytania={gry.zagadki} klucz="zagadki" czas={25} />
      </section>

      <section className="py-16" aria-labelledby="h-czy">
        <NaglowekSekcji nr="Słowa 2" tytul="Czytanki z lektorem" slowo="LEE"
          lead="Dwie scenki z życia: restauracja i fiesta. Całość, zdanie po zdaniu, z tłumaczeniem." />
        <Czytanki pozycje={dodatki.czytanki} />
      </section>

      <section className="py-16" aria-labelledby="h-wym">
        <NaglowekSekcji nr="Słowa 3" tytul="Jak to przeczytać" slowo="SONIDO"
          lead="7 zasad wymowy z przykładami audio — żeby odczytać szyld, menu i rozkład." />
        <Wymowa pozycje={dodatki.wymowa} />
      </section>

      <section className="py-16" aria-labelledby="h-tra">
        <NaglowekSekcji nr="Gra 4" tytul="Łamańce językowe (trabalenguas)" slowo="RITMO"
          lead="Dwa łamańce z lektorem: wariant iberyjski i meksykański." />
        <Trabalenguas pozycje={dodatki.trabalenguas} />
      </section>

      <section className="py-16" aria-labelledby="h-glo">
        <NaglowekSekcji nr="Słowniczek" tytul="Cały słowniczek porównawczy" slowo="PALABRAS"
          lead="Osiem par: to samo pojęcie po madrycku i po meksykańsku." />
        <Glosariusz />
      </section>

      <section className="py-16" aria-labelledby="h-rek">
        <NaglowekSekcji nr="Wyniki" tytul="Najlepsze wyniki w sali" slowo="TROFEO" />
        <Rekordy />
      </section>
    </div>
  );
}
