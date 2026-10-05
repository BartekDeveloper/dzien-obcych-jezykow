import { Chip, Ik, NaglowekSekcji, Przycisk, asset, url } from '../lib/ui.jsx';
import { Foto, Quiz } from '../components/Gry.jsx';
import { mow } from '../lib/hooks.js';
import hiszpania from '../data/hiszpania.json';
import meksyk from '../data/meksyk.json';

const DANE = { es: hiszpania, mx: meksyk };
const HERO_FOTO = { es: 'foto/es-mezquita.jpg', mx: 'foto/mx-chichen.jpg' };
const FLAGA = { es: 'i-flag-es', mx: 'i-flag-mx' };
const GLOS = { es: 'es-ES', mx: 'es-MX' };
const SLOWA = { geo: 'MAPA', hist: 'TIEMPO', sw: 'FIESTA', ku: 'SABOR', mu: 'RITMO', za: 'ARTE', je: 'PALABRA', zw: 'HOLA' };

function Karta({ k, akcja }) {
  return (
    <article className="rounded-[14px] border border-linesoft bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:p-8">
      <div className="flex items-start gap-3">
        <span aria-hidden="true" className={k.kraj || ''}><Ik id={k.icon} className="h-10 w-10 text-primary" /></span>
        <h3 className="m-0 font-display text-xl font-semibold">{k.t}</h3>
      </div>
      {k.plik && <div className="mt-3"><Foto plik={k.plik} tytul={k.t} podpis={k.podpisFoto} /></div>}
      <p className="mt-2 text-muted">{k.d}</p>
      {akcja}
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
  return (
    <div className="mx-auto max-w-[1320px] px-5">
      <section className="relative overflow-hidden border-b-2 border-ink" aria-labelledby="tytul">
        <div className="absolute inset-0" aria-hidden="true">
          <img src={asset(HERO_FOTO[id])} alt="" fetchPriority="high" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(20,14,8,0.78) 0%, rgba(20,14,8,0.62) 55%, #fff8f6 100%)' }} />
        </div>
        <div className="relative px-5 pb-8 pt-14 text-center text-white">
          <p><svg className="mx-auto h-auto w-[132px] rounded-[10px] border-2 border-white/70 shadow-2xl" role="img" aria-label={'Flaga: ' + d.nazwa}><use href={asset('icons.svg') + '#' + FLAGA[id]} /></svg></p>
          <p className="mt-3"><span className="inline-block rounded-full border-2 border-gold bg-black/45 px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-gold">{d.nazwa} · <span lang="es">{d.powitanie}</span></span></p>
          <h1 id="tytul" className="mx-auto mt-3 max-w-4xl font-display font-bold" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.2rem)', lineHeight: 1.15 }}>{d.hero.tytul}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-[#f3e9d2]">{d.hero.lead}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            <Przycisk wariant={id === 'es' ? 'es' : 'mx'} do="#quiz">Sprawdź się w quizie</Przycisk>
            <Przycisk wariant="duch" do="#zwroty">Posłuchaj zwrotów</Przycisk>
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
        <div className="rounded-[14px] border border-linesoft bg-white px-6 py-2 shadow-sm">
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
        <div className="grid gap-3.5 md:grid-cols-2">{d.swieta.map((s) => <Karta key={s.t} k={s} />)}</div>
      </section>

      <section id="kuchnia" className="scroll-mt-24 py-8">
        <NaglowekSekcji nr="04" tytul="Kuchnia" slowo={SLOWA.ku} lead={'Pięć smaków ' + krajDop + ' — nazwę każdej potrawy odtworzysz z lektorem.'} />
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {d.kuchnia.map((k) => (
            <Karta key={k.t} k={k} akcja={(
              <button type="button" onClick={() => mow(k.t, GLOS[id])} aria-label={'Powiedz nazwę potrawy: ' + k.t}
                className="mt-1 inline-flex min-h-[40px] items-center gap-1.5 rounded-full border-2 border-ink bg-card px-3 text-sm font-bold">
                <Ik id="i-glosnik" className="h-4 w-4" /> Powiedz nazwę
              </button>
            )} />
          ))}
        </div>
      </section>

      <section id="muzyka" className="scroll-mt-24 py-8">
        <NaglowekSekcji nr="05" tytul="Muzyka i taniec" slowo={SLOWA.mu} lead="Czym żyje ulica i fiesta." />
        <div className="grid gap-3.5 md:grid-cols-2">{d.muzyka.map((m) => <Karta key={m.t} k={m} />)}</div>
      </section>

      <section id="zabytki" className="scroll-mt-24 py-8">
        <NaglowekSekcji nr="06" tytul="Zabytki i symbole" slowo={SLOWA.za} lead="Sześć miejsc do rozpoznania — przydadzą się w grach i zabawach." />
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {d.zabytki.map((z) => (
            <article key={z.t} className="rounded-[14px] border border-linesoft bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="mt-0 font-display text-xl font-semibold">{z.t}</h3>
              {z.plik
                ? <div className="mt-2"><Foto plik={z.plik} tytul={z.t} podpis={z.podpisFoto} /></div>
                : <span aria-hidden="true"><Ik id={z.icon} className="mt-2 h-10 w-10 text-primary" /></span>}
              <p className="mt-2 text-muted">{z.d}</p>
              <p><Chip kraj={id}>{z.foto}</Chip></p>
            </article>
          ))}
        </div>
      </section>

      <section id="jezyk" className="scroll-mt-24 py-8">
        <NaglowekSekcji nr="07" tytul="Język w pigułce" slowo={SLOWA.je} lead={d.jezyk.lead} />
        <div className="rounded-[14px] border border-linesoft bg-white px-6 py-2 shadow-sm">
          <ul>{d.jezyk.punkty.map((p, i) => <li key={i} className="max-w-[68ch]">{p}</li>)}</ul>
        </div>
      </section>

      <section id="zwroty" className="scroll-mt-24 py-8">
        <NaglowekSekcji nr="08" tytul="Zwroty z głośnikiem" slowo={SLOWA.zw}
          lead={'Posłuchaj i powtórz. Głos: ' + (id === 'es' ? 'Hiszpania (es-ES)' : 'Meksyk (es-MX)') + '.'} />
        <div className="grid gap-2.5 md:grid-cols-2">
          {d.zwroty.map((z) => (
            <div key={z.es} className="flex items-center justify-between gap-3 rounded-xl border border-line bg-card p-3 pl-4">
              <div>
                <div lang="es" className="text-lg font-extrabold">{z.es}</div>
                <div className="text-muted">{z.pl} · <span lang="es" className="italic">[{z.fon}]</span></div>
              </div>
              <button type="button" onClick={() => mow(z.es, GLOS[id])} aria-label={'Odsłuchaj po hiszpańsku: ' + z.es}
                className="inline-flex min-h-[40px] shrink-0 items-center gap-1.5 rounded-full border-2 border-ink bg-card px-3 text-sm font-bold">
                <Ik id="i-glosnik" className="h-4 w-4" /> Odsłuchaj
              </button>
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
