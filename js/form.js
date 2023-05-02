const main = document.querySelector("main");
const form = document.querySelector("form");

// couldn't get textarea-value from the form so queried them separately...
const newQuestionInput = document.querySelector('[data-js="new-question"]');
const newAnswerInput = document.querySelector('[data-js="new-answer"]');

// not used yet...
// const formData = new FormData(form);
// const data = Object.fromEntries(formData);

// tried to refactor, but stopped because not mandatory for now...
function createNewArticle() {
  const newArticle = document.createElement("article");
  newArticle.classList.add("question-card");
  return newArticle;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = event.target.elements;

  const newArticle = document.createElement("article");
  newArticle.classList.add("question-card");
  main.append(newArticle);
  //****** try to refactor...
  // main.append(createNewArticle());

  const newBookmarkIcon = document.createElement("i");
  newBookmarkIcon.classList.add("fa-regular", "fa-bookmark");
  newBookmarkIcon.setAttribute("data-js", "bookmark");
  newArticle.append(newBookmarkIcon);

  const newQuestion = document.createElement("h2");
  newQuestion.classList.add("question");
  newQuestion.textContent = elements.newQuestion.value;
  newArticle.append(newQuestion);

  const newShowAnswerButton = document.createElement("button");
  newShowAnswerButton.classList.add("btn-show-answer");
  newShowAnswerButton.setAttribute("data-js", "show-answer-button");
  newShowAnswerButton.textContent = "Show answer";
  newArticle.append(newShowAnswerButton);

  const newAnswer = document.createElement("p");
  newAnswer.classList.add("answer", "hidden");
  newAnswer.setAttribute("data-js", "answer");
  newAnswer.textContent = elements.newAnswer.value;
  newArticle.append(newAnswer);

  const newTagsContainer = document.createElement("div");
  newTagsContainer.classList.add("tags-container");
  newArticle.append(newTagsContainer);

  const newTag = document.createElement("span");
  newTag.classList.add("category-tag");
  newTag.textContent = "#" + elements.tags.value;
  newTagsContainer.append(newTag);

  console.log("main:", main);
});
