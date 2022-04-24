   alert("Hey selam dostlar bu sitenin yapımı henüz bitmemiştir prototif amaçlı yayınlandı görüşlerinizi beklerim daha beta da :8");

   const header = document.querySelector("header");




   function stickyNavbar() {
       header.classList.toggle("scrolled", window.pageYOffset > 0);

   }

   stickyNavbar();

   windows.addEventListener("scroll", stickyNavbar);



   let sr = ScrollReveal({

       duration: 2500,
       distance: "50px",

   });

   sr.reveal(".info", { delay: 600 });
   sr.reveal(".image", { origin: "top", delay: 700 });