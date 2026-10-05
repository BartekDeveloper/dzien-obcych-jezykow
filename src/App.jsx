import { useCallback, useEffect, useRef, useState } from 'react';
import { Naglowek, Stopka } from './components/Chrome.jsx';
import StronaStart from './pages/Start.jsx';
import Pawilon from './pages/Pawilon.jsx';
import GryZabawy from './pages/GryZabawy.jsx';

const TYTULY = {
  '/': 'Dzień Języków Obcych — Meksyk i Hiszpania',
  '/hiszpania': 'Dzień Języków — Pawilon Hiszpanii',
  '/meksyk': 'Dzień Języków — Pawilon Meksyku',
  '/gry': 'Dzień Języków — Gry i zabawy',
};

export default function App({ sciezka }) {
  const [qr, setQr] = useState(false);
  const [link, setLink] = useState('');
  const [gora, setGora] = useState(false);
  const [skopiowano, setSkopiowano] = useState(false);
  useEffect(() => {
    const fn = () => setGora(scrollY > 900);
    addEventListener('scroll', fn, { passive: true });
    return () => removeEventListener('scroll', fn);
  }, []);
  const dlgRef = useRef(null);

  useEffect(() => {
    document.title = TYTULY[sciezka] || TYTULY['/'];
  }, [sciezka]);

  const otworzQr = useCallback(() => {
    setLink(location.href);
    setSkopiowano(false);
    setQr(true);
  }, []);
  useEffect(() => {
    if (qr) dlgRef.current?.showModal();
    else if (dlgRef.current?.open) dlgRef.current.close();
  }, [qr]);

  const kopiuj = useCallback(async () => {
    try { await navigator.clipboard.writeText(link); setSkopiowano(true); }
    catch { /* ręcznie */ }
  }, [link]);

  return (
    <>
      <a className="skip-link" href="#tresc">Przejdź do treści</a>
      <Naglowek sciezka={sciezka} onUdostepnij={otworzQr} />
      <main id="tresc">
        {sciezka === '/' && <StronaStart />}
        {(sciezka === '/hiszpania' || sciezka === '/meksyk') && <Pawilon id={sciezka === '/hiszpania' ? 'es' : 'mx'} />}
        {sciezka === '/gry' && <GryZabawy />}
      </main>
      <Stopka />
      {gora && (
        <button type="button" onClick={() => scrollTo({ top: 0 })} aria-label="Wróć na górę strony"
          className="fixed bottom-4 right-4 z-[70] inline-flex min-h-[48px] items-center gap-2 rounded-full bg-ink px-5 font-bold text-white shadow-xl">
          W górę
        </button>
      )}
      {qr && (
        <dialog ref={dlgRef} aria-labelledby="ud-t" onClose={() => setQr(false)} className="w-[min(92vw,430px)] rounded-2xl border-2 border-ink bg-surface p-6 backdrop:bg-black/55">
          <h3 id="ud-t" className="font-display text-xl font-bold">Wyślij stronę klasie</h3>
          <p className="text-muted">Pokaż kod na projektorze — uczniowie skanują go telefonem.</p>
          <img className="h-[200px] w-[200px] rounded-xl border bg-white" width="200" height="200"
            src={'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(link)}
            alt="Kod QR do tej strony" />
          <p><label htmlFor="ud-link">Link do strony:</label><br />
            <input id="ud-link" readOnly value={link} className="mt-1 w-full rounded-[10px] border-2 border-line bg-card p-2.5" /></p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={kopiuj} className="inline-flex min-h-[44px] items-center rounded-[10px] bg-primary px-5 font-bold text-white">
              {skopiowano ? 'Skopiowano' : 'Kopiuj link'}
            </button>
            <form method="dialog"><button className="inline-flex min-h-[44px] items-center rounded-[10px] border-2 border-ink bg-card px-5 font-bold">Zamknij (Esc)</button></form>
          </div>
        </dialog>
      )}
    </>
  );
}
