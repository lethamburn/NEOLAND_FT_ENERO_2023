const express = require("express");
const router = express.Router();

const Artist = require("../models/artist.model");

router.get("/", async (req, res, next) => {
  try {
    const allArtists = await Artist.find();
    return res.status(200).json(allArtists);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
