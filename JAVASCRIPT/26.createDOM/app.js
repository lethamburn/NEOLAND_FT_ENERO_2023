document.title = "Create DOM";

//Crear nuevos elementos - Nodos
const div = document.createElement("div");
console.log(div);
const h1 = document.createElement("h1");
console.log(h1);

//Crear nodos de texto
const h1Content = document.createTextNode("Bienvenidos a DOM");
console.log(h1Content);
//Añadir hijos a padres
h1.appendChild(h1Content);
console.log(h1);

div.appendChild(h1);
console.log(div);

document.body.appendChild(div);

//Alternativa con innerHTML - Template string
/* document.body.innerHTML += `<div><h1>Bievenidos a DOM</h1></div>`; */

const myH2 = document.querySelector("h2");
myH2.insertAdjacentHTML(
  "beforebegin",
  `<p>Voy antes del h2 gracias a inserAdjacentHTML</p>`
);
