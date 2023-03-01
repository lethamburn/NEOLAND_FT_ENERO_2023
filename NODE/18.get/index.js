const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./src/utils/database");

//Importamos los modelos
const Artist = require("./src/models/artist.model");
const Album = require("./src/models/album.model");

const PORT = process.env.PORT;

const server = express();
const router = express.Router();

connect();

//Rutas
//GET A TODOS LOS ARTISTAS
router.get("/artists", (req, res) => {
  return Artist.find()
    .then((artists) => {
      return res.status(200).json(artists);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
});
//GET A LOS ARTISTAS POR ID
router.get("/artists/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const artist = await Artist.findById(id);
    if (artist) {
      return res.status(200).json(artist);
    } else {
      return res.status(404).json("No artist found in DB");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});
//GET A LOS ARTISTAS POR NOMBRE
router.get("/artists/name/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const artist = await Artist.find({ name: name });
    if (artist) {
      return res.status(200).json(artist);
    } else {
      return res.status(404).json("No artist found in DB");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});
//GET DE TODOS LOS ALBUMS
router.get("/albums", (req, res) => {
  return Album.find()
    .then((albums) => {
      return res.status(200).json(albums);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
});

//GET DE TODOS LOS ALBUMS CON AÑO > QUE x
router.get("/albums/yearGreaterThan/:year", async (req, res) => {
  const year = req.params.year;
  try {
    const album = await Album.find({ year: { $gt: year } });
    return res.status(200).json(album);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//Fin de las rutas
server.use("/api/v1", router);

server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
