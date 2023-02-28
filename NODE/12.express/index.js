//Importamos express
const express = require("express");

//Definimos el puerto
const PORT = 8080;

//Creamos el servidor
const server = express();

//Levantamos el servidor
server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
