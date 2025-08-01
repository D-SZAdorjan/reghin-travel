// TODO: pick matching colors
// TODO: make content dynamic
// TODO: add SEO
import GridRow from "@/components/general/GridRow";
import InnerPageHero from "@/components/general/InnerPageHero";
import ContentTextBlock from "@/components/innerPage/ContentTextBlock";
import ContentTitle from "@/components/innerPage/ContentTitle";

export default async function CityHistoryPage() {
  return (
    <>
      <InnerPageHero
        heroImg="/images/home-hero-ana-landscape.png"
        heroTitle="Szászrégen történelme"
        heroLead="Szászrégen az évszázadok során, bár sok nehézséggel szembesült, mindig képes volt újra talpra állni és fejlődni."
      />
      <section className="container pt-[60px] pb-[120px] mx-auto text-justify">
        <GridRow>
          <div className="w-11/12 mx-auto px-4 sm:px-8">
            <div className="max-w-full md:max-w-[66.66667%] mx-auto">
              <ContentTitle size="xl">
                A település első említése és névváltozatai
              </ContentTitle>
              <ContentTextBlock>
                Szászrégen első írásos említése Regun néven történik 1228-ban.
                Említése abban a birtokadományi levélben történik amikor II.
                Endre király a Gertrúd királyné megölésében bűnös Simon bántól
                elvett széplaki és gyekei birtokait Dénes tárnokmesternek
                adományozza. A település neve az évszázadok folyamán többször is
                változott. Mezővárosi rangjára utal az 1427- ben oppidum Regen
                megnevezése. A ma is ismert és használatban lévő Szász-Régen
                elnevezés 1733-tól bukkant fel. A települést először 1854-ben
                említették három nyelven: magyarul SzászRégen, szászul Saschisch
                Reen és románul Reghin. A ma is ismert Szászrégen az 1926-ban
                közigazgatásilag is egyesített Szász- és Magyarrégenből,
                valamint 1956-ban hozzácsatolt két falu Abafája és Radnótfája
                településekből áll.
              </ContentTextBlock>
              <ContentTitle size="xl">Szászrégen őskori emlékei</ContentTitle>
              <ContentTextBlock>
                Szászrégen területének a története a felszínre került régészeti
                leletek tanúsága szerint, egészen az őskorig nyúlik vissza. A
                korabeli emberi kultúrák jelenlétét tanúsítják, a város és a
                környező falvakban felszínre került régészeti leletek.
                Marosfelfaluban egy hozzávetőlegesen 3200 éves teljes épségben
                fennmaradt bronzkori övcsatra bukkantak. A Nyerges-hegyen egy
                kilyukasztott kőbaltát fedeztek fel és még számos kőbalták és
                cserépedények maradványaira bukkantak a környező településeken.
              </ContentTextBlock>

              <ContentTitle size="xl">Szászrégen a Római korban</ContentTitle>
              <ContentTextBlock>
                Dácia római meghódítása után, a rómaiak a városban és annak
                környező vidékén is kiépítették uradalmi rendszerüket. A rómaiak
                jelenlétét bizonyítják Szászrégenben és a környező falvakban
                talált római pénzleletek, castrumok és a római út nyomai.
                Feltételezik, hogy 106-274 között a szászrégeni evangélikus
                temető helyén egy erődítmény állott, melynek neve a hagyomány
                szerint Rucunium volt. A környéken római castrumok maradványai
                bukkantak elő Marosvécsen, Mikházán, Sóváradon és a
                Nyerges-hegyen. A Maros jobb partján, a város alatt húzódott a
                rómaiak által épített kőburkolatú út, mely a várostól egészen
                Vécsig követhető volt. Ez az út összeköttetésbe volt a közeli
                sós telepekkel és sós vizű forrásokkal, valószínűleg ezeken az
                utakon szállították a sót a birodalom más vidékeire. Ha
                figyelmesek vagyunk akkor napjainkban is kivehetjük a római út
                nyomait.
              </ContentTextBlock>

              <ContentTitle size="xl">
                A középkori szászrégen: királyi birtok és a mongol támadások
              </ContentTitle>
              <ContentTextBlock>
                Szászrégen és vidéke a középkorban a király tulajdonát képezte
                és Torda vármegyéhez tartozott. A település szomszédságában levő
                Görgényszentimrén ekkor királyi vár létezett, melynek
                napjainkban csupán romjai emlékeztettnek hajdani kinézetére. A
                12. században II. Géza király uralkodása idején, Szászrégen
                vidékére német telepeseket fogadtak be. 1241-ben és 1285-ben
                mongolok dúlták fel a várost, az utóbbi támadáskor viszont IV.
                Kun László seregei sikeresen visszaverték a városban
                garázdálkodó ellenséget.
              </ContentTextBlock>
              <ContentTextBlock>
                Egy monda szerint a város jámbor polgárai úgy akarták
                meglágyítani a mongolok szívét, hogy díszmenetben, papokkal,
                templomi énekekkel és zászlókkal indultak eléjük. Miután
                találkoztak a vége az lett, hogy az ellenség irgalmatlanul
                lemészárolt mindenkit. Az 1241-42 mongol támadások hatalmas
                anyagi és emberveszteséget okoztak Szászrégen vidékén. A
                meggyérült lakosság pótlására Losonczi Dénes német telepeseket
                fogadott a Flandria és a Rajna vidékéről.
              </ContentTextBlock>
              <ContentTitle size="xl">Szászrégen első temploma</ContentTitle>
              <ContentTextBlock>
                A település első komolyabb kivitelezést igénylő,
                leggrandiózusabb épületét, egyben kora gótikus stílusú, Mária
                tiszteletére épült templomának legkorábbi említése 1330-ból
                származik. A templom vagy őse bizonyára egy évszázaddal korábban
                épülhetett, ugyanis a szászok letelepedésükkor építhettek egy
                templomot.Még ugyanebben az évben egyházi esperességként, majd
                két évvel később káptalanságként tíz falu adóját kapta meg. A
                káptalanság mellett iskola is működött, ezáltal fontos szerepet
                töltött be a művelődés a tudás és az írásbeliség terjesztése
                érdekében. Losonczy László, Erzsébet magyar királyné követe
                Romában arra kapott felhatalmazást, hogy a szászrégeni Mária
                tiszteletére felszentelt templom mellé a Szent Ágoston rendi
                remeteszerzeteseknek rendházat építhessen.
              </ContentTextBlock>
              <ContentTitle size="xl">
                Szászrégen gazdasági felemelkedése
              </ContentTitle>
              <ContentTextBlock>
                Szászrégen a 15. századra gazdasági és társadalmi szempontból
                igen gyors ütemben kezdett el fejlődni, így lassacskán
                kiemelkedett a Felső-Marosmenti települések közül és Észak
                Erdély egyik leggazdagabb városa lett. Egy 1483-ból származó
                dokumentum tájékoztat arról, hogy a városnak egy latin nyelvű
                iskolája van melyet a szászok létesítettek, vezetője pedig egy
                Petrus nevezetű tanító. A város gazdasági jelentőségét növelte
                kedvező fekvése, értékes szőlőhegyei, valamint ügyeskezű
                kézműves lakói. Fontos mérföldkőnek számított a város életében a
                mezővárosi státus elnyerése a 15. század elején. A város új
                jogállása értelmében belső ügyeit és közigazgatását saját maga
                intézte, valamint elsőfokú igazságszolgáltatásra is képes volt.
                A város lakói mostantól városi polgároknak számítottak, a
                kiváltságlevél pedig biztosította számukra a robotteljesítéstől
                való szabadulást és a szabad költözködési jogot. Szászrégen
                központi szerepét a környező településekkel szemben tovább
                erősítette jogi helyzete a vásártartásban és a céhszervezésben.
                1427-től évente négy országos vásárt és minden héten csütörtöki
                vásárt tarthatott. A középkori vásártartás hagyományát a mai
                napig megtartják. Az ipari céhek megalakulásával az ügyes
                kézműves polgárok kamatoztathatták tudásukat. Eleinte a
                kézművesek mivel kevesen voltak, érdekeik védelmére közös
                céhekbe szerveződtek. A 16. század második felére már önálló
                szervezetek kezdtek alakulni. 1570-ben megalakult a mészárosok
                ,1662-ben a tímárok és1681-ben a szíjgyártok céhe. A 18.
                századra a céhek tovább szakosodtak ezért a céhek száma
                megnövekedett, egy 1749-es összeírás szerint a városban 17 céh
                működött. A céhek kézműves termékeikkel elsősorban a város és a
                környező vidék lakóit látták.
              </ContentTextBlock>
              <ContentTextBlock>
                Szászrégen polgárai kiváltságait az elkövetkezendő századokban
                is megőrizték. 1551 októberében a város lakósainak szabad
                költözési jogát I. Ferdinánd király megerősíti. 1553-ban
                ugyancsak Ferdinánd megerősíti a városi bíróságot. Az
                elkövetkezendő királyok is sorban megerősítették a település
                kiváltságjogait. A 15. században Erdély déli részét sújtó török
                pusztítások ugyan elkerülték a FelsőMarosmentét, de a lehetséges
                veszély állandó félelemben tartotta a vidéket. A lehetséges
                támadások és betörések ellen erődített kastélyokat és várakat
                hoztak létre. Valószínűleg a 1501- ben építhették Szászrégen
                várát, melyet Johannes Honterus 1532-es térképén is feltüntet.28
                Valószínűleg egy vizesárokkal övezett, két toronnyal és kőfallal
                ellátott erődítményről beszélhetünk. A vár minden bizonnyal a
                mai evangélikus templom térségét övezte. A várfal az 1708. évi
                tűzvészkor romba dőlt, mivel nem vették hasznát a várfalnak,
                1857-ben teljesen lebontják. Az egyik kőfalon 1555-ből a
                következő felirat volt olvasható: „Nincs üdv a háborúban, békét
                óhajtunk mindnyájan”. Az egyre nagyobb népszerűségnek örvendő
                reformáció a 16. százada második felére a Felső-Marosmente
                településeire is eljutott. Szászrégenben a szászok lutheri, a
                magyarok a kálvini reformációt követték. A reformáció elött az
                egész város katolikus, utána szinte mindenki lutheránus vallású
                lett. Joseph Kimpiusnak köszönhetően terjed el az evangélikus
                vallás Szászrégenben, ezt az eseményt bizonyítja a gótikus
                templom déli falán látható latin nagybetűs felirat is, amely
                többek között utal az épület építési idejét jelző 1330-as
                évszámra.
              </ContentTextBlock>
              <ContentTitle size="xl">
                Háborús időszakok és kihívások a 16-17. században
              </ContentTitle>
              <ContentTextBlock>
                Szászrégen aránylag békés időszaka a 16. század második feléig
                tartott, melyet egy háborús és járványokkal teli időszak
                szakított félbe. Az elkövetkezendő századok komoly kihívás elé
                állították a Felső-Marosmente településeinek lakosait. A várost
                a 16. és 17. században többször is kifosztják és felégetik.
                Szászrégent 1564-ben Miksa császár seregei foglalták el, melyet
                János Zsigmond csapatai felszabadítottak, ezt követően a 15 éves
                háború korszaka árnyékolta be a vidéket. A törökök ellen
                létrejött Keresztény Liga kezdeti sikerei ellenére vereséget
                szenvedett. A többször lemondó Zsigmond fejedelem idegen
                csapatokat szabadított Erdélyre. Az egyik oldalon a Habsburg
                generális Basta, míg a másik oldalon Székely Mózes csapatai
                dúlják fel és fosztják ki a lakosságot. 1602-ben Konkoly Péter
                hajdúkapitány csapataival felégeti a várost. 1613-ban egész
                Erdélyt, beleértve a Felső-Marosmenti falvakat is a tatárok
                fosztogatják. II. Rákóczi György sikertelen Lengyelországi
                hadjáratát követően 1657-től kezdődőden több mint négy évig
                török csapatok pusztítják Erdélyt. A közeli Görgényszentimrei
                várban fogalmazta meg az első törvénykönyvgyűjteményt II.
                Rákóczi György bizottsága, amely közel 200 éven át Erdély
                alkotmányának gerincét képezte. A törvénygyűjteményt 1653.
                március 15-én hirdette ki II. Rákóczi György, teljes nevén:
                Erdélyországnak és a hozzákapcsolt magyarországi részeknek
                megerősített törvényei. Más néven az Approbáták, az erdélyi
                országgyűléseken 1540-óta hozott törvényeknek az
                összeszerkesztett gyűjteménye.
              </ContentTextBlock>
              <ContentTitle size="xl">
                Kemény János és a politikai fordulatok
              </ContentTitle>
              <ContentTextBlock>
                Mindeközben Szászrégenben az erdélyi országgyűlés a krimi
                rabságból visszatérő Kemény Jánost választotta Erdély
                fejedelmévé 1661. január 1-én, a szászrégeni evangélikus
                templomban (Szásztemplom), a leköszönő Barcsai Ákos helyébe. 36
                A porta kijelentette, hogy: „A fővezír reményt nyújtott
                Keménynek, hogy a porta őt megerősíti a fejedelemségben, ha
                cselekedettel fogja tanúsítani hogy nem ment Erdély romlására,
                hanem hatalmas császár szolgálatára”. A frissen megválasztott
                fejedelem viszont a Habsburgok oldalára állt, melyet a törökök
                kegyetlenül megtoroltak. Kemény János 1662-ben Segesváron
                vereséget szenvedett Ali pasától, kinek serege ezután szörnyű
                pusztítást végzett a mezőségen, a Felső-Marosmentén és más
                vidékeken. A dúlásokat Szászrégen és a környező falvak igencsak
                megszenvedték, a fosztogatást a következő évben egy
                pestisjárvány tetőzte. A 17. század végére Szászrégen vidékének
                lakossága igencsak megcsappant, ezek ellenére tovább
                folytatódtak a szerencsétlenségek a városban. A II. Rákóczi
                Ferenc vezette Habsburg ellenes szabadságharc idején a harcok a
                várost is sújtották, ekkor égett le 1708-ban az evangélikus
                templom. Tovább tetőzték a bajt az 1690-1711. évi tatár
                betörések, majd a várost sújtó 1718-19-es szárazság, éhínség és
                pestisjárvány. A viszontagságok ellenére a város fejlődése
                tovább tartott.
              </ContentTextBlock>
              <ContentTitle size="xl">
                Az 1848-49-es forradalom hatásai
              </ContentTitle>
              <ContentTextBlock>
                Szászrégen életében komoly fordulópontot jelentett az 1848-49-es
                forradalom és szabadságharc széthúzó küzdelme. Az
                összeegyezhetetlen nemzetségi politika, az unió megszavazása és
                a rendezetlen parasztkérdés az erdélyi románokat és szászokat
                eltávolították a magyar forradalom oldaláról. Ezt persze nem
                tűrték és szembenállás tört ki. Ez a belviszály szükségessé
                tette a lakosság védelmét. Erdélyben számos városban
                polgárőrséget szerveztek. Szászrégenben Urban alezredes hat
                századból álló zászlóalja védte a népet. A székely dandár
                csapatok azónban legyőzték Urban csapatait Vajdaszentivány
                határában. Másnap, november 1-én a székelyek bevonultak a
                városba. A megszálló csapatok mivel a megkövetelt hadisarcot nem
                kapták meg, vezetőjük rablást engedett, a fosztogatás közepette
                egy kereskedő boltban tűz ütött ki és a város nagyrésze leégett.
                Az 1848 előtti régi városból a tűzvész után szinte semmi sem
                maradt, ekkor a város legfontosabb iratai is megsemmisültek.
                Több mint 397 lakóház, világi és egyházi fontosságú épület vált
                a lángok martalékává, köztük a legnagyobb kárt az evangélikus
                templom szenvedte. Az anyagi kár értéke 1.5 millió forintra
                rúgott. Mindezek ellenére, Szászrégen fejlődése 1850 után indult
                be igazán, melyben az ipari forradalom termelési viszonyai, a
                város gazdasági, ipari és kereskedelmi tevékenységére pozitívan
                hatottak.
              </ContentTextBlock>
              <ContentTitle size="xl">
                Szászrégen fejlődése az ipari forradalom után
              </ContentTitle>
              <ContentTextBlock>
                A 19. század második felétől a legjelentékenyebb
                fakereskedelemmel foglalkozó város Erdély szerte. Elsősorban a
                város központja az 1848-as nagy leégés után új külsőt nyert. A
                város központjában a kornak megfelelően neobarokk és
                neoklasszicista stílusú modern épületeket emeltek a régiek
                helyére. Hatalmas tiszta piacteret és főutcát alakítottak ki a
                városban. Ekkor épült a környék legmagasabb épülete, a 2
                emeletes városi szálloda is. 1863-ban szabad királyi jogú
                várossá nyilvánították, melyet az 1870-es új közigazgatási
                törvény értelmében 1876-ban rendezett tanácsú városi státusra
                változtattak. Lakosai ekkor szőlő és földműveléssel, iparral és
                kereskedelemmel foglalkoznak. 1877-ben az újonnan létrejött
                Maros-Torda vármegye része lett. A Maros adta természetes vízi
                útját kihasználva megindult a fakitermelés szállítása a Kelemen
                és a Görgényi havasokból, melyet a 19. század végére a
                fellendült tutajozás bonyolított le. A város fejlődését tovább
                lendítette a Székelykocsárd-Marosvásárhely vasútvonal
                Szászrégenig való meghosszabbítása 1888-ban, melyet 1905-ben
                egészen Dédáig hosszabbítottak. A városban a legnagyobb gyárak
                közé a szeszgyárak, fűrészüzemek és textilgyárak tartoztak, ezek
                mellet működött még bőripar, kovács és szekérgyártó ipar.
              </ContentTextBlock>
              <ContentTitle size="xl">
                A szászrégeni gyáripar és a gazdasági növekedés
              </ContentTitle>
              <ContentTextBlock>
                A gyáripar fejlődése Szászrégenben a 19. század végén, és a 20.
                század elején, számos kis és nagyvállalat létrehozását vonta
                maga után. A 19. század végén működő legnagyobb gyárak közül
                megemlíteném az 1874-ben alapított Farkas Mendel szeszgyárat, a
                faipar fejlődésével együtt megalakultak a fűrészgyárak, melyek
                közül a Schwartz Mendel és Müler János fűrészgyára volt a
                legjelentősebb. Szászrégen fejlődését a 20. század első felében
                újabb megpróbáltatások érték a világháborúk képében, ezek
                ellenére a két világháború között virágzott a város gazdasága. A
                második világháború után a kisvállalatok mellet apránként
                megjelentek nagy termelést biztosító vállalatok. Mielőtt
                megemlíteném a gyárakat, kiemelném a város villanytelepét,
                melyet 1911-ben építettek, a villanyenergia előállításához pedig
                az ingyenes vízierőt használta fel. A vízierő által termelt
                villanyáramot elsősorban a város nagyiparainak állította elő.
                Ország szerte híres volt a Silva nevű sörgyár, ahol az egyik
                legjobb sört készítették Romániában. A gyárat felvásárolták és
                pusztulni hagyták, betonépületét napjainkban is megtekinthetjük.
              </ContentTextBlock>
              <ContentTitle size="xl">
                A nemzetközi hírnév és a szászrégeni hangszergyártás virágkora
              </ContentTitle>
              <ContentTextBlock>
                A városban a legjelentősebbek a fafeldolgozó vállalatok lettek,
                ezen belül is a hangszergyártás vált nemzetközi hírűvé a Hora és
                a Gliga hangszergyáraknak köszönhetően. A hangszergyárak
                sikerüket a környező erdők lucfenyőinek és juharfáinak
                köszönhetik, melyek igen alkalmasnak bizonyultak a hangszerek
                készítéséhez. Az itt készült hangszerek számos nemzetközi
                versenyt nyertek és olyan világhírű mestereket szólaltatták meg,
                mint Yehudi Menuhin. Nem csoda, hogy Szászrégent a hegedűk
                városaként is emlegetik, ezt jelképezi Barothi Ádám
                szobrászművész Hegedűk Piramisa szobra is. A legjelentősebb
                gyárak közül megemlíteném az 1953-ban alapított mezőgazdasági
                traktorokat, gépi felszereléseket és csere alkatrészeket gyártó
                Irum SA vállalatot. A fémiparral foglalkozó Republicát, (később
                Metalurgica), amely a fém eszközök gyártásával foglalkozott,
                napjainkban a gyárat felszámolták és helyébe bevásárlóközpontot
                létesítettek. Kiemelném még a sporteszközöket gyártó Alpina-t és
                az IPL-t, amely a város igen jelentős fafeldolgozó vállalatának
                számított az 1980-as években.
              </ContentTextBlock>
              <ContentTitle size="xl">Modernizáció</ContentTitle>
              <ContentTextBlock>
                A második világháború rombolásait a város hamar kilábalta és
                fejlődésnek indult, a gyárak mellet az oktatás és az egészségügy
                is javult. A város piacterére egy hatalmas parkot létesítettek,
                annak érdekében, hogy az emberek ne tudjanak nagy tömegbe
                összegyűlni és fellázadni a kormány ellen. A 2000 évek elején
                elkezdték jobban kiépíteni a várost, ennek értelmében új
                tömbháznegyedekkel és két új templommal bővült. Az Unirii
                negyedben megépítették a Szent György ortodox és a mellette lévő
                monumentális görögkatolikus templomot. 1994-ben Szászrégent
                municípiumi, megyei jogú városi rangra emelték.
              </ContentTextBlock>
              <ContentTextBlock>
                Szászrégen történelme, hagyományai és értékei lassan a múlt
                homályába vésznek, addigra is törekedjünk megőrizni jelenlegi
                értékeit. Az évszázadok során tapasztalt nehézségek ellenére
                mindig sikerült újból talpra állnia és tovább fejlődnie. Marjai
                Éva szavaival élve Szászrégen jó példája annak, miként lehet
                veszteségek után talpra állni, a lehetőségekkel jól élni, jövőt
                építeni.
              </ContentTextBlock>
            </div>
          </div>
        </GridRow>
      </section>
    </>
  );
}
