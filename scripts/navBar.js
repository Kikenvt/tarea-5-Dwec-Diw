// NAVBAR

const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('open');
});

window.addEventListener('scroll', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-list');
    if (hamburgerMenu.classList.contains('open')) {
        hamburgerMenu.classList.remove('open');
        navMenu.classList.remove('active');
    }
});