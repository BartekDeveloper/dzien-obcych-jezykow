import { useEffect, useRef, useState } from 'react';
import { useLocalStorage } from '../lib/hooks.js';
import { Button } from '../lib/ui.jsx';

function prepare(questions) {
  return questions.map(q => {
    const answers = q.options.map((text, index) => ({ text, correct: index === q.correct }));
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return { ...q, options: answers.map(a => a.text), correct: answers.findIndex(a => a.correct) };
  });
}

export function Quiz({ questions, key: storageKey, timePerQuestion = 20, title, levels }) {
  const [qs, setQs] = useState(questions);
  const [phase, setPhase] = useState('start');
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timed, setTimed] = useState(false);
  const [left, setLeft] = useState(timePerQuestion);
  const [review, setReview] = useState(false);
  const [nick, setNick] = useState('');
  const [saved, setSaved] = useState(false);
  const [record, saveRecord] = useLocalStorage('djo-' + storageKey, null);
  const [level, setLevel] = useState('sp');
  const headingRef = useRef(null);
  const lockRef = useRef(false);
  const q = qs[index];
  const score = answers.filter((a, i) => a === qs[i].correct).length;

  function answer(pick) {
    if (lockRef.current || phase !== 'question') return;
    lockRef.current = true;
    setAnswers(prev => [...prev, pick]);
    setPhase('feedback');
  }

  useEffect(() => {
    if (phase !== 'question' || !timed) return;
    const deadline = Date.now() + timePerQuestion * 1000;
    const timer = setInterval(() => {
      const seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setLeft(seconds);
      if (seconds === 0) answer(-1);
    }, 200);
    return () => clearInterval(timer);
  }, [phase, index, timed, timePerQuestion]);

  useEffect(() => {
    if (phase === 'question' || phase === 'result') headingRef.current?.focus();
  }, [phase, index]);

  function start() {
    setQs(prepare(level === 'lo' ? questions.lo : questions.sp));
    setAnswers([]); setIndex(0); setLeft(timePerQuestion); setSaved(false); setReview(false);
    lockRef.current = false;
    setPhase('question');
  }

  function next() {
    if (index === qs.length - 1) { setPhase('result'); return; }
    setIndex(index + 1); setLeft(timePerQuestion); lockRef.current = false; setPhase('question');
  }

  const currentQuestions = level === 'lo' ? questions.lo : questions.sp;

  return (
    <div className="quiz-panel rounded-2xl border border-linesoft bg-card p-5 shadow-sm sm:p-8">
      {title && <h3 className="mb-4 font-display text-xl font-bold">{title}</h3>}

      {phase === 'start' && (
        <>
          <p className="mb-4 text-muted">{currentQuestions.length} pytań. Po każdej odpowiedzi zobaczysz wyjaśnienie. Dalej przechodzisz we własnym tempie.</p>
          {levels && (
            <div className="mb-5 flex items-center p-1 bg-sanddeep rounded-lg gap-1 select-none" role="radiogroup" aria-label="Poziom trudności quizu">
              <button
                role="radio"
                aria-checked={level === 'sp'}
                onClick={() => setLevel('sp')}
                className={`px-3 py-1.5 rounded text-label-md font-bold focus:outline-none focus:ring-2 focus:ring-tertiary ${
                  level === 'sp' ? 'bg-card text-primary shadow-sm' : 'text-muted hover:text-ink'
                }`}
              >
                Szkoła Podstawowa
              </button>
              <button
                role="radio"
                aria-checked={level === 'lo'}
                onClick={() => setLevel('lo')}
                className={`px-3 py-1.5 rounded text-label-md font-bold focus:outline-none focus:ring-2 focus:ring-tertiary ${
                  level === 'lo' ? 'bg-card text-primary shadow-sm' : 'text-muted hover:text-ink'
                }`}
              >
                Szkoła Ponadpodstawowa
              </button>
            </div>
          )}
          <label className="mb-5 flex min-h-11 items-center gap-3">
            <input type="checkbox" checked={timed} onChange={e => setTimed(e.target.checked)} className="h-5 w-5 accent-primary" />
            Limit czasu: {timePerQuestion} sekund na pytanie
          </label>
          <Button variant="primary" onClick={start}>Start quizu</Button>
          {record && <p className="mt-4 text-sm text-muted">Twój rekord: {record.nick} — {record.score}/{currentQuestions.length}</p>}
        </>
      )}

      {(phase === 'question' || phase === 'feedback') && (
        <>
          <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="block text-label-sm font-bold uppercase tracking-[0.06em] text-muted">Pytanie {index + 1} z {qs.length}</span>
              <span className="text-body-md font-bold">Punkty: {score}</span>
            </div>
            {timed && (
              <div className="min-w-[140px] text-center">
                <span role="timer" aria-live="polite" aria-label="Pozostały czas" className="block rounded-xl bg-sand px-4 py-2 font-display text-headline-md font-bold tabular-nums text-primary">{left} s</span>
              </div>
            )}
          </div>
          <div className="mb-5 h-2 overflow-hidden rounded-full bg-sanddeep" aria-hidden="true">
            <div className="h-full bg-primary transition-all" style={{ width: ((index + 1) / qs.length * 100) + '%' }} />
          </div>
          <progress className="sr-only" value={index + 1} max={qs.length} aria-label="Postęp quizu" />
          <h3 ref={headingRef} tabIndex={-1} className="mb-5 font-display text-headline-md font-bold leading-snug">{q.question}</h3>
          <div role="radiogroup" aria-label="Odpowiedzi" className="grid gap-3 sm:grid-cols-2">
            {q.options.map((text, i) => (
              <button
                key={text}
                type="button"
                disabled={phase === 'feedback'}
                onClick={() => answer(i)}
                className={`flex min-h-14 items-center gap-3 rounded-xl border-2 p-4 text-left ${
                  phase === 'feedback' && i === q.correct
                    ? 'border-secondary bg-[#e8f3ec] text-ink'
                    : phase === 'feedback' && i === answers[index]
                    ? 'border-primary bg-[#fff0ed] text-ink'
                    : 'border-line bg-surface text-ink hover:border-primary'
                }`}
              >
                <span aria-hidden="true" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white font-bold">{'ABCD'[i]}</span>
                <span>
                  {text}
                  {phase === 'feedback' && i === q.correct && <small className="block font-bold text-secondary">Poprawna odpowiedź</small>}
                </span>
              </button>
            ))}
          </div>
          {phase === 'feedback' && (
            <div className="mt-5 rounded-xl bg-sand p-5">
              <p role="status" className="font-bold">
                {answers[index] === q.correct ? 'Dobrze!' : answers[index] === -1 ? 'Czas minął.' : 'Nie tym razem.'}
                Poprawna odpowiedź: {q.options[q.correct]}.
              </p>
              <p className="mt-2 text-muted">{q.explanation}</p>
              <Button className="mt-4" variant="primary" onClick={next}>
                {index === qs.length - 1 ? 'Zobacz wynik' : 'Następne pytanie'}
              </Button>
            </div>
          )}
        </>
      )}

      {phase === 'result' && (
        <>
          <h3 ref={headingRef} tabIndex={-1} className="font-display text-2xl font-bold">Wynik: {score} / {qs.length}</h3>
          <p className="mt-3 text-muted">{score === qs.length ? 'Świetnie! Wszystkie odpowiedzi są poprawne.' : 'Sprawdź odpowiedzi i spróbuj ponownie, kiedy zechcesz.'}</p>
          <div className="my-5 flex flex-wrap gap-3">
            <Button variant="primary" onClick={start}>Zagraj ponownie</Button>
            <Button aria-expanded={review} onClick={() => setReview(!review)}>
              {review ? 'Ukryj odpowiedzi' : 'Przejrzyj odpowiedzi'}
            </Button>
          </div>
          {(!record || score > record.score) && (
            <form className="my-5 flex flex-wrap items-end gap-3" onSubmit={e => { e.preventDefault(); saveRecord({ nick: nick.trim() || 'Gość', score }); setSaved(true); }}>
              <label className="min-w-0">Imię lub nazwa zespołu<input maxLength={24} value={nick} onChange={e => setNick(e.target.value)} className="mt-2 block w-full rounded-lg border border-line p-3" /></label>
              <Button type="submit" disabled={saved}>Zapisz wynik</Button>
            </form>
          )}
          {saved && <p role="status">Wynik zapisany.</p>}
          {review && (
            <ol className="mt-5 space-y-4">
              {qs.map((item, i) => (
                <li key={item.question} className="rounded-xl bg-surface p-4">
                  <h4 className="font-bold">{i + 1}. {item.question}</h4>
                  <p className="mt-2">Twoja odpowiedź: {answers[i] < 0 ? 'Brak odpowiedzi' : item.options[answers[i]]}</p>
                  <p>Poprawna: {item.options[item.correct]}</p>
                  <p className="mt-2 text-muted">{item.explanation}</p>
                </li>
              ))}
            </ol>
          )}
        </>
      )}
    </div>
  );
}