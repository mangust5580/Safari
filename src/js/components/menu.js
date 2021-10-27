const mainNavBtn = document.querySelector(".main-nav__btn");
const mainNavList = document.querySelector(".main-nav__list");

mainNavBtn.addEventListener("click", () => {
  mainNavList.classList.toggle("main-nav__list--active");
});
