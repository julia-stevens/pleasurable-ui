# Pleasurable User Interface

## Feature branches & Pull requests

Deze week hebben we _Branches_ en _Pull Requests_ geïntroduceerd. Door deze manier van werken te gebruiken in een Git(Hub) repository, maak je jezelf klaar voor het bedrijfsleven. Zodra je in een team werkt, zeker als junior developer, kan je werk op deze manier makkelijk, snel en goed gereviewed worden.

## Richtlijnen voor feature branches

Om het werken met branches en pull requests soepel te laten verlopen, zijn een aantal richtlijnen wel handig. Je zult later merken dat elk bedrijf of team het weer net even anders doet, maar over het algemeen kun je met deze tips makkelijker samenwerken.

Elke keer dat je met een nieuw issue aan de slag gaat, kun je het best een nieuwe _feature branch_ aanmaken voor dat issue. Vaak gebruik je als naam voor zo'n branch een korte titel en het nummer van het issue zelf, bijvoorbeeld `header-22`, `speaker-detail-13`, of `partners-5`. Het is dus _niet_ handig om continu in één branch te werken, die je bijvoorbeeld jouw naam geeft. Je werkt dan wel afgeschermd van de `main` branch, maar nog niet met _feature branches_. (Het kan ook prima voorkomen dat verschillende teamleden in dezelfde feature branch werken, wat nog een reden is om een branch niet naar jezelf te vernoemen.)

Je kunt hierdoor aan verschillende features (issues) tegelijk werken, in verschillende branches. Soms blijkt werk net wat complexer, moet dat even wachten, en ga je door met een ander issue. Je gaat dan dus op een andere branch verder (via een _checkout_). Net als dat je commits koppelt aan de juiste issues, voer je je werk ook uit in de juiste feature branch. Hiermee maak je het ook mogelijk om verschillende pull requests bij verschillende teamleden neer te leggen.

Probeer niet te lang in dezelfde branch te werken (maximaal een paar dagen), zodat je _Short-Lived Feature Branches_ krijgt. Als je te lang in dezelfde branch aan het werk bent, is dat een teken dat je issue te groot was. Waarschijnlijk is het dan slim om dat op te splitsen, zodat het werk beter behapbaar wordt.

Een andere richtlijn is dat je branches weggooit en opschoont, zodra ze gemerged zijn naar de `main` branch. Hiermee hou je je repository netjes en overzichtelijk, en kun je snel zien welke features in ontwikkeling zijn. Tijdens een standup met je team is het overzicht van branches een handige manier om te vertellen waar je mee bezig bent, waar je vastloopt en waar je hulp nodig hebt.

### Bronnen

- [About branches - GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
- [Creating and deleting branches within your repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)

## Pull Requests aanmaken
<!--
## Aanpak

Leren hoe je dit kan mergen met een pull request en review
Hoe schrijf je een nette pull request?


-------  

Dus eerst deze week lekker stoeien zelf
 
Woensdag het hele concept van pull requests aanmaken helemaal uitkleden
Vrijdag het concept van pull requests reviewen helemaal uitkleden
 
Woensdag -> vraagt begeleiding waar nodig
Vrijdag -> geeft feedback aan teamleden + verwerkt ontvangen feedback

 

-->
