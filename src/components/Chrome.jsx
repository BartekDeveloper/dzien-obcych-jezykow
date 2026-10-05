import { useEffect, useRef, useState } from 'react';
import { Ik, url, Button, Flag } from '../lib/ui.jsx';

const LINKS = [
  { path: '/', text: 'Strona główna' },
  { path: '/hiszpania', text: 'Pawilon Hiszpanii', flag: 'es' },
  { path: '/meksyk', text: 'Pawilon Meksyku', flag: 'mx' },
  { path: '/gry', text: 'Arena Gier' },
];

export function Header({ path, onShare }) {
  const [menu, setMenu] = useState(false);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!menu) return;
    panelRef.current?.querySelector('a')?.focus();
    const close = (e) => { if (e.key === 'Escape') { setMenu(false); buttonRef.current?.focus(); } };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [menu]);

  useEffect(() => {
    const mq = matchMedia('(min-width: 1024px)');
    const reset = () => { if (mq.matches) setMenu(false); };
    mq.addEventListener('change', reset);
    return () => mq.removeEventListener('change', reset);
  }, []);

  const renderLinks = (mobile) => LINKS.map(link => (
    <a
      key={link.path}
      href={url(link.path === '/' ? '/' : link.path + '/')}
      aria-current={path === link.path ? 'page' : undefined}
      onClick={() => setMenu(false)}
      className={`flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold ${
        path === link.path
          ? 'bg-white text-primary shadow-sm'
          : 'text-muted hover:bg-white'
      } ${mobile ? '' : 'whitespace-nowrap'}`}
    >
      {link.flag && <Flag country={link.flag} className="h-4 w-6 shrink-0" />}
      {link.text}
    </a>
  ));

  return (
    <header className="sticky top-0 z-50 border-b border-linesoft bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex min-h-[72px] max-w-[1320px] items-center gap-2 px-4 md:gap-4 md:px-6 lg:px-8">
        <a href={url('/')} className="mr-auto min-w-0 font-display text-[clamp(0.875rem,3.5vw,1.125rem)] font-bold leading-snug text-primary">
          Dzień Języków<span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-muted md:text-xs">Obcych · Hiszpania i Meksyk</span>
        </a>
        <nav aria-label="Nawigacja główna" className="hidden items-center gap-1 rounded-xl bg-sand p-1 lg:flex">
          {renderLinks(false)}
        </nav>
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={menu}
          aria-controls="mobile-menu"
          onClick={() => setMenu(!menu)}
          className="flex min-h-11 shrink-0 items-center gap-1.5 rounded-xl bg-sand px-3 text-sm font-semibold lg:hidden"
        >
          <Ik name="menu" className="h-5 w-5" />Menu
        </button>
        <button
          type="button"
          onClick={onShare}
          aria-label="Udostępnij stronę"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sand text-primary hover:bg-sanddeep"
        >
          <Ik name="share" className="h-5 w-5" />
        </button>
      </div>
      <nav
        ref={panelRef}
        id="mobile-menu"
        aria-label="Menu mobilne"
        hidden={!menu}
        className="max-h-[70vh] overflow-y-auto border-t border-linesoft bg-surface p-4 lg:hidden"
      >
        {renderLinks(true)}
      </nav>
      <noscript>
        <nav aria-label="Nawigacja bez skryptów" className="flex flex-wrap gap-2 p-4 lg:hidden">
          {renderLinks(true)}
        </nav>
      </noscript>
    </header>
  );
}

export function Footer() {
  const groups = [
    ['Odkrywaj', [['Hiszpania', '/hiszpania/'], ['Meksyk', '/meksyk/'], ['Strona główna', '/']]],
    ['Arena Gier', [['Turniej i Kalambury', '/gry/#turniej'], ['Quiz Wiedzy', '/gry/#quiz'], ['Pamięć i Leksykon', '/gry/#pamiec'], ['Łamańce Językowe', '/gry/#trabalenguas'], ['Ranking i QR', '/gry/#ranking']]],
    ['Na skróty', [['Zwroty Hiszpania', '/hiszpania/#zwroty'], ['Zwroty Meksyk', '/meksyk/#zwroty'], ['Fonetyka 6 fraz', '/hiszpania/#fonetyka'], ['Idiomy Meksyk', '/meksyk/#idiomy']]],
  ];

  return (
    <footer className="mt-12 border-t border-linesoft bg-sand/60 py-10">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {groups.map(([heading, links]) => (
            <nav key={heading} aria-label={heading}>
              <h2 className="mb-3 font-display text-lg font-bold">{heading}</h2>
              <ul className="space-y-1">
                {links.map(([text, path]) => (
                  <li key={path}>
                    <a href={url(path)} className="inline-flex min-h-11 items-center text-sm text-muted underline decoration-linesoft underline-offset-4 hover:text-primary">{text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-linesoft pt-5 text-sm text-muted">
          <p>© {new Date().getFullYear()} Dzień Języków Obcych · Hiszpania i Meksyk</p>
          <a href="#main" className="inline-flex min-h-11 items-center underline underline-offset-4">Wróć na górę</a>
        </div>
      </div>
    </footer>
  );
}