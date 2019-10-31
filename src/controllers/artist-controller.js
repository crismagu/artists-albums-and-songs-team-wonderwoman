const Artist = require('../models/Artist');
const artistService = require('../service/artist-service');

class ArtistController {
    
    static async addNewArtist(req, res) {
        try {
            console.log(req.body)
            // const artist = {name:req.body.name}
            const newArtist = await artistService.save({name: req.body.name});
            res.json({newArtist})
        } catch (error) {
            res.json({error});
        }
    }

    static async findAll(req, res) {
        try {
            const artists = await artistService.findAll()
            res.json({artists})
        } catch (error) {
            res.json({error})
        }
    }

    static async findArtistById(req, res) {
        try {
            const { id } = req.body;
            const foundArtist = await artistService.findById(id);
            res.json({foundArtist})
        } catch (error) {
            res.json({error});
        }
    }
};

module.exports = ArtistController;