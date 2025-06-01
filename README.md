# Pleasurable User Interface

Ontwerp en maak met een team voor een opdrachtgever een interface waar gebruikers blij van worden.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/pleasurable-ui/blob/main/docs/INSTRUCTIONS.md)

![poster oncollaboration](https://github.com/user-attachments/assets/a2db428b-6a3f-41c6-853d-abf2109516d5)


## Inhoudsopgave

  * [Wat is er gemaakt?](#eindproduct)
  * [Opdrachtbeschrijving](#Opdrachtbeschrijving)
  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

# Oncollaboration 

## Eindproduct

Voor dit project hebben wij een interactieve en informatieve webapplicatie ontwikkeld voor het Antoni van Leeuwenhoek en het Kenemkes ziekenhuis. De website is specifiek ontworpen voor artsen uit Nederland en Indonesië, met als doel kennisdeling en samenwerking over landsgrenzen heen te verbeteren.

Gebruikers van de website (voornamelijk medisch specialisten) kunnen live of opgenomen webinars bekijken, deze opslaan in hun persoonlijke kijklijst (bookmarkfunctie) en actief deelnemen door reacties te plaatsen. Daarnaast bevat het platform profielen van sprekers en artsen, waardoor gebruikers meer context en achtergrondinformatie krijgen bij de sessies.

Een unieke functie van de applicatie is het delen van contouring beelden. Dit zijn medische afbeeldingen waarop andere artsen feedback kunnen geven of vragen kunnen stellen. Deze interactie draagt bij aan verdieping van kennis en verbetering van medische vaardigheden.

Het platform fungeert als een digitaal leer- en samenwerkingscentrum, waar medische professionals ervaringen kunnen uitwisselen, kennis kunnen verdiepen en verschillende culturen en werkwijzen kunnen toepassen.

Live link: https://edu.nl/xyg48

## Opdrachtbeschrijving

De opdracht was om samen met een team, voor een echte opdrachtgever, een gebruiksvriendelijke interface te ontwerpen en te bouwen waar gebruikers blij van worden.

Ons project richtte zich op het ontwikkelen van een online platform voor radiotherapeuten uit Nederland en Indonesië. Dit platform moest samenwerking en kennisdeling makkelijker maken. De basis hiervoor was een ontwerp uit een afstudeerproject van oud-CMD student Sergio Eijben, in samenwerking met het Antoni van Leeuwenhoek ziekenhuis.

--------

## Beschrijving 
### Home
De `home` pagina geeft de gebruiker het allereerste beeld van de website, daarom is het belangrijk dat ze een vertrouwd gevoel krijgen op deze pagina en geïnteresseerd zijn of worden om verder te kijken op de website. Op de home pagina staat de belangerijkste informatie over Oncollaboration met linkjes naar de andere pagina's als de gebruiker hier meer over wilt lezen. <br>
Met het ontwerpen en maken van deze pagina heb ik rekening gehouden met de **Hierarchy of User Needs**. Hieronder leg ik stap voor stap uit hoe ik dit heb toegepast.

#### 1  -  Functional (Functioneel)
Ik heb ervoor gezorgd dat alle data op deze pagina ook zichtbaar / bruikbaar is als er alleen HTML wordt ingeladen in de browser. Ook heb ik gewerkt volgens het **mobile first** principe, dit houd in dat de pagina gebouwd is voor een mobiel scherm. Door de juiste HTML structuur is de pagina ook volledig toegankelijk voor gebruikers die via het toetsenbord navigeren.
Vanaf hier ben ik verder gaan werken aan de styling van de website, om zo verder in de Hierarchy of User Needs driehoek te komen.
![image](https://github.com/user-attachments/assets/1b23dca7-1457-4957-a3d1-1304b328a813)

#### 2  -  Reliable (Betrouwbaar)
De pagina bied snel de content die word ingeladen uit de database, de links naar andere pagina's werken zoals de gebruiker dit zal verwachten. Kortom de pagina zal niet voor gekke verassingen zorgen. 

#### 3  -  Usable (Gebruiksvriendelijk)
Door het uiterlijk van de pagina in de huisstijl van Oncollaboration krijgt de gebruiker een fijne indruk van de webpagina. In de huisstijl is rekening gehouden met het contrast van de kleuren, zo is de website voor iedere gebruiker goed toegankelijk. Om het voor de gebruikers die met een toestenbord over de pagina navigeren duidelijk te maken waar ze zich bevinden op de pagina is de focus state op de buttons/links opvallender gemaakt.
<br> ![image](https://github.com/user-attachments/assets/d646dd06-5492-43a0-b628-b5110810b066)

#### 4  -  Pleasurable (Aangenaam)
De hover states op de buttons/links geven de gebruiker het gevoel dat de interface "leeft" en met hen communiceert. Door de speelse styling hiervan maakt dit de pagina meer aantrekkelijk voor de gebruikers.
https://github.com/user-attachments/assets/8fbcc7a0-380f-4317-bedf-b517917bc338

*** 
### Webinars

#### **Bookmark functionaliteit webinars**

De webinars hebben een bookmark functionaliteit. Dit houdt in dat de webinars toegevoegd en verwijderd kunnen worden aan/uit de bookmarks. Op deze manier kunnen gebruikers de favoriete webinars op een later moment terugkijken.

- **Toegankelijkheid (functional):** De bookmark functionaliteit is bruikbaar voor iedereen inclusief screenreaders. Het is ontwikkeld met semantische HTML hierdoor goed navigeerbaar met de tab-toets. Dit is getest in deze issue #47
- **Responsiveness: (Usable):** De bookmark knop werkt op verschillende devices en formaten. Er wordt mobile first gewerkt aan de hand van `@media queries`
- **Performance (Reliable):** De bookmarkstatus wordt visueel geüpdatet dit zorgt voor een snelle performance en betrouwbare interpretatie bij de gebruiker.
- **Progressive Enhancement (Pleaserable)** De core functionaliteit: het toevoegen en verwijderen van bookmarks werkt zonder JS. In moderne browsers is de bookmark functionaliteit enhanced (mooier gemaakt) met een loading state en animaties. Hierdoor voelt de het bookmarken van webinars aangenamer aan voor gebruikers.

https://github.com/user-attachments/assets/c81888a4-6d88-4df4-9ce2-953a6c339c87

#### **Filter functionaliteit webinars**

De webinars zijn via de filter functionaliteit te filteren op categorie en datum. Op deze amneir kunnen gebruikers gemakkelijker een webinar vinden naar interesse.

De webinars zijn via de filter functionaliteit te filteren op categorie en datum. Op deze manier kunnen gebruikers gemakkelijker een webinar vinden naar interesse.

- **Toegankelijkheid (Functional):** De filteropties zijn opgebouwd met semantische HTML elementen: `<select>` en `<option>`. Daarnaast zijn de filters te navigeren met de tab-toets, door de verschillende `<option>` items is te navigeren met de spatie-toets.
- **Responsiveness (Usable):** De filters zijn zo ontworpen dat ze zich aanpassen aan schermbreedte. Deze zijn mobile first ontwikkeld met `@media queries` en zijn hierdoor voor elke gebruiker te gebruiken op elk schermformaat.
- **Performance (Reliable):** Resultaten verschijnen direct of met minimale vertraging. Dit zorgt voor een snelle en betrouwbare gebruikerservaring.
- **Progressive Enhancement (Pleasurable):** De core functionaliteit: het filteren van een webinar op categorie en datum, blijft ook zonder JS en CSS werken. In moderne browsers wordt de filter enhanced (mooier gemaakt) met animaties en extra styling elementen.

https://github.com/user-attachments/assets/3890dc21-2800-4a6a-b10a-edd7070f33cd

*** 
### Webinar detail
De `webinar detail` pagina is de pagina waar de gebruiker komt om een webinar terug te kijken, of om hier informatie over te verkrijgen. Dit kan door beschrijving te lezen, de speakers van de webinar te bekijken of door een vraag in de comments achter te laten.

#### 1  -  Functional (Functioneel)
Ik heb ervoor gezorgd dat alle data op deze pagina ook zichtbaar / bruikbaar is als er geen CSS wordt ingeladen in de browser. Ook heb ik gewerkt volgens het **mobile first** principe, dit houd in dat de pagina gebouwd is voor een mobiel scherm. Door de juiste HTML structuur is de pagina ook volledig toegankelijk voor gebruikers die via het toetsenbord navigeren. <br>
Ook de chat/comment functie is volledig te bedienen via het toetsenbord en blijft werkend zonder dat er styling voor nodig is.
![image](https://github.com/user-attachments/assets/da8b3a39-21f8-473b-a2e4-107eeb0350f7)

#### 2  -  Reliable (Betrouwbaar)
De pagina is ook toegankelijk op grotere schermen. De data wordt efficiënt ingeladen uit de database waardoor dit altijd snel te zien is op de pagina. De chat/comment functie blijft ook werken op verschillende scherm groottes.  

#### 3  -  Usable (Gebruiksvriendelijk)
De chat/comment functie geeft aan wanneer er een comment wordt verzonden dat de browser aan het laden is en de gebruiker dus niet ongeduldig hoeft te worden. Ook refresht niet de gehele pagina maar alleen het stukje van de comments zodat de gebruiker niet zelf de gehele pagina hoeft te refreshen, maar ook geen last heeft van de pagina die automatisch refresht.
**FILMPJE LOADING STATE**

#### 4  -  Pleasurable (Aangenaam)
De basis van de chatfunctie blijft het altijd doen, door de styling die in alle nieuwe browsers wordt ondersteund wordt de gebruikers ervaring voor de gebruiker een stuk fijner. 

*** 
### Header en footer

De header bevat de main linkjes van de website. In de footer staan alle linkjes vermeld. Daarnaast bevatten de header en footer beiden de logo's van het AvL ziekenhuis en Kemenkes.

- **Toegankelijkheid (Functional):** De header en footer zijn opgebouwd met semantische HTML-elementen, zoals `<header>`, `<footer>` en `<nav>`, zodat screenreaders de structuur van de pagina correct interpreteren. Alle links zijn voorzien van duidelijke en beschrijvende teksten, en goed navigeerbaar met toetsenbord via de tab-toets.
- **Responsiveness (Usable):** De layout van de header en footer is mobile first opgebouwd met behulp van `@media queries`
- **Performance (Reliable):**  De header en footer laden snel doordat ze eenvoudig zijn opgebouwd en gebruikmaken van geoptimaliseerde afbeeldingen.
- **Progressive Enhancement (Pleasurable):** In moderne browsers wordt de navigatie visueel verrijkt met animaties, hover-effecten en scroll animaties die de gebruikerservaring verbeteren. Tegelijk blijft de core functionaliteit: navigeren via de header en footer behouden blijft zonder JavaScript of CSS.

https://github.com/user-attachments/assets/c436be47-9c8e-4c73-96e6-c383b82f95ee

*** 
### Speakers
Op de `speakers` pagina krijgt de gebruiker een overzicht van alle sprekers die een webinar hebben gegeven. De sprekers kunnen vanaf deze pagina ge-bookmarked worden én de gebruiker kan doorklikken voor meer informatie over de betreffende spreker. 

#### Hierarchy of User Needs
Deze pagina, inclusief bijbehorende functionaliteiten (zoals het bookmarken) zijn opgebouwd volgens de [Hierarchy of User Needs](https://www.nngroup.com/articles/theory-user-delight/). Dit is een model dat beschrijft aan welke basisvoorwaarden een digitale ervaring moet voldoen voordat het echt waardevol en betekenisvol wordt voor de gebruiker. Het bestaat uit verschillende niveaus die ik bij onderstaande, uitgelichte features zal toelichten. 

#### Speaker page & bookmark functionaliteit
De bookmark functie op de `speaker` pagina geeft de gebruiker de mogelijkheid sprekers te bookmarken en un-bookmarken. De bookmarks zijn terug te vinden op de profiel pagina van de gebruiker, voor eenvoudige navigatie naar de favoriete sprekers. In een later stadium zou hier een functie aan gekoppeld kunnen worden dat een gebruiker meldingen krijgt van nieuwe webinars van gebookmarkte sprekers. 

**1 & 2 - Functional & Reliable**

De bookmark functie is gebouwd met semantisch correcte HTML. Dit wil zeggen dat de functie toegankelijk is en dus gebruikt kan worden door gebruikers die met het toetsenbord navigeren en ook voor gebruiker die afhankelijk zijn van een screenreader, dit is getest in [#47](https://github.com/julia-stevens/pleasurable-ui/issues/47).
Daarnaast draagt het bij aan de SEO, oftewel zoekmachines begrijpen de inhoud van de code beter. Ook maakt het code beter onderhoudbaar en past is het een best practice. 

In deze laag is ook de eerste stap zichtbaar van het _progressive enhancement_ principe. Dit principe houdt in dat je een functie eerst bouwt met pure, eenvoudige code, waarmee de functie in de basis werkt. Vervolgens, in de volgende lagen, wordt de functie uitgebreid (enhanced). Voor de bookmark functie betekent dit bijvoorbeeld dat de functie ook functioneert als een gebruiker een verouderde browser heeft, waarin sommige nieuwe code bijvoorbeeld niet ondersteund wordt. Dit is getest in [#50](https://github.com/julia-stevens/pleasurable-ui/issues/50). 

**3 - Usable**

De bookmark functie en de hele pagina zijn op ieder apparaat te gebruiken. Dit omdat de pagina en de functie gebouwd zijn volgens het _mobile first principe_. Dit wil zeggen dat de pagina eerst voor mobiel is ontworpen en gebouwd, en vervolgens zijn uitgebreid voor grotere schermbreedtes. Zie onderstaande afbeelding: 

![image](https://github.com/user-attachments/assets/351c5e01-9b5b-436f-a537-0bc3e0d05836)

Voor de bookmark functie heb ik ervoor gezorgd dat de tekst 'bookmark' of 'bookmarked' wordt aangepast in HTML. Hiermee zorg ik ervoor dat de gebruiker, ongeacht in welke browser (nieuw of oud) of welk apparaat, altijd te feedback krijgt en dus kan zien of een spreker ge-bookmarked is of niet. 

**4 - Pleasurable**

In deze laatste laag is gewerkt aan aan het creëeren van een nóg prettigere gebruikerservaring. Dit door het toevoegen van een `loading` animatie en het voorkomen van een volledige refresh van de pagina. Hiermee dus ook de laatste stappen van het _progressive enhanced_ principe. Zie bijvoorbeeld onderstaande video: 

https://github.com/user-attachments/assets/e4696289-9829-47dc-bfe9-7e50215a10dd

#### Filter animatie
Op zowel de `webinars` pagina als de `speakers` pagina heeft de gebruiker de mogelijkheid om het overzicht van webinars of sprekers te filteren. Deze functie is wederom opgebouwd met de verschillende lagen van de [Hierarchy of User Needs(https://www.nngroup.com/articles/theory-user-delight/).

**1 & 2 - Functional & Reliable**

De bookmark functie is gebouwd met semantisch correcte HTML. Dit wil zeggen dat de functie toegankelijk is en dus gebruikt kan worden door gebruikers die met het toetsenbord navigeren en ook voor gebruiker die afhankelijk zijn van een screenreader, dit is getest in [#47](https://github.com/julia-stevens/pleasurable-ui/issues/47).
Daarnaast draagt het bij aan de SEO, oftewel zoekmachines begrijpen de inhoud van de code beter. Ook maakt het code beter onderhoudbaar en past is het een best practice. 

In deze laag is ook de eerste stap zichtbaar van het _progressive enhancement_ principe. Dit principe houdt in dat je een functie eerst bouwt met pure, eenvoudige code, waarmee de functie in de basis werkt. Vervolgens, in de volgende lagen, wordt de functie uitgebreid (enhanced). Voor het filter betekent dit de functie op elk apparaat in elke browser werkt. Dit is getest in #50.

**3 - Usable**

Het filter is gemakkelijk te gebruiken, ook als de styling of de animatie niet ondersteund wordt. Daarnaast zijn de filters op kleine en grote schermen te gebruiken. Dit omdat de pagina en de functie gebouwd zijn volgens het _mobile first principe_. Dit wil zeggen dat de pagina eerst voor mobiel is ontworpen en gebouwd, en vervolgens zijn uitgebreid voor grotere schermbreedtes. Zie onderstaande afbeelding: 

![image](https://github.com/user-attachments/assets/351c5e01-9b5b-436f-a537-0bc3e0d05836)

**4 - Pleasurable**

In deze laatste laag van de hierarchy is gewerkt aan het pleasurable maken van de interactie. Hiervoor is de dropdown volledig gestyled volgens de huisstijl en een animatie toegevoegd met nieuwe CSS. Wanneer een browser of apparaat deze nieuwe code niet ondersteund, blijft het filter gewoon werken, met de standaard styling van de browser. Wanneer alles wel wordt ondersteund krijgt de gebruiker onderstaande animatie: 

https://github.com/user-attachments/assets/88641fce-9ed1-48bb-8e82-bcec23454f19

https://github.com/user-attachments/assets/a0c0e4ba-bdee-4b13-9f4f-e8a5ac45bcfe

## Kenmerken 
In dit project is gebruikt gemaakt van Node.js en Express om een webserver op te zetten. Ik gebruik Liquid als template-engine voor het genereren van dynamische HTML-pagina's.

### Routes en dataverwerking [links worden aangevuld wanneer server klaar is]
* [`app.get("/")`](https://github.com/julia-stevens/pleasurable-ui/blob/8fc7138fc3fea61b9104f8a3883c27a5629c0a5f/server.js#L39-L50): Laadt de homepage en rendert de `index.liquid`.

* [`app.get("/webinars")`](https://github.com/julia-stevens/pleasurable-ui/blob/8fc7138fc3fea61b9104f8a3883c27a5629c0a5f/server.js#L52-L102): Haalt alle webinars op via de Directus API en past filters toe op categorie en sorteervolgorde. Bookmark-data wordt opgehaald via `messages`, en alles wordt gerenderd in `webinars.liquid`.
* [`app.get("/webinars/:slug")`](https://github.com/julia-stevens/pleasurable-ui/blob/8fc7138fc3fea61b9104f8a3883c27a5629c0a5f/server.js#L104-L127): Haalt detailgegevens op van één specifieke webinar (inclusief sprekers, categorieën en resources) op basis van de slug en toont dit in `webinars-detail.liquid`.
* [`app.post("/webinars")`](https://github.com/julia-stevens/pleasurable-ui/blob/8fc7138fc3fea61b9104f8a3883c27a5629c0a5f/server.js#L307-L350): Verwerkt het toevoegen of verwijderen van een webinar uit de bookmarks. Dit gebeurt via `messages` in de Directus API.

* [`app.get("/contourings")`](https://github.com/julia-stevens/pleasurable-ui/blob/8fc7138fc3fea61b9104f8a3883c27a5629c0a5f/server.js#L129-L137): Haalt een lijst van alle contourings op en toont deze in `contourings.liquid`.
* [`app.get("/contourings/:slug")`](https://github.com/julia-stevens/pleasurable-ui/blob/8fc7138fc3fea61b9104f8a3883c27a5629c0a5f/server.js#L139-L151): Haalt de detailgegevens van een contouring op via de slug en toont dit in `contourings-detail.liquid`.

* [`app.get("/speakers")`](https://github.com/julia-stevens/pleasurable-ui/blob/8fc7138fc3fea61b9104f8a3883c27a5629c0a5f/server.js#L153-L195): Haalt alle sprekers op, toont bookmarks (op basis van `Bookmark for Julia`) en ondersteunt filtering op "all" of "bookmarked". Wordt weergegeven in `speakers.liquid`.
* [`app.get("/speakers/:slug")`](https://github.com/julia-stevens/pleasurable-ui/blob/8fc7138fc3fea61b9104f8a3883c27a5629c0a5f/server.js#L269-L286): Laadt de detailpagina van een specifieke spreker (inclusief gerelateerde webinars) in `speakers-detail.liquid`.
* [`app.post("/speakers")`](https://github.com/julia-stevens/pleasurable-ui/blob/8fc7138fc3fea61b9104f8a3883c27a5629c0a5f/server.js#L197-L249): Verwerkt het bookmarken of unbookmaken van een spreker. Controleert op duplicatie en gebruikt `_method=DELETE` voor verwijderacties.
* [`app.post("/speakers/:id/unbookmark")`](https://github.com/julia-stevens/pleasurable-ui/blob/8fc7138fc3fea61b9104f8a3883c27a5629c0a5f/server.js#L251-L267): Verwijdert expliciet een bookmark voor een spreker op basis van ID, met redirect naar de juiste filter.

* [`app.get("/about-us")`](https://github.com/julia-stevens/pleasurable-ui/blob/8fc7138fc3fea61b9104f8a3883c27a5629c0a5f/server.js#L288-L305): Haalt teamleden, partnerlogo’s en contentblokken op en rendert deze op de `about-us.liquid` pagina.

### Data ophalen en HTML renderen

* Gegevens worden opgehaald via `fetch()`-aanroepen naar de Directus API, bijvoorbeeld voor webinars, sprekers, categorieën en berichten (bookmarks).  
  _Voorbeeld: ophalen van webinars met gerelateerde sprekers, categorieën en resources._
* Rendering gebeurt met behulp van [Liquid templates](https://liquidjs.com/), waarbij data via Express wordt doorgegeven aan `.liquid` views.
* Bookmarks worden opgeslagen als berichten in Directus (`avl_messages`) en worden gesorteerd/gefilterd op basis van `text` (bijv. webinar ID) en `for` (bijv. `"Bookmark for Julia"`).
* Filters in routes zoals `/webinars` en `/speakers` maken gebruik van querystrings (`?category=...`, `?sort=...`, `?filter=...`) voor dynamische weergave.

### Technische stack
- **Express.js** als backend webframework
- **LiquidJS** voor template rendering
- **Directus** als headless CMS en API backend
- **Method-override** om `POST`-formulieren te gebruiken als `DELETE`
- **Fetch** voor data-ophaalverzoeken naar de API

## Installatie
Zoals beschreven bij Kenmerken is bij dit project gebruik gemaakt van NodeJS. Om aan dit project te werken moet NodeJS geïnstalleerd zijn. Eenmal geïnstalleerd kan het project geopend worden in de code editor.

Voer in de terminal `npm install` uit om alle afhankelijkheden te installeren.

Voer vervolgens `npm start` uit om de server te starten.

Ga in je browser naar `http://localhost:8000` om het project te bekijken.

### Nodemon 
Om het werken makkelijker te maken is ook `nodemon` in dit project geïnstalleerd. Hiermee wordt de server automatisch opnieuw opgestart bij wijzigingen en hoeft dit niet meer handmatig gedaan te worden met `npm start`. 

Om met `nodemon` te werken, type `npm run dev` in de terminal.


# About Us-pagina

De About Us-pagina geeft users meer informatie over Oncollaboration. Ze kunnen hier lezen over het team en het doel van de organisatie, maar ook kennismaken met de doctoren die eraan meewerken en de partners waarmee wordt samengewerkt.

De pagina bestaat uit drie delen: een introductietekst met afbeelding, een overzicht van het team, en een sectie waarin de partnerlogo's voorbij scrollen.

https://github.com/user-attachments/assets/7749bf5a-ce0c-4533-aae8-17132ffb6d86

## 1 - Functional (Functioneel)

- Alle content op deze pagina wordt opgehaald via een API en dynamisch weergegeven met behulp van Liquid. Dat betekent dat teksten, teamleden en logo's automatisch verschijnen zonder dat ik dit handmatig hoef in te voeren, en kunnen worden aangepast in de database. Hierdoor wordt het automatisch op alle pagina's waar dit wordt aangeroepen dynamisch aangepast.
- De pagina is mobielvriendelijk opgebouwd met het mobile-first principe. Op kleine schermen wordt de content netjes onder elkaar getoond, terwijl op grotere schermen de layout zich aanpast dankzij `flexbox` en `grid`.
- Ook zonder styling blijft de pagina bruikbaar: de HTML-structuur is logisch opgebouwd en zorgt ervoor dat alle content gewoon leesbaar blijft als de CSS niet goed wordt geladen of browsers technieken niet ondersteunen.


## 2 - Reliable (Betrouwbaar)

- De pagina werkt goed op verschillende schermgroottes – van mobiel tot desktop. Door server-side rendering worden de API-gegevens elke keer goed opgehaald en direct op de pagina ingeladen.
- De teamleden worden automatisch in een overzichtelijke layout geplaatst. Daarbij wordt standaard CSS `Grid` gebruikt voor moderne browsers, wat zorgt voor een nette verdeling van de kaarten. Voor oudere browsers die geen `grid` ondersteunen, is er een fallback naar `flexbox` ingesteld. Hierdoor blijft de content altijd correct uitgelijnd en bruikbaar.
- De partnerlogo’s maken gebruik van een horizontale `scroll-animatie`. Als de animatie of `keyframes` niet worden ondersteund door een browser, blijven de logo’s alsnog zichtbaar op een vaste positie. Dit zorgt ervoor dat er nooit lege ruimte ontstaat of dat content verdwijnt.

## 3 - Usable (Gebruiksvriendelijk)

- De pagina is overzichtelijk opgebouwd: duidelijke titels, korte teksten en logische indeling. Bezoekers kunnen snel scannen wie er in het team zit, wat iemands functie is, en op de 'View doctor'-link klikken als ze meer willen weten.
- Ook de partnerlogo’s worden op een toegankelijke manier weergegeven. Dankzij de rustige animatie scrollen ze automatisch voorbij, zonder dat de gebruiker iets hoeft te doen of interactie vereist is.
- De layout past zich automatisch aan voor alle schermformaten, en is goed bruikbaar met alleen het toetsenbord, wat belangrijk is voor toegankelijkheid.

## 4 - Pleasurable (Aangenaam)

- Naast dat de pagina goed werkt, is er ook aandacht besteed aan styling. De kleuren, typografie en spacing zorgen voor een rustige en professionele sfeer. Deze sluit ook aan op de huisstijl, en vormt dus 1 geheel met de andere pagina's.
- De scroll-animatie van de partnerlogo’s geeft net dat beetje extra dynamiek, zonder dat het druk of afleidend wordt. Afbeeldingen van teamleden worden netjes weergegeven, en de afgeronde hoeken en zachte kleuren maken het geheel vriendelijk en uitnodigend.
- Ook wanneer animaties niet worden ondersteund, blijft het geheel er visueel verzorgd en compleet uitzien.

## Gebruikte technieken

- Liquid templates
- Directus API
- CSS (met custom properties)
- CSS Grid met fallback naar flexbox (`@supports`)
- Responsive images (AVIF, WebP, JPG)
- Lazy loading van afbeeldingen
- CSS animaties (voor scrollende logo's met `@keyframes`)



## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
