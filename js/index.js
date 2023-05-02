const bookmark = document.querySelector('[data-js="bookmark"]');
const showAnswerButton = document.querySelector(
  '[data-js="show-answer-button"]'
);
const answer = document.querySelector('[data-js="answer"]');

// console.log("test:", answer);

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("fa-solid");
  bookmark.classList.toggle("fa-regular");
  //   console.log("bookmark:", bookmark);
});

showAnswerButton.addEventListener("click", () => {
  answer.classList.toggle("hidden");
  answer.classList.contains("hidden")
    ? (showAnswerButton.textContent = "Show answer")
    : (showAnswerButton.textContent = "Hide answer");

  //   console.log("answerClasslist:", answer.classList);
});
