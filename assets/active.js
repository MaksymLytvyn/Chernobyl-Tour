const mobileNav = document.querySelector("#hamburger .mobile");
const button = document.querySelector("#hamburger");

button.addEventListener('click',function () {
    mobileNav.classList.toggle('active');
    button.classList.toggle('active');

})