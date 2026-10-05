# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.js >> layout and accessibility: meksyk/
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
        - generic [ref=e24]:
          - paragraph [ref=e25]:
            - 'img "Flaga: Meksyk" [ref=e26]'
          - paragraph [ref=e28]:
            - generic [ref=e29]: Meksyk · ¿Qué onda? ¡Viva México!
          - heading "Meksyk — kraj piramid, mariachi i Dnia Zmarłych" [level=1] [ref=e30]
          - paragraph [ref=e31]: "Od miast Majów w dżungli Jukatanu po gwarne Zócalo w stolicy. Poznaj kraj, w którym czekolada się urodziła, zmarłych wita się fiestą, a na powitanie mówi się: ¿qué onda?"
          - generic [ref=e32]:
            - link "Sprawdź się w quizie" [ref=e33] [cursor=pointer]:
              - /url: "#quiz"
            - link "Posłuchaj zwrotów" [ref=e34] [cursor=pointer]:
              - /url: "#zwroty"
      - region "Spis treści pawilonu" [ref=e35]:
        - heading "Mapa Spis treści pawilonu" [level=2] [ref=e37]:
          - generic [ref=e38]: Mapa
          - text: Spis treści pawilonu
        - list [ref=e39]:
          - listitem [ref=e40]:
            - link "Geografia w pigułce" [ref=e41] [cursor=pointer]:
              - /url: "#geografia"
              - generic [aria-hidden] [ref=e42]: "1"
              - text: Geografia w pigułce
          - listitem [ref=e43]:
            - link "Historia na osi czasu" [ref=e44] [cursor=pointer]:
              - /url: "#historia"
              - generic [aria-hidden] [ref=e45]: "2"
              - text: Historia na osi czasu
          - listitem [ref=e46]:
            - link "Święta i zwyczaje" [ref=e47] [cursor=pointer]:
              - /url: "#swieta"
              - generic [aria-hidden] [ref=e48]: "3"
              - text: Święta i zwyczaje
          - listitem [ref=e49]:
            - link "Kuchnia" [ref=e50] [cursor=pointer]:
              - /url: "#kuchnia"
              - generic [aria-hidden] [ref=e51]: "4"
              - text: Kuchnia
          - listitem [ref=e52]:
            - link "Muzyka i taniec" [ref=e53] [cursor=pointer]:
              - /url: "#muzyka"
              - generic [aria-hidden] [ref=e54]: "5"
              - text: Muzyka i taniec
          - listitem [ref=e55]:
            - link "Zabytki i symbole" [ref=e56] [cursor=pointer]:
              - /url: "#zabytki"
              - generic [aria-hidden] [ref=e57]: "6"
              - text: Zabytki i symbole
          - listitem [ref=e58]:
            - link "Język w pigułce" [ref=e59] [cursor=pointer]:
              - /url: "#jezyk"
              - generic [aria-hidden] [ref=e60]: "7"
              - text: Język w pigułce
          - listitem [ref=e61]:
            - link "Zwroty z głośnikiem" [ref=e62] [cursor=pointer]:
              - /url: "#zwroty"
              - generic [aria-hidden] [ref=e63]: "8"
              - text: Zwroty z głośnikiem
          - listitem [ref=e64]:
            - 'link "Quiz: Meksyk" [ref=e65] [cursor=pointer]':
              - /url: "#quiz"
              - generic [aria-hidden] [ref=e66]: "9"
              - text: "Quiz: Meksyk"
      - generic [ref=e67]:
        - generic [ref=e68]:
          - heading "01 Geografia w pigułce" [level=2] [ref=e69]:
            - generic [ref=e70]: "01"
            - text: Geografia w pigułce
          - generic [aria-hidden]: MAPA
          - paragraph [ref=e71]: "Meksyk łączy Amerykę Północną z Środkową: pustynie na północy, wulkany w centrum i tropikalną dżunglę na południu."
        - generic [ref=e72]:
          - paragraph [ref=e73]: "Stolicą jest Ciudad de México — jedna z największych metropolii świata, zbudowana na miejscu azteckiego Tenochtitlánu, na wysokości 2240 m n.p.m. Półwysep Jukatan kryje miasta Majów i podziemne studnie cenotes, a wybrzeża oblewają dwa oceany: Spokojny i Atlantyk (Morze Karaibskie)."
          - paragraph [ref=e74]: Przez środek kraju biegnie wulkaniczny Transmeksykański Pas Wulkaniczny z czynnym Popocatépetlem, którego Aztekowie nazywali Dymiącą Górą. Na pustyni Chihuahua rosną gigantyczne kaktusy saguaro, a w jeziorach Xochimilco żyje aksolotl — płaz potrafiący odbudować serce.
          - paragraph [ref=e75]: "Meksyk to też królestwo kukurydzy: uprawia się tu 60 jej odmian. Z kukurydzy powstają tortilla, tacos, tamales i pozole — podstawa kuchni wpisanej na listę UNESCO."
        - list [ref=e76]:
          - listitem [ref=e77]:
            - generic [ref=e78]: 2 mln km²
            - text: powierzchnia — 4 razy Polska
          - listitem [ref=e79]:
            - generic [ref=e80]: Ciudad de México
            - text: stolica, 22 mln w metropolii
          - listitem [ref=e81]:
            - generic [ref=e82]: peso meksykańskie
            - text: waluta (znak $ też!)
          - listitem [ref=e83]:
            - generic [ref=e84]: 2 oceany
            - text: Spokojny i Atlantycki
      - generic [ref=e85]:
        - generic [ref=e86]:
          - heading "02 Historia na osi czasu" [level=2] [ref=e87]:
            - generic [ref=e88]: "02"
            - text: Historia na osi czasu
          - generic [aria-hidden]: TIEMPO
          - paragraph [ref=e89]: Osiem przystanków — od początków po współczesność.
        - list [ref=e90]:
          - listitem [ref=e91]:
            - text: ok. 1200 p.n.e.
            - heading "Olmekowie i pierwsze miasta" [level=3] [ref=e92]
            - paragraph [ref=e93]: Na wybrzeżu Zatoki Meksykańskiej powstaje pierwsza wielka cywilizacja Mezoameryki — słynna z gigantycznych kamiennych głów.
          - listitem [ref=e94]:
            - text: 250–900 n.e.
            - heading "Klasyczni Majowie" [level=3] [ref=e95]
            - paragraph [ref=e96]: Miasta Chichén Itzá, Palenque i Uxmal. Kalendarz dokładniejszy niż europejski, pismo hieroglificzne, piramidy-schody do nieba.
          - listitem [ref=e97]:
            - text: "1325"
            - heading "Tenochtitlán" [level=3] [ref=e98]
            - paragraph [ref=e99]: Aztekowie budują stolicę na jeziorze Texcoco — miasto-kanały większe niż ówczesny Londyn. Orzeł na kaktusie z ich legendy jest dziś w godle Meksyku.
          - listitem [ref=e100]:
            - text: 1519–1521
            - heading "Konkwista Cortésa" [level=3] [ref=e101]
            - paragraph [ref=e102]: Hiszpanie oblegają i zdobywają Tenochtitlán. Na ruinach wyrasta Nowa Hiszpania — stolica imperium kolonialnego.
          - listitem [ref=e103]:
            - text: 1810–1821
            - heading "Niepodległość" [level=3] [ref=e104]
            - paragraph [ref=e105]: Ksiądz Hidalgo wzywa do powstania słynnym Grito de Dolores. Meksyk staje się niepodległy; 16 września to święto narodowe.
          - listitem [ref=e106]:
            - text: "1862"
            - heading "Puebla — Cinco de Mayo" [level=3] [ref=e107]
            - paragraph [ref=e108]: Meksykanie pokonują armię francuską pod Pueblą. Rocznica 5 maja to dziś wielka fiesta — także w USA.
          - listitem [ref=e109]:
            - text: 1910–1920
            - heading "Rewolucja meksykańska" [level=3] [ref=e110]
            - paragraph [ref=e111]: Zapata i Villa walczą o ziemię dla chłopów. Muraliści (Rivera, Orozco) malują historię kraju na ścianach pałaców.
          - listitem [ref=e112]:
            - text: 1968 / dziś
            - heading "Igrzyska i współczesność" [level=3] [ref=e113]
            - paragraph [ref=e114]: Olimpiada w Meksyku (1968), mundial (1970, 1986, 2026), boom kuchni i kina meksykańskiego na świecie.
      - generic [ref=e115]:
        - generic [ref=e116]:
          - heading "03 Święta i zwyczaje" [level=2] [ref=e117]:
            - generic [ref=e118]: "03"
            - text: Święta i zwyczaje
          - generic [aria-hidden]: FIESTA
          - paragraph [ref=e119]: Pięć świąt, które trzeba znać.
        - generic [ref=e120]:
          - article [ref=e121]:
            - heading "Día de Muertos — 1–2 listopada" [level=3] [ref=e126]
            - figure "Fot. Luciernaga3, CC BY-SA 4.0, via Wikimedia Commons" [ref=e128]:
              - img "Día de Muertos — 1–2 listopada" [ref=e129]
            - paragraph [ref=e131]: "Najpiękniejsze święto Meksyku: rodziny budują kolorowe ołtarzyki (ofrendas) ze zdjęciami, jedzeniem i nagietkami, by dusze bliskich wróciły w gości. Parada katrin (Catrinas) w stolicy, chleb pan de muerto. To święto życia, nie strachu."
          - article [ref=e132]:
            - heading "Las Posadas — 16–24 grudnia" [level=3] [ref=e137]
            - figure "Fot. George Louis, CC BY-SA 3.0, via Wikimedia Commons (1961)" [ref=e139]:
              - img "Las Posadas — 16–24 grudnia" [ref=e140]
            - paragraph [ref=e142]: "Dziewięć wieczorów kolędowania: procesje z lampionami odtwarzają poszukiwanie noclegu przez Marię i Józefa. Finał to rozbijanie gwiaździstej piñaty pełnej owoców i słodyczy."
          - article [ref=e143]:
            - heading "Guelaguetza — Oaxaca, lipiec" [level=3] [ref=e148]
            - paragraph [ref=e149]: "Festiwal rdzennych ludów stanu Oaxaca: tańce w haftowanych strojach, muzyka bandas, a tancerze rzucają publiczności ananasy i chleb — dar wzajemności (guelaguetza)."
          - article [ref=e150]:
            - heading "Cinco de Mayo — 5 maja" [level=3] [ref=e155]
            - paragraph [ref=e156]: Rocznica zwycięstwa pod Pueblą (1862). Parady wojskowe, mariachi i mole poblano — nie mylić z Dniem Niepodległości (16 września)!
          - article [ref=e157]:
            - heading "Dzień Matki Boskiej z Guadalupe — 12 grudnia" [level=3] [ref=e162]
            - paragraph [ref=e163]: "Największa pielgrzymka Ameryki: miliony wiernych idą do bazyliki w stolicy. Poprzedzają ją całonocne śpiewy (Las Mañanitas) i tańce matachines."
      - generic [ref=e164]:
        - generic [ref=e165]:
          - heading "04 Kuchnia" [level=2] [ref=e166]:
            - generic [ref=e167]: "04"
            - text: Kuchnia
          - generic [aria-hidden]: SABOR
          - paragraph [ref=e168]: Pięć smaków Meksyku — nazwę każdej potrawy odtworzysz z lektorem.
        - generic [ref=e169]:
          - article [ref=e170]:
            - heading "Tacos al pastor" [level=3] [ref=e175]
            - figure "Fot. City Foodsters, CC BY 2.0, via Wikimedia Commons" [ref=e177]:
              - img "Tacos al pastor" [ref=e178]
            - paragraph [ref=e180]: Kukurydziana tortilla, wieprzowina z rożna (pamiątka po libańskich imigrantach!), ananas, cebula, kolendra i salsa. Jedzone na stojąco, najlepiej po północy.
            - 'button "Powiedz nazwę potrawy: Tacos al pastor" [ref=e181]': Powiedz nazwę
          - article [ref=e184]:
            - heading "Mole poblano" [level=3] [ref=e189]
            - paragraph [ref=e190]: "Gęsty sos z czekolady, chili i przypraw do indyka. Legenda: wymyśliły go zakonnice z Puebli. Ponad 20 składników, godziny gotowania."
            - 'button "Powiedz nazwę potrawy: Mole poblano" [ref=e191]': Powiedz nazwę
          - article [ref=e194]:
            - heading "Guacamole" [level=3] [ref=e199]
            - paragraph [ref=e200]: Rozgniecione awokado z limonką, cebulą i kolendrą. Robi się je na świeżo, tuż przed podaniem — z chipsami totopos.
            - 'button "Powiedz nazwę potrawy: Guacamole" [ref=e201]': Powiedz nazwę
          - article [ref=e204]:
            - heading "Tamales" [level=3] [ref=e209]
            - paragraph [ref=e210]: "Kukurydziane ciasto z nadzieniem, gotowane w liściach kukurydzy lub bananowca. Świąteczny rytuał: cała rodzina lepi setki tamales (tamalada)."
            - 'button "Powiedz nazwę potrawy: Tamales" [ref=e211]': Powiedz nazwę
          - article [ref=e214]:
            - heading "Pozole i elote" [level=3] [ref=e219]
            - paragraph [ref=e220]: Sycąca zupa z hominy (wielkiej kukurydzy) oraz pieczona kukurydza elote z majonezem, serem cotija i chili — królowa ulicznych straganów.
            - 'button "Powiedz nazwę potrawy: Pozole i elote" [ref=e221]': Powiedz nazwę
      - generic [ref=e224]:
        - generic [ref=e225]:
          - heading "05 Muzyka i taniec" [level=2] [ref=e226]:
            - generic [ref=e227]: "05"
            - text: Muzyka i taniec
          - generic [aria-hidden]: RITMO
          - paragraph [ref=e228]: Czym żyje ulica i fiesta.
        - generic [ref=e229]:
          - article [ref=e230]:
            - heading "Mariachi" [level=3] [ref=e235]
            - figure "Fot. José Luiz, CC BY-SA 4.0, via Wikimedia Commons" [ref=e237]:
              - img "Mariachi" [ref=e238]
            - paragraph [ref=e240]: "Skrzypce, trąbki, gitary i wielkie gitarony. Muzycy w haftowanych strojach charro śpiewają o miłości i ojczyźnie. Klasyki: La Bamba, Cielito Lindo, El Son de la Negra."
          - article [ref=e241]:
            - heading "Son jarocho i marakasy" [level=3] [ref=e246]
            - paragraph [ref=e247]: Skoczna muzyka z Veracruz z małą harfą jaraną. Tancerze wystukują rytm na drewnianej platformie (tarima).
          - article [ref=e248]:
            - heading "Calaveras literackie" [level=3] [ref=e253]
            - paragraph [ref=e254]: Żartobliwe wierszyki o śmierci na Dzień Zmarłych — nawet politycy dostają swoją „kalawerę”. Śmiech oswaja przemijanie.
          - article [ref=e255]:
            - heading "Banda i norteño" [level=3] [ref=e260]
            - paragraph [ref=e261]: Dęte orkiestry z Sinaloa i akordeonowy norteño z pogranicza USA. Podstawa każdej wiejskiej fiesty i quinceañery — fiesty z okazji 15. urodzin.
      - generic [ref=e262]:
        - generic [ref=e263]:
          - heading "06 Zabytki i symbole" [level=2] [ref=e264]:
            - generic [ref=e265]: "06"
            - text: Zabytki i symbole
          - generic [aria-hidden]: ARTE
          - paragraph [ref=e266]: Sześć miejsc do rozpoznania — przydadzą się w grach i zabawach.
        - generic [ref=e267]:
          - article [ref=e268]:
            - heading "Chichén Itzá, Jukatan" [level=3] [ref=e269]
            - figure "Fot. Daniel Schwen, CC BY-SA 4.0, via Wikimedia Commons" [ref=e271]:
              - img "Chichén Itzá, Jukatan" [ref=e272]
            - paragraph [ref=e274]: "Piramida Kukulkana: 365 stopni jak dni w roku. W równonoc cień układa się w pełzającego węża. Jeden z 7 nowych cudów świata."
            - paragraph [ref=e275]:
              - generic [ref=e276]: Majowie, ok. 600–1200 n.e.
          - article [ref=e277]:
            - heading "Teotihuacán" [level=3] [ref=e278]
            - figure "Fot. Daniel Case, CC BY-SA 3.0, via Wikimedia Commons" [ref=e280]:
              - img "Teotihuacán" [ref=e281]
            - paragraph [ref=e283]: Aleja Zmarłych, Piramida Słońca (trzecia co do wielkości na świecie) i Piramida Księżyca. Miasto bogów, starsze niż Aztekowie.
            - paragraph [ref=e284]:
              - generic [ref=e285]: ok. 100 p.n.e. – 650 n.e.
          - article [ref=e286]:
            - heading "Palacio de Bellas Artes" [level=3] [ref=e287]
            - figure "Fot. Jeses, CC BY-SA 2.5, via Wikimedia Commons" [ref=e289]:
              - img "Palacio de Bellas Artes" [ref=e290]
            - paragraph [ref=e292]: Biały marmurowy pałac w stolicy z kurtyną z witraży Tiffany'ego. W środku murale Rivery i Orozco.
            - paragraph [ref=e293]:
              - generic [ref=e294]: secesja + art déco, 1934
          - article [ref=e295]:
            - heading "Zócalo" [level=3] [ref=e296]
            - figure "Fot. Cvmontuy, CC BY 4.0, via Wikimedia Commons" [ref=e298]:
              - img "Zócalo" [ref=e299]
            - paragraph [ref=e301]: Plac Konstytucji — jeden z największych placów świata. Katedra, Pałac Narodowy z muralami i wielka flaga na maszcie.
            - paragraph [ref=e302]:
              - generic [ref=e303]: serce stolicy od czasów Azteków
          - article [ref=e304]:
            - heading "Xochimilco" [level=3] [ref=e305]
            - figure "Fot. Syced, CC0, via Wikimedia Commons" [ref=e307]:
              - img "Xochimilco" [ref=e308]
            - paragraph [ref=e310]: Pływające ogrody-chinampas i kolorowe łodzie trajineras. Mariachi podpływają do łodzi grać na życzenie.
            - paragraph [ref=e311]:
              - generic [ref=e312]: UNESCO, tradycja aztecka
          - article [ref=e313]:
            - heading "Monte Albán, Oaxaca" [level=3] [ref=e314]
            - paragraph [ref=e318]: Zapotekowie wyrównali szczyt góry, by zbudować miasto-obserwatorium. Grobowce, boisko do gry w piłkę i pismo sprzed 2000 lat.
            - paragraph [ref=e319]:
              - generic [ref=e320]: Zapotekowie, ok. 500 p.n.e.
      - generic [ref=e321]:
        - generic [ref=e322]:
          - heading "07 Język w pigułce" [level=2] [ref=e323]:
            - generic [ref=e324]: "07"
            - text: Język w pigułce
          - generic [aria-hidden]: PALABRA
          - paragraph [ref=e325]: "Meksykański hiszpański brzmi miękko i śpiewnie. Oto jego znaki szczególne:"
        - list [ref=e327]:
          - listitem [ref=e328]: "Seseo: litery c (przed e, i) i z wymawia się jak zwykłe s — gracias brzmi grasjas (nie graθjas jak w Hiszpanii)."
          - listitem [ref=e329]: "Ustedes zamiast vosotros: do grupy mówi się ustedes z formą jak dla państwa — ¿ustedes quieren?"
          - listitem [ref=e330]: "¿Qué onda? i órale: ¿qué onda? (co słychać?), órale (no dawaj! / serio?), padre (fajny), güey (kumpel, potocznie)."
          - listitem [ref=e331]: "Słowa z nahuatl: chocolate (xocolatl), tomate (tomatl), aguacate (ahuacatl), coyote, chile. Meksyk podarował je całemu światu."
      - generic [ref=e332]:
        - generic [ref=e333]:
          - heading "08 Zwroty z głośnikiem" [level=2] [ref=e334]:
            - generic [ref=e335]: "08"
            - text: Zwroty z głośnikiem
          - generic [aria-hidden]: HOLA
          - paragraph [ref=e336]: "Posłuchaj i powtórz. Głos: Meksyk (es-MX)."
        - generic [ref=e337]:
          - generic [ref=e338]:
            - generic [ref=e339]:
              - generic [ref=e340]: ¿Qué onda?
              - generic [ref=e341]:
                - text: Co słychać? (luzacko) ·
                - generic [ref=e342]: "[ke onda]"
            - 'button "Odsłuchaj po hiszpańsku: ¿Qué onda?" [ref=e343]': Odsłuchaj
          - generic [ref=e346]:
            - generic [ref=e347]:
              - generic [ref=e348]: Buenos días
              - generic [ref=e349]:
                - text: Dzień dobry (rano) ·
                - generic [ref=e350]: "[buenos dias]"
            - 'button "Odsłuchaj po hiszpańsku: Buenos días" [ref=e351]': Odsłuchaj
          - generic [ref=e354]:
            - generic [ref=e355]:
              - generic [ref=e356]: Muchas gracias
              - generic [ref=e357]:
                - text: Bardzo dziękuję ·
                - generic [ref=e358]: "[mucias grasjas]"
            - 'button "Odsłuchaj po hiszpańsku: Muchas gracias" [ref=e359]': Odsłuchaj
          - generic [ref=e362]:
            - generic [ref=e363]:
              - generic [ref=e364]: Por favor
              - generic [ref=e365]:
                - text: Proszę ·
                - generic [ref=e366]: "[por fawor]"
            - 'button "Odsłuchaj po hiszpańsku: Por favor" [ref=e367]': Odsłuchaj
          - generic [ref=e370]:
            - generic [ref=e371]:
              - generic [ref=e372]: Con permiso
              - generic [ref=e373]:
                - text: Przepraszam (przepuszczając) ·
                - generic [ref=e374]: "[kon permiso]"
            - 'button "Odsłuchaj po hiszpańsku: Con permiso" [ref=e375]': Odsłuchaj
          - generic [ref=e378]:
            - generic [ref=e379]:
              - generic [ref=e380]: ¿Dónde está el Zócalo?
              - generic [ref=e381]:
                - text: Gdzie jest główny plac? ·
                - generic [ref=e382]: "[donde esta el sokalo]"
            - 'button "Odsłuchaj po hiszpańsku: ¿Dónde está el Zócalo?" [ref=e383]': Odsłuchaj
          - generic [ref=e386]:
            - generic [ref=e387]:
              - generic [ref=e388]: Un taco, por favor
              - generic [ref=e389]:
                - text: Jedno taco, proszę ·
                - generic [ref=e390]: "[un tako, por fawor]"
            - 'button "Odsłuchaj po hiszpańsku: Un taco, por favor" [ref=e391]': Odsłuchaj
          - generic [ref=e394]:
            - generic [ref=e395]:
              - generic [ref=e396]: ¿Pica mucho?
              - generic [ref=e397]:
                - text: Czy to bardzo ostre? ·
                - generic [ref=e398]: "[pika mucio]"
            - 'button "Odsłuchaj po hiszpańsku: ¿Pica mucho?" [ref=e399]': Odsłuchaj
          - generic [ref=e402]:
            - generic [ref=e403]:
              - generic [ref=e404]: ¡Órale!
              - generic [ref=e405]:
                - text: No dawaj! / Serio? ·
                - generic [ref=e406]: "[orale]"
            - 'button "Odsłuchaj po hiszpańsku: ¡Órale!" [ref=e407]': Odsłuchaj
          - generic [ref=e410]:
            - generic [ref=e411]:
              - generic [ref=e412]: ¡Viva México!
              - generic [ref=e413]:
                - text: Niech żyje Meksyk! ·
                - generic [ref=e414]: "[biwa mechiko]"
            - 'button "Odsłuchaj po hiszpańsku: ¡Viva México!" [ref=e415]': Odsłuchaj
          - generic [ref=e418]:
            - generic [ref=e419]:
              - generic [ref=e420]: Hasta luego
              - generic [ref=e421]:
                - text: Do zobaczenia ·
                - generic [ref=e422]: "[asta luego]"
            - 'button "Odsłuchaj po hiszpańsku: Hasta luego" [ref=e423]': Odsłuchaj
          - generic [ref=e426]:
            - generic [ref=e427]:
              - generic [ref=e428]: ¡Feliz Día de Muertos!
              - generic [ref=e429]:
                - text: Szczęśliwego Dnia Zmarłych! ·
                - generic [ref=e430]: "[felis dia de muertos]"
            - 'button "Odsłuchaj po hiszpańsku: ¡Feliz Día de Muertos!" [ref=e431]': Odsłuchaj
      - generic [ref=e434]:
        - generic [ref=e435]:
          - heading "Quiz Meksyk — 12 pytań" [level=2] [ref=e436]:
            - generic [ref=e437]: Quiz
            - text: Meksyk — 12 pytań
          - generic [aria-hidden]: JUEGO
        - generic [ref=e439]:
          - paragraph [ref=e440]: Naciśnij start. Na każde pytanie masz 20 sekund.
          - paragraph [ref=e441]: "Rekord sali: nikt jeszcze nie grał. Bądź pierwszy!"
          - status [ref=e442]
          - button "Start quizu" [ref=e443]
        - paragraph [ref=e444]:
          - link "Wróć do Pawilonu Hiszpanii" [ref=e445] [cursor=pointer]:
            - /url: /dzien-obcych-jezykow/hiszpania/
          - text: ·
          - link "Gry i zabawy" [ref=e446] [cursor=pointer]:
            - /url: /dzien-obcych-jezykow/gry/
  - contentinfo [ref=e447]:
    - generic [ref=e448]:
      - navigation "Pawilony" [ref=e449]:
        - heading "Pawilony" [level=2] [ref=e450]
        - list [ref=e451]:
          - listitem [ref=e452]:
            - link "Pawilon Hiszpanii" [ref=e453] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/hiszpania/
          - listitem [ref=e454]:
            - 'link "Quiz: Hiszpania" [ref=e455] [cursor=pointer]':
              - /url: /dzien-obcych-jezykow/hiszpania/#quiz
          - listitem [ref=e456]:
            - link "Pawilon Meksyku" [ref=e457] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/meksyk/
          - listitem [ref=e458]:
            - 'link "Quiz: Meksyk" [ref=e459] [cursor=pointer]':
              - /url: /dzien-obcych-jezykow/meksyk/#quiz
      - navigation "Gry i zabawy" [ref=e460]:
        - heading "Gry i zabawy" [level=2] [ref=e461]
        - list [ref=e462]:
          - listitem [ref=e463]:
            - link "Strona główna i scenariusz lekcji" [ref=e464] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/
          - listitem [ref=e465]:
            - link "Fiszki, dopasowanie, zagadki" [ref=e466] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/gry/
          - listitem [ref=e467]:
            - link "Rekordy sali" [ref=e468] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/gry/#h-rek
      - generic [ref=e469]:
        - heading "Materiały" [level=2] [ref=e470]
        - list [ref=e471]:
          - listitem [ref=e472]:
            - link "Mapa strony (sitemap.xml)" [ref=e473] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/sitemap.xml
          - listitem [ref=e474]:
            - link "Wróć na górę strony" [ref=e475] [cursor=pointer]:
              - /url: "#tresc"
    - paragraph [ref=e476]: © 2026 Dzień Języków Obcych — materiał na jedną lekcję o Hiszpanii i Meksyku.
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