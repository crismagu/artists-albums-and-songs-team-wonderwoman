const Album = require('../models/Album');
const albumService = require('../service/album-service');

module.exports = {
    async addNewAlbum(req, res) {
        try {
            const artistId = req.body.artistId;
            const {title, genre, year} = req.body;
            const album = {title: title, genre: genre, year: year};
            const newAlbum = await albumService.addAlbum(album, artistId);
            res.json({newAlbum}); 
        } catch(error) {
            res.json({error});
        }
        
    },
    async albumUpdate(req, res) {
        try {
            const albumId = req.params.id;
            const updatedAlbum = await albumService.updateAlbum(albumId, req.body);
            res.json({updatedAlbum});
        }   catch(error) {
            res.json({error});

        }
    },
    async deleteOne(req, res){
        try {
            const albumId = req.params.id;
            const artistId = req.body.artistId;
            const albumToDelete = await albumService.deleteAlbum(albumId, artistId);
            res.json({albumToDelete});
        } catch(error) {
            res.json({message: error.message});
        }
    },
    async findOne(req, res){
        try {
            const albumId = req.params.id;
            const requestedAlbum = await albumService.findAlbum(albumId);
            res.json({requestedAlbum});
        } catch(error) {
            res.json({error});
        }
    },
    async getAllAlbums(req, res) {
        try {
            res.json(await albumService.findAll());
        } catch(error) {
            res.json({error});
        }
    
    }, 
};