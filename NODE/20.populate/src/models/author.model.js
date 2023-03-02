const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: false },
    country: { type: String, required: false },
    books: [{ type: mongoose.Types.ObjectId, ref: "Book" }],
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
