const accordeonBtns = document.querySelectorAll(".accordeon-btn");
const accordeonTexts = document.querySelectorAll(".accordeon-text");

accordeonBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let targetText = btn.parentElement.querySelector(".accordeon-text");
    if (targetText.classList.contains("open")) {
      targetText.classList.remove("open");
    } else {
      accordeonTexts.forEach((text) => {
        text.classList.remove("open");
      });
      targetText.classList.add("open");
    }
  });
});
