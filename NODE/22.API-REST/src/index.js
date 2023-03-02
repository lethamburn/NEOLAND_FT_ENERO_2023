const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connect = require("./utils/connect");

const VideogamesRoutes = require("./api/routes/videogames.routes");
const ConsolesRoutes = require("./api/routes/consoles.routes");

dotenv.config();
const PORT = process.env.PORT || 8081;

//Creamos el servidor
const server = express();
//Nos conectamos a la base de datos
connect();

//Configuramos las cors en el servidor
server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//Configuramos y pareamos la info
server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: false }));

//Configuramos las rutas
server.use("/api/v1/videogames", VideogamesRoutes);
server.use("/api/v1/consoles", ConsolesRoutes);

//Controlamos rutas no encontradas
server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});
//Controlamos los errores
server.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected Error");
});

//Ocultamos las tecnologias con las que está desarrollado el server
server.disable("x-powered-by");

//Levantamos el servidor
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
