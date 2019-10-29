const Artist = require('../models/Artist');

module.exports = {
    addEventListener(name, callback) {
        const newArtist = new Artist(new Artist(name));
        newArtist.save().then(callback);
    },
    findAll(callback) {
        Artist.find().then(callback);
        // replace with async + await
    }
};
