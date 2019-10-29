const mongoose = require("mongoose");
const Album = require('./Album');


const Artist = mongoose.model(
    "Artist",
    new mongoose.Schema({ 
      name: { type: String, required: true}, 
      albums: [ { type: mongoose.Schema.Types.ObjectId,
                  ref: 'Album' }]
    })
  );

module.exports = Artist;
  