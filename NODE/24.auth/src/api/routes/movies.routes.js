const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const { isAuth } = require("../../middlewares/auth.middleware");

const {
  getAllMovies,
  createMovie,
  updateMovieByID,
} = require("../controllers/movies.controller");

const MoviesRoutes = express.Router();

MoviesRoutes.get("/", [isAuth], getAllMovies);
MoviesRoutes.post("/", [isAuth], upload.single("poster"), createMovie);
MoviesRoutes.patch("/:id", upload.single("poster"), updateMovieByID);

module.exports = MoviesRoutes;
