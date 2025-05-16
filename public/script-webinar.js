if ('fetch' in window && 'DOMParser' in window) {

// Als er ergens op de pagina een formulier wordt gesubmit..
// (We maken hier gebruik van Event Delegation)
document.addEventListener('submit', async function (event) {

    // Hou in een variabele bij welk formulier dat was
    const form = event.target

    // Als dit formulier geen data-enhanced attribuut heeft, doe dan niks
    // Dit doen we, zodat we sommige formulieren op de pagina kunnen 'enhancen'
    // Data attributen mag je zelf verzinnen; dit is dus niet iets speciaals
    // https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes
    if (!form.hasAttribute('data-enhanced')) {
        return
    }

    // Voorkom de standaard submit van de browser
    // Let op: hiermee overschrijven we de default Loading state van de browser...
    event.preventDefault()

    form.classList.add("loading")

    // Doe een fetch naar de server, net als hoe de browser dit normaal zou doen
    // Gebruik daarvoor het action en method attribuut van het originele formulier
    // Inclusief alle formulierelementen
    const response = await fetch(form.action, {
        method: form.method,
        body: new URLSearchParams(new FormData(form))
    })

    // De server redirect op de normale manier, en geeft HTML terug
    // (De server weet niet eens dat deze fetch via client-side JavaScript gebeurde)
    const responseText = await response.text()

    // Normaal zou de browser die HTML parsen en weergeven, maar daar moeten we nu zelf iets mee
    // Parse de nieuwe HTML en maak hiervan een nieuw Document Object Model in het geheugen
    const parser = new DOMParser()
    const responseDOM = parser.parseFromString(responseText, 'text/html')

    // Zoek in die nieuwe DOM onze nieuwe state op, die we via Liquid hebben klaargemaakt
    // We gebruiken hiervoor het data-enhanced attribuut, zodat we weten waar we naar moeten zoeken
    // (Hierdoor kunnen we ook meerdere formulieren op dezelfde pagina gebruiken)
    const newState = responseDOM.querySelector('[data-enhanced="' + form.getAttribute('data-enhanced') + '"]')

    // Overschrijf ons formulier met de nieuwe HTML
    // Hier wil je waarschijnlijk de Loading state vervangen door een Success state
    form.outerHTML = newState.outerHTML
})
}
