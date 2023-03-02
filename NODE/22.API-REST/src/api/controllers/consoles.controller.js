const Console = require("../models/console.model");

const getAllConsoles = async (req, res, next) => {
  try {
    const consoles = await Console.find().populate("videogames");
    res.status(200).json(consoles);
  } catch (error) {
    return next(error);
  }
};

const createConsole = async (req, res, next) => {
  try {
    const newConsole = new Console(req.body);
    const createdConsole = await newConsole.save();
    return res.status(201).json(createdConsole);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllConsoles,
  createConsole,
};
