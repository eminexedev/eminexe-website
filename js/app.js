const header = document.querySelector('header');
const section = document.querySelector('section');


function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener('scroll', stickyNavbar);


// reveal

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
    origin: "bottom",
});

sr.reveal(".info");