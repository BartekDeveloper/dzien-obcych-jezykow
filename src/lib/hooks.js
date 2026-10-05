import { useCallback, useEffect, useState } from 'react';

export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(initial);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw !== null) setValue(JSON.parse(raw));
    } catch { }
  }, [key]);
  const save = useCallback((next) => {
    setValue(next);
    try {
      localStorage.setItem(key, JSON.stringify(next));
      window.dispatchEvent(new Event('djo-records'));
    } catch { }
  }, [key]);
  return [value, save];
}

let utterance = null;
export function stopSpeech() {
  if (typeof window === 'undefined') return;
  window.speechSynthesis?.cancel();
  window.dispatchEvent(new Event('djo-speech-stop'));
  utterance = null;
}

export function speak(text, lang = 'es-MX', rate = 0.9, onEnd, onError) {
  if (typeof window === 'undefined' || !window.speechSynthesis || !window.SpeechSynthesisUtterance) return false;
  stopSpeech();
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = rate;
    const voices = speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.replace('_', '-').toLowerCase() === lang.toLowerCase()) || voices.find(v => v.lang.startsWith(lang.slice(0, 2)));
    if (voice) u.voice = voice;
    u.onend = () => { if (utterance === u) { utterance = null; onEnd?.(); } };
    u.onerror = e => { if (e.error !== 'canceled' && e.error !== 'interrupted') onError?.(); };
    utterance = u;
    speechSynthesis.speak(u);
    return true;
  } catch { return false; }
}

export function useSpeech() {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const stop = () => setPlaying(false);
    window.addEventListener('djo-speech-stop', stop);
    return () => window.removeEventListener('djo-speech-stop', stop);
  }, []);
  const play = useCallback((text, lang = 'es-MX', rate = 0.9) => {
    setError('');
    const result = speak(text, lang, rate, () => setPlaying(false), () => {
      setPlaying(false);
      setError('Nie udało się odtworzyć głosu. Spróbuj ponownie.');
    });
    setPlaying(result);
    if (!result) setError('Ta przeglądarka nie udostępnia lektora. Skorzystaj z zapisu wymowy.');
  }, []);
  return { play, playing, error, stop: stopSpeech };
}