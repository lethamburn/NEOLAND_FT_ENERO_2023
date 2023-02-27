//Importamos File System
const fs = require("fs");

//Leemos el fichero movies.json y recogemos por el callback los errores y el resultado de la lectura
fs.readFile("movies.json", (error, movies) => {
  //Si hay un error sacamos un console log
  if (error) {
    console.log("No se han podido leer las peliculas ❌");
    //Parseamos los datos y los sacamos por consola
  } else {
    const parsedMovies = JSON.parse(movies);
    console.log(parsedMovies);
  }
});
