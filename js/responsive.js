hamburger = document.querySelector(".hamburger-menu");
navitem1 = document.querySelector(".navitem1");
navbar = document.querySelector(".nav1");

hamburger.addEventListener("click", () => {
  navitem1.classList.toggle("v-class");
  navbar.classList.toggle("h-nav");
});
