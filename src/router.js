const express = require("express");
const moviesController = require("./controllers/moviesController.js");
const router = express.Router();

router.post("/ratings", moviesController.getRatingsByUser);

module.exports = router;
