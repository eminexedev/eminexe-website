const header = document.querySelector('header');
const section = document.querySelector('section');


function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener('scroll', stickyNavbar);


// scrollreveal

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
    origin: "bottom",
});

sr.reveal(".info");
sr.reveal(".image");

ScrollReveal().reveal('.about-info');
ScrollReveal().reveal('.techno');
ScrollReveal().reveal('.contact');
