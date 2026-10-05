/* Wspólne: nawigacja, przełączniki dostępności, QR, reveal, liczniki, TTS, konfetti, quiz z powtórką. */
export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];

export const bezRuchu = () =>
  document.documentElement.classList.contains('bez-ruchu') ||
  matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Ikona ze sprite'u public/icons.svg. Zawsze z widoczną etykietą tekstową obok. */
export const ik = (id, duza = false) =>
  '<svg class="' + (duza ? 'ik-duza' : 'ik') + '" aria-hidden="true" focusable="false"><use href="icons.svg#' + id + '"></use></svg>';

export function mow(text, lang = 'es-ES') {
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 0.88;
    const glos = speechSynthesis.getVoices().find((v) => v.lang && v.lang.startsWith(lang.slice(0, 2)));
    if (glos) u.voice = glos;
    speechSynthesis.speak(u);
  } catch { /* brak syntezatora */ }
}

export function konfetti() {
  if (bezRuchu()) return;
  const c = document.createElement('canvas');
  c.setAttribute('aria-hidden', 'true');
  c.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:99';
  document.body.appendChild(c);
  const x = c.getContext('2d');
  c.width = innerWidth; c.height = innerHeight;
  const kolory = ['#8e1616', '#d9a404', '#0a5c36', '#8f1d5a', '#1d4e89'];
  const cz = Array.from({ length: 130 }, () => ({
    x: innerWidth / 2 + (Math.random() - 0.5) * 320,
    y: innerHeight * 0.32,
    vx: (Math.random() - 0.5) * 12, vy: Math.random() * -11 - 3,
    s: Math.random() * 8 + 4, k: kolory[Math.floor(Math.random() * kolory.length)],
    r: Math.random() * Math.PI
  }));
  let f = 0;
  (function anim() {
    x.clearRect(0, 0, c.width, c.height);
    for (const p of cz) {
      p.x += p.vx; p.y += p.vy; p.vy += 0.35; p.r += 0.1;
      x.save(); x.translate(p.x, p.y); x.rotate(p.r);
      x.fillStyle = p.k; x.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
      x.restore();
    }
    if (++f < 110) requestAnimationFrame(anim); else c.remove();
  })();
}

/* Generyczny silnik quizu: fieldset/legend, timer, pasek, powtórka z wyjaśnieniami, rekord. */
export function quiz({ pudelko, pytania, klucz, czasNaPytanie = 20 }) {
  let i = 0, punkty = 0, zegar = null, zostalo = czasNaPytanie, zamkniete = false;
  const odp = [];
  const box = $(pudelko);
  const startBtn = $(pudelko + '-start');
  const live = $(pudelko + '-live');
  const bestEl = $(pudelko + '-rekord');

  const pokazRekord = () => {
    const r = JSON.parse(localStorage.getItem('djo-' + klucz) || 'null');
    if (bestEl) bestEl.textContent = r
      ? 'Rekord sali: ' + r.nick + ' — ' + r.punkty + '/' + pytania.length
      : 'Rekord sali: nikt jeszcze nie grał. Bądź pierwszy!';
  };
  const oglos = (t) => { if (live) live.textContent = t; };

  function pytanie() {
    zamkniete = false; zostalo = czasNaPytanie;
    const q = pytania[i];
    box.innerHTML =
      '<div class="meta"><span>Pytanie ' + (i + 1) + ' z ' + pytania.length + '</span>' +
      '<span class="timer" role="timer">' + czasNaPytanie + ' s</span>' +
      '<span><b>Punkty: ' + punkty + '</b></span></div>' +
      '<div class="pasek" aria-hidden="true"><i style="width:' + Math.round((i / pytania.length) * 100) + '%"></i></div>' +
      '<fieldset style="border:0;margin:0;padding:0"><legend><h3>' + q.p + '</h3></legend>' +
      '<ul class="opcje">' + q.o.map((o, k) =>
        '<li><button type="button" data-k="' + k + '"><b>' + 'ABCD'[k] + '.</b> ' + o + '</button></li>'
      ).join('') + '</ul></fieldset>';
    oglos('Pytanie ' + (i + 1) + ' z ' + pytania.length + ': ' + q.p);
    const t = $('.timer', box);
    clearInterval(zegar);
    let ostatniKomunikat = czasNaPytanie;
    zegar = setInterval(() => {
      zostalo--;
      if (t) t.textContent = zostalo + ' s';
      if (ostatniKomunikat - zostalo >= 10 && zostalo > 0) {
        ostatniKomunikat = zostalo;
        oglos('Zostało ' + zostalo + ' sekund.');
      }
      if (zostalo <= 0) { clearInterval(zegar); zablokuj(-1); }
    }, 1000);
    $('.opcje', box).addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b || zamkniete) return;
      zablokuj(+b.dataset.k);
    });
  }

  function zablokuj(wybor) {
    zamkniete = true; clearInterval(zegar);
    const q = pytania[i];
    odp.push({ p: q.p, wybor, poprawna: q.c, odp: q.o, w: q.w || '' });
    $$('.opcje button', box).forEach((b, k) => {
      b.disabled = true;
      if (k === q.c) b.classList.add('dobra');
      else if (k === wybor) b.classList.add('zla');
    });
    if (wybor === q.c) { punkty++; oglos('Dobrze! Masz ' + punkty + ' punktów.'); }
    else oglos('Nie tym razem. Poprawna odpowiedź: ' + q.o[q.c] + '.');
    setTimeout(() => { i++; i < pytania.length ? pytanie() : koniec(); }, 1200);
  }

  function koniec() {
    const poprz = JSON.parse(localStorage.getItem('djo-' + klucz) || 'null');
    const rekord = !poprz || punkty > poprz.punkty;
    const zle = odp.filter((o) => o.wybor !== o.poprawna).length;
    box.innerHTML =
      '<h3>Wynik: ' + punkty + ' / ' + pytania.length + '</h3>' +
      '<p>' + (punkty >= pytania.length * 0.8 ? 'Poziom mistrzowski — ¡increíble!'
        : punkty >= pytania.length * 0.5 ? 'Dobry wynik — ¡muy bien! Sprawdź powtórkę poniżej.'
        : 'Wróć do rozdziałów powyżej i spróbuj ponownie — ¡ánimo!') + '</p>' +
      (rekord && punkty > 0
        ? '<p><label for="' + klucz + '-nick">Nowy rekord! Podpisz drużynę: </label>' +
          '<input class="nick" id="' + klucz + '-nick" maxlength="24" value="Drużyna A"> ' +
          '<button type="button" class="btn accent" id="' + klucz + '-zapisz">Zapisz rekord</button></p>' : '') +
      '<p style="display:flex;gap:8px;flex-wrap:wrap">' +
      '<button type="button" class="btn accent" id="' + klucz + '-retry">Zagraj ponownie</button>' +
      '<button type="button" class="btn" id="' + klucz + '-powtorka" aria-expanded="false">Zobacz powtórkę (' + zle + ' do poprawy)</button></p>' +
      '<div id="' + klucz + '-powt-lista" hidden></div>';
    oglos('Koniec quizu. Wynik: ' + punkty + ' na ' + pytania.length + '.');
    if (punkty >= pytania.length * 0.8) konfetti();
    $('#' + klucz + '-retry').addEventListener('click', () => { i = 0; punkty = 0; odp.length = 0; pytanie(); });
    const zapisz = $('#' + klucz + '-zapisz');
    if (zapisz) zapisz.addEventListener('click', () => {
      const nick = ($('#' + klucz + '-nick').value || 'Drużyna').slice(0, 24);
      localStorage.setItem('djo-' + klucz, JSON.stringify({ nick, punkty }));
      pokazRekord(); zapisz.disabled = true; zapisz.textContent = 'Zapisano';
    });
    const prz = $('#' + klucz + '-powtorka');
    prz.addEventListener('click', () => {
      const lista = $('#' + klucz + '-powt-lista');
      const otwarta = lista.hidden;
      lista.hidden = !otwarta;
      prz.setAttribute('aria-expanded', String(otwarta));
      prz.textContent = otwarta ? 'Ukryj powtórkę' : 'Zobacz powtórkę (' + zle + ' do poprawy)';
      if (otwarta) {
        lista.innerHTML = '<ol>' + odp.map((o, k) => {
          const traf = o.wybor === o.poprawna;
          return '<li><b>' + o.p + '</b><br>' +
            '<span>' + (traf ? 'Twoja odpowiedź (poprawna): ' : 'Twoja odpowiedź: ') + (o.wybor >= 0 ? o.odp[o.wybor] : 'brak (czas minął)') + '</span><br>' +
            (traf ? '' : '<span>Poprawna odpowiedź: ' + o.odp[o.poprawna] + '</span><br>') +
            (o.w ? '<span>Wyjaśnienie: ' + o.w + '</span>' : '') + '</li>';
        }).join('') + '</ol>';
      }
    });
  }

  pokazRekord();
  if (startBtn) startBtn.addEventListener('click', () => { i = 0; punkty = 0; odp.length = 0; pytanie(); });
}

/* Wspólny start dla każdej strony: nav, toggles, dialog QR, reveal, liczniki. */
export function startWspolny() {
  document.documentElement.classList.add('js');
  const sciezka = location.pathname.split('/').pop() || 'index.html';
  $$('nav.mainnav a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === sciezka || (sciezka === '' && href === 'index.html')) a.setAttribute('aria-current', 'page');
  });

  /* Hamburger: progressive enhancement — bez JS nawigacja zawsze widoczna. */
  const menuBtn = $('#menu-btn');
  const nav = $('#nawigacja');
  if (menuBtn && nav) {
    menuBtn.hidden = false;
    const zamknij = (wrocFokus) => {
      nav.classList.remove('otwarta');
      menuBtn.setAttribute('aria-expanded', 'false');
      if (wrocFokus) menuBtn.focus();
    };
    menuBtn.addEventListener('click', () => {
      const otwarte = nav.classList.toggle('otwarta');
      menuBtn.setAttribute('aria-expanded', String(otwarte));
      if (otwarte) {
        const pierwszy = $('a', nav);
        if (pierwszy) pierwszy.focus();
      }
    });
    nav.addEventListener('click', (e) => {
      if (e.target.closest('a')) zamknij(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('otwarta')) zamknij(true);
    });
  }

  $('#w-ruch')?.addEventListener('click', (e) => {
    const wyl = document.documentElement.classList.toggle('bez-ruchu');
    e.currentTarget.setAttribute('aria-pressed', String(wyl));
  });
  $('#w-projektor')?.addEventListener('click', (e) => {
    const wyl = document.documentElement.classList.toggle('projektor');
    e.currentTarget.setAttribute('aria-pressed', String(wyl));
  });

  const dlg = $('#udostepnij');
  $('#w-udostepnij')?.addEventListener('click', () => {
    if (!dlg) return;
    const url = location.href;
    $('#ud-link').value = url;
    const qr = $('#ud-qr');
    qr.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(url);
    qr.alt = 'Kod QR prowadzący do tej strony';
    dlg.showModal();
  });
  $('#ud-kopiuj')?.addEventListener('click', async (e) => {
    try { await navigator.clipboard.writeText($('#ud-link').value); e.currentTarget.textContent = 'Skopiowano'; }
    catch { $('#ud-link').select(); }
  });
  $('#ud-system')?.addEventListener('click', async () => {
    if (navigator.share) await navigator.share({ title: document.title, url: location.href }).catch(() => {});
    else $('#ud-link').select();
  });

  const gore = $('#do-gory');
  if (gore) {
    addEventListener('scroll', () => {
      gore.hidden = scrollY < 900;
    }, { passive: true });
    gore.addEventListener('click', () => scrollTo({ top: 0, behavior: bezRuchu() ? 'auto' : 'smooth' }));
  }

  const io = new IntersectionObserver((wpisy) => {
    for (const w of wpisy) if (w.isIntersecting) { w.target.classList.add('widoczna'); io.unobserve(w.target); }
  }, { threshold: 0.1 });
  $$('.reveal').forEach((el) => io.observe(el));

  const cio = new IntersectionObserver((wpisy) => {
    for (const w of wpisy) {
      if (!w.isIntersecting) continue;
      cio.unobserve(w.target);
      const cel = +w.target.dataset.licznik || 0;
      if (bezRuchu()) { w.target.textContent = cel; continue; }
      let s = 0;
      const krok = () => {
        s += Math.max(1, Math.ceil(cel / 28));
        if (s >= cel) { w.target.textContent = cel; return; }
        w.target.textContent = s;
        requestAnimationFrame(krok);
      };
      krok();
    }
  }, { threshold: 0.5 });
  $$('[data-licznik]').forEach((el) => cio.observe(el));
}
