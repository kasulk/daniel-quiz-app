const showAnswerButtons = document.querySelectorAll(
  '[data-js="show-answer-button"]'
);

for (button of showAnswerButtons) {
  button.addEventListener("click", () => {
    answer.classList.toggle("hidden");
  });
}
