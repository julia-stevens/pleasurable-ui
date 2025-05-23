const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.documentElement.classList.remove("uitbeeld");
      } else {
        document.documentElement.classList.add("uitbeeld");
      }
    });
  });
  
  let deHeader = document.querySelector(".menu");
  observer.observe(deHeader);