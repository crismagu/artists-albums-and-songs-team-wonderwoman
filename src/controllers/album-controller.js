const Album = require('../models/Album');
const albumService = require('../service/album-service');

module.exports = {
    async addNewAlbum(req, res) {
        const {title, genre, year, songs} = req.body;
        const newAlbum = await albumService.addAlbum(name);
    },
    async getAllAlbums(req, res) {
        res.json(await albumService.findAll());
        // const albumService = findAll(album => {
        //     res.json(album)
        // })
    }, 
    async findOne(req, res){
        const albumId = req.params.id
        const requestedAlbum = await albumService.findAlbum(albumId);
        res.json(requestedAlbum);
    }
    
};