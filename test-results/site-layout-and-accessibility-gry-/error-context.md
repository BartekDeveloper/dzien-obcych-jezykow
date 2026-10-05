# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.js >> layout and accessibility: gry/
- Location: tests\site.spec.js:5:3

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 105
Received:   132
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Przejdź do treści" [ref=e3] [cursor=pointer]:
    - /url: "#tresc"
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link "Dzień Języków" [ref=e6] [cursor=pointer]:
        - /url: /dzien-obcych-jezykow/
      - button "Menu" [ref=e12]
      - group "Udostępnianie" [ref=e15]:
        - button "Pokaż kod QR do wysłania klasie" [ref=e16]
  - main [ref=e19]:
    - generic [ref=e20]:
      - region [ref=e21]:
        - paragraph [ref=e22]:
          - generic [ref=e23]: Gry i zabawy · na lekcję i do domu
        - heading "Posłuchaj, dopasuj, zgadnij" [level=1] [ref=e24]
        - paragraph [ref=e25]: Najpierw osłuchaj się z fiszkami, potem sprawdź się w dopasowaniu i quizach. Wszystko z głośnikiem — mów razem z lektorem.
      - region [ref=e26]:
        - generic [ref=e27]:
          - 'heading "Słowa 1 Fiszki: usłyszysz to na miejscu" [level=2] [ref=e28]':
            - generic [ref=e29]: Słowa 1
            - text: "Fiszki: usłyszysz to na miejscu"
          - generic [aria-hidden]: HOLA
          - paragraph [ref=e30]: 28 słów i zwrotów z ulicy, targu i fiesty. Posłuchaj normalnie i wolno, powtórz na głos.
        - generic [ref=e31]:
          - paragraph [ref=e32]: "Poznano: 0 / 28. Kliknij fiszkę, żeby sprawdzić znaczenie."
          - generic [ref=e33]:
            - article [ref=e34]:
              - paragraph [ref=e35]: sombrero
              - paragraph [ref=e36]: "[sombrero]"
              - paragraph [ref=e37]: · · ·
              - generic [ref=e38]:
                - button "Pokaż znaczenie" [ref=e39]
                - 'button "Odsłuchaj normalnie: sombrero" [ref=e40]': Słuchaj
                - 'button "Odsłuchaj wolno: sombrero" [ref=e43]': Wolno
            - article [ref=e44]:
              - paragraph [ref=e45]: guitarra
              - paragraph [ref=e46]: "[gitarra]"
              - paragraph [ref=e47]: · · ·
              - generic [ref=e48]:
                - button "Pokaż znaczenie" [ref=e49]
                - 'button "Odsłuchaj normalnie: guitarra" [ref=e50]': Słuchaj
                - 'button "Odsłuchaj wolno: guitarra" [ref=e53]': Wolno
            - article [ref=e54]:
              - paragraph [ref=e55]: toro
              - paragraph [ref=e56]: "[toro]"
              - paragraph [ref=e57]: · · ·
              - generic [ref=e58]:
                - button "Pokaż znaczenie" [ref=e59]
                - 'button "Odsłuchaj normalnie: toro" [ref=e60]': Słuchaj
                - 'button "Odsłuchaj wolno: toro" [ref=e63]': Wolno
            - article [ref=e64]:
              - paragraph [ref=e65]: fiesta
              - paragraph [ref=e66]: "[fiesta]"
              - paragraph [ref=e67]: · · ·
              - generic [ref=e68]:
                - button "Pokaż znaczenie" [ref=e69]
                - 'button "Odsłuchaj normalnie: fiesta" [ref=e70]': Słuchaj
                - 'button "Odsłuchaj wolno: fiesta" [ref=e73]': Wolno
            - article [ref=e74]:
              - paragraph [ref=e75]: paella
              - paragraph [ref=e76]: "[paeja]"
              - paragraph [ref=e77]: · · ·
              - generic [ref=e78]:
                - button "Pokaż znaczenie" [ref=e79]
                - 'button "Odsłuchaj normalnie: paella" [ref=e80]': Słuchaj
                - 'button "Odsłuchaj wolno: paella" [ref=e83]': Wolno
            - article [ref=e84]:
              - paragraph [ref=e85]: taco
              - paragraph [ref=e86]: "[tako]"
              - paragraph [ref=e87]: · · ·
              - generic [ref=e88]:
                - button "Pokaż znaczenie" [ref=e89]
                - 'button "Odsłuchaj normalnie: taco" [ref=e90]': Słuchaj
                - 'button "Odsłuchaj wolno: taco" [ref=e93]': Wolno
            - article [ref=e94]:
              - paragraph [ref=e95]: pirámide
              - paragraph [ref=e96]: "[piramide]"
              - paragraph [ref=e97]: · · ·
              - generic [ref=e98]:
                - button "Pokaż znaczenie" [ref=e99]
                - 'button "Odsłuchaj normalnie: pirámide" [ref=e100]': Słuchaj
                - 'button "Odsłuchaj wolno: pirámide" [ref=e103]': Wolno
            - article [ref=e104]:
              - paragraph [ref=e105]: cactus
              - paragraph [ref=e106]: "[kaktus]"
              - paragraph [ref=e107]: · · ·
              - generic [ref=e108]:
                - button "Pokaż znaczenie" [ref=e109]
                - 'button "Odsłuchaj normalnie: cactus" [ref=e110]': Słuchaj
                - 'button "Odsłuchaj wolno: cactus" [ref=e113]': Wolno
            - article [ref=e114]:
              - paragraph [ref=e115]: maracas
              - paragraph [ref=e116]: "[marakas]"
              - paragraph [ref=e117]: · · ·
              - generic [ref=e118]:
                - button "Pokaż znaczenie" [ref=e119]
                - 'button "Odsłuchaj normalnie: maracas" [ref=e120]': Słuchaj
                - 'button "Odsłuchaj wolno: maracas" [ref=e123]': Wolno
            - article [ref=e124]:
              - paragraph [ref=e125]: playa
              - paragraph [ref=e126]: "[plaja]"
              - paragraph [ref=e127]: · · ·
              - generic [ref=e128]:
                - button "Pokaż znaczenie" [ref=e129]
                - 'button "Odsłuchaj normalnie: playa" [ref=e130]': Słuchaj
                - 'button "Odsłuchaj wolno: playa" [ref=e133]': Wolno
            - article [ref=e134]:
              - paragraph [ref=e135]: chocolate
              - paragraph [ref=e136]: "[czokolate]"
              - paragraph [ref=e137]: · · ·
              - generic [ref=e138]:
                - button "Pokaż znaczenie" [ref=e139]
                - 'button "Odsłuchaj normalnie: chocolate" [ref=e140]': Słuchaj
                - 'button "Odsłuchaj wolno: chocolate" [ref=e143]': Wolno
            - article [ref=e144]:
              - paragraph [ref=e145]: flamenco
              - paragraph [ref=e146]: "[flamenko]"
              - paragraph [ref=e147]: · · ·
              - generic [ref=e148]:
                - button "Pokaż znaczenie" [ref=e149]
                - 'button "Odsłuchaj normalnie: flamenco" [ref=e150]': Słuchaj
                - 'button "Odsłuchaj wolno: flamenco" [ref=e153]': Wolno
            - article [ref=e154]:
              - paragraph [ref=e155]: mercado
              - paragraph [ref=e156]: "[merkado]"
              - paragraph [ref=e157]: · · ·
              - generic [ref=e158]:
                - button "Pokaż znaczenie" [ref=e159]
                - 'button "Odsłuchaj normalnie: mercado" [ref=e160]': Słuchaj
                - 'button "Odsłuchaj wolno: mercado" [ref=e163]': Wolno
            - article [ref=e164]:
              - paragraph [ref=e165]: familia
              - paragraph [ref=e166]: "[familja]"
              - paragraph [ref=e167]: · · ·
              - generic [ref=e168]:
                - button "Pokaż znaczenie" [ref=e169]
                - 'button "Odsłuchaj normalnie: familia" [ref=e170]': Słuchaj
                - 'button "Odsłuchaj wolno: familia" [ref=e173]': Wolno
            - article [ref=e174]:
              - paragraph [ref=e175]: escuela
              - paragraph [ref=e176]: "[eskuela]"
              - paragraph [ref=e177]: · · ·
              - generic [ref=e178]:
                - button "Pokaż znaczenie" [ref=e179]
                - 'button "Odsłuchaj normalnie: escuela" [ref=e180]': Słuchaj
                - 'button "Odsłuchaj wolno: escuela" [ref=e183]': Wolno
            - article [ref=e184]:
              - paragraph [ref=e185]: gracias
              - paragraph [ref=e186]: "[grasjas]"
              - paragraph [ref=e187]: · · ·
              - generic [ref=e188]:
                - button "Pokaż znaczenie" [ref=e189]
                - 'button "Odsłuchaj normalnie: gracias" [ref=e190]': Słuchaj
                - 'button "Odsłuchaj wolno: gracias" [ref=e193]': Wolno
            - article [ref=e194]:
              - paragraph [ref=e195]: la cuenta, por favor
              - paragraph [ref=e196]: "[la kuenta, por fawor]"
              - paragraph [ref=e197]: · · ·
              - generic [ref=e198]:
                - button "Pokaż znaczenie" [ref=e199]
                - 'button "Odsłuchaj normalnie: la cuenta, por favor" [ref=e200]': Słuchaj
                - 'button "Odsłuchaj wolno: la cuenta, por favor" [ref=e203]': Wolno
            - article [ref=e204]:
              - paragraph [ref=e205]: el baño
              - paragraph [ref=e206]: "[el banio]"
              - paragraph [ref=e207]: · · ·
              - generic [ref=e208]:
                - button "Pokaż znaczenie" [ref=e209]
                - 'button "Odsłuchaj normalnie: el baño" [ref=e210]': Słuchaj
                - 'button "Odsłuchaj wolno: el baño" [ref=e213]': Wolno
            - article [ref=e214]:
              - paragraph [ref=e215]: el helado
              - paragraph [ref=e216]: "[el elado]"
              - paragraph [ref=e217]: · · ·
              - generic [ref=e218]:
                - button "Pokaż znaczenie" [ref=e219]
                - 'button "Odsłuchaj normalnie: el helado" [ref=e220]': Słuchaj
                - 'button "Odsłuchaj wolno: el helado" [ref=e223]': Wolno
            - article [ref=e224]:
              - paragraph [ref=e225]: la limonada
              - paragraph [ref=e226]: "[la limonada]"
              - paragraph [ref=e227]: · · ·
              - generic [ref=e228]:
                - button "Pokaż znaczenie" [ref=e229]
                - 'button "Odsłuchaj normalnie: la limonada" [ref=e230]': Słuchaj
                - 'button "Odsłuchaj wolno: la limonada" [ref=e233]': Wolno
            - article [ref=e234]:
              - paragraph [ref=e235]: el taxi
              - paragraph [ref=e236]: "[el taksi]"
              - paragraph [ref=e237]: · · ·
              - generic [ref=e238]:
                - button "Pokaż znaczenie" [ref=e239]
                - 'button "Odsłuchaj normalnie: el taxi" [ref=e240]': Słuchaj
                - 'button "Odsłuchaj wolno: el taxi" [ref=e243]': Wolno
            - article [ref=e244]:
              - paragraph [ref=e245]: la calle
              - paragraph [ref=e246]: "[la kaje]"
              - paragraph [ref=e247]: · · ·
              - generic [ref=e248]:
                - button "Pokaż znaczenie" [ref=e249]
                - 'button "Odsłuchaj normalnie: la calle" [ref=e250]': Słuchaj
                - 'button "Odsłuchaj wolno: la calle" [ref=e253]': Wolno
            - article [ref=e254]:
              - paragraph [ref=e255]: el museo
              - paragraph [ref=e256]: "[el museo]"
              - paragraph [ref=e257]: · · ·
              - generic [ref=e258]:
                - button "Pokaż znaczenie" [ref=e259]
                - 'button "Odsłuchaj normalnie: el museo" [ref=e260]': Słuchaj
                - 'button "Odsłuchaj wolno: el museo" [ref=e263]': Wolno
            - article [ref=e264]:
              - paragraph [ref=e265]: el regalo
              - paragraph [ref=e266]: "[el regalo]"
              - paragraph [ref=e267]: · · ·
              - generic [ref=e268]:
                - button "Pokaż znaczenie" [ref=e269]
                - 'button "Odsłuchaj normalnie: el regalo" [ref=e270]': Słuchaj
                - 'button "Odsłuchaj wolno: el regalo" [ref=e273]': Wolno
            - article [ref=e274]:
              - paragraph [ref=e275]: el mariachi
              - paragraph [ref=e276]: "[el marjaci]"
              - paragraph [ref=e277]: · · ·
              - generic [ref=e278]:
                - button "Pokaż znaczenie" [ref=e279]
                - 'button "Odsłuchaj normalnie: el mariachi" [ref=e280]': Słuchaj
                - 'button "Odsłuchaj wolno: el mariachi" [ref=e283]': Wolno
            - article [ref=e284]:
              - paragraph [ref=e285]: la piñata
              - paragraph [ref=e286]: "[la pinjata]"
              - paragraph [ref=e287]: · · ·
              - generic [ref=e288]:
                - button "Pokaż znaczenie" [ref=e289]
                - 'button "Odsłuchaj normalnie: la piñata" [ref=e290]': Słuchaj
                - 'button "Odsłuchaj wolno: la piñata" [ref=e293]': Wolno
            - article [ref=e294]:
              - paragraph [ref=e295]: el chile
              - paragraph [ref=e296]: "[el czile]"
              - paragraph [ref=e297]: · · ·
              - generic [ref=e298]:
                - button "Pokaż znaczenie" [ref=e299]
                - 'button "Odsłuchaj normalnie: el chile" [ref=e300]': Słuchaj
                - 'button "Odsłuchaj wolno: el chile" [ref=e303]': Wolno
            - article [ref=e304]:
              - paragraph [ref=e305]: la salsa
              - paragraph [ref=e306]: "[la salsa]"
              - paragraph [ref=e307]: · · ·
              - generic [ref=e308]:
                - button "Pokaż znaczenie" [ref=e309]
                - 'button "Odsłuchaj normalnie: la salsa" [ref=e310]': Słuchaj
                - 'button "Odsłuchaj wolno: la salsa" [ref=e313]': Wolno
      - region [ref=e314]:
        - generic [ref=e315]:
          - 'heading "Gra 2 Dopasuj pojęcia: Hiszpania i Meksyk" [level=2] [ref=e316]':
            - generic [ref=e317]: Gra 2
            - text: "Dopasuj pojęcia: Hiszpania i Meksyk"
          - generic [aria-hidden]: MEMO
          - paragraph [ref=e318]: "16 par: hiszpańskie słowo i polskie znaczenie. Najpierw fiszki powyżej, potem gra."
        - generic [ref=e319]:
          - group "Karty memory" [ref=e320]:
            - button "paella po hiszpańsku" [ref=e321]:
              - generic [ref=e322]: paella
              - generic [ref=e323]: po hiszpańsku
            - button "byk po polsku" [ref=e324]:
              - generic [ref=e325]: byk
              - generic [ref=e326]: po polsku
            - button "targ, bazar po polsku" [ref=e327]:
              - generic [ref=e328]: targ, bazar
              - generic [ref=e329]: po polsku
            - button "czekolada po polsku" [ref=e330]:
              - generic [ref=e331]: czekolada
              - generic [ref=e332]: po polsku
            - button "grzechotki po polsku" [ref=e333]:
              - generic [ref=e334]: grzechotki
              - generic [ref=e335]: po polsku
            - button "toro po hiszpańsku" [ref=e336]:
              - generic [ref=e337]: toro
              - generic [ref=e338]: po hiszpańsku
            - button "taniec andaluzyjski po polsku" [ref=e339]:
              - generic [ref=e340]: taniec andaluzyjski
              - generic [ref=e341]: po polsku
            - button "taco po hiszpańsku" [ref=e342]:
              - generic [ref=e343]: taco
              - generic [ref=e344]: po hiszpańsku
            - button "maracas po hiszpańsku" [ref=e345]:
              - generic [ref=e346]: maracas
              - generic [ref=e347]: po hiszpańsku
            - button "chocolate po hiszpańsku" [ref=e348]:
              - generic [ref=e349]: chocolate
              - generic [ref=e350]: po hiszpańsku
            - button "święto, impreza po polsku" [ref=e351]:
              - generic [ref=e352]: święto, impreza
              - generic [ref=e353]: po polsku
            - button "fiesta po hiszpańsku" [ref=e354]:
              - generic [ref=e355]: fiesta
              - generic [ref=e356]: po hiszpańsku
            - button "flamenco po hiszpańsku" [ref=e357]:
              - generic [ref=e358]: flamenco
              - generic [ref=e359]: po hiszpańsku
            - button "kaktus po polsku" [ref=e360]:
              - generic [ref=e361]: kaktus
              - generic [ref=e362]: po polsku
            - button "gracias po hiszpańsku" [ref=e363]:
              - generic [ref=e364]: gracias
              - generic [ref=e365]: po hiszpańsku
            - button "escuela po hiszpańsku" [ref=e366]:
              - generic [ref=e367]: escuela
              - generic [ref=e368]: po hiszpańsku
            - button "danie z ryżu po polsku" [ref=e369]:
              - generic [ref=e370]: danie z ryżu
              - generic [ref=e371]: po polsku
            - button "piramida po polsku" [ref=e372]:
              - generic [ref=e373]: piramida
              - generic [ref=e374]: po polsku
            - button "kapelusz po polsku" [ref=e375]:
              - generic [ref=e376]: kapelusz
              - generic [ref=e377]: po polsku
            - button "playa po hiszpańsku" [ref=e378]:
              - generic [ref=e379]: playa
              - generic [ref=e380]: po hiszpańsku
            - button "szkoła po polsku" [ref=e381]:
              - generic [ref=e382]: szkoła
              - generic [ref=e383]: po polsku
            - button "dziękuję po polsku" [ref=e384]:
              - generic [ref=e385]: dziękuję
              - generic [ref=e386]: po polsku
            - button "tortilla z nadzieniem po polsku" [ref=e387]:
              - generic [ref=e388]: tortilla z nadzieniem
              - generic [ref=e389]: po polsku
            - button "familia po hiszpańsku" [ref=e390]:
              - generic [ref=e391]: familia
              - generic [ref=e392]: po hiszpańsku
            - button "guitarra po hiszpańsku" [ref=e393]:
              - generic [ref=e394]: guitarra
              - generic [ref=e395]: po hiszpańsku
            - button "cactus po hiszpańsku" [ref=e396]:
              - generic [ref=e397]: cactus
              - generic [ref=e398]: po hiszpańsku
            - button "sombrero po hiszpańsku" [ref=e399]:
              - generic [ref=e400]: sombrero
              - generic [ref=e401]: po hiszpańsku
            - button "rodzina po polsku" [ref=e402]:
              - generic [ref=e403]: rodzina
              - generic [ref=e404]: po polsku
            - button "gitara po polsku" [ref=e405]:
              - generic [ref=e406]: gitara
              - generic [ref=e407]: po polsku
            - button "pirámide po hiszpańsku" [ref=e408]:
              - generic [ref=e409]: pirámide
              - generic [ref=e410]: po hiszpańsku
            - button "mercado po hiszpańsku" [ref=e411]:
              - generic [ref=e412]: mercado
              - generic [ref=e413]: po hiszpańsku
            - button "plaża po polsku" [ref=e414]:
              - generic [ref=e415]: plaża
              - generic [ref=e416]: po polsku
          - status [ref=e417]: "Znajdź 16 par: hiszpańskie słowo i polskie znaczenie."
          - paragraph [ref=e418]:
            - generic [ref=e419]: "Próby: 0 · Pary: 0/16"
            - button "Nowe rozdanie" [ref=e420]
      - region [ref=e421]:
        - generic [ref=e422]:
          - heading "Gra 3 Zagadki językowe" [level=2] [ref=e423]:
            - generic [ref=e424]: Gra 3
            - text: Zagadki językowe
          - generic [aria-hidden]: MISTERIO
          - paragraph [ref=e425]: Idiomy, fałszywi przyjaciele i meksykańskie „jutro, które nigdy nie nadchodzi”.
        - generic [ref=e427]:
          - paragraph [ref=e428]: Naciśnij start. Na każde pytanie masz 25 sekund.
          - paragraph [ref=e429]: "Rekord sali: nikt jeszcze nie grał. Bądź pierwszy!"
          - status [ref=e430]
          - button "Start quizu" [ref=e431]
      - region [ref=e432]:
        - generic [ref=e433]:
          - heading "Słowa 2 Czytanki z lektorem" [level=2] [ref=e434]:
            - generic [ref=e435]: Słowa 2
            - text: Czytanki z lektorem
          - generic [aria-hidden]: LEE
          - paragraph [ref=e436]: "Dwie scenki z życia: restauracja i fiesta. Całość, zdanie po zdaniu, z tłumaczeniem."
        - generic [ref=e437]:
          - article [ref=e438]:
            - heading "W restauracji (Meksyk)" [level=3] [ref=e439]
            - generic [ref=e440]:
              - button "Czytaj całość" [ref=e441]
              - button "Pokaż tłumaczenie" [ref=e444]
            - list [ref=e445]:
              - listitem [ref=e446]:
                - paragraph [ref=e447]: Buenas tardes. ¿Mesa para dos?
                - 'button "Odsłuchaj zdanie: Buenas tardes. ¿Mesa para dos?" [ref=e448]': Zdanie
              - listitem [ref=e451]:
                - paragraph [ref=e452]: Sí, por favor. ¿Tienen tacos al pastor?
                - 'button "Odsłuchaj zdanie: Sí, por favor. ¿Tienen tacos al pastor?" [ref=e453]': Zdanie
              - listitem [ref=e456]:
                - paragraph [ref=e457]: Claro que sí. ¿Pica mucho?
                - 'button "Odsłuchaj zdanie: Claro que sí. ¿Pica mucho?" [ref=e458]': Zdanie
              - listitem [ref=e461]:
                - paragraph [ref=e462]: Un poco. Con limón pica menos.
                - 'button "Odsłuchaj zdanie: Un poco. Con limón pica menos." [ref=e463]': Zdanie
              - listitem [ref=e466]:
                - paragraph [ref=e467]: Entonces, dos tacos y una limonada.
                - 'button "Odsłuchaj zdanie: Entonces, dos tacos y una limonada." [ref=e468]': Zdanie
              - listitem [ref=e471]:
                - paragraph [ref=e472]: ¿Algo más? ¿Un postre?
                - 'button "Odsłuchaj zdanie: ¿Algo más? ¿Un postre?" [ref=e473]': Zdanie
              - listitem [ref=e476]:
                - paragraph [ref=e477]: No, gracias. La cuenta, por favor.
                - 'button "Odsłuchaj zdanie: No, gracias. La cuenta, por favor." [ref=e478]': Zdanie
            - paragraph [ref=e481]: "Trudne słowa: pica [pika] — jest ostre (od piec); la cuenta [la kuenta] — rachunek; el postre [el postre] — deser."
          - article [ref=e482]:
            - heading "Na fieście (Hiszpania)" [level=3] [ref=e483]
            - generic [ref=e484]:
              - button "Czytaj całość" [ref=e485]
              - button "Pokaż tłumaczenie" [ref=e488]
            - list [ref=e489]:
              - listitem [ref=e490]:
                - paragraph [ref=e491]: ¡Hola! ¿Es tu primera Tomatina?
                - 'button "Odsłuchaj zdanie: ¡Hola! ¿Es tu primera Tomatina?" [ref=e492]': Zdanie
              - listitem [ref=e495]:
                - paragraph [ref=e496]: Sí. ¿A qué hora empieza?
                - 'button "Odsłuchaj zdanie: Sí. ¿A qué hora empieza?" [ref=e497]': Zdanie
              - listitem [ref=e500]:
                - paragraph [ref=e501]: A las once. Ponte esta camiseta blanca.
                - 'button "Odsłuchaj zdanie: A las once. Ponte esta camiseta blanca." [ref=e502]': Zdanie
              - listitem [ref=e505]:
                - paragraph [ref=e506]: ¿Y después hay flamenco?
                - 'button "Odsłuchaj zdanie: ¿Y después hay flamenco?" [ref=e507]': Zdanie
              - listitem [ref=e510]:
                - paragraph [ref=e511]: Por la noche, en la plaza. ¡Olé!
                - 'button "Odsłuchaj zdanie: Por la noche, en la plaza. ¡Olé!" [ref=e512]': Zdanie
              - listitem [ref=e515]:
                - paragraph [ref=e516]: ¡Qué bien! ¿Vamos juntos?
                - 'button "Odsłuchaj zdanie: ¡Qué bien! ¿Vamos juntos?" [ref=e517]': Zdanie
              - listitem [ref=e520]:
                - paragraph [ref=e521]: ¡Vale! Hasta luego.
                - 'button "Odsłuchaj zdanie: ¡Vale! Hasta luego." [ref=e522]': Zdanie
            - paragraph [ref=e525]: "Trudne słowa: la camiseta [la kamiseta] — koszulka; la plaza [la plasa] — plac; vale [bale] — dobra, okej."
      - region [ref=e526]:
        - generic [ref=e527]:
          - heading "Słowa 3 Jak to przeczytać" [level=2] [ref=e528]:
            - generic [ref=e529]: Słowa 3
            - text: Jak to przeczytać
          - generic [aria-hidden]: SONIDO
          - paragraph [ref=e530]: 7 zasad wymowy z przykładami audio — żeby odczytać szyld, menu i rozkład.
        - generic [ref=e531]:
          - article [ref=e532]:
            - generic [ref=e536]:
              - heading "H jest nieme" [level=3] [ref=e537]
              - paragraph [ref=e538]:
                - text: "Przykład: hotel"
                - generic [ref=e539]: "[otel]"
              - paragraph [ref=e540]: "Nigdy go nie wymawiaj: hola brzmi ola."
              - 'button "Odsłuchaj przykład: hotel" [ref=e541]': Odsłuchaj
          - article [ref=e544]:
            - generic [ref=e548]:
              - heading "J brzmi jak polskie ch" [level=3] [ref=e549]
              - paragraph [ref=e550]:
                - text: "Przykład: jamón"
                - generic [ref=e551]: "[chamon]"
              - paragraph [ref=e552]: "Szynka: jamón. Gardłowe, jak chrząkanie."
              - 'button "Odsłuchaj przykład: jamón" [ref=e553]': Odsłuchaj
          - article [ref=e556]:
            - generic [ref=e560]:
              - heading "LL brzmi jak j" [level=3] [ref=e561]
              - paragraph [ref=e562]:
                - text: "Przykład: calle"
                - generic [ref=e563]: "[kaje]"
              - paragraph [ref=e564]: "Ulica: calle. Tak samo w słowie paella."
              - 'button "Odsłuchaj przykład: calle" [ref=e565]': Odsłuchaj
          - article [ref=e568]:
            - generic [ref=e572]:
              - heading "Ñ to miękkie ni" [level=3] [ref=e573]
              - paragraph [ref=e574]:
                - text: "Przykład: niño"
                - generic [ref=e575]: "[ninio]"
              - paragraph [ref=e576]: "Dziecko: niño. Kreseczka zmienia wszystko."
              - 'button "Odsłuchaj przykład: niño" [ref=e577]': Odsłuchaj
          - article [ref=e580]:
            - generic [ref=e584]:
              - heading "RR jest drżące" [level=3] [ref=e585]
              - paragraph [ref=e586]:
                - text: "Przykład: perro"
                - generic [ref=e587]: "[perro (wibrujące r)]"
              - paragraph [ref=e588]: "Pies: perro. Jedno r to pero (ale) — uważaj!"
              - 'button "Odsłuchaj przykład: perro" [ref=e589]': Odsłuchaj
          - article [ref=e592]:
            - generic [ref=e596]:
              - 'heading "C i Z: Hiszpania sepleni, Meksyk nie" [level=3] [ref=e597]'
              - paragraph [ref=e598]:
                - text: "Przykład: gracias"
                - generic [ref=e599]: "[graθjas (ES) / grasjas (MX)]"
              - paragraph [ref=e600]: W Madrycie usłyszysz th, w Meksyku zwykłe s.
              - 'button "Odsłuchaj przykład: gracias" [ref=e601]': Odsłuchaj
          - article [ref=e604]:
            - generic [ref=e608]:
              - heading "Akcent pisany pokazuje stres" [level=3] [ref=e609]
              - paragraph [ref=e610]:
                - text: "Przykład: música"
                - generic [ref=e611]: "[MUsika]"
              - paragraph [ref=e612]: "Kreska mówi, którą sylabę zaakcentować. Bez kreski akcent pada zwykle na przedostatnią: taco."
              - 'button "Odsłuchaj przykład: música" [ref=e613]': Odsłuchaj
      - region [ref=e616]:
        - generic [ref=e617]:
          - heading "Gra 4 Łamańce językowe (trabalenguas)" [level=2] [ref=e618]:
            - generic [ref=e619]: Gra 4
            - text: Łamańce językowe (trabalenguas)
          - generic [aria-hidden]: RITMO
          - paragraph [ref=e620]: "Dwa łamańce z lektorem: wariant iberyjski i meksykański."
        - generic [ref=e621]:
          - article [ref=e622]:
            - paragraph [ref=e623]: "iberyjski · poziom: średni"
            - paragraph [ref=e624]: „El perro de San Roque no tiene rabo porque Ramón Ramírez se lo ha cortado.”
            - paragraph [ref=e625]: Pies świętego Rocha nie ma ogona, bo obciął mu go Ramón Ramírez. Klasyk ćwiczący mocne, drżące r.
            - button "Odsłuchaj wolno" [ref=e626]
          - article [ref=e629]:
            - paragraph [ref=e630]: "meksykański · poziom: zaawansowany"
            - paragraph [ref=e631]: „Tres tristes tigres tragaban trigo en un trigal en tres tristes trastos.”
            - paragraph [ref=e632]: Trzy smutne tygrysy połykały pszenicę na pszenicznym polu w trzech smutnych naczyniach.
            - button "Odsłuchaj wolno" [ref=e633]
      - region [ref=e636]:
        - generic [ref=e637]:
          - heading "Słowniczek Cały słowniczek porównawczy" [level=2] [ref=e638]:
            - generic [ref=e639]: Słowniczek
            - text: Cały słowniczek porównawczy
          - generic [aria-hidden]: PALABRAS
          - paragraph [ref=e640]: "Osiem par: to samo pojęcie po madrycku i po meksykańsku."
        - generic [ref=e641]:
          - generic [ref=e642]:
            - generic [ref=e643]:
              - paragraph [ref=e644]: el coche
              - paragraph [ref=e645]: Hiszpania
              - 'button "Odsłuchaj: el coche" [ref=e646]': ES
            - generic [ref=e649]: "znaczysamochóda w Meksyku:"
            - generic [ref=e650]:
              - paragraph [ref=e651]: el carro
              - paragraph [ref=e652]: Meksyk
              - 'button "Odsłuchaj: el carro" [ref=e653]': MX
          - generic [ref=e656]:
            - generic [ref=e657]:
              - paragraph [ref=e658]: el ordenador
              - paragraph [ref=e659]: Hiszpania
              - 'button "Odsłuchaj: el ordenador" [ref=e660]': ES
            - generic [ref=e663]: "znaczykomputera w Meksyku:"
            - generic [ref=e664]:
              - paragraph [ref=e665]: la computadora
              - paragraph [ref=e666]: Meksyk
              - 'button "Odsłuchaj: la computadora" [ref=e667]': MX
          - generic [ref=e670]:
            - generic [ref=e671]:
              - paragraph [ref=e672]: el zumo
              - paragraph [ref=e673]: Hiszpania
              - 'button "Odsłuchaj: el zumo" [ref=e674]': ES
            - generic [ref=e677]: "znaczysoka w Meksyku:"
            - generic [ref=e678]:
              - paragraph [ref=e679]: el jugo
              - paragraph [ref=e680]: Meksyk
              - 'button "Odsłuchaj: el jugo" [ref=e681]': MX
          - generic [ref=e684]:
            - generic [ref=e685]:
              - paragraph [ref=e686]: el melocotón
              - paragraph [ref=e687]: Hiszpania
              - 'button "Odsłuchaj: el melocotón" [ref=e688]': ES
            - generic [ref=e691]: "znaczybrzoskwiniaa w Meksyku:"
            - generic [ref=e692]:
              - paragraph [ref=e693]: el durazno
              - paragraph [ref=e694]: Meksyk
              - 'button "Odsłuchaj: el durazno" [ref=e695]': MX
          - generic [ref=e698]:
            - generic [ref=e699]:
              - paragraph [ref=e700]: la patata
              - paragraph [ref=e701]: Hiszpania
              - 'button "Odsłuchaj: la patata" [ref=e702]': ES
            - generic [ref=e705]: "znaczyziemniaka w Meksyku:"
            - generic [ref=e706]:
              - paragraph [ref=e707]: la papa
              - paragraph [ref=e708]: Meksyk
              - 'button "Odsłuchaj: la papa" [ref=e709]': MX
          - generic [ref=e712]:
            - generic [ref=e713]:
              - paragraph [ref=e714]: las gafas
              - paragraph [ref=e715]: Hiszpania
              - 'button "Odsłuchaj: las gafas" [ref=e716]': ES
            - generic [ref=e719]: "znaczyokularya w Meksyku:"
            - generic [ref=e720]:
              - paragraph [ref=e721]: los lentes
              - paragraph [ref=e722]: Meksyk
              - 'button "Odsłuchaj: los lentes" [ref=e723]': MX
          - generic [ref=e726]:
            - generic [ref=e727]:
              - paragraph [ref=e728]: el autobús
              - paragraph [ref=e729]: Hiszpania
              - 'button "Odsłuchaj: el autobús" [ref=e730]': ES
            - generic [ref=e733]: "znaczyautobusa w Meksyku:"
            - generic [ref=e734]:
              - paragraph [ref=e735]: el camión
              - paragraph [ref=e736]: Meksyk
              - 'button "Odsłuchaj: el camión" [ref=e737]': MX
          - generic [ref=e740]:
            - generic [ref=e741]:
              - paragraph [ref=e742]: el piso
              - paragraph [ref=e743]: Hiszpania
              - 'button "Odsłuchaj: el piso" [ref=e744]': ES
            - generic [ref=e747]: "znaczymieszkaniea w Meksyku:"
            - generic [ref=e748]:
              - paragraph [ref=e749]: el departamento
              - paragraph [ref=e750]: Meksyk
              - 'button "Odsłuchaj: el departamento" [ref=e751]': MX
      - region [ref=e754]:
        - generic [ref=e755]:
          - heading "Wyniki Najlepsze wyniki w sali" [level=2] [ref=e756]:
            - generic [ref=e757]: Wyniki
            - text: Najlepsze wyniki w sali
          - generic [aria-hidden]: TROFEO
        - paragraph [ref=e758]: Brak rekordów — zagraj w dowolny quiz, a wynik pojawi się tutaj.
  - contentinfo [ref=e759]:
    - generic [ref=e760]:
      - navigation "Pawilony" [ref=e761]:
        - heading "Pawilony" [level=2] [ref=e762]
        - list [ref=e763]:
          - listitem [ref=e764]:
            - link "Pawilon Hiszpanii" [ref=e765] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/hiszpania/
          - listitem [ref=e766]:
            - 'link "Quiz: Hiszpania" [ref=e767] [cursor=pointer]':
              - /url: /dzien-obcych-jezykow/hiszpania/#quiz
          - listitem [ref=e768]:
            - link "Pawilon Meksyku" [ref=e769] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/meksyk/
          - listitem [ref=e770]:
            - 'link "Quiz: Meksyk" [ref=e771] [cursor=pointer]':
              - /url: /dzien-obcych-jezykow/meksyk/#quiz
      - navigation "Gry i zabawy" [ref=e772]:
        - heading "Gry i zabawy" [level=2] [ref=e773]
        - list [ref=e774]:
          - listitem [ref=e775]:
            - link "Strona główna i scenariusz lekcji" [ref=e776] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/
          - listitem [ref=e777]:
            - link "Fiszki, dopasowanie, zagadki" [ref=e778] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/gry/
          - listitem [ref=e779]:
            - link "Rekordy sali" [ref=e780] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/gry/#h-rek
      - generic [ref=e781]:
        - heading "Materiały" [level=2] [ref=e782]
        - list [ref=e783]:
          - listitem [ref=e784]:
            - link "Mapa strony (sitemap.xml)" [ref=e785] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/sitemap.xml
          - listitem [ref=e786]:
            - link "Wróć na górę strony" [ref=e787] [cursor=pointer]:
              - /url: "#tresc"
    - paragraph [ref=e788]: © 2026 Dzień Języków Obcych — materiał na jedną lekcję o Hiszpanii i Meksyku.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | for (const route of ['', 'hiszpania/', 'meksyk/', 'gry/']) {
  5  |   test(`layout and accessibility: ${route || 'home'}`, async ({ page }) => {
  6  |     const errors = [];
  7  |     page.on('pageerror', e => errors.push(e.message));
  8  |     await page.goto(route || './');
  9  |     await page.evaluate(() => document.fonts.ready);
  10 |     for (const width of [360, 768, 1024, 1440]) {
  11 |       await page.setViewportSize({ width, height: 900 });
  12 |       expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  13 |       const header = await page.locator('header').boundingBox();
> 14 |       expect(header.height).toBeLessThan(105);
     |                             ^ Error: expect(received).toBeLessThan(expected)
  15 |       for (const mark of await page.locator('.wodny').all()) {
  16 |         const bounds = await mark.boundingBox();
  17 |         const title = await mark.locator('..').locator('h2').boundingBox();
  18 |         if (bounds && title) expect(bounds.y + bounds.height <= title.y || bounds.x >= title.x + title.width).toBe(true);
  19 |       }
  20 |     }
  21 |     const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  22 |     expect(result.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) }))).toEqual([]);
  23 |     expect(errors).toEqual([]);
  24 |     await page.screenshot({ path: `test-results/${route.replace('/', '') || 'home'}-desktop.png`, fullPage: true });
  25 |   });
  26 | }
  27 | 
  28 | test('home has no lesson plan or platform pitch', async ({ page }) => {
  29 |   await page.goto('./');
  30 |   await expect(page.locator('body')).not.toContainText(/Scenariusz lekcji|modułach platformy|Materiał na 1 lekcję/);
  31 | });
  32 | 
  33 | test('mobile menu works with keyboard and returns focus', async ({ page }) => {
  34 |   await page.setViewportSize({ width: 360, height: 800 });
  35 |   await page.goto('./');
  36 |   const menu = page.getByRole('button', { name: 'Menu', exact: true });
  37 |   await menu.focus();
  38 |   await page.keyboard.press('Enter');
  39 |   await expect(menu).toHaveAttribute('aria-expanded', 'true');
  40 |   await page.keyboard.press('Escape');
  41 |   await expect(menu).toBeFocused();
  42 |   await expect(menu).toHaveAttribute('aria-expanded', 'false');
  43 | });
  44 | 
  45 | test('all local fragment links have targets', async ({ page }) => {
  46 |   for (const route of ['', 'hiszpania/', 'meksyk/', 'gry/']) {
  47 |     await page.goto(route || './');
  48 |     const broken = await page.evaluate(() => [...document.querySelectorAll('a[href*="#"]')].filter(a => {
  49 |       const u = new URL(a.href);
  50 |       return u.pathname === location.pathname && u.hash && !document.getElementById(decodeURIComponent(u.hash.slice(1)));
  51 |     }).map(a => a.getAttribute('href')));
  52 |     expect(broken).toEqual([]);
  53 |   }
  54 | });
  55 | 
```