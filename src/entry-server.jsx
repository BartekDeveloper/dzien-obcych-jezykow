import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export const TRASY = [
  { sciezka: '/', plik: 'index.html', tytul: 'Dzień Języków Obcych — Meksyk i Hiszpania' },
  { sciezka: '/hiszpania', plik: 'hiszpania/index.html', tytul: 'Dzień Języków — Pawilon Hiszpanii' },
  { sciezka: '/meksyk', plik: 'meksyk/index.html', tytul: 'Dzień Języków — Pawilon Meksyku' },
  { sciezka: '/gry', plik: 'gry/index.html', tytul: 'Dzień Języków — Gry i zabawy' },
];

const OPISY = {
  '/': 'Kuratorska platforma edukacyjna: Hiszpania i Meksyk. Pawilony wiedzy, zwroty z lektorem, arena gier i quizów. Po polsku.',
  '/hiszpania': 'Pawilon Hiszpanii: geografia, historia, święta, kuchnia, muzyka, zabytki, język i zwroty z lektorem. Quiz z 12 pytaniami.',
  '/meksyk': 'Pawilon Meksyku: geografia, historia, święta, kuchnia, muzyka, zabytki, język i zwroty z lektorem. Quiz z 12 pytaniami.',
  '/gry': 'Gry i zabawy: pojedynek Hiszpania kontra Meksyk, zagadki językowe, memory, kalambury drużynowe, trabalenguas.',
};

export function renderuj(sciezka) {
  return { html: renderToString(<App sciezka={sciezka} />), opis: OPISY[sciezka] };
}
