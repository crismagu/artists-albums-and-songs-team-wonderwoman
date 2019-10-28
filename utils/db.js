const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://userman:hunter42@cluster0-ggjhx.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to the DB!");
});