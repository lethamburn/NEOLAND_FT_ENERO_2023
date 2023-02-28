const express = require("express");

const PORT = 8080;
const server = express();

//Creamos el router
const router = express.Router();

//Vamos a definir una ruta, el tipo de petición y que es lo que va a hacer
router.get("/", (req, res) => {
  res.send("Hello everyone!");
});

//Definimos otra ruta, con su tipo de petición y lo que va a hacer
router.get("/movies", (req, res) => {
  const movies = ["Dune", "The Batman", "Babylon", "Interstellar"];
  res.send(movies);
});

//Le decimos que el server tenga un path principal y haga uso del router
server.use("/api/v1/", router);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});

//1º Creamos el servidor
//2º Creamos el router
//3º Definimos las rutas
//4º Le pasamos el router al server
//5º Escuchamos el server
