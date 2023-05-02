const main = document.querySelector("main");
const form = document.querySelector("form");

// couldn't get textarea-value from the form so query-selected them separately...
const newQuestionInput = document.querySelector('[data-js="new-question"]');
const newAnswerInput = document.querySelector('[data-js="new-answer"]');

// not used yet...
const formData = new FormData(form);
const data = Object.fromEntries(formData);

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
  return newBookmarkIcon
}

function createNewQuestion(newQuestionValue) {
  const newQuestion = document.createElement("h2");
  newQuestion.classList.add("question");
  newQuestion.textContent = newQuestionValue
  // newQuestion.textContent = elements.newQuestion.value;
  return newQuestion
}

function createNewShowAnswerButton() {
  const newShowAnswerButton = document.createElement("button");
  newShowAnswerButton.classList.add("btn-show-answer");
  newShowAnswerButton.setAttribute("data-js", "show-answer-button");
  newShowAnswerButton.textContent = "Show answer";
  return newShowAnswerButton
}

function createNewAnswer(newAnswerValue) {
  const newAnswer = document.createElement("p");
  newAnswer.classList.add("answer", "hidden");
  newAnswer.setAttribute("data-js", "answer");
  newAnswer.textContent = newAnswerValue
  return newAnswer
}

function createNewTagsContainer() {
  const newTagsContainer = document.createElement("div");
  newTagsContainer.classList.add("tags-container");
  return newTagsContainer
  
}

function createNewTag(newTagValue) {
  const newTag = document.createElement("span");
  newTag.classList.add("category-tag");
  newTag.textContent = "#" + newTagValue
  // newTag.textContent = "#" + elements.tags.value;
  return newTag
}

// eventlistener
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = event.target.elements;

  const newArticle = createNewArticle()
  const newTagsContainer = createNewTagsContainer()

  main.append(newArticle);

  newArticle.append(createNewBookmarkIcon());
  newArticle.append(createNewQuestion(elements.newQuestion.value));
  newArticle.append(createNewShowAnswerButton());
  newArticle.append(createNewAnswer(elements.newAnswer.value));
  newArticle.append(newTagsContainer);
  newTagsContainer.append(createNewTag());
});

// Character-Counting
function calcCharLeft(textLength) {
  const element = document.querySelector('[data-js="new-question"]')
  const maxLength = element.getAttribute('maxlength')
  
  return maxLength - textLength
}

newQuestionInput.addEventListener("input", (event) => {
  const newQuestionCounterOutput = document.querySelector('[data-js="new-question"] + p')
  const numCharLeft = calcCharLeft(event.target.value.length)

  newQuestionCounterOutput.textContent = numCharLeft + " characters left";
});

newAnswerInput.addEventListener("input", (event) => {
  const newAnswerCounterOutput = document.querySelector('[data-js="new-answer"] + p')
  const numCharLeft = calcCharLeft(event.target.value.length)

  newAnswerCounterOutput.textContent = numCharLeft + " characters left";
});

