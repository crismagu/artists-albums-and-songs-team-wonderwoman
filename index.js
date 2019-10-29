const express = require('express');
const router = express.Router();
const artistController = require("./src/controllers/");

/* GET home page. */
router.get('/(all)?', artistController.getAllArtist());

module.exports = router;
