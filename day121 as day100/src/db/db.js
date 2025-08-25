const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://manithkumar9042:JYNwXO2DaXNjpulb@cluster0.m3y0qo1.mongodb.net/cohort"
    )
    .then(() => {
      console.log("connected to DB");
    })
    .catch(() => {
      console.log("not connected to DB");
    });
}


module.exports = connectToDb