const navBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");
navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("menu-active");
});
