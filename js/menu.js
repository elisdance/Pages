const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu__list");
const menuLink = document.querySelectorAll(".menu__link");

hamburger.addEventListener("click", mobileMenu);
menuLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  menuList.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  menuList.classList.remove("active");
}