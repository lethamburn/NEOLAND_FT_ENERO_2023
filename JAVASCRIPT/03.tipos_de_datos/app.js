//Tipos de datos

//String - Cadena de texto
const texto = "Hola, buenas tardes";
const textoSimple = "Hola, buenas noches";
const textoCombinado = "Me han dicho que 'buenas noches' 1%&/?$=%&?·";
const url = "www.google.com";

//Numbers - Numeros
const numero = 12;
const decimales = 12.5;

//Booleans - Booleano
const logged = true;
const loggedOut = false;

//Null - Nulo
const empty = null;

//Undefined
//console.log(car);
const car = undefined;

//Object - Objeto
const superheroe = {
  name: "Spiderman",
  realName: "Peter Parker",
  location: "New York",
  age: 28,
};

superheroe.name = "Spider-Man";
superheroe.alive = true;
console.log(superheroe);

//Arrays
const superheroes = [
  "Hulk",
  "Black Panther",
  "Batman",
  "Spiderman",
  "Iron-Man",
];

//Combinar datos
const movies = [
  {
    title: "The Batman",
    year: 2022,
  },
  {
    title: "Dune",
    year: 2021,
  },
  {
    title: "Avatar",
    year: 2022,
  },
];

//Concatenar datos
const name = "Peter";
const surname = "Parker";
const age = 35;

const quote =
  "Hola, me llamo " + name + " " + surname + " y tengo " + age + " años.";
console.log(quote);

//CON ES6
const newQuote = `Hola, me llamo ${name} ${surname}, y tengo ${age} años`;
