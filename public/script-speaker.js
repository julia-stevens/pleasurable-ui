if ('fetch' in window && 'DOMParser' in window) {
    document.addEventListener('submit', addBookmark)
  
    async function addBookmark(event) {
      const form = event.target
  
      if (!form.hasAttribute('data-enhanced')) return
  
      event.preventDefault()
  
      const responseDOM = await fetchDOM()
      updateDOM(responseDOM)
  
      async function fetchDOM() {
        form.classList.add('loading')
  
        const response = await fetch(form.action, {
          method: form.method,
          body: new URLSearchParams(new FormData(form))
        })
  
        const responseText = await response.text()
        const parser = new DOMParser()
        const responseDOM = parser.parseFromString(responseText, 'text/html')
  
        form.classList.remove('loading')
        return responseDOM
      }
  
      function updateDOM(responseDOM) {
        const newState = responseDOM.querySelector("[data-enhanced='" + form.getAttribute('data-enhanced') + "']")
        form.classList.remove('loading')
        form.outerHTML = newState.outerHTML
      }
    }
  }
  