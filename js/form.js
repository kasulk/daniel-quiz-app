console.clear();

const main = document.querySelector("main");
const form = document.querySelector("form");

// couldn't get textarea-value from the form so query-selected them separately...
const newQuestionInput = document.querySelector('[data-js="new-question"]');
const newAnswerInput = document.querySelector('[data-js="new-answer"]');

const newQuestionCounterOutput = document.querySelector(
  '[data-js="new-question"] + p'
);
const newAnswerCounterOutput = document.querySelector(
  '[data-js="new-answer"] + p'
);

calcNewQuestionCharsLeft();
calcNewAnswerCharsLeft();

// not used yet...
// const formData = new FormData(form);
// const data = Object.fromEntries(formData);

// functions for creating elements
function createNewArticle() {
  const newArticle = document.createElement("article");
  newArticle.classList.add("question-card");
  return newArticle;
}

function createNewBookmarkIcon() {
  const newBookmarkIcon = document.createElement("i");
  newBookmarkIcon.classList.add("fa-regular", "fa-bookmark");
  newBookmarkIcon.setAttribute("data-js", "bookmark");
  return newBookmarkIcon;
}

function createNewQuestion(newQuestionValue) {
  const newQuestion = document.createElement("h2");
  newQuestion.classList.add("question");
  newQuestion.textContent = newQuestionValue;
  return newQuestion;
}

function createNewShowAnswerButton() {
  const newShowAnswerButton = document.createElement("button");
  newShowAnswerButton.classList.add("btn-show-answer");
  newShowAnswerButton.setAttribute("data-js", "show-answer-button");
  newShowAnswerButton.setAttribute("data-js-id", "001"); // Bonus
  newShowAnswerButton.textContent = "Show answer";
  // Bonus: Add Show/Hide functionality to newCard
  newShowAnswerButton.addEventListener("click", () => {
    // Get hold of newAnswer from createNewAnswer-function...
    storeNewAnswer.classList.toggle("hidden");
    storeNewAnswer.classList.contains("hidden")
      ? (newShowAnswerButton.textContent = "Show answer")
      : (newShowAnswerButton.textContent = "Hide answer");
  });
  return newShowAnswerButton;
}

function createNewAnswer(newAnswerValue) {
  const newAnswer = document.createElement("p");
  newAnswer.classList.add("answer", "hidden");
  newAnswer.setAttribute("data-js", "answer");
  newAnswer.textContent = newAnswerValue;
  // bonus
  // store newAnswer in variable to make it accessible outside of the function (for the eventlistener of the newShowAnswerButton)
  storeNewAnswer = newAnswer;
  return newAnswer;
}
let storeNewAnswer;

function createNewTagsContainer() {
  const newTagsContainer = document.createElement("div");
  newTagsContainer.classList.add("tags-container");
  return newTagsContainer;
}

function createNewTag(newTagValue) {
  const newTag = document.createElement("span");
  newTag.classList.add("category-tag");
  newTag.textContent = "#" + newTagValue;
  return newTag;
}

// **************
// eventlistener

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = event.target.elements;

  const newArticle = createNewArticle();
  const newTagsContainer = createNewTagsContainer();

  main.append(newArticle);

  newArticle.append(createNewBookmarkIcon());
  newArticle.append(createNewQuestion(elements.newQuestion.value));
  newArticle.append(createNewShowAnswerButton());
  newArticle.append(createNewAnswer(elements.newAnswer.value));
  newArticle.append(newTagsContainer);
  newTagsContainer.append(createNewTag(elements.tags.value));
});

// Character-Counting

function calcNewQuestionCharsLeft() {
  const maxLength = newQuestionInput.getAttribute("maxlength");
  const numCharLeft = maxLength - newQuestionInput.value.length;
  newQuestionCounterOutput.textContent = numCharLeft + " characters left";
}

function calcNewAnswerCharsLeft() {
  const maxLength = newAnswerInput.getAttribute("maxlength");
  const numCharLeft = maxLength - newAnswerInput.value.length;
  newAnswerCounterOutput.textContent = numCharLeft + " characters left";
}

newQuestionInput.addEventListener("input", calcNewQuestionCharsLeft);
newAnswerInput.addEventListener("input", calcNewAnswerCharsLeft);

//// Bonus
// console.log('newButton:',newShowAnswerButton);
// console.log('newButton:',test);

// test.addEventListener('click', () => {
// // newShowAnswerButton.addEventListener('click', () => {
//   answer.classList.toggle("hidden");
//   answer.classList.contains("hidden")
//     ? (test.textContent = "Show answer")
//     : (test.textContent = "Hide answer");

// })
