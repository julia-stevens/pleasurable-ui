# Pleasurable User Interface

## Feature branches & Pull requests

Deze week hebben we _Branches_ en _Pull Requests_ geïntroduceerd. Door deze manier van werken in een Git(Hub) repository, maak je jezelf klaar voor het bedrijfsleven. Zodra je in een team werkt—zeker als junior developer—kan je werk op deze manier makkelijk, snel en goed gereviewed worden.

Deze sprint ga je leren om te werken met verschillende _branches_. Een branch is een _vertakking_ van de _main_ branch, de backbone van jullie project met de code die uiteindelijk live gaat. 

Als de teamleden in een _branch_ werken, kun je code aanpassen, toevoegen en verwijderen zonder dat de anderen daar last van hebben. Zo kan je tegelijk aan onderdelen van een website werken. Als een _branch_ af is en goed bevonden, kan je deze met een _Pull Request_ _mergen_ naar de _main_ branche.

## Richtlijnen voor feature branches

Om het werken met branches en pull requests soepel te laten verlopen, zijn een aantal richtlijnen wel handig. Je zult later merken dat elk bedrijf of team het weer net even anders doet, maar over het algemeen kun je met deze tips makkelijker samenwerken.

Elke keer dat je met een nieuw issue aan de slag gaat, kun je het best een nieuwe _feature branch_ aanmaken voor dat issue. Vaak gebruik je als naam voor zo'n branch een korte titel en het nummer van het issue zelf, bijvoorbeeld `header-22`, `speaker-detail-13`, of `partners-5`. Het is dus _niet_ handig om continu in één branch te werken, die je bijvoorbeeld jouw naam geeft. Je werkt dan wel afgeschermd van de `main` branch, maar nog niet met _feature branches_. (Het kan ook prima voorkomen dat verschillende teamleden in dezelfde feature branch werken, wat nog een reden is om een branch niet naar jezelf te vernoemen.)

Je kunt hierdoor aan verschillende features (issues) tegelijk werken, in verschillende branches. Soms blijkt werk net wat complexer, moet dat even wachten, en ga je door met een ander issue. Je gaat dan dus op een andere branch verder (via een _checkout_). Net als dat je commits koppelt aan de juiste issues, voer je je werk ook uit in de juiste feature branch. Hiermee maak je het ook mogelijk om verschillende pull requests bij verschillende teamleden neer te leggen.

Probeer niet te lang in dezelfde branch te werken (maximaal een paar dagen), zodat je _Short-Lived Feature Branches_ krijgt. Als je te lang in dezelfde branch aan het werk bent, is dat een teken dat je issue te groot was. Waarschijnlijk is het dan slim om dat op te splitsen, zodat het werk beter behapbaar wordt.

Een andere richtlijn is dat je branches weggooit en opschoont, zodra ze gemerged zijn naar de `main` branch. Hiermee hou je je repository netjes en overzichtelijk, en kun je snel zien welke features in ontwikkeling zijn.

Tijdens een standup met je team is het overzicht van branches een handige manier om te vertellen waar je mee bezig bent, waar je vastloopt en waar je hulp nodig hebt.

### Bronnen

- [About branches - GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
- [Creating and deleting branches within your repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)

## Pull Requests aanmaken


### Bronnen

- [About pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [Creating a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request?tool=webui)


<!--

Leren hoe je dit kan mergen met een pull request en review
Hoe schrijf je een nette pull request?


### Naamgeving 
Naamgeving feature branches
Zie ook conventies Agency


### Pull-request

Om jouw branch weer samen te voegen naar main doe je een pull-request.

Wat doe je met `git pull` ?

Met een pull-request vraag je of iemand anders jouw aanpassing (bijv. in een branch) toe wil voegen aan de main branch.

Pull-requests doe je het beste in GitHub.
(het kan op de CLI maar is een gedoe)


### Pull Request message bla
👉 Hoe schrijf je een nette Pull Request? 
Zie conventies Agency

### Merge

Bij een merge voeg je twee branches samen zodat je verder kunt werken op één punt.

Je kunt mergen in GH Desktop of op de CLI. 

`git checkout main` wissel naar main

`git merge feature` merge de branches

`git branch –d feature` verwijder branch



#### Merge conflicts

Als je 2 versies van hetzelfde bestand samenvoegt kan er een probleem optreden. Een zogenaamd merge conflict.
Je kunt handmatig het merge-conflict oplossen of het in de vs-code interface uitvoeren.
Vraag een medestudent om hulp als je er niet uit komt.

git merge – merge a specified branch into the current one




## Github workflows

### Centralized workflow

Wat is dit en hoe doe je dat?

Maak een repository aan op GitHub
Clone de repository naar lokaal
Maak aanpassingen en commit
Push aanpassingen naar GitHub

Conflicten zijn vrij normaal in deze setting, meestal is rebase de juiste oplossing: git pull –rebase origin main

Eventuele merge conflicten los je op in je favoriete editor.


### Feature branch workflow

We maken deze sprint gebruik van de Feature branch Workflow

Wat is dit en hoe doe je dat?

Maak een repository aan op GitHub
Maak een nieuwe branch voor jouw feature
Clone (of pull) de repository naar lokaal
Maak aanpassingen en commit deze (micro-steps)
Push jouw aanpassingen naar GitHub
Maak een pull-request op GitHub

Dit kan dus ook helemaal op de CLI, maar doe het vooral in GHD!
git checkout -b new-feature switch naar de nieuwe branchgit commit -a –m ‘Built new-feature! Resolves #42’ commit aanpassingen
git push -u origin new-feature push jouw feature naar GitHub…
… doe een pull-request op GitHub

### Forking workflow

Wat is dit en hoe doe je dat?

Maak een repository aan op GitHub (project remote)
Fork de repository op GitHub (eigen remote)
Maak een nieuwe branch voor jouw feature op jouw remote
Clone (of pull) de repository van jouw remote naar lokaal
Maak aanpassingen en commit deze
Push jouw aanpassingen naar jouw remote GitHub
Maak een pull-request van de feature branch op jouw remote naar het originele project op GitHub

Ook dit kan op de CLI maar … weet waar je aan begin…

## Stand  up

Elke dag 

3 vragen

doe het! 

-->