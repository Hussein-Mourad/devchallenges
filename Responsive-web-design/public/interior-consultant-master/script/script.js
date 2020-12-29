var menuBtn = document.querySelector(".menu-btn");
var navMenu = document.querySelector(".nav-menu");
var navLinks = document.querySelectorAll(".nav-menu li");
var body = document.querySelector("body");

menuBtn.addEventListener("click", (e) => {
  navMenu.classList.toggle("nav-active");
  if (e.target.innerText == "menu") {
    body.style.overflowY = "hidden";
    e.target.innerText = "close";
    navLinks.forEach((link, index) => {
      link.style.animation = `show 0.5s ease forwards ${index / 7 + 0.25}s`;
    });
  } else {
    e.target.innerText = "menu";
    body.style.overflowY = "visible";
    navLinks.forEach(link => {
      link.style.animation = "";
    });
  }
});
