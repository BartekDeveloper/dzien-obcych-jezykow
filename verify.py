# -*- coding: utf-8 -*-
import io, json, os, re, sys
sys.stdout.reconfigure(encoding='utf-8')
errs = []

sprite = io.open('public/icons.svg', encoding='utf-8').read()
ids = set(re.findall(r'<symbol id="([^"]+)"', sprite))
print('ikon w spricie:', len(ids))
for f in ['src/data/hiszpania.json', 'src/data/meksyk.json', 'src/data/gry.json']:
    d = json.load(io.open(f, encoding='utf-8'))
    def walk(o):
        if isinstance(o, dict):
            if 'icon' in o and o['icon'] not in ids:
                errs.append('%s: brak ikony %s' % (f, o['icon']))
            if 'plik' in o and not os.path.exists('public/' + o['plik']):
                errs.append('%s: brak pliku %s' % (f, o['plik']))
            for v in o.values():
                walk(v)
        elif isinstance(o, list):
            for v in o:
                walk(v)
    walk(d)

def need(f, lista):
    s = io.open(f, encoding='utf-8').read()
    for i in lista:
        if ('id="%s"' % i) not in s:
            errs.append('%s: brak id %s' % (f, i))

wsp = ['w-ruch', 'w-projektor', 'w-udostepnij', 'udostepnij', 'ud-qr', 'ud-link',
       'ud-kopiuj', 'ud-system', 'menu-btn', 'nawigacja', 'do-gory']
for f in ['index.html', 'hiszpania.html', 'meksyk.html', 'gry.html']:
    need(f, wsp)
need('hiszpania.html', ['p-spis', 'p-quiz-naglowek'])
need('meksyk.html', ['p-spis', 'p-quiz-naglowek'])
need('gry.html', ['g-historia'])

# zero emoji w źródłach (poza ✓)
EMOJI = re.compile('[\U0001F000-\U0001FAFF\u2600-\u26FF\u2700-\u27BF\u2B00-\u2BFF\uFE0F]')
for root in ['src/data', 'src/js']:
    for fn in os.listdir(root):
        s = io.open(os.path.join(root, fn), encoding='utf-8').read().replace('✓', '')
        m = EMOJI.search(s)
        if m:
            errs.append('%s/%s: emoji %s' % (root, fn, m.group(0)))
for fn in os.listdir('.'):
    if fn.endswith('.html'):
        s = io.open(fn, encoding='utf-8').read().replace('✓', '')
        m = EMOJI.search(s)
        if m:
            errs.append('%s: emoji %s' % (fn, m.group(0)))

# liczniki usunięte?
for fn in ['index.html']:
    if 'statline' in io.open(fn, encoding='utf-8').read():
        errs.append(fn + ': statline wciąż w HTML')
if 'data-licznik' in io.open('src/js/kraj.js', encoding='utf-8').read():
    errs.append('kraj.js: data-licznik wciąż renderowane')

if errs:
    print('BLEDY:')
    for e in errs:
        print(' -', e)
    sys.exit(1)
print('WERYFIKACJA: wszystko OK')
