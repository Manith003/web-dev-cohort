const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.MONGODB_CONNECT)
    .then(() => {
        console.log('connnected to db');
    })
    .catch(() => {
        console.log('error while connecting');
    });
}

module.exports = connectToDb
