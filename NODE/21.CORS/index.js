const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());

//Configuración basica de cors
server.use((req, res, next) => {
  //Con el asterisco estamos permitiendo a todo el mundo que pueda hacer x
  res.header("Access-Control-Allow-Origin", "*");
  //Los tipos de autorización que tiene la API
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  //Verbos permitidos
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
