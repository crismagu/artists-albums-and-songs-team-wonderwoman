const Artist = require('../models/Artist');

module.exports = {
    async save(artist) {
        try {
            const newArtist = new Artist({artist})
            await newArtist.save();
            return newArtist;
        } catch (err) {
            return err;
        }

    },
    async findAll() {
        try {
            const artists = await Artist.find();
            return artists
        } catch (error) {
            return error
        }
    },
    async findById(id) {
        try {
            const artist = await Artist.findById(id);
            return artist
        } catch (error) {
            return error
        }
    }
};
