// Javascript of Responsive Navigation Menu
const menu = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const contents = document.querySelectorAll(".content");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navigation.classList.toggle("active");
});

// Javascript for Video Slider Navigation
const button = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");

const sliderNavigation = (manual) => {
    button.forEach((btn) => {
        btn.classList.remove("active");
    });
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    contents.forEach((content) => {
        content.classList.remove("active");
    });
    button[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}
button.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNavigation(i);
    });
});