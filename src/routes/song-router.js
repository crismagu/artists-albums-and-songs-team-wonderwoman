const express = require('express');
const router = express.Router();
const songController = require('../controllers/song-controller');

//GET All Songs
router.get("/", songController.getAllSongs);

//GET One Song
router.get(":id", songController.findOne);

//POST New Songs
router.post("/", songController.addNewSong);

//PATCH Updated Song
router.patch("/:id", songController.songUpdate);
//?page=2&limit=3

//DELETE Song
router.delete("/:id", songController.deleteOne);

module.exports = router;