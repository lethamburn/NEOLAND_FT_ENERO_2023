const express = require("express");
const dotenv = require("dotenv");
const connect = require("./src/utils/database");
dotenv.config();

//Creamos el servidor
const server = express();
//Le decimos que la información que le llega al server por el body es de tipo json y que la codifique por url
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Recuperamos la variable de entorno PORT
const PORT = process.env.PORT;
//Nos conectamos a la base de datos
connect();

//Controlar las rutas de Albums
const albumRoutes = require("./src/routes/albums.routes");
//A partir de /albums empiezan las rutas de albumRoutes
server.use("/api/v1/albums", albumRoutes);

//Controlar las rutas de Artists
const artistsRoutes = require("./src/routes/artists.routes");
server.use("/api/v1/artists", artistsRoutes);

//Controlamos las rutas "not found";
server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
