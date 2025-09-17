/* ---------"ICON HAMBURGUER" TOGGLE ICON NAVBAR---------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/* ---------SCROLL SECTIONS ACTIVE LINK---------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heigth) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ---------STICKY NAVBAR---------*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* ---------REMOVE "ICON HAMBURGUER AND X" WHEN CLICK NAVBAR LINK---------*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

    /* ---------SCROLL REVEAL---------*/

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .container-adress', { origin: 'right' });

    /* ---------TYPED JS---------*/
const typed = new Typed('.multiple-text', {
//    strings: ['Frontend Developer', 'Designer 3D', 'Engineer'],
    strings: ['Desenvolvedor Frontend', 'Desenhista 3D', 'Engenheiro'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

    /* ---------ACORDEON/DROPDOWN SIMPLES---------*/

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".container-adress .title");
  const content = document.querySelector(".container-adress p");

    title.addEventListener("click", () => {
    title.classList.toggle("active");
    content.classList.toggle("active");
  });
});

