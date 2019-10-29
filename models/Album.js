const mongoose = require("mongoose");
const Song = require('./Song');

const Album = mongoose.model(
    "Album",
    new mongoose.Schema({ 
        title: String,
        genre: String, 
        year: Date,
        songs: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Song' } ]
    }));
  
  const queenB = new Album({ title: "Lemonade", genre: "RnB", year: 2016 });
  
  queenB.save((error, savedModelThree) => {
    if (error) return console.error(error);
    console.log(savedModelThree.title, savedModelThree.genre, savedModelThree.year, savedModelThree.songs);
  });

  module.exports = Album;
  