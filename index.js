AOS.init();

var swiper = new Swiper(".swiper", {
  // Направление
  direction: "horizontal",
  // Конечность
  loop: true,

  // Пагинация
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Скролл
  scrollbar: { el: ".swiper-scrollbar" },

  // Расстояние между слайдами
  spaceBetween: 50,

  // Количество слайдов в одной странице
  slidesPerView: 4,

  // Кнопки навигации
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.getElementById("input").addEventListener("input", () => {
  console.log(document.getElementById("input").value);
});
