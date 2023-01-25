/* console.log(window);
console.log(document) */

//Cómo acceder a los elementos del DOM

//NODOS
/* const myH1byId = document.getElementById("titulo");
console.log(myH1byId);

const myH1byClass = document.getElementsByClassName("titulo");
console.log(myH1byClass);

const myH1byTag = document.getElementsByTagName("h1");
console.log(myH1byTag); */

//QUERYSELECTOR

//POR ETIQUETA
//const myH1 = document.querySelector("h1")
//POR ID
//const myH1 = document.querySelector("#titulo");
//POR CLASE
const myH1 = document.querySelector(".titulo");
console.log(myH1);

//QUERYSELECTORALL
const myPs = document.querySelectorAll("p");
console.log(myPs);

//ACCEDER A HIJOS Y PADRES
const myDiv = document.querySelector("#container");
const hijosDeDiv = myDiv.childNodes;
console.log("Hijos de div", hijosDeDiv);

const padreDeH1 = myH1.parentNode;
console.log(padreDeH1);
