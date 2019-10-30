var express = require('express');
var router = express.Router();
var artistController = require('../controllers/artist-controller');

// Get All Artists
router.get("/", artistController.getAllArtist);
router.post("/:name", artistController.addNewArtist);
module.exports = router;