const darkModeSwitch = document.querySelector('[data-js="darkmode-switch"]');
const profileCard = document.querySelector('[data-js="profile-card"]');

const neu = document.querySelector('[data-js="profile-card"]');

//
const test = document.querySelector("#settings");
console.log("settings:", test);
console.log("neu:", neu);

console.log("profilecard:", profileCard);
console.log("darkmodeswitch:", darkModeSwitch);

//
//
darkModeSwitch.addEventListener("input", () => {
  profileCard.classList.toggle("profile-card-dark");

  console.log("test:", "juhuu!");
});
