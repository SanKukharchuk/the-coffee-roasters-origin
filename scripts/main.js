const header = document.querySelector('header')
const gamburger = document.querySelector('.header-menu')
gamburger.addEventListener("click", () => {
    header.classList.toggle("header-menu-open");
}) 
