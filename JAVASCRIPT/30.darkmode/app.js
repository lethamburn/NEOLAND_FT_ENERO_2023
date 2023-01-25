const switchBtn = document.querySelector("#switchBtn");
switchBtn.innerHTML = "☀️";

switchBtn.addEventListener("click", () => {
  changeText();
  changeTheme();
});

const changeText = () => {
  /*   if (switchBtn.innerHTML === "☀️") {
    switchBtn.innerHTML = "🌚";
  } else {
    switchBtn.innerHTML = "☀️";
  } */
  switchBtn.innerHTML === "☀️"
    ? (switchBtn.innerHTML = "🌚")
    : (switchBtn.innerHTML = "☀️");
};

const changeTheme = () => {
  document.body.classList.toggle("dark");
};
