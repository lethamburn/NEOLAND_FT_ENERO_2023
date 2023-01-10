//Condicionales

const valid = "Hola";

/* if (valid === true) {
  console.log("Valid es true");
} */

//Esto se ejecuta porque valid es true, no estamos comprobando el valor, si no la existencia de valid
if (valid) {
  console.log("Valid es true");
}

const superheroe = "Batman";

if (superheroe === "Batman") {
  console.log("Hola, soy Batman");
} else {
  console.log("No soy Batman");
}

/* if (superheroe === "Batman" && typeof superheroe === "string") {
  console.log("Hola, soy Batman");
} else {
  console.log("No soy Batman");
}
 */

const age = 110;

if (age >= 18 && age < 100) {
  console.log("Eres adulto");
} else if (age > 0 && age < 18) {
  console.log("Eres adolescente");
} else if (age > 100 && age < 120) {
  console.log("Eres muy mayor");
} else {
  console.log("Eres inmortal");
}

//

const superhero = "Spider-Man";

if (superhero === "Spider-Man") {
  console.log("Su nombre real es Peter Parker");
} else if (superhero === "Daredevil") {
  console.log("Su nombre real es Matt Murdock");
} else if (superhero === "Iron Man") {
  console.log("Su nombre real es Tony Stark");
} else if (superhero === "Ant-Man") {
  console.log("Su nombre real es Scott Lang");
} else if (superhero === "Black Widow") {
  console.log("Su nombre real es Natasha Romanov");
} else {
  console.log("No hay superheroe");
}

//Para estos casos de comparacion estricta

//Switch
switch (superhero) {
  case "Spider-Man":
    console.log("Su nombre real es Peter Parker");
    break;
  case "Daredevil":
    console.log("Su nombre real es Matt Murdock");
    break;
  default:
    console.log("No hay superheroe");
    break;
}

//Ternario
let user;
let logged;

//CONDICION ? SE CUMPLE : NO SE CUMPLE
user ? (logged = "Estoy logueado") : (logged = "No estoy logueado");

console.log(logged);

/* if(user){
    logged = "Estoy logueado"
} else{
    logged = "No estoy logueado"
} */
