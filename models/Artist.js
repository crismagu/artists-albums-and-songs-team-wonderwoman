const mongoose = require("mongoose");
const Album = require('./Album');

const Artist = mongoose.model(
    "Artist",
    new mongoose.Schema({ 
      name: { type: String, unique: true}, 
      albums: Album })
  );
  
  const modelThree = new Artist({ name: "Beyonce", albums: "Lemonade" });
  
  modelThree.save((error, savedModelThree) => {
    if (error) return console.error(error);
    console.log(savedModelThree.name, savedModelThree.albums);
  });

  module.exports = Artist;
  