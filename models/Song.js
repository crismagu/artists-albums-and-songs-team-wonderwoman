const mongoose = require("mongoose");
const Artist = require('./Artist');
const Album = require('./Album');

const Song = mongoose.model(
    "Songs",
    new mongoose.Schema({ 
      title: String, 
      duration: Number,
      link: String, })
  );
  
  const modelThree = new Artist({ title: "Formation", duration: "3:26", link: "https://youtu.be/WDZJPJV__bQ" });
  
  modelThree.save((error, savedModelThree) => {
    if (error) return console.error(error);
    console.log(savedModelThree.title, savedModelThree.duration, savedModelThree.link);
  });

  module.exports = Song;
  