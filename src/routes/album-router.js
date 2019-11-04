const express = require('express');
const router = express.Router();
const albumController = require('../controllers/album-controller');

//GET All Albums
router.get("/", albumController.getAllAlbums);

//POST New Albums
router.post("/", albumController.addNewAlbum);

//DELETE Album

router.delete("/delete", albumController.deleteOne);

module.exports = router;