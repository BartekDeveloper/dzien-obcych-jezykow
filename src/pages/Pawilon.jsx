import { Chip, Ik, NaglowekSekcji, Przycisk, Wzor, asset, url } from '../lib/ui.jsx';
import { Foto, Quiz } from '../components/Gry.jsx';
import { Audio } from '../components/Mowa.jsx';
import hiszpania from '../data/hiszpania.json';
import meksyk from '../data/meksyk.json';

const DANE = { es: hiszpania, mx: meksyk };
const FLAGA = { es: 'i-flag-es', mx: 'i-flag-mx' };
const GLOS = { es: 'es-ES', mx: 'es-MX' };
const SLOWA = { geo: 'MAPA', hist: 'TIEMPO', sw: 'FIESTA', ku: 'SABOR', mu: 'RITMO', za: 'ARTE', je: 'PALABRA', zw: 'HOLA' };

function Karta({ k, akcja, pasek }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1">
      <div aria-hidden="true" className={'h-2 w-full ' + pasek} />
      <div className="p-space-lg md:p-space-xl">
      <div className="flex items-start gap-3">
        <span aria-hidden="true"><Ik id={k.icon} className="h-10 w-10 text-primary" /></span>
        <h3 className="m-0 font-display text-headline-sm font-semibold">{k.t}</h3>
      </div>
      {k.plik && <div className="mt-3"><Foto plik={k.plik} tytul={k.t} podpis={k.podpisFoto} /></div>}
      <p className="mt-2 text-body-md text-muted">{k.d}</p>
      {akcja}
      </div>
    </article>
  );
}

export default function Pawilon({ id }) {
  const d = DANE[id];
  const krajDop = id === 'es' ? 'Hiszpanii' : 'Meksyku';
  const ROZDZIALY = [
    ['#geografia', 'Geografia w pigułce'], ['#historia', 'Historia na osi czasu'],
    ['#swieta', 'Święta i zwyczaje'], ['#kuchnia', 'Kuchnia'],
    ['#muzyka', 'Muzyka i taniec'], ['#zabytki', 'Zabytki i symbole'],
    ['#jezyk', 'Język w pigułce'], ['#zwroty', 'Zwroty z głośnikiem'], ['#quiz', 'Quiz: ' + d.nazwa],
  ];
  const PASEK = id === 'es' ? 'bg-primary' : 'bg-secondary';
  return (
    <div className="mx-auto max-w-[1320px] px-5">
      <section className="relative overflow-hidden border-b-2 border-ink" aria-labelledby="tytul">
        <Wzor />
        <div className="relative px-5 pb-space-xl pt-space-xl text-center">
          <p><svg viewBox="0 0 24 16" className="mx-auto h-[80px] w-[120px] rounded-md border border-line shadow-sm" role="img" aria-label={'Flaga: ' + d.nazwa}><use href={asset('icons.svg') + '#' + FLAGA[id]} /></svg></p>
          <p className="mt-space-sm"><span className="inline-flex items-center gap-2 rounded bg-sand px-3 py-1 text-label-sm font-bold uppercase tracking-[0.06em] text-primary"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />{d.nazwa} · <span lang="es">{d.powitanie}</span></span></p>
          <h1 id="tytul" className="mx-auto mt-space-sm max-w-4xl font-display font-bold" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.2rem)', lineHeight: 1.15 }}>{d.hero.tytul}</h1>
          <p className="mx-auto mt-space-sm max-w-2xl text-body-lg text-muted">{d.hero.lead}</p>
          <div className="mt-space-md flex flex-wrap justify-center gap-space-sm">
            <Przycisk wariant={id === 'es' ? 'es' : 'mx'} do="#quiz">Sprawdź się w quizie</Przycisk>
            <Przycisk do="#zwroty">Posłuchaj zwrotów</Przycisk>
          </div>
        </div>
      </section>

      <section className="py-8" aria-label="Spis treści pawilonu">
        <NaglowekSekcji nr="Mapa" tytul="Spis treści pawilonu" />
        <ol className="grid list-none gap-2.5 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {ROZDZIALY.map(([href, t], i) => (
            <li key={href}>
              <a href={href} className="flex min-h-[56px] items-center gap-2.5 rounded-xl border border-line bg-card p-3 font-bold text-ink no-underline transition hover:-translate-y-0.5 hover:shadow-lg">
                <span aria-hidden="true" className="grid h-[30px] min-w-[30px] place-items-center rounded-full bg-primary text-sm text-white">{i + 1}</span>
                {t}
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section id="geografia" className="scroll-mt-24 py-8">
        <NaglowekSekcji nr="01" tytul={d.geografia.tytul} slowo={SLOWA.geo} lead={d.geografia.lead} />
        <Audio text={d.geografia.akapity.join(' ')} lang="pl-PL" label="Posłuchaj o geografii" />
        <div className="reading-copy mt-4 rounded-[14px] border border-linesoft bg-white p-6 shadow-sm">
          {d.geografia.akapity.map((a, i) => <p key={i} className="max-w-[68ch]">{a}</p>)}
        </div>
        <ul className="mt-3 grid list-none gap-2.5 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {d.geografia.fakty.map((f) => (
            <li key={f.t} className="rounded-[10px] border border-line border-l-[6px] border-l-primary bg-card p-3">
              <b className="block font-display text-xl">{f.w}</b>{f.t}
            </li>
          ))}
        </ul>
      </section>

      <section id="historia" className="scroll-mt-24 py-8">
        <NaglowekSekcji nr="02" tytul="Historia na osi czasu" slowo={SLOWA.hist} lead="Osiem przystanków — od początków po współczesność." />
        <ol className="grid list-none gap-3.5 border-l-[3px] border-primary p-0 pl-6">
          {d.historia.map((h) => (
            <li key={h.rok} className="relative rounded-xl border border-linesoft bg-card p-4">
              <span className="text-sm font-extrabold uppercase tracking-widest text-primary">{h.rok}</span>
              <h3 className="my-0.5 font-display text-lg font-semibold">{h.t}</h3>
              <p className="m-0 text-muted">{h.o}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="swieta" className="scroll-mt-24 py-8">
        <NaglowekSekcji nr="03" tytul="Święta i zwyczaje" slowo={SLOWA.sw} lead="Pięć świąt, które trzeba znać." />
        <div className="grid gap-3.5 md:grid-cols-2">{d.swieta.map((s) => <Karta key={s.t} k={s} pasek={PASEK} />)}</div>
      </section>

      <section id="kuchnia" className="scroll-mt-24 py-8">
        <NaglowekSekcji nr="04" tytul="Kuchnia" slowo={SLOWA.ku} lead={'Pięć smaków ' + krajDop + ' — nazwę każdej potrawy odtworzysz z lektorem.'} />
        <div className="grid items-start gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {d.kuchnia.map((k) => (
            <Karta key={k.t} k={k} pasek={PASEK} akcja={(
              <Audio text={k.es || k.t} lang={GLOS[id]} label="Wymów nazwę" />
            )} />
          ))}
        </div>
      </section>

      <section id="muzyka" className="scroll-mt-24 py-8">
        <NaglowekSekcji nr="05" tytul="Muzyka i taniec" slowo={SLOWA.mu} lead="Czym żyje ulica i fiesta." />
        <div className="grid gap-3.5 md:grid-cols-2">{d.muzyka.map((m) => <Karta key={m.t} k={m} pasek={PASEK} />)}</div>
      </section>

      <section id="zabytki" className="scroll-mt-24 py-8">
        <NaglowekSekcji nr="06" tytul="Zabytki i symbole" slowo={SLOWA.za} lead="Miejsca, które warto poznać: architektura, historia i sztuka." />
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {d.zabytki.map((z) => (
            <article key={z.t} className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1">
              <div aria-hidden="true" className={'h-2 w-full ' + PASEK} />
              <div className="p-space-lg">
              <h3 className="mt-0 font-display text-headline-sm font-semibold">{z.t}</h3>
              {z.plik
                ? <div className="mt-2"><Foto plik={z.plik} tytul={z.t} podpis={z.podpisFoto} /></div>
                : <span aria-hidden="true"><Ik id={z.icon} className="mt-2 h-10 w-10 text-primary" /></span>}
              <p className="mt-2 text-muted">{z.d}</p>
              <Audio text={z.t + '. ' + z.d} lang="pl-PL" label="Przeczytaj opis" />
              <p><Chip kraj={id}>{z.foto}</Chip></p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="jezyk" className="scroll-mt-24 py-8">
        <NaglowekSekcji nr="07" tytul="Język w pigułce" slowo={SLOWA.je} lead={d.jezyk.lead} />
        <div className="reading-copy rounded-[14px] border border-linesoft bg-white p-6 shadow-sm">
          <ul>{d.jezyk.punkty.map((p, i) => <li key={i} className="max-w-[68ch]">{p}</li>)}</ul>
        </div>
      </section>

      <section id="zwroty" className="scroll-mt-24 py-8">
        <NaglowekSekcji nr="08" tytul="Zwroty z głośnikiem" slowo={SLOWA.zw}
          lead={'Posłuchaj i powtórz. Głos: ' + (id === 'es' ? 'Hiszpania (es-ES)' : 'Meksyk (es-MX)') + '.'} />
        <div className="grid gap-2.5 md:grid-cols-2">
          {d.zwroty.map((z) => (
            <div key={z.es} className="min-w-0 rounded-xl border border-linesoft bg-card p-5">
              <div>
                <div lang="es" className="text-lg font-extrabold">{z.es}</div>
                <div className="text-muted">{z.pl} · <span lang="es" className="italic">[{z.fon}]</span></div>
              </div>
              <Audio text={z.es} lang={GLOS[id]} />
            </div>
          ))}
        </div>
      </section>

      <section id="quiz" className="scroll-mt-24 py-8" tabIndex={-1}>
        <NaglowekSekcji nr="Quiz" tytul={d.nazwa + ' — 12 pytań'} slowo="JUEGO" />
        <Quiz pytania={d.quiz} klucz={id === 'es' ? 'hiszpania' : 'meksyk'} czas={20} />
        <p className="mt-3">
          <a href={id === 'es' ? url('/meksyk/') : url('/hiszpania/')} className="font-bold text-tertiary underline">
            {id === 'es' ? 'Teraz Pawilon Meksyku' : 'Wróć do Pawilonu Hiszpanii'}
          </a>{' · '}
          <a href={url('/gry/')} className="font-bold text-tertiary underline">Gry i zabawy</a>
        </p>
      </section>
    </div>
  );
}
