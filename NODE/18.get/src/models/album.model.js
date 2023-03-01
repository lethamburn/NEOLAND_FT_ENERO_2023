const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AlbumSchema = new Schema(
  {
    title: { type: String, required: true },
    cover: { type: String, required: true },
    artist: { type: String, required: true },
    year: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const Album = mongoose.model("Album", AlbumSchema);

module.exports = Album;
