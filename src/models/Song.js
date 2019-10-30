const mongoose = require("mongoose");
const Artist = require('./Artist');
const Album = require('./Album');
const Comment = require('./Comment');

const Song = mongoose.model(
    "Songs",
    new mongoose.Schema(
      { 
      title: String, 
      duration: String,
      link: String,
      comments: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}  ] 
      })
  );
  

  module.exports = Song;
  