const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tag-controller');
// Needs updated

//GET All Tags
router.get("/", tagController.getAllTags);

//GET One Tag
router.get(":id", tagController.findOne);

//POST New Tags
router.post("/", tagController.addNewTag);

//PATCH Updated Tag
router.patch("/:id", tagController.tagUpdate);
//?page=2&limit=3

//DELETE Tag
router.delete("/:id", tagController.deleteOne);

module.exports = router;