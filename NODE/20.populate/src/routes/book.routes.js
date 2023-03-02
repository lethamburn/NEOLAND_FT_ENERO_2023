const express = require("express");
const Book = require("../models/book.model");

const router = express.Router();

//GET ALL BOOKS
router.get("/", async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error) {
    return next(error);
  }
});

//CREATE BOOK
router.post("/", async (req, res, next) => {
  try {
    const newBook = new Book(req.body);
    const createdBook = await newBook.save();
    return res.status(201).json(createdBook);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
