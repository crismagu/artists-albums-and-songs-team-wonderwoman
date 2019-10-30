const Artist = require('../models/Artist');
const Album = require('../models/Album');
const Song = require('../models/Song');
require('./db')

// const newArtist = new Artist({ name: "Beyonce", albums: "5db88580283d41812fda9110" });

async function buildData () {
  // Queen B
  // const testSong = new Song({ title: "Formation", duration: "3.26", link: "https://youtu.be/WDZJPJV__bQ" });
  // const testAlbum = new Album({name: "Lemonade"});
  // const testArtist = new Artist({ name: "Beyonce"});

  const testSong = new Song({ title: "Smells Like Teen Spirit", duration: "3.26", link: "https://youtu.be/WDZJPJV__bQ" });
  const testAlbum = new Album({title: "Lithium"});
  const testArtist = new Artist({ name: "Nirvana"});

  try {
    const newSong = await testSong.save();
    const newAlbum = await testAlbum.save();
    const newArtist = await testArtist.save();
    newArtist.albums.push(newAlbum);
    const newArtist1 = await newArtist.save();
    // console.log(newArtist1)
  } catch (err) {
    console.error(err)
  }
  
  const richardTest = await Artist.findOne({name: 'Nirvana'}).populate('albums').exec();
  console.log(richardTest);
}

buildData();

    // newArtist.save().then((error, savedNewArtist) => {
    //   if (error) {
    //     return console.error(error);
    //   } else {
    //     console.log(savedNewArtist.name, savedNewArtist.albums);
    //   }
    // });
    
    // newSong.save().then((error, savedNewSong) => {
    //   if (error) return console.error(error);
    //   console.log(savedNewSong.title, savedNewSong.duration, savedNewSong.link);
    // });