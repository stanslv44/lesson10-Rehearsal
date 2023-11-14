AOS.init();
var swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If you want pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  scrollbar: { el: ".swiper-scrollbar" },

  spaceBetween: 20,

  slidesPerView: 3,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const submit = document.getElementById("submit");

submit.addEventListener("submit", () => {
  alert("Submitted");
});
