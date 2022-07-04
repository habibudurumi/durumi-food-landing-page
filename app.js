/** @format */

const menu = document.querySelector(".menu");
const sideMenu = document.querySelector(".side-menu");
const closeBtn = document.querySelector(".close-btn");

menu.addEventListener("click", () => {
  sideMenu.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("show");
});
