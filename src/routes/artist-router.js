const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist-controller');

// GET All Artists
router.get("/", artistController.findAll);
router.post("/", artistController.addNewArtist);
router.patch("/:id", artistController.artistUpdate);
router.delete("/:id", artistController.artistDeleteById);
module.exports = router;