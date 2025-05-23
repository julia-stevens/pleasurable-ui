const header=document.querySelector('.main-header');
const mobileNav=document.querySelector('.nav-logo-mobile');
let scrollPositionY=window.scrollY;
let scrollTimeout;

window.addEventListener('scroll', ()=> {

        // Op schermen kleiner dan 1020px
        if (window.innerWidth < 1020) {

            // Als je scrollt hide dan het menu met logo's
            if (window.scrollY > scrollPositionY) {
                mobileNav.classList.add('hide-menu');
                // Zo niet laat dan het menu met logo's weer zien
            }

            else {
                mobileNav.classList.remove('hide-menu');
            }

            // Zodra je niet meer scrollt laat dan het menu met logo's zien
            clearTimeout(scrollTimeout);

            scrollTimeout=setTimeout(()=> {
                    mobileNav.classList.remove('hide-menu');
                }

                , 400);

            // Op schermen groter dan 1020px
        }

        else {

            // Als je scrollt hide de header
            if (window.scrollY > scrollPositionY) {
                header.classList.add('hide-menu');
                // Zo niet laat dan de header weer zien
            }

            else {
                header.classList.remove('hide-menu');
            }

            // Zodra je niet meer scrollt laat dan de header zien
            clearTimeout(scrollTimeout);

            scrollTimeout=setTimeout(()=> {
                    header.classList.remove('hide-menu');
                }

                , 400);
        }

        // update de scrollpositie  
        scrollPositionY=window.scrollY;
    }
);