const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("connected to db");
    })
    .catch(() => {
      console.log("error to connect to db");
    });
}

module.exports = connectToDb;
