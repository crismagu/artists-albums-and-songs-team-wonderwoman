const mongoose = require("mongoose");

const Artist = mongoose.model(
    "Artist",
    new mongoose.Schema({ name: String, album: String })
  );
  
  const modelThree = new Artist({ name: "Beyonce", album: "Lemonade" });
  
  modelThree.save((error, savedModelThree) => {
    if (error) return console.error(error);
    console.log(savedModelThree.name, savedModelThree.album);
  });

  module.exports = Artist;
  