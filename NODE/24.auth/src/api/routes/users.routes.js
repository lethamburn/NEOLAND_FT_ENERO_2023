const express = require("express");

const UsersRoutes = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/users.controller");

UsersRoutes.post("/login", loginUser);
UsersRoutes.post("/register", registerUser);
UsersRoutes.post("/logout", logoutUser);

module.exports = UsersRoutes;
