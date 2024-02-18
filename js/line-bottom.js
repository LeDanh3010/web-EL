document.addEventListener("DOMContentLoaded", () => {
  const $$ = document.querySelectorAll.bind(document);
  const $ = document.querySelector.bind(document);
  const listItems = $$(".list-item");
  listItems.forEach((item) => {
    item.onmouseenter = function () {
      this.classList.add("active");
    };
    item.onmouseleave = function () {
      this.classList.add("reverse");
      this.classList.remove("active");
    };
  });
});
