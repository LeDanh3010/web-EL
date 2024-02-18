document.addEventListener("DOMContentLoaded", () => {
  const headerBottom = document.querySelector(".header-bottom");
  const sticky = headerBottom.offsetTop;
  window.addEventListener("scroll", () => {
    if (window.scrollY >= sticky) {
      headerBottom.classList.add("header-bottom--sticky");
    } else {
      headerBottom.classList.remove("header-bottom--sticky");
    }
  });
});
