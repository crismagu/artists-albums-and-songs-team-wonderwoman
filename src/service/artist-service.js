const Artist = require('../models/Artist');

module.exports = {
    async save(artist) {
        try {
            const newArtist = new Artist(artist)
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
    }, 
    async updateArtist(artistId, artistUpdates={}){
        try {
            const updateArtist = await Artist.findByIdAndUpdate(artistId, artistUpdates, {new: true});
            return updateArtist;
        } catch (err) {
            return err;
        }
    }, 
    async deleteArtist(artistId){
        try{
            const artistToDelete = await Artist.findById(artistId);
            await artistToDelete.songs.pullAll();
            await artistToDelete.remove();
            const response = artistToDelete.save();
            return response;
            // const artistToDelete = await Artist.findByIdAndRemove(artistId);
            // return artistToDelete;
        }catch(err){
            console.log(err)

        }
    }
};
