// Prerender SSG: renderuje trasy do statycznego HTML + generuje sitemap.xml + 404.html.
import { readFileSync, writeFileSync, mkdirSync, rmSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const BAZA = 'https://bartekdeveloper.github.io/dzien-obcych-jezykow';
const { TRASY, renderuj } = await import('./dist-server/entry-server.js');

const szablon = readFileSync('dist/index.html', 'utf8');
const dzis = new Date().toISOString().slice(0, 10);
const urls = [];

for (const t of TRASY) {
  const { html, opis } = renderuj(t.sciezka);
  let strona = szablon.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  strona = strona.replace(/<title>.*?<\/title>/, `<title>${t.tytul}</title>`);
  strona = strona.replace(/(<meta name="description" content=")[^"]*(")/, `$1${opis}$2`);
  const cel = join('dist', t.plik);
  mkdirSync(dirname(cel), { recursive: true });
  writeFileSync(cel, strona);
  const loc = t.sciezka === '/' ? BAZA + '/' : BAZA + t.sciezka + '/';
  urls.push(`  <url><loc>${loc}</loc><lastmod>${dzis}</lastmod></url>`);
  console.log('SSG: ' + cel);
}

writeFileSync('dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
console.log('SSG: dist/sitemap.xml');
copyFileSync('dist/index.html', 'dist/404.html');
rmSync('dist-server', { recursive: true, force: true });
console.log('SSG: gotowe');
