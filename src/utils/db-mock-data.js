const Artist = require('../models/Artist');

// Queen B
const newArtist = new Artist({ name: "Beyonce", albums: "Lemonade" });
  
newArtist.save((error, savedNewArtist) => {
  if (error) return console.error(error);
  console.log(savedNewArtist.name, savedNewArtist.albums);
});

// Song
const newSong = new Song({ title: "Formation", duration: "3:26", link: "https://youtu.be/WDZJPJV__bQ" });
  
newSong.save((error, savedNewSong) => {
  if (error) return console.error(error);
  console.log(savedNewSong.title, savedNewSong.duration, savedNewSong.link);
});

