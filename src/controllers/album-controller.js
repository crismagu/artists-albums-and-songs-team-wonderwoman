const Album = require('../models/Album');
const albumService = require('../service/album-service');

module.exports = {
    async addNewAlbum(req, res) {
        const artistId = req.body.artistId;
        const {title, genre, year} = req.body;
        const album = {title: title, genre: genre, year: year};
        const newAlbum = await albumService.addAlbum(album, artistId);
        res.json({newAlbum});
    },
    async getAllAlbums(req, res) {
        res.json(await albumService.findAll());
        // const albumService = findAll(album => {
        //     res.json(album)
        // })
    }, 
    async findOne(req, res){
        const albumId = req.params.id;
        const requestedAlbum = await albumService.findAlbum(albumId);
        res.json(requestedAlbum);
    },
    async deleteOne(req, res){
        const albumId = req.params.id;
        const albumToDelete = await albumService.deleteAlbum(albumId);
        res.json(albumToDelete);
    }
    
};