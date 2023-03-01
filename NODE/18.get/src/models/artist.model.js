const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArtistSchema = new Schema(
  {
    name: { type: String, required: true },
    origin: { type: String, required: true },
    genre: { type: String, required: true },
    age: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;
