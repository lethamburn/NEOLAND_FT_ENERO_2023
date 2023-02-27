//Esta es la manera tradicional de importar (o requerir) un paquete o libreria
//Si hacemos que este fichero commonJS sea de tipo module, podemos hacer un import
const fs = require("fs");

//Crear un array de objetos
const movies = [
  {
    title: "Infinity Pool",
    year: 2023,
    director: "Brandon Cronenberg",
  },
  {
    title: "Matrix",
    year: 1999,
    director: "Wachowski Sisters",
  },
  {
    title: "Babylon",
    year: 2022,
    director: "Damien Chazelle",
  },
];

//Le añadimos una clave nueva a cada uno de los objetos del array original
const moviesAvailable = movies.map((movie) => ({
  ...movie,
  available: true,
}));

//Vamos a transformar nuestros datos a JSON para poder crear un fichero
const moviesJSON = JSON.stringify(moviesAvailable);
console.log(moviesJSON);

//Con File System utilizamos el metodo writeFile para escribir un nuevo archivo que como primer argumento recibe el nombre y la extension y como segundo los datos
fs.writeFile("movies.json", moviesJSON, () => {
  console.log("✅ Movies JSON created");
});
