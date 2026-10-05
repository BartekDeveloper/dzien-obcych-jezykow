import { useCallback, useEffect, useRef, useState } from 'react';
import { Ik, Przycisk, asset } from '../lib/ui.jsx';
import { mow, useKonfetti, useLocalStorage, useTimer } from '../lib/hooks.js';

/* ---------------- Silnik quizu z powtórką ---------------- */
export function Quiz({ pytania, klucz, czas = 20, tytul = '' }) {
  const [faza, setFaza] = useState('start');
  const [idx, setIdx] = useState(0);
  const [punkty, setPunkty] = useState(0);
  const [odp, setOdp] = useState([]);
  const [zamkniete, setZamkniete] = useState(false);
  const [wybor, setWybor] = useState(-2);
  const [komunikat, setKomunikat] = useState('');
  const [powtorka, setPowtorka] = useState(false);
  const [rekord, setRekord] = useLocalStorage('djo-' + klucz, null);
  const [nick, setNick] = useState('Drużyna A');
  const [zapisano, setZapisano] = useState(false);
  const konfetti = useKonfetti();
  const timeoutRef = useRef(null);

  const koniec = useCallback(() => {
    setFaza((f) => {
      if (f !== 'gra') return f;
      setZamkniete(true);
      setOdp((o) => [...o, { ...pytania[idxRef.current], wybor: -1 }]);
      setKomunikat('Czas minął. Poprawna odpowiedź: ' + pytania[idxRef.current].o[pytania[idxRef.current].c] + '.');
      timeoutRef.current = setTimeout(dalej, 1400);
      return f;
    });
  }, [pytania]);
  const idxRef = useRef(0);
  idxRef.current = idx;

  const [zostalo, startZegara, stopZegara] = useTimer(czas, koniec);

  useEffect(() => () => { clearTimeout(timeoutRef.current); stopZegara(); }, [stopZegara]);
  useEffect(() => {
    if (faza === 'koniec' && punkty >= pytania.length * 0.8) konfetti();
  }, [faza, punkty, pytania.length, konfetti]);

  const start = () => {
    setIdx(0); setPunkty(0); setOdp([]); setZamkniete(false);
    setWybor(-2); setPowtorka(false); setZapisano(false);
    setKomunikat('Pytanie 1 z ' + pytania.length + ': ' + pytania[0].p);
    setFaza('gra');
    startZegara();
  };

  const dalej = useCallback(() => {
    setIdx((i) => {
      if (i + 1 >= pytania.length) {
        stopZegara();
        setFaza('koniec');
        return i;
      }
      const n = i + 1;
      setZamkniete(false); setWybor(-2);
      setKomunikat('Pytanie ' + (n + 1) + ' z ' + pytania.length + ': ' + pytania[n].p);
      startZegara();
      return n;
    });
  }, [pytania.length, startZegara, stopZegara]);

  const zablokuj = (w) => {
    if (zamkniete) return;
    setZamkniete(true); setWybor(w); stopZegara();
    const q = pytania[idx];
    setOdp((o) => [...o, { ...q, wybor: w }]);
    if (w === q.c) {
      setPunkty((p) => p + 1);
      setKomunikat('Dobrze!');
    } else {
      setKomunikat('Nie tym razem. Poprawna odpowiedź: ' + q.o[q.c] + '.');
    }
    timeoutRef.current = setTimeout(dalej, 1400);
  };

  const jestRekord = !rekord || punkty > rekord.punkty;
  const zle = odp.filter((o) => o.wybor !== o.poprawna && o.wybor !== undefined).length;

  return (
    <div className="rounded-2xl bg-ink p-6 text-[#faf5ea] shadow-xl">
      {tytul && <h3 className="font-display text-xl font-bold text-white">{tytul}</h3>}
      {faza === 'start' && (
        <div>
          <p>Naciśnij start. Na każde pytanie masz {czas} sekund.</p>
          <p className="text-sm opacity-90">{rekord ? 'Rekord sali: ' + rekord.nick + ' — ' + rekord.punkty + '/' + pytania.length : 'Rekord sali: nikt jeszcze nie grał. Bądź pierwszy!'}</p>
          <p className="sr-only" role="status">{komunikat}</p>
          <Przycisk wariant="es" onClick={start}>Start quizu</Przycisk>
        </div>
      )}
      {faza === 'gra' && (
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span>Pytanie {idx + 1} z {pytania.length}</span>
            <span className="min-w-[86px] rounded-[10px] border border-[#665] bg-black px-4 py-1 text-center text-xl font-extrabold text-gold" role="timer">{zostalo} s</span>
            <span><b>Punkty: {punkty}</b></span>
          </div>
          <div className="my-3 h-2 overflow-hidden rounded-full bg-[#4a4438]" aria-hidden="true">
            <div className="h-full bg-gold transition-all" style={{ width: Math.round((idx / pytania.length) * 100) + '%' }} />
          </div>
          <fieldset className="m-0 border-0 p-0">
            <legend><h3 className="font-display text-xl font-bold text-white">{pytania[idx].p}</h3></legend>
            <ul className="mt-3 grid list-none gap-2.5 p-0">
              {pytania[idx].o.map((o, k) => (
                <li key={k}>
                  <button type="button" disabled={zamkniete} onClick={() => zablokuj(k)}
                    className={'min-h-[52px] w-full rounded-xl border-[3px] bg-white p-3 text-left text-base text-ink ' +
                      (zamkniete && k === pytania[idx].c ? 'border-green-600 bg-[#c9ecd4]' :
                        zamkniete && k === wybor ? 'border-red-700 bg-[#f6cfc6]' : 'border-transparent hover:border-gold')}>
                    <span aria-hidden="true" className="mr-2 inline-grid h-7 w-7 place-items-center rounded-full bg-sand align-middle text-sm font-extrabold">{'ABCD'[k]}</span>{o}
                  </button>
                </li>
              ))}
            </ul>
          </fieldset>
          <p className="sr-only" role="status">{komunikat}</p>
        </div>
      )}
      {faza === 'koniec' && (
        <div>
          <h3 className="font-display text-xl font-bold text-white">Wynik: {punkty} / {pytania.length}</h3>
          <p>{punkty >= pytania.length * 0.8 ? 'Poziom mistrzowski — ¡Increíble!'
            : punkty >= pytania.length * 0.5 ? 'Dobry wynik — ¡muy bien! Sprawdź powtórkę poniżej.'
            : 'Wróć do rozdziałów i spróbuj ponownie — ¡ánimo!'}</p>
          {jestRekord && punkty > 0 && (
            <p>
              <label htmlFor={klucz + '-nick'}>Nowy rekord! Podpisz drużynę: </label>
              <input id={klucz + '-nick'} value={nick} maxLength={24} onChange={(e) => setNick(e.target.value.slice(0, 24))}
                className="rounded-[10px] border-2 border-white bg-black p-2.5 text-white" />{' '}
              <button type="button" disabled={zapisano} onClick={() => { setRekord({ nick: nick || 'Drużyna', punkty }); setZapisano(true); }}
                className="inline-flex min-h-[44px] items-center rounded-[10px] bg-primary px-5 font-bold text-white disabled:opacity-60">
                {zapisano ? 'Zapisano' : 'Zapisz rekord'}
              </button>
            </p>
          )}
          <p className="flex flex-wrap gap-2">
            <Przycisk wariant="es" onClick={start}>Zagraj ponownie</Przycisk>
            <button type="button" onClick={() => setPowtorka((v) => !v)} aria-expanded={powtorka}
              className="inline-flex min-h-[44px] items-center rounded-[10px] border-2 border-white bg-transparent px-5 font-bold text-white">
              {powtorka ? 'Ukryj powtórkę' : 'Zobacz powtórkę'}
            </button>
          </p>
          {powtorka && (
            <ol className="mt-2 space-y-3">
              {odp.map((o, k) => {
                const traf = o.wybor === o.c;
                return (
                  <li key={k} className="rounded-xl bg-white/10 p-3">
                    <b>{o.p}</b><br />
                    <span>{traf ? 'Twoja odpowiedź (poprawna): ' : 'Twoja odpowiedź: '}{o.wybor >= 0 ? o.o[o.wybor] : 'brak (czas minął)'}</span><br />
                    {!traf && (<><span>Poprawna odpowiedź: {o.o[o.c]}</span><br /></>)}
                    {o.w && <span>Wyjaśnienie: {o.w}</span>}
                  </li>
                );
              })}
            </ol>
          )}
          <p className="sr-only" role="status">Koniec quizu. Wynik: {punkty} na {pytania.length}.</p>
        </div>
      )}
    </div>
  );
}

/* ---------------- Memory ---------------- */
function tasuj(t) {
  const a = [...t];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function Memory({ pary }) {
  const buduj = useCallback(() => [
    ...pary.map((p) => ({ klucz: p.es, napis: p.es, lang: 'es', pod: 'po hiszpańsku', icon: p.icon })),
    ...pary.map((p) => ({ klucz: p.es, napis: p.pl, lang: 'pl', pod: 'po polsku', icon: null })),
  ], [pary]);
  // Start: uporządkowane (identyczne w SSR i hydracji); tasowanie po montowaniu.
  const [karty, setKarty] = useState(buduj);
  const [pierwsza, setPierwsza] = useState(null);
  const [trafione, setTrafione] = useState([]);
  const [proby, setProby] = useState(0);
  const [blokada, setBlokada] = useState(false);
  const [komunikat, setKomunikat] = useState('');
  const konfetti = useKonfetti();

  const rozdaj = useCallback(() => {
    setKarty(tasuj(buduj()));
    setPierwsza(null); setTrafione([]); setProby(0); setBlokada(false);
    setKomunikat('Znajdź ' + pary.length + ' par: hiszpańskie słowo i polskie znaczenie.');
  }, [buduj, pary.length]);

  useEffect(() => { setKarty((k) => tasuj(k)); setKomunikat('Znajdź ' + pary.length + ' par: hiszpańskie słowo i polskie znaczenie.'); }, [pary.length]);
  useEffect(() => {
    if (trafione.length === pary.length && pary.length > 0) {
      try {
        const poprz = +(localStorage.getItem('djo-memory') || 9999);
        if (proby < poprz) localStorage.setItem('djo-memory', String(proby));
      } catch { /* brak */ }
      setKomunikat('Koniec! ' + pary.length + ' par w ' + proby + ' próbach. ¡Olé!');
      konfetti();
    }
  }, [trafione, pary.length, proby, konfetti]);

  const klik = (idxKarty) => {
    if (blokada || trafione.includes(idxKarty) || pierwsza === idxKarty) return;
    if (pierwsza === null) { setPierwsza(idxKarty); return; }
    const a = pierwsza;
    setProby((p) => p + 1);
    if (karty[a].klucz === karty[idxKarty].klucz) {
      setTrafione((t) => [...t, a, idxKarty]);
      setPierwsza(null);
      setKomunikat('Brawo! Para: ' + karty[idxKarty].klucz + '.');
    } else {
      setPierwsza(idxKarty);
      setBlokada(true);
      setTimeout(() => { setPierwsza(null); setBlokada(false); }, 550);
    }
  };

  const paryZdobyte = trafione.length / 2;

  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2.5" role="group" aria-label="Karty memory">
        {karty.map((k, i) => {
          const aktywna = pierwsza === i;
          const traf = trafione.includes(i);
          return (
            <button key={i} type="button" onClick={() => klik(i)} disabled={traf}
              aria-pressed={aktywna}
              className={'grid min-h-[104px] place-items-center rounded-[14px] border-2 border-ink p-2.5 text-center font-bold ' +
                (traf ? 'border-secondary bg-[#dcefe2]' : aktywna ? 'bg-ink text-white' : 'bg-card text-ink hover:-translate-y-0.5')}>
              <span lang={k.lang}>{k.napis}</span>
              <small className={'block text-xs font-normal ' + (aktywna ? 'text-[#e8ddc4]' : 'text-muted')}>{k.pod}</small>
            </button>
          );
        })}
      </div>
      <p className="sr-only" role="status">{komunikat}</p>
      <p className="mt-2 flex flex-wrap items-center gap-3">
        <span>Próby: {proby} · Pary: {paryZdobyte}/{pary.length}</span>
        <button type="button" onClick={rozdaj} className="inline-flex min-h-[44px] items-center rounded-full border-2 border-ink bg-card px-4 font-bold">Nowe rozdanie</button>
      </p>
    </div>
  );
}

/* ---------------- Trabalenguas ---------------- */
export function Trabalenguas({ pozycje }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {pozycje.map((t, i) => (
        <article key={i} className="rounded-[14px] border border-linesoft bg-card p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-muted">{t.wariant} · poziom: {t.poziom}</p>
          <p lang="es" className="font-display text-xl font-semibold">„{t.tekst}”</p>
          <p className="text-muted">{t.pl}</p>
          <button type="button" onClick={() => mow(t.tekst, t.lang || 'es-ES')}
            className="mt-1 inline-flex min-h-[44px] items-center gap-2 rounded-full border-2 border-ink bg-card px-4 font-bold">
            <Ik id="i-glosnik" className="h-5 w-5" /> Odsłuchaj wolno
          </button>
        </article>
      ))}
    </div>
  );
}

/* ---------------- Tabela rekordów ---------------- */
const KATEGORIE = [
  ['djo-hiszpania', 'Quiz: Hiszpania'], ['djo-meksyk', 'Quiz: Meksyk'],
  ['djo-mieszany', 'Pojedynek'], ['djo-zagadki', 'Zagadki językowe'],
];
export function Rekordy() {
  const [wiersze, setWiersze] = useState([]);
  useEffect(() => {
    const w = [];
    try {
      for (const [k, nazwa] of KATEGORIE) {
        const raw = localStorage.getItem(k);
        if (raw) { const r = JSON.parse(raw); w.push({ nazwa, nick: r.nick, punkty: r.punkty }); }
      }
      const mem = localStorage.getItem('djo-memory');
      if (mem) w.push({ nazwa: 'Memory', nick: 'najmniej prób', punkty: mem + ' prób' });
    } catch { /* brak */ }
    setWiersze(w);
  }, []);
  const wyczysc = () => {
    if (!window.confirm('Wyczyścić wszystkie rekordy sali?')) return;
    try {
      [...KATEGORIE.map((k) => k[0]), 'djo-memory'].forEach((k) => localStorage.removeItem(k));
    } catch { /* brak */ }
    setWiersze([]);
  };
  if (!wiersze.length) return <p className="text-muted">Brak rekordów — zagraj w dowolny quiz, a wynik pojawi się tutaj.</p>;
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[420px] border-collapse rounded-xl bg-card text-left">
        <thead><tr className="border-b-2 border-ink">
          <th className="p-3">Kategoria</th><th className="p-3">Drużyna</th><th className="p-3">Wynik</th>
        </tr></thead>
        <tbody>
          {wiersze.map((w, i) => (
            <tr key={i} className="border-b border-linesoft"><td className="p-3">{w.nazwa}</td><td className="p-3 font-bold">{w.nick}</td><td className="p-3">{w.punkty}</td></tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2"><button type="button" onClick={wyczysc} className="inline-flex min-h-[44px] items-center rounded-[10px] border-2 border-line bg-card px-4 font-bold">Wyczyść historię sali</button></p>
    </div>
  );
}

export function Foto({ plik, tytul, podpis }) {
  return (
    <figure className="m-0">
      <img src={asset(plik)} alt={tytul} loading="lazy" className="block aspect-[4/3] w-full rounded-[10px] border-[1.5px] border-line bg-surface object-cover" />
      {podpis && <figcaption className="mt-2 border-t border-linesoft pt-1.5 text-sm text-muted">{podpis}</figcaption>}
    </figure>
  );
}

/* ---------------- Fiszki: słowa, które usłyszysz na miejscu ---------------- */
export function Fiszki({ pozycje }) {
  const [odkryte, setOdkryte] = useState([]);
  const przelacz = (i) => setOdkryte((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]));
  return (
    <div>
      <p className="text-muted">Poznano: {odkryte.length} / {pozycje.length}. Kliknij fiszkę, żeby sprawdzić znaczenie.</p>
      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {pozycje.map((f, i) => {
          const znane = odkryte.includes(i);
          return (
            <article key={i} className="rounded-[14px] border border-linesoft bg-card p-4 shadow-sm">
              <p lang="es" className="m-0 font-display text-xl font-bold">{f.es}</p>
              <p className="m-0 text-sm text-muted">[{f.fon}]</p>
              <p className={'mt-1 min-h-[1.6em] font-bold ' + (znane ? '' : 'text-transparent select-none')} aria-live="polite">
                {znane ? f.pl : '· · ·'}
              </p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                <button type="button" onClick={() => przelacz(i)} aria-expanded={znane}
                  className="inline-flex min-h-[40px] items-center rounded-full border-2 border-ink bg-card px-3 text-sm font-bold">
                  {znane ? 'Ukryj znaczenie' : 'Pokaż znaczenie'}
                </button>
                <button type="button" onClick={() => mow(f.es, 'es-MX')} aria-label={'Odsłuchaj normalnie: ' + f.es}
                  className="inline-flex min-h-[40px] items-center gap-1 rounded-full border-2 border-ink bg-card px-3 text-sm font-bold">
                  <Ik id="i-glosnik" className="h-4 w-4" /> Słuchaj
                </button>
                <button type="button" onClick={() => mow(f.es, 'es-MX', 0.6)} aria-label={'Odsłuchaj wolno: ' + f.es}
                  className="inline-flex min-h-[40px] items-center rounded-full border-2 border-line bg-card px-3 text-sm font-bold">
                  Wolno
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Czytanki: scenki z lektorem ---------------- */
export function Czytanki({ pozycje }) {
  const [tlumaczenia, setTlumaczenia] = useState({});
  const przelacz = (i) => setTlumaczenia((t) => ({ ...t, [i]: !t[i] }));
  return (
    <div className="grid gap-3.5 lg:grid-cols-2">
      {pozycje.map((c, i) => (
        <article key={i} className="rounded-[14px] border border-linesoft bg-card p-5 shadow-sm md:p-6">
          <h3 className="mt-0 font-display text-xl font-semibold">{c.tytul}</h3>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => mow(c.kwestie.map((k) => k.es).join(' '), c.lang || 'es-MX')}
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[10px] bg-ink px-4 font-bold text-white">
              <Ik id="i-glosnik" className="h-5 w-5" /> Czytaj całość
            </button>
            <button type="button" onClick={() => przelacz(i)} aria-expanded={!!tlumaczenia[i]}
              className="inline-flex min-h-[44px] items-center rounded-[10px] border-2 border-ink bg-card px-4 font-bold">
              {tlumaczenia[i] ? 'Ukryj tłumaczenie' : 'Pokaż tłumaczenie'}
            </button>
          </div>
          <ol className="mt-3 space-y-2.5">
            {c.kwestie.map((k, j) => (
              <li key={j} className="rounded-xl bg-surface p-3">
                <p lang="es" className="m-0 text-lg font-bold">{k.es}</p>
                {tlumaczenia[i] && <p className="m-0 text-muted">{k.pl}</p>}
                <button type="button" onClick={() => mow(k.es, c.lang || 'es-MX')} aria-label={'Odsłuchaj zdanie: ' + k.es}
                  className="mt-1 inline-flex min-h-[40px] items-center gap-1.5 rounded-full border-2 border-ink bg-card px-3 text-sm font-bold">
                  <Ik id="i-glosnik" className="h-4 w-4" /> Zdanie
                </button>
              </li>
            ))}
          </ol>
          <p className="mt-2 text-sm text-muted"><b>Trudne słowa:</b> {c.slowa.map((s) => s.es + ' [' + s.fon + '] — ' + s.pl).join('; ')}.</p>
        </article>
      ))}
    </div>
  );
}

/* ---------------- Wymowa: jak to przeczytać ---------------- */
export function Wymowa({ pozycje }) {
  return (
    <div className="grid gap-2.5 md:grid-cols-2">
      {pozycje.map((w, i) => (
        <article key={i} className="flex items-start gap-3 rounded-[14px] border border-linesoft bg-card p-4 shadow-sm">
          <span aria-hidden="true"><Ik id="i-glosnik" className="h-8 w-8 text-primary" /></span>
          <div>
            <h3 className="m-0 font-display text-lg font-semibold">{w.zasada}</h3>
            <p className="m-0">Przykład: <b lang="es">{w.przyklad}</b> <span className="text-muted">[{w.fon}]</span></p>
            <p className="m-0 text-muted">{w.pl}</p>
            <button type="button" onClick={() => mow(w.przyklad, 'es-MX')} aria-label={'Odsłuchaj przykład: ' + w.przyklad}
              className="mt-1 inline-flex min-h-[40px] items-center gap-1.5 rounded-full border-2 border-ink bg-card px-3 text-sm font-bold">
              <Ik id="i-glosnik" className="h-4 w-4" /> Odsłuchaj
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
