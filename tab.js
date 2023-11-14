const contents = document.querySelectorAll(".cont");
const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("open");
    });
    const targetId = tab.getAttribute("data-target");
    const targetContent = document.getElementById(targetId);
    targetContent.classList.toggle("open");
  });
});
