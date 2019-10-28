const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://userman:hunter42@cluster0-aexhu.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to the DB!");
});

const Artist = mongoose.model(
  "Artist",
  new mongoose.Schema({ name: String, album: String })
);

const modelThree = new Artist({ name: "Beyonce", album: "Lemonade" });

modelThree.save((error, savedModelThree) => {
  if (error) return console.error(error);
  console.log(savedModelThree.name, savedModelThree.album);
});