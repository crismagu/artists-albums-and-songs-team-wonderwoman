const songService = require('../service/song-service');
const Song = require('./Song');

module.exports = {
    async addNewSong(req, res) {
        try {
            const { albumId, title, duration, link } = req.body;
            const song = {title: title, duration: duration, link: link};
            const newSong = await songService.addSong(song, albumId);
            res.json(newSong); 
        } catch(error) {
            console.log(error)
            res.json({message: error.message});
        }    
    },

    async songUpdate(req, res) {
        try {
            const songId = req.params.id;
            const updatedSong = await songService.updateSong(songId, req.body);
            res.json({updatedSong});
        }   catch(error) {
            res.json({error});
        }
    },

    async deleteOne(req, res){
        try {
            const albumId = req.params.id;
            const songId = req.body.id;
            const deletedSong = await songService.deleteSong(songId, albumId);
            res.json({deletedSong});
        } catch(error) {
            res.json({message: error.message});
        }
    },

    async findOne(req, res){
        try {
            const songId = req.params.id;
            const requestedSong = await songService.findSong(songId);
            res.json({requestedSong});
        } catch(song) {
            res.json({error});
        }
    },

    async getAllSongs(req, res) {
        try {
            const allSongs = await songService.findAll();
            res.json({allSongs});
        } catch(error) {
            res.json({error});
        }
    }, 
};