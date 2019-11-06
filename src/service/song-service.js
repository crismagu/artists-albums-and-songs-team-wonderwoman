const Song = require('../models/Song');
const Album = require('../models/Album');
const Artist = require('../models/Artist');
const mongoose = require('mongoose');

module.exports = {
    async addSong(songObject, albumId) {
        const newAlbum = await new Song(albumObject).save();
        const artist = await Artist.findById(albumId);
        await artist.albums.push(newAlbum)
        const response = await artist.save();
        console.log(response);
        return newAlbum;
    },
    async deleteSong(songId, albumId) {
        const album = await Album.findById(albumId);
        await album.songs.pull({_id: songId});
        await album.save();
        const songToDelete = await Song.findByIdAndDelete(songId);
        return songToDelete;
    },
    async findAll() {
        const allSong = await Song.find().populate("albums").exec();
        return allSong;
    },
    async findAlbum(songId) {
        const songRequest =  await Song.find(songId); 
        return songRequest;
    },
    async updateSong(songId, songUpdates = {} ) {
        const updatedSong = await Song.findByIdAndUpdate(songId, songUpdates, {new: true});
        return updatedSong;
    }, 
    async removeMany(songs){
        const removed = songs;
        const newArry = [];
        removed.forEach(item => {
            newArry.push(mongoose.Types.ObjectId(item));    
        });
        const result  = await Song.remove( { _id : { $in:newArry}})
        return result;
    }
};

