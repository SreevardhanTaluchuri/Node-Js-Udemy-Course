const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Sreevardhan:sreevardhan77910@cluster0.otzxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majoritymongodb+srv://Sreevardhan:sreevardhan77910@cluster0-ntrwp.mongodb.net/test?retryWrites=true"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};

const db = () => {
  if (_db) {
    return _db;
  } else {
    throw "Database not available";
  }
};

exports.mongoConnect = mongoConnect;
exports.db = db;
