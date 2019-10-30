const Album = require('../models/Artist');

module.exports = {
    addEventListener(name, callback) {
        const newAlbum = new Album(new Album(name));
        newAlbum.save().then(callback);
    },
    findAll(callback) {
        Album.find().then(callback);
        // replace with async + await
    }
};
