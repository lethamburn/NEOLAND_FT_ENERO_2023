//Arrays
const movies = ["Batman", "Robocop", "Bambi", "Dune", "Toy Story"];

//Longitud humana
console.log(movies.length);
//Posicion ordenador
console.log(movies[2]);

//Métodos para modificar arrays

//pop
movies.pop();
console.log(movies);

//push
movies.push("Spiderman", "Venom");
console.log(movies);

//reverse
movies.reverse();
console.log(movies);

//shift
movies.shift();
console.log(movies);

//unshift
movies.unshift("Avatar 2");
console.log(movies);

//sort
const letras = ["B", "C", "A", "Z", "H", "E", "D"];
console.log(letras.sort());
console.log(movies.sort());
const numeros = [2, 4, 5, 40, 23, 54];
console.log(numeros.sort());

//splice
const shows = ["Breaking Bad", "Lost", "Midnight Mass", "24"];
shows.splice(1, 2, "Los 100", "Miercoles");
console.log(shows);

//Métodos que no modifican el array

//Concat
const heroes = ["Cap. America", "Hulk", "Thor"];
const villains = ["Dr. Doom", "Thanos", "Magneto"];
const characters = heroes.concat(villains);
console.log(characters);

//Join
const comida = ["galletas", "cerveza", "pipas", "pizza"];
console.log(comida.join("-"));

//Slice
console.log(comida.slice(1, 3));

//toString
console.log(comida.toString());

//Localizar un valor en un array

//IndexOf -> Si no existe en el array devuelve un -1
const numerosTwo = [10, 12, 7, 4, 6, 7];
console.log(numerosTwo.indexOf(7));

//LastIndexOf
console.log(numerosTwo.lastIndexOf(7));

//Includes
console.log(numerosTwo.includes(12 && 10));

numerosTwo.splice(numerosTwo.indexOf(12), 1);
console.log(numerosTwo);
