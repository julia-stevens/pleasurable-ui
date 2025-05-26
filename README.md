# Pleasurable User Interface

Ontwerp en maak met een team voor een opdrachtgever een interface waar gebruikers blij van worden.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/pleasurable-ui/blob/main/docs/INSTRUCTIONS.md)

![poster oncollaboration](https://github.com/user-attachments/assets/a2db428b-6a3f-41c6-853d-abf2109516d5)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

### Webinars

#### **Bookmark functionaliteit webinars**

De webinars hebben een bookmark functionaliteit. Dit houdt in dat de webinars toegevoegd en verwijderd kunnen worden aan/uit de bookmarks. Op deze manier kunnen gebruikers de favoriete webinars op een later moment terugkijken.

- **Toegankelijkheid (reliable):** De bookmark functionaliteit is bruikbaar voor iedereen inclusief screenreaders. Het is ontwikkeld met semantische HTML hierdoor goed navigeerbaar met de tab-toets. Dit is getest in deze issue #
- **Responsiveness: (Usable):** De bookmark knop werkt op verschillende devices en formaten. Er wordt mobile first gewerkt aan de hand van `@media queries`
- **Performance (Reliable):** De bookmarkstatus wordt visueel geüpdatet dit zorgt voor een snelle performance en betrouwbare interpretatie bij de gebruiker.
- **Progressive Enhancement (Pleaserable)** De core functionaliteit: het toevoegen en verwijderen van bookmarks werkt zonder JS. In moderne browsers is de bookmark functionaliteit enhanced (mooier gemaakt) met een loading state en animaties. Hierdoor voelt de het bookmarken van webinars aangenamer aan voor gebruikers.

https://github.com/user-attachments/assets/c81888a4-6d88-4df4-9ce2-953a6c339c87

#### **Filter functionaliteit webinars**

De webinars zijn via de filter functionaliteit te filteren op categorie en datum. Op deze amneir kunnen gebruikers gemakkelijker een webinar vinden naar interesse.

De webinars zijn via de filter functionaliteit te filteren op categorie en datum. Op deze manier kunnen gebruikers gemakkelijker een webinar vinden naar interesse.

- **Toegankelijkheid (Reliable):** De filteropties zijn opgebouwd met semantische HTML elementen: `<select>` en `<option>`. Daarnaast zijn de filters te navigeren met de tab-toets, door de verschillende `<option>` items is te navigeren met de spatie-toets.
- **Responsiveness (Usable):** De filters zijn zo ontworpen dat ze zich aanpassen aan schermbreedte. Deze zijn mobile first ontwikkeld met `@media queries` en zijn hierdoor voor elke gebruiker te gebruiken op elk schermformaat.
- **Performance (Reliable):** Resultaten verschijnen direct of met minimale vertraging. Dit zorgt voor een snelle en betrouwbare gebruikerservaring.
- **Progressive Enhancement (Pleasurable):** De core functionaliteit: het filteren van een webinar op categorie en datum, blijft ook zonder JS en CSS werken. In moderne browsers wordt de filter enhanced (mooier gemaakt) met animaties en extra styling elementen.

https://github.com/user-attachments/assets/3890dc21-2800-4a6a-b10a-edd7070f33cd

### Header en footer

De header bevat de main linkjes van de website. In de footer staan alle linkjes vermeld. Daarnaast bevatten de header en footer beiden de logo's van het AvL ziekenhuis en Kemenkes.

- **Toegankelijkheid (Reliable):** De header en footer zijn opgebouwd met semantische HTML-elementen, zoals `<header>`, `<footer>` en `<nav>`, zodat screenreaders de structuur van de pagina correct interpreteren. Alle links zijn voorzien van duidelijke en beschrijvende teksten, en goed navigeerbaar met toetsenbord via de tab-toets.
- **Responsiveness (Usable):** De layout van de header en footer is mobile first opgebouwd met behulp van `@media queries`
- **Performance (Reliable):**  De header en footer laden snel doordat ze eenvoudig zijn opgebouwd en gebruikmaken van geoptimaliseerde afbeeldingen.
- **Progressive Enhancement (Pleasurable):** In moderne browsers wordt de navigatie visueel verrijkt met animaties, hover-effecten en scroll animaties die de gebruikerservaring verbeteren. Tegelijk blijft de core functionaliteit: navigeren via de header en footer behouden blijft zonder JavaScript of CSS.


https://github.com/user-attachments/assets/b2a6bb8b-ad1b-488e-b60c-3f595c388313

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
