document.addEventListener('DOMContentLoaded', function () {
            ScrollReveal().reveal('.skill-card', {
            interval: 100,
            distance: '100px',
            origin: 'bottom',
            duration: 800,
            easing: 'ease-in-out',
            reset: false
        });
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscrollc = () => {
    sections.forEach(sec => {
        let  top = window.scrollY;
        let offset = screenX.offsetTop - 150;
        let height  = sec.offsetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}