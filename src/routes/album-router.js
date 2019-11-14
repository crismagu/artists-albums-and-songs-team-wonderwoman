const express = require('express');
const router = express.Router();
const albumController = require('../controllers/album-controller');

//GET All Albums
router.get("/", albumController.getAllAlbums);

//GET One Album
router.get("/:id", albumController.findOne);

//POST New Albums
router.post("/", albumController.addNewAlbum);

//PATCH Updated Album
router.patch("/:id", albumController.albumUpdate);
//?page=2&limit=3

//DELETE Album
router.delete("/:id", albumController.deleteOne);

module.exports = router;