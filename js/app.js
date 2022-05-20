const header = document.querySelector('header');
const section = document.querySelector('section');
const toggle_btn = document.querySelector('.toggle-btn');

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
ScrollReveal().reveal('.project-section');


// dark mode

let firstTheme = localStorage.getItem("dark");
changeTheme(+firstTheme);

function changeTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark");
        toggle_btn.classList.replace("uil-moon", "uil-sun");
        localStorage.setItem("Theme", "dark");
        console.log("dark mode activated");
    } else {
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("uil-sun", "uil-moon");
        localStorage.setItem("Theme", "light");
        console.log("dark mode off");
    }
}

toggle_btn.addEventListener('click', () => {
    changeTheme(!document.body.classList.contains("dark"));
});


document.querySelector("body > main > section.techno > div").style.gap = "3vw";
document.querySelector("body > main > section.techno > div").style.flexWrap = "wrap";
document.querySelector("body > main > section.techno > div").style.justifyContent = "center";
