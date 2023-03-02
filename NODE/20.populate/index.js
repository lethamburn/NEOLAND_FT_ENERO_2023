const express = require("express");
const connect = require("./src/utils/database");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const server = express();
connect();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//BOOKS
const booksRoutes = require("./src/routes/book.routes");
server.use("/api/books", booksRoutes);

//AUTHORS
const authorsRouters = require("./src/routes/author.routes");
server.use("/api/authors", authorsRouters);

server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
