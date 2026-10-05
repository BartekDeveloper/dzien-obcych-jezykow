import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const BAZA = '/dzien-obcych-jezykow';
let sciezka = location.pathname;
if (sciezka.startsWith(BAZA)) sciezka = sciezka.slice(BAZA.length);
sciezka = sciezka.replace(/\/$/, '') || '/';
if (!['/', '/hiszpania', '/meksyk', '/gry'].includes(sciezka)) sciezka = '/';

hydrateRoot(document.getElementById('root'), <App sciezka={sciezka} />);
