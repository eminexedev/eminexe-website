const header = document.querySelector('header');
const section = document.querySelector('section');
const toggle_btn = document.querySelector('.toggle-btn');
const contextMenu = document.querySelector(".wrapper");

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

sr.reveal(".headline-info");
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
    } else {
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("uil-sun", "uil-moon");
        localStorage.setItem("Theme", "light");
    }
}

toggle_btn.addEventListener('click', () => {
    changeTheme(!document.body.classList.contains("dark"));
});


document.querySelector("body > main > section.techno > div").style.gap = "3vw";
document.querySelector("body > main > section.techno > div").style.flexWrap = "wrap";
document.querySelector("body > main > section.techno > div").style.justifyContent = "center";



// context menu




document.addEventListener("contextmenu", (event) => {
    event.preventDefault();

    const { clientX: mouseX, clientY: mouseY } = event;

    contextMenu.style.left = `${mouseX}px`;
    contextMenu.style.top = `${mouseY}px`;
    contextMenu.classList.add("visible");


    document.addEventListener("click", (e) => {
        if (e.target.offsetParent !== contextMenu) {
            contextMenu.classList.remove("visible");
        }
    });

});