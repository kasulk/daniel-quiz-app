const bookmark = document.querySelector('[data-js="bookmark"]');

// console.log("test:", bookmark);

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("fa-solid");
  bookmark.classList.toggle("fa-regular");
  //   console.log("bookmark:", bookmark);
});
