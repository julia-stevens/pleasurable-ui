// alle scrollers opzoeken en selecteren
const scrollers = document.querySelectorAll(".scroller");

// kijken of reduced motion aan staat 
if (!window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
  addAnimation();
}

// als er geen reduced animation aan staat mag de animatie doorgaan
function addAnimation() {
  scrollers.forEach(scroller => {
    scroller.setAttribute('data-animated', true);
    
    const scrollerInner = scroller.querySelector('.scroller-inner');
    const scrollerContent = Array.from(scrollerInner.children);
    
    // dupliceerd de content zodat het achterelkaar door blijft gaan, zonder dat het twee keer in de HTML staat (goed voor screenreaders)
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
