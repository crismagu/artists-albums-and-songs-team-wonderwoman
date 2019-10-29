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
  
  queenB.save((error, savedQueenB) => {
    if (error) return console.error(error);
    console.log(savedQueenB.title, savedQueenB.genre, savedQueenB.year, savedQueenB.songs);
  });

  module.exports = Album;
  