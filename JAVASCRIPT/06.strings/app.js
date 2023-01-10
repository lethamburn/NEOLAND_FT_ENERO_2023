//Acceder a una posición en un string
const palabra = "Silla";
console.log(palabra[2]);

//Length -> GO TO HELL
console.log(palabra.length);

//Includes
const frase = "Hasta el infinito y más allá!";
console.log(frase.includes("infinito"));

//Repeat
const saludo = "Hola";
console.log(saludo.repeat(3));

//Replace
const movie = "Star Trek";
console.log(movie.replace("Trek", "Wars"));

//ReplaceAll
const fraseTwo = "Buenos días, buenas tardes y buenas noches";
console.log(fraseTwo.replaceAll("buenas", "malas"));

//Slice
const album = "Bootcamp";
console.log(album.slice(0, 4));

//Split
const movieTwo = "Star Wars The Phantom Menace";
const movieTwoSplit = movieTwo.split(" ");
console.log(movieTwoSplit);

const link =
  "https://lumiere-a.akamaihd.net/v1/images/sb_teaser2_1-sht_v3a_online_lg_86f89198.jpeg/width?200%&mask";
const newLink = link.split("width");
const splittedLink = newLink[0];

//toUpperCase
const uppercase = "esToy eN mayuscUlas";
console.log(uppercase.toUpperCase());

//toLowerCase
const lowercase = "ESTOY EN mInUSCULAS";
console.log(lowercase.toLowerCase());

//Trim
const toTrim = "   Hola que tal   ";
console.log(toTrim.trim());
