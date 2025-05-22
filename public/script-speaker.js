// global scope
if ("fetch" in window && "DOMParser" in window) {
    // callback: op het moment dat submit wordt uigevoerd, dan async function uitvoeren 
    document.addEventListener('submit', async function(event) {
        // dit is de callback
        // de callback is een async functie geworden en hiermee kan je andere async functies "awaiten"
        const form = event.target
        
        if (!form.hasAttribute("data-enhanced")) {
            return
        }

        event.preventDefault()
        
        form.classList.add("loading")
        
        const response = await fetch(form.action, {
            method: form.method,
            body: new URLSearchParams(new FormData(form))
        })
        
        const responseText = await response.text()
        const parser = new DOMParser()
        const responseDOM = parser.parseFromString(responseText, "text/html")
        const newState = responseDOM.querySelector("[data-enhanced='" + form.getAttribute("data-enhanced") + "']")
        
        form.outerHTML = newState.outerHTML
    })
}