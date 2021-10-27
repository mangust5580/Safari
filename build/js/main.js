"use strict";

var selector = document.querySelectorAll('input[type=tel]');
var im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);
"use strict";

var mainNavBtn = document.querySelector(".main-nav__btn");
var mainNavList = document.querySelector(".main-nav__list");
mainNavBtn.addEventListener("click", function () {
  mainNavList.classList.toggle("main-nav__list--active");
});
"use strict";

var aboutVideo = document.querySelector(".about-video");
var aboutVideoBtn = document.querySelector(".about__video-btn");
var aboutVideoClose = document.querySelector(".about-video__close");
var siteContainer = document.querySelector(".site-container");
aboutVideoBtn.addEventListener("click", function () {
  aboutVideo.classList.add("about-video--show");
  siteContainer.classList.add("overlay");
});
aboutVideoClose.addEventListener("click", function () {
  aboutVideo.classList.remove("about-video--show");
  siteContainer.classList.remove("overlay");
});
"use strict";

var pageHeaderArrow = document.querySelector(".page-header__arrow");
var directionSection = document.querySelector(".direction");

function scrollTo(el) {
  window.scroll({
    left: 0,
    top: el.offsetTop,
    behavior: "smooth"
  });
}

pageHeaderArrow.addEventListener("click", function () {
  scrollTo(directionSection);
});
AOS.init();
"use strict";

var gallerySlider = document.querySelector(".swiper-container");
var swiperSlider = new Swiper(gallerySlider, {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  fadeEffect: {
    crossFade: true
  },
  effect: "fade",
  navigation: {
    nextEl: ".gallery__slider-btn--next",
    prevEl: ".gallery__slider-btn--prev"
  }
});
"use strict";
//# sourceMappingURL=main.js.map
