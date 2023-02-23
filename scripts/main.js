const header = document.querySelector('header')
const gamburger = document.querySelector('.header-menu')
gamburger.addEventListener("click", () => {
    header.classList.toggle("header-menu-open");
}) 


let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function plusSlides(n) {
    showSlides(slideIndex += n);
};

function showSlides(n) {
    let i;
    let slides = Array.from(document.getElementsByClassName("mySlides"));
    let ellipse = Array.from(document.getElementsByClassName("ellipse"));
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    slides.forEach((_, index) => slides[index].style.display = "none");
    ellipse.forEach((_, index) => ellipse[index].className = ellipse[index].className.replace("active", ""));
    slides[slideIndex-1].style.display = "block";
    ellipse[slideIndex-1].className += " active";
  };