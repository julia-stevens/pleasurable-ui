const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const intersecting = entry.isIntersecting
    
    if (!intersecting) {
      document.documentElement.classList.add("uitbeeld");
    }
  })
})

let deDivs = document.querySelectorAll("div");

let deHeader = document.querySelector(".main-header")

observer.observe(deHeader);