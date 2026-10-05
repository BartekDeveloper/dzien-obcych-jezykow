# -*- coding: utf-8 -*-
import io

brand_old = '<a class="brand" href="index.html"><span class="pie" aria-hidden="true"></span> Dzień Języków</a>'
brand_new = ('<a class="brand" href="index.html"><span class="flagi" aria-hidden="true">'
             '<svg class="flaga-mini"><use href="icons.svg#i-flag-es"/></svg>'
             '<svg class="flaga-mini"><use href="icons.svg#i-flag-mx"/></svg></span> Dzień Języków</a>\n'
             '      <button type="button" class="narz" id="menu-btn" aria-expanded="false" aria-controls="nawigacja" hidden>'
             '<svg class="ik" aria-hidden="true"><use href="icons.svg#i-menu"/></svg> Menu</button>')

nav_old = '<nav class="mainnav" aria-label="Nawigacja główna">'
nav_new = '<nav class="mainnav" id="nawigacja" aria-label="Nawigacja główna">'

tools_old = """      <div class="tools" role="group" aria-label="Ułatwienia dostępu i udostępnianie">
        <button type="button" class="btn small toggle" id="w-ruch" aria-pressed="false">Bez ruchu</button>
        <button type="button" class="btn small toggle" id="w-projektor" aria-pressed="false">Tryb projektor</button>
        <button type="button" class="btn small" id="w-udostepnij">QR / Wyślij klasie</button>
      </div>"""
tools_new = """      <div class="tools" role="group" aria-label="Ułatwienia dostępu i udostępnianie">
        <button type="button" class="narz" id="w-ruch" aria-pressed="false" aria-label="Wyłącz animacje" title="Bez ruchu"><svg class="ik" aria-hidden="true"><use href="icons.svg#i-bez-ruchu"/></svg></button>
        <button type="button" class="narz" id="w-projektor" aria-pressed="false" aria-label="Tryb projektora: większy tekst" title="Tryb projektor">A+</button>
        <button type="button" class="narz" id="w-udostepnij" aria-label="Pokaż kod QR do wysłania klasie" title="QR / Wyślij klasie"><svg class="ik" aria-hidden="true"><use href="icons.svg#i-udostepnij"/></svg></button>
      </div>"""

for f in ['index.html', 'hiszpania.html', 'meksyk.html', 'gry.html']:
    s = io.open(f, encoding='utf-8').read()
    assert brand_old in s, f + ' brand'
    assert nav_old in s, f + ' nav'
    assert tools_old in s, f + ' tools'
    s = s.replace(brand_old, brand_new).replace(nav_old, nav_new).replace(tools_old, tools_new)
    io.open(f, 'w', encoding='utf-8').write(s)
    print('header OK:', f)
