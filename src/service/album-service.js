const Album = require('../models/Album');
const Artist = require('../models/Artist');

module.exports = {
    
    async addAlbum(albumObject, artistId) {
        const newAlbum = await new Album(albumObject).save();
        const artist = await Artist.findById(artistId);
        await artist.albums.push(newAlbum)
        const response = await artist.save();
        console.log(response);
        return newAlbum;
    },
    async deleteAlbum(albumId, artistId) {
        // Not deleting album from artist
        const artist = await Artist.findById(artistId);
        await artist.albums.pull(albumId);
        await artist.save();
        const albumToDelete = await Album.findByIdAndDelete(albumId);
        return albumToDelete;
    },
    async findAll() {
        const allAlbum = await Album.find().populate("albums").exec();
        return allAlbum;
        // replace with async + await
    },
    async findAlbum(albumId) {
        const albumRequest =  await Album.find(albumId); 
        return albumRequest;
    },
    async updateAlbum(albumId) {
        const updateAlbum = await Album.findByIdAndUpdate(albumId, albumUpdates, {new: true});
        return updateAlbum;
    }
    
};

