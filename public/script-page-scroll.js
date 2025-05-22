const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting
      
      if (!intersecting) {
        document.documentElement.classList.add("offscreen")
      }
      
      if (intersecting) {
        document.documentElement.classList.remove("offscreen")
      }
    })
})
  
let header = document.querySelector("header")
  
observer.observe(header)