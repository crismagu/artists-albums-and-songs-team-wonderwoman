const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

MongoClient.connect(
  "<url-for-your-db>",
  { useNewUrlParser: true },
  (error, client) => {
    const db = client.db("mongo-introduction");

    db.collection("people").insertOne(
      {
        name: "Brian",
        age: 37
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to connect", error);
        }
        console.log(result);
      }
    );
  }
);