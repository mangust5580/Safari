const aboutVideo = document.querySelector(".about-video");
const aboutVideoBtn = document.querySelector(".about__video-btn");
const aboutVideoClose = document.querySelector(".about-video__close");
const siteContainer = document.querySelector(".site-container");

aboutVideoBtn.addEventListener("click", () => {
  aboutVideo.classList.add("about-video--show");
  siteContainer.classList.add("overlay");
});

aboutVideoClose.addEventListener("click", () => {
  aboutVideo.classList.remove("about-video--show");
  siteContainer.classList.remove("overlay");
});
