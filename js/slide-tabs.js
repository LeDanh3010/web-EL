const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tagListConfig = {
  TabsValue: 0,
  TabsRankingValue: 0,
  indexDots: 1,
};
const tabsList = $(".tab-lists");
const rankingTabsList = $(".tab-ranking-lists");

function initializeTabs(tabSelector, translateValue, indexDots) {
  const totalSlides = tabSelector.children.length;
  const tabListFirstChild = tabSelector.firstElementChild;
  const firstChildWidth = tabListFirstChild.getBoundingClientRect().width;

  translateValue -= firstChildWidth;
  indexDots++;

  if (
    (tabSelector.classList[0] === "tab-lists" &&
      Math.abs(translateValue) > totalSlides * firstChildWidth * 0.5) ||
    (tabSelector.classList[0] !== "tab-lists" &&
      Math.abs(translateValue) >= totalSlides * firstChildWidth)
  ) {
    translateValue = 0;
    indexDots = 1;
    tabSelector.style.transition = "none";
  }
  if (tabSelector.classList[0] !== "tab-lists") {
    const spanOpacity = $("span.opacity");
    const btnSlideSpan = $(`.btn-slide span:nth-of-type(${indexDots})`);
    if (spanOpacity && btnSlideSpan) {
      spanOpacity.classList.remove("opacity");
      btnSlideSpan.classList.add("opacity");
    }
  }
  tabSelector.style.transition = "transform 0.25s ease";
  tabSelector.style.transform = `translate3d(${translateValue}px,0,0)`;
  return {
    currentTranslateValue: translateValue,
    currentIndexDots: indexDots,
  };
}
document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    const results = initializeTabs(tabsList, tagListConfig.TabsValue);
    tagListConfig.TabsValue = results.currentTranslateValue;
  }, 5000);

  const initialBtnSelector = `.btn-slide > span:nth-of-type(${tagListConfig.indexDots})`;
  $(initialBtnSelector).classList.add("opacity");

  setInterval(() => {
    const results = initializeTabs(
      rankingTabsList,
      tagListConfig.TabsRankingValue,
      tagListConfig.indexDots
    );
    tagListConfig.TabsRankingValue = results.currentTranslateValue;
    tagListConfig.indexDots = results.currentIndexDots;
  }, 5000);
});
