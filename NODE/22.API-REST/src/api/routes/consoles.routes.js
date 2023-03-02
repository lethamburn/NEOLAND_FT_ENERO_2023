const express = require("express");

const ConsolesRoutes = express.Router();

const {
  getAllConsoles,
  createConsole,
} = require("../controllers/consoles.controller");

ConsolesRoutes.get("/", getAllConsoles);
ConsolesRoutes.post("/", createConsole);

module.exports = ConsolesRoutes;
