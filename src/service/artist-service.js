const Artist = require('../models/Artist');
const albumService = require("../service/album-service");

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
            const artists = await Artist.find().populate('albums').exec();
            return artists
        } catch (error) {
            return error
        }
    },
    async findById(id) {
        try {
            const artist = await Artist.findById(id).populate('albums').exec();
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
            // await artistToDelete.songs.pullAll();
            const albumArray = artistToDelete.albums;
            await albumService.removeMany(albumArray);
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
