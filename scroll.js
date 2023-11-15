const menuBtns = document.querySelectorAll(".menu-btn");
const scrollUpBtn = document.querySelector("#scroll-btn");

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.scrollTo(
      0,
      document.getElementById(btn.getAttribute("data-target")).offsetTop
    );
  });
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
