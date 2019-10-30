const Album = require('../models/Artist');
const artistService = require('../service/artist-service');

module.exports = {
    addNewArtist(req, res) {
        const {name} = req.body;
        artistService.add(name)
    },
    getAllArtist(req, res) {
        artistService.findAll(artist => {
            res.json(artist)
        })
    }
};