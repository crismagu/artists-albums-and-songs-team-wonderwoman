const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tag-controller');
// Needs updated

//GET All Songs
router.get("/", tagController.getAllSongs);

//GET One Song
router.get(":id", tagController.findOne);

//POST New Songs
router.post("/", tagController.addNewSong);

//PATCH Updated Song
router.patch("/:id", tagController.songUpdate);
//?page=2&limit=3

//DELETE Song
router.delete("/:id", tagController.deleteOne);

module.exports = router;