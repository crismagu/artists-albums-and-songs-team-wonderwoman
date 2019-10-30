const Album = require('../models/Album');
const albumService = require('../service/album-service');

module.exports = {
    addNewAlbum(req, res) {
        const {title, genre, year, songs} = req.body;
        albumService.add(name)
    },
    getAllAlbums(req, res) {
        albumService.findAll(album => {
            res.json(album)
        })
    }
};