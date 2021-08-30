const backToTop = document.getElementById("backtotop");

function checkScroll() {
  // scroll 위치 mdn: https://developer.mozilla.org/ko/docs/Web/API/Window/pageYOffset

  let pageYOffset = window.pageYOffset;

  if (pageYOffset !== 0) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

function moveBackToTop() {
  if (window.pageYOffset > 0) {
    // scroll 이동 mdn: https://developer.mozilla.org/ko/docs/Web/API/Window/scrollTo
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

window.addEventListener("scroll", checkScroll);
backToTop.addEventListener("click", moveBackToTop);
