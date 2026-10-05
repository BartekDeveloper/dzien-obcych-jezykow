import { Ik, NaglowekSekcji, Przycisk, Wzor, asset, url } from '../lib/ui.jsx';
import { Quiz } from '../components/Gry.jsx';
import { mow } from '../lib/hooks.js';
import gry from '../data/gry.json';
import dodatki from '../data/dodatki.json';

const FAKTY = [
  ['Skala globalna', '600 mln', 'Użytkowników języka hiszpańskiego na całym świecie.', 'bg-primary'],
  ['Zasięg', '21', 'Krajów i terytoriów, gdzie hiszpański jest językiem urzędowym.', 'bg-primarydeep'],
  ['Podróż', '2', 'Kontynenty tej strony: Europa i Ameryka Północna.', 'bg-secondary'],
  ['Wspólny język', '1', 'Język hiszpański w dwóch odmianach: z Hiszpanii i z Meksyku.', 'bg-tertiary'],
];

function Porownanie() {
  const karty = [
    {
      pasek: 'bg-primary', flaga: 'Królestwo Hiszpanii', pod: 'Europa Południowa • Półwysep Iberyjski',
      foto: 'foto/es-segovia.jpg', podpis: 'Fot. Diego Delso, CC BY-SA 4.0, via Wikimedia Commons',
      wiersze: [
        ['Kraj i stolica', 'Hiszpania · ok. 48 mln; stolica: Madryt'],
        ['Sztuka i ekspresja', 'Flamenco, cante jondo, architektura Gaudiego'],
        ['Święta i festiwale', 'San Fermín w Pampelunie, La Tomatina w Buñol'],
        ['Co zjeść?', 'Paella walencjańska, jamón ibérico, oliwki'],
      ],
    },
    {
      pasek: 'bg-secondary', flaga: 'Stany Zjednoczone Meksyku', pod: 'Ameryka Północna',
      foto: 'foto/mx-chichen.jpg', podpis: 'Fot. Daniel Schwen, CC BY-SA 4.0, via Wikimedia Commons',
      wiersze: [
        ['Kraj i stolica', 'Meksyk · ok. 128 mln; stolica: Ciudad de México'],
        ['Sztuka i ekspresja', 'Mariachi, murale, ceramika Talavera'],
        ['Święta i tradycje', 'Día de Muertos, obchody niepodległości we wrześniu'],
        ['Co zjeść?', 'Mole poblano, tacos, kukurydza i papryczki chili'],
      ],
    },
  ];
  return (
    <div className="grid items-stretch gap-space-lg lg:grid-cols-2">
      {karty.map((k) => (
        <article key={k.flaga} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
          <div aria-hidden="true" className={'h-2 w-full ' + k.pasek} />
          <div className="flex grow flex-col p-space-lg md:p-space-xl">
            <span className="block text-label-sm font-bold uppercase tracking-[0.06em] text-primary">{k.pod}</span>
            <h3 className="mt-1 font-display text-headline-lg font-semibold">{k.flaga}</h3>
            <img src={asset(k.foto)} alt={k.flaga} loading="lazy" className="mt-space-md aspect-[16/9] w-full rounded-xl border border-line object-cover" />
            <p className="mt-1 border-t border-linesoft pt-1 text-sm text-muted">{k.podpis}</p>
            <dl className="mt-space-md space-y-2">
              {k.wiersze.map(([dt, dd]) => (
                <div key={dt} className="grid grid-cols-[110px_1fr] gap-2 border-b border-linesoft/60 pb-2 text-body-sm sm:grid-cols-[140px_1fr] md:text-body-md">
                  <dt className="self-center text-xs font-bold uppercase tracking-wide text-muted">{dt}</dt>
                  <dd className="m-0">{dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      ))}
    </div>
  );
}

function Glosariusz({ limit }) {
  const pozycje = limit ? dodatki.glosariusz.slice(0, limit) : dodatki.glosariusz;
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {pozycje.map((g, i) => (
        <div key={i} className="grid grid-cols-1 items-center gap-2 rounded-xl border border-linesoft bg-card p-4 sm:grid-cols-[1fr_auto_1fr]">
          <div>
            <p lang="es" className="font-display text-lg font-bold">{g.es}</p>
            <p className="text-xs uppercase tracking-widest text-muted">Hiszpania</p>
            <button type="button" onClick={() => mow(g.es, 'es-ES')} aria-label={'Odsłuchaj: ' + g.es}
              className="mt-1 inline-flex min-h-[40px] items-center gap-1.5 rounded-full border-2 border-ink px-3 text-sm font-bold">
              <Ik id="i-glosnik" className="h-4 w-4" /> ES
            </button>
          </div>
          <div className="text-left text-sm text-muted sm:text-center">znaczy<br /><b className="text-ink">{g.pl}</b><br />a w Meksyku:</div>
          <div className="sm:text-right">
            <p lang="es" className="font-display text-lg font-bold">{g.mx}</p>
            <p className="text-xs uppercase tracking-widest text-muted">Meksyk</p>
            <button type="button" onClick={() => mow(g.mx, 'es-MX')} aria-label={'Odsłuchaj: ' + g.mx}
              className="mt-1 inline-flex min-h-[40px] items-center gap-1.5 rounded-full border-2 border-ink px-3 text-sm font-bold">
              <Ik id="i-glosnik" className="h-4 w-4" /> MX
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export { Glosariusz };

export default function StronaStart() {
  return (
    <div>
      <section aria-labelledby="tytul" className="relative w-full overflow-hidden bg-surface pb-space-xxl pt-space-xl">
        <Wzor />
        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-10 lg:px-16">
          <div className="mb-space-md flex items-center gap-space-sm">
            <span className="inline-flex items-center gap-2 rounded bg-sand px-3 py-1 text-label-sm font-bold uppercase tracking-[0.06em] text-primary">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
              Dzień Języków Obcych · Hiszpania i Meksyk
            </span>
          </div>
          <div className="mb-space-xl grid items-end gap-space-lg lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 id="tytul" className="mb-space-sm font-display text-display-lg font-bold tracking-tight">
                Dwa Kontynenty, <em className="font-normal italic text-primary">Jeden Język</em>
              </h1>
              <p className="max-w-2xl text-body-lg leading-relaxed text-muted">
                Flamenco czy mariachi? Paella czy tacos? Poznaj Hiszpanię i Meksyk: kulturę, słowa z wymową i quizy. Wszystko po polsku.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-xl bg-white p-space-md shadow-sm">
                <span className="mb-1 block text-label-sm font-bold uppercase text-muted">Jak korzystać</span>
                <ol className="list-none space-y-2 p-0 text-body-sm text-muted">
                  <li><b className="text-ink">1. Wybierz pawilon</b> — Hiszpania albo Meksyk.</li>
                  <li><b className="text-ink">2. Posłuchaj</b> — słowa i zwroty z lektorem.</li>
                  <li><b className="text-ink">3. Zagraj</b> — dopasuj, zgadnij, sprawdź wynik.</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="mb-space-xl grid gap-space-md sm:grid-cols-2 lg:grid-cols-4">
            {FAKTY.map(([etykieta, liczba, opis, pasek]) => (
              <article key={etykieta} className="relative overflow-hidden rounded-xl bg-white p-space-lg shadow-sm">
                <div aria-hidden="true" className={'absolute left-0 top-0 h-full w-1.5 ' + pasek} />
                <span className="mb-space-xs block text-label-sm font-bold uppercase tracking-[0.06em] text-primary">{etykieta}</span>
                <span className="mb-1 block font-display text-headline-xl font-bold">{liczba}</span>
                <p className="text-body-sm leading-snug text-muted">{opis}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-space-md">
            <Przycisk wariant="es" do={url('/hiszpania/')} ikona="i-flag-es">Pawilon Hiszpanii</Przycisk>
            <Przycisk wariant="mx" do={url('/meksyk/')} ikona="i-flag-mx">Pawilon Meksyku</Przycisk>
            <Przycisk do={url('/gry/')} ikona="i-quiz">Gry i zabawy</Przycisk>
          </div>
        </div>
      </section>

      <section aria-labelledby="h-por" className="w-full bg-sand py-space-xxl">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-10 lg:px-16">
          <NaglowekSekcji nr="Zestawienie" tytul="Hiszpania i Meksyk — co je łączy?" lead="Ten sam język, inne smaki, muzyka i zwyczaje. Od czego zaczniesz?" />
          <Porownanie />
        </div>
      </section>

      <section aria-labelledby="h-glo" className="mx-auto max-w-[1320px] px-5 py-space-xxl sm:px-10 lg:px-16">
        <NaglowekSekcji nr="Słowniczek" tytul="To samo, ale inaczej" lead="Ten sam język, inne słowa. Posłuchaj różnicy między wymową madrycką a meksykańską." />
        <Glosariusz limit={4} />
        <p className="mt-space-md"><Przycisk do={url('/gry/')}>Cały słowniczek w grach i zabawach</Przycisk></p>
      </section>

      <section aria-labelledby="h-mod" className="mx-auto max-w-[1320px] px-5 py-space-xxl sm:px-10 lg:px-16">
        <NaglowekSekcji nr="Odkrywaj" tytul="Wybierz swój kierunek" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Pawilon Hiszpański', 'Historia, sztuka, kuchnia i zwroty z Półwyspu Iberyjskiego.', url('/hiszpania/')],
            ['Pawilon Meksykański', 'Kultura, tradycja i język Ameryki Północnej.', url('/meksyk/')],
            ['Gry i zabawy', 'Posłuchaj słów, dopasuj ich znaczenia i rozwiąż quiz.', url('/gry/')],
          ].map(([t, d, href]) => (
            <article key={t} className="rounded-2xl bg-white p-space-lg shadow-sm transition hover:-translate-y-1">
              <h3 className="font-display text-headline-sm font-semibold">{t}</h3>
              <p className="text-body-md text-muted">{d}</p>
              <p><a href={href} className="font-bold text-tertiary underline">Otwórz</a></p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="h-q" className="mx-auto max-w-[1320px] px-5 py-space-xxl sm:px-10 lg:px-16">
        <NaglowekSekcji nr="Quiz" tytul="Zgadnij, który to kraj" lead="Rozgrzewka: 12 pytań o to, co hiszpańskie, a co meksykańskie." />
        <Quiz pytania={gry.mieszany} klucz="mieszany" czas={20} />
      </section>
    </div>
  );
}
