const mongoose = require("mongoose");

const Album = mongoose.model(
    "Album",
    new mongoose.Schema({ 
        title: String,
        genre: String, 
        year: Date })
  );
  
  const modelThree = new Album({ title: "Lemonade", genre: "RnB", year: 2016 });
  
  modelThree.save((error, savedModelThree) => {
    if (error) return console.error(error);
    console.log(savedModelThree.title, savedModelThree.genre, savedModelThree.year);
  });

  module.exports = Album;
  