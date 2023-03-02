const express = require("express");
const VideogamesRouter = express.Router();

//Importamos las funciones
const {
  getAllVideogames,
  getVideogameByID,
  createVideogame,
  updateVideogame,
  deleteVideogame,
} = require("../controllers/videogames.controller");

VideogamesRouter.get("/", getAllVideogames);
VideogamesRouter.get("/:id", getVideogameByID);
VideogamesRouter.post("/", createVideogame);
VideogamesRouter.put("/:id", updateVideogame);
VideogamesRouter.delete("/:id", deleteVideogame);

module.exports = VideogamesRouter;
