const mongoose = require("mongoose");
const Song = require("./Song");

const Album = mongoose.model(
    "Album",
    new mongoose.Schema({ 
        title: String,
        genre: String, 
        year: Date,
        songs: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Song' } ]
    })
);

module.exports = Album;
  