const btn = document.querySelector("#btn");
const card = document.querySelector(".card");

btn.addEventListener("click", () => {
  card.classList.toggle("carddark");
});

//

const myInput = document.querySelector("#myInput");
const inputRes = document.querySelector("#inputRes");

myInput.addEventListener("input", (ev) => {
  inputRes.innerHTML = ev.target.value;
});

//

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const registerBtn = document.querySelector("#registerBtn");
const registerRes = document.querySelector("#registerRes");

registerBtn.addEventListener("click", () => {
  createUser(username.value, email.value);
});

const createUser = (username, email) => {
  const user = {
    username: username,
    email: email,
  };
  printUser(user);
};

const printUser = (user) => {
  registerRes.innerHTML = `
    <h2>${user.username}</h2>
    <h3>${user.email}</h3>
  `;
};

card.addEventListener("mouseover", () => {
  card.classList.add("zoom");
});

card.addEventListener("mouseout", () => {
  card.classList.remove("zoom");
});

window.addEventListener("load", () => {
  document.body.style.backgroundColor = "black";
});
