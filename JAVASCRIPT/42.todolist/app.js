const todoInput = document.querySelector("#todo");
const addBtn = document.querySelector("#addBtn");

const container = document.querySelector("#container");

//La lista vacia de inicio
let list = [];

//Cuando clicamos en el boton...
addBtn.addEventListener("click", () => {
  //Seteamos la lista con lo que tenga gracias a spread y el nuevo
  list.push(todoInput.value);
  //Vamos a memorizar la lista en el navegador
  localStorage.setItem("todolist", JSON.stringify(list));

  const div = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.textContent = todoInput.value;

  const button = document.createElement("button");
  button.innerHTML = "X";

  div.appendChild(h2);
  div.appendChild(button);

  button.addEventListener("click", () => {
    list.splice(list.indexOf(todoInput.value), 1);
    div.remove();
  });

  container.appendChild(div);
});
