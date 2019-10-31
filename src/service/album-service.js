const Album = require('../models/Album');
const Artist = require('../models/Artist');

module.exports = {
    
    async addAlbum(albumObject, artistId) {
        const newAlbum = new Album(albumObject);
        const artist = await Artist.findById(artistId);
        await artist.albums.push(newAlbum)
        const response = await artist.save();
        return response;
    },
    async findAll() {
        const allAlbum = await Album.find().populate("albums").exec();
        return allAlbum;
        // replace with async + await
    },
  async findAlbum(albumId) {
      const albumRequest =  await Album.find(albumId); 
      return albumRequest;
    }
};

