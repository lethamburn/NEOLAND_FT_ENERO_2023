const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    plot: { type: String, required: false },
    year: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
