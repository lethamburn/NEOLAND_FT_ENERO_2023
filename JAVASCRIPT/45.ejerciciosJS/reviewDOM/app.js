/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.
*/

//1.1
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

//Creamos la lista
const ul = document.createElement("ul");
//Recorremos los paises
for (const country of countries) {
  //Creamos un li
  const li = document.createElement("li");
  //Le añadimos el texto
  li.textContent = country;
  //Y por cada uno lo metemos en lista previamente creada
  ul.appendChild(li);
  //Solución alternativa con template
  // ul.innerHTML += `<li>${country}</li>`;
}

document.body.appendChild(ul);

//1.2
/* const toRemove = document.querySelector(".fn-remove-me");
toRemove.remove();
 */
document.querySelector(".fn-remove-me").remove();

//1.3
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const carsUl = document.createElement("ul");

for (const car of cars) {
  const carLi = document.createElement("li");
  carLi.textContent = car;
  carsUl.appendChild(carLi);
}

//Para recuperar un atributo con el valor hay que anidarlo en corchetes
const carDiv = document.querySelector("[data-function='printHere']");
carDiv.appendChild(carsUl);

//1.4
const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const country of countries2) {
  const countryDiv = document.createElement("div");
  countryDiv.classList.add("country");
  //SOLUCION CON TEMPLATE
  /* countryDiv.innerHTML = `
    <h4>${country.title}</h4>
    <img src=${country.imgUrl} alt=${country.title}/>
    `; */
  //SOLUCION CON NODO
  const countryh4 = document.createElement("h4");
  countryh4.textContent = country.title;
  const countryimg = document.createElement("img");
  countryimg.src = country.imgUrl;
  countryimg.alt = country.title;

  //1.6

  //Creamos el botón
  const btn = document.createElement("button");
  btn.innerHTML = "X";
  //Cada uno de estos botones va a borrar el div, pero como lo estamos haciendo en un bucle, va a borrar su correspondiente
  btn.addEventListener("click", () => {
    countryDiv.remove();
  });

  countryDiv.appendChild(countryh4);
  countryDiv.appendChild(countryimg);
  countryDiv.appendChild(btn);
  document.body.appendChild(countryDiv);
}

//1.5

//Seleccionamos todos los divs de country

//Creamos el botón
const myBtn = document.createElement("button");
myBtn.innerHTML = "Elimina el último";

const deleteDivs = () => {
  //Detectamos los divs dentro de la funcion para siempre saber cuantos hay de manera actualizada
  const allDivs = document.querySelectorAll(".country");
  if (allDivs.length <= 1) {
    myBtn.innerHTML = "No hay más divs que eliminar";
    myBtn.disabled = true;
  }
  allDivs[allDivs.length - 1].remove();
};

//Le damos funcionalidad
myBtn.addEventListener("click", () => {
  deleteDivs();
});

//Añadimos el botón
document.body.appendChild(myBtn);
