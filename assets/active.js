const mobileNav = document.querySelector(".mobile-nav");
const button = document.querySelector("#hamburger");
const offoverlay = document.querySelector(".offcanvas-overlay");
const closenav = document.querySelector(".fal.fa-times-circle");


button.addEventListener('click',function () {
    mobileNav.classList.add('show');
    offoverlay.classList.add('overlay-open');
});

closenav.addEventListener('click', function () {
    mobileNav.classList.remove("show");
    offoverlay.classList.remove('overlay-open');
});



