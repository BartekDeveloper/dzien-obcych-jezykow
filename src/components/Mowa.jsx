import { useEffect, useState } from 'react';
import { useSpeech } from '../lib/hooks.js';

export function Audio({ text, lang = 'es-MX', label = 'Odsłuchaj', className = '' }) {
  const { play, playing, error, stop } = useSpeech();
  return (
    <div className={`speech-actions ${className}`}>
      <button type="button" onClick={() => play(text, lang, 0.9)} aria-label={`${label}: ${text}`}>
        {label}
      </button>
      <button type="button" onClick={() => play(text, lang, 0.6)} aria-label={`Wolniej: ${text}`}>
        Wolniej
      </button>
      {playing && <button type="button" onClick={stop}>Zatrzymaj</button>}
      {error && <p role="status" className="mt-2 text-sm text-primary">{error}</p>}
    </div>
  );
}