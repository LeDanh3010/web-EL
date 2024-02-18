document.addEventListener("DOMContentLoaded", () => {
  const slideItems = document.querySelectorAll(".slide-container__img");
  const slideButtons = document.querySelectorAll(".slide-btn");
  slideIndex = 0;
  showSlides();
  function showSlides() {
    for (let i = 0; i < slideItems.length; i++) {
      slideItems[i].style.display = "none";
    }
    slideIndex++;
    //reset slide
    if (slideIndex > slideItems.length) {
      slideIndex = 1;
    }
    slideItems[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 20000);
  }
  slideButtons.forEach((item) => {
    item.onclick = function () {
      if (this.classList.contains("slide-button__next")) {
        plusSlides(1);
      } else {
        plusSlides(-1);
      }
    };
  });
  function plusSlides(n) {
    showSlidesManually((slideIndex += n));
  }
  function showSlidesManually(n) {
    if (n > slideItems.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slideItems.length;
    }
    for (let i = 0; i < slideItems.length; i++) {
      slideItems[i].style.display = "none";
    }
    slideItems[slideIndex - 1].style.display = "block";
  }
});
