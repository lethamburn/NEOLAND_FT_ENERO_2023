const mongoose = require("mongoose");

const VideogameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    year: {
      type: Date,
      default: 2023,
      required: false,
      trim: true,
      validate: {
        validator: (v) =>
          v instanceof Date &&
          v.getFullYear() >= 1900 &&
          v.getFullYear() <= 2100,
        message: "Year between 1900 & 2100",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Videogame = mongoose.model("Videogame", VideogameSchema);
module.exports = Videogame;
