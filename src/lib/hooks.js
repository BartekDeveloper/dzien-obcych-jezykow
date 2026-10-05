import { useCallback, useEffect, useRef, useState } from 'react';

export function useLocalStorage(klucz, start) {
  const [wartosc, setWartosc] = useState(start);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(klucz);
      if (raw != null) setWartosc(JSON.parse(raw));
    } catch { /* brak */ }
  }, [klucz]);
  const ustaw = useCallback((nowa) => {
    setWartosc(nowa);
    try { localStorage.setItem(klucz, JSON.stringify(nowa)); } catch { /* brak */ }
  }, [klucz]);
  return [wartosc, ustaw];
}

export function mow(tekst, lang = 'es-ES', tempo = 0.88) {
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(tekst);
    u.lang = lang;
    u.rate = tempo;
    const glos = speechSynthesis.getVoices().find((v) => v.lang && v.lang.startsWith(lang.slice(0, 2)));
    if (glos) u.voice = glos;
    speechSynthesis.speak(u);
  } catch { /* brak syntezatora */ }
}

export function useKonfetti() {
  return useCallback(() => {
    if (document.documentElement.classList.contains('bez-ruchu')) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = document.createElement('canvas');
    c.setAttribute('aria-hidden', 'true');
    c.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:99';
    document.body.appendChild(c);
    const x = c.getContext('2d');
    c.width = innerWidth; c.height = innerHeight;
    const kolory = ['#9e1b1b', '#c28704', '#206b43', '#003d63'];
    const cz = Array.from({ length: 120 }, () => ({
      x: innerWidth / 2 + (Math.random() - 0.5) * 320, y: innerHeight * 0.3,
      vx: (Math.random() - 0.5) * 12, vy: Math.random() * -11 - 3,
      s: Math.random() * 8 + 4, k: kolory[Math.floor(Math.random() * kolory.length)], r: Math.random() * Math.PI
    }));
    let f = 0;
    (function anim() {
      x.clearRect(0, 0, c.width, c.height);
      for (const p of cz) {
        p.x += p.vx; p.y += p.vy; p.vy += 0.35; p.r += 0.1;
        x.save(); x.translate(p.x, p.y); x.rotate(p.r);
        x.fillStyle = p.k; x.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6); x.restore();
      }
      if (++f < 110) requestAnimationFrame(anim); else c.remove();
    })();
  }, []);
}

/* Odtwarza interwał; zwraca [zostalo, start, stop]. SSR-bezpieczne. */
export function useTimer(sekundy, onKoniec) {
  const [zostalo, setZostalo] = useState(sekundy);
  const ref = useRef(null);
  const refKoniec = useRef(onKoniec);
  refKoniec.current = onKoniec;
  const stop = useCallback(() => { clearInterval(ref.current); }, []);
  const start = useCallback(() => {
    clearInterval(ref.current);
    setZostalo(sekundy);
    ref.current = setInterval(() => {
      setZostalo((z) => {
        if (z <= 1) { clearInterval(ref.current); refKoniec.current?.(); return 0; }
        return z - 1;
      });
    }, 1000);
  }, [sekundy]);
  useEffect(() => () => clearInterval(ref.current), []);
  return [zostalo, start, stop];
}
