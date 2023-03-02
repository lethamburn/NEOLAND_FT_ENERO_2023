const express = require("express");
const Author = require("../models/author.model");

const router = express.Router();

//GET ALL AUTHORS
router.get("/", async (req, res, next) => {
  try {
    //En los campos populate se pone el campo del objeto que queremos popular
    const authors = await Author.find().populate("books");
    return res.status(200).json(authors);
  } catch (error) {
    return next(error);
  }
});

//CREATE AUTHOR
router.post("/", async (req, res, next) => {
  try {
    const newAuthor = new Author(req.body);
    const createdAuthor = await newAuthor.save();
    return res.status(201).json(createdAuthor);
  } catch (error) {
    return next(error);
  }
});

//PUSH BOOK IN AUTHOR
router.put("/add-book", async (req, res, next) => {
  try {
    const { bookId } = req.body;
    const { authorId } = req.body;
    const updatedAuthor = await Author.findByIdAndUpdate(
      authorId,
      { $push: { books: bookId } },
      { new: true }
    );
    return res.status(200).json(updatedAuthor);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
