const Album = require('../models/Artist');

module.exports = {
    
    async addAlbum() {
        const newAlbum = new Album(new Album(name));
        newAlbum.save();
    },
    async findAll() {
        const allAlbum = await Album.find();
        return allAlbum;
        // replace with async + await
    },
  async findAlbum(albumId) {
      const albumRequest =  await Album.find(albumId); 
      return albumRequest;
    }
};

