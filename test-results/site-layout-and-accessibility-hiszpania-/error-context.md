# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.js >> layout and accessibility: hiszpania/
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
            - 'img "Flaga: Hiszpania" [ref=e26]'
          - paragraph [ref=e28]:
            - generic [ref=e29]: Hiszpania · ¡Hola! ¿Qué tal?
          - heading "Hiszpania — kraj flamenco, fiesty i sjesty" [level=1] [ref=e30]
          - paragraph [ref=e31]: Od mauretańskich pałaców Andaluzji po gotyckie katedry północy. Poznaj kraj, w którym obiad jada się o piętnastej, a Nowy Rok wita dwunastoma winogronami.
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
            - 'link "Quiz: Hiszpania" [ref=e65] [cursor=pointer]':
              - /url: "#quiz"
              - generic [aria-hidden] [ref=e66]: "9"
              - text: "Quiz: Hiszpania"
      - generic [ref=e67]:
        - generic [ref=e68]:
          - heading "01 Geografia w pigułce" [level=2] [ref=e69]:
            - generic [ref=e70]: "01"
            - text: Geografia w pigułce
          - generic [aria-hidden]: MAPA
          - paragraph [ref=e71]: "Hiszpania zajmuje większość Półwyspu Iberyjskiego. To kraj kontrastów: zielona Galicja na północy i niemal afrykańskie upały Andaluzji na południu."
        - generic [ref=e72]:
          - paragraph [ref=e73]: Stolicą jest Madryt, położony na rozległym płaskowyżu Meseta, prawie w samym środku kraju. Największe rzeki to Ebro, Duero, Tag (Tajo) i Gwadalkiwir. Na południu wznoszą się góry Sierra Nevada z najwyższym szczytem kontynentalnej Hiszpanii — Mulhacén (3479 m).
          - paragraph [ref=e74]: "Do Hiszpanii należą też wyspy: Baleary na Morzu Śródziemnym z imprezową Ibizą oraz Wyspy Kanaryjskie na Atlantyku z wulkanem Teide — najwyższym szczytem całej Hiszpanii (3718 m)."
          - paragraph [ref=e75]: Klimat śródziemnomorski oznacza gorące, suche lata i łagodne zimy. Nic dziwnego, że narodziła się tu sjesta — popołudniowa przerwa w największy upał, zwykle między 14:00 a 17:00.
        - list [ref=e76]:
          - listitem [ref=e77]:
            - generic [ref=e78]: 505 tys. km²
            - text: powierzchnia — 2. kraj UE
          - listitem [ref=e79]:
            - generic [ref=e80]: Madryt
            - text: stolica, 3,3 mln mieszkańców
          - listitem [ref=e81]:
            - generic [ref=e82]: euro
            - text: waluta od 2002 roku
          - listitem [ref=e83]:
            - generic [ref=e84]: 4 języki
            - text: kastylijski, kataloński, galicyjski, baskijski
      - generic [ref=e85]:
        - generic [ref=e86]:
          - heading "02 Historia na osi czasu" [level=2] [ref=e87]:
            - generic [ref=e88]: "02"
            - text: Historia na osi czasu
          - generic [aria-hidden]: TIEMPO
          - paragraph [ref=e89]: Osiem przystanków — od początków po współczesność.
        - list [ref=e90]:
          - listitem [ref=e91]:
            - text: ok. 200 p.n.e.
            - heading "Hispania pod Rzymem" [level=3] [ref=e92]
            - paragraph [ref=e93]: Rzymianie budują drogi, akwedukty (Segowia!) i miasta. Łacina staje się zalążkiem hiszpańskiego.
          - listitem [ref=e94]:
            - text: 711–1492
            - heading "Al-Andalus" [level=3] [ref=e95]
            - paragraph [ref=e96]: "Maurowie tworzą kwitnącą cywilizację: Kordoba, Sewilla, Grenada. Powstaje Alhambra i Wielki Meczet w Kordobie."
          - listitem [ref=e97]:
            - text: "1492"
            - heading "Rekonkwista i Kolumb" [level=3] [ref=e98]
            - paragraph [ref=e99]: Upadek Grenady kończy 781 lat walki. Kolumb dociera do Ameryki — zaczyna się epoka imperium.
          - listitem [ref=e100]:
            - text: XVI–XVII w.
            - heading "Złoty Wiek" [level=3] [ref=e101]
            - paragraph [ref=e102]: Imperium, z którego „nie zachodzi słońce”. Cervantes pisze Don Kichota, Velázquez maluje, teatr Lope de Vegi bawi tłumy.
          - listitem [ref=e103]:
            - text: 1936–1939
            - heading "Wojna domowa" [level=3] [ref=e104]
            - paragraph [ref=e105]: Tragiczny konflikt, po którym władzę przejmuje gen. Franco. Guernica Picassa staje się symbolem cierpienia.
          - listitem [ref=e106]:
            - text: "1978"
            - heading "Konstytucja i demokracja" [level=3] [ref=e107]
            - paragraph [ref=e108]: Hiszpania staje się monarchią parlamentarną. Wspólnoty autonomiczne zyskują własne rządy i języki w szkołach.
          - listitem [ref=e109]:
            - text: "1986"
            - heading "Wspólnota Europejska" [level=3] [ref=e110]
            - paragraph [ref=e111]: Hiszpania wchodzi do EWG (dziś UE). Rozpoczyna się boom gospodarczy i turystyczny.
          - listitem [ref=e112]:
            - text: "1992"
            - heading "Rok Barcelony i Sewilli" [level=3] [ref=e113]
            - paragraph [ref=e114]: Igrzyska olimpijskie w Barcelonie i Expo w Sewilli pokazują światu nową, otwartą Hiszpanię.
      - generic [ref=e115]:
        - generic [ref=e116]:
          - heading "03 Święta i zwyczaje" [level=2] [ref=e117]:
            - generic [ref=e118]: "03"
            - text: Święta i zwyczaje
          - generic [aria-hidden]: FIESTA
          - paragraph [ref=e119]: Pięć świąt, które trzeba znać.
        - generic [ref=e120]:
          - article [ref=e121]:
            - heading "La Tomatina — Buñol, ostatnia środa sierpnia" [level=3] [ref=e126]
            - paragraph [ref=e127]: Najsłynniejsza bitwa na pomidory świata. 150 ton pomidorów, godzina zabawy, potem mycie miasta wężami strażackimi. Zaczęło się od młodzieńczej bójki w 1945 roku.
          - article [ref=e128]:
            - heading "Las Fallas — Walencja, 15–19 marca" [level=3] [ref=e133]
            - paragraph [ref=e134]: "Tygodniowe święto ognia: gigantyczne, satyryczne kukły (fallas) parodiują polityków i celebrytów, a finałowej nocy wszystko płonie w wielkiej Cremà. Ocalałą kukłę wybiera głosowanie."
          - article [ref=e135]:
            - heading "San Fermín — Pampeluna, 6–14 lipca" [level=3] [ref=e140]
            - paragraph [ref=e141]: Słynna gonitwa byków ulicami miasta (encierro) o 8:00 rano, opisana przez Hemingwaya. Uczestnicy w bieli z czerwonymi chustami.
          - article [ref=e142]:
            - heading "Semana Santa — Sewilla, Wielki Tydzień" [level=3] [ref=e147]
            - paragraph [ref=e148]: Poruszające procesje z platformami (pasos) niosącymi figury Chrystusa i Matki Boskiej. Pokutnicy w spiczastych kapturach (capirotes), orkiestry i zapach kadzidła.
          - article [ref=e149]:
            - heading "Sylwester — 12 winogron" [level=3] [ref=e154]
            - paragraph [ref=e155]: Hiszpanie witają Nowy Rok, jedząc po jednym winogronie na każde z dwunastu uderzeń zegara na Puerta del Sol w Madrycie. Kto zdąży — ma szczęście na cały rok.
      - generic [ref=e156]:
        - generic [ref=e157]:
          - heading "04 Kuchnia" [level=2] [ref=e158]:
            - generic [ref=e159]: "04"
            - text: Kuchnia
          - generic [aria-hidden]: SABOR
          - paragraph [ref=e160]: Pięć smaków Hiszpanii — nazwę każdej potrawy odtworzysz z lektorem.
        - generic [ref=e161]:
          - article [ref=e162]:
            - heading "Paella walencjańska" [level=3] [ref=e167]
            - figure "Fot. Jan Harenburg, CC BY-SA 4.0, via Wikimedia Commons" [ref=e169]:
              - img "Paella walencjańska" [ref=e170]
            - paragraph [ref=e172]: "Ryż z szafranem gotowany na szerokiej patelni. Oryginał: królik, kurczak, fasola. Jedzona w niedziele, wprost z patelni, z cytryną."
            - 'button "Powiedz nazwę potrawy: Paella walencjańska" [ref=e173]': Powiedz nazwę
          - article [ref=e176]:
            - heading "Tapas" [level=3] [ref=e181]
            - paragraph [ref=e182]: "Małe przekąski do wina: oliwki, ser manchego, szynka jamón, krewetki al ajillo. W León i Grenadzie tapas dostaniesz gratis do napoju!"
            - 'button "Powiedz nazwę potrawy: Tapas" [ref=e183]': Powiedz nazwę
          - article [ref=e186]:
            - heading "Tortilla española" [level=3] [ref=e191]
            - paragraph [ref=e192]: "Gruby omlet z ziemniaków i cebuli. Spór narodowy: z cebulą (con cebolla) czy bez (sin cebolla)?"
            - 'button "Powiedz nazwę potrawy: Tortilla española" [ref=e193]': Powiedz nazwę
          - article [ref=e196]:
            - heading "Churros z czekoladą" [level=3] [ref=e201]
            - paragraph [ref=e202]: Smażone paluszki z ciasta parzonego, maczane w gęstej czekoladzie. Klasyczne śniadanie po nocnej fieście.
            - 'button "Powiedz nazwę potrawy: Churros z czekoladą" [ref=e203]': Powiedz nazwę
          - article [ref=e206]:
            - heading "Horchata i tinto de verano" [level=3] [ref=e211]
            - paragraph [ref=e212]: Orzeźwiająca horchata z cibory (chufy) oraz letnie wino z lemoniadą — ulubione napoje upalnego południa.
            - 'button "Powiedz nazwę potrawy: Horchata i tinto de verano" [ref=e213]': Powiedz nazwę
      - generic [ref=e216]:
        - generic [ref=e217]:
          - heading "05 Muzyka i taniec" [level=2] [ref=e218]:
            - generic [ref=e219]: "05"
            - text: Muzyka i taniec
          - generic [aria-hidden]: RITMO
          - paragraph [ref=e220]: Czym żyje ulica i fiesta.
        - generic [ref=e221]:
          - article [ref=e222]:
            - heading "Flamenco — dusza Andaluzji" [level=3] [ref=e227]
            - paragraph [ref=e228]: Śpiew (cante), taniec (baile) i gitara (toque). Płaczliwy śpiew o miłości i stracie, tupot obcasów, okrzyki ¡olé! W 2010 roku flamenco wpisano na listę UNESCO.
          - article [ref=e229]:
            - heading "Gitara hiszpańska" [level=3] [ref=e234]
            - paragraph [ref=e235]: "Klasyczna gitara z nylonowymi strunami. Wirtuozi: Andrés Segovia, Paco de Lucía, który połączył flamenco z jazzem."
          - article [ref=e236]:
            - heading "Kastaniety i cajón" [level=3] [ref=e241]
            - paragraph [ref=e242]: Kastaniety (castañuelas) wybijają rytm w tańcu, a skrzyniowy bęben cajón — pierwotnie skrzynia na ryby — napędza rumby.
          - article [ref=e243]:
            - heading "Paso doble i sardana" [level=3] [ref=e248]
            - paragraph [ref=e249]: Paso doble rozbrzmiewa na arenach byków, a w Katalonii tańczy się spokojną sardanę w wielkim kole na placu.
      - generic [ref=e250]:
        - generic [ref=e251]:
          - heading "06 Zabytki i symbole" [level=2] [ref=e252]:
            - generic [ref=e253]: "06"
            - text: Zabytki i symbole
          - generic [aria-hidden]: ARTE
          - paragraph [ref=e254]: Sześć miejsc do rozpoznania — przydadzą się w grach i zabawach.
        - generic [ref=e255]:
          - article [ref=e256]:
            - heading "Sagrada Família, Barcelona" [level=3] [ref=e257]
            - figure "Fot. Matti Blume, CC BY-SA 4.0, via Wikimedia Commons" [ref=e259]:
              - img "Sagrada Família, Barcelona" [ref=e260]
            - paragraph [ref=e262]: Bazylika Gaudiego budowana od 1882 roku — jak las z kamienia. Ukończenie planowane na lata 30. XXI wieku.
            - paragraph [ref=e263]:
              - generic [ref=e264]: Gaudí, secesja katalońska
          - article [ref=e265]:
            - heading "Alhambra, Grenada" [level=3] [ref=e266]
            - figure "Fot. Juan Laurent, domena publiczna, via Wikimedia Commons" [ref=e268]:
              - img "Alhambra, Grenada" [ref=e269]
            - paragraph [ref=e271]: Czerwony pałac mauretańskich emirów z dziedzińcami Lwów i Mirtów. Perła sztuki islamu w Europie.
            - paragraph [ref=e272]:
              - generic [ref=e273]: sztuka nasrydzka, XIV w.
          - article [ref=e274]:
            - heading "Mezquita, Kordoba" [level=3] [ref=e275]
            - figure "Fot. Adrian Farwell, CC BY 3.0, via Wikimedia Commons" [ref=e277]:
              - img "Mezquita, Kordoba" [ref=e278]
            - paragraph [ref=e280]: Las 856 kolumn z czerwono-białymi łukami. W środku dawnego meczetu stoi renesansowa katedra.
            - paragraph [ref=e281]:
              - generic [ref=e282]: meczet z 785 r., katedra z XVI w.
          - article [ref=e283]:
            - heading "Park Güell, Barcelona" [level=3] [ref=e284]
            - figure "Fot. Danbu14, CC BY-SA 3.0, via Wikimedia Commons" [ref=e286]:
              - img "Park Güell, Barcelona" [ref=e287]
            - paragraph [ref=e289]: "Bajkowy park Gaudiego: mozaikowa jaszczurka, falujące ławki i piernikowe domki."
            - paragraph [ref=e290]:
              - generic [ref=e291]: Gaudí, trencadís — mozaika z potłuczonych płytek
          - article [ref=e292]:
            - heading "Akwedukt, Segowia" [level=3] [ref=e293]
            - figure "Fot. Diego Delso, CC BY-SA 4.0, via Wikimedia Commons" [ref=e295]:
              - img "Akwedukt, Segowia" [ref=e296]
            - paragraph [ref=e298]: Rzymski wodociąg z 167 granitowymi łukami, złożony bez zaprawy. Ma prawie 2000 lat i wciąż stoi.
            - paragraph [ref=e299]:
              - generic [ref=e300]: Rzym, ok. 50 r. n.e.
          - article [ref=e301]:
            - heading "Muzeum Prado, Madryt" [level=3] [ref=e302]
            - figure "Fot. Rene Boulay, CC BY-SA 3.0, via Wikimedia Commons" [ref=e304]:
              - img "Muzeum Prado, Madryt" [ref=e305]
            - paragraph [ref=e307]: Velázquez, Goya, El Greco — jedna z najważniejszych galerii świata. Wejście gratis w ostatnich godzinach dnia.
            - paragraph [ref=e308]:
              - generic [ref=e309]: Las Meninas, Maja ubrana i Maja naga
      - generic [ref=e310]:
        - generic [ref=e311]:
          - heading "07 Język w pigułce" [level=2] [ref=e312]:
            - generic [ref=e313]: "07"
            - text: Język w pigułce
          - generic [aria-hidden]: PALABRA
          - paragraph [ref=e314]: "Hiszpański z Hiszpanii brzmi inaczej niż meksykański. Oto znaki szczególne odmiany europejskiej:"
        - list [ref=e316]:
          - listitem [ref=e317]: "Ceceo: litery c (przed e, i) i z wymawia się jak angielskie th — gracias brzmi graθjas."
          - listitem [ref=e318]: "Vosotros: Hiszpanie mówią do grupy vosotros (wy) z własną odmianą — ¿vosotros queréis? Meksykanie używają ustedes."
          - listitem [ref=e319]: "Vale i venga: uniwersalne vale (okej, dobra) usłyszysz co minutę. Tío/tía to potocznie ziomek, ziomalka."
          - listitem [ref=e320]: "Anglicyzmy z hiszpańską wymową: el fútbol, el finde (weekend), hacer footing (biegać)."
      - generic [ref=e321]:
        - generic [ref=e322]:
          - heading "08 Zwroty z głośnikiem" [level=2] [ref=e323]:
            - generic [ref=e324]: "08"
            - text: Zwroty z głośnikiem
          - generic [aria-hidden]: HOLA
          - paragraph [ref=e325]: "Posłuchaj i powtórz. Głos: Hiszpania (es-ES)."
        - generic [ref=e326]:
          - generic [ref=e327]:
            - generic [ref=e328]:
              - generic [ref=e329]: ¡Hola! ¿Qué tal?
              - generic [ref=e330]:
                - text: Cześć! Co słychać? ·
                - generic [ref=e331]: "[ola, ke tal]"
            - 'button "Odsłuchaj po hiszpańsku: ¡Hola! ¿Qué tal?" [ref=e332]': Odsłuchaj
          - generic [ref=e335]:
            - generic [ref=e336]:
              - generic [ref=e337]: Buenos días
              - generic [ref=e338]:
                - text: Dzień dobry (rano) ·
                - generic [ref=e339]: "[buenos dias]"
            - 'button "Odsłuchaj po hiszpańsku: Buenos días" [ref=e340]': Odsłuchaj
          - generic [ref=e343]:
            - generic [ref=e344]:
              - generic [ref=e345]: Buenas tardes
              - generic [ref=e346]:
                - text: Dzień dobry (po południu) ·
                - generic [ref=e347]: "[buenas tardes]"
            - 'button "Odsłuchaj po hiszpańsku: Buenas tardes" [ref=e348]': Odsłuchaj
          - generic [ref=e351]:
            - generic [ref=e352]:
              - generic [ref=e353]: Gracias
              - generic [ref=e354]:
                - text: Dziękuję ·
                - generic [ref=e355]: "[graθjas]"
            - 'button "Odsłuchaj po hiszpańsku: Gracias" [ref=e356]': Odsłuchaj
          - generic [ref=e359]:
            - generic [ref=e360]:
              - generic [ref=e361]: Por favor
              - generic [ref=e362]:
                - text: Proszę ·
                - generic [ref=e363]: "[por fawor]"
            - 'button "Odsłuchaj po hiszpańsku: Por favor" [ref=e364]': Odsłuchaj
          - generic [ref=e367]:
            - generic [ref=e368]:
              - generic [ref=e369]: Perdona
              - generic [ref=e370]:
                - text: Przepraszam (do znajomego) ·
                - generic [ref=e371]: "[perdona]"
            - 'button "Odsłuchaj po hiszpańsku: Perdona" [ref=e372]': Odsłuchaj
          - generic [ref=e375]:
            - generic [ref=e376]:
              - generic [ref=e377]: ¿Dónde está la plaza?
              - generic [ref=e378]:
                - text: Gdzie jest plac? ·
                - generic [ref=e379]: "[donde esta la plaθa]"
            - 'button "Odsłuchaj po hiszpańsku: ¿Dónde está la plaza?" [ref=e380]': Odsłuchaj
          - generic [ref=e383]:
            - generic [ref=e384]:
              - generic [ref=e385]: Una tapa, por favor
              - generic [ref=e386]:
                - text: Jedną przekąskę, proszę ·
                - generic [ref=e387]: "[una tapa, por fawor]"
            - 'button "Odsłuchaj po hiszpańsku: Una tapa, por favor" [ref=e388]': Odsłuchaj
          - generic [ref=e391]:
            - generic [ref=e392]:
              - generic [ref=e393]: ¿Cuánto cuesta?
              - generic [ref=e394]:
                - text: Ile to kosztuje? ·
                - generic [ref=e395]: "[kuanto kuesta]"
            - 'button "Odsłuchaj po hiszpańsku: ¿Cuánto cuesta?" [ref=e396]': Odsłuchaj
          - generic [ref=e399]:
            - generic [ref=e400]:
              - generic [ref=e401]: ¡Vale!
              - generic [ref=e402]:
                - text: Dobra! Okej! ·
                - generic [ref=e403]: "[bale]"
            - 'button "Odsłuchaj po hiszpańsku: ¡Vale!" [ref=e404]': Odsłuchaj
          - generic [ref=e407]:
            - generic [ref=e408]:
              - generic [ref=e409]: Hasta luego
              - generic [ref=e410]:
                - text: Do zobaczenia ·
                - generic [ref=e411]: "[asta luego]"
            - 'button "Odsłuchaj po hiszpańsku: Hasta luego" [ref=e412]': Odsłuchaj
          - generic [ref=e415]:
            - generic [ref=e416]:
              - generic [ref=e417]: ¡Felices fiestas!
              - generic [ref=e418]:
                - text: Wesołych świąt! ·
                - generic [ref=e419]: "[feliθes fiestas]"
            - 'button "Odsłuchaj po hiszpańsku: ¡Felices fiestas!" [ref=e420]': Odsłuchaj
      - generic [ref=e423]:
        - generic [ref=e424]:
          - heading "Quiz Hiszpania — 12 pytań" [level=2] [ref=e425]:
            - generic [ref=e426]: Quiz
            - text: Hiszpania — 12 pytań
          - generic [aria-hidden]: JUEGO
        - generic [ref=e428]:
          - paragraph [ref=e429]: Naciśnij start. Na każde pytanie masz 20 sekund.
          - paragraph [ref=e430]: "Rekord sali: nikt jeszcze nie grał. Bądź pierwszy!"
          - status [ref=e431]
          - button "Start quizu" [ref=e432]
        - paragraph [ref=e433]:
          - link "Teraz Pawilon Meksyku" [ref=e434] [cursor=pointer]:
            - /url: /dzien-obcych-jezykow/meksyk/
          - text: ·
          - link "Gry i zabawy" [ref=e435] [cursor=pointer]:
            - /url: /dzien-obcych-jezykow/gry/
  - contentinfo [ref=e436]:
    - generic [ref=e437]:
      - navigation "Pawilony" [ref=e438]:
        - heading "Pawilony" [level=2] [ref=e439]
        - list [ref=e440]:
          - listitem [ref=e441]:
            - link "Pawilon Hiszpanii" [ref=e442] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/hiszpania/
          - listitem [ref=e443]:
            - 'link "Quiz: Hiszpania" [ref=e444] [cursor=pointer]':
              - /url: /dzien-obcych-jezykow/hiszpania/#quiz
          - listitem [ref=e445]:
            - link "Pawilon Meksyku" [ref=e446] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/meksyk/
          - listitem [ref=e447]:
            - 'link "Quiz: Meksyk" [ref=e448] [cursor=pointer]':
              - /url: /dzien-obcych-jezykow/meksyk/#quiz
      - navigation "Gry i zabawy" [ref=e449]:
        - heading "Gry i zabawy" [level=2] [ref=e450]
        - list [ref=e451]:
          - listitem [ref=e452]:
            - link "Strona główna i scenariusz lekcji" [ref=e453] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/
          - listitem [ref=e454]:
            - link "Fiszki, dopasowanie, zagadki" [ref=e455] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/gry/
          - listitem [ref=e456]:
            - link "Rekordy sali" [ref=e457] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/gry/#h-rek
      - generic [ref=e458]:
        - heading "Materiały" [level=2] [ref=e459]
        - list [ref=e460]:
          - listitem [ref=e461]:
            - link "Mapa strony (sitemap.xml)" [ref=e462] [cursor=pointer]:
              - /url: /dzien-obcych-jezykow/sitemap.xml
          - listitem [ref=e463]:
            - link "Wróć na górę strony" [ref=e464] [cursor=pointer]:
              - /url: "#tresc"
    - paragraph [ref=e465]: © 2026 Dzień Języków Obcych — materiał na jedną lekcję o Hiszpanii i Meksyku.
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