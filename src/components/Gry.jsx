import { useEffect, useRef, useState } from 'react';
import { asset, Button } from '../lib/ui.jsx';
import { Audio } from './Mowa.jsx';
export { Quiz } from './Quiz.jsx';

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function Memory({ pairs }) {
  const makeCards = () => pairs.flatMap(p => [
    { id: `${p.es}-es`, text: p.es, lang: 'es', pairId: p.es },
    { id: `${p.es}-pl`, text: p.pl, lang: 'pl', pairId: p.es },
  ]);
  const [cards, setCards] = useState(makeCards);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [tries, setTries] = useState(0);
  const [message, setMessage] = useState('Wybierz hiszpańskie słowo i jego polskie znaczenie.');
  const timerRef = useRef(null);
  const busyRef = useRef(false);

  useEffect(() => { setCards(shuffle(makeCards())); return () => clearTimeout(timerRef.current); }, []);

  function reset() {
    clearTimeout(timerRef.current); busyRef.current = false;
    setCards(shuffle(makeCards())); setSelected([]); setMatched([]); setTries(0);
    setMessage('Nowe rozdanie. Wybierz dwie karty.');
  }

  function choose(index) {
    if (busyRef.current || matched.includes(cards[index].pairId) || selected.includes(index)) return;
    if (!selected.length) { setSelected([index]); return; }
    const first = cards[selected[0]];
    const nextTries = tries + 1;
    setTries(nextTries);
    if (first.pairId === cards[index].pairId && first.lang !== cards[index].lang) {
      const next = [...matched, first.pairId];
      setMatched(next); setSelected([]);
      setMessage(`Dobrze: ${first.pairId}. Dopasowano ${next.length} z ${pairs.length} par.`);
      if (next.length === pairs.length) {
        setMessage(`Gotowe! Wszystkie ${pairs.length} par w ${nextTries} próbach.`);
        try {
          const previous = Number(localStorage.getItem('djo-memory') || Infinity);
          if (nextTries < previous) localStorage.setItem('djo-memory', String(nextTries));
          window.dispatchEvent(new Event('djo-records'));
        } catch { }
      }
    } else {
      busyRef.current = true; setSelected([...selected, index]); setMessage('Te słowa nie tworzą pary. Spróbuj jeszcze raz.');
      timerRef.current = setTimeout(() => { setSelected([]); busyRef.current = false; }, 650);
    }
  }

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p>Próby: {tries} · Pary: {matched.length}/{pairs.length}</p>
        <Button onClick={reset}>Nowe rozdanie</Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3" role="region" aria-label="Dopasowanie słów">
        {cards.map((card, index) => {
          const done = matched.includes(card.pairId);
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => choose(index)}
              aria-pressed={selected.includes(index)}
              aria-disabled={done}
              className={`flex min-h-28 min-w-0 flex-col items-center justify-center rounded-xl border-2 p-3 text-center ${
                done ? 'border-secondary bg-[#e8f3ec] text-ink'
                : selected.includes(index) ? 'border-ink bg-ink text-white'
                : 'border-line bg-card text-ink hover:border-primary'
              }`}
            >
              <span lang={card.lang} className="font-semibold">{card.text}</span>
              <small className="mt-1 text-sm">{done ? 'Dopasowane' : card.lang === 'es' ? 'Po hiszpańsku' : 'Po polsku'}</small>
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-muted" role="status">{message}</p>
    </div>
  );
}

export function Flashcards({ items }) {
  return (
    <div>
      <p className="mb-5 text-muted">Poniżej znajdziesz wszystkie słowa z dopasowania i przydatne zwroty. Zapis wymowy jest przybliżony — najlepiej posłuchać nagrania.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(f => (
          <article key={f.es} className="rounded-xl border border-linesoft bg-card p-5">
            <h3 lang="es" className="font-display text-lg font-bold">{f.es}</h3>
            <p className="mt-2 font-semibold">{f.pl}</p>
            <p className="mt-1 text-sm text-muted">Wymowa: {f.fon}</p>
            <Audio text={f.es} lang="es-MX" />
          </article>
        ))}
      </div>
    </div>
  );
}

export function Dialogues({ items }) {
  return (
    <div className="grid items-start gap-5 lg:grid-cols-2">
      {items.map(c => (
        <article key={c.title} className="rounded-xl border border-linesoft bg-card p-5 sm:p-6">
          <h3 className="font-display text-xl font-bold">{c.title}</h3>
          <p className="mt-2 text-sm text-muted">Przykładowa rozmowa</p>
          <Audio text={c.lines.map(l => l.es).join(' ')} lang={c.lang} label="Posłuchaj rozmowy" />
          <ol className="mt-5 space-y-3">
            {c.lines.map((line, i) => (
              <li key={i} className="rounded-lg bg-surface p-4">
                <p lang="es" className="font-semibold">{line.es}</p>
                <p className="mt-1 text-muted">{line.pl}</p>
                <Audio text={line.es} lang={c.lang} />
              </li>
            ))}
          </ol>
        </article>
      ))}
    </div>
  );
}

export function Pronunciation({ items }) {
  return (
    <div className="grid items-start gap-4 md:grid-cols-2">
      {items.map(w => (
        <article key={w.rule} className="rounded-xl border border-linesoft bg-card p-5">
          <h3 className="font-display text-lg font-bold">{w.rule}</h3>
          <p className="mt-3 text-muted">{w.explanation}</p>
          <p className="mt-2"><b lang="es">{w.example}</b> — {w.ipa}</p>
          <Audio text={w.example} lang={w.lang || 'es-MX'} />
          {w.compare && <Audio text={w.example} lang="es-ES" label="Wymowa z Hiszpanii" />}
        </article>
      ))}
    </div>
  );
}

export function TongueTwisters({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map(t => (
        <article key={t.text} className="rounded-xl border border-linesoft bg-card p-5">
          <p className="text-sm text-muted">{t.variant} · {t.level}</p>
          <h3 lang="es" className="mt-3 font-display text-lg font-bold">{t.text}</h3>
          <p className="mt-3 text-muted">{t.meaning}</p>
          <Audio text={t.text} lang={t.lang} />
        </article>
      ))}
    </div>
  );
}

const CATEGORIES = [
  ['djo-hiszpania', 'Hiszpania'],
  ['djo-meksyk', 'Meksyk'],
  ['djo-mieszany', 'Zgadnij kraj'],
  ['djo-zagadki', 'Zagadki'],
];

export function Records() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const refresh = () => {
      const next = [];
      for (const [key, name] of CATEGORIES) {
        try { const r = JSON.parse(localStorage.getItem(key)); if (r && Number.isFinite(r.score)) next.push({ name, nick: r.nick, score: r.score }); } catch { }
      }
      try { const m = localStorage.getItem('djo-memory'); if (m) next.push({ name: 'Pamięć', nick: 'Najlepszy wynik', score: `${m} prób` }); } catch { }
      setRows(next);
    };
    refresh(); window.addEventListener('djo-records', refresh); window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('djo-records', refresh); window.removeEventListener('storage', refresh); };
  }, []);

  function reset() {
    if (!confirm('Usunąć zapisane wyniki?')) return;
    try { [...CATEGORIES.map(([k]) => k), 'djo-memory'].forEach(k => localStorage.removeItem(k)); } catch { }
    window.dispatchEvent(new Event('djo-records'));
  }

  return (
    <div className="rounded-xl border border-linesoft bg-card p-5">
      <p className="mb-4 text-sm text-muted">Wyniki zapisują się na tym urządzeniu.</p>
      {rows.length ? (
        <>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[360px] text-left">
              <caption className="sr-only">Najlepsze zapisane wyniki</caption>
              <thead>
                <tr><th scope="col" className="p-3">Gra</th><th scope="col" className="p-3">Imię / zespół</th><th scope="col" className="p-3">Wynik</th></tr>
              </thead>
              <tbody>
                {rows.map(row => (
                  <tr key={row.name} className="border-t border-linesoft">
                    <td className="p-3">{row.name}</td>
                    <td className="p-3">{row.nick}</td>
                    <td className="p-3 font-bold">{row.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button className="mt-4" onClick={reset}>Usuń wyniki</Button>
        </>
      ) : (
        <p>Jeszcze nie ma wyników. Rozwiąż quiz lub dopasuj wszystkie słowa.</p>
      )}
    </div>
  );
}

export function Photo({ file, title, caption }) {
  return (
    <figure>
      <img src={asset(file)} alt={title} width="960" height="720" loading="lazy" className="aspect-[4/3] w-full rounded-xl bg-surface object-cover" />
      {caption && <figcaption className="mt-2 text-sm leading-relaxed text-muted">{caption}</figcaption>}
    </figure>
  );
}