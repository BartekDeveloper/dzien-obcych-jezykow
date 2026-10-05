# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.js >> all local fragment links have targets
- Location: tests\site.spec.js:45:1

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 3

- Array []
+ Array [
+   "/dzien-obcych-jezykow/gry/#h-rek",
+ ]
```

# Page snapshot

```yaml
- generic [ref=f3e2]:
  - link "Przejdź do treści" [ref=f3e3] [cursor=pointer]:
    - /url: "#tresc"
  - banner [ref=f3e4]:
    - generic [ref=f3e5]:
      - link "Dzień Języków" [ref=f3e6] [cursor=pointer]:
        - /url: /dzien-obcych-jezykow/
      - navigation "Nawigacja główna" [ref=f3e12]:
        - link "Strona Główna" [ref=f3e13] [cursor=pointer]:
          - /url: /dzien-obcych-jezykow/
        - link "Pawilon Hiszpanii" [ref=f3e14] [cursor=pointer]:
          - /url: /dzien-obcych-jezykow/hiszpania/
        - link "Pawilon Meksyku" [ref=f3e17] [cursor=pointer]:
          - /url: /dzien-obcych-jezykow/meksyk/
        - link "Gry i zabawy" [ref=f3e20] [cursor=pointer]:
          - /url: /dzien-obcych-jezykow/gry/
      - group "Udostępnianie" [ref=f3e23]:
        - button "Pokaż kod QR do wysłania klasie" [ref=f3e24]
  - main [ref=f3e27]:
    - generic [ref=f3e28]:
      - region [ref=f3e29]:
        - paragraph [ref=f3e30]:
          - generic [ref=f3e31]: Gry i zabawy · na lekcję i do domu
        - heading "Posłuchaj, dopasuj, zgadnij" [level=1] [ref=f3e32]
        - paragraph [ref=f3e33]: Najpierw osłuchaj się z fiszkami, potem sprawdź się w dopasowaniu i quizach. Wszystko z głośnikiem — mów razem z lektorem.
      - region [ref=f3e34]:
        - generic [ref=f3e35]:
          - 'heading "Słowa 1 Fiszki: usłyszysz to na miejscu" [level=2] [ref=f3e36]':
            - generic [ref=f3e37]: Słowa 1
            - text: "Fiszki: usłyszysz to na miejscu"
          - generic [aria-hidden]: HOLA
          - paragraph [ref=f3e38]: 28 słów i zwrotów z ulicy, targu i fiesty. Posłuchaj normalnie i wolno, powtórz na głos.
        - generic [ref=f3e39]:
          - paragraph [ref=f3e40]: "Poznano: 0 / 28. Kliknij fiszkę, żeby sprawdzić znaczenie."
          - generic [ref=f3e41]:
            - article [ref=f3e42]:
              - paragraph [ref=f3e43]: sombrero
              - paragraph [ref=f3e44]: "[sombrero]"
              - paragraph [ref=f3e45]: · · ·
              - generic [ref=f3e46]:
                - button "Pokaż znaczenie" [ref=f3e47]
                - 'button "Odsłuchaj normalnie: sombrero" [ref=f3e48]': Słuchaj
                - 'button "Odsłuchaj wolno: sombrero" [ref=f3e51]': Wolno
            - article [ref=f3e52]:
              - paragraph [ref=f3e53]: guitarra
              - paragraph [ref=f3e54]: "[gitarra]"
              - paragraph [ref=f3e55]: · · ·
              - generic [ref=f3e56]:
                - button "Pokaż znaczenie" [ref=f3e57]
                - 'button "Odsłuchaj normalnie: guitarra" [ref=f3e58]': Słuchaj
                - 'button "Odsłuchaj wolno: guitarra" [ref=f3e61]': Wolno
            - article [ref=f3e62]:
              - paragraph [ref=f3e63]: toro
              - paragraph [ref=f3e64]: "[toro]"
              - paragraph [ref=f3e65]: · · ·
              - generic [ref=f3e66]:
                - button "Pokaż znaczenie" [ref=f3e67]
                - 'button "Odsłuchaj normalnie: toro" [ref=f3e68]': Słuchaj
                - 'button "Odsłuchaj wolno: toro" [ref=f3e71]': Wolno
            - article [ref=f3e72]:
              - paragraph [ref=f3e73]: fiesta
              - paragraph [ref=f3e74]: "[fiesta]"
              - paragraph [ref=f3e75]: · · ·
              - generic [ref=f3e76]:
                - button "Pokaż znaczenie" [ref=f3e77]
                - 'button "Odsłuchaj normalnie: fiesta" [ref=f3e78]': Słuchaj
                - 'button "Odsłuchaj wolno: fiesta" [ref=f3e81]': Wolno
            - article [ref=f3e82]:
              - paragraph [ref=f3e83]: paella
              - paragraph [ref=f3e84]: "[paeja]"
              - paragraph [ref=f3e85]: · · ·
              - generic [ref=f3e86]:
                - button "Pokaż znaczenie" [ref=f3e87]
                - 'button "Odsłuchaj normalnie: paella" [ref=f3e88]': Słuchaj
                - 'button "Odsłuchaj wolno: paella" [ref=f3e91]': Wolno
            - article [ref=f3e92]:
              - paragraph [ref=f3e93]: taco
              - paragraph [ref=f3e94]: "[tako]"
              - paragraph [ref=f3e95]: · · ·
              - generic [ref=f3e96]:
                - button "Pokaż znaczenie" [ref=f3e97]
                - 'button "Odsłuchaj normalnie: taco" [ref=f3e98]': Słuchaj
                - 'button "Odsłuchaj wolno: taco" [ref=f3e101]': Wolno
            - article [ref=f3e102]:
              - paragraph [ref=f3e103]: pirámide
              - paragraph [ref=f3e104]: "[piramide]"
              - paragraph [ref=f3e105]: · · ·
              - generic [ref=f3e106]:
                - button "Pokaż znaczenie" [ref=f3e107]
                - 'button "Odsłuchaj normalnie: pirámide" [ref=f3e108]': Słuchaj
                - 'button "Odsłuchaj wolno: pirámide" [ref=f3e111]': Wolno
            - article [ref=f3e112]:
              - paragraph [ref=f3e113]: cactus
              - paragraph [ref=f3e114]: "[kaktus]"
              - paragraph [ref=f3e115]: · · ·
              - generic [ref=f3e116]:
                - button "Pokaż znaczenie" [ref=f3e117]
                - 'button "Odsłuchaj normalnie: cactus" [ref=f3e118]': Słuchaj
                - 'button "Odsłuchaj wolno: cactus" [ref=f3e121]': Wolno
            - article [ref=f3e122]:
              - paragraph [ref=f3e123]: maracas
              - paragraph [ref=f3e124]: "[marakas]"
              - paragraph [ref=f3e125]: · · ·
              - generic [ref=f3e126]:
                - button "Pokaż znaczenie" [ref=f3e127]
                - 'button "Odsłuchaj normalnie: maracas" [ref=f3e128]': Słuchaj
                - 'button "Odsłuchaj wolno: maracas" [ref=f3e131]': Wolno
            - article [ref=f3e132]:
              - paragraph [ref=f3e133]: playa
              - paragraph [ref=f3e134]: "[plaja]"
              - paragraph [ref=f3e135]: · · ·
              - generic [ref=f3e136]:
                - button "Pokaż znaczenie" [ref=f3e137]
                - 'button "Odsłuchaj normalnie: playa" [ref=f3e138]': Słuchaj
                - 'button "Odsłuchaj wolno: playa" [ref=f3e141]': Wolno
            - article [ref=f3e142]:
              - paragraph [ref=f3e143]: chocolate
              - paragraph [ref=f3e144]: "[czokolate]"
              - paragraph [ref=f3e145]: · · ·
              - generic [ref=f3e146]:
                - button "Pokaż znaczenie" [ref=f3e147]
                - 'button "Odsłuchaj normalnie: chocolate" [ref=f3e148]': Słuchaj
                - 'button "Odsłuchaj wolno: chocolate" [ref=f3e151]': Wolno
            - article [ref=f3e152]:
              - paragraph [ref=f3e153]: flamenco
              - paragraph [ref=f3e154]: "[flamenko]"
              - paragraph [ref=f3e155]: · · ·
              - generic [ref=f3e156]:
                - button "Pokaż znaczenie" [ref=f3e157]
                - 'button "Odsłuchaj normalnie: flamenco" [ref=f3e158]': Słuchaj
                - 'button "Odsłuchaj wolno: flamenco" [ref=f3e161]': Wolno
            - article [ref=f3e162]:
              - paragraph [ref=f3e163]: mercado
              - paragraph [ref=f3e164]: "[merkado]"
              - paragraph [ref=f3e165]: · · ·
              - generic [ref=f3e166]:
                - button "Pokaż znaczenie" [ref=f3e167]
                - 'button "Odsłuchaj normalnie: mercado" [ref=f3e168]': Słuchaj
                - 'button "Odsłuchaj wolno: mercado" [ref=f3e171]': Wolno
            - article [ref=f3e172]:
              - paragraph [ref=f3e173]: familia
              - paragraph [ref=f3e174]: "[familja]"
              - paragraph [ref=f3e175]: · · ·
              - generic [ref=f3e176]:
                - button "Pokaż znaczenie" [ref=f3e177]
                - 'button "Odsłuchaj normalnie: familia" [ref=f3e178]': Słuchaj
                - 'button "Odsłuchaj wolno: familia" [ref=f3e181]': Wolno
            - article [ref=f3e182]:
              - paragraph [ref=f3e183]: escuela
              - paragraph [ref=f3e184]: "[eskuela]"
              - paragraph [ref=f3e185]: · · ·
              - generic [ref=f3e186]:
                - button "Pokaż znaczenie" [ref=f3e187]
                - 'button "Odsłuchaj normalnie: escuela" [ref=f3e188]': Słuchaj
                - 'button "Odsłuchaj wolno: escuela" [ref=f3e191]': Wolno
            - article [ref=f3e192]:
              - paragraph [ref=f3e193]: gracias
              - paragraph [ref=f3e194]: "[grasjas]"
              - paragraph [ref=f3e195]: · · ·
              - generic [ref=f3e196]:
                - button "Pokaż znaczenie" [ref=f3e197]
                - 'button "Odsłuchaj normalnie: gracias" [ref=f3e198]': Słuchaj
                - 'button "Odsłuchaj wolno: gracias" [ref=f3e201]': Wolno
            - article [ref=f3e202]:
              - paragraph [ref=f3e203]: la cuenta, por favor
              - paragraph [ref=f3e204]: "[la kuenta, por fawor]"
              - paragraph [ref=f3e205]: · · ·
              - generic [ref=f3e206]:
                - button "Pokaż znaczenie" [ref=f3e207]
                - 'button "Odsłuchaj normalnie: la cuenta, por favor" [ref=f3e208]': Słuchaj
                - 'button "Odsłuchaj wolno: la cuenta, por favor" [ref=f3e211]': Wolno
            - article [ref=f3e212]:
              - paragraph [ref=f3e213]: el baño
              - paragraph [ref=f3e214]: "[el banio]"
              - paragraph [ref=f3e215]: · · ·
              - generic [ref=f3e216]:
                - button "Pokaż znaczenie" [ref=f3e217]
                - 'button "Odsłuchaj normalnie: el baño" [ref=f3e218]': Słuchaj
                - 'button "Odsłuchaj wolno: el baño" [ref=f3e221]': Wolno
            - article [ref=f3e222]:
              - paragraph [ref=f3e223]: el helado
              - paragraph [ref=f3e224]: "[el elado]"
              - paragraph [ref=f3e225]: · · ·
              - generic [ref=f3e226]:
                - button "Pokaż znaczenie" [ref=f3e227]
                - 'button "Odsłuchaj normalnie: el helado" [ref=f3e228]': Słuchaj
                - 'button "Odsłuchaj wolno: el helado" [ref=f3e231]': Wolno
            - article [ref=f3e232]:
              - paragraph [ref=f3e233]: la limonada
              - paragraph [ref=f3e234]: "[la limonada]"
              - paragraph [ref=f3e235]: · · ·
              - generic [ref=f3e236]:
                - button "Pokaż znaczenie" [ref=f3e237]
                - 'button "Odsłuchaj normalnie: la limonada" [ref=f3e238]': Słuchaj
                - 'button "Odsłuchaj wolno: la limonada" [ref=f3e241]': Wolno
            - article [ref=f3e242]:
              - paragraph [ref=f3e243]: el taxi
              - paragraph [ref=f3e244]: "[el taksi]"
              - paragraph [ref=f3e245]: · · ·
              - generic [ref=f3e246]:
                - button "Pokaż znaczenie" [ref=f3e247]
                - 'button "Odsłuchaj normalnie: el taxi" [ref=f3e248]': Słuchaj
                - 'button "Odsłuchaj wolno: el taxi" [ref=f3e251]': Wolno
            - article [ref=f3e252]:
              - paragraph [ref=f3e253]: la calle
              - paragraph [ref=f3e254]: "[la kaje]"
              - paragraph [ref=f3e255]: · · ·
              - generic [ref=f3e256]:
                - button "Pokaż znaczenie" [ref=f3e257]
                - 'button "Odsłuchaj normalnie: la calle" [ref=f3e258]': Słuchaj
                - 'button "Odsłuchaj wolno: la calle" [ref=f3e261]': Wolno
            - article [ref=f3e262]:
              - paragraph [ref=f3e263]: el museo
              - paragraph [ref=f3e264]: "[el museo]"
              - paragraph [ref=f3e265]: · · ·
              - generic [ref=f3e266]:
                - button "Pokaż znaczenie" [ref=f3e267]
                - 'button "Odsłuchaj normalnie: el museo" [ref=f3e268]': Słuchaj
                - 'button "Odsłuchaj wolno: el museo" [ref=f3e271]': Wolno
            - article [ref=f3e272]:
              - paragraph [ref=f3e273]: el regalo
              - paragraph [ref=f3e274]: "[el regalo]"
              - paragraph [ref=f3e275]: · · ·
              - generic [ref=f3e276]:
                - button "Pokaż znaczenie" [ref=f3e277]
                - 'button "Odsłuchaj normalnie: el regalo" [ref=f3e278]': Słuchaj
                - 'button "Odsłuchaj wolno: el regalo" [ref=f3e281]': Wolno
            - article [ref=f3e282]:
              - paragraph [ref=f3e283]: el mariachi
              - paragraph [ref=f3e284]: "[el marjaci]"
              - paragraph [ref=f3e285]: · · ·
              - generic [ref=f3e286]:
                - button "Pokaż znaczenie" [ref=f3e287]
                - 'button "Odsłuchaj normalnie: el mariachi" [ref=f3e288]': Słuchaj
                - 'button "Odsłuchaj wolno: el mariachi" [ref=f3e291]': Wolno
            - article [ref=f3e292]:
              - paragraph [ref=f3e293]: la piñata
              - paragraph [ref=f3e294]: "[la pinjata]"
              - paragraph [ref=f3e295]: · · ·
              - generic [ref=f3e296]:
                - button "Pokaż znaczenie" [ref=f3e297]
                - 'button "Odsłuchaj normalnie: la piñata" [ref=f3e298]': Słuchaj
                - 'button "Odsłuchaj wolno: la piñata" [ref=f3e301]': Wolno
            - article [ref=f3e302]:
              - paragraph [ref=f3e303]: el chile
              - paragraph [ref=f3e304]: "[el czile]"
              - paragraph [ref=f3e305]: · · ·
              - generic [ref=f3e306]:
                - button "Pokaż znaczenie" [ref=f3e307]
                - 'button "Odsłuchaj normalnie: el chile" [ref=f3e308]': Słuchaj
                - 'button "Odsłuchaj wolno: el chile" [ref=f3e311]': Wolno
            - article [ref=f3e312]:
              - paragraph [ref=f3e313]: la salsa
              - paragraph [ref=f3e314]: "[la salsa]"
              - paragraph [ref=f3e315]: · · ·
              - generic [ref=f3e316]:
                - button "Pokaż znaczenie" [ref=f3e317]
                - 'button "Odsłuchaj normalnie: la salsa" [ref=f3e318]': Słuchaj
                - 'button "Odsłuchaj wolno: la salsa" [ref=f3e321]': Wolno
      - region [ref=f3e322]:
        - generic [ref=f3e323]:
          - 'heading "Gra 2 Dopasuj pojęcia: Hiszpania i Meksyk" [level=2] [ref=f3e324]':
            - generic [ref=f3e325]: Gra 2
            - text: "Dopasuj pojęcia: Hiszpania i Meksyk"
          - generic [aria-hidden]: MEMO
          - paragraph [ref=f3e326]: "16 par: hiszpańskie słowo i polskie znaczenie. Najpierw fiszki powyżej, potem gra."
        - generic [ref=f3e327]:
          - group "Karty memory" [ref=f3e328]:
            - button "święto, impreza po polsku" [ref=f3e329]:
              - generic [ref=f3e330]: święto, impreza
              - generic [ref=f3e331]: po polsku
            - button "escuela po hiszpańsku" [ref=f3e332]:
              - generic [ref=f3e333]: escuela
              - generic [ref=f3e334]: po hiszpańsku
            - button "piramida po polsku" [ref=f3e335]:
              - generic [ref=f3e336]: piramida
              - generic [ref=f3e337]: po polsku
            - button "targ, bazar po polsku" [ref=f3e338]:
              - generic [ref=f3e339]: targ, bazar
              - generic [ref=f3e340]: po polsku
            - button "danie z ryżu po polsku" [ref=f3e341]:
              - generic [ref=f3e342]: danie z ryżu
              - generic [ref=f3e343]: po polsku
            - button "paella po hiszpańsku" [ref=f3e344]:
              - generic [ref=f3e345]: paella
              - generic [ref=f3e346]: po hiszpańsku
            - button "guitarra po hiszpańsku" [ref=f3e347]:
              - generic [ref=f3e348]: guitarra
              - generic [ref=f3e349]: po hiszpańsku
            - button "sombrero po hiszpańsku" [ref=f3e350]:
              - generic [ref=f3e351]: sombrero
              - generic [ref=f3e352]: po hiszpańsku
            - button "fiesta po hiszpańsku" [ref=f3e353]:
              - generic [ref=f3e354]: fiesta
              - generic [ref=f3e355]: po hiszpańsku
            - button "plaża po polsku" [ref=f3e356]:
              - generic [ref=f3e357]: plaża
              - generic [ref=f3e358]: po polsku
            - button "chocolate po hiszpańsku" [ref=f3e359]:
              - generic [ref=f3e360]: chocolate
              - generic [ref=f3e361]: po hiszpańsku
            - button "kapelusz po polsku" [ref=f3e362]:
              - generic [ref=f3e363]: kapelusz
              - generic [ref=f3e364]: po polsku
            - button "playa po hiszpańsku" [ref=f3e365]:
              - generic [ref=f3e366]: playa
              - generic [ref=f3e367]: po hiszpańsku
            - button "czekolada po polsku" [ref=f3e368]:
              - generic [ref=f3e369]: czekolada
              - generic [ref=f3e370]: po polsku
            - button "taco po hiszpańsku" [ref=f3e371]:
              - generic [ref=f3e372]: taco
              - generic [ref=f3e373]: po hiszpańsku
            - button "flamenco po hiszpańsku" [ref=f3e374]:
              - generic [ref=f3e375]: flamenco
              - generic [ref=f3e376]: po hiszpańsku
            - button "toro po hiszpańsku" [ref=f3e377]:
              - generic [ref=f3e378]: toro
              - generic [ref=f3e379]: po hiszpańsku
            - button "cactus po hiszpańsku" [ref=f3e380]:
              - generic [ref=f3e381]: cactus
              - generic [ref=f3e382]: po hiszpańsku
            - button "familia po hiszpańsku" [ref=f3e383]:
              - generic [ref=f3e384]: familia
              - generic [ref=f3e385]: po hiszpańsku
            - button "tortilla z nadzieniem po polsku" [ref=f3e386]:
              - generic [ref=f3e387]: tortilla z nadzieniem
              - generic [ref=f3e388]: po polsku
            - button "gitara po polsku" [ref=f3e389]:
              - generic [ref=f3e390]: gitara
              - generic [ref=f3e391]: po polsku
            - button "gracias po hiszpańsku" [ref=f3e392]:
              - generic [ref=f3e393]: gracias
              - generic [ref=f3e394]: po hiszpańsku
            - button "pirámide po hiszpańsku" [ref=f3e395]:
              - generic [ref=f3e396]: pirámide
              - generic [ref=f3e397]: po hiszpańsku
            - button "grzechotki po polsku" [ref=f3e398]:
              - generic [ref=f3e399]: grzechotki
              - generic [ref=f3e400]: po polsku
            - button "dziękuję po polsku" [ref=f3e401]:
              - generic [ref=f3e402]: dziękuję
              - generic [ref=f3e403]: po polsku
            - button "kaktus po polsku" [ref=f3e404]:
              - generic [ref=f3e405]: kaktus
              - generic [ref=f3e406]: po polsku
            - button "maracas po hiszpańsku" [ref=f3e407]:
              - generic [ref=f3e408]: maracas
              - generic [ref=f3e409]: po hiszpańsku
            - button "rodzina po polsku" [ref=f3e410]:
              - generic [ref=f3e411]: rodzina
              - generic [ref=f3e412]: po polsku
            - button "byk po polsku" [ref=f3e413]:
              - generic [ref=f3e414]: byk
              - generic [ref=f3e415]: po polsku
            - button "taniec andaluzyjski po polsku" [ref=f3e416]:
              - generic [ref=f3e417]: taniec andaluzyjski
              - generic [ref=f3e418]: po polsku
            - button "mercado po hiszpańsku" [ref=f3e419]:
              - generic [ref=f3e420]: mercado
              - generic [ref=f3e421]: po hiszpańsku
            - button "szkoła po polsku" [ref=f3e422]:
              - generic [ref=f3e423]: szkoła
              - generic [ref=f3e424]: po polsku
          - status [ref=f3e425]: "Znajdź 16 par: hiszpańskie słowo i polskie znaczenie."
          - paragraph [ref=f3e426]:
            - generic [ref=f3e427]: "Próby: 0 · Pary: 0/16"
            - button "Nowe rozdanie" [ref=f3e428]
      - region [ref=f3e429]:
        - generic [ref=f3e430]:
          - heading "Gra 3 Zagadki językowe" [level=2] [ref=f3e431]:
            - generic [ref=f3e432]: Gra 3
            - text: Zagadki językowe
          - generic [aria-hidden]: MISTERIO
          - paragraph [ref=f3e433]: Idiomy, fałszywi przyjaciele i meksykańskie „jutro, które nigdy nie nadchodzi”.
        - generic [ref=f3e435]:
          - paragraph [ref=f3e436]: Naciśnij start. Na każde pytanie masz 25 sekund.
          - paragraph [ref=f3e437]: "Rekord sali: nikt jeszcze nie grał. Bądź pierwszy!"
          - status [ref=f3e438]
          - button "Start quizu" [ref=f3e439]
      - region [ref=f3e440]:
        - generic [ref=f3e441]:
          - heading "Słowa 2 Czytanki z lektorem" [level=2] [ref=f3e442]:
            - generic [ref=f3e443]: Słowa 2
            - text: Czytanki z lektorem
          - generic [aria-hidden]: LEE
          - paragraph [ref=f3e444]: "Dwie scenki z życia: restauracja i fiesta. Całość, zdanie po zdaniu, z tłumaczeniem."
        - generic [ref=f3e445]:
          - article [ref=f3e446]:
            - heading "W restauracji (Meksyk)" [level=3] [ref=f3e447]
            - generic [ref=f3e448]:
              - button "Czytaj całość" [ref=f3e449]
              - button "Pokaż tłumaczenie" [ref=f3e452]
            - list [ref=f3e453]:
              - listitem [ref=f3e454]:
                - paragraph [ref=f3e455]: Buenas tardes. ¿Mesa para dos?
                - 'button "Odsłuchaj zdanie: Buenas tardes. ¿Mesa para dos?" [ref=f3e456]': Zdanie
              - listitem [ref=f3e459]:
                - paragraph [ref=f3e460]: Sí, por favor. ¿Tienen tacos al pastor?
                - 'button "Odsłuchaj zdanie: Sí, por favor. ¿Tienen tacos al pastor?" [ref=f3e461]': Zdanie
              - listitem [ref=f3e464]:
                - paragraph [ref=f3e465]: Claro que sí. ¿Pica mucho?
                - 'button "Odsłuchaj zdanie: Claro que sí. ¿Pica mucho?" [ref=f3e466]': Zdanie
              - listitem [ref=f3e469]:
                - paragraph [ref=f3e470]: Un poco. Con limón pica menos.
                - 'button "Odsłuchaj zdanie: Un poco. Con limón pica menos." [ref=f3e471]': Zdanie
              - listitem [ref=f3e474]:
                - paragraph [ref=f3e475]: Entonces, dos tacos y una limonada.
                - 'button "Odsłuchaj zdanie: Entonces, dos tacos y una limonada." [ref=f3e476]': Zdanie
              - listitem [ref=f3e479]:
                - paragraph [ref=f3e480]: ¿Algo más? ¿Un postre?
                - 'button "Odsłuchaj zdanie: ¿Algo más? ¿Un postre?" [ref=f3e481]': Zdanie
              - listitem [ref=f3e484]:
                - paragraph [ref=f3e485]: No, gracias. La cuenta, por favor.
                - 'button "Odsłuchaj zdanie: No, gracias. La cuenta, por favor." [ref=f3e486]': Zdanie
            - paragraph [ref=f3e489]: "Trudne słowa: pica [pika] — jest ostre (od piec); la cuenta [la kuenta] — rachunek; el postre [el postre] — deser."
          - article [ref=f3e490]:
            - heading "Na fieście (Hiszpania)" [level=3] [ref=f3e491]
            - generic [ref=f3e492]:
              - button "Czytaj całość" [ref=f3e493]
              - button "Pokaż tłumaczenie" [ref=f3e496]
            - list [ref=f3e497]:
              - listitem [ref=f3e498]:
                - paragraph [ref=f3e499]: ¡Hola! ¿Es tu primera Tomatina?
                - 'button "Odsłuchaj zdanie: ¡Hola! ¿Es tu primera Tomatina?" [ref=f3e500]': Zdanie
              - listitem [ref=f3e503]:
                - paragraph [ref=f3e504]: Sí. ¿A qué hora empieza?
                - 'button "Odsłuchaj zdanie: Sí. ¿A qué hora empieza?" [ref=f3e505]': Zdanie
              - listitem [ref=f3e508]:
                - paragraph [ref=f3e509]: A las once. Ponte esta camiseta blanca.
                - 'button "Odsłuchaj zdanie: A las once. Ponte esta camiseta blanca." [ref=f3e510]': Zdanie
              - listitem [ref=f3e513]:
                - paragraph [ref=f3e514]: ¿Y después hay flamenco?
                - 'button "Odsłuchaj zdanie: ¿Y después hay flamenco?" [ref=f3e515]': Zdanie
              - listitem [ref=f3e518]:
                - paragraph [ref=f3e519]: Por la noche, en la plaza. ¡Olé!
                - 'button "Odsłuchaj zdanie: Por la noche, en la plaza. ¡Olé!" [ref=f3e520]': Zdanie
              - listitem [ref=f3e523]:
                - paragraph [ref=f3e524]: ¡Qué bien! ¿Vamos juntos?
                - 'button "Odsłuchaj zdanie: ¡Qué bien! ¿Vamos juntos?" [ref=f3e525]': Zdanie
              - listitem [ref=f3e528]:
                - paragraph [ref=f3e529]: ¡Vale! Hasta luego.
                - 'button "Odsłuchaj zdanie: ¡Vale! Hasta luego." [ref=f3e530]': Zdanie
            - paragraph [ref=f3e533]: "Trudne słowa: la camiseta [la kamiseta] — koszulka; la plaza [la plasa] — plac; vale [bale] — dobra, okej."
      - region [ref=f3e534]:
        - generic [ref=f3e535]:
          - heading "Słowa 3 Jak to przeczytać" [level=2] [ref=f3e536]:
            - generic [ref=f3e537]: Słowa 3
            - text: Jak to przeczytać
          - generic [aria-hidden]: SONIDO
          - paragraph [ref=f3e538]: 7 zasad wymowy z przykładami audio — żeby odczytać szyld, menu i rozkład.
        - generic [ref=f3e539]:
          - article [ref=f3e540]:
            - generic [ref=f3e544]:
              - heading "H jest nieme" [level=3] [ref=f3e545]
              - paragraph [ref=f3e546]:
                - text: "Przykład: hotel"
                - generic [ref=f3e547]: "[otel]"
              - paragraph [ref=f3e548]: "Nigdy go nie wymawiaj: hola brzmi ola."
              - 'button "Odsłuchaj przykład: hotel" [ref=f3e549]': Odsłuchaj
          - article [ref=f3e552]:
            - generic [ref=f3e556]:
              - heading "J brzmi jak polskie ch" [level=3] [ref=f3e557]
              - paragraph [ref=f3e558]:
                - text: "Przykład: jamón"
                - generic [ref=f3e559]: "[chamon]"
              - paragraph [ref=f3e560]: "Szynka: jamón. Gardłowe, jak chrząkanie."
              - 'button "Odsłuchaj przykład: jamón" [ref=f3e561]': Odsłuchaj
          - article [ref=f3e564]:
            - generic [ref=f3e568]:
              - heading "LL brzmi jak j" [level=3] [ref=f3e569]
              - paragraph [ref=f3e570]:
                - text: "Przykład: calle"
                - generic [ref=f3e571]: "[kaje]"
              - paragraph [ref=f3e572]: "Ulica: calle. Tak samo w słowie paella."
              - 'button "Odsłuchaj przykład: calle" [ref=f3e573]': Odsłuchaj
          - article [ref=f3e576]:
            - generic [ref=f3e580]:
              - heading "Ñ to miękkie ni" [level=3] [ref=f3e581]
              - paragraph [ref=f3e582]:
                - text: "Przykład: niño"
                - generic [ref=f3e583]: "[ninio]"
              - paragraph [ref=f3e584]: "Dziecko: niño. Kreseczka zmienia wszystko."
              - 'button "Odsłuchaj przykład: niño" [ref=f3e585]': Odsłuchaj
          - article [ref=f3e588]:
            - generic [ref=f3e592]:
              - heading "RR jest drżące" [level=3] [ref=f3e593]
              - paragraph [ref=f3e594]:
                - text: "Przykład: perro"
                - generic [ref=f3e595]: "[perro (wibrujące r)]"
              - paragraph [ref=f3e596]: "Pies: perro. Jedno r to pero (ale) — uważaj!"
              - 'button "Odsłuchaj przykład: perro" [ref=f3e597]': Odsłuchaj
          - article [ref=f3e600]:
            - generic [ref=f3e604]:
              - 'heading "C i Z: Hiszpania sepleni, Meksyk nie" [level=3] [ref=f3e605]'
              - paragraph [ref=f3e606]:
                - text: "Przykład: gracias"
                - generic [ref=f3e607]: "[graθjas (ES) / grasjas (MX)]"
              - paragraph [ref=f3e608]: W Madrycie usłyszysz th, w Meksyku zwykłe s.
              - 'button "Odsłuchaj przykład: gracias" [ref=f3e609]': Odsłuchaj
          - article [ref=f3e612]:
            - generic [ref=f3e616]:
              - heading "Akcent pisany pokazuje stres" [level=3] [ref=f3e617]
              - paragraph [ref=f3e618]:
                - text: "Przykład: música"
                - generic [ref=f3e619]: "[MUsika]"
              - paragraph [ref=f3e620]: "Kreska mówi, którą sylabę zaakcentować. Bez kreski akcent pada zwykle na przedostatnią: taco."
              - 'button "Odsłuchaj przykład: música" [ref=f3e621]': Odsłuchaj
      - region [ref=f3e624]:
        - generic [ref=f3e625]:
          - heading "Gra 4 Łamańce językowe (trabalenguas)" [level=2] [ref=f3e626]:
            - generic [ref=f3e627]: Gra 4
            - text: Łamańce językowe (trabalenguas)
          - generic [aria-hidden]: RITMO
          - paragraph [ref=f3e628]: "Dwa łamańce z lektorem: wariant iberyjski i meksykański."
        - generic [ref=f3e629]:
          - article [ref=f3e630]:
            - paragraph [ref=f3e631]: "iberyjski · poziom: średni"
            - paragraph [ref=f3e632]: „El perro de San Roque no tiene rabo porque Ramón Ramírez se lo ha cortado.”
            - paragraph [ref=f3e633]: Pies świętego Rocha nie ma ogona, bo obciął mu go Ramón Ramírez. Klasyk ćwiczący mocne, drżące r.
            - button "Odsłuchaj wolno" [ref=f3e634]
          - article [ref=f3e637]:
            - paragraph [ref=f3e638]: "meksykański · poziom: zaawansowany"
            - paragraph [ref=f3e639]: „Tres tristes tigres tragaban trigo en un trigal en tres tristes trastos.”
            - paragraph [ref=f3e640]: Trzy smutne tygrysy połykały pszenicę na pszenicznym polu w trzech smutnych naczyniach.
            - button "Odsłuchaj wolno" [ref=f3e641]
      - region [ref=f3e644]:
        - generic [ref=f3e645]:
          - heading "Słowniczek Cały słowniczek porównawczy" [level=2] [ref=f3e646]:
            - generic [ref=f3e647]: Słowniczek
            - text: Cały słowniczek porównawczy
          - generic [aria-hidden]: PALABRAS
          - paragraph [ref=f3e648]: "Osiem par: to samo pojęcie po madrycku i po meksykańsku."
        - generic [ref=f3e649]:
          - generic [ref=f3e650]:
            - generic [ref=f3e651]:
              - paragraph [ref=f3e652]: el coche
              - paragraph [ref=f3e653]: Hiszpania
              - 'button "Odsłuchaj: el coche" [ref=f3e654]': ES
            - generic [ref=f3e657]: "znaczysamochóda w Meksyku:"
            - generic [ref=f3e658]:
              - paragraph [ref=f3e659]: el carro
              - paragraph [ref=f3e660]: Meksyk
              - 'button "Odsłuchaj: el carro" [ref=f3e661]': MX
          - generic [ref=f3e664]:
            - generic [ref=f3e665]:
              - paragraph [ref=f3e666]: el ordenador
              - paragraph [ref=f3e667]: Hiszpania
              - 'button "Odsłuchaj: el ordenador" [ref=f3e668]': ES
            - generic [ref=f3e671]: "znaczykomputera w Meksyku:"
            - generic [ref=f3e672]:
              - paragraph [ref=f3e673]: la computadora
              - paragraph [ref=f3e674]: Meksyk
              - 'button "Odsłuchaj: la computadora" [ref=f3e675]': MX
          - generic [ref=f3e678]:
            - generic [ref=f3e679]:
              - paragraph [ref=f3e680]: el zumo
              - paragraph [ref=f3e681]: Hiszpania
              - 'button "Odsłuchaj: el zumo" [ref=f3e682]': ES
            - generic [ref=f3e685]: "znaczysoka w Meksyku:"
            - generic [ref=f3e686]:
              - paragraph [ref=f3e687]: el jugo
              - paragraph [ref=f3e688]: Meksyk
              - 'button "Odsłuchaj: el jugo" [ref=f3e689]': MX
          - generic [ref=f3e692]:
            - generic [ref=f3e693]:
              - paragraph [ref=f3e694]: el melocotón
              - paragraph [ref=f3e695]: Hiszpania
              - 'button "Odsłuchaj: el melocotón" [ref=f3e696]': ES
            - generic [ref=f3e699]: "znaczybrzoskwiniaa w Meksyku:"
            - generic [ref=f3e700]:
              - paragraph [ref=f3e701]: el durazno
              - paragraph [ref=f3e702]: Meksyk
              - 'button "Odsłuchaj: el durazno" [ref=f3e703]': MX
          - generic [ref=f3e706]:
            - generic [ref=f3e707]:
              - paragraph [ref=f3e708]: la patata
              - paragraph [ref=f3e709]: Hiszpania
              - 'button "Odsłuchaj: la patata" [ref=f3e710]': ES
            - generic [ref=f3e713]: "znaczyziemniaka w Meksyku:"
            - generic [ref=f3e714]:
              - paragraph [ref=f3e715]: la papa
              - paragraph [ref=f3e716]: Meksyk
              - 'button "Odsłuchaj: la papa" [ref=f3e717]': MX
          - generic [ref=f3e720]:
            - generic [ref=f3e721]:
              - paragraph [ref=f3e722]: las gafas
              - paragraph [ref=f3e723]: Hiszpania
              - 'button "Odsłuchaj: las gafas" [ref=f3e724]': ES
            - generic [ref=f3e727]: "znaczyokularya w Meksyku:"
            - generic [ref=f3e728]:
              - paragraph [ref=f3e729]: los lentes
              - paragraph [ref=f3e730]: Meksyk
              - 'button "Odsłuchaj: los lentes" [ref=f3e731]': MX
          - generic [ref=f3e734]:
            - generic [ref=f3e735]:
              - paragraph [ref=f3e736]: el autobús
              - paragraph [ref=f3e737]: Hiszpania
              - 'button "Odsłuchaj: el autobús" [ref=f3e738]': ES
            - generic [ref=f3e741]: "znaczyautobusa w Meksyku:"
            - generic [ref=f3e742]:
              - paragraph [ref=f3e743]: el camión
              - paragraph [ref=f3e744]: Meksyk
              - 'button "Odsłuchaj: el camión" [ref=f3e745]': MX
          - generic [ref=f3e748]:
            - generic [ref=f3e749]:
              - paragraph [ref=f3e750]: el piso
              - paragraph [ref=f3e751]: Hiszpania
              - 'button "Odsłuchaj: el piso" [ref=f3e752]': ES
            - generic [ref=f3e755]: "znaczymieszkaniea w Meksyku:"
            - generic [ref=f3e756]:
              - paragraph [ref=f3e757]: el departamento
              - paragraph [ref=f3e758]: Meksyk
              - 'button "Odsłuchaj: el departamento" [ref=f3e759]': MX
      - region [ref=f3e762]:
        - generic [ref=f3e763]:
          - heading "Wyniki Najlepsze wyniki w sali" [level=2] [ref=f3e764]:
            - generic [ref=f3e765]: Wyniki
            - text: Najlepsze wyniki w sali
          - generic [aria-hidden]: TROFEO
        - paragraph [ref=f3e766]: Brak rekordów — zagraj w dowolny quiz, a wynik pojawi się tutaj.
  - contentinfo [ref=f3e767]:
    - generic [ref=f3e768]:
      - navigation "Pawilony" [ref=f3e769]:
        - heading "Pawilony" [level=2] [ref=f3e770]
        - list [ref=f3e771]:
          - listitem [ref=f3e772]:
            - link "Pawilon Hiszpanii" [ref=f3e773] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/hiszpania/
          - listitem [ref=f3e774]:
            - 'link "Quiz: Hiszpania" [ref=f3e775] [cursor=pointer]':
              - /url: /dzien-obcych-jezykow/hiszpania/#quiz
          - listitem [ref=f3e776]:
            - link "Pawilon Meksyku" [ref=f3e777] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/meksyk/
          - listitem [ref=f3e778]:
            - 'link "Quiz: Meksyk" [ref=f3e779] [cursor=pointer]':
              - /url: /dzien-obcych-jezykow/meksyk/#quiz
      - navigation "Gry i zabawy" [ref=f3e780]:
        - heading "Gry i zabawy" [level=2] [ref=f3e781]
        - list [ref=f3e782]:
          - listitem [ref=f3e783]:
            - link "Strona główna i scenariusz lekcji" [ref=f3e784] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/
          - listitem [ref=f3e785]:
            - link "Fiszki, dopasowanie, zagadki" [ref=f3e786] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/gry/
          - listitem [ref=f3e787]:
            - link "Rekordy sali" [ref=f3e788] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/gry/#h-rek
      - generic [ref=f3e789]:
        - heading "Materiały" [level=2] [ref=f3e790]
        - list [ref=f3e791]:
          - listitem [ref=f3e792]:
            - link "Mapa strony (sitemap.xml)" [ref=f3e793] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/sitemap.xml
          - listitem [ref=f3e794]:
            - link "Wróć na górę strony" [ref=f3e795] [cursor=pointer]:
              - /url: "#tresc"
    - paragraph [ref=f3e796]: © 2026 Dzień Języków Obcych — materiał na jedną lekcję o Hiszpanii i Meksyku.
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
  14 |       expect(header.height).toBeLessThan(105);
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
> 52 |     expect(broken).toEqual([]);
     |                    ^ Error: expect(received).toEqual(expected) // deep equality
  53 |   }
  54 | });
  55 | 
```