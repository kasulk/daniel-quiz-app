const form = document.querySelector("form");

// couldn't get textarea-value from the form so queried them separately...
const newQuestion = document.querySelector('[data-js="new-question"]');
const newAnswer = document.querySelector('[data-js="new-answer"]');

// console.log("test newQuestion:", newQuestion.value);
// console.log("test newAnwer   :", newAnswer.value);

console.log("form:", form);

// not used yet...
const formData = new FormData(form);
const data = Object.fromEntries(formData);

// console.log("data:", data);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   tags.value

  console.log("tagsVAlue:", tags.value);
  //   console.log("newQuestion:", newQuestion.value);

  //   console.log("formdata, newQestion:", newQuestion);
});
