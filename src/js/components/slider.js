const gallerySlider = document.querySelector(".swiper-container");

let swiperSlider = new Swiper(gallerySlider, {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  fadeEffect: {
    crossFade: true,
  },
  effect: "fade",
  navigation: {
    nextEl: ".gallery__slider-btn--next",
    prevEl: ".gallery__slider-btn--prev",
  },
});
