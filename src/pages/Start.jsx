import { Chip, Ik, NaglowekSekcji, Przycisk, asset, url } from '../lib/ui.jsx';
import { Quiz } from '../components/Gry.jsx';
import { mow } from '../lib/hooks.js';
import gry from '../data/gry.json';
import dodatki from '../data/dodatki.json';

function Porownanie() {
  const karty = [
    {
      kraj: 'es', flaga: 'Królestwo Hiszpanii', pod: 'Europa Południowa', foto: 'foto/es-segovia.jpg',
      podpis: 'Fot. Diego Delso, CC BY-SA 4.0, via Wikimedia Commons',
      wiersze: [
        ['Kraj i stolica', 'Hiszpania · ok. 48 mln; stolica: Madryt'],
        ['Sztuka i ekspresja', 'Flamenco, cante jondo, architektura Gaudiego'],
        ['Wielkie święto narodowe', 'Fiesta de San Fermín (Pampeluna), La Tomatina'],
        ['Fundament kulinarny', 'Paella walencjańska, jamón ibérico, oliwki'],
      ],
    },
    {
      kraj: 'mx', flaga: 'Stany Zjednoczone Meksyku', pod: 'Ameryka Północna', foto: 'foto/mx-chichen.jpg',
      podpis: 'Fot. Daniel Schwen, CC BY-SA 4.0, via Wikimedia Commons',
      wiersze: [
        ['Kraj i stolica', 'Meksyk · ok. 128 mln; stolica: Ciudad de México'],
        ['Sztuka i ekspresja', 'Mariachi, murale, ceramika Talavera'],
        ['Wielkie święto narodowe', 'Día de Muertos (UNESCO), Grito de Dolores'],
        ['Fundament kulinarny', 'Mole poblano, kukurydza, papryczki'],
      ],
    },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {karty.map((k) => (
        <article key={k.kraj} className={'rounded-[14px] border border-linesoft bg-card p-6 shadow-sm md:p-8 ' + (k.kraj === 'es' ? 'border-t-4 border-t-primary' : 'border-t-4 border-t-secondary')}>
          <Chip kraj={k.kraj}>{k.pod}</Chip>
          <h3 className="mt-2 font-display text-h2 font-semibold">{k.flaga}</h3>
          <img src={asset(k.foto)} alt={k.flaga} loading="lazy" className="mt-3 aspect-[16/9] w-full rounded-[10px] border border-line object-cover" />
          <p className="mt-1 border-t border-linesoft pt-1 text-sm text-muted">{k.podpis}</p>
          <dl className="mt-3 space-y-2">
            {k.wiersze.map(([dt, dd]) => (
              <div key={dt} className="grid grid-cols-[110px_1fr] gap-2 border-b border-linesoft/60 pb-2 text-sm sm:grid-cols-[140px_1fr] md:text-base">
                <dt className="font-bold uppercase tracking-wide text-muted text-xs self-center">{dt}</dt>
                <dd className="m-0">{dd}</dd>
              </div>
            ))}
          </dl>
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

function Ornament() {
  const kol = ['#9e1b1b', '#c28704', '#206b43', '#003d63'];
  return (
    <div aria-hidden="true" className="flex justify-center py-1">
      <svg width="220" height="18" viewBox="0 0 220 18">
        {Array.from({ length: 11 }, (_, i) => (
          <polygon key={i} points={`${i * 20},2 ${i * 20 + 20},2 ${i * 20 + 10},16`} fill={kol[i % kol.length]} opacity="0.75" />
        ))}
      </svg>
    </div>
  );
}

export default function StronaStart() {
  return (
    <div className="mx-auto max-w-[1320px] px-5">
      <section className="relative overflow-hidden border-b-2 border-ink" aria-labelledby="tytul">
        <div className="absolute inset-0" aria-hidden="true">
          <img src={asset('foto/mx-teotihuacan.jpg')} alt="" fetchPriority="high" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(20,14,8,0.78) 0%, rgba(20,14,8,0.62) 55%, #fff8f6 100%)' }} />
        </div>
        <div className="relative px-5 pb-8 pt-14 text-center text-white">
          <p><span className="inline-block rounded-full border-2 border-gold bg-black/45 px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-gold">Materiał na 1 lekcję · Dzień Języków Obcych</span></p>
          <h1 id="tytul" className="mx-auto mt-3 max-w-4xl font-display font-bold" style={{ fontSize: 'clamp(2.4rem, 6vw, 3.5rem)', lineHeight: 1.15 }}>Dwa Kontynenty, <em className="text-gold">Jeden Język</em></h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-[#f3e9d2]">Wszystko na jedną szybką lekcję: dwa pawilony (Hiszpania i Meksyk) plus gry i zabawy z głośnikiem. Otwórz, czytaj, słuchaj i graj — po polsku, od razu.</p>
          <ul className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-3 text-left md:grid-cols-4" aria-label="Liczby wystawy">
            {[['600 mln', 'mówi po hiszpańsku', '#9e1b1b'], ['21', 'krajów i terytoriów', '#206b43'], ['2', 'kontynenty', '#003d63'], ['1', 'wspólny język', '#c28704']].map(([w, t, barwa]) => (
              <li key={t} className="rounded-xl border border-linesoft border-l-4 bg-white p-4" style={{ borderLeftColor: barwa }}>
                <b className="font-display text-2xl font-bold text-ink">{w}</b><br /><span className="text-sm text-muted">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            <Przycisk wariant="es" do={url('/hiszpania/')}>Odkryj Pawilon Hiszpanii</Przycisk>
            <Przycisk wariant="mx" do={url('/meksyk/')}>Odkryj Pawilon Meksyku</Przycisk>
            <Przycisk wariant="duch" do={url('/gry/')}>Przejdź do gier i zabaw</Przycisk>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="h-plan">
        <Ornament />
        <NaglowekSekcji nr="Lekcja" tytul="Scenariusz lekcji w 45 minut" slowo="RUTA"
          lead="Gotowy plan na Dzień Języków Obcych: od rozgrzewki po finał." />
        <ol className="grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['5 minut', 'Rozgrzewka: quiz „Zgadnij, który to kraj” na dole tej strony.'],
            ['15 minut', 'Jeden pawilon: Hiszpania albo Meksyk — czytaj i słuchaj zwrotów.'],
            ['15 minut', 'Gry i zabawy: fiszki, dopasowanie i zagadki — solo lub w parach.'],
            ['10 minut', 'Finał: quiz pawilonu na czas i rekord sali.'],
          ].map(([czas, opis], i) => (
            <li key={czas} className="rounded-[14px] border border-linesoft bg-card p-5 shadow-sm">
              <p className="m-0 font-display text-2xl font-bold text-primary">{czas}</p>
              <p className="m-0 mt-1 text-muted">{opis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="py-16" aria-labelledby="h-por">
        <NaglowekSekcji nr="Zestawienie" tytul="Hiszpania vs Meksyk — podobieństwa i różnice" slowo="DIÁLOGO"
          lead="Dwa filary hiszpańskojęzycznego świata: demografia, dialektologia, święta i kuchnia." />
        <Porownanie />
      </section>

      <section className="py-16" aria-labelledby="h-glo">
        <NaglowekSekcji nr="Słowniczek" tytul="Miniaturowy słowniczek porównawczy" slowo="PALABRAS"
          lead="Ten sam język, inne słowa. Posłuchaj różnicy między wymową madrycką a meksykańską." />
        <Glosariusz limit={4} />
        <p className="mt-3"><Przycisk do={url('/gry/')}>Cały słowniczek w grach i zabawach</Przycisk></p>
      </section>

      <section className="py-16" aria-labelledby="h-mod">
        <NaglowekSekcji nr="Przewodnik" tytul="Przewodnik po modułach platformy" slowo="RUTA" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Pawilon Hiszpański', 'Historia, sztuka, fonetyka i kuchnia Półwyspu Iberyjskiego.', url('/hiszpania/'), 'es'],
            ['Pawilon Meksykański', 'Kultura, tradycja i język Ameryki Północnej.', url('/meksyk/'), 'mx'],
            ['Wielkie gry i zabawy', 'Quizy, memory, zagadki i trabalenguas.', url('/gry/'), null],
          ].map(([t, d, href, kraj]) => (
            <article key={t} className="rounded-[14px] border border-linesoft bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-display text-xl font-semibold">{t}</h3>
              <p className="text-muted">{d}</p>
              <p><a href={href} className="font-bold text-tertiary underline">Rozpocznij zwiedzanie</a></p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16" aria-labelledby="h-q">
        <Ornament />
        <NaglowekSekcji nr="Quiz wstępny" tytul="Zgadnij, który to kraj" slowo="JUEGO"
          lead="Rozgrzewka przed pawilonami: 12 pytań o to, co hiszpańskie, a co meksykańskie." />
        <Quiz pytania={gry.mieszany} klucz="mieszany" czas={20} />
      </section>
    </div>
  );
}
