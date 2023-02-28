const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    title: { type: String, required: true },
    poster: { type: String, required: true },
    year: { type: Number, required: true },
    director: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
