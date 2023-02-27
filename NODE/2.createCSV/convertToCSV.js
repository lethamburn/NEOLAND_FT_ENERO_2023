const fs = require("fs");

//Declaramos la función a la que le entra un JSON por argumento
const convertJSONToCSV = (JSON) => {
  //Inicializacion csv
  let csv = "";

  //Creamos los encabezados de las columnas
  let headers = Object.keys(JSON[0]);
  //Los juntamos con , y un salto de linea
  csv += headers.join(",") + "\n";

  //Cumplimentamos las filas
  JSON.forEach(function (row) {
    headers.forEach(function (header, index) {
      if (index > 0) {
        csv += ",";
      }
      csv += row[header];
    });
    csv += "\n";
  });
  return csv;
};

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

const csvMovies = convertJSONToCSV(movies);

fs.writeFile("movies.csv", csvMovies, (err) => {
  if (err) {
    console.log("Error al escribir movies.csv");
  } else {
    console.log("Fichero CSV creado");
  }
});
