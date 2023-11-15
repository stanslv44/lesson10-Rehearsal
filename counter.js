const textarea = document.querySelector("#textarea");
const wordsCounter = document.querySelector("#word-count");
const charsCounter = document.querySelector("#char-count");

textarea.addEventListener("input", () => {
  const input = textarea.value;
  console.log(input, "введеная строка");
  console.log(input.split(" "), "слова в строке");
  const charsNumber = input.length;
  let wordsNumber;
  if (input === "") {
    wordsNumber = 0;
  } else {
    wordsNumber = input.split(" ").length;
  }
  wordsCounter.textContent = "Слов: " + wordsNumber;
  charsCounter.textContent = "Символов: " + charsNumber;
});
