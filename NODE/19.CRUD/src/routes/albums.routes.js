const express = require("express");
//Creamos el router
const router = express.Router();
//Importamos el modelo
const Album = require("../models/album.model");

//GET ALL
router.get("/", async (req, res, next) => {
  try {
    const albums = await Album.find();
    return res.status(200).json(albums);
  } catch (error) {
    return next(error);
  }
});

//GET BY ID
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const album = await Album.findById(id);
    return res.status(200).json(album);
  } catch (error) {
    return next(error);
  }
});

//CREATE
router.post("/", async (req, res, next) => {
  try {
    //Creamos un nuevo album de tipo Album
    const newAlbum = new Album(req.body);

    //Guardamos el album en la base de datos y lo almacenamos en una constante para enseñarlo por la respuesta
    const createdAlbum = await newAlbum.save();
    return res.status(201).json(createdAlbum);
  } catch (error) {
    return next(error);
  }
});

//DELETE BY ID
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Album.findByIdAndDelete(id);
    return res.status(200).json("Album deleted!");
  } catch (error) {
    return next(error);
  }
});

//EDIT BY ID
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const albumModified = new Album(req.body);
    //Igualamos el _id del nuevo personaje al id actual para que no me lo modifique
    albumModified._id = id;
    //Encontrar por id y pararle el album modificado
    const albumUpdated = await Album.findByIdAndUpdate(id, albumModified);
    return res.status(200).json(albumUpdated);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
