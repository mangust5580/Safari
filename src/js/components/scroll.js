const pageHeaderArrow = document.querySelector(".page-header__arrow");
const directionSection = document.querySelector(".direction");

function scrollTo(el) {
  window.scroll({
    left: 0,
    top: el.offsetTop,
    behavior: "smooth",
  });
}

pageHeaderArrow.addEventListener("click", () => {
  scrollTo(directionSection);
});

AOS.init();
