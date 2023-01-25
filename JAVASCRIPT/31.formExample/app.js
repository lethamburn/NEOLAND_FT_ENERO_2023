const usernameInput = document.querySelector("#username");
const cityInput = document.querySelector("#city");
const ageInput = document.querySelector("#age");
const registerBtn = document.querySelector("#registerBtn");

const createUser = () => {
  const user = {
    username: usernameInput.value,
    city: cityInput.value,
    age: ageInput.value,
  };
  printUser(user);
};

const printUser = (user) => {
  document.querySelector("#container").innerHTML += `
    <h2>${user.username}</h2>
    <h3>${user.city}</h3>
    <h4>${user.age}</h4>
    `;
};

registerBtn.addEventListener("click", () => {
  createUser();
});
