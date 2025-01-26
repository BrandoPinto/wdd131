let btnMenu = document.getElementById("btn-menu");
let nav = document.querySelector("nav");
let heading = document.getElementById("heading");

btnMenu.addEventListener("click", () => {
    nav.classList.toggle("vissible");
  });