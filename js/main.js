let btn = document.querySelector(".burger-btn");
let navBar = document.querySelector(".navbar");
btn.addEventListener("click", function () {
  navBar.classList.toggle("navbar--open");
});
