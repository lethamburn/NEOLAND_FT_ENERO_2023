const username = document.querySelector("#username");
const age = document.querySelector("#age");
const registerBtn = document.querySelector("#registerBtn");

const container = document.querySelector("#container");

//localStorage

registerBtn.addEventListener("click", () => {
  const user = {
    username: username.value,
    age: age.value,
  };
  //Para guardar en el localStorage un objeto o un array, utilizaremos JSON.stringify, porque localStorage solo acepta strings
  localStorage.setItem("user", JSON.stringify(user));
});

//Para convertir el string almacenado en localStorage utilizaremos JSON.parse, que convertirá los strings en su valor original
const localUser = JSON.parse(localStorage.getItem("user"));

container.innerHTML = localStorage.getItem("user")
  ? `
<h2>${localUser.username}</h2>
<h3>${localUser.age}</h3>
`
  : `No hay usuario`;

//Sistema alternativo para acceder a las claves del localStorage
console.log(localStorage.user);

//sessionStorage
//-> Solo persiste durante la navegación
