const Artist = require('./models/Artist');
const artistService= require('./service/artist-service');

module.exports = {
    addNewArtist(req, res) {
        const {name} = req.body;
        artistService.add(name)
    },
    getAllArtist(req, res) {
        artistService.findAll(Artist => {
            res.json({Artist})
        })
    }
};

//MOVE TO SRC FOLDER IN CONTROLLERS