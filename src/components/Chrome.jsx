import { useEffect, useRef, useState } from 'react';
import { Ik, url, asset } from '../lib/ui.jsx';

const LINKI = [
  { do: url('/'), sciezka: '/', etykieta: 'Strona Główna' },
  { do: url('/hiszpania/'), sciezka: '/hiszpania', etykieta: 'Pawilon Hiszpanii', ikona: 'i-flag-es' },
  { do: url('/meksyk/'), sciezka: '/meksyk', etykieta: 'Pawilon Meksyku', ikona: 'i-flag-mx' },
  { do: url('/gry/'), sciezka: '/gry', etykieta: 'Gry i zabawy', ikona: 'i-quiz' },
];

export function Naglowek({ sciezka, onUdostepnij }) {
  const [menu, setMenu] = useState(false);
  const [js, setJs] = useState(false);
  const btnRef = useRef(null);
  useEffect(() => { setJs(true); }, []);
  useEffect(() => {
    if (!menu) return;
    const esc = (e) => { if (e.key === 'Escape') zamknij(true); };
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [menu]);

  const zamknij = (fokus) => {
    setMenu(false);
    if (fokus) btnRef.current?.focus();
  };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-surface/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-[1320px] flex-wrap items-center gap-3 px-5 py-2.5">
        <a href={url('/')} className="flex items-center gap-2.5 font-display text-lg font-bold text-ink no-underline">
          <span className="inline-flex gap-1" aria-hidden="true">
            <svg className="h-5 w-[30px] rounded-[3px] border border-line"><use href={asset('icons.svg') + '#i-flag-es'} /></svg>
            <svg className="h-5 w-[30px] rounded-[3px] border border-line"><use href={asset('icons.svg') + '#i-flag-mx'} /></svg>
          </span>
          Dzień Języków
        </a>
        {js && (
          <button ref={btnRef} type="button" onClick={() => setMenu((m) => !m)}
            aria-expanded={menu} aria-controls="nawigacja"
            className="ml-auto inline-flex min-h-[44px] items-center gap-2 rounded-full border-[1.5px] border-line bg-card px-4 font-bold md:hidden">
            <Ik id="i-menu" className="h-5 w-5" /> Menu
          </button>
        )}
        <nav id="nawigacja" aria-label="Nawigacja główna"
          className={(js && !menu ? 'hidden ' : 'flex ') + 'order-last w-full flex-col gap-1 rounded-2xl bg-card p-2 shadow-xl md:order-none md:mx-auto md:flex md:w-auto md:flex-row md:items-center md:gap-0.5 md:rounded-full md:border md:border-linesoft/60 md:bg-white/70 md:p-1.5 md:shadow-[0_6px_22px_rgba(31,27,26,0.08)] md:backdrop-blur'}>
          {LINKI.map((l) => (
            <a key={l.do} href={l.do} aria-current={sciezka === l.sciezka ? 'page' : undefined}
              onClick={() => zamknij(false)}
              className={'inline-flex min-h-[52px] items-center gap-2 rounded-xl px-4 py-2 font-bold text-ink no-underline md:min-h-[40px] md:rounded-full md:px-[22px] md:py-2 md:text-base ' +
                (sciezka === l.sciezka ? 'bg-ink text-white' : 'hover:bg-[#ece7d8]')}>
              {l.ikona && <Ik id={l.ikona} className={l.ikona.startsWith('i-flag') ? 'h-4 w-6' : 'h-[1.15em] w-[1.15em]'} />}
              {l.etykieta}
            </a>
          ))}
        </nav>
        <div role="group" aria-label="Udostępnianie"
          className="ml-auto flex items-center gap-1.5 rounded-full border border-linesoft/60 bg-white/70 p-1.5 shadow-[0_6px_22px_rgba(31,27,26,0.08)] backdrop-blur md:ml-0">
          <button type="button" onClick={onUdostepnij} aria-label="Pokaż kod QR do wysłania klasie" title="QR / Wyślij klasie"
            className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-sand">
            <Ik id="i-udostepnij" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export function Stopka() {
  const rok = new Date().getFullYear();
  return (
    <footer className="mt-14 border-t-2 border-ink bg-sand pb-10 pt-8">
      <div className="mx-auto grid max-w-[1320px] gap-6 px-5 md:grid-cols-3">
        <nav aria-label="Pawilony">
          <h2 className="font-display text-lg font-bold">Pawilony</h2>
          <ul className="m-0 list-none space-y-1.5 p-0">
            <li><a href={url('/hiszpania/')} className="font-bold text-tertiary underline">Pawilon Hiszpanii</a></li>
            <li><a href={url('/hiszpania/#quiz')} className="text-tertiary underline">Quiz: Hiszpania</a></li>
            <li><a href={url('/meksyk/')} className="font-bold text-tertiary underline">Pawilon Meksyku</a></li>
            <li><a href={url('/meksyk/#quiz')} className="text-tertiary underline">Quiz: Meksyk</a></li>
          </ul>
        </nav>
        <nav aria-label="Gry i zabawy">
          <h2 className="font-display text-lg font-bold">Gry i zabawy</h2>
          <ul className="m-0 list-none space-y-1.5 p-0">
            <li><a href={url('/')} className="font-bold text-tertiary underline">Strona główna i scenariusz lekcji</a></li>
            <li><a href={url('/gry/')} className="font-bold text-tertiary underline">Fiszki, dopasowanie, zagadki</a></li>
            <li><a href={url('/gry/#h-rek')} className="text-tertiary underline">Rekordy sali</a></li>
          </ul>
        </nav>
        <div>
          <h2 className="font-display text-lg font-bold">Materiały</h2>
          <ul className="m-0 list-none space-y-1.5 p-0">
            <li><a href={asset('sitemap.xml')} className="text-tertiary underline">Mapa strony (sitemap.xml)</a></li>
            <li><a href="#tresc" className="text-tertiary underline">Wróć na górę strony</a></li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-[1320px] border-t border-linesoft px-5 pt-4 text-sm text-muted">
        © {rok} Dzień Języków Obcych — materiał na jedną lekcję o Hiszpanii i Meksyku.
      </p>
    </footer>
  );
}
