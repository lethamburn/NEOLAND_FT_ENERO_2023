const express = require("express");
const dotenv = require("dotenv");
//Importamos la función de conexión con la base de datos
const { connect } = require("./database");

const PORT = process.env.PORT;

dotenv.config();

//Ejecutamos la conexión
connect();
const server = express();

server.listen(PORT, () => {
  console.log(`Server running on http://localhost${PORT}`);
});
