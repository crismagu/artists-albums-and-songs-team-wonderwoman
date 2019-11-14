const Song = require('../models/Song');
const Album = require('../models/Album');
const Artist = require('../models/Artist');
const mongoose = require('mongoose');

module.exports = {
    async addSong(songObject, albumId) {
        const newSong = await new Song(songObject).save();
        const album = await Album.findById(albumId);
        await album.songs.push(newSong)
        const response = await album.save();
        console.log(response);
        return newSong;
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

