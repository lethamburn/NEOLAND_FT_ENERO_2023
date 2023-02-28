const express = require("express");

const server = express();
const router = express.Router();
const PORT = 8080;

//ROUTES

//QUERY -> Parametros opcionales
router.get("/name", (req, res) => {
  const id = req.query.id;
  //Si ponemos /name?id=123 el console.log me dira "La query id tiene el valor 123"
  res.send(`La query id tiene el valor ${id}`);
});
//PARAMS -> Parametros
router.get("/videogames/:name", (req, res) => {
  const name = req.params.name;
  const videogames = [
    "Metal Gear Solid",
    "Crash Bandicoot",
    "Mario Galaxy",
    "Elden Ring",
  ];
  //Encontraba el indice del videojuego
  const findVideogameIndex = videogames.indexOf(name);
  if (findVideogameIndex === -1) {
    res.send("No se ha encontrado el videojuego");
  } else {
    res.send(videogames[findVideogameIndex]);
  }
});

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
